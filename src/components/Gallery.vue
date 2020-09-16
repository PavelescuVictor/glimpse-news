<template>
    <div class="gallery">
        <div class="card-grid-wrapper" v-if="dataLoaded === true">
            <Card v-for="n in imageNews" :key="n.url" :data="n" />
        </div>
    </div>
</template>
<script>
import Card from "./Card.vue";
import axios from "axios";
export default {
    name: "Gallery",
    components: {
        Card,
    },
    data() {
        return {
            news: null,
            totalResults: null,
            dataLoaded: false,
            value: "",
            tags: [],
        };
    },
    computed: {
        imageNews: function() {
            return this.news.filter((n) => n.urlToImage != null);
        },
    },
    mounted() {
        this.getTopheadlinesNews();
    },
    methods: {
        getTopheadlinesNews: function() {
            axios
                .get(
                    `https://newsapi.org/v2/top-headlines?country=us&apiKey=a292556e4f6f47efbd7797c342afed87`
                )
                .then((response) => {
                    this.news = response.data.articles;
                    this.totalResults = response.data.totalResults;
                    this.dataLoaded = true;
                });
        },
    },
};
</script>
<style scoped>
.gallery {
    width: 75%;
    min-height: var(--gallery-height);
    margin: auto;
}

.card-grid-wrapper {
    margin: 3.5em 0em 0em 0em;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3.5em;
}

@media screen and (max-width: 1300px) {
    .card-grid-wrapper {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 800px) {
    .card-grid-wrapper {
        grid-template-columns: 1fr;
    }
}
</style>
