<template>
    <div class="container">
        <img v-show="imagemVisivel" :src="urlImagem" :alt="banner">
        <button @click="apareceEsconde(), segundoMetodo()">{{ nomeBotao }}</button>
    </div>
</template>
<script>
    export default {
        name: "ImagemComponent",
        data() {
            return {
                imagemVisivel : true,
                banner: "valor do alt",
                // pathImagem : "https://static.botafogo.com.br/upload/noticia/bafb5c2df19a43388d82792494ddaa10.jpg"
            }
        },
        methods: {
            apareceEsconde() {
                this.imagemVisivel = !this.imagemVisivel;
                this.$emit('visibilidadeImg', this.imagemVisivel);
            },
            segundoMetodo() {
                setTimeout(() => {
                    console.log('Segundo Metodo Acionado!');
                }, 2000);
            }
        },
        props: {
            urlImagem : String,
            nomeBotao : String
        },
        emits: ["visibilidadeImg"]
    }
</script>

<style>

    img {
        width: 300px;
        height: auto;
        border: solid 4px darkcyan;
        margin: 16px;
        border-radius: 16px;
        box-shadow: 2px 2px 10px 2px darkcyan;
    }

    button {
        padding: 12px;
        font-weight: bold;
        color: darkcyan;
        background: azure;
        border: solid 2px darkcyan;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.5s;
    }

    button:hover {
        background-color: darkcyan;
        color: azure;
    }

    .container {
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: center;
        margin: 16px;
        border-bottom: solid 2px lightblue;
        padding: 16px;

    }
    



</style>

