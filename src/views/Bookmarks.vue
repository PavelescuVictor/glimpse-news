<template>
    <div class="bookmarks">
        <Navbar />
        <Bookmarks />
        <ScrollTop />
        <Footer />
    </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import ScrollTop from "../components/ScrollTop.vue";
import Footer from "../components/Footer.vue";
import Bookmarks from "../components/Bookmarks.vue";
export default {
    name: "bookmarks",
    components: {
        Navbar,
        Bookmarks,
        ScrollTop,
        Footer,
    },
};
</script>
<style scoped>
.bookmarks {
    min-height: var(--banner-height);
}
</style>
