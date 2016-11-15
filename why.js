


confirm("We are about to know reason why you are learning code")


var text = "The reasons why I’m learning how to code are to have a tangible expression of my will.  Other reasons crossed my mind such as: money, fame and even power however,  being able to design, create, and innovate websites, Apps among other things using computer code in my own way would be my real “why” of learning how to code.The other reason that I’m learning how to code is because I would like to compose my own music using code  and I would like to show my performance to the world so they can understand that code can and will be used for many different purposes such as creating music. In that way the music melody would be my software and the computer would be my instrument.The last reason would be…. So I can be remembered after I die. The code that I wrote or composed would be in the World Wide Web available for people to read and use. Lastly, I would like to help other people..",
    soFar = "This is WHY :           ";

var visible = document.querySelector(".visible"),
    invisible = document.querySelector(".invisible");

invisible.innerHTML = text;
var t = setInterval(function(){
  soFar += text.substr(0, 1),
  text = text.substr(1);

  visible.innerHTML = soFar;
  invisible.innerHTML = text;

  if (text.length === 0) clearInterval(t);
}, 100)
