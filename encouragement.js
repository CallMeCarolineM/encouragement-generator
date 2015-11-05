// Arrays holding quotes and authors, with corresponding quote and author in same index in array
var quotes = ["Failure will never overtake me if my determination to succeed is strong enough.", 
				"What you do today can improve all your tomorrows.",
				"Always do your best. What you plant now, you will harvest later.",
				"Don't watch the clock; do what it does. Keep going.",
				"It does not matter how slowly you go as long as you do not stop.",
				"If you can dream it, you can do it.",
				"The secret of getting ahead is getting started.",
				"We may encounter many defeats but we must not be defeated.",
				"Start where you are. Use what you have. Do what you can.",
				"Problems are not stop signs, they are guidelines.",
				"Ever tried. Ever failed. No matter. Try again. Fail again. Fail better.",
				"Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
				"Do the one thing you think you cannot do. Fail at it. Try again. Do better the second time. The only people who never tumble are those who never mount the high wire. This is your moment. Own it.",
				"Either I will find a way, or I will make one.",
				"Without hard work, nothing grows but weeds.",
				"Never give up, for that is just the place and time that the tide will turn.",
				"If you’re going through hell, keep going.",
				"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
				"Step by step and the thing is done.",
				"Perseverance is not a long race; it is many short races one after the other.",
				"Small deeds done are better than great deeds planned.",
				"I’d rather attempt to do something great and fail than to attempt to do nothing and succeed.",
				"The more we do, the more we can do.",
				"Do not wait; the time will never be ‘just right.’ Start where you stand, and work with whatever tools you may have at your command, and better tools will be found as you go along.",
				"Our greatest glory is not in never failing, but in rising up every time we fail."];
var authors = ["Og Mandino", 
				"Ralph Marston",
				"Og Mandino",
				"Sam Levenson",
				"Confucius",
				"Walt Disney",
				"Mark Twain",
				"Maya Angelou",
				"Arthur Ashe",
				"Robert H. Schuller",
				"Samuel Beckett",
				"Lao Tzu",
				"Oprah Winfrey",
				"Philip Sidney",
				"Gordon B. Hinckley",
				"Harriet Beecher Stowe",
				"Winston Churchill",
				"Mark Caine",
				"Charles Atlas",
				"Walter Elliot",
				"Peter Marshall",
				"Robert H. Schuller",
				"William Hazlitt",
				"George Herbert",
				"Ralph Waldo Emerson"];

// grab button from DOM, add event listener
var encourage = document.querySelector(".encourage");
encourage.addEventListener("click", displayQuoteAndAuthor);


// replace text content with quote[i] and authors[i] in 2 steps:
function findRandomNumber () {
	return Math.floor(Math.random() * quotes.length);
}

//choose the quote and author whose index matches that found in the findRandomNumber function
function displayQuoteAndAuthor () {
	var findNumber = findRandomNumber();
	document.querySelector(".quote").textContent = quotes[findNumber];
	document.querySelector(".author").textContent = authors[findNumber];
}

