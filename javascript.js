$(document).ready(function() {

  var dataArray=new Array();
        dataArray[0]="../img/jandj0.jpg";
        dataArray[1]="../img/jandj1.PNG";
        dataArray[2]="../img/jandj2.JPG";
        dataArray[3]="../img/jandj3.JPG";
        dataArray[4]="../img/jandj4.JPG";
        dataArray[5]="../img/jandj5.PNG";
        dataArray[6]="../img/jandj6.PNG";
        dataArray[7]="../img/jandj7.PNG";
        dataArray[8]="../img/jandj8.PNG";
        dataArray[9]="../img/jandj9.PNG";

  var titles=new Array();
        titles[0]="I think we are the Cutest";
        titles[1]="I love our FaceTimes so much";
        titles[2]="We make so many memories <3";
        titles[3]="I love being drunk with you :)";
        titles[4]="I wouldn't rather be goofy with anyone else";
        titles[5]="You have the best boobies in the world";
        titles[6]="You're the cutest person I have ever met";
        titles[7]="I'll savor your snapchats forever <3";
        titles[8]="I love my sweaty girl";
        titles[9]="LAST ONE: I love you, and I love us <3";

  var index = 0;

  window.setInterval(function(){

  $("#image").fadeOut(1000, function(){
    document.getElementById("image").src = dataArray[index];
    $("#image").fadeIn(1000);
  });

  $("#caption").fadeOut(1000, function(){
    document.getElementById("caption").innerHTML = titles[index];
    $("#caption").fadeIn(1000);
  });

  if (index == dataArray.length-1)
      {
        index = 0;
      }
      else
      {
        index++;
      }

},6000);

  });
