Score = new Meteor.Collection("score");
Alert = new Meteor.Collection("alert");

//




//


if (Meteor.isServer) {
  Meteor.startup(function () {
    if (Score.find().count() === 0) {
      var teams = [{name: "Boston", points:103}, {name: "Los Angeles", points:122}];
      for (var i = 0; i < 2; i++) {
        Score.insert({team: teams[i].name, points: teams[i].points });
      } 
    }
  });
}

if (Meteor.isClient) {
 
    



  //

Meteor.autosubscribe(function () {
  
  Alert.find().observe({
    changed: function(item) {  
      //if (counter > 20) {
        $('.poll').removeClass('poll');
        //$('.poll').css('background','url("poll.png") no-repeat');
        //
        $('.overlay1').html('<iframe src="http://admin.applicaster.com/activities/questionnaires/508958187584593c1a000259/activity?question_ids[]=50895b9c7584593c1a00025a"></iframe><div class="swipeBox"></div>');
        if (posFlag > 0){
          notification();
        }
      //}
      //counter++;
      //alert(counter);
    }
  });
  
  Score.find().observe({
    changed: function(item) {
      //console.log('points:',item.points.toString());
      var temp = item.points.toString();
      //alert(temp);
      //console.log(temp);
      changeNumber(temp);
    }
  });

});
  //


(function ($) {
// VERTICALLY ALIGN FUNCTION
$.fn.vAlign = function() {
  return this.each(function(i){
  var ah = $(this).height();
  var ph = $(this).parent().height();
  var mh = Math.ceil((ph-ah) / 2);
  $(this).css('margin-top', mh);
  });
};
})(jQuery);


//

function changeNumber(newNo) {

    // Get the current value
    var $number = $('.number'),
        oldNo = $number.text(),
        oldSplit = oldNo.split(""),
        newSplit = newNo.split(""),
        diffSplit = [];

    // Clear the number from the holder
    $number.html('');

    for (var i = 0; i < oldSplit.length; i++) {
        // Replace the number with spans wrapping each number
        $number.append('<span data-col="' + i + '">' + oldSplit[i] + '</span>');
        // See what the different between the two numbers is
        diffSplit.push(newSplit[i] - oldSplit[i]);
    }

    // Loop through and layout the spans
    for (var i = 0; i < diffSplit.length; i++) {

        // Find the current span for this digit
        var $span = $number.find('span:eq(' + i + ')');
        $span.attr('data-topFinish', $span.height() * (diffSplit[i]) * -1);

        // Layout all the span's which are needed for animation.
        if (diffSplit[i] !== 0) {
            var direction = diffSplit[i] > 0 ? 1 : -1;
            var n = Math.abs(diffSplit[i]);

            for (var j = 1; j < n + 1; j++) {
                var top = $span.position().top + $span.height() * j * direction;
                var left = $span.position().left;
                var topFinish = top - n * $span.height() * direction;

                $number.append('<span data-col="' + i + '" data-topFinish="' + topFinish + '" style="position: absolute; top:' + top + 'px; left:' + left + 'px;">' + (j * direction + (+oldSplit[i])) + '</span>');
            }
        }
    }

    // Animate all the spans up and down as required
    $number.find('span').each(function() {
        var finish = $(this).attr('data-topFinish') + 'px';
        $(this).animate({
            top: finish
        }, function() {
            $number.html(newNo);
        });
    });
}




//



$(function()
      {     
        //Enable swiping...
        
        $("body").swipe( {
          //Generic swipe handler for all directions
          swipe:function(event, direction, distance, duration, fingerCount) {





            if (direction == "right") {
              direction = "left";
            }
            else {
              direction = "right";
            }
            sliderChecker(direction);


          },
          //Default is 75px, set to 0 for demo so any distance triggers swipe
          threshold:20
        });
      });




//


//

      


    //
var tabletWidth = 961,
        sliderUL = $(".slider UL"),
        posFlag = 1;
        lockAmin = false;


    $().ready(function(){
        var fullWidth  = $(document).width();

        //prevents overlay from moving on touch swipe
        document.ontouchmove = function(e){ e.preventDefault(); };

        widgetLayout();

    });

    function widgetLayout(){
        var fullWidth  = $(document).width(),
            fullHeight = $(document).height(),
            sliderUL = $(".slider UL");

        sliderUL.css({
            "width": fullWidth*4,
            "left": -fullWidth
        });
        $(".slider LI").css({
            "width": fullWidth,
            "height": fullHeight,
        });
        
        sliderUL.addClass("transition");
        $(".statistics").vAlign();
        $(".statistics2").vAlign();
         $(".poll").vAlign();


    }


    function sliderTransition(direction){
        if (lockAmin) return;

        var fullWidth  = $(document).width(),
            sliderUL = $(".slider UL");
            sign = 1,
            target = 1;


        if (direction == "right"){
            sign = -1;
        }

        target = parseInt(sliderUL.css("left")) + sign * fullWidth;
        console.log(target);
        lockAmin = true;
        sliderUL.animate({
            left: target
        }, 500, function(){
            console.log("end animation");
            lockAmin = false;
            posFlag = posFlag+sign*-1;
            if (posFlag == 0) {
              $('.static-notification').hide();
            }
        });
    }
    function sliderChecker(direction) {
        var sign = 1;
         if (direction == "right"){
            sign = -1;
        }
        if (((posFlag > 0) && (direction == "left")) || ((posFlag < 3) && (direction == "right"))) {
            sliderTransition(direction);
            //posFlag = posFlag+sign*-1;
            console.log(posFlag, direction);
        };

    }

    $(window).resize(function() {
        widgetLayout();
    });


    //

     //vaglign data
       


  Template.hello.greeting = function () {
    return "Welcome to myapp12.";
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });

  //
/*
  Meteor.publish("score", function(){
    Score.find();
  });
*/
}



Meteor.methods({
  sendNotification: function() {
    //Alert.insert({timestamp: 'a'});
//

  var alertID = '';
    var alert1 = Alert.find({}, {limit: 1});
    alert1.forEach(function (post) {
      alertID = post._id;
    });

    Alert.update({_id: alertID}, {$inc: {points: 2}})

  },


  updateScroe: function() {
    var teamID = '';
    var team1 = Score.find({}, {limit: 1});
    team1.forEach(function (post) {
      console.log(post._id);
      teamID = post._id;
    });
    Score.update({_id: teamID}, {$inc: {points: 2}})

  }
});

//




