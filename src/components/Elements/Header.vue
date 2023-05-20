<template>
	<div class="header">
		<div
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
					src="@/assets/img/icon/dex-icon.png"
					title="Pokémons na Pokédex"
				>
				<span>{{this.entryPokedex}}</span>
			</div>

			<div class="poke-list">
				<div class="poke-list-row" v-for="(entry, i) in pokedexList" :key="i">
					<div class="poke-list-cell">
						● {{ entry }}
					</div>
				</div>
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
				entryPokedex: 0,
				pokedexList: []
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
				let pokedexListStoraged = localStorage.getItem('pokedexList');
				this.pokedexList = JSON.parse(pokedexListStoraged);
			}
		}
	}
</script>

<style>
	.header
	{ 
		text-align: center;
		top: 50%;
  transform: translateY(-50%);
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
		margin: 1vw;
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

	/*********************** lista de pokémon ***********************/
	.poke-list
	{
		display:table;
		width: 20vw;
		margin-top: 2.5vw;
		font-size: 0.8em;
		height: 18vw;
		background-color: rgba(24, 24, 24, 0.781);
		border-style: solid;
		border-radius: 2vw;
		border-color: rgb(226, 66, 66);
		border-width: 1.5vw;;
		overflow: auto;
	}
	.poke-list:hover
	{
		background-color: rgb(199, 242, 248);
	}
	.poke-list-row
	{
		display:table-row;
		clear:both;
		color: rgba(0, 0, 0, 0.3);
	}
	.poke-list:hover .poke-list-row
	{
		color: rgba(0, 0, 0, 1);
	}
	.poke-list-cell
	{
		display:table-cell;
		width: 7vw;
		margin-left: -1.5vw;
	}
</style>
