<script>
    import { getContext, onMount, setContext } from "svelte";
    import "../app.css"
    import bg_image from "../images/map.png";
    import { HeaderContext, SubheaderContext, TitleContext } from "$lib/consts";
    import { writable } from "svelte/store";

    setContext(TitleContext, {
        title: writable("Home - EMC Dashboard")
    })
    setContext(HeaderContext, {
        header: writable("EarthMC stats")
    })
    setContext(SubheaderContext, {
        subheader: writable("")
    })

    const { title } = getContext(TitleContext)
    const { header } = getContext(HeaderContext)
    const {subheader} = getContext(SubheaderContext)

</script>

<svelte:head>
    <title>{$title}</title>
</svelte:head>

<div class="h-full">
    <div class="header-bg" style="background-image: url({bg_image});">
        <div class="splash-container">
            <div class="nav-div">
                <a href="/">Home</a>
                <a href="/about">About</a>
            </div>

            <div class="header-div">
                <h1 class="header">{$header}</h1>
                <p class="subheader">{$subheader}</p>
            </div>
        </div>
    </div>

    <slot/>

</div>

<style>

    .nav-div {

        @apply text-white;
        @apply p-2;
        @apply select-none;

    }

    .nav-div > a {
        @apply font-medium;
        @apply ml-2;
    }

    .splash-container {
        @apply h-full;
        @apply w-full;
        @apply backdrop-blur-sm;
        @apply flex;
        @apply flex-col;
    }

    .header-div {

        @apply flex-grow;

        @apply flex;
        @apply flex-col;
        @apply justify-center;
        @apply items-center;
    }

    .header-bg {
        @apply bg-center;
        height: 40%;
        @apply w-full;
    }

    .header {
        @apply text-6xl;
        @apply font-bold;
        @apply text-white;
        @apply drop-shadow-2xl;
    }

    .subheader {
        @apply text-xl;
        @apply font-medium;
        @apply text-white;
        @apply drop-shadow-2xl;
    }
</style>