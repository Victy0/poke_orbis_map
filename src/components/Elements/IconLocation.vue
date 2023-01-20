<template>
	<div class="icon-location" title="local">
        <div
			class="principal"
		/>
		<div class="options">
			<img
				draggable="false"
				src="@/assets/img/common/dex-icon.png"
				@click="openInformation()"
				title="Informação"
			>
			<img
				draggable="false"
				src="@/assets/img/common/door.png"
				title="Entrar"
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

	export default {
		name:"IconLocation",
		components:{
			ModalPokedex
		},
		data () {
			return{
				image: "none.png",
				showPokedex: false
			}
		},
		methods:{
			show() {
				
			},
			openInformation(){
				this.$refs.pokedex.show(
					{
						view: "location"
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
	.icon-location
	{
		text-align: center;
		position: absolute;
        left: 39.7vw;
        top: 29vw;
	}
	.icon-location .principal
	{
        width: 6vw;
		height: 6vw;
	}
	.icon-location .options
	{
		display: inline-flex;
		cursor: pointer;
		visibility: hidden;
        margin-left: 0.6vw;
        margin-top:-2vw
	}
	.icon-location .options img
	{
		width: 3vw;
		filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
		margin: 0 1vw 0 -1vw !important;
		background-color: rgb(255, 255, 255);
		border-radius: 50% !important;
	}
	.icon-location:hover .options
	{
		visibility: visible;
	}
</style>