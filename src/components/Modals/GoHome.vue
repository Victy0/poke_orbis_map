<template>
	<transition name="modal-fade">
		<div class="modal-goHome">
			<div class="modal-container-goHome" role="dialog">
				<div class="body-goHome">
					<div class="message-goHome">
						<span>
							ESSA AÇÃO IRÁ RETORNAR PARA A INTRO E VOCÊ PERDERÁ O PROGRESSO DA SUA JORNADA. DESEJA REALMENTE ISSO?
						</span>
						<div>
							<button class="hover-green" @click="saveAndGo">
								SALVAR E IR PARA INTRO
							</button>

							<button class="hover-blue" @click="onlyGo">
								IR PARA A INTRO
							</button>
							
							<button class="hover-red" @click="cancel">
								CANCELAR
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import {compressSave} from '../../dataRecovery';

	export default {
		name: 'modalGoHome',
		data() {
			return {
				resolvePromise: undefined,
				rejectPromise: undefined
			}
		},
		methods: {
			// função de criação do modal
			show()
			{
				return new Promise((resolve, reject) => {
					this.resolvePromise = resolve;
					this.rejectPromise = reject;
				});
			},
			// função para importar o save e retonar para Intro
			async saveAndGo()
			{
				let perspective = await localStorage.getItem('perspective');
				let berries = await localStorage.getItem('berries');
				let pokedexList = await localStorage.getItem('pokedexList');
				let compressText = compressSave(perspective, berries, pokedexList);

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

				this.onlyGo();
			},
			// função para retornar para Intro
			onlyGo()
			{
				localStorage.clear();

				this.resolvePromise(true);
			},
			// função para fechar o modal
			cancel()
			{
				this.resolvePromise(false);
			}
		}
	};
</script>

<style>
	/******************* Estrutura do modal **********************/
	.modal-goHome
	{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.705);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999999999999;
	}
	.modal-container-goHome
	{
		display: flex;
		width: 45vw;
		height: 30vw;
		background-repeat: no-repeat;
		padding: 1em;
		position: relative;
		background-image: linear-gradient(to bottom right, rgb(242, 245, 247), rgb(66, 213, 224));
		border-radius: 2vw;
		border-style: groove;
		border-color: rgb(255, 0, 0); 
	}

	/******************* corpo do modal **********************/
	.body-goHome
	{
		display: inline-flex;
		position: absolute;
		top: 50%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}

	/******************** área de escolha **********************/
	.message-goHome
	{
		display: block;
		text-align: center;
		width: 100%;
		padding: 0.3em;
		font-size: 1em;
	}
	.message-goHome button
	{
		font-family: Pixel;
		box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
		font-weight: 800;
		width: 30vw;
		height: 3.5vw;
		padding: 0.3em 1em;
		margin: 0.8em;
		cursor: pointer;
		background-color: #f8f8f8;
		color: #000000;
	}
	.message-goHome button:first-child
	{
		margin-top: 3vw;
	}
	.message-goHome .hover-green:hover
	{
		border: solid rgb(26, 156, 0);
		color: rgb(26, 156, 0);
		box-shadow: 0 1vw 4vw rgb(26, 156, 0);
	}
	.message-goHome .hover-blue:hover
	{
		border: solid rgb(0, 38, 255);
		color: rgb(0, 38, 255);
		box-shadow: 0 1vw 4vw rgb(0, 38, 255);
	}
	.message-goHome .hover-red:hover
	{
		border: solid rgb(233, 3, 3);
		color: rgb(233, 3, 3);
		box-shadow: 0 1vw 4vw rgb(233, 3, 3);
	}
</style>