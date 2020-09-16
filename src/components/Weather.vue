<template>
    <div class="weather">
        <p>Weather component</p>
    </div>
</template>
<script>
export default {
    name: "weather",
};
</script>
<style scoped>
.weather {
    height: var(--weather-height);
    background: var(--banner-background-image);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.weather:before {
    transition: opacity 3s ease;
    transition-delay: 1s;
    content: "";
    background-image: linear-gradient(
        to bottom right,
        rgba(31, 40, 70, 0.9),
        rgba(54, 37, 65, 0.9)
    );
    display: block;
    height: var(--weather-height);
    left: 0;
    opacity: 0.95;
    position: absolute;
    top: var(--banner-height);
    width: 100%;
    z-index: 1;
}

.weather p {
    z-index: 2;
    font-size: calc(var(--text-base-size) * 1.8);
    font-family: var(--text-base-font);
    line-height: calc(var(--text-base-size) * 2);
    text-align: center;
    color: #fff;
}

@media screen and (max-width: 500px) {
    .weather:before {
        top: calc(var(--banner-height) / 2);
    }
}

@media screen and (max-width: 300px) {
    .weather:before {
        top: calc(var(--banner-height) / 4);
    }
}
</style>
