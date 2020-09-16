<template>
    <div class="home">
        <Navbar />
        <Banner />
        <Weather />
        <Gallery />
        <ScrollTop />
        <Footer />
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Banner from "../components/Banner.vue";
import Weather from "../components/Weather.vue";
import Gallery from "../components/Gallery.vue";
import ScrollTop from "../components/ScrollTop.vue";
import Footer from "../components/Footer.vue";
export default {
    name: "Home",
    components: {
        Navbar,
        Banner,
        Weather,
        Gallery,
        ScrollTop,
        Footer,
    },
};
</script>
<style scoped></style>
