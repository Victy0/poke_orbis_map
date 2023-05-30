<template>
	<div class="header">
		<div
			:class="isPerspective ? 'header-image' : 'header-image center-line'"
		>
			<img
				draggable="false"
				src="@/assets/img/common/logo.png"
				@click="goHome"
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

			<div class="player-info">
				<div>
					<img
						draggable="false"
						src="@/assets/img/icon/dex-icon.png"
						title="no title"
					>
				</div>
				<div >
					<img
						draggable="false"
						src="@/assets/img/icon/dex-icon.png"
						title="no title"
					>
				</div>
				<div>
					<img
						draggable="false"
						src="@/assets/img/icon/dex-icon.png"
						title="no title"
					>
				</div>
				<div class="save-icon">
					<img
						draggable="false"
						src="@/assets/img/icon/save.png"
						@click="importSave"
						title="Importar Save"
					>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import {compressSave} from '../../dataRecovery';
	
	export default {
		name:"Header",
		emits: ["goHome"],
		data() {
			return{
				berries: 0,
				isPerspective: false,
				entryPokedex: 0,
				pokedexList: []
			}
		},
		methods:{
			// função para alterar valor de indicação se é uma perspectiva diferente da intro
			setIsPerspective(newValue)
			{
				this.isPerspective = newValue;
			},
			// função para atualizar informação da quantidade de berries
			updateBerry()
			{
				this.berries = Number(localStorage.getItem('berries'));
			},
			// função para atualizar a listagem de pokémons vistos na pokédex
			updatePokedex()
			{
				this.entryPokedex = this.entryPokedex + 1;
				let pokedexListStoraged = localStorage.getItem('pokedexList');
				this.pokedexList = JSON.parse(pokedexListStoraged);
			},
			// função para importar o save
			async importSave()
			{
				let perspective = await localStorage.getItem('perspective');
				let compressText = compressSave(perspective, this.berries, this.pokedexList);

				var filename = "PokeOrbisMap_save";
				var blob = new Blob([JSON.stringify(compressText)], {type: 'text/plain'});
				if (window.navigator && window.navigator.msSaveOrOpenBlob) {
					window.navigator.msSaveOrOpenBlob(blob, filename);
				} else{
					var e = document.createEvent('MouseEvents'),
					a = document.createElement('a');
					a.download = filename;
					a.href = window.URL.createObjectURL(blob);
					a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
					e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
					a.dispatchEvent(e);
				}
			},
			// função de clique da imagem principal que retorna para a Intro
			goHome()
			{
				if(!this.isPerspective)
				{
					return;
				}

				this.$emit('goHome', 'intro');
			}
		}
	}
</script>

<style>
	/******************* principal **********************/
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
		cursor: pointer;
	}
	.center-line img
	{
		cursor: auto;
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
		display: table-row;
		clear: both;
		color: rgba(0, 0, 0, 0.3);
	}
	.poke-list:hover .poke-list-row
	{
		color: rgba(0, 0, 0, 1);
	}
	.poke-list-cell
	{
		display: table-cell;
		width: 7vw;
		margin-left: -1.5vw;
	}

	/*********************** linha info jogador ***********************/
	.player-info div
	{
		display: inline;
		margin: 0.5vw;
	}
	.player-info div img
	{
		width: 3vw;
	}
	.player-info .save-icon img
	{
		width: 2.5vw;
		cursor: pointer;
	}
</style>
