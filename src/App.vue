<template>
	<PerspectiveApplication/>
</template>

<script>
	import PerspectiveApplication from './components/Perspective'

	export default {
		name: 'App',
		components: {
			PerspectiveApplication
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
		font-weight: 599;
	}
</style>
