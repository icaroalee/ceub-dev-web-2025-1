<template>
    <div>
        <h1>Pedido</h1>
        <lista-pedido-component/>
    
    </div>
</template>

<script>

    import ListaPedidoComponent from '@/components/ListaPedidoComponent.vue';
 
    export default {
        name : "PedidosView",
        components: {
            ListaPedidoComponent
        }
    }
</script>

<style scoped>
</style>