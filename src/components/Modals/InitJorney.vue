<template>
	<transition name="modal-fade">
		<div class="modal-init">
			<div class="modal-container-init" role="dialog">
				<div class="body-init">
					<div class="message-init">

						<div v-if="step == 1" class="text-area-init">
							<span>
								EXPLICAÇÃO DO PROJETO
							</span>
						</div>
						<div v-else-if="step == 2" class="text-area-init">
							<span>
								ESCOLHA DE PERSONAGEM
							</span>
						</div>
						<div v-else class="text-area-init">
							<span>
								ESCOLHA DE POKÉMON
							</span>
						</div>


						<div class="button-area-init">
							<button class="hover-red" @click="cancel">
								CANCELAR
							</button>

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
	export default {
		name: 'modalInitJorney',
		data() {
			return {
				step: 0,
				resolvePromise: undefined,
				rejectPromise: undefined
			}
		},
		methods: {
			// função de criação do modal
			show()
			{
				this.step = 1;
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
		width: 101%;
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

		/******************** área de texto **********************/

	.text-area-init
	{
		text-align: center;
		height: 22vw;
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
		border: solid rgb(0, 38, 255);
		color: rgb(0, 38, 255);
		box-shadow: 0 1vw 4vw rgb(0, 38, 255);
	}
	.button-area-init .hover-red:hover
	{
		border: solid rgb(233, 3, 3);
		color: rgb(233, 3, 3);
		box-shadow: 0 1vw 4vw rgb(233, 3, 3);
	}
</style>