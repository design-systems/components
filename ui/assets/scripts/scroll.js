(function(){
  var scrollTop = 0;

  var _winW = 0; // width of the window
  var _winH = 0;
  var smallScreen; // boolean for < 1000px
  var itemTops; // array holds item top position

  var isTouchDevice;
  var bg = document.querySelector('.Bg .Cover img');
  var bgStartY = bg.style.objectPosition.substr(bg.style.objectPosition.indexOf(' ')+1, 2);
  resizeHandler(); // Calculate sizes right away
  // EVENTS
  /////////

  window.addEventListener('resize',resizeHandler);

  window.addEventListener('touchstart',function(){
    isTouchDevice = true;
  })
  window.addEventListener('wheel',scrollHandler)
  window.addEventListener('scroll',scrollHandler)

  // FUNCTIONS
  ////////////

  // TESTING
  // setInterval(function(){
  //  window.scrollTop(window.scrollTop() + 1),1
  // })

  function scrollHandler() {
    scrollTop = document.body.scrollTop;
    shiftCover();
  }

  function setCoverTop(argument) {
    // body...
  }

  function shiftCover() {
    bg.style.webkitTransform = 'translate3d(0,'+scrollTop/3+'px,0)';
    bg.style.webkitTransitionDuration = '0s';
  }
  function replaceRange(s, start, end, substitute) {
      return s.substring(0, start) + substitute + s.substring(end);
  }
  function resizeHandler () { // Set the size of images and preload them
    _winW = window.width;
    _winW = window.height;

    if(_winW > 1000){
      smallScreen = false;
    }else{
      smallScreen = true;
    }
    shiftCover();
  }
})()
