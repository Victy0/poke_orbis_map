<template>
	<div class="container">

		<Header
			id="header"
		/>

		<div class="map" >
			<img id="map" class="img" src="@/assets/img/region/kanto.png" usemap="#kanto-map">
		</div>

		<Route1
			v-show="showRoute1"
		/>

		<div class="map-structure"
			v-show="showMap"
		>

			<div id="route1" class="route" title="Rota 1" @click="openLocalMap('route1')"></div>
			<div id="route2" class="route" title="Rota 2"></div>
			<div id="route3" class="route" title="Rota 3"></div>
			<div id="route4" class="route" title="Rota 4"></div>
			<div id="route5" class="route" title="Rota 5"></div>
			<div id="route6" class="route" title="Rota 6"></div>
			<div id="route7" class="route" title="Rota 7"></div>
			<div id="route8" class="route" title="Rota 8"></div>
			<div id="route9" class="route" title="Rota 9"></div>
			<div id="route10" class="route" title="Rota 10"></div>
			<div id="route11" class="route" title="Rota 11"></div>
			<div id="route12" class="route" title="Rota 12"></div>
			<div id="route13" class="route" title="Rota 13"></div>
			<div id="route14" class="route" title="Rota 14"></div>
			<div id="route15" class="route" title="Rota 15"></div>
			<div id="route16" class="route" title="Rota 16"></div>
			<div id="route17" class="route" title="Rota 17"></div>
			<div id="route18" class="route" title="Rota 18"></div>
			<div id="route19" class="route" title="Rota 19"></div>
			<div id="route20" class="route" title="Rota 20"></div>
			<div id="route21" class="route" title="Rota 21"></div>
			<div id="route22" class="route" title="Rota 22"></div>
			<div id="route23" class="route" title="Rota 23"></div>
			<div id="route24" class="route" title="Rota 24"></div>
			<div id="route25" class="route" title="Rota 25"></div>
			<div id="route26" class="route" title="Rota 26"></div>
			<div id="route27" class="route" title="Rota 27"></div>
			<div id="route28" class="route" title="Rota 28"></div>

			<div id="pallet" class="city" title="Cidade de Pallet"> </div>
			<div id="cinnabar" class="city" title="Ilha de Cinnabar"> </div>
			<div id="viridian" class="city" title="Cidade de Virirdian"> </div>
			<div id="pewter" class="city" title="Cidade de Pewter"> </div>
			<div id="cerulean" class="city" title="Cidade de Cerulean"> </div>
			<div id="saffron" class="city" title="Cidade de Saffron"> </div>
			<div id="celladon" class="city" title="Cidade de Celladon"> </div>
			<div id="vermillion" class="city" title="Cidade de Vermillion"> </div>
			<div id="lavender" class="city" title="Cidade de Lavender"> </div>
			<div id="fuchsia" class="city" title="Cidade de Fuchsia"> </div>

			<div id="safari" class="place" title="Zona de safari"> </div>
			<div id="indigo" class="place" title="Planalto Índigo"> </div>
			<div id="victory" class="place" title="Rota da Vitória"> </div>
			<div id="bill-h" class="place" title="Casa do Bill"> </div>
			<div id="seafron" class="place" title="Ilha de Seafron"> </div>
			<div id="tohjo" class="place" title="Cascata Tohjo"> </div>
			<div id="silver" class="place" title="Monte Silver"> </div>
			<div id="express" class="place" title="Expresso para Johto"> </div>
			<div id="plant" class="place" title="Usina elétrica"> </div>
			<div id="forest" class="place" title="Floresta de Viridian"> </div>
			<div id="moon" class="place" title="Monte Moon"> </div>
			<div id="cave-d1" class="place" title="Caverna de Diglett"> </div>
			<div id="cave-d2" class="place" title="Caverna de Diglett"> </div>
			<div id="island" class="place" title="Ilha ?"> </div>

		</div>
		
	</div>
</template>

