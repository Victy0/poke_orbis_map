<template>
	<div class="apresentation-view">
		<img 
			class="img-principal"
			src="@/assets/img/place_kanto/pallet.png"
			draggable="false"
			alt="Pallet Town"
		/>

		<a
			class="arrow-top"
			title="Rota 1"
		/>
		<a
			class="arrow-bottom position-arrow-bottom no-display"
			title="Rota 21"
		/>

		<!-- listagem pokémons -->
		<IconPokemon 
			ref="iconTauros"
			v-show="showPokemon"
			@changeBerriesValuePokemon = "decreaseBerryValue"
			@pokedexEntryWild = "emitPokedexEntry"
			@pokedexPokemonClick = "openPokedex"
		/>

		<IconPokemon 
			ref="iconShellder"
			v-show="showPokemon"
			@changeBerriesValuePokemon = "decreaseBerryValue"
			@pokedexEntryWild = "emitPokedexEntry"
			@pokedexPokemonClick = "openPokedex"
		/>

		<!-- listagem treinadores -->
		<IconTrainer 
			ref="trainer1"
			v-show="showTrainer"
			@pokedexEntryTrainer = "emitPokedexEntry"
			@dialogueTrainerClick = "openDialogue"
			@pokedexTrainerClick = "openPokedex"
		/>

		<IconTrainer 
			ref="arnold"
			v-show="showTrainer"
			@pokedexEntryTrainer = "emitPokedexEntry"
			@dialogueTrainerClick = "openDialogue"
			@pokedexTrainerClick = "openPokedex"
		/>

		<IconTrainer 
			ref="scientist1"
			v-show="showTrainer"
			@pokedexEntryTrainer = "emitPokedexEntry"
			@dialogueTrainerClick = "openDialogue"
			@pokedexTrainerClick = "openPokedex"
		/>

		<!-- listagem locais -->
		<IconLocation 
			ref="iconLocationLab"
			v-show="showLocation"
			@dialogueLocationClick = "openDialogue"
			@pokedexLocationClick = "openPokedex"
		/>

		<IconLocation 
			ref="iconLocationCenter"
			v-show="showLocation"
			@dialogueLocationClick = "openDialogue"
			@pokedexLocationClick = "openPokedex"
		/>

		<IconLocation 
			ref="iconLocationPostOffice"
			v-show="showLocation"
			@dialogueLocationClick = "openDialogue"
			@pokedexLocationClick = "openPokedex"
		/>

		<IconLocation 
			ref="iconLocationHome"
			v-show="showLocation"
			@dialogueLocationClick = "openDialogue"
			@pokedexLocationClick = "openPokedex"
		/>

		<IconLocation 
			ref="iconLocationBarn"
			v-show="showLocation"
			@dialogueLocationClick = "openDialogue"
			@pokedexLocationClick = "openPokedex"
		/>

		<!-- listagem arvores -->
		<IconTree
			ref="iconTree"
			v-show="showTree"
			@changeBerriesValueTree = "addBerryValue"
			@pokedexEntryTree = "emitPokedexEntry"
			@pokedexTreeClick = "openPokedex"
		/>
	</div>
</template>

