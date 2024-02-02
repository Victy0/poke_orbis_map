<template>
	<div ref="icon" class="icon-location" title="local">
		<div ref="principal"
			class="principal"
		/>
		<div class="options">
			<img
				v-show="locationRef"
				draggable="false"
				:src="getImageOption1()"
				@click="openInformation()"
				:class="this.hasDialogue ? 'disabled' : ''"
				title="Informação"
			>
			<img
				v-show="hasDoor"
				draggable="false"
				src="@/assets/img/icon/door-icon.png"
				title="Entrar"
			>
			<img
				v-show="hasDialogue"
				draggable="false"
				src="@/assets/img/icon/message-icon.png"
				@click="openDialogueModal()"
				title="Falar"
			>
		</div>
	</div>
</template>

<script>
	import {getLocation} from '../../dataRecovery';

	export default {
		name: "Icon-location",
		emits: [
			"pokedexLocationClick"
		],
		data() {
			return{
				locationObject: {},
				locationRef: null,
				hasInfo: false,
				hasDoor: false,
				hasDialogue: false,
				dialogue: "",
				personName: "",
				personImage: "none"
			}
		},
		methods:{
			// função de iniciação do ícone
			async show(opts = {})
			{
				if(opts.locationRef)
				{
					this.locationRef = opts.locationRef;
					this.hasInfo = true;
					this.locationObject = getLocation(this.locationRef);

					if(opts.hasDoor)
					{
						this.hasDoor = true;
					}
					else
					{
						this.hasDialogue = true;
						this.dialogue = opts.dialogue;

						let character = localStorage.getItem('character');
						this.personName = character.replace(/^./, character[0].toUpperCase());
						this.personImage = character;
					}
				}
				else
				{
					this.hasDialogue = true;
					this.dialogue = opts.dialogue;
					this.personName = opts.personName;
					this.personImage = opts.personImage;
					this.hasDoor = false;
				}

				this.$refs["icon"].style.marginTop = opts.top + "vw";
				this.$refs["icon"].style.marginLeft = opts.left + "vw";

				this.$refs["principal"].style.width = (opts.size + 2) + "vw";
				this.$refs["principal"].style.height = opts.size + "vw";
			},
			// função para recuperar o caminho da imagem da opção 11 considerando se é para pokédex ou diálogo
			getImageOption1()
			{
				if(!this.locationRef)
				{
					return require('@/assets/img/trainer/' + this.personImage + '.png');
				}
				return require('@/assets/img/icon/dex-icon.png');
			},
			// função para abrir pokédex
			openInformation()
			{
				this.$emit(
					'pokedexLocationClick', 
					{
						view: "location",
						object: this.locationObject
					}
				);
			},
			// função para abrir modal de diálogo
			openDialogueModal()
			{
				this.$emit(
					'dialogueLocationClick', 
					{
						name: this.personName,
						trainerImage: this.personImage,
						dialogue: this.dialogue
					}
				);
			}
		}
	}
</script>

<style>
	/******************* principal **********************/
	.icon-location
	{
		text-align: center;
		position: absolute;
	}

	/******************* opções **********************/
	.icon-location .options
	{
		display: inline-flex;
		visibility: hidden;
		margin-left: 0.6vw;
		margin-top: -2vw
	}
	.icon-location .options img
	{
		width: 3vw;
		cursor: pointer;
		filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
		margin: 0 1vw 0 -1vw;
		background-color: rgb(255, 255, 255);
		border-radius: 50%;
	}
	.icon-location:hover .options
	{
		visibility: visible;
	}
	.icon-location .options .disabled
	{
		pointer-events: none;
		cursor: none;
	}
</style>