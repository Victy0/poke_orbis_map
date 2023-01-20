<template>
	<img 
		id="view"
		draggable="false" 
		src="@/assets/img/places_kanto/pallet.png"
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
					image: 'TAUROS.gif',
					left: 10,
					top: 10
				}
			);
			this.showPokemon = true;

			this.$refs.iconTrainer1.show(
				{
					trainerImage: 'bug_catcher.png',
					pokemonImage: 'TAUROS.gif'
				}
			);
			this.showTrainer = true;

			this.$refs.iconLocation1.show(
				{
					name: '',
					description: ''
				}
			);
			this.showLocation = true;

			this.$refs.iconTree.show();
			this.showTree = true;
		},
		methods:{
		}
	}
</script>

<style>
</style>