<script>
	import Animation from './../components/Animation.svelte';
	import { view } from './../stores.js';

  let username = '', passwd = ''

  const login = async () => {
    // verifica se todos os campos estão preenchidos
    if(username === '' || passwd === '') {
      M.toast({html: 'Preecha todos os campos'})
    } else {
      username = ''
      passwd = ''
    }
  }
</script>

<div class="bg">
  <Animation>
    <div class="col s12 m8">
      <div class="card">
        <div class="card-content">
          <!-- usuário -->
          <div class="input-field">
            <input type="text" id="username" bind:value={username}>
            <label for="username">Usuário</label>
          </div>

          <div class="input-field">
            <input type="password" id="passwd" bind:value={passwd}>
            <label for="passwd">Senha</label>
          </div>

          <div class="center">
            <button class="btn-large grey darken-3" on:click={e => login()}>Login</button>
            <button class="btn-large blue darken-3" on:click={e => $view = 'home'}>Voltar</button>
          </div>
          <!-- card content -->
        </div>
        <!-- card -->
      </div>
    </div>
  </Animation>
</div>

<style>

</style>