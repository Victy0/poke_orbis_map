<template>
	<transition name="modal-fade">
		<div class="modal-pokedex">
			<div class="modal-container-pokedex" role="dialog">
				<div>
					<div class="option-header-pokedex">
						<img 
							src="@/assets/img/icon/info-icon.png"
							@click="cancelar" 
							title="Informação"
						>
					</div>
				</div>
				
				<div v-if="view == 'pokemon'" class="body-pokedex">
					<div class="intro">
						<div class="img-container">
							<img src="@/assets/img/pokemon/128.gif">
						</div>
						<div class="name">
							<span>NOME</span>
						</div>
					</div>
					<div class="information">
						<div>
							<span>NUMBER</span>
						</div>
						<div>
							<button class="confirm" @click="confirmar">SIM</button> 
							<button class="cancel" @click="cancelar">NÃO</button>
						</div>
						<div>
							<span>info info info info info info info info info info info info  info info info info info info info info info info info </span>
						</div>
					</div>
				</div>

				<div v-if="view == 'location'" class="body">
					<div class="intro">
						<div class="img-container">
							<img src="@/assets/img/pokemon/128.gif">
						</div>
						<div class="name">
							<span>CENTRO POKÉMON</span>
						</div>
					</div>
					<div class="information">
						<div>
							<span>LOCAL</span>
						</div>
						<div>
							<button class="confirm" @click="confirmar">SIM</button> 
							<button class="cancel" @click="cancelar">NÃO</button>
						</div>
						<div>
							<span>info info info info info info info info info info info info  info info info info info info info info info info info
								info info info info info info info info info info info info  info info info info info info info info info info info </span>
						</div>
					</div>
				</div>

				<div>
					<div class="close-header-pokedex">
						<img 
							src="@/assets/img/icon/close-icon.png"
							@click="cancelar" 
							title="Fechar Pokédex"
						>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'modalPokedex',
		data () {
			return {
				view: "",
				title: "",
				message: "",
				resolvePromise: undefined,
				rejectPromise: undefined
			}
		},
		methods: {
			// função de criação do modal
			show(opts = {}) {
				this.view = opts.view;
				this.idPoke = opts.idPoke;
				return new Promise((resolve, reject) => {
					this.resolvePromise = resolve;
					this.rejectPromise = reject;
				});
			},
			// função para evento de confirmação
			confirmar() {
				this.resolvePromise(true);
			},
			// função para indicar fechamento de modal
			cancelar() {
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
		width: 100%;
		height: 100%;
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
		top: 12.5vw !important;
		left: 25vw !important;
	}
	div.option-header-pokedex img,
	div.close-header-pokedex img
	{
		width: 3vw;
		filter: drop-shadow(5px 5px 5px rgb(126, 126, 126));
		cursor: pointer;
	}
	

	/******************* texto do modal **********************/
	.modal-pokedex .body-pokedex
	{
		height: 30vw;
	}
	.body-pokedex .intro
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
	.img-container
	{
		height: 60%;
	}
	.body-pokedex .intro img
	{
		margin: auto;
		display: block;
		width: 20vw;
		margin-top: -2vw !important;
	}
	.body-pokedex .intro .name
	{
		margin-top: 3vw !important;
	}
	.body-pokedex .information 
	{
		display: inline-block;
		position: absolute;
		width: 40%;
		height: 48%;
		left: 20vw;
		margin: auto;
		top: 2vw;
		bottom: 0;
		right: 0;
	}
	.body-pokedex .information span
	{
		font-size: 0.9em;
		font-weight: bold;
		filter: drop-shadow(5px 5px 5px rgb(168, 167, 167));
		display: block;
		overflow: auto;
		max-height: 14vw;
	}
	.body-pokedex .intro span
	{
		font-size: 1.1em;
		filter: drop-shadow(5px 5px 5px rgb(168, 167, 167));
	}
	/******************* scrool **********************/
	::-webkit-scrollbar {
		width: 5px;
	}
	::-webkit-scrollbar-track {
		background: #daedf3f3; 
	}
	::-webkit-scrollbar-thumb {
		background: rgb(67, 146, 250); 
	}
</style>