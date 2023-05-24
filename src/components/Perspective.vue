<template>
	<div class="layout">

		<div class="vision">
			<div class="interface">
				<Intro
					v-if="perspective == 'intro'"
					@changePerspective = "updatePerspective"
				/>
				
				<Pallet
					v-else-if="perspective == 'pallet'"
					@changeBerriesValue = "updateBerryValueHeader"
					@pokedexEntryPokemon = "increaseByOnePokedexEntry"
				/>
			</div>
					
			<Header
				ref="header"
				class="observation"
			/>
		</div>
	</div>
</template>

<script>
	import Header from './Elements/Header';

	import Intro from './Intro/Intro';
	import Pallet from './Kanto/Cities/Pallet';

	export default {
		name:"Perspective",
		components:{
			Header,
			Intro,
			Pallet
		},
		data() {
			return{
				perspective: 'intro'
			}
		},
		methods:{
			// função para atualizar perspectiva
			updatePerspective(newPerspective)
			{
				localStorage.setItem('perspective', newPerspective);
				this.$refs.header.setIsPerspective(true);
				this.perspective = newPerspective;
			},
			// função para atualizar no componente Header a quantidade de berries
			updateBerryValueHeader()
			{
				this.$refs.header.updateBerry();
			},
			// função para atualizar no componente header a listagem de pokémons vistos na pokédex
			increaseByOnePokedexEntry()
			{
				this.$refs.header.updatePokedex();
			}
		}
	}
</script>

<style>
	/******************** ESTRUTURA PADRÃO *********************/
	.layout
	{ 
		background-color: rgb(92, 90, 90);
		position: fixed; 
		width: 100%; 
		height: 100%; 
		top: 0; 
		left: 0;
		margin: 0;
		position: absolute;
		overflow: hidden;
	}
	.vision 
	{
		display: -webkit-box;
		display: -moz-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		height: 100vh;
		width: 100vw;
	}
	.vision .interface 
	{
		-webkit-box-flex: 1;
		-ms-flex-positive: 1;
		-webkit-flex-grow: 1;
		-moz-flex-grow: 1;
		flex-grow: 1;
		height: 99.4%;
		position: relative;
		display: flex;
		text-align: center;
		z-index: 9;
	}
	.vision .interface .img-principal
	{
		max-width: 100%;
		border-radius: 20px;
		padding: 2px 5px 2px 5px;
		margin: auto;
		display: block;
	}
	.vision .observation 
	{
		display: inline-block;
		height: 100%;
		max-width: 50vw;
		min-width: 260px;
		width: 360px;
		position: relative;
	}

	/*************** ESTRUTURA SETAS TRANSIÇÃO *****************/
	.arrow-left,
	.arrow-right,
	.arrow-top,
	.arrow-bottom
	{
		position: absolute;
		top: 50%;
		width: 3vmin;
		height: 3vmin;
		background: transparent;
		border-top: 1vmin solid white;
		border-right: 1vmin solid white;
		box-shadow: 0 0 0 lightgray;
		transition: all 200ms ease;
		cursor: pointer;
		opacity: 0.5;
	}
	.arrow-left 
	{
		left: 0;
		transform: translate3d(0,-50%,0) rotate(-135deg);
		margin-left: 0.8vw;
	}
	.arrow-right 
	{
		right: 0;
		transform: translate3d(0,-50%,0) rotate(45deg);
		margin-right: 0.3vw;
	}
	.arrow-top
	{
		margin-top: -22.4vw;
		transform: translate3d(0,0,0) rotate(-45deg);
		margin-left: 40.2vw;
	}
	.arrow-bottom
	{
		bottom: 0;
		margin-top: 20.5vw;
		transform: translate3d(0,0,0) rotate(135deg);
		margin-left: 40.9vw;
	}
	.arrow-left:hover,
	.arrow-right:hover,
	.arrow-top:hover,
	.arrow-bottom:hover
	{
		border-color: red;
		box-shadow: 0.5vmin -0.5vmin 0 white;
		opacity: 1;
	}
</style>