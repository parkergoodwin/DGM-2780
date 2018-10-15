var myBox = $('.col-md-3');

$( ".button" ).click(function() {
  TweenMax.staggerFrom(myBox, 1, {rotation:1080, y:-200, opacity:0, ease: Expo.easeOut}, 0.5);
});


var t = TweenMax.to(".bikePNG", 2, {x:1500, ease:Bounce.easeOut, yoyoEase:Power2.easeOut, yoyo:true, repeat:1, repeatDelay:0.1});