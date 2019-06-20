import 'bootstrap';
import './styles/application.scss';

// const toggleExpansion = (event) => {
// 	if ('#' + event.target.id !== event.data.collapse.collapse) {
// 		console.log('mis matched collapse/collapser event');
// 	} else {
// 		document.querySelector(event.data.collapse.collapser).classList.toggle('expanded');
// 	}
// };

// const collapses = [
// 	{ collapse: '#skillsCollapse', collapser: '#skillsTitle' },
// 	{ collapse: '#collapseOne', collapser: '#collapserOne' },
// 	{ collapse: '#collapseTwo', collapser: '#collapserTwo' },
// 	{ collapse: '#collapseThree', collapser: '#collapserThree' },
// 	{ collapse: '#RSSHubCollapse', collapser: '#RSSHubController' },
// 	{ collapse: '#PortfolioCollapse', collapser: '#PortfolioController' }
// ];
// collapses.forEach((collapse) => {
// 	$(collapse.collapse).on('show.bs.collapse hide.bs.collapse', { collapse }, toggleExpansion);
// });

const toggleExpanded = (event) => {
	// console.log(event.target, event.target.tagName);
	if (event.target.tagName === 'H3' || event.target.tagName == 'H4') {
		event.target.classList.toggle('expanded');
	} else {
		event.target.querySelector('h3, h4').classList.toggle('expanded');
	}
};

document.querySelectorAll('.btn-link').forEach((expandable) => {
	expandable.addEventListener('click', toggleExpanded);
});

//enable popovers
$(function() {
	$('[data-toggle="popover"]').popover({
		trigger: 'focus',
		placement: 'bottom'
	});
});
