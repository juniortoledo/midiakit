<script>
	import Login from './views/Login.svelte';
	import Home from './views/Home.svelte';
	import {view} from './stores'
</script>

{#if $view === 'home'}
	<Home />
{:else if  $view == 'login'}
	<Login />
{/if}

<style>
	:global(body) {
		margin:0;
		padding: 0;
	}

	:global(.center) {
		text-align: center;
	}
</style>
