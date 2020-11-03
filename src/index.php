<!-- custom styles -->
<link rel="stylesheet" href="<?= $source_url; ?>/styles.css">

<div class="container">

<div>
<h1 class="text-center">Leyes Restrictivas de la Libertad de Expresión</h1>
<h2>Delitos contra el honor</h2>
<p>Este tipo de delitos encontraron justificación en la protección al honor de las personas, sin embargo, se ha utilizado para criminalizar y censurar a personas criticas.

Se trata de figuras jurídicas anacrónicas que generan un efecto inhibidor en el ejercicio del periodismo crítico y la defensa de derechos humanos, así como de cualquier expresión que pudiera resultar incómoda o chocante a un grupo de personas o a funcionarios. 

En términos jurídicos, estos delitos restringen de forma injustificada la libertad de expresión al implicar un daño mayor en a la libertad de expresión de quien emite la expresión y del derecho a la información de la sociedad, para recibirla. 

Se identifican tres delitos tipificados en los Códigos Penales en México: difamación, calumnias, e injurias.

Los delitos contra el honor, como la “Calumnia”, tienen un efecto inhibidor para el ejercicio de la Libertad de Expresión. Inhibiendo la búsqueda, recopilación y difusión de informaciones.</p>
</div>

<select class="form-control form-control-lg" onchange="selectLawType(this.value)" id="" name="">
    <option value="default" disabled hidden selected="selected">Selecciona un tipo de delito</option>
    <option value="Calumnia">Calumnia</option>
    <option value="Difamación">Difamación</option>
    <option value="Injuria">Injuria</option>
    <option value="Halconeo">Halconeo</option>
    <option value="Ultrajes">Ultrajes</option>
</select>

<div id="info" class="container"> </div>

<h5>Haz click en un estado para ver sus leyes restrictivas</h5>
<div id="maparea" >
    <div id="scrollableMap"style="max-width: 100vw; overflow-x: scroll;">
	<img  src="<?= $source_url;?>/mexico.jpg" 
	    id="mapimg" 
	    usemap="#map" alt=""
	    onclick="getCoords(event)" 
	>
	<map name="map" id="map">
	</map>
    </div>
</div>

<!-- development only -->
<p></p>
<script src="<?= $source_url ;?>/../getCoords.js"></script>
<!-- ··· -->


</div>
