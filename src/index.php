<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>

    <!-- imagemapster -->
    <script src="<?= $source_url; ?>/jquery.imagemapster.min.js"></script>
    <!-- custom styles -->
    <link rel="stylesheet" href="<?= $source_url; ?>/styles.css">
</head>
<body>
    <div class="row">
	<div id="maparea" class="col-md-8">
	    <div id="map_controls">
		<button>+</button>
		<button>-</button>
	    </div>
	    <div id="scrollableMap">
		<img src="<?= $source_url;?>/mexico.jpg" id="mapimg" usemap="#map" alt="">
		<map name="map" id="map">
		</map>
	    </div>
	</div>
	<div id="info" class="col-md-4">
	</div>
    </div>
    <script src="<?= $source_url; ?>/states.js"></script>
    <script src="<?= $source_url; ?>/initMapster.js"></script>
    <script src="<?= $source_url; ?>/laws.js"></script>
    <script src="<?= $source_url; ?>/setStates.js"></script>

</body>
</html>
