<template>
  <nav-bar-component/>
  <banner-component/>
  <router-view />
  <footer-component/>
</template>

<script>

  import NavBarComponent from './components/NavBarComponent.vue';
  import FooterComponent from './components/FooterComponent.vue';
  import BannerComponent from './components/BannerComponent.vue';
  
  export default {
    name: "App",
    components: {
      NavBarComponent,
      FooterComponent,
      BannerComponent
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
