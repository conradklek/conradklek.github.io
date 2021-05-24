
var CASTER = CASTER || {};

(function($){

	// USE STRICT
	"use strict";
        
        
        CASTER.header = {
            
                init: function() {       
                   
                    CASTER.header.menuItemTrigger();              
                    CASTER.header.hamburgerTrigger();                 
                    CASTER.header.dropdownInvert();               
                    CASTER.header.onePageScroll();
                    CASTER.header.customPageScroll();
                    CASTER.header.goToTop();                 
                    CASTER.header.initHeadsUp();
                    CASTER.header.setSiteContentHeight();
                    
                },                 
                
                menuItemTrigger: function() {
                    
                    if( headerEl.hasClass( 'left-sidebar-menu' ) || headerEl.hasClass( 'left-hamburger-menu' ) || headerEl.hasClass( 'fullscreen-hamburger-menu' ) || windowWidth < 991 ) {   
                        
                        $( '#top-menu' ).find( 'li.has-children > a' ).off( 'click' );
                    
                        $( '#top-menu' ).find( 'li.has-children > a' ).on( 'click', function( e ) {

                            $( this ).closest( 'li' ).siblings().find( 'ul.sub-menu' ).slideUp();
                            $( this ).closest( 'li' ).siblings().removeClass( 'active' );
                            $( this ).closest( 'li' ).children( 'ul.sub-menu' ).slideToggle();
                            $( this ).closest( 'li' ).toggleClass( 'active' );
                            
                            return false;
                        });
                    }
                    
                },          
                
                initHeadsUp: function() {
                    
                    if( headerEl.hasClass( 'sticky' ) ) {
                        
                       headsup({ duration: 0.3, easing: 'ease', delay: 0 });
                    }
                
                },    
                
                hamburgerTrigger: function() { 
            
                    if( hamburger_trigger.length > 0 ) { 

                        hamburger_trigger.on( 'click', function() {    

                            if( headerEl.hasClass( 'fullscreen-hamburger-menu' ) && windowWidth > 991 ) {

                                var side_menu_selector   =  '#masthead.site-header #site-navigation .menu > li';    
                                var main_navigation_wrap =  '.main-navigation-wrap';  
                                var contact_info_wrap    =  '.contact-info-wrap';   
                                    
                                body.toggleClass( 'fullscreen-hamburger-menu-acive' );

                                $( main_navigation_wrap ).toggleClass( 'fullscreen-hamburger-menu-open' );

                                navigationEl.toggleClass( 'display-menu' );
                                $( this ).toggleClass( 'open' ); 

                                if( $( this ).hasClass( 'open' ) ) {

                                    gsap.timeline().set( side_menu_selector, { y:50, opacity:0 } )
                                        .set( main_navigation_wrap, { height:0 } )
                                        .set( contact_info_wrap, { opacity:0 } )
                                        .to( main_navigation_wrap, { height:"100%", visibility:"visible", opacity:1, ease:Power2.easeOut  } )
                                        .to( side_menu_selector, { y:0, opacity:1, ease:Power2.easeOut, stagger: 0.04  } )
                                        .to( contact_info_wrap, { opacity:1, ease:Power2.easeOut } );
                                        
                                }
                                else {  

                                    var subMenus = $( '#top-menu ul.sub-menu' );

                                    if( subMenus.length  > 0 ) {

                                        subMenus.slideUp( "fast", function() {

                                            gsap.timeline()
                                                .to( contact_info_wrap, { duration:0.2, opacity:0, ease:Power2.easeIn } )
                                                .to( side_menu_selector, { duration:0.2, opacity:0, ease:Power2.easeIn, stagger: 0.04, clearProps:"opacity,transform"  } )
                                                .to( main_navigation_wrap, { duration:0.4, height:0, ease:Power2.easeOut, clearProps:"visibility,opacity,transform"  } );

                                        });

                                    }
                                    else {

                                        gsap.timeline()
                                        .to( contact_info_wrap, { duration:0.2, opacity:0, ease:Power2.easeIn } )
                                        .to( side_menu_selector, { duration:0.2, opacity:0, ease:Power2.easeIn, stagger: 0.04, clearProps:"opacity,transform"  } )
                                        .to( main_navigation_wrap, { duration:0.4, height:0, ease:Power2.easeOut, clearProps:"visibility,opacity,transform"  } );

                                    }

                                
                                }      

                            } 
                            else if( headerEl.hasClass( 'left-hamburger-menu' ) && windowWidth > 991 ) {

                                var side_menu_selector =  '#masthead.site-header #site-navigation .menu > li';                             

                                $( this ).toggleClass( 'open' );     
                                navigationEl.toggleClass( 'display-menu' );    

                                if( $( this ).hasClass( 'open' ) ) {

                                    gsap.timeline().set( side_menu_selector, { y:25, opacity:0 } )
                                        .to( navigationEl, { left:0, opacity:1, ease:Power2.easeOut  } )
                                        .to( side_menu_selector, { y:0, opacity:1, ease:Power2.easeOut, stagger: 0.04  } );  
                                }
                                else {

                                    var subMenus = $( '#top-menu ul.sub-menu' );

                                    if( subMenus.length  > 0 ) {

                                        subMenus.slideUp( "fast", function() {
                                            
                                            gsap.timeline().to( side_menu_selector, { duration:0.1,  opacity:0, ease:Power2.easeIn, stagger: 0.04, clearProps:"opacity,transform" } )
                                                .to( navigationEl, { duration:0.2, left:-350, opacity:0, ease:Power2.easeIn, clearProps:"opacity,transform,left" } );                                                                               

                                        });

                                    }
                                    else {

                                        gsap.timeline().to( side_menu_selector, { duration:0.1,  opacity:0, ease:Power2.easeIn, stagger: 0.04, clearProps:"opacity,transform" } )
                                            .to( navigationEl, { duration:0.2, left:-350, opacity:0, ease:Power2.easeIn, clearProps:"opacity,transform,left" } );                

                                    }

                                }  

                            }
                            else {       
                                
                                var side_menu_selector =  '#masthead.site-header #site-navigation .menu > li';     
                             
                                $( this ).toggleClass( 'open' );       
                                
                                if( $( this ).hasClass( 'open' ) ) {
                                    
                                    gsap.timeline().to( navigationEl, { duration:0.3, visibility:"visible", opacity:1, ease:Power2.easeOut } )
                                        .to( side_menu_selector, { duration:0.3, opacity:1, ease:Power2.easeOut, stagger: 0.04  } );               
                                }
                                else {

                                    var subMenus = $( '#top-menu ul.sub-menu' );

                                    if( subMenus.length  > 0 ) {

                                        subMenus.slideUp( "fast", function() {

                                            gsap.timeline().to( side_menu_selector, { duration:0.1, opacity:0, ease:Power2.easeIn, stagger: 0.04, clearProps:"opacity"  } )
                                                .to( navigationEl, { duration:0.1, opacity:0, ease:Power2.easeIn, clearProps:"visibility,opacity" } );                                        
                                        
                                        });
                                        
                                    }
                                    else {
                                        
                                        gsap.timeline().to( side_menu_selector, { duration:0.1, opacity:0, ease:Power2.easeIn, stagger: 0.04, clearProps:"opacity"  } )
                                        .to( navigationEl, { duration:0.1, opacity:0, ease:Power2.easeIn, clearProps:"visibility,opacity" } );                                        

                                    }
                                
                                }

                            }

                            return false; 

                        });

                    }       

                },                   
                
                dropdownInvert: function() {
                    
                    if( windowWidth > 991 ) {  
                    
                        var standard_menu = $( '#masthead.standard #top-menu' );                          
                        
                        standard_menu.find( 'ul[class*=invert-dropdown]' ).removeClass( 'invert-dropdown' );

                        var subMenus = standard_menu.find( 'ul' );                        

                        subMenus.css( 'display', 'block' ); 

                        subMenus.each( function ( index, element ) {                           

                            var menuDropdown    = $( element );
                            var windowWidth     = $( window ).width();                

                            var dropdownOffset  = menuDropdown.offset();
                            var dropdownWidth   = menuDropdown.width();
                            var dropdownLeft    = dropdownOffset.left;                                                                                          
                          
                            if ( windowWidth - ( dropdownWidth + dropdownLeft ) < 50 ) {                   
                                menuDropdown.addClass( 'invert-dropdown' );
                            }

                        });               

                        subMenus.css( 'display', '' ); 
                    
                    }
                    
                },               

                onePageScroll: function() {           
                    
                    
                    $( navigationEl ).find( 'ul' ).on( 'click', function( e ) {                       
                 
                         if ( $( e.target ).is( 'a' ) &&  $( e.target ).attr( 'href' ).indexOf( '#' ) != -1 ) {  
                                             
                            var element = $( navigationEl ),
                                divAnchor = $( e.target ).attr('href'),
                                divScrollToAnchor = divAnchor.substring( divAnchor.indexOf( '#' ) + 1 ),
                                divScrollSpeed = element.attr('data-speed'),                               
                                divScrollEasing = element.attr('data-easing');   
                                
                            if( !divScrollSpeed ) { divScrollSpeed = 1250; }
                            if( !divScrollEasing ) { divScrollEasing = 'easeInOutExpo'; }
                            
                             if( divScrollToAnchor != '' ) {
                                
                                 element.find( 'li' ).removeClass( 'current' );
                                 element.find( 'a[href$="' + divScrollToAnchor + '"]' ).parent( 'li' ).addClass( 'current' );

                                 $( 'html,body' ).stop( true ).animate({
                                    'scrollTop': $( '#' + divScrollToAnchor ).offset().top
                                 }, Number( divScrollSpeed ), divScrollEasing );
                                 
                                 if( windowWidth < 991  ) {

                                    hamburger_trigger.toggleClass( 'open', false );
                                    navigationEl.toggleClass( 'display-menu', false );

                                }
                            }
                            
                            return false;
                            
                        }
                        
                    });                    
                    
                },
                
                customPageScroll: function() {
                    
                    
                    $( '.custom-scroll, .custom-scroll a' ).on( 'click', function() {                     
                                                      
                            var divScrollToAnchor = $( this ).attr('href'),
                                divScrollSpeed = $( this ).attr('data-speed'),                                
                                divScrollEasing = $( this ).attr('data-easing');   

                            if( !divScrollSpeed ) { divScrollSpeed = 1250; }
                            if( !divScrollEasing ) { divScrollEasing = 'easeInOutExpo'; }

                            if( $( divScrollToAnchor ).length > 0 ) {                              

                                 $( 'html,body' ).stop( true ).animate({
                                     'scrollTop': $( divScrollToAnchor ).offset().top
                                 }, Number( divScrollSpeed ), divScrollEasing );
                            }                          

                            return false;                       
                    });                    
                    
                },
                
                goToTop: function() {
                    
                    var elementScrollSpeed = goToTopBtn.attr('data-speed'),
                        elementScrollEasing = goToTopBtn.attr('data-easing');

                    if( !elementScrollSpeed ) { elementScrollSpeed = 700; }
                    if( !elementScrollEasing ) { elementScrollEasing = 'easeOutQuad'; }

                    goToTopBtn.on( 'click', function() {
                        $('body,html').stop(true).animate({
                            'scrollTop': 0
                        }, Number( elementScrollSpeed ), elementScrollEasing );
                        return false;
                    });
                },
                
                onePageCurrentSection: function() {
                    
                    var currentOnePageSection = '';      
                    var headerHeight = navigationEl.outerHeight();

                    pageSection.each( function( index ) {                        
                        
                        var h = $(this).offset().top;
                        var y = $ ( window ).scrollTop();
                        var offsetScroll = headerHeight;
                      
                        if ( $(this).attr('id') != undefined && 
                                y + offsetScroll >= h && y < h + $(this).height() && 
                                $(this).attr('id') != currentOnePageSection ) {

                            currentOnePageSection = $(this).attr('id');                         
                        }

                    });

                    return currentOnePageSection;                    
                },
                
                onepageScroller: function() {
                    
                    var currentOnePageSection = CASTER.header.onePageCurrentSection();
                    
                    if ( currentOnePageSection !== '' ) { 
                       
                       navigationEl.find( 'li' ).removeClass( 'current' );
                       navigationEl.find( 'a[href$="#' + currentOnePageSection + '"]' ).parent( 'li' ).addClass( 'current' );
                          
                    }
                    
                },                           
                
                setSiteContentHeight: function() {
                    
                    var windowHeight = $( window ).height();
                    var headerHeight = headerEl.outerHeight( true );
                    var footerHeight = $( '#footer' ).outerHeight( true );
                    
                    var site_content_height = windowHeight - ( headerHeight + footerHeight );

                    if( windowWidth > 992 ) {                    
                        $( '#content' ).css( 'min-height', site_content_height );
                    }
                    else {
                        $( '#content' ).css( 'min-height', '' );
                    }
                    
                },          
            
        };       
        
        CASTER.slider = {            
            
            init: function( element ) {
                
                var sliderContainer = element || $( '.swiper-container' );                    
                
                sliderContainer.each( function() {
                    
                    CASTER.slider.initializeSlider( this );
                   
                });

                var widgetPortfolioSlider = $( '#widget-portfolio-swiper-slider' );              

                if( widgetPortfolioSlider.length > 0 ) {

                    if( widgetPortfolioSlider.hasClass( 'single-project' ) ) {
                        CASTER.slider.initializePortfolioSingleSlider( widgetPortfolioSlider );
                    }
                    else if( widgetPortfolioSlider.hasClass( 'fullscreen-projects' ) ) {
                        CASTER.slider.initializePortfolioFullScreenSlider( widgetPortfolioSlider );
                    }
                    else {
                        CASTER.slider.initializePortfolioMultiSlider( widgetPortfolioSlider );
                    }
                }               

                var widgetPortfolioCarousel = $( '#widget-portfolio-swiper-carousel' );              

                if( widgetPortfolioCarousel.length > 0 ) {
                    CASTER.slider.initializePortfolioCarousel( widgetPortfolioCarousel );
                }

                var widgetPortfolioSplitSlider = $( '#widget-portfolio-split-slider' );              

                if( widgetPortfolioSplitSlider.length > 0 ) {
                    CASTER.slider.initializePortfolioSplitSlider( widgetPortfolioSplitSlider );
                }

            },           
            
            initializeSlider: function( sliderContainer ) {
                 
                var casterSwiperArgs = $( sliderContainer );  
                              
                var casterSwiper = new Swiper ( sliderContainer, {
                     
                    // Optional parameters                                      
                    init: false,               
                    
                    lazy: false,                                  
                    autoHeight: true,                  
                    loop: true,                   
                    speed: 900,  
                    
                    autoplay: {
                       delay: 5000,                       
                       disableOnInteraction: true,
                    },

                    // If we need pagination
                    pagination: {
                        el: '.swiper-pagination',
                        type: ( casterSwiperArgs.data( 'pagination-type' ) == null ) ? 'bullets' : casterSwiperArgs.data( 'pagination-type' ),
                        clickable: true,                        
                    },

                    // Navigation arrows
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },              
                    
                });
                
                casterSwiper.on( 'init', function() { 

                    casterSwiperArgs.addClass( 'caster-slider-initialized' );
                
                });
                                
                casterSwiperArgs.imagesLoaded()                
                    .done( function( instance ) {                       

                        // init Swiper
                        casterSwiper.init();
                });           
                
            },     
            
            initializePortfolioSingleSlider: function( sliderContainer ) {

                var casterSwiperArgs = $( sliderContainer );        
                
                var lazyLoad = casterSwiperArgs.data( 'lazy-load' );

                var tl;
                                             
                var casterSwiper = new Swiper ( sliderContainer, {
                     
                    // Optional parameters                                      
                    init: false,               
                    
                    lazy: lazyLoad,      
                    lazy: {
                        loadPrevNext: true,
                        loadOnTransitionStart: true
                    },                   
                    autoHeight: true,                    
                    
                    slidesPerView: 'auto',                    
                    spaceBetween: 100,                    
                    grabCursor: ( casterSwiperArgs.data( 'grab-cursor' ) == null ) ? false : casterSwiperArgs.data( 'grab-cursor' ),                    
                    loop: ( casterSwiperArgs.data( 'loop' ) == null ) ? true : casterSwiperArgs.data( 'loop' ),                    
                    allowTouchMove: true,  
				    speed: 900,                                          
                    
                    autoplay: {
                       delay: ( casterSwiperArgs.data( 'autoplay-delay' ) == null ) ? 5000 : casterSwiperArgs.data( 'autoplay-delay' ),                       
                       disableOnInteraction: ( casterSwiperArgs.data( 'disable-on-interaction' ) == null ) ? true : casterSwiperArgs.data( 'disable-on-interaction' ),
                    },                                                        
                    
                });             
                
                casterSwiper.on( 'init', function() {  
                    
                    casterSwiperArgs.addClass( 'caster-portfolio-slider-initialized' );

                    var windowHeight = $( window ).height();
                             
                    var headerHeight = headerEl.outerHeight();
                    var footerHeight = $( '#footer' ).outerHeight();                 
                    
                    var sliderHeight;

                    if( headerEl.hasClass( 'left-sidebar-menu' ) || headerEl.hasClass( 'left-hamburger-menu' ) ) {
                        sliderHeight = ( windowHeight - footerHeight );
                    }
                    else {                    
                        sliderHeight = ( windowHeight - ( headerHeight + footerHeight ) ) - 60;
                    }                   
                    
                    $( '.caster-swiper-container.portfolio-slider.single-project .swiper-wrapper' ).css( 'height', sliderHeight );                                          
                    $( '.caster-swiper-container.portfolio-slider.single-project .swiper-wrapper .swiper-slide .swiper-title-wrap' ).css( 'height', sliderHeight );                     
                
                });

                casterSwiper.on( 'resize', function () {  
                    
                    var windowHeight = $( window ).height();
                             
                    var headerHeight = headerEl.outerHeight();
                    var footerHeight = $( '#footer' ).outerHeight();                 
                    
                    var sliderHeight;
                    
                    if( headerEl.hasClass( 'left-sidebar-menu' ) || headerEl.hasClass( 'left-hamburger-menu' ) ) {
                        sliderHeight = ( windowHeight - footerHeight );
                    }
                    else {                    
                        sliderHeight = ( windowHeight - ( headerHeight + footerHeight ) ) - 60;
                    }             
                            
                    $( '.caster-swiper-container.portfolio-slider.single-project .swiper-wrapper' ).css( 'height', sliderHeight );     
                    $( '.caster-swiper-container.portfolio-slider.single-project .swiper-wrapper .swiper-slide .swiper-title-wrap' ).css( 'height', sliderHeight );                     
                
                });           

                casterSwiper.on( 'slideNextTransitionStart', function() {    

                    var activeSlideTitle = $( '.swiper-slide.swiper-slide-active .swiper-slide-item .swiper-title-wrap h1' );                  
                    var activeSlide = $( '.swiper-slide.swiper-slide-active .swiper-slide-item .swiper-title-wrap' );                       

                    tl = gsap.timeline()
                        .to( activeSlide, { duration:1, delay:0.5, backgroundColor:"rgba(0, 0, 0, 0.3)", ease:Power2.easeIn } )                                   
                        .to( activeSlideTitle, {  y:0, opacity:1, ease:Power2.easeOut }, "-=0.5" );            
                });              

                casterSwiper.on( 'slidePrevTransitionStart', function() {                          
                   
                    var activeSlideTitle = $( '.swiper-slide.swiper-slide-active .swiper-slide-item .swiper-title-wrap h1' );          
                    var activeSlide = $( '.swiper-slide.swiper-slide-active .swiper-slide-item .swiper-title-wrap' );      

                    tl = gsap.timeline()
                        .to( activeSlide, { duration:1, delay:0.5, backgroundColor:"rgba(0, 0, 0, 0.3)", ease:Power2.easeIn } )        
                        .to( activeSlideTitle, {  y:0, opacity:1, ease:Power2.easeOut }, "-=0.5" );                   
                });

                casterSwiper.on( 'slideChange', function() {

                    if( tl !== undefined ) {                  
                        tl.reverse(0);
                    }

                });   

                casterSwiper.on( 'slideChangeTransitionStart', function() {          

                    $( '.swiper-slide-active' ).find( 'video' ).each( function() {
                        $( this ).get(0).play();
                    }); 		
                
                });

                casterSwiper.on( 'slideChangeTransitionEnd', function() {            

                    $( '.swiper-slide-prev' ).find( 'video' ).each( function() {
                        $( this ).get(0).pause();
                    });
                    
                    $( '.swiper-slide-next' ).find( 'video' ).each( function() {
                        $( this ).get(0).pause();
                    });
                
                });         
                               
                if( lazyLoad ) {

                    // init Swiper
                    casterSwiper.init();

                }
                else {

                    casterSwiperArgs.imagesLoaded()                
                        .done( function( instance ) {                       

                            // init Swiper
                            casterSwiper.init();
                    });  
                }                              

            },

            initializePortfolioMultiSlider: function( sliderContainer ) {

                var casterSwiperArgs = $( sliderContainer );  
                              
                var casterSwiper = new Swiper ( sliderContainer, {
                     
                    // Optional parameters                                      
                    init: false,               
                    
                    lazy: true,         
                    lazy: {
                        loadPrevNext: true,
                        loadOnTransitionStart: true
                    },                                
                    autoHeight: true,                    
                    
                    direction: 'horizontal',
                    slidesPerView: ( casterSwiperArgs.data( 'slides-per-view' ) == null ) ? 1 : casterSwiperArgs.data( 'slides-per-view' ),                    
                    spaceBetween: ( casterSwiperArgs.data( 'space-between' ) == null ) ? 0 : casterSwiperArgs.data( 'space-between' ),                   
                    grabCursor: true,                  
                    loop: ( casterSwiperArgs.data( 'loop' ) == null ) ? true : casterSwiperArgs.data( 'loop' ),                    
				    speed: 900,                                                                                                      

                    autoplay: {
                       delay: ( casterSwiperArgs.data( 'autoplay-delay' ) == null ) ? 5000 : casterSwiperArgs.data( 'autoplay-delay' ),                       
                       disableOnInteraction: ( casterSwiperArgs.data( 'disable-on-interaction' ) == null ) ? true : casterSwiperArgs.data( 'disable-on-interaction' ),
                    },                   
                                       
                    breakpointsInverse: true,
                    
                     // Responsive breakpoints
                    breakpoints: {
                        
                        // when window width is >= 0px
                        1024: {
                            slidesPerView:  ( casterSwiperArgs.data( 'slides-per-view' ) == null ) ? 1 : casterSwiperArgs.data( 'slides-per-view' ),
                            spaceBetween:   ( casterSwiperArgs.data( 'space-between' ) == null ) ? 0 : casterSwiperArgs.data( 'space-between' ),
                        },
                        // when window width is >= 480px
                        768: {
                            slidesPerView:  ( casterSwiperArgs.data( 'tablet-slide-per-view' ) == null ) ? 1 : casterSwiperArgs.data( 'tablet-slide-per-view' ),
                            spaceBetween:   ( casterSwiperArgs.data( 'space-between' ) == null ) ? 0 : casterSwiperArgs.data( 'space-between' ),
                        },
                        // when window width is >= 768px
                        640: {
                            slidesPerView:  ( casterSwiperArgs.data( 'mobile-slide-per-view' ) == null ) ? 1 : casterSwiperArgs.data( 'mobile-slide-per-view' ),
                            spaceBetween:   ( casterSwiperArgs.data( 'space-between' ) == null ) ? 0 : casterSwiperArgs.data( 'space-between' ),
                        },
                        // when window width is >= 960px
                        320: {
                            slidesPerView:  ( casterSwiperArgs.data( 'mobile-slide-per-view' ) == null ) ? 1 : casterSwiperArgs.data( 'mobile-slide-per-view' ),
                            spaceBetween:   ( casterSwiperArgs.data( 'space-between' ) == null ) ? 0 : casterSwiperArgs.data( 'space-between' ),
                        }
                    },       
                    
                });             
                
                casterSwiper.on( 'init', function() { 

                    casterSwiperArgs.addClass( 'caster-portfolio-slider-initialized' );           

                    CASTER.slider.sliderItemInitMagnificPopup( casterSwiperArgs );
                                   
                }); 

                casterSwiper.on( 'lazyImageLoad', function ( slideEl, imageEl ) {

                    var imgOrgHeight = $( imageEl ).attr( 'height' );
                    var imgOrgWidth  = $( imageEl ).attr( 'width' );

                    var newWidth = $(slideEl).width();
                    var newHeight = ( imgOrgHeight / imgOrgWidth ) * newWidth;

                    if( newHeight !== undefined ) {

                        newHeight = Math.round( newHeight );

                        $( slideEl ).find( '.swiper-image-wrap').height( newHeight );
                    }

                });      

                casterSwiper.on( 'lazyImageReady', function ( slideEl, imageEl ) {

                    $( slideEl ).find( '.swiper-image-wrap').removeAttr( 'style' );

                });      
           
                // init Swiper
                casterSwiper.init();

            },

            initializePortfolioCarousel: function( sliderContainer ) {

                var casterSwiperArgs = $( sliderContainer );  
                              
                var casterSwiper = new Swiper ( sliderContainer, {
                     
                    // Optional parameters                                      
                    init: false,               
                    
                    lazy: true,         
                    lazy: {
                        loadPrevNext: true,
                        loadOnTransitionStart: true
                    },                                
                    autoHeight: false,                    
                    
                    direction: 'horizontal',
                    slidesPerView: ( casterSwiperArgs.data( 'slides-per-view' ) == null ) ? 1 : casterSwiperArgs.data( 'slides-per-view' ),  
                    centeredSlides: ( casterSwiperArgs.data( 'centered-slides' ) == null ) ? false : casterSwiperArgs.data( 'centered-slides' ),                  
                    spaceBetween: ( casterSwiperArgs.data( 'space-between' ) == null ) ? 0 : casterSwiperArgs.data( 'space-between' ),                          
                    loop: ( casterSwiperArgs.data( 'loop' ) == null ) ? true : casterSwiperArgs.data( 'loop' ),                    
                    speed: 900,  
                    mousewheel: ( casterSwiperArgs.data( 'mouse-wheel' ) == null ) ? true : casterSwiperArgs.data( 'mouse-wheel' ),
                  
                    autoplay: {
                       delay: ( casterSwiperArgs.data( 'autoplay-delay' ) == null ) ? 5000 : casterSwiperArgs.data( 'autoplay-delay' ),                       
                       disableOnInteraction: ( casterSwiperArgs.data( 'disable-on-interaction' ) == null ) ? true : casterSwiperArgs.data( 'disable-on-interaction' ),
                    },          

                    // If we need pagination
                    pagination: {
                        el: '.swiper-pagination',
                        type: ( casterSwiperArgs.data( 'pagination-type' ) == null ) ? 'bullets' : casterSwiperArgs.data( 'pagination-type' ),
                        clickable: true,                        
                    },

                    // Navigation arrows
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },                       
                                       
                    breakpointsInverse: true,
                    
                     // Responsive breakpoints
                    breakpoints: {
                        
                        // when window width is >= 0px
                        1024: {
                            slidesPerView:  ( casterSwiperArgs.data( 'slides-per-view' ) == null ) ? 1 : casterSwiperArgs.data( 'slides-per-view' ),
                            spaceBetween:   ( casterSwiperArgs.data( 'space-between' ) == null ) ? 0 : casterSwiperArgs.data( 'space-between' ),
                        },
                        // when window width is >= 480px
                        768: {
                            slidesPerView:  ( casterSwiperArgs.data( 'tablet-slide-per-view' ) == null ) ? 1 : casterSwiperArgs.data( 'tablet-slide-per-view' ),
                            spaceBetween:   ( casterSwiperArgs.data( 'space-between' ) == null ) ? 0 : casterSwiperArgs.data( 'space-between' ),
                        },
                        // when window width is >= 768px
                        640: {
                            slidesPerView:  ( casterSwiperArgs.data( 'mobile-slide-per-view' ) == null ) ? 1 : casterSwiperArgs.data( 'mobile-slide-per-view' ),
                            spaceBetween:   ( casterSwiperArgs.data( 'space-between' ) == null ) ? 0 : casterSwiperArgs.data( 'space-between' ),
                        },
                        // when window width is >= 960px
                        320: {
                            slidesPerView:  ( casterSwiperArgs.data( 'mobile-slide-per-view' ) == null ) ? 1 : casterSwiperArgs.data( 'mobile-slide-per-view' ),
                            spaceBetween:   ( casterSwiperArgs.data( 'space-between' ) == null ) ? 0 : casterSwiperArgs.data( 'space-between' ),
                        }
                    },       
                    
                });             
                
                casterSwiper.on( 'init', function() { 

                    casterSwiperArgs.addClass( 'caster-portfolio-slider-initialized' );  

                    casterToolTips.bindToolTips();
                    
                    var sliderHeight = '450px';

                    var desktopSliderHeight = casterSwiperArgs.data( 'slider-height' );
                    var tabletSliderHeight  = casterSwiperArgs.data( 'tablet-slider-height' );
                    var mobileSliderHeight  = casterSwiperArgs.data( 'mobile-slider-height' );

                    if( windowWidth < 768 ) {
                        sliderHeight = mobileSliderHeight;
                    }
                    else if( windowWidth < 1025 ) {
                        sliderHeight = tabletSliderHeight;
                    }
                    else {
                        sliderHeight = desktopSliderHeight;
                    }

                    if( sliderHeight != '' ) {                        
                
                        $( '.caster-swiper-container.portfolio-carousel .swiper-wrapper' ).css( 'height', sliderHeight );                                          
                        $( '.caster-swiper-container.portfolio-carousel .swiper-wrapper .swiper-image-wrap' ).css( 'height', sliderHeight );            

                        $( '.caster-swiper-container.portfolio-carousel .swiper-wrapper' ).css( 'height', sliderHeight );                                          
                        $( '.caster-swiper-container.portfolio-carousel .swiper-wrapper .swiper-image-wrap' ).css( 'height', sliderHeight );            

                    }

                    CASTER.slider.sliderItemInitMagnificPopup( casterSwiperArgs );                   
                                   
                });    
                
                casterSwiper.on( 'resize', function () { 
                    
                    var sliderHeight = '450px';

                    var desktopSliderHeight = casterSwiperArgs.data( 'slider-height' );
                    var tabletSliderHeight  = casterSwiperArgs.data( 'tablet-slider-height' );
                    var mobileSliderHeight  = casterSwiperArgs.data( 'mobile-slider-height' );

                    if( windowWidth < 768 ) {
                        sliderHeight = mobileSliderHeight;
                    }
                    else if( windowWidth < 1025 ) {
                        sliderHeight = tabletSliderHeight;
                    }
                    else {
                        sliderHeight = desktopSliderHeight;
                    }

                    if( sliderHeight != '' ) {                        
                
                        $( '.caster-swiper-container.portfolio-carousel .swiper-wrapper' ).css( 'height', sliderHeight );                                          
                        $( '.caster-swiper-container.portfolio-carousel .swiper-wrapper .swiper-image-wrap' ).css( 'height', sliderHeight );            

                        $( '.caster-swiper-container.portfolio-carousel .swiper-wrapper' ).css( 'height', sliderHeight );                                          
                        $( '.caster-swiper-container.portfolio-carousel .swiper-wrapper .swiper-image-wrap' ).css( 'height', sliderHeight );            

                    }   
                
                });           
           
                // init Swiper
                casterSwiper.init();

            },

            initializePortfolioFullScreenSlider: function( sliderContainer ) {
                 
                var casterSwiperArgs = $( sliderContainer );  

                var tl;
                              
                var casterSwiper = new Swiper ( sliderContainer, {
                     
                    // Optional parameters                                      
                    init: false,               
                    
                    lazy: true, 
                    lazy: {
                        loadPrevNext: true,
                        loadOnTransitionStart: true
                    },         

                    autoHeight: true,  
                              
                    direction: "horizontal",
                    loop: ( casterSwiperArgs.data( 'loop' ) == null ) ? true : casterSwiperArgs.data( 'loop' ),        
                    grabCursor: true,
                    resistance : true,
                    resistanceRatio: 0.5,
                    slidesPerView: 1,
                    allowTouchMove: true,  
                    speed: 900,                                 
                    
                    autoplay: {
                       delay: 5000,                       
                       disableOnInteraction: true,
                    },

                    // If we need pagination
                    pagination: {
                        el: '.swiper-pagination',
                        type: ( casterSwiperArgs.data( 'pagination-type' ) == null ) ? 'bullets' : casterSwiperArgs.data( 'pagination-type' ),
                        clickable: true,                        
                    },

                    // Navigation arrows
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },              
                    
                });
                
                casterSwiper.on( 'init', function() { 

                    casterSwiperArgs.addClass( 'caster-slider-initialized' );
                
                });

                casterSwiper.on( 'slideChangeTransitionStart', function() {          

                    $( '.swiper-slide-active' ).find( 'video' ).each( function() {
                        $( this ).get(0).play();
                    }); 		
                
                });

                casterSwiper.on( 'slideChangeTransitionEnd', function() {            

                    $( '.swiper-slide-prev' ).find( 'video' ).each( function() {
                        $( this ).get(0).pause();
                    });
                    
                    $( '.swiper-slide-next' ).find( 'video' ).each( function() {
                        $( this ).get(0).pause();
                    });
                
                });     
                
                casterSwiper.on( 'slideNextTransitionStart', function() {    

                    var activeSlideCategory = $( '.caster-swiper-container.fullscreen-projects .swiper-slide.swiper-slide-active .swiper-slide-item .swiper-title-wrap p' );                  
                    var activeSlideTitle    = $( '.caster-swiper-container.fullscreen-projects .swiper-slide.swiper-slide-active .swiper-slide-item .swiper-title-wrap h1' );                           
 
                    tl = gsap.timeline()
                        .to( activeSlideCategory, { y:0, opacity:1, delay:0.9, ease:Power2.easeOut } )                                   
                        .to( activeSlideTitle, { duration:0.4, y:0, opacity:1, ease:Power2.easeOut } );                           
                        
                });              

                casterSwiper.on( 'slidePrevTransitionStart', function() { 

                    var activeSlideCategory = $( '.caster-swiper-container.fullscreen-projects .swiper-slide.swiper-slide-active .swiper-slide-item .swiper-title-wrap p' );                  
                    var activeSlideTitle    = $( '.caster-swiper-container.fullscreen-projects .swiper-slide.swiper-slide-active .swiper-slide-item .swiper-title-wrap h1' );                           
 
                    tl = gsap.timeline()
                        .to( activeSlideCategory, { y:0, opacity:1, delay:0.9, ease:Power2.easeOut  } )                                   
                        .to( activeSlideTitle, { duration:0.4, y:0, opacity:1, ease:Power2.easeOut } );                           
                                                  
                });

                casterSwiper.on( 'slideChange', function() {

                    if( tl !== undefined ) {                  
                        tl.reverse(0);
                    }

                });   

                                
                // init Swiper
                casterSwiper.init();                     
                
            },           

            initializePortfolioSplitSlider: function( splitSliderContainer ) {
                
                var portfolioSplitSlider = splitSliderContainer;            
                
                if( portfolioSplitSlider.length > 0 && typeof $.fn.multiscroll !== 'undefined' ) {     
                    
                    portfolioSplitSlider.multiscroll({
                        
                        scrollingSpeed: 700,
                        easing: "easeInOutQuart",
                        navigation: true,
                        useAnchorsOnLoad: false,
                            
                       // Custom selectors
                        sectionSelector: '.caster-ms-section',
                        leftSelector: '.caster-ms-left',
                        rightSelector: '.caster-ms-right',     

                        onLeave: function ( index, nextIndex ) {

                            var activeRightTitleSlide = $( '.portfolio-split-slider .caster-ms-right .caster-ms-section.active .title-wrap' );  
                            var activeLeftTitleSlide  = $( '.portfolio-split-slider .caster-ms-left .caster-ms-section.active .title-wrap' );                            
                            
                            if( activeRightTitleSlide.length ) {
                               gsap.fromTo( activeRightTitleSlide, { y:-60, opacity:0}, { y:0, opacity:1, delay:0.7, ease:Power2.easeOut, duration:0.7 } );
                            }                                   

                            if( activeLeftTitleSlide.length ) {
                                gsap.fromTo( activeLeftTitleSlide, { y:60, opacity:0}, { y:0, opacity:1, delay:0.7, ease:Power2.easeOut, duration:0.7 } );
                            }                                             

                        }
                            
                    });
                }                
            },     

            sliderItemInitMagnificPopup: function( portfolioSlider ) {
                   
                var portfolioItems;

                if( portfolioSlider.hasClass( 'portfolio-carousel' ) ) {
                    portfolioItems = portfolioSlider.find( '[id^=carousel-item-video],[id^=carousel-item-audio]' );       
                }
                else {
                    portfolioItems = portfolioSlider.find( '[id^=slider-item-video],[id^=slider-item-audio]' );       
                }             

                portfolioItems.each( function () {                  

                    $( this ).magnificPopup({
                        disableOn: 700,
                        type: 'iframe',                         
                        mainClass: 'mfp-fade',   
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: false,
                    });
                        
                });                                                   
                
            },         
        
            
        };
        
        CASTER.portfolio = {

            init: function() {          
             
                var portfolioContainers = $( '[id^=portfolio-container]' );                                   
             
                portfolioContainers.each( function() {
                    
                    CASTER.portfolio.initializePortfolio( this ); 
                    
                });      
                
                var widgetPortfolioGridSections = $( '[id^=widget-portfolio-container-grid]' );                
                
                widgetPortfolioGridSections.each( function() {
                    CASTER.portfolio.initializePortfolio( this );
                });

                var widgetPortfolioListing = $( '#widget-portfolio-listing.listing-vertical' ); 
                
                if( widgetPortfolioListing.length > 0 && widgetPortfolioListing.hasClass( 'effect-fade-in-up' ) ) {
                    CASTER.portfolio.portfolioItemDisplayTypeFadeInUp( widgetPortfolioListing, '.portfolio-list' );
                }
                
            },
            
            initializePortfolio: function( portfolioContainer ) {
                
                var  portfolioGrid = $( portfolioContainer );
                
                var cubeportfolio_options =  {                    
                    filters             : '#filters-container,[id^=filters-container-subcategory]',                    
                    layoutMode          : ( portfolioGrid.data( 'layoutmode' ) == null ) ? 'grid' : portfolioGrid.data( 'layoutmode' ),
                    sortToPreventGaps   : true,
                    mediaQueries: [{
                                width: 1150,
                                cols: ( portfolioGrid.data('large-desktop' ) == null ) ? 4 : portfolioGrid.data( 'large-desktop' )
                            }, {
                                width: 800,
                                cols: ( portfolioGrid.data( 'tablet-landscape' ) == null ) ? 3 : portfolioGrid.data( 'tablet-landscape' )
                            }, {
                                width: 750,
                                cols: ( portfolioGrid.data( 'tablet-portrait' ) == null ) ? 2 : portfolioGrid.data( 'tablet-portrait' )
                            }, {
                                width: 700,
                                cols: ( portfolioGrid.data( 'mobile' ) == null ) ? 1 : portfolioGrid.data( 'mobile' )
                            }],
                    defaultFilter       : $( '#filters-container' ).data( 'defaultfilter' ),
                    animationType       : portfolioGrid.data( 'animationtype' ),
                    gapHorizontal       : ( portfolioGrid.data( 'gaphorizontal' ) == null ) ? 0 : portfolioGrid.data( 'gaphorizontal' ),
                    gapVertical         : ( portfolioGrid.data( 'gapvertical' ) == null ) ? 0   : portfolioGrid.data( 'gapvertical' ),
                    gridAdjustment      : 'responsive',
                    caption             : ( portfolioGrid.data( 'captionanimation' ) == null ) ? 'fadeIn' : portfolioGrid.data( 'captionanimation' ),
                    displayType         : ( portfolioGrid.data( 'displaytype' ) == null ) ? 'fadeIn' : portfolioGrid.data( 'displaytype' ),
                    displayTypeSpeed    : 100,
                    // lightbox
                    lightboxDelegate    : '.cbp-lightbox',
                    lightboxGallery     : true,
                    lightboxTitleSrc    : 'data-title',
                    lightboxCounter     : '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',
                    plugins             : {
                                            loadMore: {
                                                element: '#more-projects',
                                                action: portfolioGrid.data( 'loadmoreaction' ),
                                                loadItems: portfolioGrid.data( 'loadnoofitems' ),
                                            }
                                          },
                };

                // Portfolio 
                portfolioGrid.cubeportfolio( cubeportfolio_options, function() {                    
                    
                    var gridId = portfolioGrid.get(0).id;
                                      
                    if( gridId == 'portfolio-container-category' || gridId == 'portfolio-container-tag' || gridId == 'widget-portfolio-container-grid' ) {                                           
                        CASTER.portfolio.portfolioItemInitMagnificPopup( portfolioGrid );                        
                    }    
                    
                    if( gridId == 'widget-portfolio-container-grid' && portfolioGrid.data( 'layoutmode' ) == 'wide' && portfolioGrid.hasClass( 'effect-fade-in-up' ) ) {         
                        CASTER.portfolio.portfolioItemDisplayTypeFadeInUp( portfolioGrid, '.cbp-item' );
                    }
                    
                });            
                
                portfolioGrid.on( 'onAfterLoadMore.cbp', function() {
                    
                    var gridId = portfolioGrid.get(0).id;
                    
                    if( gridId == 'widget-portfolio-container-grid' ) {
                        CASTER.portfolio.portfolioItemInitMagnificPopup( portfolioGrid );              
                    }
                    
                    if( $( '.cbp-l-loadMore-link' ).hasClass( 'cbp-l-loadMore-stop' ) ) {
                        $( '.cbp-l-loadMore-noMoreLoading' ).html( portfolioGrid.data( 'button-text' ) );                          
                    }
                    
                });  
                           
            },                   
            
            portfolioItemInitMagnificPopup: function( portfolioGrid ) {
                                    
                var portfolioItems = portfolioGrid.find( '[id^=cbp-item-video],[id^=cbp-item-audio]' );                    

                portfolioItems.each( function () {                  

                    $( this ).magnificPopup({
                        disableOn: 700,
                        type: 'iframe',                         
                        mainClass: 'mfp-fade',   
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: false,
                    });
                        
                });                                                   
                
            },        

            portfolioItemDisplayTypeFadeInUp: function( portfolioGrid, portfolioItemSel ) {
                
                var portfolioItems = portfolioGrid.find( portfolioItemSel );                    
                                                        
                var portfolioAnimationsController = new ScrollMagic.Controller();                                   
               
                portfolioItems.each( function() {
                        
                    var portfolioItem = this;           
                    var fadein_tween;          
                  
                    fadein_tween = gsap.to( portfolioItem, {ease: Sine.easeOut, opacity: 1, y: 0, onComplete: function() {  fadein_tween.kill(); } } );                      
                        
                    new ScrollMagic.Scene({
                        triggerElement:  portfolioItem,     
                        triggerHook: "1",                             
                    }).setTween ( fadein_tween )
                       .addTo( portfolioAnimationsController );                   
                });
                
            },                 
                
        };
        
        CASTER.widget = {
            
            init: function() {                                   
                
                CASTER.widget.stickySidebar();
                
                CASTER.widget.imageComparison();                                             
                
                if( body.hasClass( 'single-post' ) && $( '.socials-share-links' ).length > 0 ) {                                   
                    $( '.socials-share-links a' ).socialshare();    
                }
                
                if( body.hasClass( 'single-portfolio' ) && $( '.portfolio-social-share-links' ).length > 0 ) {                                   
                    $( '.portfolio-social-share-links a' ).socialshare();    
                }

                var widgetPortfolioListingParallax = $( '#widget-portfolio-listing.listing-fullwidth-parallax' );                     
                
                if( widgetPortfolioListingParallax.length > 0 ) {   
                    CASTER.widget.initParallax( widgetPortfolioListingParallax );
                }

                CASTER.widget.initalizeProgressBar();

                CASTER.widget.initializeContactForm();
                
            },                      
                        
            stickySidebar: function() {                
               
                if ( $( '.single-portfolio .right-sidebar' ).length ) {                    
                    
                    var top_offset = 65;
                        
                    $( '.single-portfolio .right-sidebar .entry-meta' ).stick_in_parent({                      
                        offset_top: top_offset
                    });                   
                }
                
                if ( $( '.single-portfolio .left-sidebar' ).length ) {                   
                    
                    var top_offset = 65;
                        
                    $( '.single-portfolio .left-sidebar .entry-header' ).stick_in_parent({                      
                        offset_top: top_offset
                    });                   
                }
                
            },       
            
            imageComparison: function() { 
                
                var imageComparisonEl = $( '.cocoen.image-comparison' );                   
            
                imageComparisonEl.each( function() {                      
                    new Cocoen( this );
                });
            
            },     

            initParallax: function( parallaxHolder ) {

                var parallaxHolder = parallaxHolder.find( '[data-parallax-bg-image]' );

                if( parallaxHolder.length ) {

                    parallaxHolder.each( function() {

                        var parallaxElement = $( this ),
                            speed = parallaxElement.data( 'parallax-bg-speed' ) * 0.4,
                            image = parallaxElement.data( 'parallax-bg-image' );                     
                        
                        parallaxElement.css( {'background-image': 'url(' + image + ')'} );   
                        
                        parallaxElement.parallax( '50%', speed );

                    });
		        }

            },

            initializeContactForm: function() {     
                
                var contactForm = $( '#contact-form' );
                
                contactForm.on( 'submit', function( event ) {
                    
                    var action_url      = contactForm.attr( 'action' );
                    var form_process    = contactForm.find( '.form-process' );
            
                    var name_error      = contactForm.find( '.caster-cf-form-control-wrap.name span.caster-cf-not-valid-tip' );
                    var email_error     = contactForm.find( '.caster-cf-form-control-wrap.email span.caster-cf-not-valid-tip' );
                    var message_error   = contactForm.find( '.caster-cf-form-control-wrap.message span.caster-cf-not-valid-tip' );

                    var contact_success = contactForm.find( '.caster-cf-response-output.caster-cf-mail-sent-ok' );
                    var contact_failed  = contactForm.find( '.caster-cf-response-output.caster-cf-validation-errors' );

                    form_process.fadeIn();

                    name_error.removeClass( 'validation-error' );
                    email_error.removeClass( 'validation-error' );
                    message_error.removeClass( 'validation-error' );

                    contact_failed.removeClass( 'validation-error' );            
                    contact_success.removeClass( 'validated' );
          
                    // get the form data            
                    var formData = {
                        'name'   : contactForm.find( 'input[name=name]' ).val(),
                        'email'  : contactForm.find( 'input[name=email]' ).val(),               
                        'subject' : contactForm.find( 'input[name=subject]' ).val(),     
                        'message': contactForm.find( 'textarea[name=message]' ).val()
                    };

                    // process the form
                    $.ajax({
                        type: 'POST',
                        url: action_url,
                        data: formData,
                        dataType: 'json',
                        encode: true
                    })
              
                    // using the done promise callback
                    .done( function( data ) {

                        // here we will handle errors and validation messages
                        if ( !data.success ) {

                           // handle errors for name
                            if ( data.errors.name ) {
                                name_error.toggleClass( 'validation-error' );
                            }

                            // handle errors for email
                            if ( data.errors.email ) {
                                email_error.toggleClass( 'validation-error' );
                            }

                            // handle errors for message
                            if ( data.errors.message ) {
                                message_error.toggleClass( 'validation-error' );
                            }

                            // mail
                            if ( data.errors.mail_error ) {
                                contact_failed.toggleClass( 'validation-error' );
                            }                  
                        }
                        else {
                            contact_success.toggleClass( 'validated' );
                        }

                        form_process.fadeOut();

                    })            
                    .fail( function( data ) {

                        form_process.fadeOut();
                        contact_failed.toggleClass( 'validation-error' );

                    });
                    
                    event.preventDefault();
                     
                });
                
            },

            initalizeProgressBar: function() {

                console.log('Progress bar....');

                $( '.progress-bar-wrapper' ).waypoint( function( direction ) {       

                    $( '.progress-bar-wrap .progress .progress-bar' ).each( function() {       

                        var skill_value = $( this ).attr( 'aria-valuenow' ) + '%';
                        var percentage_el = $( this ).find( '.percentage' );

                        gsap.timeline().to( this, 1, { width: skill_value, ease: Power1.easeOut } )
                                       .to( percentage_el, 1, { left: skill_value, ease: Power1.easeOut } );
                    });

                }, {
                    offset: '100%'
                });
                
            }
            
        };
                      
        CASTER.documentOnResize = {

            init: function() {

                var widgetPortfolioListingParallax = $( '#widget-portfolio-listing.listing-fullwidth-parallax' ); 
                    
                windowWidth = $( window ).width();                  
                    
                CASTER.header.menuItemTrigger();   
                CASTER.header.initHeadsUp();
                CASTER.header.dropdownInvert();     
                CASTER.header.setSiteContentHeight();

                if( widgetPortfolioListingParallax.length > 0 ) {   
                    CASTER.widget.initParallax( widgetPortfolioListingParallax );
                }
                   
            }

	    };
       
        
        CASTER.documentOnReady = {           
            
            init: function() {          
                
                CASTER.header.init();                      
              
                CASTER.slider.init();                
                
                CASTER.widget.init();
                
                CASTER.documentOnReady.windowscroll();            
                
            },
            
            windowscroll: function() {             
                
                $( window ).on( 'scroll', function() {   
                     
                    if( headerEl.hasClass( 'sticky' ) ) {
                        CASTER.header.onepageScroller();
                    }
                    
                    if ( $( window ).scrollTop() > 0 ) {  
                        goToTopBtn.addClass( 'active' );
                    }
                    else {
                        goToTopBtn.removeClass( 'active' );
                    }
                    
                });
            }
    
        };

        CASTER.documentOnLoad = {

            init: function() {                
               
                CASTER.portfolio.init();                  
            },
	    };       
    
        
        document.addEventListener( 'lazybeforeunveil', function( e ) {

            var bg = e.target.getAttribute( 'data-bg' );
             
            if( bg ) {
                e.target.style.backgroundImage = 'url(' + bg + ')';
            }

        });         
        
     
        var headerEl = $( '#masthead.site-header' );
        var navigationEl = $( '#site-navigation' );      
        var hamburger_trigger = $( '#ham-trigger-wrap' );       
        var pageSection = $( 'section[data-element_type="section"]' ); 
        var goToTopBtn = $( '#gotoTop' );           
        var body = $( 'body' );                
        var windowWidth = $( window ).width();         
      
       
        
    $( document ).ready( CASTER.documentOnReady.init );    
    $( window ).load( CASTER.documentOnLoad.init );    
    $( window ).on( 'resize', CASTER.documentOnResize.init );
        
        
})(jQuery);        
