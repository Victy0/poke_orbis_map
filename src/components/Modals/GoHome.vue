<template>
	<transition name="modal-fade">
		<div class="modal-goHome">
			<div class="modal-container-goHome" role="dialog">
				<div class="body-goHome">
					<div class="message">
						<label>ESSA AÇÃO IRÁ RETORNAR PARA A INTRO E VOCÊ PERDERÁ O PROGRESSO DA SUA JORNADA. DESEJA REALMENTE ISSO?</label>
						<div>
							<button class="confirm" @click="confirmar">SALVAR E IR PARA INTRO</button> 
							<button class="confirm" @click="cancelar">IR PARA A INTRO</button>
							<button class="confirm" @click="cancelar">CANCELAR</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
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
		background-color: rgba(0,0,0, .4);
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
		background-image: linear-gradient(rgb(146, 227, 252), rgb(223, 238, 245));
	}

	/******************* corpo do modal **********************/
	.modal-goHome .body-goHome
	{
		display: inline-flex;
	}

	/******************** área de escolha **********************/
	.message
	{
		display: block;
		text-align: center;
		width: 100%;
		padding: 0.3em;
		font-size: 1.2em;
	}
	.message button
	{
		font-size: 1.2rem;
		font-weight: 800;
		width: 30vw;
		height: 4vw;
		padding: 0.3em 1em;
		margin: 0.8em;
		cursor: pointer;
	}
	.message button:hover
	{
		color: rgb(0, 38, 255);
		box-shadow: 0 1vw 4vw rgb(0, 38, 255);
	}
	.confirm
	{
		background-color: #dadbdb;
		border: 1px solid #333333;
		color: #000000;
	}
</style>