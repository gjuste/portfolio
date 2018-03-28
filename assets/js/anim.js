var Animation = (function() {
	var lien_apropos = $('.page1__lien a:first-of-type'),
	img_page1 = $('.page1__photo img'),
	taille=12;

	img_page1.hover(function () {lien_apropos.addClass('hover_lien_apropos');}, function () {lien_apropos.removeClass('hover_lien_apropos')});

	function page_text_anim() {
		$('.page2__title').addClass('page__entrance');
		$('.page3__title').addClass('page__entrance');
		$('.page4__title').addClass('page__entrance');
		$('.cv__btn a').addClass('btn__entrance');
	}

	function class_remove() {
		$('.page2__title').removeClass('page__entrance');
		$('.page3__title').removeClass('page__entrance');
		$('.page4__title').removeClass('page__entrance');
		$('.cv__btn a').removeClass('btn__entrance');
	}

	$('.plus').click(function(){
		if (taille<16) {
			taille=taille+1;
			$('html').css('font-size',taille+'px');
		}
	})
	$('.moins').click(function(){
		if (taille>8) {
			taille=taille-1;
			$('html').css('font-size',taille+'px');
		}
	})

	return {
		page_text_anim : page_text_anim,
		class_remove : class_remove
	}
})();
