<template>
	<transition name="modal-fade">
		<div class="modal-pokedex" v-show="loadedData">
			<div class="modal-container-pokedex" role="dialog">
				<div>
					<div class="option-header-pokedex">
						<img 
							src="@/assets/img/icon/info-icon.png"
							@click="cancelar" 
							title="Informação"
							draggable="false"
						>
					</div>
				</div>
				<!-- início visualização de pokemon -->
					<div v-if="view == 'pokemon'" class="body-pokemon">
						<div class="intro">
							<div class="img-container">
								<img 
									v-show="name != ''"
									:src="require('@/assets/img/pokemon/' + image)"
									draggable="false"
								>
							</div>
							<div class="name">
								<span>{{name}}</span>
							</div>
						</div>
						<div class="information">
							<div>
								<span>#{{getNumberFormatted()}}</span>
							</div>
							<div class="type-container">
								<img 
									v-if="type[0]"
									class="type-image"
									:src="require('@/assets/img/type/' + type[0] + '.png')"
									:title="type[0]"
									draggable="false"
								>
								<img 
									v-if="type[1]"
									class="type-image"
									:src="require('@/assets/img/type/' + type[1] + '.png')"
									:title="type[1]"
									draggable="false"
								>
							</div>
							<div class="text-info-pokemon">
								<span>{{description.toUpperCase()}}</span>
							</div>
						</div>
					</div>
				<!-- fim visualização de pokemon -->
				<!-- início visualização de local -->
					<div v-if="view == 'location'" class="body-location">
						<div class="intro">
							<div class="img-container">
								<img 
									v-show="name != ''"
									:src="require('@/assets/img/place-icon/' + image)"
									draggable="false"
								>
							</div>
							<div class="name">
								<span>{{name.toUpperCase()}}</span>
							</div>
						</div>
						<div class="information">
							<div>
								<span>LOCAL</span>
							</div>
							<div class="text-info-location">
								<span>{{description.toUpperCase()}}</span>
							</div>
						</div>
					</div>
				<!-- fim visualização de local -->
				<div>
					<div class="close-header-pokedex">
						<img 
							src="@/assets/img/icon/close-icon.png"
							@click="cancelar" 
							title="Fechar Pokédex"
							draggable="false"
						>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'Modal-pokedex',
		data() {
			return {
				loadedData: false,
				view: "",
				image: "",
				name: "",
				description: "",
				number: "",
				type: [],
				resolvePromise: undefined,
				rejectPromise: undefined
			}
		},
		methods: {
			// função de criação do modal
			show(opts = {})
			{
				this.view = opts.view;
				this.image = opts.object.image;
				this.name = opts.object.name;
				this.description = opts.object.description;
				this.type = opts.object.type ? opts.object.type : [];
				this.number = opts.object.number ? opts.object.number : "";

				this.loadedData = true;

				return new Promise((resolve, reject) => {
					this.resolvePromise = resolve;
					this.rejectPromise = reject;
				});
			},
			// função para formatar número do Pokémon mostrado
			getNumberFormatted()
			{
				let num = this.number.toString();
				while (num.length < 4) {
					num = "0" + num;
				}
				return num;
			},
			// função para evento de confirmação
			confirmar()
			{
				this.resolvePromise(true);
			},
			// função para indicar fechamento de modal
			cancelar()
			{
				this.resolvePromise("fechar");
			}
		}
	};
</script>

<style>
	/******************* Estrutura do modal **********************/
	.modal-pokedex
	{
		position: absolute;
		top: 0;
		left: 0;
		width: 100.4%;
		height: 101%;
		background-color: rgba(0,0,0, .4);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999999999999;
	}
	.modal-container-pokedex
	{
		display: flex;
		width: 55vw;
		height: 41vw;
		background-image: url('../../assets/img/common/dex.png');
		background-repeat: no-repeat;
		background-size: 55vw;
		padding: 1em;
		position: relative;
	}

	/******************* opções do modal **********************/
	div.option-header-pokedex,
	div.close-header-pokedex
	{
		position: absolute;
	}
	div.option-header-pokedex
	{
		left: 5vw;
		top: 13.5vw;
	}
	div.close-header-pokedex
	{
		top: 13vw;
		left: 46.5vw;
	}
	div.option-header-pokedex img,
	div.close-header-pokedex img
	{
		width: 3vw;
		filter: drop-shadow(5px 5px 5px rgb(126, 126, 126));
		cursor: pointer;
	}

	/******************* imagens do modal **********************/
	.type-container .type-image
	{
		width: 3vw;
		display: inline;
		padding: 2px 5px 2px 5px;
	}
	.img-container
	{
		height: 60%;
	}
	.body-pokemon .intro img
	{
		margin: auto;
		display: block;
		width: 20vw;
		margin-top: -2vw;
	}
	.body-location .intro img
	{
		margin: auto;
		display: block;
		width: 10vw;
	}
	
	/******************* texto do modal **********************/
	.modal-pokedex .body-pokemon,
	.modal-pokedex .body-location
	{
		height: 30vw;
	}
	.body-pokemon .intro,
	.body-location .intro
	{
		position: absolute;
		width: 30%;
		height: 50%;
		margin: auto;
		top: 8vw;
		left: 0;
		bottom: 0;
		right: 45%;
	}
	.body-pokemon .intro .name
	{
		margin-top: 3vw;
	}
	.body-location .intro .name
	{
		margin-top: -2vw;
	}
	.body-pokemon .information,
	.body-location .information
	{
		display: inline-block;
		position: absolute;
		width: 40%;
		height: 45%;
		left: 20vw;
		margin: auto;
		top: 2vw;
		bottom: 0;
		right: 0;
	}
	.text-info-pokemon,
	.text-info-location
	{
		font-size: 0.9em;
		font-weight: bold;
		display: block;
		overflow: auto;	
	}
	.text-info-pokemon
	{
		max-height: 12vw;
	}
	.text-info-location
	{
		max-height: 16vw;
	}
	.body-pokemon .intro span,
	.body-location .intro span
	{
		font-size: 1.1em;
	}

	/******************* scrool **********************/
	::-webkit-scrollbar
	{
		width: 5px;
	}
	::-webkit-scrollbar-track
	{
		background: #daedf3f3; 
	}
	::-webkit-scrollbar-thumb
	{
		background: rgb(67, 146, 250); 
	}
</style>