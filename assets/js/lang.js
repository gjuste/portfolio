var lang = function() {

	var fr_bouton = $('.fr'),
	en_bouton = $('.en'),
	html_lang = $('html'),
	head_description = $('meta[name="description"]'),
	homePage_h1 = $('.pt-page-1 > h1'),
	homePage_link_presentation = $('.pt-page-1 > div > a:first-of-type'),
	homePage_link_realisation = $('.pt-page-1 > div > a:nth-child(2)'),
	homePage_link_contact = $('.pt-page-1 > div > a:last-of-type'),
	actual_lang = html_lang.attr('lang');

	if (actual_lang == undefined) {
		actual_lang = 'fr';
		html_lang.attr('lang', actual_lang);
	}

	fr_bouton.on('click', function() {
		languageChange('fr');
	});

	en_bouton.on('click', function() {
		languageChange('en');
	});

	function languageChange(askLang) {
		if (askLang !== actual_lang) {
			actual_lang = askLang;
			html_lang.attr('lang', actual_lang);

			var xhr = $.getJSON("api/lang_"+askLang+".php", function(data){
				for (var i = 0; i < data.length; i++) {
					if (data[i].balise === 'head_description') {
						head_description.attr('content', data[i].texte);
					}
					else {
						if (data[i].balise) {
							$(data[i].balise).text(data[i].texte);
						}
					}
				}
			});
		}
	}
}();