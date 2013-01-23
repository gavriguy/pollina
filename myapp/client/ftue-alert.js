
 


function ftue(){
       
        var ftue = $(".ftue"),  isftueOpen = true;
        ftue.addClass("animated bounceInDown");
        ftue.show();
        function bounceOutDown(){

            if (isftueOpen){
                ftue.removeClass("bounceInDown");
                ftue.addClass("bounceOutDown");
            }
            isftueOpen = false;

        }


        ftue.bind("click", function(){
           bounceOutDown();
           //alert('**');
        });
        //ftue.

        Meteor.setTimeout(function() {bounceOutDown();}, 12000);
    }


    function notification(){
       var notification = $(".notification");
       var staticNotification = $(".static-notification");

       notification.show();
       notification.vAlign();
       
       notification.removeClass("bounceOutLeft");
       notification.addClass("animated bounceInLeft");
        function tada(){
            notification.removeClass("bounceInLeft");
            notification.addClass("tada");
        }
        function bounceOutLeft(){
            notification.removeClass("tada");
            notification.addClass("bounceOutLeft");

        }

        function bounceInLeft(){
            //notification.removeClass("tada");
            staticNotification.show();
            staticNotification.addClass("animated bounceInLeft");

        }


        var tadaTO = window.setTimeout(tada, 1500),
            bounceTO = window.setTimeout(bounceOutLeft, 3000),
            bounceIn = window.setTimeout(bounceInLeft, 3300);

    }

    Meteor.setTimeout(function() {ftue();}, 500);
    Meteor.setTimeout(function() {
        var counter = 0;
        var t1points = 0;
        var team1 = Score.find({});
        var pt = team1.fetch()[0].points;
       
        $('.score').html(pt);

 
    }, 1000);


    

   
