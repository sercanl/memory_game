<html>
<head>

	<title>Sercan's Memory Game</title>
	<script src="https://code.jquery.com/jquery-3.2.0.min.js"></script>
	<script src="./game.js"></script>
	<link rel="stylesheet" href="styles.css">
	<link rel="stylesheet" href="https://www.reservation.no/Reservations_no/bootstrap/css/bootstrap.min.css">
	
</head>
<body>

	<div class="container">
	
	<?php
		$num_of_cards = 20;
		for( $i=0; $i<$num_of_cards; $i++ ) {
			echo "<div class=\"item\" tabindex=\"0\"><span class=\"inner_text\"></span></div>";
		}
	?>
	</div>
	<button class="btn btn-info btn-primary btn-lg replay">Replay</button>
</body>
</html>