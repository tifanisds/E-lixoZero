<script setup>
</script>

<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="logo">
            <img src="./assets/img/logo.png" alt="">
          </div>
          <div class="navbar-nav">
            <router-link class="nav-link" to="/">Pontos de coleta</router-link>
            <router-link class="nav-link" to="/aboutEletronicWastePage">Conscientize-se</router-link>
            <router-link class="nav-link" to="/aboutUsPage">Sobre o projeto</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<style scoped lang="scss">
  @use "assets/styles/variables.scss" as *;

  .bg-body-tertiary {
      background-color: $mainColor !important;

      .navbar-collapse {
        display: flex;
        justify-content: space-between;
        padding: 0 20px 0 20px;

          .logo img{
          width: 100px;
        }

        .navbar-nav .nav-link {
          margin-left: 15px;
          color: #FFF;
          font-weight: bold;
          font-size: 18px;
        }
      }
  }

  @media (max-width: 768px) {
    .bg-body-tertiary {

      .navbar-collapse {

        .navbar-nav .nav-link {
          font-size: 14px;
        }
      }
    }
    
  }
</style>
