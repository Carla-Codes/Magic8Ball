function shake(){

   var ball= document.getElementById("ball")
   var messageText = document.getElementById("message")

   //remove previous message if it exists
   if(messageText != null){
    messageText.parentNode.removeChild(messageText);
   }
   
   //Make the ball shake by adding the css class
   ball.classList.add("shake");

   //Remove the shake class after it stops shaking
   setTimeout(function(){ ball.classList.remove("shake"); }, 1500);
   
   //call the fortune function to get your fortune only after 2sec
   setTimeout(function(){ getFortune(); }, 1500);
}


//generate the fortune for the ball
function getFortune(){
    //array of fortunes
    var fortunes = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes -- definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes, Signs point to yes', 'Reply hazy', 'try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Dont count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']

    //get a random fortune message message
    var fortune = fortunes[Math.floor(Math.random()*fortunes.length)];

    //display the fortune on the page
    var parent = document.getElementById("fortune");
    var newMessage = document.createElement("div");
    newMessage.setAttribute('id', "message");
    newMessage.innerHTML = "\""+fortune+"\"";
    parent.appendChild(newMessage);
}
