<template>
	<transition name="modal-fade">
		<div class="modal-dialogue">
			<div class="modal-container-dialogue" role="dialog">
				<div>
					<div class="close-header-dialogue">
						<img 
							src="@/assets/img/common/close.png"
							@click="cancelar" 
							title="Fechar"
						>
					</div>
					<div class="body-dialogue">
						<div class="character">
							<img 
								draggable="false"
								:src="getTrainerImage()"
							>
						</div>
						<div class="texts">
							<div class="name">NOME</div>
							<div class="info">Textodfjahdjkfhadjfhjkadhfka hdfkhadkhfa khadkfhakdhfkad hadkfhakhdfka hadkfhakhdfkahd hdkfhakdhfkahdf khfdkhakdfhkaf </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'modalDialogue',
		data () {
			return {
				name: "",
				trainerImage: "none.png",
				special: false,
				description: "",
				resolvePromise: undefined,
				rejectPromise: undefined
			}
		},
		methods: {
			// função de criação do modal
			show(opts = {}) {
				this.name = opts.name;
				this.trainerImage = opts.trainerImage;
				this.special = opts.special;
				this.description = opts.description;
				return new Promise((resolve, reject) => {
					this.resolvePromise = resolve;
					this.rejectPromise = reject;
				});
			},
			getTrainerImage(){
				return require('@/assets/img/trainer/icon/' + this.trainerImage)
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
	.modal-dialogue
	{
		font-family: Pixel;
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
	.modal-container-dialogue
	{
		display: flex;
		width: 55vw;
		height: 41vw;
		background-repeat: no-repeat;
		background-size: 55vw;
		padding: 1em;
		position: relative;
	}

	/******************* opções do modal **********************/
	div.close-header-dialogue
	{
		position: absolute;
        z-index: 99999999999999;
	}
	div.close-header-dialogue
	{
		top: 10vw !important;
		left: 54vw !important;
	}
	div.close-header-dialogue img
	{
		width: 3.5vw;
		filter: drop-shadow(5px 5px 5px rgb(126, 126, 126));
		cursor: pointer;
	}

	/******************* texto do modal **********************/
	.modal-dialogue .body-dialogue
	{
        display: inline-flex;
	}
	.body-dialogue .character
	{
        width: 20vw;
		position: relative;
		display: flex;
		text-align: center;
	}
	.body-dialogue .character img
	{
		width: 7vw;
        background-color: rgb(245, 245, 245);
        filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
        padding: 1vw !important;
        z-index: 99999999999999;
	}
	.body-dialogue .texts
	{
		width: 45vw;
        height: 26vw;
        left: -8vw;
        top: 8vw;
        background-image: linear-gradient(to right, rgb(138, 136, 136) , rgb(255, 255, 255));
        filter: drop-shadow(0.2vw 0.2vw 0vw rgb(0, 0, 0));
        border-radius: 15px;
		position: relative;
	}
	.texts .name
	{
		padding: 1vw;
	}
	.texts .info
	{
		margin-left: 5%;
	}
	/******************* scroll **********************/
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