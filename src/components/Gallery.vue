<template>
    <div class="gallery">
        <div class="side-menu">
            <ul class="menu__list">
                <li>
                    <a href="#">
                        <font-awesome-icon icon="paper-plane" class="icon"/>
                        <p>Top Headings</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <font-awesome-icon icon="paper-plane" class=".icon"/>
                        <p>International</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <font-awesome-icon icon="paper-plane" class=".icon"/>
                        <p>Specific County</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <font-awesome-icon icon="paper-plane" class=".icon"/>
                        <p>Business</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <font-awesome-icon icon="paper-plane" class=".icon"/>
                        <p>Entertainment</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <font-awesome-icon icon="paper-plane" class=".icon"/>
                        <p>General</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <font-awesome-icon icon="paper-plane" class=".icon"/>
                        <p>Health</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <font-awesome-icon icon="paper-plane" class=".icon"/>
                        <p>Science</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <font-awesome-icon icon="paper-plane" class=".icon"/>
                        <p>Sports</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <font-awesome-icon icon="paper-plane" class=".icon"/>
                        <p>Technology</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="card-grid-wrapper" v-if="dataLoaded === true">
            <Card v-for="n in imageNews" :key="n.url" :data="n"/>
        </div>
    </div>
</template>
<script>
    import Card from './Card.vue'
    import axios from 'axios'
    export default {
        name: "Gallery",
        components: {
            Card,
        },
        data () {
            return {
                news: null,
                totalResults: null,
                dataLoaded: false,
            }
        },
        computed: {
            imageNews: function () {
                return this.news.filter(n => n.urlToImage != null);
            }
        },
        mounted () {
            axios.get(`http://newsapi.org/v2/top-headlines?country=us&apiKey=a292556e4f6f47efbd7797c342afed87`).then(response => {
                this.news = response.data.articles;
                this.totalResults = response.data.totalResults;
                this.dataLoaded = true;
            });
        }   
    }
</script>
<style scoped>
    .gallery {
        width:75%;
        min-height: var(--gallery-height);
        margin: auto;
        display: grid;
        grid-template-columns: auto 1fr;
        grid-gap: 3.5em;
    }

    .side-menu {
        background: rgb(242, 242, 242);
    }

    .menu__list {
        list-style-type: none;
        margin: 3.5em 0em;
        padding: 1.5em;
        background: #fff;
    }

    .menu__list li {
        padding: .8em 10em .8em 2em;
    }

    .menu__list li a {
        color: black;
        font-size: calc(var(--text-base-size) * 1.4);
        display: grid;
        grid-template-columns: auto 1fr;
        justify-content: center;
        align-items: center;
        grid-gap: 15px;
    }

    .menu__list li a .icon {
        color: black;
    }

    .card-grid-wrapper{
        display:grid;
        grid-template-columns: 1fr;
        grid-gap: 3.5em;
        padding: 3.5em 0em;
    }
</style>