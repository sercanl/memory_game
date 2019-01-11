$(document).ready(function() {
	
	const numOfCards = 20;
	const word = "ABCDEFGHIJABCDEFGHIJ";
	var randomSequence;
	var numOfOpenCards;
	
	function initialise() {
		randomSequence = [];
		// Populate random positions
		while (randomSequence.length < numOfCards) {
			var newNumber = Math.floor(Math.random() * numOfCards);
			if (!randomSequence.includes(newNumber)) {
				randomSequence.push(newNumber);
			}
		}
		
		// Fill the cards
		var cardItems = $(".inner_text");
		for (i = 0; i < cardItems.length; i++) {
			var pos = randomSequence[i];
			var letter = word[pos];
			$(cardItems[i]).text(letter);
		}
		$(".item.open").removeClass("open");
		$(".item.cleared").removeClass("cleared");
		$(".item").find(".inner_text").css("opacity", "0");
		$(".replay").addClass("hidden");
		numOfOpenCards = 0;
	}
	
	initialise();
	
	$(document).on('click', '.item', function() {
		
		if ($(this).hasClass("open") || $(this).hasClass("cleared")) {
			return;
		}
		var currentCard = $(this);
		var previousCard = $(".container .open");
		
		switch (numOfOpenCards) {
			case 0:
				currentCard.addClass("open");
				currentCard.find(".inner_text").css("opacity", "1");
				numOfOpenCards = numOfOpenCards + 1;
			break;
			
			case 1:
				currentCard.addClass("open");
				currentCard.find(".inner_text").css("opacity", "1");
				if (currentCard.text() === previousCard.text()) {
					currentCard.addClass("cleared");
					currentCard.removeClass("open");
					previousCard.addClass("cleared");
					previousCard.removeClass("open");
					numOfOpenCards = 0;
					if ($(".item.cleared").length === numOfCards) {
						$(".replay").removeClass("hidden");
					}
				}
				else {
					numOfOpenCards = numOfOpenCards + 1;
				}
			break;
			
			case 2:
				$(".item.open").find(".inner_text").css("opacity", "0");
				$(".item.open").removeClass("open");
				currentCard.addClass("open");
				currentCard.find(".inner_text").css("opacity", "1");
				numOfOpenCards = 1;
			break;
		}
	});
	
	$(document).on('click', '.replay', function() {
		initialise();
	});
});

