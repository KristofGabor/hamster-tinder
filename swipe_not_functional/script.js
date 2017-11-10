/* This is a custom javascript file used for the Hamster-Tinder project.
 * This a university project made by Dominik Pipic, Bence Pataki, Kristof A. Gabor
 * Goal of the project: To make a website for lonely hamsters, which helps them find a
 * partner, based on the real life social app Tinder.
 * Univeristy of Szeged, Faculty of Science and Informatics, 2017/2018 autumn term */


$(document).ready(function(event) {

/* Looks for like button press */
$("div#swipe_like").on( "click", function() {
  swipeLike();
});

/* Looks for dislike button press */
$("div#swipe_dislike").on( "click", function() {
  swipeDislike();
});


/* First profile*/
addNewProfile();




/* Function for swiping */
function swipe() {
  Draggable.create("#photo", {
    throwProps:true,

    onDragEnd: function(endX) {

      if(Math.round(this.endX) > 0 ) {
        swipeLike();
      }
      else {
        swipeDislike();
      }

      console.log(Math.round(this.endX));
      }
  });
}


/* If user swiped right*/
function swipeLike() {

  var $photo = $("div.content").find('#photo');

  var swipe = new TimelineMax({repeat:0, yoyo:false, repeatDelay:0, onComplete:remove, onCompleteParams:[$photo]});
  swipe.staggerTo($photo, 0.8, {bezier:[{left:"+=400", top:"+=300", rotation:"60"}], ease:Power1.easeInOut});

  addNewProfile();
}


/* If user swiped left*/
function swipeDislike() {

  var $photo = $("div.content").find('#photo');

  var swipe = new TimelineMax({repeat:0, yoyo:false, repeatDelay:0, onComplete:remove, onCompleteParams:[$photo]});
  swipe.staggerTo($photo, 0.8, {bezier:[{left:"+=-350", top:"+=300", rotation:"-60"}], ease:Power1.easeInOut});

  addNewProfile();
}


function remove(photo) {
  $(photo).remove();
}


function addNewProfile() {
  var names = ['Hamlet', 'Napoleon', 'Dorito', 'Hamburger', 'Beefcakes', 'Mouse', 'Churro'][Math.floor(Math.random() * 7)];
  var ages = ['1','2','3','4','5'][Math.floor(Math.random() * 5)]
    $("div.content").prepend('<div class="photo" id="photo" style="background-image:url(../img/hamster.jpg)">'
      + '<span class="meta">'
      + '<p>'+names+', '+ages+'</p>'
      + '</span>'
      + '</div>');

      swipe();
    }

});
