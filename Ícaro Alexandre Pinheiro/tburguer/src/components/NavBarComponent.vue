<template>
    <div>
        <nav id="nav">
            <router-link to="/" id="logo-url">
                <img src="/img/logo_tburguer.png" id="logo"/>
            </router-link>
            <router-link to="/menu">Menu</router-link>
            <router-link to="/pedidos">Pedidos</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "NavBarComponent"
    }
</script>

<style scoped>

    #logo {
        width: 60px;
        height: 60px;
    }

    #nav #logo-url{
        margin: auto;
        margin-left: 0;
    }

    #nav {
        background-color: #333;
        border-bottom: 3px solid darkgoldenrod;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    #nav a {
        color: darkgoldenrod;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }
    #nav a:hover {
        color: antiquewhite;
        font-size: 20px;
    }

  



</style>