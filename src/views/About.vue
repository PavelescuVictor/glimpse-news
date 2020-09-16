<template>
    <div class="about">
        <Navbar />
        <About />
        <ScrollTop />
        <Footer />
    </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import ScrollTop from "../components/ScrollTop.vue";
import Footer from "../components/Footer.vue";
import About from "../components/About.vue";
export default {
    name: "about",
    components: {
        Navbar,
        About,
        ScrollTop,
        Footer,
    },
};
</script>
<style scoped>
.about {
    height: var(--banner-height);
}
/* Media Queries */

@media screen and (max-width: 980px) {
    .banner h1 {
        font-size: 5em;
    }
}

@media screen and (max-width: 736px) {
    .banner h1 {
        font-size: 3em;
    }
}

@media screen and (max-width: 980px) {
    .banner p {
        font-size: 1.5em;
    }
}

@media screen and (max-width: 480px) {
    .banner p {
        font-size: 1.25em;
    }
}

/* Animations */

@keyframes banner__text__p {
    0% {
        opacity: 0%;
        margin-top: -3.5em;
    }

    30% {
        letter-spacing: 0.05em;
    }

    40% {
        opacity: 0%;
    }

    50% {
        letter-spacing: -0.1em;
    }
}

@keyframes banner__text__logo {
    0% {
        opacity: 0%;
    }

    30% {
        letter-spacing: 0.05em;
    }

    50% {
        letter-spacing: -0.1em;
    }
}

@keyframes banner__text__button {
    0% {
        opacity: 0%;
    }

    30% {
        width: 10em;
        letter-spacing: -0.1em;
    }

    100% {
        width: 6.5em;
    }
}
</style>
