<template>
	<div class="component">
	
		<div class="vision">
			<img draggable="false" id="img" class="img" src="@/assets/img/places_kanto/pallet.png">
		</div>

		<div class="places">
			<div id="lab-oak" class="point" title="Laboratório do Oak"></div>
			<div id="center" class="point" title="Centro Pokémon"></div>
			<div id="fly-transport" class="point" title="Transporte áereo"></div>
			<div id="contest-pallet" class="point" title="Torneio de Pallet"></div>
			<div id="house" class="point" title="Casa"></div>
			<div id="barn" class="point" title="Celeiro"></div>
			<div id="house2" class="point" title="Casa"></div>
			<div id="house3" class="point" title="Casa"></div>
		</div>

	</div>
</template>

<script>
	export default {
		name:"Pallet",
		components:{},
		data () {},
		mounted(){

			document.onreadystatechange = () => {
				if (document.readyState == "complete") {
					this.buildOptions();
				}
			}

			this.$nextTick(function() {
				window.addEventListener('resize', this.buildOptions);
			});
		},
		methods:{

			buildOptions(){
				var width = document.getElementById('img').clientWidth;
				var heigth = document.getElementById('img').clientHeight;

				document.getElementById("lab-oak").style.marginTop = ((heigth * 750) / 1289) + "px";
				document.getElementById("lab-oak").style.marginLeft = ((width * 415) / 722) + "px";
				document.getElementById("lab-oak").style.width = ((width * 140) / 1289) + "px";
				document.getElementById("lab-oak").style.height = ((heigth * 185) / 722) + "px";

				document.getElementById("center").style.marginTop = ((heigth * 755) / 1289) + "px";
				document.getElementById("center").style.marginLeft = ((width * 349) / 722) + "px";
				document.getElementById("center").style.width = ((width * 95) / 1289) + "px";
				document.getElementById("center").style.height = ((heigth * 90) / 722) + "px";

				document.getElementById("fly-transport").style.marginTop = ((heigth * 235) / 1289) + "px";
				document.getElementById("fly-transport").style.marginLeft = ((width * 5) / 722) + "px";
				document.getElementById("fly-transport").style.width = ((width * 155) / 1289) + "px";
				document.getElementById("fly-transport").style.height = ((heigth * 100) / 722) + "px";
				
				document.getElementById("contest-pallet").style.marginTop = ((heigth * 988) / 1289) + "px";
				document.getElementById("contest-pallet").style.marginLeft = ((width * 90) / 722) + "px";
				document.getElementById("contest-pallet").style.width = ((width * 105) / 1289) + "px";
				document.getElementById("contest-pallet").style.height = ((heigth * 80) / 722) + "px";

				document.getElementById("house").style.marginTop = ((heigth * 70) / 1289) + "px";
				document.getElementById("house").style.marginLeft = ((width * 440) / 722) + "px";
				document.getElementById("house").style.width = ((width * 70) / 1289) + "px";
				document.getElementById("house").style.height = ((heigth * 70) / 722) + "px";

				document.getElementById("barn").style.marginTop = ((heigth * 620) / 1289) + "px";
				document.getElementById("barn").style.marginLeft = ((width * 70) / 722) + "px";
				document.getElementById("barn").style.width = ((width * 90) / 1289) + "px";
				document.getElementById("barn").style.height = ((heigth * 110) / 722) + "px";

				document.getElementById("house2").style.marginTop = ((heigth * 240) / 1289) + "px";
				document.getElementById("house2").style.marginLeft = ((width * 250) / 722) + "px";
				document.getElementById("house2").style.width = ((width * 70) / 1289) + "px";
				document.getElementById("house2").style.height = ((heigth * 75) / 722) + "px";

				document.getElementById("house3").style.marginTop = ((heigth * 690) / 1289) + "px";
				document.getElementById("house3").style.marginLeft = ((width * 245) / 722) + "px";
				document.getElementById("house3").style.width = ((width * 70) / 1289) + "px";
				document.getElementById("house3").style.height = ((heigth * 70) / 722) + "px";
			}
		}
	}
</script>

<style>
	.container
	{ 
		background-color: rgb(92, 90, 90);
		position: fixed; 
		width: 100%; 
		height: 100%; 
		top: 0; 
		left: 0;
		margin: 0;
		overflow: auto; 
	}
	.vision
	{
		position: absolute;
		height: 100%;
	}
	.img
	{
		max-height: 100%;
		border-radius: 10px;
	}

	/******************** LOCAIS ********************/
	.places
	{
		position:absolute;
		height: 100%; 
	}
	.point 
	{
		position:absolute;
		border-style: groove;
		border-width: thick;
		border-color: red;
		border-radius: 3px;
	}
	
</style>