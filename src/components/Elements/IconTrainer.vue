<template>
	<div ref="icon" class="icon-trainer">
		<img 
			draggable="false"
			class="principal"
			:src="getTrainerImage()"
		>
		<div class="options">
			<img
				draggable="false"
				:src="getPokemonImage()"
				@click="openPokedex()"
				title="Pokédex"
			>
			<img
				draggable="false"
				src="@/assets/img/icon/message-icon.png"
                @click="openDialogueModal()"
				title="Falar"
			>
		</div>
	</div>

	<ModalPokedex 
		ref="pokedex"
		v-show="showPokedex"
	/>

	<ModalDialogue
		ref="dialogue"
		v-show="showDialogue"
	/>
</template>

<script>
	import ModalPokedex from '../Modals/Pokedex.vue';
	import ModalDialogue from '../Modals/Dialogue.vue';
	import {getPokemon} from '../../dataRecovery';

	export default {
		name:"IconTrainer",
		components:{
			ModalPokedex,
			ModalDialogue
		},
		data () {
			return{
                pokemonImage: "none.gif",
				trainerImage: "none.png",
				showPokedex: false,
				showDialogue: false
			}
		},
		methods:{
			show(opts = {}) {
				this.trainerImage = opts.trainerImage;
                this.pokemonImage = opts.pokemonImage;
				this.$refs["icon"].style.marginLeft = opts.top + "vw";
				this.$refs["icon"].style.marginTop = opts.left + "vw";
			},
			getTrainerImage(){
				return require('@/assets/img/trainer/' + this.trainerImage)
			},
            getPokemonImage(){
				return require('@/assets/img/pokemon/' + this.pokemonImage)
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
			},
            openDialogueModal(){
				this.$refs.dialogue.show(
					{
						trainerImage: this.trainerImage
					}
				).then(async (close) => {
					if(close){
						this.showDialogue = false;
					}
				});
				this.showDialogue = true;
            }
		}
	}
</script>

<style>
	.icon-trainer
	{
		text-align: center;
		position: absolute;
		width: 3.5vw;
		border-radius: 50%; 
	}
	.icon-trainer:hover
	{
		width: 4vw; 
	}
	.icon-trainer:hover .principal
	{
		background-color: white;
		filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
		border-radius: 50%;
	}
	.icon-trainer .options
	{
		display: inline-flex;
		margin-left: -0.4vw;
		margin-top: -0.3vw;
		cursor: pointer;
		visibility: hidden;
	}
	.icon-trainer .options img
	{
		width: 3vw;
		filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
		margin: 0 1vw 0 -1vw !important;
        background-color: white;
		border-radius: 50% !important;
	}
	.icon-trainer:hover .options
	{
		visibility: visible;
	}
</style>