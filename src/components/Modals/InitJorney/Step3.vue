<template>
	<div class="container-two-size-step3">
		<div class="right-position-step3">
			<div class="select-element-container-step3" v-if="showOptions">
				<div class="select-element-step3">
					<input type="radio" id="1" name="optPartner" value="1" checked @change="changeValue()"> 
						<label for="1">
						<img :src="require('@/assets/img/pokemon/' + partnerList[0].number)">
						</label>
				</div>
				<div class="select-element-step3">
					<input type="radio" id="2" name="optPartner" value="2" @change="changeValue()">
						<label for="2">
						<img :src="require('@/assets/img/pokemon/' + partnerList[1].number)">
						</label>
				</div>
				<div class="select-element-step3">
					<input type="radio" id="3" name="optPartner" value="3" @change="changeValue()">
						<label for="3">
						<img :src="require('@/assets/img/pokemon/' + partnerList[2].number)">
						</label>
				</div>
			</div>
		</div>
		<div class="left-position-step3">
			<div class="name-bar-step3"></div>
			<div class="name-bar-step3-options"> 
				<span>{{name}}</span>
			</div>
			<div class="info-step3">
				<span class="info-step3-options">{{info}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Modal-initJorney-step3',
		emits: [
			"selectPartner",
		],
		data() {
			return {
				showOptions: false,
				partnerDatabase: [
					{character: "arnold", partners:[
						{number:"1.png", name:"BULBA", info: "DADO A ARNOLD PELO PROFESSOR CARVALHO, JÁ QUE O GAROTO NÃO POSSUIA POKÉMON PARA A JORNADA DE DESCOBRIMENTO. FOI ESCOLHIDO POR SER MAIS CENTRADO E FICAR AJUDANDO A COLOCAR ORDEM NO LABORATÓRIO. UMA PERSONALIDADE CONTRASTANTE A ATRAPALHADA DE ARNOLD, O QUE FEZ O GAROTO O CONSIDERAR UM BOM PARCEIRO."},
						{number:"4.png", name:"CHAR", info: "DADO A ARNOLD PELO PROFESSOR CARVALHO, JÁ QUE O GAROTO NÃO POSSUIA POKÉMON PARA A JORNADA DE DESCOBRIMENTO. FOI ESCOLHIDO POR SER UM POUCO ATRAPALHADO, ONDE QUASE SEMPRE QUEIMA ALGO NO LABORATÓRIO COM A CHAMA DA SUA CAUDA SEM QUERER. A PERSONALIDADE FEZ ARNOLD SE COMPADECER COM ELE."},
						{number:"7.png", name:"SQUIRT", info: "DADO A ARNOLD PELO PROFESSOR CARVALHO, JÁ QUE O GAROTO NÃO POSSUIA POKÉMON PARA A JORNADA DE DESCOBRIMENTO. FOI ESCOLHIDO POR SER BEM BRINCALHÃO, JÁ QUE DE TEMPOS EM TEMPOS JOGA ÁGUA NOS DEMAIS POKÉMONS E PESQUISADORES DO LABORATÓRIO COMO FORMA DE BRINCADEIRA. ARNOLD TEM UM BOM VÍNCULO COM ELE, JÁ QUE É O PRINCIPAL ALVO DAS BRINCADEIRAS."}
					]},
					{character: "cassidy", partners:[
						{number:"", name:"", info: ""},
						{number:"", name:"", info: ""},
						{number:"", name:"", info: ""}
					]},
					{character: "erik", partners:[
						{number:"82.png", name:"MAGNETON", info: "AINDA QUANDO ERA UM MAGNEMITE SEMPRE VISITAVA ERIK A NOITE, DEVIDO A UMA MÁQUINA QUE O GAROTO TINHA CRIADO. APÓS ERIK TER APERFEIÇOADO A MÁQUINA, UMA NOITE SUMIU COM ELA E APARECEU NA NOITE SEGUINTE COMO UM MAGNETON. TAL FATO LEVOU A ERIK COMEÇAR A CUIDAR DELE E CRIAR NOVAS MÁQUINAS PARA VER COMO ELE REAGIA."},
						{number:"299.png", name:"NOSEPASS", info: "ADOTADO POR ERIK, EM UMA VISITA DO GAROTO A HOENN. ELE ERA O ÚNICO DE UM GRUPO DE 6 NOSEPASS QUE NÃO APONTAVAM PARA O NORTE, O QUE FEZ A CURIOSIDADE DE ERIK SER ACIONADA. COM O PASSAR DO TEMPO, ELE E ERIK ACABARAM SE TORNANDO BONS COMPANHEIROS."},
						{number:"133.png", name:"EEVEE", info: "FOI DADO PELO SEU PAI DEVIDO AO INTERESSE DE ERIK SOBRE EVOLUÇÕES DE POKÉMON. COSTUMA TENTAR BRINCAR COM ERIK, IGNORANDO TODOS OS BRINQUEDOS QUE O RAPAZ CRIOU PARA ELE. MESMO PARECENDO IGNORANDO, ELE E ERIK NUTREM UM CARRINHO UM PELO OUTRO."}
					]},
					{character: "joe", partners:[
						{number:"", name:"", info: ""},
						{number:"", name:"", info: ""},
						{number:"", name:"", info: ""}
					]},
					{character: "luna", partners:[
						{number:"30.png", name:"RINA", info: "UMA NIDORAN QUE ACOMPANHA LUNA DESDE OS 5 ANOS DA MENINA. SEMPRE TEVE MUITA ATENÇÃO DOS AMIGOS DE LUNA POR SER UM POKÉMON DIFERENCIADO NA REGIÃO DE HOENN, PORÉM MESMO COM TODA A ATENÇÃO SE MANTEVE HUMILDE E ALEGRE ASSIM COMO SUA DONA, A QUAL TEM UMA RELAÇÃO DE IRMANDADE."},
						{number:"35.png", name:"FARY", info: "AINDA QUANDO CLEFFA FOI DADA A LUNA POR SEU PAI, SE TORNANDO DESDE O PRIMEIRO DIA INSEPARÁVEL DE LUNA. COM O PASSAR DO TEMPO EVOLUI PARA CLEFAIRY, E COM ISSO PASSOU A TER UM SENTIMENTO MAIS PROTETORA COM LUNA. DEIXANDO ASSIM DE SE CONSIDERAR A IRMÃ MAIS NOVA PARA SE CONSIDERAR A MAIS VELHA DA RELAÇÃO."},
						{number:"300.png", name:"KITTY", info: "UMA DAS FILHAS DA DELCATT DA MÃE DE LUNA. ACOMPANHA LUNA DESDE OS 7 ANOS DA MENINA, A CONSIDERANDO ATÉ UMA DE SUAS IRMÃS. TEM UM PERSONALIDADE CIUMENTA, MAS CONSEGUE ENTENDER QUE LUNA NÃO PODE DAR ATENÇÃO SEMPRE PARA ELA...PELO MENOS FINGE QUE ENTENDE."}
					]},
					{character: "nikki", partners:[
						{number:"", name:"", info: ""},
						{number:"", name:"", info: ""},
						{number:"", name:"", info: ""}
					]},
					{character: "pete", partners:[
						{number:"48.png", name:"VENOM", info: "CAIU LITERALMENTE NA CABEÇA DE PETE DURANTE UMA EXPLORAÇÃO DO GAROTO NA FLORESTA DE VERIDIAN. POR TER MACHUCADO UMA DAS PATAS NA QUEDA, FOI CUIDADO POR PETE DURANTE 1 MÊS. DEVIDO A ISSO, OS DOIS ACABARAM UM SE APEGANDO AO OUTRO E DESDE ENTÃO SEGUEM JUNTOS EM AVENTURAS NA FLORESTA."},
						{number:"46.png", name:"COGUL", info: "FOI ENCONTRADO POR PETE QUANDO O GAROTO ESTAVA RECOLHENDO COGUMELOS NA FLORESTA DE VERIDIAN. PELO GAROTO TER COLETADOS UM DOS SEUS COGUMELOS, PASSOU A RECEBER COMIDA TODO DIA DELE. EM OUTRA FOI DANDO OUTROS COGUMELOS QUE ENCONTRAVAM E QUANDO DEU POR SI, JÁ ESTAVA COMPARTILHANDO AVENTURAS COM O NOVO AMIGO IMPROVÁVEL."},
						{number:"123.png", name:"SLASH", info: "UM POKÉMON BASTANTE DISPUTADO PELOS TREINADORES ESPECIALIZADOS DE TIPO INSETO POR GANHAR VÁRIAS BATALHAS NA FLORESTA DE VERIDIAN. DEVIDO À ALTA PROCURA DE TREINADORES, ACABOU SE TORNANDO AGRESSIVOS PARA HUMANOS. APÓS PETE TER O PROCURADO PARA DIZER QUE ELE ESTAVA NO CAMINHO CERTO, DECIDIU SE ALIAR AO GAROTO, SE TORNANDO BONS AMIGOS."}
					]},
					{character: "seymour", partners:[
						{number:"", name:"", info: ""},
						{number:"", name:"", info: ""},
						{number:"", name:"", info: ""}
					]},
					{character: "tyra", partners:[
						{number:"298.png", name:"ZURIL", info: "APARECEU CHORANDO ALEATORIAMENTE NO QUARTO DE TYRA, A QUAL NÃO CONSEGUIU ENCONTRAR DE ONDE VEIO. COM O TEMPO TYRA CONSEGUIU A DEIXAR COM UMA PERSONALIDADE FELIZ E AMIGÁVEL, O QUE REFLETIU NA GRANDE AJUDA A TYRA QUANDO O PAI FALECEU. ELA FOI A ÚNICA QUE CONSEGUIA TIRAR SORRISOS DE TYRA NOS PIORES DIAS DO TEMPO DE LUTO."},
						{number:"175.png", name:"LUCK", info: "NASCEU DE UM OVO DADO POR SEU PAI 1 MÊS ANTES DA MORTE DELE. CONSIDERANDO SER O ÚLTIMO PRESENTE PROPOSITAL DO SEU PAI, TYRA CUIDA DELA COMO SE FOSSE SUA IRMÃ MAIS NOVA. PORÉM, É MUITO CURIOSA E ADORA EXPLORAR, O QUE FAZ MUITAS VEZES TYRA TER QUE LARGAR A PESQUISA DO SEU PAI PARA SEGUIR ELA EM LOCAIS INUSITADOS."},
						{number:"113.png", name:"CARY", info: "FOI DADA PELA MÃE DE TYRA PARA CUIDAR DELA APÓS A MORTE DE SEU PAI. TEVE EMPECILHOS CRIADOS POR TYRA PARA CONSEGUIR SE APROXIMAR DELA. PORÉM, COM O TEMPO, DEVIDO A SUA NATUREZA PROTETORA E AJUDANDO NO ENTENDIMENTO DA PESQUISA DO PAI DE TYRA, ELA E TYRA CRIARAM UM VÍNCULO FORTE ONDE UMA CUIDA DA OUTRA."}
					]}
				],
				partnerList: [],
				name: "",
				info: ""
			}
		},
		// função para setar valores iniciais dependendo do personagem selecionado
		mounted() {
			let characterName = localStorage.getItem('character');
			if(characterName) 
			{
				let index = this.partnerDatabase.findIndex(obj => {
					return obj.character === characterName;
				});

				this.partnerList = this.partnerDatabase[index].partners;
				this.name = this.partnerList[0].name;
				this.info = this.partnerList[0].info;

				this.showOptions = true;
				localStorage.setItem('partner', this.name.toLowerCase());
			}
		},
		methods: {
			// função para alterar o parceiro selecionado
			changeValue()
			{
				let idSelected = (document.querySelectorAll("input[name=optPartner]:checked")[0].id) - 1;
				this.name = this.partnerList[idSelected].name;
				this.info = this.partnerList[idSelected].info;
				this.$emit('selectPartner', this.name.toLowerCase());
			}
		}
	};
