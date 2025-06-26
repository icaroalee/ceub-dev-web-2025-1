<template>
  <div>
    <h1>VUE</h1>
    <br>
    <home-component/>
    <br>
    <usuario-component/>
    <br>
    <imagem-component 
        @visibilidadeImg="alertaPalmeiras"
        nomeBotao="Aparece Palmeiras" 
        urlImagem="https://fly.metroimg.com/upload/q_85,w_700/https://uploads.metroimg.com/wp-content/uploads/2025/04/29101537/Facundo-Torres-e-Estevao-comemoram-na-vitoria-do-Palmeiras-1-2.jpg"/>
    <imagem-component 
        @visibilidadeImg="alertaBotafogo"
        nomeBotao="Aparece Botafogo" 
        :urlImagem="urlBanner"/>
    <br>
    <estilo-component/>
  </div>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'
import UsuarioComponent from './components/UsuarioComponent.vue';
import ImagemComponent from './components/ImagemComponent.vue';
import EstiloComponent from './components/EstiloComponent.vue';

export default {
  name: 'App',
  components: {
    HomeComponent,
    UsuarioComponent,
    ImagemComponent,
    EstiloComponent
  },
  data() {
    return {
      urlBanner : "https://static.botafogo.com.br/upload/noticia/bafb5c2df19a43388d82792494ddaa10.jpg"
    }
  },
  methods: {
    alertaPalmeiras(isVisivel){
      if(isVisivel){
        alert("Palmeiras visivel");
      }
    },
    alertaBotafogo(isVisivel) {
      if(isVisivel){
        alert("Botafogo visivel");
      }
    }
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated(){
    console.log("updated");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  unmounted(){
    console.log("unmounted");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
