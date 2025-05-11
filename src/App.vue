<script setup>
import HelloWorld from './components/HelloWorld.vue'
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
            <a class="nav-link" href="./pages/locationsPage/">Pontos de coleta</a>
            <a class="nav-link" href="./pages/aboutEletronicWastePage/">Conscientize-se</a>
            <a class="nav-link" href="./pages/aboutUsPage/">Sobre o projeto</a>
          </div>
        </div>
      </div>
    </nav>
  </div>
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

        .navbar-nav a {
          margin-left: 15px;
          color: #FFF;
          font-weight: bold;
        }
      }
  }


</style>
