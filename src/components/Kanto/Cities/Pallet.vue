<template>
	<img 
		class="img-principal"
		src="@/assets/img/place_kanto/pallet.png"
		draggable="false"
	>
	<a class="arrow-left"/>
	<a class="arrow-right"/>
	<a class="arrow-top"/>
	<a class="arrow-bottom"/>

	<IconPokemon 
		ref="iconPokemon1"
		v-show="showPokemon"
		@changeBerriesValuePokemon = "decreaseBerryValue"
		@pokedexEntryWild = "emitPokedexEntry"
		@pokedexPokemonClick = "openPokedex"
	/>

	<IconTrainer 
		ref="iconTrainer1"
		v-show="showTrainer"
		@pokedexEntryTrainer = "emitPokedexEntry"
		@dialogueTrainerClick = "openDialogue"
		@pokedexTrainerClick = "openPokedex"
	/>

	<IconLocation 
		ref="iconLocation1"
		v-show="showLocation"
		@dialogueLocationClick = "openDialogue"
	/>

	<IconTree
		ref="iconTree"
		v-show="showTree"
		@changeBerriesValueTree = "addBerryValue"
		@pokedexEntryTree = "emitPokedexEntry"
	/>
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
			this.$refs.iconPokemon1.show(
				{
					isWild: false,
					pokemonGen: "1",
					pokemonRef: "128",
					refPerspective: "pok1",
					top: 30,
					left: 5
				}
			);
			this.showPokemon = true;

			this.$refs.iconTrainer1.show(
				{
					trainerName: "Aldebaran",
					trainerImage: "bug_catcher",
					dialogue: "Em busca de insetos para fortalecer meu time",
					hasPokemon: true,
					blockPokemon: false,
					pokemonGen: "1",
					pokemonRef: "1",
					top: 10,
					left: 10
				}
			);
			this.showTrainer = true;

			this.$refs.iconLocation1.show(
				{
					//locationRef: "1.1",
					dialogue: "teste",
					personName: "Aldebaran",
					personImage: "bug_catcher",
					top: 50,
					left: 30,
					size: 6
				}
			);
			this.showLocation = true;

			this.$refs.iconTree.show(
				{
					possiblePokedex: ["1.1","1.4","1.7"],
					top: 50,
					left: 20
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
</style>