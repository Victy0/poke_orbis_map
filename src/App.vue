<template>
	<Perspective/>
</template>

<script>
	import Perspective from './components/Perspective'

	export default {
		name: 'App',
		components: {
			Perspective
		}
	}
</script>

<style>
	@font-face{
		font-family: Pixel;
		src: url("./assets/font/pixeled.ttf") format("truetype");
	}
	#app {
		font-family: Pixel;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		margin-top: 60px;
	}
</style>
