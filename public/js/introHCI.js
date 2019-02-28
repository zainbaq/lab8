// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
	 // initCamera();
	initMap();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	$(function() {
		$(".judge-img").bind("taphold", tapHoldHandler);

		function tapHoldHandler(event) {
			var targetIDPrefix = event.target.id;
			console.log("got prefix: " + targetIDPrefix);
			$("#"+targetIDPrefix+"-bio").show();
		}
	});
}

// init RSVP form submit listener
function initRSVPForm() {
  // add your code here
} 

$(function() {
	$("div.box").bind("taphold", tapHoldHandler);
	function tapHoldHandler(event) {
		$(event.target).addClass("taphold");
	}
});