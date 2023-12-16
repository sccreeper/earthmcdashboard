<script>
    import { getContext, onMount, setContext } from "svelte";
    import "../app.css"
    import bg_image from "../images/map.png";
    import { HeaderContext, TitleContext } from "$lib/consts";
    import { writable } from "svelte/store";

    setContext(TitleContext, {
        title: writable("Home - EMC Dashboard")
    })
    setContext(HeaderContext, {
        header: writable("EarthMC stats")
    })

    const { title } = getContext(TitleContext)
    const { header } = getContext(HeaderContext)

</script>

<svelte:head>
    <title>{$title}</title>
</svelte:head>

<div class="h-full">
    <div class="header-bg" style="background-image: url({bg_image});">
        <div class="header-div">
            <h1 class="header">{$header}</h1>
        </div>
    </div>

    <slot/>

</div>

<style>
    .header-div {
        @apply h-full;
        @apply w-full;
        @apply backdrop-blur-sm;

        @apply flex;
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
</style>