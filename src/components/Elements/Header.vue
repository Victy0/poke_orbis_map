<template>
	<div class="header">
		<div 
			class="header-image"
			:class="isPerspective ? 'header-image' : 'header-image center-line'"
		>
			<img 
				src="@/assets/img/common/logo.png"
				draggable="false"
			>
		</div>
		<div 
			v-show="isPerspective"
			class="list-element"
		>
			<div class="element-info">
				<img
					draggable="false"
					src="@/assets/img/icon/berry-icon.png"
					title="Quantidade de Berry"
				>
				<span>{{this.berries}}</span>
			</div>
			<div class="element-info">
				<img
					draggable="false"
					src="@/assets/img/icon//dex-icon.png"
					title="Pokémons na Pokédex"
				>
				<span>{{this.entryPokedex}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Header",
		components:{},
		data() {
			return{
				berries: 0,
				isPerspective: false,
				entryPokedex: 0
			}
		},
		methods:{
			setIsPerspective(newValue)
			{
				this.isPerspective = newValue;
			},
			updateBerry()
			{
				this.berries = Number(localStorage.getItem('berries'));
			},
			updatePokedex()
			{
				this.entryPokedex = this.entryPokedex + 1;
			}
		}
	}
</script>

<style>
	.header
	{ 
		text-align: center;
	}

	/*********************** imagem principal ************************/
	.header-image
	{
		top: 10%;
		position: relative;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	.center-line
	{
		top: 50%;
	}
	.header-image img
	{
		margin: 1.5vw;
		width: 15vw;
		filter: drop-shadow(5px 5px 5px rgb(126, 126, 126));
	}

	/*********************** corpo  ************************/
	.list-element div
	{
		display: block;
		margin-bottom: 0.5vw;
	}

	/*********************** elementos do corpo  ************************/
	.element-info
	{
		display: inline-flex;
	}
	.element-info img
	{
		width: 3vw;
		margin: 0 1vw -1vw -1vw;
	}
	.element-info span
	{
		color: white;
		font-size: 1.1vw;
	}
</style>
