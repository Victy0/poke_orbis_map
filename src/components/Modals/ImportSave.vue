<template>
	<transition name="modal-fade">
		<div class="modal-import">
			<div class="modal-container-import" role="dialog">
				<div class="body-import">
					<div class="message-import">
						<span>
							SERÁ NECESSÁRIO IMPORTAR ALGUM SAVE ANTERIORMENTE BAIXADO. CASO TENHA ALGUM, SOMENTE SEGUIR COM A IMPORTAÇÃO DO SAVE.
						</span>
						<div>
							<button class="hover-blue" @click="fileSelectClick">
								IMPORTAR SAVE
							</button>
							<input ref="fileSelect" type="file" accept=".txt" @click="resetFileCache" @change="importFile"/>
							
							<button class="hover-red" @click="cancel">
								CANCELAR
							</button>
						</div>
						<span v-show="showError" class="error-span">
							ARQUIVO IMPORTADO NÃO É VÁLIDO COMO ARQUIVO DE SAVE!
						</span>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import {decompressSave} from '../../dataRecovery';

	export default {
		name: 'modalImportSave',
		data() {
			return {
				showError: false,
				resolvePromise: undefined,
				rejectPromise: undefined
			}
		},
		methods: {
			// função de criação do modal
			show()
			{
				this.showError = false;
				return new Promise((resolve, reject) => {
					this.resolvePromise = resolve;
					this.rejectPromise = reject;
				});
			},
			// executar o clik do input de arquivo quando clicar no botão respectivo
			fileSelectClick()
			{
				this.$refs["fileSelect"].click();
			},
			//
			resetFileCache(event)
			{
				event.FileList = [];
			},
			// função para importar dados do arquivo selecionado
			importFile(event)
			{
				try
				{
					var reader = new FileReader();
					reader.onload = () => {
						let fileContent = reader.result;

						fileContent = JSON.parse(decompressSave(fileContent));

						if(!fileContent["perspective"] || !fileContent["berries"].toString() || !fileContent["pokedexList"])
						{
							this.showError = true;
							return;
						}

						if(fileContent["pokedexList"].length == 0)
						{
							fileContent["pokedexList"] = '[]';
						}
						else
						{
							fileContent["pokedexList"] = '[' + fileContent["pokedexList"] + ']';
						}

						localStorage.setItem("perspective", fileContent["perspective"]);
						localStorage.setItem("berries", fileContent["berries"]);
						localStorage.setItem("pokedexList", fileContent["pokedexList"]);

						this.resolvePromise(fileContent["perspective"]);
					};
					reader.readAsText(event.target.files[0]);
				}
				catch(e)
				{
					this.showError = true;
				}				
			},
			// função para fechar o modal sem fazer nada
			cancel()
			{
				this.resolvePromise(false);
			}
		}
	};
</script>

<style>
	/******************* Estrutura do modal **********************/
	.modal-import
	{
		position: absolute;
		top: 0;
		left: 0;
		width: 101%;
		height: 101%;
		background-color: rgba(0, 0, 0, 0.705);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999999999999;
	}
	.modal-container-import
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
	.body-import
	{
		display: inline-flex;
		position: absolute;
		top: 50%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}

	/******************** área de escolha **********************/
	.message-import
	{
		display: block;
		text-align: center;
		width: 100%;
		padding: 0.3em;
		font-size: 1em;
	}
	.message-import button
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
	}
	.message-import button:first-child
	{
		margin-top: 2vw;
	}
	.message-import button:last-child
	{
		margin-bottom: 2vw;
	}
	.message-import .hover-blue:hover
	{
		border: solid rgb(0, 38, 255);
		color: rgb(0, 38, 255);
		box-shadow: 0 1vw 4vw rgb(0, 38, 255);
	}
	.message-import .hover-red:hover
	{
		border: solid rgb(233, 3, 3);
		color: rgb(233, 3, 3);
		box-shadow: 0 1vw 4vw rgb(233, 3, 3);
	}
	.error-span
	{
		margin-top: 2vw;
		color: rgb(233, 3, 3);
	}
	input[type=file]
	{
		display: none;
	}
</style>