<script>
	import Animation from './../components/Animation.svelte';
	import { view } from './../stores.js';
</script>

<div class="section bg">
  <Animation>
    <div class="center">
      <h2 class="white-text">Diário Analytics</h2>
      <p class="white-text"> 
        Diário da Região - 
        FM Diário - 
        Diário Imóveis</p>
      
      <button 
        class="btn-large waves-effect waves-light blue darken-3" 
        on:click={() => $view = 'login'}
        >
        acessar
      </button>
    </div>
  </Animation>
  <!-- section -->
</div>

<style>
  :global(.bg) {
    animation-name: backgroundColorPalette;
    animation-duration: 15s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @keyframes backgroundColorPalette {
    0% {
      background: #880e4f;
    }
    25% {
      background: #283593;
    }
    50% {
      background: #0277bd;
    }
    75% {
      background: #ad1457;
    }
    100% {
      background: #37474f ;
    }
  }
</style>