const functions = require("firebase-functions");
const axios = require("axios");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

config = functions.config();

const to_query = params => {
  return Object.keys(params)
    .map(key => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    })
    .join("&");
};

const postTrello = (firstName, lastName, company, email, introduction) => {
  const desc = `${introduction}\n${firstName} ${lastName}\n${email}`;
  const name = company;
  const params = {
    key: config.trello.key,
    token: config.trello.token,
    idList: config.trello.list.id,
    name,
    desc
  };
  const queryString = to_query(params);
  return axios.post("https://api.trello.com/1/cards?" + queryString, {});
};

const postSlack = company => {
  const data = { text: `New Lead: ${company}` };
  return axios.post(config.slack.slack_url, data);
};

exports.contactHenry = functions.https.onRequest((req, res) => {
  const firstName = req.body.first_name;
  const lastName = req.body.last_name;
  const company = req.body.company;
  const email = req.body.email;
  const introduction = req.body.introduction;
  const trello = postTrello(firstName, lastName, company, email, introduction);
  const slack = postSlack(company);
  axios
    .all([trello, slack])
    .then(
      axios.spread((trello, slack) => {
        res.send("OK");
        return [trello, slack];
      })
    )
    .catch(err => {
      console.log(err);
      console.log(err.body);
      res.send("Not OK");
    });
});
