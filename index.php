<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content='maximum-scale=1.0, initial-scale=1.0, width=device-width' name='viewport'>

    <title>Mexmap</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <!-- jquery -->
    <script src="./devDepends/jquery.js"></script>
</head>
<body>
    
<?php
$source_url = "http://localhost/mexmap/src";
include(__DIR__.'/src/index.php');
?>

<script src="./getCoords.js"></script>

<!-- BOOTSTRAP CDN'S -->
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>

</body>
</html>

<?php include(__DIR__.'/src/scripts.php'); ?>

