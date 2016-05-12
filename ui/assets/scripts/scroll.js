(function(){
  var scrollTop = 0;

  var _winW = 0; // width of the window
  var _winH = 0;
  var smallScreen; // boolean for < 1000px
  var itemTops; // array holds item top position

  var isTouchDevice;
  var covers = document.querySelectorAll('.Cover');
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
    // var oldScrollTop = scrollTop;
    // scrollTop = document.body.scrollTop;

    // if(oldScrollTop != scrollTop){
    //   var nextMove = scrollTop - oldScrollTop;
    //   shiftCovers();
    // }
  }

  function setCoverTop(argument) {
    // body...
  }

  function shiftCovers() {
    for(var i=0;i<covers.length;i++){
      var cover = covers[i];
      // var newTop = Math.floor(cover.parentNode.parentNode.getBoundingClientRect().top + (scrollTop/20))
      // console.log(cover.parentNode.parentNode.getBoundingClientRect().top - (scrollTop/15))
      // cover.style.WebkitTransform = 'translate3d(0,'+ newTop + 'px,0)'
    }
  }

  function resizeHandler () { // Set the size of images and preload them
    _winW = window.width;
    _winW = window.height;

    if(_winW > 1000){
      smallScreen = false;
    }else{
      smallScreen = true;
    }
    shiftCovers();
  }
})()
