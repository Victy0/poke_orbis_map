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
			ref="iconPokemon1"
			v-show="showPokemon"
			@changeBerriesValuePokemon = "decreaseBerryValue"
			@pokedexEntryWild = "emitPokedexEntry"
		/>

		<!-- listagem locais -->
		<IconLocation 
			ref="iconLocation1"
			v-show="showLocation"
		/>

		<!-- listagem treinadores -->
		<IconTrainer 
			ref="iconTrainer1"
			v-show="showTrainer"
			@pokedexEntryTrainer = "emitPokedexEntry"
		/>

		<!-- listagem árvores -->
		<IconTree
			ref="iconTree"
			v-show="showTree"
			@changeBerriesValueTree = "addBerryValue"
			@pokedexEntryTree = "emitPokedexEntry"
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
			"pokedexEntryPokemon"
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
			addBerryValue()
			{
				this.$refs.iconPokemon1.updateBerryValue(true);
				this.$emit('changeBerriesValue');
			},
			decreaseBerryValue(refPerspective)
			{
				this.$refs.iconPokemon1.updateBerryValue(false, refPerspective);
				this.$emit('changeBerriesValue');
			},
			emitPokedexEntry()
			{
				this.$emit('pokedexEntryPokemon');
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