<template>
	<img 
		class="img-principal" 
		src="@/assets/img/common/intro.png"
		draggable="false"
	>
	<div class="button-area">
		<img 
			src="@/assets/img/common/logo.png"
			draggable="false"
		>
		<button
			class="button hover-blue"
			@click="createJorney()"
		>
			INICIAR
		</button>
		<button
			class="button hover-green"
		>
			CONTINUAR
		</button>
	</div>
</template>

<script>
	export default {
		name:"Intro",
		emits: ["changePerspective"],
		methods: {
			// função para iniciar jornada criando o objeto de 'save' e direcionando para a primeira perspectiva
			createJorney()
			{
				localStorage.setItem('perspective', 'pallet');
				localStorage.setItem('berries', 0);
				localStorage.setItem('pokedexList', '[]');
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
		left: 0;
		padding: 5px;
		margin: auto;
		display: block;
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
	.hover-green:hover
	{
		border: solid rgb(26, 156, 0);
		color: rgb(26, 156, 0);
		box-shadow: 0 1vw 4vw rgb(26, 156, 0);
	}
	.hover-blue:hover
	{
		border: solid rgb(0, 38, 255);
		color: rgb(0, 38, 255);
		box-shadow: 0 1vw 4vw rgb(0, 38, 255);
	}
</style>