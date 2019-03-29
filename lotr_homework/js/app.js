console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {
  $('body').append('<section id="middle-earth"/>');
  for (i = 0; i < lands.length; i++){
    $('#middle-earth').append(`<article id = ${lands[i]}/>`).append(`<h1>${lands[i]}</h1>`);
  };
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

const makeHobbits = () => {
  $(`#The-Shire`).append(`<ul class = "hobbit"/>`);
  for (i = 0; i < hobbits.length; i++){
    $(`ul`).append(`<li class= "hobbit">${hobbits[i]}</li>`);
  };
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {
  $(`body`).append(`<div id="the-ring"/>`)
  $("li").get(0).append(`#the-ring`);
  
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
$(`#Mordor`).append(`<ul class = "baddy"/>`)
for (i = 0; i < baddies.length; i++){
  $(`ul.baddy`).append(`<li class = "baddy">${baddies[i]}</li>`);
};
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {
$('#middle-earth').append(`<aside/>`)
$('aside').append(`<ul class = "buddy"/>`);
  // 1. create an aside tag and append it to middle-earth below mordor
for (i = 0; i < buddies.length; i++){
  $(`ul.buddy`).append(`<li class = "buddy">${buddies[i]}</li>`);
};
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {
$(`ul.hobbit`).appendTo(`#Rivendell`)
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
$('li.buddy').eq(3).replaceWith(`<li class="buddy">Aragorn</li>`);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {
  $(`#middle-earth`).append(`<div id = "the-fellowship"/>`);
  $(`#the-fellowship`).append(`<h1>The Fellowship</h1>`);
  $(`ul.buddy`).appendTo('#the-fellowship');
  $(`ul.hobbit`).appendTo('#the-fellowship');
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  $('li.buddy').eq(0).replaceWith(`<li class="the-white">Gandalf the White</li>`);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {
  alert("The Horn of Gondor has been blown!");
  
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  $('li.buddy').eq(4).css("text-decoration", "line-through"); // ==> Not working, not sure why not

  $('li.baddy').eq(2).remove();
  

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  $('li.hobbit').eq(0).appendTo('#Mordor');
  $('li.hobbit').eq(1).appendTo('#Mordor');
  $('#Mordor').wrap('<div id = "mount-doom"/>');
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
  $(`#Mordor`).append(`<div id = "gollum"/>`);

  $(`#the-ring`).appendTo(`#gollum`);

  $(`#gollum`).appendTo(`#mount-doom`);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM

  // 2. remove all the baddies from the DOM

  // 3. Move all the hobbits back to the shire

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
  $('#14').on('click', () => {
    makeMiddleEarth();
    makeHobbits();
    keepItSecretKeepItSafe();
    makeBaddies();
    makeBuddies();
    leaveTheShire();
    beautifulStranger();
    forgeTheFellowShip();
    theBalrog();
    hornOfGondor();
    itsDangerousToGoAlone();
    weWantsIt();
    thereAndBackAgain();
  });

});
