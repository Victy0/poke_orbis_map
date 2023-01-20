<template>
	<div class="component">
	
		<img id="img" class="img-route" src="@/assets/img/locais/route1.jpg">

	</div>
</template>

<script>
	export default {
		name:"Route1",
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
				//var heigth = document.getElementById('img-route').clientHeight;

				//header
				document.getElementById("header").style.marginLeft = (width + 60) + "px";
				document.getElementById("header").style.width = (screen.width - (width + 60)) + "px";
			}
		}
	}
</script>

<style>
	.component
	{
		position: absolute;
		height: 100%; 

	}
	.img-route
	{
		max-height: 100%;
	}
	
</style>