var Animation = (function() {
	var lien_apropos = $('#page1__lien a:first-of-type'),
	img_page1 = $('#page1__photo img');

	$('#page1__photo img').hover(function () {$('#page1__lien a:first-of-type').addClass('hover_lien_apropos');}, function () {$('#page1__lien a:first-of-type').removeClass('hover_lien_apropos')});
})();