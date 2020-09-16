<template>
    <div class="card">
        <div class="card-wrapper">
            <div class="card-image">
                <img v-bind:src="data.urlToImage" />
                <div id="box-shadow">
                    <a href="https://www.google.com"></a>
                </div>
            </div>
            <div class="card-content">
                <p class="author">Author: {{ data.author }}</p>
                <h4>{{ data.title }}</h4>
                <p>{{ data.description }}</p>
                <div class="card-btn">
                    <a href="https://www.google.com">Read More</a>
                </div>
                <div class="card-content-bottom">
                    <p>
                        {{ data.publishedAt }}
                    </p>
                    <p>
                        {{ data.source.name }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Card",
    props: ["data"],
    mounted() {
        console.log(this.data);
    },
};
</script>
<style scoped>
.card-wrapper {
    position: relative;
    display: flex;
    background: #fff;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 10px 16px -8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s ease-in-out;
    display: grid;
    grid-template-rows: 1fr auto;
}

.card-wrapper:hover {
    transform: scale(1.1);
}

.card-image {
    height: 300px;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-image img {
    height: 100%;
}

.card-image #box-shadow {
    position: absolute;
    width: 100%;
    height: 20vw;
    top: 0;
    left: 0;
    transition: box-shadow 0.1s ease-in-out;
    cursor: pointer;
}

.card-image #box-shadow:hover {
    box-shadow: inset 0px 0px 300px 28px rgba(0, 0, 0, 0.3);
}

.card-image #box-shadow a {
    display: block;
    width: 100%;
    height: 100%;
}

.card-content {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-gap: 1em;
    align-items: center;
    overflow-wrap: anywhere;
    padding: 2em;
}

.card-content .author {
    justify-self: center;
}

.card-content h4 {
    font-size: 1.5em;
    line-height: 1.5em;
    font-weight: normal;
    color: #262626;
    cursor: pointer;
}

.card-content h4:hover {
    animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.card-content p {
    font-size: 0.8em;
    font-weight: normal;
    color: #262626;
    text-align: justify;
}

.card-btn {
    margin: auto;
    padding: 0.3em 0.6em;
    background: var(--color-purple);
    cursor: pointer;
    border-radius: var(--border-radius-circle);
}

.card-btn a {
    color: #262626;
    transition: color 0.2s ease-in, padding 0.2s ease-in-out;
}

.card-btn a:hover {
    color: rgba(255, 255, 255, 1);
    padding: 1em;
}

.card-content-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.card-content-bottom p {
    font-size: 0.8em;
    opacity: 80%;
}

@media screen and (max-width: 1300px) {
    .card-content > h4 {
        font-size: 1.2em;
    }
}

@media screen and (max-width: 1000px) {
    .card-content > p {
        display: none;
    }

    .card-content > h4 {
        font-size: 1em;
    }
}

@media screen and (max-width: 800px) {
    .card-content > p {
        display: block;
    }
}

@media screen and (max-width: 500px) {
    .card-content > p {
        display: none;
    }
}

@media screen and (max-width: 350px) {
    .card-image {
        display: none;
    }
}

@media screen and (max-width: 200px) {
    .card-content-bottom {
        display: none;
    }
}
</style>
