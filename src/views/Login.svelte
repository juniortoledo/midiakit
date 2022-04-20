<script>
  import { auth, db } from "./../firebase.js";
  import Animation from "./../components/Animation.svelte";
  import { view } from "./../stores.js";

  let email = "",
    passwd = "";

  const login = async () => {
    // verifica se todos os campos estão preenchidos
    if (email === "" || passwd === "") {
      M.toast({ html: "Preecha todos os campos" });
    } else {
      // login do usuário
      auth
        .signInWithEmailAndPassword(email, passwd)
        .then((res) => {
          // id do usuário
          const id = res.user.uid;

          db.collection("users")
            .doc(id)
            .get()
            .then((res) => {
              // define as sessions
              sessionStorage.setItem("level", res.data().level);
              $view = "painel";
              sessionStorage.setItem("id", id);
              sessionStorage.setItem("view", $view);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          M.toast({ html: "E-mail ou senha incorretos!" });
        });

      // email = "";
      // passwd = "";
    }
  };
</script>

<div class="bg">
  <Animation>
    <div class="col s12 m8">
      <div class="card">
        <div class="card-content">
          <!-- usuário -->
          <div class="input-field">
            <input type="email" id="email" bind:value={email} />
            <label for="email">E-mail</label>
          </div>

          <div class="input-field">
            <input type="password" id="passwd" bind:value={passwd} />
            <label for="passwd">Senha</label>
          </div>

          <div class="center">
            <button class="btn-large grey darken-3" on:click={(e) => login()}
              >Login</button
            >
            <button
              class="btn-large blue darken-3"
              on:click={(e) => ($view = "home")}>Voltar</button
            >
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
