<template>
    <div class="navbar">
		<div class="nav-wrapper">
			<nav class="nav">
				<div class="nav__logo">
                    <font-awesome-icon icon="paper-plane" size="lg" class="icon"/>
				</div>
				<div class="nav__logo-dot">
				</div>
				<div class="nav__logo-text">
					<h4>Glimpse</h4>
				</div>
				<div class="nav__ul-wrapper">
					<ul class="nav__ul-content">
						<li><a href="#">Home</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Bookmarks</a></li>
					</ul>
				</div>
				<div class="nav__search-wrapper">
					<div class="nav__search-wrapper-input">
						<input type="text" placeholder="Search...">
					</div>
                    <font-awesome-icon icon="search" size="lg" class="icon"/>
				</div>
			</nav>
		</div>
    </div>
</template>
<script>
export default {
    name: "Navbar",
}
</script>
<style scoped>
    .navbar {
        position: absolute;
        top:0;
        z-index: 2;
        width: 100%;
        height: var(--navbar-height);
    }

    .nav-wrapper{
        height: 100%;
        background-image: linear-gradient(to bottom right, rgba(31, 40, 70, 0.75), rgba(54, 37, 65, 0.75));
        transition: height 0.2s ease-in-out;
    }

    .nav-wrapper:hover {
        height: 6.5vh;
    }

    .nav{
        height: 100%;
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    .nav__logo {
        font-size: 26px;
        line-height: 26px;
        color: white;
        margin-right: 0.1em;
    }

    .nav__logo-dot {
        height: 8px;
        width: 8px;
        background: white;
        border-radius: 50px;
        margin-top: 1em;
        margin-right: 0.1em;
        background: var(--color-purple);
    }

    .nav__logo-text h4{
        font-family: var(--text-logo-font);
        font-weight: 1;
        color: white;
        font-size: 1.8em;
        cursor: pointer;
    }

    .nav .nav__ul-wrapper {
        margin-left:  auto;
        width: 200px;
        margin-right: 1.5em;
    }

    .nav__ul-content {
        display:flex;
        width: 200px;
        min-width: 200px;
        justify-content: space-between;
        font-size: 1em;
        font-family: var(--text-navbar-font);
        letter-spacing: 0.05em;
        list-style-type: none;
    }

    .nav_ul-content li {
        transition: 5s ease-in;
        letter-spacing: .2em;
    }

    .nav__ul-content li:hover {
        line-height: 1.2em;
        padding-bottom: 10px;
        border-bottom: 2px solid var(--color-purple);
        border-radius: 7px;

    }

    .nav__search-wrapper{
        display:flex;
        align-items: center;
        width: 2em;
        height: 2em;
        font-size: 1.1em;
        color: white;
        background: var(--color-purple);
        border-radius: 50px;
        transition: width 0.8s ease-in;
        justify-content: space-between;
    }

    .nav__search-wrapper-input{
        width: 0%;
        height: 70%;
        overflow: hidden;
        border-radius: 70px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: width 1.2s ease-in-out;
    }

    .nav__search-wrapper-input input{
        width: 100%;
        height: 100%;
        margin: auto;
        border: 0;
        padding: 0 0.4em;

    }

    .nav__search-wrapper-input input:focus{
        outline-width: 0;
    }

    .nav__search-wrapper:hover{
        width: 20em;
    }

    .nav__search-wrapper:hover > div {
        display: flex;
        width: 85%;
        margin-left: 0.8em;
    }

    .nav__search-wrapper:after > div {
        display: none;
        width: 0%;
    }

    .nav__search-wrapper .icon{
        margin-left: auto;
        margin-right: 0.2em;
        cursor: pointer;
        transition: transform 0.3s cubic-bezier(0,0,.75,1.23);
        transform-origin: 10% 25%;
    }
</style>