<script>
	import Header from './Header';

	import Route1 from './Route1';

	export default {
		name:"Map",
		components:{
			Header,
			Route1
		},
		data () {
			return{
				showMap: true,
				showRoute1: false
			}
		},
		mounted(){

			document.onreadystatechange = () => {
				if (document.readyState == "complete") {
					this.buildStructureMap();
				}
			}

			this.$nextTick(function() {
				window.addEventListener('resize', this.buildStructureMap);
			});
		},
		methods:{

			buildStructureMap(){
				var width = document.getElementById('map').clientWidth;
				var heigth = document.getElementById('map').clientHeight;

				//header
				document.getElementById("header").style.marginLeft = (width + 60) + "px";
				document.getElementById("header").style.width = (screen.width - (width + 60)) + "px";

				// cidades
				document.getElementById("pallet").style.marginTop = ((heigth * 696) / 1094) + "px";
				document.getElementById("pallet").style.marginLeft = ((width * 290) / 722) + "px";
				document.getElementById("pallet").style.width = ((width * 70) / 1094) + "px";
				document.getElementById("pallet").style.height = ((heigth * 45) / 722) + "px";

				document.getElementById("cinnabar").style.marginTop = ((heigth * 970) / 1094) + "px";
				document.getElementById("cinnabar").style.marginLeft = ((width * 290) / 722) + "px";
				document.getElementById("cinnabar").style.width = ((width * 70) / 1094) + "px";
				document.getElementById("cinnabar").style.height = ((heigth * 60) / 722) + "px";

				document.getElementById("viridian").style.marginTop = ((heigth * 440) / 1094) + "px";
				document.getElementById("viridian").style.marginLeft = ((width * 280) / 722) + "px";
				document.getElementById("viridian").style.width = ((width * 75) / 1094) + "px";
				document.getElementById("viridian").style.height = ((heigth * 60) / 722) + "px";

				document.getElementById("pewter").style.marginTop = ((heigth * 88) / 1094) + "px";
				document.getElementById("pewter").style.marginLeft = ((width * 298) / 722) + "px";
				document.getElementById("pewter").style.width = ((width * 80) / 1094) + "px";
				document.getElementById("pewter").style.height = ((heigth * 80) / 722) + "px";

				document.getElementById("cerulean").style.marginTop = ((heigth * 179) / 1094) + "px";
				document.getElementById("cerulean").style.marginLeft = ((width * 542) / 722) + "px";
				document.getElementById("cerulean").style.width = ((width * 70) / 1094) + "px";
				document.getElementById("cerulean").style.height = ((heigth * 65) / 722) + "px";

				document.getElementById("saffron").style.marginTop = ((heigth * 370) / 1094) + "px";
				document.getElementById("saffron").style.marginLeft = ((width * 536) / 722) + "px";
				document.getElementById("saffron").style.width = ((width * 75) / 1094) + "px";
				document.getElementById("saffron").style.height = ((heigth * 90) / 722) + "px";

				document.getElementById("celladon").style.marginTop = ((heigth * 420) / 1094) + "px";
				document.getElementById("celladon").style.marginLeft = ((width * 452) / 722) + "px";
				document.getElementById("celladon").style.width = ((width * 75) / 1094) + "px";
				document.getElementById("celladon").style.height = ((heigth * 70) / 722) + "px";

				document.getElementById("vermillion").style.marginTop = ((heigth * 565) / 1094) + "px";
				document.getElementById("vermillion").style.marginLeft = ((width * 539) / 722) + "px";
				document.getElementById("vermillion").style.width = ((width * 65) / 1094) + "px";
				document.getElementById("vermillion").style.height = ((heigth * 95) / 722) + "px";

				document.getElementById("lavender").style.marginTop = ((heigth * 425) / 1094) + "px";
				document.getElementById("lavender").style.marginLeft = ((width * 655) / 722) + "px";
				document.getElementById("lavender").style.width = ((width * 45) / 1094) + "px";
				document.getElementById("lavender").style.height = ((heigth * 50) / 722) + "px";

				document.getElementById("fuchsia").style.marginTop = ((heigth * 820) / 1094) + "px";
				document.getElementById("fuchsia").style.marginLeft = ((width * 445) / 722) + "px";
				document.getElementById("fuchsia").style.width = ((width * 85) / 1094) + "px";
				document.getElementById("fuchsia").style.height = ((heigth * 65) / 722) + "px";

				// locais
				document.getElementById("safari").style.marginTop = ((heigth * 710) / 1094) + "px";
				document.getElementById("safari").style.marginLeft = ((width * 455) / 722) + "px";
				document.getElementById("safari").style.width = ((width * 90) / 1094) + "px";
				document.getElementById("safari").style.height = ((heigth * 65) / 722) + "px";

				document.getElementById("indigo").style.marginTop = ((heigth * 310) / 1094) + "px";
				document.getElementById("indigo").style.marginLeft = ((width * 175) / 722) + "px";
				document.getElementById("indigo").style.width = ((width * 45) / 1094) + "px";
				document.getElementById("indigo").style.height = ((heigth * 45) / 722) + "px";

				document.getElementById("victory").style.marginTop = ((heigth * 490) / 1094) + "px";
				document.getElementById("victory").style.marginLeft = ((width * 165) / 722) + "px";
				document.getElementById("victory").style.width = ((width * 75) / 1094) + "px";
				document.getElementById("victory").style.height = ((heigth * 65) / 722) + "px";

				document.getElementById("bill-h").style.marginTop = ((heigth * 15) / 1094) + "px";
				document.getElementById("bill-h").style.marginLeft = ((width * 640) / 722) + "px";
				document.getElementById("bill-h").style.width = ((width * 45) / 1094) + "px";
				document.getElementById("bill-h").style.height = ((heigth * 30) / 722) + "px";

				document.getElementById("seafron").style.marginTop = ((heigth * 985) / 1094) + "px";
				document.getElementById("seafron").style.marginLeft = ((width * 365) / 722) + "px";
				document.getElementById("seafron").style.width = ((width * 60) / 1094) + "px";
				document.getElementById("seafron").style.height = ((heigth * 30) / 722) + "px";

				document.getElementById("tohjo").style.marginTop = ((heigth * 750) / 1094) + "px";
				document.getElementById("tohjo").style.marginLeft = ((width * 1) / 722) + "px";
				document.getElementById("tohjo").style.width = ((width * 40) / 1094) + "px";
				document.getElementById("tohjo").style.height = ((heigth * 80) / 722) + "px";

				document.getElementById("silver").style.marginTop = ((heigth * 470) / 1094) + "px";
				document.getElementById("silver").style.marginLeft = ((width * 30) / 722) + "px";
				document.getElementById("silver").style.width = ((width * 80) / 1094) + "px";
				document.getElementById("silver").style.height = ((heigth * 70) / 722) + "px";

				document.getElementById("express").style.marginTop = ((heigth * 630) / 1094) + "px";
				document.getElementById("express").style.marginLeft = ((width * 40) / 722) + "px";
				document.getElementById("express").style.width = ((width * 170) / 1094) + "px";
				document.getElementById("express").style.height = ((heigth * 35) / 722) + "px";

				document.getElementById("plant").style.marginTop = ((heigth * 320) / 1094) + "px";
				document.getElementById("plant").style.marginLeft = ((width * 660) / 722) + "px";
				document.getElementById("plant").style.width = ((width * 20) / 1094) + "px";
				document.getElementById("plant").style.height = ((heigth * 20) / 722) + "px";

				document.getElementById("forest").style.marginTop = ((heigth * 260) / 1094) + "px";
				document.getElementById("forest").style.marginLeft = ((width * 270) / 722) + "px";
				document.getElementById("forest").style.width = ((width * 70) / 1094) + "px";
				document.getElementById("forest").style.height = ((heigth * 60) / 722) + "px";

				document.getElementById("moon").style.marginTop = ((heigth * 120) / 1094) + "px";
				document.getElementById("moon").style.marginLeft = ((width * 420) / 722) + "px";
				document.getElementById("moon").style.width = ((width * 60) / 1094) + "px";
				document.getElementById("moon").style.height = ((heigth * 70) / 722) + "px";

				document.getElementById("cave-d1").style.marginTop = ((heigth * 225) / 1094) + "px";
				document.getElementById("cave-d1").style.marginLeft = ((width * 320) / 722) + "px";
				document.getElementById("cave-d1").style.width = ((width * 40) / 1094) + "px";
				document.getElementById("cave-d1").style.height = ((heigth * 20) / 722) + "px";

				document.getElementById("cave-d2").style.marginTop = ((heigth * 550) / 1094) + "px";
				document.getElementById("cave-d2").style.marginLeft = ((width * 595) / 722) + "px";
				document.getElementById("cave-d2").style.width = ((width * 25) / 1094) + "px";
				document.getElementById("cave-d2").style.height = ((heigth * 30) / 722) + "px";

				document.getElementById("island").style.marginTop = ((heigth * 800) / 1094) + "px";
				document.getElementById("island").style.marginLeft = ((width * 630) / 722) + "px";
				document.getElementById("island").style.width = ((width * 60) / 1094) + "px";
				document.getElementById("island").style.height = ((heigth * 50) / 722) + "px";

				// rotas
				document.getElementById("route1").style.marginTop = ((heigth * 545) / 1094) + "px";
				document.getElementById("route1").style.marginLeft = ((width * 298) / 722) + "px";
				document.getElementById("route1").style.width = ((width * 45) / 1094) + "px";
				document.getElementById("route1").style.height = ((heigth * 90) / 722) + "px";

				document.getElementById("route2").style.marginTop = ((heigth * 221) / 1094) + "px";
				document.getElementById("route2").style.marginLeft = ((width * 292) / 722) + "px";
				document.getElementById("route2").style.width = ((width * 60) / 1094) + "px";
				document.getElementById("route2").style.height = ((heigth * 135) / 722) + "px";

				document.getElementById("route3").style.marginTop = ((heigth * 145) / 1094) + "px";
				document.getElementById("route3").style.marginLeft = ((width * 357) / 722) + "px";
				document.getElementById("route3").style.width = ((width * 85) / 1094) + "px";
				document.getElementById("route3").style.height = ((heigth * 55) / 722) + "px";

				document.getElementById("route4").style.marginTop = ((heigth * 155) / 1094) + "px";
				document.getElementById("route4").style.marginLeft = ((width * 465) / 722) + "px";
				document.getElementById("route4").style.width = ((width * 107) / 1094) + "px";
				document.getElementById("route4").style.height = ((heigth * 55) / 722) + "px";

				document.getElementById("route5").style.marginTop = ((heigth * 290) / 1094) + "px";
				document.getElementById("route5").style.marginLeft = ((width * 535) / 722) + "px";
				document.getElementById("route5").style.width = ((width * 55) / 1094) + "px";
				document.getElementById("route5").style.height = ((heigth * 44) / 722) + "px";

				document.getElementById("route6").style.marginTop = ((heigth * 517) / 1094) + "px";
				document.getElementById("route6").style.marginLeft = ((width * 536) / 722) + "px";
				document.getElementById("route6").style.width = ((width * 53) / 1094) + "px";
				document.getElementById("route6").style.height = ((heigth * 22) / 722) + "px";

				document.getElementById("route7").style.marginTop = ((heigth * 417) / 1094) + "px";
				document.getElementById("route7").style.marginLeft = ((width * 507) / 722) + "px";
				document.getElementById("route7").style.width = ((width * 35) / 1094) + "px";
				document.getElementById("route7").style.height = ((heigth * 58) / 722) + "px";

				document.getElementById("route8").style.marginTop = ((heigth * 437) / 1094) + "px";
				document.getElementById("route8").style.marginLeft = ((width * 590) / 722) + "px";
				document.getElementById("route8").style.width = ((width * 90) / 1094) + "px";
				document.getElementById("route8").style.height = ((heigth * 35) / 722) + "px";

				document.getElementById("route9").style.marginTop = ((heigth * 220) / 1094) + "px";
				document.getElementById("route9").style.marginLeft = ((width * 595) / 722) + "px";
				document.getElementById("route9").style.width = ((width * 120) / 1094) + "px";
				document.getElementById("route9").style.height = ((heigth * 45) / 722) + "px";

				document.getElementById("route10").style.marginTop = ((heigth * 297) / 1094) + "px";
				document.getElementById("route10").style.marginLeft = ((width * 645) / 722) + "px";
				document.getElementById("route10").style.width = ((width * 45) / 1094) + "px";
				document.getElementById("route10").style.height = ((heigth * 75) / 722) + "px";

				document.getElementById("route11").style.marginTop = ((heigth * 560) / 1094) + "px";
				document.getElementById("route11").style.marginLeft = ((width * 587) / 722) + "px";
				document.getElementById("route11").style.width = ((width * 95) / 1094) + "px";
				document.getElementById("route11").style.height = ((heigth * 40) / 722) + "px";
		
				document.getElementById("route12").style.marginTop = ((heigth * 515) / 1094) + "px";
				document.getElementById("route12").style.marginLeft = ((width * 655) / 722) + "px";
				document.getElementById("route12").style.width = ((width * 40) / 1094) + "px";
				document.getElementById("route12").style.height = ((heigth * 170) / 722) + "px";

				document.getElementById("route13").style.marginTop = ((heigth * 725) / 1094) + "px";
				document.getElementById("route13").style.marginLeft = ((width * 585) / 722) + "px";
				document.getElementById("route13").style.width = ((width * 100) / 1094) + "px";
				document.getElementById("route13").style.height = ((heigth * 35) / 722) + "px";

				document.getElementById("route14").style.marginTop = ((heigth * 790) / 1094) + "px";
				document.getElementById("route14").style.marginLeft = ((width * 593) / 722) + "px";
				document.getElementById("route14").style.width = ((width * 33) / 1094) + "px";
				document.getElementById("route14").style.height = ((heigth * 70) / 722) + "px";

				document.getElementById("route15").style.marginTop = ((heigth * 845) / 1094) + "px";
				document.getElementById("route15").style.marginLeft = ((width * 505) / 722) + "px";
				document.getElementById("route15").style.width = ((width * 125) / 1094) + "px";
				document.getElementById("route15").style.height = ((heigth * 35) / 722) + "px";

				document.getElementById("route16").style.marginTop = ((heigth * 475) / 1094) + "px";
				document.getElementById("route16").style.marginLeft = ((width * 385) / 722) + "px";
				document.getElementById("route16").style.width = ((width * 90) / 1094) + "px";
				document.getElementById("route16").style.height = ((heigth * 50) / 722) + "px";

				document.getElementById("route17").style.marginTop = ((heigth * 565) / 1094) + "px";
				document.getElementById("route17").style.marginLeft = ((width * 385) / 722) + "px";
				document.getElementById("route17").style.width = ((width * 50) / 1094) + "px";
				document.getElementById("route17").style.height = ((heigth * 180) / 722) + "px";

				document.getElementById("route18").style.marginTop = ((heigth * 850) / 1094) + "px";
				document.getElementById("route18").style.marginLeft = ((width * 385) / 722) + "px";
				document.getElementById("route18").style.width = ((width * 80) / 1094) + "px";
				document.getElementById("route18").style.height = ((heigth * 40) / 722) + "px";

				document.getElementById("route19").style.marginTop = ((heigth * 930) / 1094) + "px";
				document.getElementById("route19").style.marginLeft = ((width * 450) / 722) + "px";
				document.getElementById("route19").style.width = ((width * 40) / 1094) + "px";
				document.getElementById("route19").style.height = ((heigth * 84) / 722) + "px";

				document.getElementById("route20").style.marginTop = ((heigth * 990) / 1094) + "px";
				document.getElementById("route20").style.marginLeft = ((width * 340) / 722) + "px";
				document.getElementById("route20").style.width = ((width * 160) / 1094) + "px";
				document.getElementById("route20").style.height = ((heigth * 45) / 722) + "px";

				document.getElementById("route21").style.marginTop = ((heigth * 780) / 1094) + "px";
				document.getElementById("route21").style.marginLeft = ((width * 295) / 722) + "px";
				document.getElementById("route21").style.width = ((width * 45) / 1094) + "px";
				document.getElementById("route21").style.height = ((heigth * 115) / 722) + "px";

				document.getElementById("route22").style.marginTop = ((heigth * 490) / 1094) + "px";
				document.getElementById("route22").style.marginLeft = ((width * 220) / 722) + "px";
				document.getElementById("route22").style.width = ((width * 80) / 1094) + "px";
				document.getElementById("route22").style.height = ((heigth * 50) / 722) + "px";

				document.getElementById("route23").style.marginTop = ((heigth * 30) / 1094) + "px";
				document.getElementById("route23").style.marginLeft = ((width * 560) / 722) + "px";
				document.getElementById("route23").style.width = ((width * 40) / 1094) + "px";
				document.getElementById("route23").style.height = ((heigth * 90) / 722) + "px";

				document.getElementById("route24").style.marginTop = ((heigth * 20) / 1094) + "px";
				document.getElementById("route24").style.marginLeft = ((width * 590) / 722) + "px";
				document.getElementById("route24").style.width = ((width * 70) / 1094) + "px";
				document.getElementById("route24").style.height = ((heigth * 35) / 722) + "px";

				document.getElementById("route25").style.marginTop = ((heigth * 387) / 1094) + "px";
				document.getElementById("route25").style.marginLeft = ((width * 175) / 722) + "px";
				document.getElementById("route25").style.width = ((width * 41) / 1094) + "px";
				document.getElementById("route25").style.height = ((heigth * 60) / 722) + "px";

				document.getElementById("route26").style.marginTop = ((heigth * 600) / 1094) + "px";
				document.getElementById("route26").style.marginLeft = ((width * 175) / 722) + "px";
				document.getElementById("route26").style.width = ((width * 55) / 1094) + "px";
				document.getElementById("route26").style.height = ((heigth * 100) / 722) + "px";

				document.getElementById("route27").style.marginTop = ((heigth * 760) / 1094) + "px";
				document.getElementById("route27").style.marginLeft = ((width * 30) / 722) + "px";
				document.getElementById("route27").style.width = ((width * 275) / 1094) + "px";
				document.getElementById("route27").style.height = ((heigth * 50) / 722) + "px";

				document.getElementById("route28").style.marginTop = ((heigth * 485) / 1094) + "px";
				document.getElementById("route28").style.marginLeft = ((width * 87) / 722) + "px";
				document.getElementById("route28").style.width = ((width * 108) / 1094) + "px";
				document.getElementById("route28").style.height = ((heigth * 55) / 722) + "px";
			},

			openLocalMap(component){
				this.showMap = false;

				switch (component)
				{
					case "route1":
						this.showRoute1 = true;
				}  
			}

			/*setTransform(e) {
				console.log(e)
				var zoom = document.getElementById("zoom");
				var scale = 7
				var pointX = 0
				var pointY = 0
				//var start = { x: 0, y: 0 }
				var xs = (e.clientX - pointX) / scale,
				ys = (e.clientY - pointY) / scale,
				delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY);
				(delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
				pointX = e.clientX - xs * scale;
				pointY = e.clientY - ys * scale;
				zoom.style.transform = "translate(" + pointX + "px, " + pointY + "px) scale(" + scale + ")";
			}*/

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
	}
	.map
	{
		position: absolute;
		height: 100%; 

	}
	.img
	{
		max-height: 100%;
	}

	/******************** ESTRUTURA DO MAPA *********************/
	.map-structure
	{
		position:absolute;
		height: 100%; 
	}
	.city 
	{
		position:absolute;
		border-style: groove;
		border-width: thick;
		border-color: red;
		border-radius: 3px;
	}
	.place 
	{
		position:absolute;
		border-style: groove;
		border-width: thick;
		border-color: green;
		border-radius: 3px;
	}
	.route
	{
		position:absolute;
		border-style: groove;
		border-width: thick;
		border-color: white;
		border-radius: 3px;
	}

</style>
