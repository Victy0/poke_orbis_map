<template>
	<div ref="icon" class="icon-tree" title="árvore">
		<div
			class="principal"
		/>
		<div class="options">
			<img
				draggable="false"
				src="@/assets/img/icon/berry-icon.png"
				:class="this.quantityBerries <= 0 ? 'disabled' : ''"
				@click="harvestBerry()"
				title="Colher berry"
			>
			<img
				draggable="false"
				v-show="!shakeHappened"
				src="@/assets/img/icon/leafs-icon.png"
				:class="this.pokedexEntryIndex < 0 ? 'disabled' : ''"
				@click="shakeTree()"
				title="Chacoalhar árvore"
			>
			<img
				v-show="shakeHappened"
				draggable="false"
				:src="getImage()"
				:class="this.pokedexEntryIndex < 0 ? 'disabled' : ''"
				@click="openPokedex()"
				title="Pokédex"
			>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Icon-tree",
		emits: [
			"changeBerriesValueTree",
			"pokedexEntryTree",
			"pokedexTreeClick"
		],
		data() {
			return{
				quantityBerries: 0,
				possiblePokedex: [],
				pokedexEntryIndex: 0,
				pokedexEntry: '',
				image: "none.gif",
				shakeHappened: false
			}
		},
		methods: {
			// função de iniciação do ícone
			show(opts = {})
			{
				this.quantityBerries = Math.floor(Math.random() * 5);
				this.possiblePokedex = opts.possiblePokedex;
				this.$refs["icon"].style.marginLeft = opts.top + "vw";
				this.$refs["icon"].style.marginTop = opts.left + "vw";
			},
			// função para colher fruta da árvore
			harvestBerry()
			{
				let berries = Number(localStorage.getItem('berries'));
				berries++;
				localStorage.setItem('berries', berries); 
				this.$emit('changeBerriesValueTree');
				this.quantityBerries--;
			},
			// função para chacaolhar árvore para aparecer um Pokémon (tem chance de não aprecer, quando for gerado randomicamente o valor 0)
			shakeTree()
			{
				this.pokedexEntryIndex = Math.floor(Math.random() * (this.possiblePokedex.length + 1)) - 1;
				if(this.pokedexEntryIndex < 0)
				{
					return;
				}

				this.pokedexEntry = this.possiblePokedex[this.pokedexEntryIndex];
				var numberArray = this.pokedexEntry.split('.');
				this.image = numberArray[1] + '.gif';
				
				this.shakeHappened = true;
			},
			// função para recuperar o caminho da imagem do Pokémon
			getImage()
			{
				return require('@/assets/img/pokemon/' + this.image)
			},
			// função para abrir pokédex (ao fechar não permite olhar novamente pokémon)
			async openPokedex()
			{
				let pokemonRef = this.pokedexEntry.split('.')[1];
				let pokedexList = localStorage.getItem('pokedexList');
				pokedexList = JSON.parse(pokedexList);
				if(!pokedexList.includes(Number(pokemonRef)))
				{
					pokedexList.push(pokemonRef);
					localStorage.setItem('pokedexList', "[" + pokedexList.toString() + "]");
					this.$emit('pokedexEntryTree');
				}

				this.$emit(
					'pokedexTreeClick', 
					{
						view: "pokemon",
						pokedexEntry: this.pokedexEntry
					}
				);
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
		visibility: hidden;
		margin-left: 0.6vw;
		margin-top:-2vw
	}
	.icon-tree .options img
	{
		width: 3vw;
		filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
		margin: 0 1vw 0 -1vw;
		background-color: rgb(255, 255, 255);
		border-radius: 50%;
		cursor: pointer;
	}
	.icon-tree:hover .options
	{
		visibility: visible;
	}
	.icon-tree .options .disabled
	{
		opacity: 0.6;
		pointer-events: none;
		cursor: none;
	}
</style>