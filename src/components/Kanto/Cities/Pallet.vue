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
	/>

	<IconTrainer 
		ref="iconTrainer1"
		v-show="showTrainer"
		@pokedexEntryTrainer = "emitPokedexEntry"
	/>

	<IconLocation 
		ref="iconLocation1"
		v-show="showLocation"
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
		name:"Pallet",
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
		data () {
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
					trainerImage: "bug_catcher.png",
					pokemonGen: "1",
					pokemonRef: "1",
					top: 10,
					left: 10
				}
			);
			this.showTrainer = true;

			this.$refs.iconLocation1.show(
				{
					name: '',
					description: '',
					top: 50,
					left: 30,
					size: 6
				}
			);
			this.showLocation = true;

			this.$refs.iconTree.show(
				{
					possiblePokedex: ["1.1","1.128","1.3"],
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
</style>