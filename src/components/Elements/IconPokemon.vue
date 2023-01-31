<template>
	<div ref="icon" class="icon-pokemon">
		<img 
			class="principal"
			:src="getImage()"
			draggable="false"
		>
		<div class="options">
			<img
				draggable="false"
				src="@/assets/img/icon/dex-icon.png"
				@click="openPokedex()"
				title="Pokédex"
			>
			<img
				draggable="false"
				src="@/assets/img/icon/berry-icon.png"
				title="Dar berry"
			>
		</div>
	</div>
	<ModalPokedex 
		ref="pokedex"
		v-show="showPokedex"
	/>
</template>

<script>
	import ModalPokedex from '../Modals/Pokedex.vue';
	import {getPokemon} from '../../dataRecovery';

	export default {
		name:"IconPokemon",
		components:{
			ModalPokedex
		},
		data () {
			return{
				image: "none.gif",
				showPokedex: false
			}
		},
		methods:{
			show(opts = {}) {
				this.image = opts.image;
				this.$refs["icon"].style.marginLeft = opts.top + "vw";
				this.$refs["icon"].style.marginTop = opts.left + "vw";
			},
			getImage(){
				return require('@/assets/img/pokemon/' + this.image)
			},
			openPokedex(){
				this.$refs.pokedex.show(
					{
						view: "pokemon",
						object: getPokemon("1.1")
					}
				).then(async (close) => {
					if(close){
						this.showPokedex = false;
					}
				});
				this.showPokedex = true;
			}
		}
	}
</script>

<style>
	.icon-pokemon
	{
		text-align: center;
		position: absolute;
		width: 3.5vw;
	}
	.icon-pokemon .principal
	{
		max-width: 100%;
		padding: 2px;
		margin: auto;
	}
	.icon-pokemon:hover
	{
		width: 4vw; 
	}
	.icon-pokemon:hover .principal
	{
		background-color: rgb(255, 255, 255);
		filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
		border-radius: 50%;
	}
	.icon-pokemon .options
	{
		display: inline-flex;
		margin-left: 0.2vw;
		margin-top: -1vw;
		cursor: pointer;
		visibility: hidden;
	}
	.icon-pokemon .options img
	{
		width: 3vw;
		filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
		margin: 0 1vw 0 -1vw;
		background-color: rgb(255, 255, 255);
		border-radius: 50%;
	}
	.icon-pokemon:hover .options
	{
		visibility: visible;
	}
</style>