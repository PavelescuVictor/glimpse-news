<template>
    <div id="app">
        <Navbar />
        <Banner />
        <Weather />
        <Gallery />
        <ScrollTop />
        <Footer />
    </div>
</template>

<script>
    import Navbar from "./components/Navbar.vue";
    import Banner from "./components/Banner.vue";
    import Weather from "./components/Weather.vue";
    import Gallery from "./components/Gallery.vue";
    import ScrollTop from "./components/ScrollTop.vue";
    import Footer from "./components/Footer.vue";
    export default {
        name: 'App',
        components: {
            Navbar,
            Banner,
            Weather,
            Gallery,
            ScrollTop,
            Footer,
        }
    }
</script>

<style>

    /* Fonts import */

    @import url('https://fonts.googleapis.com/css2?family=Fjalla+One&family=Pacifico&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

    :root {
        /* Variables */

        /* Text/Font */

        --text-base-size: 16px;
        --text-base-font: 'Fjalla One', sans-serif;
        --text-logo-font: 'Fredoka One', cursive;;
        --text-navbar-font: 'Roboto Condensed', sans-serif;
        --text-base-line-height: var(--text-base-size);

        /* Color */

        --color-dark-purple: #1F2846;
        --color-purple: #9a9bc0;
        --color-pink: #e28b9a;
        --color-dark-purple: #362541;

        /* Border */

        --border-radius-circle: 50px;

        /* Margin */

        /* Padding */

        --padding-small: 30px;
        --padding-medium: 60px;
        --padding-high: 90px;

        /* Custom */

        --navbar-height: 7vh;
        --banner-height: 100vh;
        --footer-height: 12vh;
        --weather-height: 20vh;
        --gallery-height: calc(100vh - (var(--footer-height) + var(--banner-height) + var(--weather-height)));
        --banner-background-image: url("./assets/asdasd.png");
    }

    * {
        box-sizing: border-box;
        margin: 0px;
        padding: 0px;
    } 

    body, html {
        scroll-behavior: smooth;
        height: 100%;
        width: 100%;
        font-family: var(--text-base-font);
        font-size: var(--text-base-size);
        line-height: var(--text-base-line-height);
        background: rgb(242, 242, 242);
        color: #000;
    }
    
    a {
        color: white;
        text-decoration: none;
    }
</style>
