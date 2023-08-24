<template>
    <div class="container-two-size">
        <div class="right-position">
            <div class="select-element-container">
                <div class="select-element">
                    <input type="radio" id="1" name="optCharacter" value="arnold" checked @change="changeValue()"> 
                        <label for="1" title="Arnold">
                        <img src="@/assets/img/character/arnold.png">
                        </label>
                    <input type="radio" id="2" name="optCharacter" value="cassidy" @change="changeValue()">
                        <label for="2" title="Cassidy">
                        <img src="@/assets/img/character/cassidy.png">
                        </label> 
                    <input type="radio" id="3" name="optCharacter" value="erik" @change="changeValue()">
                        <label for="3" title="Erik">
                        <img src="@/assets/img/character/erik.png">
                        </label>
                </div>
                <div class="select-element">
                    <input type="radio" id="4" name="optCharacter" value="joe" @change="changeValue()"> 
                        <label for="4" title="Joe">
                        <img src="@/assets/img/character/joe.png">
                        </label>
                    <input type="radio" id="5" name="optCharacter" value="luna" @change="changeValue()">
                        <label for="5" title="Luna">
                        <img src="@/assets/img/character/luna.png">
                        </label>
                    <input type="radio" id="6" name="optCharacter" value="nikki" @change="changeValue()">
                        <label for="6" title="Nikki">
                        <img src="@/assets/img/character/nikki.png">
                        </label>
                </div>
                <div class="select-element">
                    <input type="radio" id="7" name="optCharacter" value="pete" @change="changeValue()">
                        <label for="7" title="Pete">
                        <img src="@/assets/img/character/pete.png">
                        </label>
                    <input type="radio" id="8" name="optCharacter" value="seymour" @change="changeValue()">
                        <label for="8" title="Seymour">
                        <img src="@/assets/img/character/seymour.png">
                        </label>
                    <input type="radio" id="9" name="optCharacter" value="tyra" @change="changeValue()">
                        <label for="9" title="Tyra">
                        <img src="@/assets/img/character/tyra.png">
                        </label>
                </div>
            </div>
        </div>
        <div class="left-position">
            <div class="name-bar"></div>
            <div> 
                <span>{{name}}</span>
            </div>
            <div>
                <span class="info">{{info}}</span>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'modalInitJorney_step2',
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
                info: "",
                name: "",
			}
		},
        mounted() {
            this.info = this.characterInfo[0];
            this.name = this.characterName[0];
        },
		methods: {
            // função para alterar a apresentação do personagem
            changeValue()
            {
                let idSelected = (document.querySelectorAll("input[name=optCharacter]:checked")[0].id) - 1;
                this.name = this.characterName[idSelected];
                this.info = this.characterInfo[idSelected];
            }
		}
	};
</script>

<style>
    .container-two-size
	{
		display: flex;
		flex-direction: inline;
	}
	.right-position
	{
		width: 42%;
	}
    .left-position
	{
		display: column;
        overflow-y: auto;
        text-align: left;
        width: 57%;
        max-height: 50vw;
	}
    .name-bar
    {
        background: linear-gradient(0.25turn, #43c2f8, #7dd1f5, #ffffff00);
        height: 3em;
        width: 50%;
        position: absolute;
        margin-left: -1em;
        z-index: -9999;
        border-radius: 1em;
    }
    .info
    {
        font-size: 0.9em;
    }
    /******************** opções **********************/
	.select-element-container
	{
		display: block;
	}
	.select-element 
	{
		display: flex;
	}
	.select-element input[type="radio"] 
	{
		opacity: 0;
		position: fixed;
	}
	.select-element label
	{
		display: inline-block;
		background-color: #ddd;
		margin: 5px;
		font-family: sans-serif, Arial;
		font-size: 16px;
		border: 2px solid #444;
		border-radius: 4px;
	}
	.select-element label:hover 
	{
		background-color: #dfd;
	}
	.select-element label img
	{
		width: 5.2vw;
	}
	.select-element input[type="radio"]:checked + label 
	{
		background-color: #bfb;
		border-color: #4c4;
	}
</style>
