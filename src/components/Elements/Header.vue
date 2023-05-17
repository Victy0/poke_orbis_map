<template>
	<div class="header">
		<div 
			class="header-image"
			:class="this.isPerspective ? 'header-image' : 'header-image center-line'"
		>
			<img 
				src="@/assets/img/common/logo.png"
				draggable="false"
			>
		</div>
		<div>
			<img
				draggable="false"
				src="@/assets/img/icon/berry-icon.png"
				title="Quantidade de Berry"
			>
			<span>{{this.berries}}</span>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Header",
		components:{},
		data() {
			return{
				berries: 0,
				isPerspective: false
			}
		},
		methods:{
			setIsPerspective(newValue)
			{
				this.isPerspective = newValue;
			},
			updateValues()
			{
				this.berries = Number(localStorage.getItem('berries'));
			}
		}
	}
</script>

<style>
	.header
	{ 
		text-align: center;
	}
	.header-image
	{
		top: 10%;
		position: relative;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	.center-line
	{
		top: 50%;
	}
	.header-image img
	{
		margin: 1.5vw;
		width: 15vw;
		filter: drop-shadow(5px 5px 5px rgb(126, 126, 126));
	}
</style>
