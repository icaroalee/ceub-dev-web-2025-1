<template>
    <div>
        <h1>Configurar Pedido</h1>
        <pedido-component :burguer="this.hamburguerSelecionado"/>
    </div>
</template>

<script>
    import PedidoComponent from '@/components/PedidoComponent.vue';
    export default {
        name : "ConfiguracaoPedidoView",
        components : {
           PedidoComponent 
        },
        data() {
            return {
                hamburguerSelecionado : null
            }
        },
        mounted(){
           const query = this.$route.query;
           if(query.burguer){
            const decodeBurguer = JSON.parse(decodeURIComponent(query.burguer));
            this.hamburguerSelecionado = decodeBurguer;
           }


        }
    }
</script>

<style scoped>
</style>