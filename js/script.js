/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Gerardo Bilbatua
******************************************/

// Array of quote objects
var quotes = [
  {
   quote:'First, solve the problem. Then, write the code',
   source:'John Johnson',
   tags:'Strategic'
   
  },

  {
    quote:"No one in the brief history of computing has ever written a piece of perfect software. it's unlikely that you'll be the first.",
    source: 'Andy Hunt',
    citation: 'Twitter',
    year: '2019',
    tags:'Informative'    
  
  },

  {
    quote:'Before software can be reusable it first has to be usable.',
    source: 'Ralph Johnson',
    citation: 'Twitter',
    year: 2017,
    tags:'Strategic' 
  },

  {
    quote:'Everybody in this country should learn to program a computer because it teaches you how to think',
    source: 'Steve Jobs',
    citation: ' Interview',
    year: 1995,
    tags:'Motivational' 
  },
  {
    quote:'The function of a good software is to make the complex appear to be simple',
    source: 'Grady Booch',
    citation: 'Book',
    year: 2010,
    tags:'Informative' 
  },

];

//creates random numbers
function getRandomQuote(){
var rand =  Math.floor(Math.random() * (quotes.length - 0)) + 0;

return quotes[rand];

}

//creates random colors on background
function randomcolor(){
  var color = '#'; 
  var letters = ['000000','FF0000','00FF00','0000FF','FFFF00','00FFFF','FF00FF','C0C0C0']; 
  color += letters[Math.floor(Math.random() * letters.length)];
  document.getElementById('page').style.background = color; // Setting the random color on your div element.
}


//obtains properties from objects, concatenates, and displays data on index.html
function printQuote(){
var gettherandom = getRandomQuote();
var message = '<p class="quote">' + gettherandom.quote + '</p>';
message += '<p class="source">' +gettherandom.source;
if(gettherandom.citation !== undefined){
message += '<span class="citation">' + gettherandom.citation + '</span>';
}
if(gettherandom.year !== undefined){
message += '<span class="year">' + gettherandom.year + '</span>';
}
if(gettherandom.tags !== undefined){
  message += '<span class="tags">' + gettherandom.tags + '</span>';
  }

message += '</p>';


var findelement = document.getElementById('quote-box');
findelement.innerHTML = message;
randomcolor();
}


//calls print function when the button is clicked
document.getElementById('load-quote').addEventListener("click", printQuote, false);


//Automatically print random quote every 20 seconds
setInterval(printQuote,20000);