import 'bootstrap';
import './styles/application.scss';

const toggleExpansion = (event) => {
	if ('#' + event.target.id !== event.data.collapse.collapse) {
		console.log('something else is trying to toggle skillsTitle');
	} else {
		document.querySelector(event.data.collapse.collapser).classList.toggle('expanded');
	}
};

const collapses = [
	{ collapse: '#skillsCollapse', collapser: '#skillsTitle' },
	{ collapse: '#collapseOne', collapser: '#collapserOne' },
	{ collapse: '#collapseTwo', collapser: '#collapserTwo' },
	{ collapse: '#collapseThree', collapser: '#collapserThree' }
];
collapses.forEach((collapse) => {
	$(collapse.collapse).on('show.bs.collapse hide.bs.collapse', { collapse }, toggleExpansion);
});

$(function() {
	$('[data-toggle="popover"]').popover({
		trigger: 'focus',
		placement: 'bottom'
	});
});
