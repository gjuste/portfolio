var PageAnimationTransitions = (function() {

  var $main = $( '#pt-main' ),
    $pages = $main.children( 'div.pt-page' ),
    $pageAnimation = $( '.pageAnimation' ),
    $return = $('.return-to-index'),
    nb_page = null,
    animcursor = 1,
    pagesCount = $pages.length,
    current = 0,
    isAnimating = false,
    endCurrPage = false,
    endNextPage = false,
    animEndEventNames = {
      'WebkitAnimation' : 'webkitAnimationEnd',
      'OAnimation' : 'oAnimationEnd',
      'msAnimation' : 'MSAnimationEnd',
      'animation' : 'animationend'
    },
    // animation end event name
    animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
    // support css animations
    support = Modernizr.cssanimations;
  
  function init() {

    $pages.each( function() {
      var $page = $( this );
      $page.data( 'originalClassList', $page.attr( 'class' ) );
    } );

    $pages.eq( current ).addClass( 'pt-page-current' );

    $pageAnimation.on( 'click', function(event) {
      nb_page = $(event.target).attr('data-page');
      animcursor = 1;
      nextPage( animcursor );
    });

    $return.on('click', function() {
      animcursor = 2;
      nextPage( animcursor );
    });

  }

  function nextPage( options ) {
    var animation = (options.animation) ? options.animation : options;

    if( isAnimating ) {
      return false;
    }

    isAnimating = true;

    var $currPage = $pages.eq( current );

    if(nb_page){
      if( nb_page <= pagesCount ) {
        current = nb_page-1;
        nb_page = null;
      }
      else {
        current = 0;
      }
    }
    else{
      current = 0;
    }

    var $nextPage = $pages.eq( current ).addClass( 'pt-page-current' ),
    outClass = '', inClass = '';

    switch( animation ) {

      case 1:
        outClass = 'pt-page-scaleDown';
        inClass = 'pt-page-scaleUpDown pt-page-delay300';
        break;
      case 2:
        outClass = 'pt-page-scaleDownUp';
        inClass = 'pt-page-scaleUp pt-page-delay300';
        break;
    }

    $currPage.addClass( outClass ).on( animEndEventName, function() {
      $currPage.off( animEndEventName );
      endCurrPage = true;
      if( endNextPage ) {
        onEndAnimation( $currPage, $nextPage );
      }
    } );

    $nextPage.addClass( inClass ).on( animEndEventName, function() {
      $nextPage.off( animEndEventName );
      endNextPage = true;
      if( endCurrPage ) {
        onEndAnimation( $currPage, $nextPage );
      }
    } );

    if( !support ) {
      onEndAnimation( $currPage, $nextPage );
    }

  }

  function onEndAnimation( $outpage, $inpage ) {
    endCurrPage = false;
    endNextPage = false;
    resetPage( $outpage, $inpage );
    isAnimating = false;
  }

  function resetPage( $outpage, $inpage ) {
    $outpage.attr( 'class', $outpage.data( 'originalClassList' ) );
    $inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' pt-page-current' );
  }

  init();

  return { 
    init : init,
    nextPage : nextPage,
  };

})();