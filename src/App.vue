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
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
