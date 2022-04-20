<script>
  import Login from "./views/Login.svelte";
  import Home from "./views/Home.svelte";
  import { view } from "./stores";
  import Painel from "./views/Painel.svelte";

  if (sessionStorage.getItem("view")) {
    $view = sessionStorage.getItem("view");
  } else {
    $view = "home";
  }
</script>

{#if $view === "home"}
  <Home />
{:else if $view == "login"}
  <Login />
{:else if $view == "painel"}
  <Painel />
{/if}

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }

  :global(.center) {
    text-align: center;
  }
</style>
