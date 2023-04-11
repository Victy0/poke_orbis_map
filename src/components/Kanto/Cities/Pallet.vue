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
	/>

	<IconTrainer 
		ref="iconTrainer1"
		v-show="showTrainer"
	/>

	<IconLocation 
		ref="iconLocation1"
		v-show="showLocation"
	/>

	<IconTree
		ref="iconTree"
		v-show="showTree"
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
					top: 30,
					left: 5
				}
			);
			this.showPokemon = true;

			this.$refs.iconTrainer1.show(
				{
					trainerImage: 'bug_catcher.png',
					pokemonImage: '128.gif',
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
		}
	}
</script>

<style>
</style>