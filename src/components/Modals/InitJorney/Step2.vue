<template>
    <div class="container-two-size">
        <div class="right-position">
            <div class="select-element-container">
                <div class="select-element">
                    <input type="radio" id="1" name="optCharacter" value="1" checked @change="changeValue()"> 
                        <label for="1" title="1">
                        <img src="@/assets/img/trainer/bug_catcher.png">
                        </label>
                    <input type="radio" id="2" name="optCharacter" value="2" @change="changeValue()">
                        <label for="2" title="2">
                        <img src="@/assets/img/trainer/bug_catcher.png">
                        </label> 
                    <input type="radio" id="3" name="optCharacter" value="3" @change="changeValue()">
                        <label for="3" title="3">
                        <img src="@/assets/img/trainer/bug_catcher.png">
                        </label>
                </div>
                <div class="select-element">
                    <input type="radio" id="4" name="optCharacter" value="4" @change="changeValue()"> 
                        <label for="4" title="4">
                        <img src="@/assets/img/trainer/bug_catcher.png">
                        </label>
                    <input type="radio" id="5" name="optCharacter" value="5" @change="changeValue()">
                        <label for="5" title="5">
                        <img src="@/assets/img/trainer/bug_catcher.png">
                        </label>
                    <input type="radio" id="6" name="optCharacter" value="6" @change="changeValue()">
                        <label for="6" title="6">
                        <img src="@/assets/img/trainer/bug_catcher.png">
                        </label>
                </div>
                <div class="select-element">
                    <input type="radio" id="7" name="optCharacter" value="7" @change="changeValue()">
                        <label for="7" title="7">
                        <img src="@/assets/img/trainer/bug_catcher.png">
                        </label>
                    <input type="radio" id="8" name="optCharacter" value="8" @change="changeValue()">
                        <label for="8" title="8">
                        <img src="@/assets/img/trainer/bug_catcher.png" @change="changeValue()">
                        </label>
                    <input type="radio" id="9" name="optCharacter" value="9" @change="changeValue()">
                        <label for="9" title="9">
                        <img src="@/assets/img/trainer/bug_catcher.png">
                        </label>
                </div>
            </div>
        </div>
        <div class="left-position">
            <span>{{info}}</span>
        </div>
    </div>
</template>

<script>
	export default {
		name: 'modalInitJorney_step2',
		data() {
			return {
				characterInfo:
                    [
                        "1",
                        "texto 2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9"
                    ],
                info: ""
			}
		},
        mounted() {
            this.info = this.characterInfo[0];
        },
		methods: {
            // função para alterar a apresentação do personagem
            changeValue()
            {
                let idSelected = (document.querySelectorAll("input[name=optCharacter]:checked")[0].id) - 1;
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
		width: 45%;
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
