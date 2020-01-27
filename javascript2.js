$(document).ready(function() {

  var dataArray=new Array();
        dataArray[0]="../img/j0.JPG";
        dataArray[1]="../img/j1.JPG";
        dataArray[2]="../img/j2.JPG";
        dataArray[3]="../img/j3.JPG";
        dataArray[4]="../img/j4.JPG";
        dataArray[5]="../img/j5.JPG";
        dataArray[6]="../img/j6.JPG";
        dataArray[7]="../img/j7.JPG";
        dataArray[8]="../img/j8.JPG";
        dataArray[9]="../img/j9.JPG";
        dataArray[10]="../img/j10.JPG";

  var titles=new Array();
        titles[0]="Like Mother Like Son :)";
        titles[1]="Sleepy Selfies";
        titles[2]="My Evil Twin Grrrrr";
        titles[3]="A WILD DINOSAUR AHHHH";
        titles[4]="Thank you for loving me so much :)";
        titles[5]="HEHE SLEEPING BEAUTY HEHE";
        titles[6]="OOH She must be hugging someone cute...";
        titles[7]="OOPS nevermind...";
        titles[8]="I promise we'll go to Greensboro soon!!";
        titles[9]="I love our adventures :)";
        titles[10]="NSFW BUTT CHEEKS OH NO";

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
