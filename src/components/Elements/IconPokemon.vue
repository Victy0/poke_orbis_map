<template>
	<div 
		ref="icon" 
		class="icon-pokemon"
	>
		<img 
			draggable="false"
			class="principal"
			:class="this.pokemon ? getClass() : ''"
			:src="getImage()"
		>
		<div class="options">
			<img
				draggable="false"
				src="@/assets/img/icon/dex-icon.png"
				:class="this.pokemon ? (getClass() == 'hard-entry' ? 'disabled' : '' ) : ''"
				@click="openPokedex()"
				title="Pokédex"
			>
			<img
				draggable="false"
				src="@/assets/img/icon/berry-icon.png"
				:class="this.pokemon ? ((this.rateCatch <= 0 || this.rateCatch == 0) ? 'disabled' : '' ) : ''"
				@click="giveBerry()"
				title="Dar berry"
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
		name:"IconPokemon",
		components:{
			ModalPokedex
		},
		emits: [
			"changeBerriesValuePokemon",
			"pokedexEntryWild"
		],
		data () {
			return{
				pokemon: {},
				rateCatch: 100,
				pokemonRef: "none",
				berriesPlayer: 0,
				showPokedex: false,
				refPerspective: ""
			}
		},
		methods:{
			// função de iniciação do ícone
			async show(opts = {})
			{
				if(opts.isWild){
					this.pokemon = await getPokemon(opts.pokemonGen + "." + opts.pokemonRef);
					this.rateCatch = this.pokemon.rateCatch;
				}
				else
				{
					this.rateCatch = 0;
				}
				
				this.pokemonRef = opts.pokemonRef;
				this.refPerspective = opts.refPerspective;
				this.berriesPlayer = Number(localStorage.getItem('berries'));
				this.$refs["icon"].style.marginLeft = opts.top + "vw";
				this.$refs["icon"].style.marginTop = opts.left + "vw";
			},
			// função para recuperar o caminho da imagem do Pokémon
			getImage()
			{
				return require('@/assets/img/pokemon/' + this.pokemonRef + '.gif')
			},
			// função para recuperar a classe consideradno a dificuldade de captura
			getClass()
			{
				if(this.rateCatch > 5)
				{
					return 'hard-entry';
				}
				else if(this.rateCatch > 2)
				{
					return 'medium-entry';
				}
				else
				{
					return 'normal-entry';
				}
			},
			// função para abrir pokédex, considerando chance de fugir se dificuldade de captura for alta
			openPokedex()
			{
				if(this.rateCatch > 2)
				{
					if(Math.random() < 0.4)
					{
						this.$refs["icon"].style.display = "none";
						this.pokemon = null;
					}
				}

				let pokedexList = localStorage.getItem('pokedexList');
				pokedexList = JSON.parse(pokedexList);
				if(!pokedexList.includes(Number(this.pokemonRef)))
				{
					pokedexList.push(this.pokemonRef);
					localStorage.setItem('pokedexList', "[" + pokedexList.toString() + "]");
					this.$emit('pokedexEntryWild');
				}

				this.$refs.pokedex.show(
					{
						view: "pokemon",
						object: this.pokemon
					}
				).then(async (close) => {
					if(close){
						this.showPokedex = false;
					}
				});
				this.showPokedex = true;

				this.rateCatch = 0;
			},
			// função para dar berry e atualizar a quantidade carregada, o que diminui a dificuldade de captura
			giveBerry()
			{
				let berries = Number(localStorage.getItem('berries'));
				berries = berries - 1;
				localStorage.setItem('berries', berries);
				this.berriesPlayer = berries;
				this.$emit('changeBerriesValuePokemon', this.refPerspective);

				if(this.rateCatch > 1)
				{
					if(Math.random() < 0.2)
					{
						this.rateCatch = this.rateCatch - 2;
						return;
					}
				}
				this.rateCatch = this.rateCatch - 1;
			},
			// função para evento de colheita de berry
			updateBerryValue(isToAdd, refPerspective = '')
			{
				if(isToAdd)
				{
					this.berriesPlayer++;
				}
				else if(refPerspective != this.refPerspective)
				{
					this.berriesPlayer--;
				}
			}
		}
	}
</script>

<style>
	/******************* principal **********************/
	.icon-pokemon
	{
		text-align: center;
		position: absolute;
		width: 3.5vw;
	}
	.icon-pokemon .principal
	{
		max-width: 100%;
		padding: 2px;
		margin: auto;
	}
	.icon-pokemon:hover
	{
		width: 4vw;
	}
	.icon-pokemon:hover .normal-entry
	{
		background-color: rgb(255, 255, 255);
		filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
		border-radius: 50%;
	}
	.icon-pokemon:hover .hard-entry
	{
		background-color: rgb(248, 91, 91);
		filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
		border-radius: 50%;
	}
	.icon-pokemon:hover .medium-entry
	{
		background-color: rgb(247, 148, 148);
		filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
		border-radius: 50%;
	}

	/******************* opções **********************/
	.icon-pokemon .options
	{
		display: inline-flex;
		margin-left: 0.2vw;
		margin-top: -1vw;
		
		visibility: hidden;
	}
	.icon-pokemon .options img
	{
		width: 3vw;
		filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
		margin: 0 1vw 0 -1vw;
		background-color: rgb(255, 255, 255);
		border-radius: 50%;
		cursor: pointer;
	}
	.icon-pokemon:hover .options
	{
		visibility: visible;
	}
	.disabled
	{
		opacity: 0.6;
		pointer-events: none;
		cursor: none;
	}
</style>