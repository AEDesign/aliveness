

	

window.addEventListener('load', function() {
	FastClick.attach(document.body);
}, false);






// var $j = jQuery.noConflict(); 

$('documnet').ready(function() {













	function isMobile(answer) {

		if ( answer ) {

			if ( answer === 'YES' ) {
				// console.log('the browser is MOBILE');
				$('html').addClass('_MOBILE_').removeClass('_DESKTOP_').attr('data-agent', $agent);
				
				window.isMobile = true;
				
				return true;
			} else if  ( answer === 'NO' ) {
				// console.log('the browser is DESKTOP');
				$('html').removeClass('_MOBILE_').addClass('_DESKTOP_').attr('data-agent', $agent);
				
				window.isMobile = false;
				
				return false;
			}

		}

		$agent = navigator.userAgent;
		$useragents = [
			'mobile', 'blackberry', 'slurp', 'mspie', 'pocket', 'mini', 'series60', 's60', 'iphone', 'ipad', 'ipod', 'android', 'windows\sce', 'palm', 'iemobile', 'kindle', 'netfront', 'silk-accelerated', 'hpwos', 'webos', 'fennec', 'opera mobi', 'opera mini', 'blazer', 'dolfin', 'dolphin', 'skyfire', 'zune'
		];


		if ( !answer ) {
		
			for(var i in $useragents) {
	
				if ($agent.toLowerCase().indexOf($useragents[i]) != -1) {
	
					isMobile('YES');
					return true;
	
				} else {
	
					if ( ($(window).width() > 700) && ($(window).width() < 1024) ) {
	
						window.isTablet = true;
	
					} else if ( $(window).width() < 700 ) {
	
						isMobile('YES');
						window.isTablet = false;
						return true;
	
					} else {
	
						isMobile('NO');
						window.isTablet = false;
						return false;
	
					}
	
				}
	
			}
			
		}

	}	
	isMobile();
	
	
	




























	/**
	/** Local Storage of Heart Clicks
	
		:: Dev v1.0 - Abbey Everson ::
	
	
	
		localStorage.setItem('todos', todos);
	
		function supports_html5_storage() {
		try {
		return 'localStorage' in window && window['localStorage'] !== null;
		} catch (e) {
		return false;
		}
		}
	
	
	/** •••••••••••••••••••••••••••••••••••• **/
	// if ( Modernizr.localstorage ) {
	
		var delta = 0;

		// if ( localStorage.length ) {
		
			//if ( localStorage.getItem('timestamp') ) {
            //
			//	delta = ((new Date()).getTime() - (new Date()).setTime(localStorage.getItem('timestamp'))) / 1000;
			//	console.log('timestamp delta = '+delta+'seconds');
			//	
			//}

			setTimeout(function() {
		
				for ( var i = 0, len = localStorage.length; i < len; ++i ) {

					var thisKeyValue = localStorage.getItem( localStorage.key(i) );
					console.log( '#'+i+' | key = '+localStorage.key(i)+' | '+thisKeyValue );

					// $('#'+thisKeyValue).addClass('_FAVE_');// $('section[data-id="'+thisKeyValue+'"]').addClass('_FAVE_');

		
				}
				
			}, 50);
		
		//} else {
		//
		//	console.log('the Local Storage is empty');
		//	
		//	localStorage.setItem('timestamp', (new Date()).getTime());
		//	console.log('timestamp delta NULL , now set to = '+localStorage.getItem('timestamp')+'seconds');
		//
		//}




		$('#navLinks .frontendLinks').on({
		
			click:function(e) {
			
				var _this			= $(this);
				var _thisParent		= $(this).parent();
				var thisProductId	= _this.attr('class');//.data('id');
				// console.log('product class clicked = #'+thisProductId); 
				
				
				if( 'slot_'+thisProductId in localStorage){

					console.log('removed = '+thisProductId); 
					localStorage.removeItem('slot_'+thisProductId);
					// _thisParent.removeClass('_FAVE_');

				} else {

					console.log('added = '+thisProductId); 
					localStorage.setItem('slot_'+thisProductId, thisProductId);
					// _thisParent.addClass('_FAVE_');

				}
				
				setTimeout(function() {
			
					for ( var i = 0, len = localStorage.length; i < len; ++i ) {

						var thisKeyValue = localStorage.getItem( localStorage.key(i) );
						console.log( '#'+i+' | '+thisKeyValue );
			
					}
					
				}, 50);
				
			
			}
			
		}, 'a');


		$('#rightColumn').on({
		
			click:function(e) {

				localStorage.clear();

				console.log( 'localStorage cleared!' );
				console.log( localStorage.getItem( localStorage.key(0) ) );
			
			}
			
		}, '#clearLocalStorage');

	
	// }




























	var clonedCont = $('.header-container').clone();
	var mobileNavLinks = $('nav #navLinks');
	clonedCont.appendTo(mobileNavLinks);



	/**
	/** MAIN NAV Trigger
	/** •••••••••••••••••••••••••••••••••••• **/
	$('body').on({
	
		click:function(e) {
		
			e.preventDefault();
	
			if ( $('body').hasClass('_NAV_OPEN_') ) {
			
				$('body').removeClass('_NAV_OPEN_');
				
			} else {
			
				$('body').removeClass('_SEARCH_OPEN_').addClass('_NAV_OPEN_');
				
			}	
	
		}
	
	}, 'header .menuTrigger, .menuTrigger');





























	/**
	/** Press Page Triggers
	/** •••••••••••••••••••••••••••••••••••• **/
	function closePressModal() {
	
		$('body').removeClass('_PRESS_VIEW_ON_');
		setTimeout(function(){
			$('#pressViewModal .innerScroll').html('');
		}, 150);
	
	}
	
	function setPressSize() {
	
		var theLeft = $('main').offset().left;
		var theMainW = $('main').width();
		
			var theMediaW = theMainW * 0.6;
			if(window.bWidth<500)
				theMediaW = window.bWidth;
			if(window.bWidth<1100)
				theMediaW = theMainW * 1;
			if(window.bWidth<1300)
				theMediaW = theMainW * 0.9;
			if(window.bWidth<1500)
				theMediaW = theMainW * 0.85;
			if(window.bWidth<1900)
				theMediaW = theMainW * 0.85;
			if(window.bWidth<2200)
				theMediaW = theMainW * 0.75;
			if(window.bWidth>2201)
				theMediaW = theMainW * 0.65;
		
		
		var theImgOffsetL = theLeft + ((theMainW-theMediaW) * 0.35);


		$('#pressViewModal .innerScroll img').css({
		
			width:theMediaW,
			left:theImgOffsetL,
			top:75
		
		});

	}
	
	if($('body').hasClass('cms-press'))
		$(window).resize(setPressSize);
	
	$('main#pressPage article').on({
	
		click:function(e) {
		
			e.preventDefault();
			var _this = $(this);
			var _thisArticle = _this.parent();
	
			if ( $('body').hasClass('_PRESS_VIEW_ON_') ) {
			
				closePressModal();
				
			} else {
			
				$('body').addClass('_PRESS_VIEW_ON_');
			}
			
			
			
			//setPressSize();
			var theLeft = $('main').offset().left;
			var theMainW = $('main').width();
			
			var theMediaW = theMainW * 0.6;
			if(window.bWidth<500)
				theMediaW = window.bWidth;
			if(window.bWidth<1000)
				theMediaW = theMainW * 0.2;
			if(window.bWidth<1300)
				theMediaW = theMainW * 0.4;
			if(window.bWidth<1500)
				theMediaW = theMainW * 0.6;
			if(window.bWidth<1900)
				theMediaW = theMainW * 0.85;
			if(window.bWidth<2200)
				theMediaW = theMainW * 0.8;
			if(window.bWidth>2201)
				theMediaW = theMainW * 0.7;
			
			
			
			// var theImgOffsetL = theLeft + (theMainW * 0.15);
			var theImgOffsetL = theLeft + ((theMainW-theMediaW) * 0.35);
			// console.log('theLeft='+theImgOffsetL);
			
			
			var thisSrc1 = _thisArticle.find('.second').attr('src');
			var theImg1 = $('<img src="'+thisSrc1+'" style="width:'+theMediaW+'px; left:'+theImgOffsetL+'px; top:'+75+'px;" />');
			theImg1.appendTo('#pressViewModal .innerScroll');
			
			
			var thirdCheck = _thisArticle.find('.third').length;
			
			if (thirdCheck) {
				var thisSrc2 = _thisArticle.find('.third').attr('src');
				var theImg2 = $('<img src="'+thisSrc2+'" style="width:'+theMediaW+'px; left:'+theImgOffsetL+'px; top:'+75+'px;" />');
				theImg2.appendTo('#pressViewModal .innerScroll');
			}
	
		}
	
	}, 'a');
	
	
	$('body').on({
	
		click:function(e) {
		
			e.preventDefault();
	
			if ( $('body').hasClass('_PRESS_VIEW_ON_') ) {
			
				closePressModal();
				
			} else {
			
				$('body').addClass('_PRESS_VIEW_ON_');
				
			}
	
		}
	
	}, '#pressViewModal');

























	/**
	/** Thumbnail Triggers
	/** •••••••••••••••••••••••••••••••••••• **/
	$('section#thumbnails').on({
	
		click:function() {
		
			var stageImg = $('#stage img');
			
			var _this = $(this);
			var _thisSrc = _this.find('img').attr('src');
			
			stageImg.attr('src', _thisSrc);
			
			$('section#thumbnails article').removeClass('_ON');
			_this.addClass('_ON');
		
		}

	}, 'article');
	
	setTimeout(function() {
		$('section#thumbnails article').eq(0).click();
	}, 200);

	//$('body#collectionDetail main .std section#stage').on({
	$('section#stage').on({
	
		click:function() {
		
			var stageImg = $('#stage img');
			var _this = $(this);
			var _onCell = $('section#thumbnails article._ON');
			
			if ( !_onCell.length ) {
				$('section#thumbnails article').eq(0).addClass('_ON');
			}
			
			var _onCellIdx = $('section#thumbnails article._ON').index();
			var totalCells = $('section#thumbnails article').length-1;
			
			
			var _triggerFirstCell = ( _onCellIdx > (totalCells-1) ) ? true : false ;
			
			//console.log(totalCells+' total cells  |  '+_onCellIdx+' cell idx  |  trigger first? '+_triggerFirstCell);
			
			if ( _triggerFirstCell ) {
				var _nextCell = $('section#thumbnails article').eq(0);	
			} else {
				var _nextCell = $('section#thumbnails article._ON').next();
			}
			
			var _nextCellSrc = _nextCell.find('img').attr('src');
			
			stageImg.attr('src', _nextCellSrc);
			
			$('section#thumbnails article').removeClass('_ON');
			_nextCell.addClass('_ON');
		
		}

	}, 'article');










































	/**
	/** ftNav Link Triggers
	/** •••••••••••••••••••••••••••••••••••• **/
	$('a[target="_blank"]').addClass('skip');
	$('#ftNav').on({
	
		mousedown:function(e) {
		
			var _this = $(this);
			var _thisHref = _this.attr('href');
			var _theBody = $('body');
			var _isHome = (_theBody.hasClass('front')) ? true : false;
			
			if (_isHome) {
				// location.href = _thisHref;
				// _theBody.addClass('_leaving_page_');
			}
		
		},
	
		click:function(e) {
		
			var _this = $(this);
			var isTrigger = (_this.hasClass('ftTrigger')) ? true : false;
			var _theBody = $('body');
			
			if(isTrigger) {
				
				e.preventDefault();
				e.stopPropagation();
				
				var triggerID = _this.attr('id');
				if(_theBody.hasClass('_RIGHT_PANEL_OPEN_')){
					_theBody.removeClass('_RIGHT_PANEL_OPEN_ '+triggerID);
					_this.removeClass('_ON');
				} else {
					_theBody.addClass('_RIGHT_PANEL_OPEN_ '+triggerID);
					_this.addClass('_ON');
				}
				
			}
			
			
		
		
		
		}
		
		
	}, 'a');
		
















	/**
	/** Nav Link Triggers
	/** •••••••••••••••••••••••••••••••••••• **/
	$('body').removeClass('_leaving_page_');
	$('a[target="_blank"]').addClass('skip');
	$('#navLinks').on({
	
		mousedown:function(e) {
		
			var _this = $(this);
			var _thisHref = _this.attr('href');
			var _theBody = $('body');
			var _isHome = (_theBody.hasClass('cms-home')) ? true : false;
			
			if (_isHome) {
				location.href = _thisHref;
				_theBody.addClass('_leaving_page_');
			}
		
		},
	
		click:function(e) {
		
			var _this = $(this);
			var _thisHref = _this.attr('href');
			var _thisParent = _this.parent();
			var _thisNext = _this.next();
			var _theLinks = $('#navLinks a');
			var _theDIVs = $('#navLinks div');
			var _theBody = $('body');
			var _isHome = (_theBody.hasClass('cms-home')) ? true : false;
			var _skipThis = (_this.hasClass('skip')) ? true : false;
			var _hasHash = (_this.data('hash')) ? true : false;
			function stopAll(evt) {
				evt.preventDefault();
				evt.stopPropagation();
				_theDIVs.removeClass('focus');
			}

			if ( _this.hasClass('trigger') ) {
			
				stopAll(e);
				console.log('first child for nav dd control');
				_theLinks.removeClass('_ON');
				
				if (!_thisNext.hasClass('_this_')) {
					_thisParent.addClass('_OPEN_');
					_this.addClass('_THIS_TRIGGER_');
					_thisNext.addClass('_this_ focus');
					if(_hasHash)
					window.location.hash = _this.data('hash');
				} else {
					_thisParent.removeClass('_OPEN_');
					_thisNext.removeClass('_this_');
					_this.removeClass('_THIS_TRIGGER_');
					window.location.hash = 'all';
				}
				
				if (_this.hasClass('collections') && !window.isMobile)
					location.href = _thisHref;
					
					
				if (_isHome)
					location.href = _thisHref;
				
			
			} else {
			
				if (_hasHash) {

					e.preventDefault();
					e.stopPropagation();
					stopAll(e);
					
					_theLinks.removeClass('_ON');
					_this.addClass('_ON');
					_thisParent.addClass('focus');
					_theBody.removeClass('_NAV_OPEN_');
					var thisDataHash = _this.data('hash');
					window.location = '/collections/#'+thisDataHash;
				}
				
				//if (!_skipThis)
				//	location.href = _thisHref;
			
			}
			
			
		}

	}, 'a');
















	/** =========================================================== **/
	/**	__.) Trigger a page load using the HASH
	/*			provided on page load.. skip Step 2*
	/**			because there is no need to (a) check
	/**			duplicate HASHs or to (b) append a new one..
	/** =========================================================== **/
	$(window).bind('load', function( event ){

		var url			= window.location.href;
		var hash		= location.hash.replace("#","");
	
		if (url.search("#") > 0) {
			
			//var hashOnly			= window.location.hash.split("?")[0];
			//var param				= window.location.hash.split("?")[1];
			// var cleanParam			= param.replace('-', ' ');
			// var cleanParam			= param.replace(/\s+/g, '-');
			// var cleanParam			= hash.replace(/-/g, ' '); // dash with space
			var cleanParam = hash;
			// var cleanParam			= param.replace(/ /g, '-');
			//console.log('hash = '+hashOnly+' // '+cleanParam+' | this is the parameter');


			
			if(cleanParam.length){
			
				if(cleanParam==='all'){
				
					$('body.cms-collections main .std section article').addClass('_ON_');
				
				} else {
			
					$('body.cms-collections main .std section article').addClass(function() {
					
						var _this = $(this);
						if(_this.hasClass(cleanParam)) {
							_this.addClass('_ON_').removeClass('_OFF_');
						} else {
							_this.addClass('_OFF_').removeClass('_ON_');
						}
					
					});
					
				}
			
			}

			
			setTimeout(function() {
				$(window).resize();			
			}, 10);
			
		} else {



		
		}
		
	});














	/** =========================================================== **/
	/**	__.) When the Hash Mgr has decided this is a new
	/**			HASH, let the natural 'hashchange' function
	/**			run its course.. subsequently triggering the
	/**			_triggerPage() function with the new HASH
	/** =========================================================== **/
	$(window).bind('hashchange', function( event ){
		
		var url						= window.location.href;
		var triggered_hash			= location.hash.replace('#','');

		if (window.location.hash) {
			
			if(!window.isMobile)
				$('body,html').animate({ scrollTop: 0 }, 350);
		
			/*
			var hashOnly			= triggered_hash.split("?")[0];
			var param				= window.location.hash.split("?")[1];
			// var cleanParam			= param.replace('-', ' ');
			var cleanParam			= param.replace(/-/g, ' ');
			*/
			var cleanParam = triggered_hash;
			// var cleanParam = cleanParam.replace(/-/g, ' ');			
				
			console.log('clean param='+cleanParam);

			
			
			if(cleanParam.length){
			
				if(cleanParam==='all'){
				
					$('body.cms-collections main .std section article').addClass('_ON_');
				
				} else {
			
					$('body.cms-collections main .std section article').addClass(function() {
					
						var _this = $(this);
						if(_this.hasClass(cleanParam)) {
							_this.addClass('_ON_').removeClass('_OFF_');
						} else {
							_this.addClass('_OFF_').removeClass('_ON_');
						}
					
					});
					
				}
			
			}
			
			setTimeout(function() {
				$(window).resize();			
			}, 10);
			

		} else {


		}
		
		
	});
























	/**
	/** Traverse Slides ( Manual Cycle Clicks ) - API - Unload
	/** •••••••••••••••••••••••••••••••••••• **/
	var slideClick			= $('.arws');
	$(slideClick).on({
	
		click:function(e) {

			e.preventDefault();
			e.stopPropagation();
			
			var _thisArwClick = $(this);
			
			//clearInterval(topCycle);

			$('.cycleThese').each(function(){
			
				var _this				= $(this),
					_thisID				= _this.attr('id'),
					collectionCells		= $('#'+_thisID+'.cycleThese .cell'),
					totalCells			= collectionCells.length,
					indexofViewingMe	= (  $('#'+_thisID+'.cycleThese .cell').index($('#'+_thisID+'.cycleThese .cell._ON')[0]) ),
					prevImg 			= ( indexofViewingMe - 1 ),
					nextImg 			= ( indexofViewingMe + 1 );
					
					// console.log('test='+_thisID);

				if ( _thisArwClick.hasClass('prev') ) {

					if (indexofViewingMe = 0) {

					} else {
						$('#'+_thisID+'.cycleThese .cell._ON').addClass('_OFF').removeClass('_ON');
						$('#'+_thisID+'.cycleThese .cell').eq(prevImg).addClass('_ON');
						setTimeout(function() { $('#'+_thisID+'.cycleThese .cell').removeClass('_OFF'); }, 1200);
					}

				} else {
					
					totalCells = totalCells-1;
					if (indexofViewingMe < (totalCells)) {
					
						$('#'+_thisID+'.cycleThese .cell._ON').addClass('_OFF').removeClass('_ON');
						$('#'+_thisID+'.cycleThese .cell').eq(nextImg).addClass('_ON');
						setTimeout(function() { $('#'+_thisID+'.cycleThese .cell').removeClass('_OFF'); }, 1200);

					} else {
						$('#'+_thisID+'.cycleThese .cell._ON').addClass('_OFF').removeClass('_ON');
						$('#'+_thisID+'.cycleThese .cell').eq(0).addClass('_ON');
						setTimeout(function() { $('#'+_thisID+'.cycleThese .cell').removeClass('_OFF'); }, 1200);
					}
				
				}
			
			});
			
			// hdrCycleTxtSizing();

			
		}
		
	});	
	
	//if(   ($('body').hasClass('front'))      ){
		
		window.topCycle = setInterval(function(){
		
			// if(  (!$('body').hasClass('_pause_cycle'))  &&  (window.scrollTop<550)  )
				slideClick[0].click();
		
		}, 4000);
		
	//}
	
	
	$('body').on({
	
		mouseenter:function(){ $('body').addClass('_pause_cycle') },
		mouseleave:function(){ $('body').removeClass('_pause_cycle') },
		
	}, '.slideshow .inner, #arrows');






























	/**
	/** resizing Function & Triggers
	/** •••••••••••••••••••••••••••••••••••• **/
	function footerSet() {
	
		//if(window.isMobile)
		//	return false;
	
		window.bHeight = $('#bHeight').height();//$(document).height();
		window.footerFloor = $('#floor').position().top;
	
		//var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
		//var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)	
	
		//var winHeight = $(window).height();
		//var footerTop = $('footer').position().top;
		//var htmlHeight = $('html').height();
		//var mainHeight = $('main').outerHeight(true);
		//var mainHeight = $('main').height();
		//console.log('mainHeight= '+mainHeight+'  |  winHeight= '+h);
		
		if ( window.footerFloor <= window.bHeight ) {
			$('body').addClass('fixedFooter');
		} else {
			$('body').removeClass('fixedFooter');
		}

	}
	footerSet();
	setTimeout(function() {
		footerSet();
	}, 50);
	setTimeout(function() {
		footerSet();
	}, 150);
	//setTimeout(function() {
	//	footerSet();
	//}, 250);
	//setTimeout(function() {
	//	footerSet();
	//}, 500);
	//setTimeout(function() {
	//	footerSet();
	//}, 1000);

	
	$('footer').on({
	
		mouseenter:function(){
		
			sizeMediaCols();
			footerSet();
		
		}
	
	});











	window.setProdImgAspect = 0.6666666666666667;
	
	window.addEventListener("orientationchange", function() {
		$('body').removeClass('_fixed_media_freeze_');
	}, false);		











	
	var thisWindow = $(window);
	thisWindow.scrollTop(1);
	thisWindow.scroll(function(){
		window.scrollTop = thisWindow.scrollTop();
		// console.log('sTop ='+window.scrollTop);
	});
	
	$(window).resize(function() {

		window.bHeight = $('#bHeight').height();//$(document).height();
		window.bWidth = $('#floor').width();//$(document).width();
		window.footerFloor = $('#floor').position().top;
		//console.log('bHeight = '+window.bHeight+'  | footer floor ='+window.footerFloor);
	
		footerSet();
		
	});	
	
	$(window).resize();








//http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
$(document).keydown(function(e) {

    if( (e.which == 83 && e.metaKey)  ||  (e.which == 83 && e.ctrlKey) ) {
        
		e.preventDefault();
		$('body').addClass('_SEARCH_OPEN_');
		$('body,html').animate({ scrollTop: 0 }, 400, function(){
			$('input#search').focus();
		});

    }
	
    if(e.which == 27) {
	
		$('body').removeClass('_SEARCH_OPEN_ _SHOW_MORE_DETAILS_ _SHOW_SIZE_GUIDE_ _SIGNUP_OPEN_');
		
    }
	
});



 function displayKeyCode(evt)
 {
	var textBox = getObject('txtChar');
	 var charCode = (evt.which) ? evt.which : event.keyCode
	 textBox.value = String.fromCharCode(charCode);
	 if (charCode == 8) textBox.value = "backspace"; //  backspace
	 if (charCode == 9) textBox.value = "tab"; //  tab
	 if (charCode == 13) textBox.value = "enter"; //  enter
	 if (charCode == 16) textBox.value = "shift"; //  shift
	 if (charCode == 17) textBox.value = "ctrl"; //  ctrl
	 if (charCode == 18) textBox.value = "alt"; //  alt
	 if (charCode == 19) textBox.value = "pause/break"; //  pause/break
	 if (charCode == 20) textBox.value = "caps lock"; //  caps lock
	 if (charCode == 27) textBox.value = "escape"; //  escape
	 if (charCode == 33) textBox.value = "page up"; // page up, to avoid displaying alternate character and confusing people	         
	 if (charCode == 34) textBox.value = "page down"; // page down
	 if (charCode == 35) textBox.value = "end"; // end
	 if (charCode == 36) textBox.value = "home"; // home
	 if (charCode == 37) textBox.value = "left arrow"; // left arrow
	 if (charCode == 38) textBox.value = "up arrow"; // up arrow
	 if (charCode == 39) textBox.value = "right arrow"; // right arrow
	 if (charCode == 40) textBox.value = "down arrow"; // down arrow
	 if (charCode == 45) textBox.value = "insert"; // insert
	 if (charCode == 46) textBox.value = "delete"; // delete
	 if (charCode == 91) textBox.value = "left window"; // left window
	 if (charCode == 92) textBox.value = "right window"; // right window
	 if (charCode == 93) textBox.value = "select key"; // select key
	 if (charCode == 96) textBox.value = "numpad 0"; // numpad 0
	 if (charCode == 97) textBox.value = "numpad 1"; // numpad 1
	 if (charCode == 98) textBox.value = "numpad 2"; // numpad 2
	 if (charCode == 99) textBox.value = "numpad 3"; // numpad 3
	 if (charCode == 100) textBox.value = "numpad 4"; // numpad 4
	 if (charCode == 101) textBox.value = "numpad 5"; // numpad 5
	 if (charCode == 102) textBox.value = "numpad 6"; // numpad 6
	 if (charCode == 103) textBox.value = "numpad 7"; // numpad 7
	 if (charCode == 104) textBox.value = "numpad 8"; // numpad 8
	 if (charCode == 105) textBox.value = "numpad 9"; // numpad 9
	 if (charCode == 106) textBox.value = "multiply"; // multiply
	 if (charCode == 107) textBox.value = "add"; // add
	 if (charCode == 109) textBox.value = "subtract"; // subtract
	 if (charCode == 110) textBox.value = "decimal point"; // decimal point
	 if (charCode == 111) textBox.value = "divide"; // divide
	 if (charCode == 112) textBox.value = "F1"; // F1
	 if (charCode == 113) textBox.value = "F2"; // F2
	 if (charCode == 114) textBox.value = "F3"; // F3
	 if (charCode == 115) textBox.value = "F4"; // F4
	 if (charCode == 116) textBox.value = "F5"; // F5
	 if (charCode == 117) textBox.value = "F6"; // F6
	 if (charCode == 118) textBox.value = "F7"; // F7
	 if (charCode == 119) textBox.value = "F8"; // F8
	 if (charCode == 120) textBox.value = "F9"; // F9
	 if (charCode == 121) textBox.value = "F10"; // F10
	 if (charCode == 122) textBox.value = "F11"; // F11
	 if (charCode == 123) textBox.value = "F12"; // F12
	 if (charCode == 144) textBox.value = "num lock"; // num lock
	 if (charCode == 145) textBox.value = "scroll lock"; // scroll lock
	 if (charCode == 186) textBox.value = ";"; // semi-colon
	 if (charCode == 187) textBox.value = "="; // equal-sign
	 if (charCode == 188) textBox.value = ","; // comma
	 if (charCode == 189) textBox.value = "-"; // dash
	 if (charCode == 190) textBox.value = "."; // period
	 if (charCode == 191) textBox.value = "/"; // forward slash
	 if (charCode == 192) textBox.value = "`"; // grave accent
	 if (charCode == 219) textBox.value = "["; // open bracket
	 if (charCode == 220) textBox.value = "\\"; // back slash
	 if (charCode == 221) textBox.value = "]"; // close bracket
	 if (charCode == 222) textBox.value = "'"; // single quote

	 var lblCharCode = getObject('spnCode');
	lblCharCode.innerHTML = 'KeyCode:  ' + charCode;

	return false;



//	e.ctrlKey
//	e.altKey
//	e.shiftKey


 }























});//end doc ready scope