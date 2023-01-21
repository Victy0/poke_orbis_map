<template>
	<div class="header">
		<div class="ceter">
			<img 
				id="view"
				draggable="false" 
				src="@/assets/img/common/logo.png"
			>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Header",
		components:{},
		methods:{}
	}
</script>

<style>
	.header
	{ 
		text-align: center;
	}
	.ceter
	{
		position: absolute;
		top: 50%;
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	.ceter img
	{
		margin: 1.5vw;
		width: 15vw;
		filter: drop-shadow(5px 5px 5px rgb(126, 126, 126));
	}
</style>
