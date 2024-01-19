<template>
	<div class="container-two-size-step2">
		<div class="right-position-step2">
			<div class="select-element-container-step2">
				<div class="select-element-step2">
					<input type="radio" id="1" name="optCharacter" value="arnold" checked @change="changeValue()"> 
						<label for="1" title="Arnold">
						<img src="@/assets/img/character/arnold.png">
						</label>
					<input type="radio" id="2" name="optCharacter" value="cassidy" @change="changeValue()" disabled>
						<label for="2" title="Cassidy" class="img-disabled">
						<img src="@/assets/img/character/cassidy.png">
						</label> 
					<input type="radio" id="3" name="optCharacter" value="erik" @change="changeValue()">
						<label for="3" title="Erik">
						<img src="@/assets/img/character/erik.png">
						</label>
				</div>
				<div class="select-element-step2">
					<input type="radio" id="4" name="optCharacter" value="joe" @change="changeValue()" disabled> 
						<label for="4" title="Joe" class="img-disabled">
						<img src="@/assets/img/character/joe.png" >
						</label>
					<input type="radio" id="5" name="optCharacter" value="luna" @change="changeValue()">
						<label for="5" title="Luna">
						<img src="@/assets/img/character/luna.png">
						</label>
					<input type="radio" id="6" name="optCharacter" value="nikki" @change="changeValue()" disabled>
						<label for="6" title="Nikki" class="img-disabled">
						<img src="@/assets/img/character/nikki.png">
						</label>
				</div>
				<div class="select-element-step2">
					<input type="radio" id="7" name="optCharacter" value="pete" @change="changeValue()">
						<label for="7" title="Pete">
						<img src="@/assets/img/character/pete.png">
						</label>
					<input type="radio" id="8" name="optCharacter" value="seymour" @change="changeValue()" disabled>
						<label for="8" title="Seymour" class="img-disabled">
						<img src="@/assets/img/character/seymour.png">
						</label>
					<input type="radio" id="9" name="optCharacter" value="tyra" @change="changeValue()">
						<label for="9" title="Tyra">
						<img src="@/assets/img/character/tyra.png">
						</label>
				</div>
			</div>
		</div>
		<div class="left-position-step2">
			<div class="name-bar-step2"></div>
			<div class="name-bar-step2-options"> 
				<span>{{name}}</span>
			</div>
			<div class="info-step2">
				<span class="info-step2-options">{{info}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Modal-initJorney-step2',
		emits: [
			"selectCharacter",
		],
		data() {
			return {
				characterName:
					[
						"ARNOLD",
						"CASSIDY",
						"ERIK",
						"JOE",
						"LUNA",
						"NIKKI",
						"PETE",
						"SEYMOUR",
						"TYRA"
					],
				characterInfo:
					[
						"SENDO UMA PESSOA ATRAPALHADA E INTROVERTIDA, CONSEGUE FAZER AMIZADES COM POKÉMONS COM MAIS FACILIDADES QUE HUMANOS. COSTUMA ENTRAR ESCONDIDO NO LABORATÓRIO DE PESQUISA DO PROFESSOR CARVALHO E BRINCAR COM OS POKÉMONS, QUE SE ENCONTRAM NO LOCAL, DE OUTROS TREINADORES. POR ESSE MOTIVO, NÃO CHEGOU A TER UM POKÉMON PRÓPRIO PARA SUA JORNADA DE DESCOBRIMENTO.",
						"CASSIDY",
						"UMA PESSOA COM A MENTALIDADE A FRENTE DO SEU TEMPO, ATÉ POR ISSO SEMPRE FICOU MEIO ISOLADO E PENSATIVO PELOS SEGREDOS E MISTÉRIOS DO MUNDO. POR NÃO CONSEGUIR SE CONECTAR COM POKÉMONS, DECIDIU NÃO SEGUIR COM A JORNADA DE DESCOBRIMENTO E SIM FOCAR TODA SUA ATENÇÃO AS INFLUÊNCIA QUE ALTERAÇÃO DE AMBIENTE POSSUI NA EVOLUÇÃO DE POKÉMONS.",
						"JOE",
						"SUA FAMÍLIA SE MUDOU RECENTEMENTE PARA KANTO E SE SENTE MEIO DESLOCADA NA REGIÃO. PORÉM, TEM UMA GRANDE ESPÍRITO EXPLORADOR E ESTÁ ANSIOSA PARA SUA JORNADA DE DESCOBRIMENTO PARA VER OS LOCAIS MAIS BONITOS DE KANTO. É UMA PESSOA PROTETORA E CUIDADOSA, O QUE REFLETE NA BOA SAÚDE DOS POKÉMONS DA SUA FAMÍLIA, A QUAL ELA CUIDA.",
						"NIKKI",
						"É FANÁTICO PELO ESPORTE DE BATALHAS DE POKÉMON E DIZ POSSUIR O SONHO DE VIRAR O CAMPEÃO DO TORNEIO DA LIGA POKÉMON. TEM UMA PAIXÃO POR POKÉMONS DO TIPO INSETO, DEVIDO A SUA MÃE TER SIDO UMA GRANDE TREINADORA ESPECIALIZADA NESSE TIPO. PERCEBE UMA CERTA DISCRIMINAÇÃO COM OS POKÉMONS TIPO INSETO E, POR ISSO, SEU VERDADEIRO SONHO É MOSTRAR O QUÃO PODEROSOS ELES SÃO.",
						"SEYMOUR",
						"APÓS O FALECIMENTO DE SEU PAI, SE FECHOU PARA O MUNDO E FOCOU TODO O SEU TEMPO PARA A PESQUISA QUE SEU PAI ESTAVA REALIZANDO A MAIS DE 3 ANOS ANTES DA SUA MORTE. PELO OCORRIDO NÃO SEGUIU COM SUA JORNADA DE DESCOBRIMENTO E FOCOU NO ESTUDO DA PESQUISA QUE LEVOU A DESCOBRIU UM ANTIGO COLAR O QUAL SEU PAI USAVA COM OS DIZERES 'LOCUS OBLIVIONIS', JUNTAMENTE COM ALGUMAS NOTAS QUE NÃO COMPREENDEU DE LUGARES DE KANTO."
					],
				info: "",
				name: "",
			}
		},
		mounted() {
			this.info = this.characterInfo[0];
			this.name = this.characterName[0];
			this.$emit('selectCharacter', "arnold");
		},
		methods: {
		// função para alterar o personagem selecionado
		changeValue()
			{
				let idSelected = (document.querySelectorAll("input[name=optCharacter]:checked")[0].id) - 1;
				this.name = this.characterName[idSelected];
				this.info = this.characterInfo[idSelected];
				this.$emit('selectCharacter', this.name.toLowerCase());
			}
		}
	};
