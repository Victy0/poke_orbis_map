<template>
	<div 
		ref="icon" 
		class="icon-pokemon"
	>
		<img 
			draggable="false"
			class="principal"
			:class="this.pokemon ? getClass() : ''"
			:src="getImage()"
		>
		<div class="options">
			<img
				draggable="false"
				src="@/assets/img/icon/dex-icon.png"
				:class="this.pokemon ? (getClass() == 'hard-entry' ? 'disabled' : '' ) : ''"
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
				pokemon: {},
				pokemonRef: "none",
				showPokedex: false
			}
		},
		methods:{
			show(opts = {}) {
				this.pokemon = getPokemon(opts.pokemonGen + "." + opts.pokemonRef);
				this.pokemonRef = opts.pokemonRef;
				this.$refs["icon"].style.marginLeft = opts.top + "vw";
				this.$refs["icon"].style.marginTop = opts.left + "vw";
			},
			getImage(){
				return require('@/assets/img/pokemon/' + this.pokemonRef + '.gif')
			},
			getClass(){
				if(this.pokemon.rateCatch > 5)
				{
					return 'hard-entry';
				}
				else if(this.pokemon.rateCatch > 2)
				{
					return 'medium-entry';
				}
				else
				{
					return 'normal-entry';
				}
			},
			openPokedex(){
				if(this.pokemon.rateCatch > 2)
				{
					if(Math.random() < 0.4)
					{
						this.$refs["icon"].style.display = "none";
						this.pokemon = null;
					}
				}

				this.$refs.pokedex.show(
					{
						view: "pokemon",
						object: this.pokemon
					}
				).then(async (close) => {
					if(close){
						this.showPokedex = false;
					}
				});
				this.showPokedex = true;

				this.pokemon.rateCatch = 0;
			}
		}
	}
</script>

<style>
	/******************* principal **********************/
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
	.icon-pokemon:hover .normal-entry
	{
		background-color: rgb(255, 255, 255);
		filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
		border-radius: 50%;
	}
	.icon-pokemon:hover .hard-entry
	{
		background-color: rgb(248, 91, 91);
		filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
		border-radius: 50%;
	}
	.icon-pokemon:hover .medium-entry
	{
		background-color: rgb(247, 148, 148);
		filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
		border-radius: 50%;
	}

	/******************* opções **********************/
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
	.disabled
	{
		opacity: 0.6;
		pointer-events: none;
	}
</style>