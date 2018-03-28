var Animation = (function() {
	var lien_apropos = $('.page1__lien a:first-of-type'),
	img_page1 = $('.page1__photo img');

	img_page1.hover(function () {lien_apropos.addClass('hover_lien_apropos');}, function () {lien_apropos.removeClass('hover_lien_apropos')});
})();