</script>

<style>
	.container-two-size-step2
	{
		display: flex;
		flex-direction: inline;
	}
	.right-position-step2
	{
		width: 42%;
	}
	.left-position-step2
	{
		width: 57%;
		max-height: 18vw;
	}
	.name-bar-step2
	{
		background: linear-gradient(0.25turn, #43c2f8, #7dd1f5, #ffffff00);
		height: 3em;
		width: 50%;
		position: absolute;
		margin-left: -1em;
		z-index: -9999;
		border-radius: 1em;
	}
	.name-bar-step2-options
	{
		text-align: left;
	}
	.info-step2
	{
		max-height: 15vw;
		overflow-y: auto;
	}
	.info-step2-options
	{
		font-size: 0.8em;
	}
	/******************** opções **********************/
	.select-element-container-step2
	{
		display: block;
	}
	.select-element-step2
	{
		display: flex;
	}
	.select-element-step2 input[type="radio"] 
	{
		opacity: 0;
		position: fixed;
	}
	.select-element-step2 label
	{
		display: inline-block;
		background-color: #ddd;
		margin: 5px;
		font-family: sans-serif, Arial;
		font-size: 16px;
		border: 2px solid #444;
		border-radius: 4px;
	}
	.select-element-step2 label:hover 
	{
		background-color: #dfd;
		cursor: pointer;
	}
	.select-element-step2 label img
	{
		width: 5.2vw;
	}
	.select-element-step2 input[type="radio"]:checked + label 
	{
		background-color: #bfb;
		border-color: #4c4;
		cursor: default;
	}

	.img-disabled
	{
		opacity: 0.2;
	}
	.select-element-step2 input[type="radio"]:disabled + label
	{
		cursor: not-allowed;
	}
	.img-disabled:hover 
	{
		background-color: #ddd;
	}
</style>
