<template>
	<transition name="modal-fade">
		<div class="modal-init" v-show="loadedData">
			<div class="modal-container-init" role="dialog">
				<div class="body-init">
					<div class="message-init">

						<!-- step 1 -->
						<div v-if="step == 1" class="text-area-init">
							<img 
								class="image-show"
								src="@/assets/img/common/initial_step1.gif"
								draggable="false"
							>
							<div class="title">
								<span>
									EXPLICAÇÃO DO PROJETO
								</span>
							</div>
							<div class="container-step">
								<div class="info-explanation">
									<div class="info-explanation-options">
										<p>
											NESSE MUNDO POKÉMON, AS CRIANÇAS COM 10 A 13 ANOS PODEM REALIZAR A INICIATIVA CRIADA POR PESQUISADORES POKÉMON NOMEADA COMO JORNADA DE DESCOBRIMENTO.
										</p>
										<p>
											NESSA JORNADA, AS CRIANÇAS PODEM EXPLORAR O MUNDO, JUNTAMENTE COM UM POKÉMON, NO INTUITO DE REGISTRAR A MAIORIA DE POKÉMONS DIFERENTES QUE ENCONTRA NOS LOCAIS QUE VISITAR.
											O VERDADEIRO INTUITO É POSSIBILITAR MAIOR CONHECIMENTO SOBRE A REGIÃO QUE SE ENCONTRAM, O DIRECIONAMENTO PARA VIDA FUTURA, INFORMAÇÃO DE POKÉMONS E MISTÉRIOS DO MUNDO.
										</p>
										<p>
											SÃO PROTEGIDAS POR UM ROTOM TREINADO A SE FIXAR A CELULARES, UTILIZADOS PELAS CRIANÇAS, E QUE ESTÃO PREPARADOS PARA CRIAR BARREIRAS DE ENERGIA ALTAMENTE RESISTENTES.
											O ROTOM TAMBÉM É RESPONSÁVEL POR REGISTRAR OS POKÉMONS VISTOS E AUXILIAR EM INFORMAÇÃO SOBRE LOCAIS E PESSOAS.
										</p>
										<p>
											SENDO QUE CADA CRIANÇA PODE TER UMA EXPERIÊNCIA DIFERENTE, DEPENDENDO DO CAMINHO, POKÉMON COMPANHEIRO E INTERAÇÃO QUE ESCOLHE DURANTE SUA EXPERIÊNCIA NO MUNDO DE POKÉMON ORBIS MAP.
										</p>
									</div>
								</div>
							</div>
						</div>
						
						<!-- step 2 -->
						<div v-else-if="step == 2" class="text-area-init">
							<div class="title">
								<span>
									ESCOLHA DE PERSONAGEM
								</span>
							</div>
							<div class="container-step">
								<Step2
									ref="characterStep"
									class="step-allign"
									@selectCharacter = "setSelectedCharacter"
								/>
							</div>
						</div>

						<!-- step 3 -->
						<div v-else class="text-area-init">
							<span>
								ESCOLHA DE POKÉMON
							</span>
							<div class="container-step">
								<Step3
									ref="abibolado"
									class="step-allign"
									@selectPartner = "setSelectedPartner"
								/>
							</div>
						</div>

						<!-- botões -->
						<div class="button-area-init">
							<button class="hover-red" @click="cancel">
								CANCELAR
							</button>
							<!-- botões de seguimento -->
							<button v-if="step < 3" class="hover-blue" @click="nextPass">
								PRÓXIMO
							</button>
							<button v-else class="hover-blue" @click="jorney">
								INICIAR
							</button>
						</div>

					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import Step2 from './Step2.vue';
	import Step3 from './Step3.vue';

	export default {
		name: 'Modal-initJorney-step1',
		components:{
			Step2,
			Step3
		},
		data() {
			return {
				loadedData: false,
				step: 0,
				characterName: "arnold",
				resolvePromise: undefined,
				rejectPromise: undefined
			}
		},
		methods: {
			// função de criação do modal
			show()
			{
				this.step = 1;

				this.loadedData = true;

				return new Promise((resolve, reject) => {
					this.resolvePromise = resolve;
					this.rejectPromise = reject;
				});
			},
			// função para fechar o modal sem fazer nada
			cancel()
			{
				this.resolvePromise(false);
			},
			// função para seguir para próxima etapa de criação de jornada
			nextPass()
			{
				this.step++;
			},
			// função para salvar o personagem escolhido
			setSelectedCharacter(characterName)
			{
				localStorage.setItem('character', characterName);
				this.characterName = characterName;
			},
			// função para salvar o pokémon parceiro escolhido
			setSelectedPartner(partner)
			{
				localStorage.setItem('partner', partner);
			},
			// função para criar fechar o modal e iniciar a jornada
			jorney()
			{
				this.resolvePromise('pallet');
			}
		}
	};
</script>

<style>
	/******************* Estrutura do modal **********************/
	.modal-init
	{
		position: absolute;
		top: 0;
		left: 0;
		width: 100.4%;
		height: 101%;
		background-color: rgba(0, 0, 0, 0.705);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 9999999999999;
	}
	.modal-container-init
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
	.body-init
	{
		display: inline-flex;
		position: absolute;
		top: 50%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	.message-init
	{
		display: block;
		padding: 0.3em;
		font-size: 1em;
		width: 45vw;
	}
	.title
	{
		font-size: 1.2em;
		margin-bottom: 0.5em;
	}

		/******************** área de texto **********************/
	.text-area-init
	{
		text-align: center;
		height: 22vw;
	}
	.info-explanation
	{
		max-height: 19vw;
		overflow-y: auto;
	}
	.info-explanation-options
	{
		font-size: 0.9em;
	}
		/******************** imagem passo 1 **********************/
	.image-show
	{
		position: absolute;
		width: 18vw;
		margin-left: 23vw;
	}

		/******************** área de botões **********************/
	.button-area-init
	{
		display: inline-block;
		width: 100%;
	}
	.button-area-init button
	{
		font-family: Pixel;
		box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
		font-weight: 800;
		width: 11vw;
		height: 3.5vw;
		padding: 0.3em 1em;
		margin: 0.8em;
		cursor: pointer;
		background-color: #f8f8f8;
		margin-bottom: 2vw;
		border-radius: 1em;
	}
	.button-area-init button:first-child
	{
		margin-top: 2vw;
	}
	.button-area-init button:last-child
	{
		margin-left: 20vw;
	}
	.button-area-init .hover-blue:hover
	{
		border: solid rgb(255, 255, 255);
		background-color: rgb(42, 67, 212);
		color: rgb(255, 255, 255);
		box-shadow: 0 1vw 4vw rgb(42, 67, 212);
	}
	.button-area-init .hover-red:hover
	{
		border: solid rgb(255, 255, 255);
		background-color: rgb(233, 3, 3);
		color: rgb(255, 255, 255);
		box-shadow: 0 1vw 4vw rgb(233, 3, 3);
	}

	.container-step
	{
		max-height: 20vw;
		position: relative;
	}
	.step-allign
	{
		margin: 0;
		position: relative;
		top: 10vw;
		transform: translateY(-50%);
	}
</style>