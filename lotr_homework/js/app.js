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

	// HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

	console.log("Trying to make middle earth.");

	// 1. create a section tag with an id of middle-earth
	const $section = $(`<section id="middle-earth"></section>`);

	// 2. append the section to the body of the DOM.
	$("body").append($section);

	// 3. use a for loop to iterate over the lands array that does the following:

	//   3a. creates an article tag (there should be one for each land when the loop is done)

	//   3b. gives each land article an `id` tag of the corresponding land name

	//   3c. includes an h1 with the name of the land inside each land article

	//   3d. appends each land to the middle-earth section

	for (let i = 0; i < lands.length; i++)
	{
		const $article = $("<article/>");
		$article.attr("id", lands[i]);
		const $h1 = $("<h1/>");
		$h1.html(lands[i]);
		$article.append($h1);
		$section.append($article)
	}

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

	console.log('Make hobbits');

	// 1. display an unordered list of the hobbits in the shire.
	const $ul = $("<ul/>");

	for (let i = 0; i < hobbits.length; i++)
	{
		//Add hobbits to the ul
		const $li = $(`<li>${hobbits[i]}</li>`);
		$li.addClass("hobbit");
		$ul.append($li);
	}

	// 2. give each hobbit a class of "hobbit"

	// hint: create a 'ul' outside the loop upon which to append the 'li's

	// hint: get 'The-Shire' by using its id

	$("#The-Shire").append($ul);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

	console.log("give Frodo the Ring");

	// 1. create an empty div with an id of 'the-ring'
	const $div = (`<div id="the-ring"></div>`);

	// 2. add the ring as a child of Frodo
	//$(".hobbit")[0].html('<div/>');

	//console.log($(".hobbit").get(0).text());

	//$frodo = $(".hobbit")[0];

	//$ul=$("ul");

	//frodo = $ul.children();
	const $frodo = $('li.hobbit').first();

	//console.log($frodo);

	//console.log($frodo.html());

	$frodo.append($div);



	//JQUERY IS HIGHLY IRRITATING
	//WHY DOESN'T THIS WORK?!?!?!?!?!?!:
	//$('.hobbits')[0].append($('<div id="the-ring"></div>'));



	//$("body").html("<p>test</p>");

	//$(".hobbit")[0].text($(".hobbit")[0].text() + " <div></div>");

	// hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

	// when you think you have given Frodo the ring, check in your Elements tab

};


// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

	console.log("Make baddies");

	// 1. display an unordered list of baddies in Mordor
	const $ul = $("<ul/>");

	for (let i = 0; i < baddies.length; i++)
	{
		//Add hobbits to the ul
		const $li = $(`<li>${baddies[i]}</li>`);
		$li.addClass("baddy");
		$ul.append($li);
	}


	// 2. give each of the baddies a class of "baddy"

	// 3. remember to append them to Mordor

	$('#Mordor').append($ul);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

	console.log("Make buddies");

	// 1. create an aside tag and append it to middle-earth below mordor

	const $aside = $("<aside></aside>");
	$("#middle-earth").append($aside);

	// 2. display an unordered list of buddies in the aside
	const $ul = $("<ul/>");

	for (let i = 0; i < buddies.length; i++)
	{
		//Add hobbits to the ul
		const $li = $(`<li>${buddies[i]}</li>`);
		$li.addClass("buddy");
		$ul.append($li);
	}

	$aside.append($ul);

	// 3. give each of the buddies a class of "buddy"

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {

	console.log("Leave the Shire");

	// 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
	const $ul = $('.hobbit').parent();
	//console.log($ul);
	// hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

	$("#Rivendell").append($ul);

	//NOTE: why does this *move* it instead of simply making a copy?
	//I thought I was going to have to delete the original.

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

	console.log("Change Strider to Aragorn");

	// 1. change the buddy 'Strider' textnode to "Aragorn"

	//console.log($("aside ul li:nth-child(4)").html());

	$("aside ul li:nth-child(4)").html("Aragorn");

	// hint: You can get a list of elements by tag name, such as 'aside'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

	console.log("Forge the Fellowship");

	// 1. create a new div with an id 'the-fellowship'

	const $div = $(`<div id="the-fellowship"><h1>The Fellowship</h1></div>`);

	// 2. add an h1 with the text 'The Fellowship' to this new div

	// 3. append the fellowship to middle-earth

	$('#middle-earth').append($div);

	// 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

	const $ul1 = $('.hobbit').parent();
	const $ul2 = $('.buddy').parent();

	$('#the-fellowship').append($ul1);
	$('#the-fellowship').append($ul2);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

	console.log("The Balrog");

	// 1. change the 'Gandalf' textNode to 'Gandalf the White'

	const $gandalf = $("li.buddy").first();
	$gandalf.html("Gandalf the White");

	// 2. add a class "the-white" to this element

	$gandalf.addClass("the-white");

	// 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
	//done - see style.css
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

	console.log("Horn of Gondor");

	// 1. create a pop-up alert that the horn of gondor has been blown

	alert("The Horn of Gondor sounds!");

	// 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name

	$("li.buddy:nth-child(5)").css("text-decoration", "line-through");

	// 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

	$("li.baddy:nth-child(3)").remove();
	//how exactly was that supposed to be tricky? Am I missing something?

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

	console.log("Frodo and Sam go to Mordor");

	// 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

	const $frodo = $("li.hobbit:nth-child(1)");
	const $sam = $("li.hobbit:nth-child(2)");
	$("#Mordor").append($frodo);
	$("#Mordor").append($sam);

	// 2. add a div with an id of 'mount-doom' to Mordor

	const $div = $(`<div id="mount-doom"></div>`);
	$("#Mordor").append($div);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

	console.log("Gollum gets his prize and dies");

	// 1. Create a div with an id of 'gollum' and add it to Mordor

	const $div = $(`<div id="gollum"></div>`);
	$("#Mordor").append($div);

	// 2. Move the ring from Frodo and give it to Gollum
	$div.append($("#the-ring"));


	// 3. Move Gollum into Mount Doom

	$("#mount-doom").append($div);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

	console.log("There and back again");

	// 1. remove Gollum and the Ring from the DOM

	$("#gollum").remove();
	$("#the-ring").remove();

	// 2. remove all the baddies from the DOM

	$(".baddy").remove();

	// 3. Move all the hobbits back to the shire

	$("#The-Shire").append($(".hobbit"));

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
