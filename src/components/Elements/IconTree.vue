<template>
	<div ref="icon" class="icon-tree" title="árvore">
		<div
			class="principal"
		/>
		<div class="options">
			<img
				draggable="false"
				src="@/assets/img/icon/berry-icon.png"
				@click="harvestBerry()"
				title="Colher berry"
			>
			<img
                v-show="!shakeHappened"
				draggable="false"
				src="@/assets/img/icon/leafs-icon.png"
				@click="shakeTree()"
				title="Chacoalhar árvore"
			>
			<img
                v-show="shakeHappened"
				draggable="false"
				:src="getImage()"
				@click="openPokedex()"
				title="Pokédex"
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
		name:"IconLocation",
		components:{
			ModalPokedex
		},
		data () {
			return{
				image: "none.gif",
				showPokedex: false,
                shakeHappened: false
			}
		},
		methods:{
			show(opts = {}) {
				this.$refs["icon"].style.marginLeft = opts.top + "vw";
				this.$refs["icon"].style.marginTop = opts.left + "vw";
			},
            haverstberry() {

            },
            shakeTree() {
                this.image = '128.gif';
                this.shakeHappened = true;
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
	.icon-tree
	{
		text-align: center;
		position: absolute;
	}
	.icon-tree .principal
	{
        width: 3vw;
		height: 3vw;
	}
	.icon-tree .options
	{
		display: inline-flex;
		cursor: pointer;
		visibility: hidden;
        margin-left: 0.6vw;
        margin-top:-2vw
	}
	.icon-tree .options img
	{
		width: 3vw;
		filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
		margin: 0 1vw 0 -1vw !important;
		background-color: rgb(255, 255, 255);
		border-radius: 50% !important;
	}
	.icon-tree:hover .options
	{
		visibility: visible;
	}
</style>