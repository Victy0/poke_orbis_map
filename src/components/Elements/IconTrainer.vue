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
				:class="blockPokemon ? 'disabled' : ''"
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
</template>

<script>
	export default {
		name: "Icon-trainer",
		emits: [
			"pokedexEntryTrainer",
			"dialogueTrainerClick",
			"pokedexTrainerClick"
		],
		data() {
			return {
				trainerName: "",
				trainerImage: "none",
				dialogue: "",
				hasPokemon: true,
				blockPokemon: false,
				pokemonGen: "",
				pokemonRef: "none"
			}
		},
		methods:{
			// função de iniciação do ícone
			show(opts = {})
			{
				this.trainerName = opts.trainerName;
				this.trainerImage = opts.trainerImage;
				this.dialogue = opts.dialogue;
				this.hasPokemon = opts.hasPokemon;
				if(this.hasPokemon)
				{
					this.blockPokemon = opts.blockPokemon;
					this.pokemonGen = opts.pokemonGen;
					this.pokemonRef = opts.pokemonRef;
				}
				else
				{
					this.blockPokemon = true;
					this.pokemonRef = "none";
				}
				this.$refs["icon"].style.marginLeft = opts.top + "vw";
				this.$refs["icon"].style.marginTop = opts.left + "vw";
			},
			// função para recuperar o caminho da imagem do Treinador
			getTrainerImage()
			{
				return require('@/assets/img/trainer/' + this.trainerImage + '.png');
			},
			// função para recuperar o caminho da imagem do Pokémon
			getPokemonImage()
			{
				return require('@/assets/img/pokemon/' + this.pokemonRef + '.gif');
			},
			// função para abrir pokédex
			async openPokedex()
			{
				let pokedexList = localStorage.getItem('pokedexList');
				pokedexList = JSON.parse(pokedexList);
				if(!pokedexList.includes(Number(this.pokemonRef)))
				{
					pokedexList.push(this.pokemonRef);
					localStorage.setItem('pokedexList', "[" + pokedexList.toString() + "]");
					this.$emit('pokedexEntryTrainer');
				}

				this.$emit(
					'pokedexTrainerClick', 
					{
						view: "pokemon",
						pokedexEntry: this.pokemonGen + '.' + this.pokemonRef
					}
				);
			},
			// função para abrir modal de diálogo
			openDialogueModal()
			{
				if(this.blockPokemon && this.hasPokemon)
				{
					this.blockPokemon = false;
				}

				this.$emit(
					'dialogueTrainerClick', 
					{
						name: this.trainerName,
						trainerImage: this.trainerImage,
						dialogue: this.dialogue
					}
				);
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
	}
	.icon-trainer .principal
	{
		max-width: 100%;
		padding: 2px;
		margin: auto;
	}
	.icon-trainer:hover
	{
		width: 4vw; 
	}
	.icon-trainer:hover .principal
	{
		background-color: rgb(255, 255, 255);
		filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
		border-radius: 50%;
	}

	/******************* opções **********************/
	.icon-trainer .options
	{
		display: inline-flex;
		margin-left: 0.2vw;
		margin-top: -1vw;
		visibility: hidden;
	}
	.icon-trainer .options img
	{
		width: 3vw;
		filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
		margin: 0 1vw 0 -1vw;
		background-color: rgb(255, 255, 255);
		border-radius: 50%;
		cursor: pointer;
	}
	.icon-trainer:hover .options
	{
		visibility: visible;
	}
	.icon-trainer .options .disabled
	{
		opacity: 0.6;
		pointer-events: none;
		cursor: none;
	}
</style>