<script>
	import IconPokemon from '../../Elements/IconPokemon.vue';
	import IconTrainer from '../../Elements/IconTrainer.vue';
	import IconLocation from '../../Elements/IconLocation.vue';
	import IconTree from '../../Elements/IconTree.vue';

	export default {
		name: "Pallet-town",
		components:{
			IconPokemon,
			IconTrainer,
			IconLocation,
			IconTree
		},
		emits: [
			"changeBerriesValue",
			"pokedexEntryPokemon",
			"openDialogue",
			"openPokedex"
		],
		data() {
			return{
				showPokemon: false,
				showLocation: false,
				showTrainer: false,
				showTree: true
			}
		},
		mounted(){
			// iniciação pokemons
			this.$refs.iconTauros.show(
				{
					isWild: false,
					pokemonGen: "1",
					pokemonRef: "128",
					refPerspective: "palletPok1",
					top: 2.5,
					left: 60
				}
			);
			this.$refs.iconShellder.show(
				{
					isWild: false,
					pokemonGen: "1",
					pokemonRef: "90",
					refPerspective: "palletPok2",
					top: 37,
					left: 17
				}
			);
			this.showPokemon = true;

			// iniciação treinadores
			this.$refs.trainer1.show(
				{
					trainerName: "Aldebaran",
					trainerImage: "bug_catcher",
					dialogue: "Em busca de insetos para fortalecer meu time",
					hasPokemon: true,
					blockPokemon: false,
					pokemonGen: "1",
					pokemonRef: "16",
					top: 12,
					left: 19
				}
			);
			this.$refs.arnold.show(
				{
					trainerName: "Arnold",
					trainerImage: "arnold",
					dialogue: "Eu vivo aqui!",
					hasPokemon: false,
					top: 19,
					left: 50
				}
			);
			this.$refs.scientist1.show(
				{
					trainerName: "Helena",
					trainerImage: "scientist_f",
					dialogue: "Ao caminho do trabalho posso descobrir muitas coisas novas...por exemplo, tem os pokémons pássaros que rodam as árvores próximas. Já encontrei alguns vistos comumente na região de Johto que Kanto!",
					hasPokemon: false,
					top: 24,
					left: 25
				}
			);
			this.showTrainer = true;

			// iniciação locais
			this.$refs.iconLocationLab.show(
				{
					locationRef: "1.1",
					hasDoor: true,
					//dialogue: "teste",
					//personName: "Aldebaran",
					//personImage: "bug_catcher",
					top: 30,
					left: 48,
					size: 7
				}
			);
			this.$refs.iconLocationCenter.show(
				{
					locationRef: "1.2",
					hasDoor: true,
					//dialogue: "teste",
					//personName: "Aldebaran",
					//personImage: "bug_catcher",
					top: 28.5,
					left: 40.5,
					size: 5
				}
			);
			this.$refs.iconLocationPostOffice.show(
				{
					locationRef: "1.3",
					hasDoor: true,
					//dialogue: "teste",
					//personName: "Aldebaran",
					//personImage: "bug_catcher",
					top: 9.5,
					left: 3,
					size: 5
				}
			);
			this.$refs.iconLocationHome.show(
				{
					locationRef: "1.4",
					hasDoor: false,
					dialogue: "teste",
					//personName: "Aldebaran",
					//personImage: "bug_catcher",
					top: 9,
					left: 28,
					size: 5
				}
			);
			this.$refs.iconLocationBarn.show(
				{
					locationRef: "1.5",
					hasDoor: false,
					dialogue: "teste",
					//personName: "Aldebaran",
					//personImage: "bug_catcher",
					top: 24,
					left: 8.5,
					size: 5
				}
			);
			this.showLocation = true;

			// iniciação arvores
			this.$refs.iconTree.show(
				{
					possiblePokedex: ["1.16","2.163"],
					top: 32,
					left: 25
				}
			);
			this.showTree = true;
		},
		methods:{
						/******************* FUNÇÕES PADRÕES **********************/
			// função para atualizar e emitir o ganho de 1 berry
			addBerryValue()
			{
				this.$refs.iconPokemon1.updateBerryValue(true);
				this.$emit('changeBerriesValue');
			},
			// função para atualizar e emitir o gasto de 1 berry
			decreaseBerryValue(refPerspective)
			{
				this.$refs.iconPokemon1.updateBerryValue(false, refPerspective);
				this.$emit('changeBerriesValue');
			},
			//  função para emitir nova entrada de pokémon
			emitPokedexEntry()
			{
				this.$emit('pokedexEntryPokemon');
			},
			// função para emitir a abertura do modal de diálogo
			openDialogue(dialogueInfo)
			{
				this.$emit('openDialogue', dialogueInfo);
			},
			// função para emitir a abertura do modal de pokedex
			openPokedex(pokedexInfo)
			{
				this.$emit('openPokedex', pokedexInfo);
			}
		}
	}
</script>

<style>
		/*************** SETAS TRANSIÇÃO *****************/
	.position-arrow-bottom
	{
		margin-left: 23vw;
		
	}
	.no-display
	{
		display: none;
	}
</style>