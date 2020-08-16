<template>
    <div class="card">
         <div class="card-wrapper">
            <div class="card-date">
                <p>27</p>
                <p>MAR</p>
            </div>
            <div class="card-image">
                <img v-bind:src="data.urlToImage">
                <div id="box-shadow">
                    <a href="https://www.google.com"></a>
                </div>
            </div>
            <div class="card-content">
                <h4>{{ data.title }}</h4>
                <p>{{ data.description }}</p>
                <div class="card-btn">
                    <a href="https://www.google.com">Read More</a>
                </div>
                <div class="card-content-bottom">
                    <p><span class="small">6 minutes ago</span></p>
                    <div class="card-content-bottom-right">
                        <i class="fas fa-comments fa-xs"></i>
                        <p>42 Comments</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Card",
        props: ['data'],
    }
</script>
<style scoped>
    .card-wrapper{
        position: relative;
        max-height: 62vh;
        display: flex;
        background: #fff;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 10px 16px -8px rgba(0,0,0,0.2);
        transition: transform 0.2s ease-in-out;
    }

    .card-wrapper:hover{
        transform: scale(1.01);
    }

    .card-wrapper .card-image{
        height: 20vw;
        width: 100%;
    }

    .card-wrapper .card-image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-wrapper .card-image #box-shadow{
        position: absolute;
        width: 100%;
        height: 20vw;
        top: 0;
        left: 0;
        transition: box-shadow 0.1s ease-in-out;
        cursor: pointer;
    }

    .card-wrapper .card-image #box-shadow:hover {
        box-shadow: inset 0px 0px 300px 28px rgba(0,0,0,0.3);
    }

    .card-wrapper .card-image #box-shadow a{
        display: block;
        width: 100%;
        height: 100%;
    }

    .card-wrapper .card-date{
        position: absolute;
        align-self: flex-end;
        right: 10px;
        top: -5px;
        height: 14%;
        width: 13%;
        background: var(--color-purple);
        border-bottom-right-radius: 50px;
        border-bottom-left-radius: 50px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 2;
    }

    .card-wrapper .card-date p{
        color: white;
    }

    .card-wrapper .card-content{
        display:flex;
        flex-direction: column;
        align-items: center;
        overflow-wrap: anywhere;
        padding-top: 2em;
    }

    .card-content h4 {
        font-size: 1.5em;
        line-height: 1.5em;
        margin-bottom: 0.4em;
        font-weight: normal;
        color: #262626;
        cursor: pointer;
        overflow: hidden;
    }

    .card-content h4:hover {
        animation: slide-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }

    .card-content p {
        width: 90%;
        font-size: 0.8em;
        font-weight: normal;
        color: #262626;
        text-align: justify;
        margin-bottom: 1em;
        padding: 0 0.5em;
    }

    .card-content .card-btn{
        align-self: center;
        padding: 0.3em 0.6em; 
        background: var(--color-purple);
        cursor: pointer;
        border-radius: 50px;
    }

    .card-content .card-btn a{
        color: #262626;
        transition: color 0.2s ease-in , padding 0.2s ease-in-out;
    }

    .card-content .card-btn a:hover{
        color: rgba(255, 255, 255, 1);
        padding: 1em;

    }

    .card-content-bottom{
        width: 100%;
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 0 0.6em 0.6em 0.6em;
    }

    .card-content-bottom > p{
        margin: auto;
        font-size: 0.8em;
        opacity: 80%;
    }

    .card-content-bottom-right{
        display: flex;
        justify-self:flex-end;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        opacity: 80%;
    }

    .card-content-bottom-right p{
        margin: auto;
        padding: 5px;
    }
</style>