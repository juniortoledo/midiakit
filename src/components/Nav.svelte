<script>
  import { view } from "./../stores.js";

  function mobileNav() {
    const elems = document.querySelectorAll(".sidenav");
    const instances = M.Sidenav.init(elems);
  }

  const sair = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("view");

    $view = "home";
  };
</script>

<nav class="blue darken-3">
  <div class="container">
    <div class="nav-wrapper">
      <div class="brand-logo">Grupo Diário</div>
      <span
        on:click={() => mobileNav()}
        data-target="mobile-demo"
        class="sidenav-trigger white-text"
        ><i class="material-icons">menu</i></span
      >
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <a href="#!" on:click={() => ($view = "painel")} class="white-text"
            >Home</a
          >
        </li>

        {#if sessionStorage.getItem("level") == 1}
          <li>
            <a href="#!" on:click={() => ($view = "users")} class="white-text"
              >Usuários</a
            >
          </li>
        {/if}
        <li>
          <a href="#!" on:click={() => sair()} class="white-text">Sair</a>
        </li>
      </ul>
    </div>
    <!-- container -->
  </div>
</nav>

<ul class="sidenav" id="mobile-demo">
  <li>
    <a href="#!" on:click={() => ($view = "painel")}>Home</a>
  </li>

  {#if sessionStorage.getItem("level") == 1}
    <li>
      <a href="#!" on:click={() => ($view = "users")}
        >Usuários</a
      >
    </li>
  {/if}
  <li>
    <a href="#!" on:click={() => sair()}>Sair</a>
  </li>
</ul>

<style>
  @media(min-width: 700px) {
    .sidenav-trigger {display: none;}
  }
</style>
