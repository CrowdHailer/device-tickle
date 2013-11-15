var myApp = {
	init: function () {
		myApp.goButton.addEventListener("click", function(evt) {
			myApp.slidePageFrom(activePage, "right");
			window.setTimeout(function () {
				myApp.slidePageFrom(resultsPage, "right");
			}, 2000);
		});
		myApp.homeButton.addEventListener("click", function(evt) {
			myApp.slidePageFrom(startPage, "right");
		});
		this.getSupportedOccurances(window);
		this.setEventListeners(activePage, this.occurances, this.logType);
	},
	startPage: document.getElementById("startPage"),
    activePage: document.getElementById("activePage"),
	resultsPage: document.getElementById("resultsPage"),
    currentPage: startPage,
	goButton: document.getElementById("go-button"),
	homeButton: document.getElementById("home-button"),
	occurances: [],
	getSupportedOccurances: function (target) {
		var i = '', occurances = this.occurances;
		for (i in target) {
			if ( /^on/.test(i)) { occurances[occurances.length] = i; }
		}
		console.log(occurances);
	},
	setEventListeners: function(target, eventList, callback) {
		var i = eventList.length-1;
		if (i > -1) {
			console.log('adding');
			
			do {
				console.log(i);
				target.addEventListener(eventList[i].substring(2), callback);
			}
			while (--i >=0);
		}
		console.log('Event Listeners added');
	},
	logType: function (event) {
		var type = event.type;
		console.log(type);
		return "<li>" + type "</li>";
	},
	slidePageFrom: function (page, from) {
		// Position the page at the starting position of the animation
		page.className = "page " + from;
		//Timeout require otherwise transitions from the wrong way
		window.setTimeout(function () {
			page.className ="page transition center";
			myApp.currentPage.className = "page transition " + (from === "left" ? "right" : "left");
			myApp.currentPage = page;
		}, 1);
		// Position the new page and the current page at the ending position of their animation with a transition class indicating the duration of the animation
		

	}
}
myApp.init();

	
