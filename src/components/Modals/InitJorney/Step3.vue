<template>
	<div class="container-two-size-step3">
		<div class="right-position-step3">
			<div class="select-element-container-step3" v-if="showOptions">
				<div class="select-element-step3">
					<input type="radio" id="1" name="optPartner" value="1" checked @change="changeValue()"> 
						<label for="1">
						<img src="@/assets/img/character/arnold.png">
						</label>
				</div>
				<div class="select-element-step3">
					<input type="radio" id="2" name="optPartner" value="2" @change="changeValue()">
						<label for="2">
						<img src="@/assets/img/character/cassidy.png">
						</label>
				</div>
				<div class="select-element-step3">
					<input type="radio" id="3" name="optPartner" value="3" @change="changeValue()">
						<label for="3">
						<img src="@/assets/img/character/erik.png">
						</label>
				</div>
			</div>
		</div>
		<div class="left-position-step3">
			<div class="name-bar-step3"></div>
			<div> 
				<span>{{name}}</span>
			</div>
			<div>
				<span class="info-step3">{{info}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'step3',
		emits: [
			"selectPartner",
		],
		data() {
			return {
				showOptions: false,
				partnerDatabase: [
					{character: "arnold", partners:[
						{number:"001", name:"BULBA", desc: ""},
						{number:"004", name:"CHAR", desc: ""},
						{number:"007", name:"SQUI", desc: ""}
					]},
					{character: "cassidy", partners:[
						{number:"", name:"", desc: ""},
						{number:"", name:"", desc: ""},
						{number:"", name:"", desc: ""}
					]},
					{character: "erik", partners:[
						{number:"082", name:"MAGNETON", desc: ""},
						{number:"299", name:"NOSEPASS", desc: ""},
						{number:"133", name:"EEVEE", desc: ""}
					]},
					{character: "joe", partners:[
						{number:"", name:"", desc: ""},
						{number:"", name:"", desc: ""},
						{number:"", name:"", desc: ""}
					]},
					{character: "luna", partners:[
						{number:"030", name:"RINA", desc: ""},
						{number:"0035", name:"FARY", desc: ""},
						{number:"300", name:"KITTY", desc: ""}
					]},
					{character: "nikki", partners:[
						{number:"", name:"", desc: ""},
						{number:"", name:"", desc: ""},
						{number:"", name:"", desc: ""}
					]},
					{character: "pete", partners:[
						{number:"048", name:"VENO", desc: ""},
						{number:"046", name:"COGU", desc: ""},
						{number:"123", name:"SLASH", desc: ""}
					]},
					{character: "seymour", partners:[
						{number:"", name:"", desc: ""},
						{number:"", name:"", desc: ""},
						{number:"", name:"", desc: ""}
					]},
					{character: "tyra", partners:[
						{number:"298", name:"ZURI", desc: ""},
						{number:"175", name:"LUCK", desc: ""},
						{number:"113", name:"CARY", desc: ""}
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
			let index = this.partnerDatabase.findIndex(obj => {
				return obj.character === characterName;
			});

			this.partnerList = this.partnerDatabase[index].partners;
			this.name = this.partnerList[0].name;
			this.info = this.partnerList[0].info;

			this.showOptions = true;
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
		display: column;
		overflow-y: auto;
		text-align: left;
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
	.info-step3
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
	}
	.select-element-step3 label img
	{
		width: 5.2vw;
	}
	.select-element-step3 input[type="radio"]:checked + label 
	{
		background-color: #bfb;
		border-color: #4c4;
	}
</style>