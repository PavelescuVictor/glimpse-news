<template>
    <div class="about">
        <h1 v-html="content"></h1>
    </div>
</template>
<script>
export default {
    name: "about",
    components: {},
    data() {
        return {
            content:
                "Glimpse is a web Vue.js application <br> Using NewsAPI for continously presenting a flow of articles/news and <br> OpenWeather API for local weather data.",
        };
    },
};
</script>
<style scoped>
.about {
    min-height: var(--banner-height);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 8em 4em 6em 4em;
    background-image: var(--banner-background-image);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
}

.about:before {
    transition: opacity 3s ease;
    transition-delay: 1s;
    content: "";
    background-color: #42424f;
    display: block;
    height: 100%;
    left: 0;
    opacity: 0.45;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
}

.about h1 {
    color: white;
    z-index: 1;
    font-size: calc(var(--text-base-size) * 2);
    font-family: var(--text-logo-font);
    text-align: center;
    font-weight: 400;
    line-height: calc(var(--text-base-line-height) * 3);
    padding: var(--padding-small) var(--padding-high);
    animation: about__text 1s 1;
}

/* Media Queries */

@media screen and (max-width: 980px) {
    .about h1 {
        font-size: 5em;
    }
}

@media screen and (max-width: 736px) {
    .about h1 {
        font-size: 3em;
    }
}

/* Animations */

@keyframes about__text {
    0% {
        opacity: 0%;
        margin-top: -10em;
    }

    30% {
        margin-top: -10rem;
    }

    50% {
        opacity: 0%;
    }
}
</style>