</script>

<style>
	.container-two-size-step3
	{
		display: flex;
		flex-direction: inline;
	}
	.right-position-step3
	{
		width: 42%;
	}
	.left-position-step3
	{
		width: 57%;
		max-height: 50vw;
	}
	.name-bar-step3
	{
		background: linear-gradient(0.25turn, #43c2f8, #7dd1f5, #ffffff00);
		height: 3em;
		width: 50%;
		position: absolute;
		margin-left: -1em;
		z-index: -9999;
		border-radius: 1em;
	}
	.name-bar-step3-options
	{
		text-align: left;
	}
	.info-step3
	{
		max-height: 16vw;
		overflow-y: auto;
	}
	.info-step3-options
	{
		font-size: 0.9em;
	}
	/******************** opções **********************/
	.select-element-container-step3
	{
		display: block;
	}
	.select-element-step3
	{
		display: flex;
		margin: auto;
	}
	.select-element-step3 input[type="radio"] 
	{
		opacity: 0;
		position: fixed;
	}
	.select-element-step3 label
	{
		display: inline-block;
		background-color: #ddd;
		margin: 5px auto 5px auto;
		font-family: sans-serif, Arial;
		font-size: 16px;
		border: 2px solid #444;
		border-radius: 4px;
	}
	.select-element-step3 label:hover 
	{
		background-color: #dfd;
		cursor: pointer;
	}
	.select-element-step3 label img
	{
		width: 5.2vw;
	}
	.select-element-step3 input[type="radio"]:checked + label 
	{
		background-color: #bfb;
		border-color: #4c4;
		cursor: default;
	}
</style>