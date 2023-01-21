<template>
	<div ref="icon" class="icon-location" title="local">
        <div ref="principal"
			class="principal"
		/>
		<div class="options">
			<img
				draggable="false"
				src="@/assets/img/icon/dex-icon.png"
				@click="openInformation()"
				title="Informação"
			>
			<img
				draggable="false"
				src="@/assets/img/icon/door-icon.png"
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
				image: "none.gif",
				showPokedex: false
			}
		},
		methods:{
			show(opts = {}) {
				this.$refs["icon"].style.marginLeft = opts.top + "vw";
				this.$refs["icon"].style.marginTop = opts.left + "vw";

				this.$refs["principal"].style.width = opts.size + "vw";
				this.$refs["principal"].style.height = opts.size + "vw";
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