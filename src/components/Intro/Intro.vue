<template>
	<img 
		id="view"
		draggable="false" 
		src="@/assets/img/common/intro.png"
	>
	<div class="button-area">
		<img 
				id="view"
				draggable="false" 
				src="@/assets/img/common/logo.png"
		>
		<button class="button" @click="createJorney()">INICIAR</button>
		<button class="button">CONTINUAR</button>
	</div>
</template>

<script>
	export default {
		name:"Intro",
		mounted(){
			this.$nextTick(function() {
				window.addEventListener('resize', this.buildOptions);
			});
		},
		methods:{
			createJorney(){
				this.$emit('changePerspective', 'pallet');
			}
		}
	}
</script>

<style>
	/******************** ESTRUTURA BOTÕES *********************/
	.button-area
	{
		display: inline-block;
		position: absolute;
		margin-top: 5vw;
		margin-left: 11vw;
	}
	.button-area img
	{
		width: 35vw;
		left: 0 !important;
		margin-bottom: 3vw !important;
	}
	.button
	{
		font-family: Pixel;
		box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
		margin-left: 10vw;
		width: 15vw;
		border-radius: 4px;
		font-size: 1.1vw;
		padding: 14px 40px;
		background-color: #f8f8f8;
		text-align: center;
		cursor: pointer;
	} 
</style>