<script>
    import { getContext, onMount, setContext } from "svelte";
    import "../app.css"
    import bg_image from "../images/map.png";
    import { HeaderContext, SubheaderContext, TitleContext } from "$lib/consts";
    import { writable } from "svelte/store";
    import { navigating } from "$app/stores";

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

    // @ts-ignore
    const commitHash = __COMMIT_HASH__;
    //@ts-ignore
    const commitMessage = __COMMIT_MESSAGE__;

</script>

<svelte:head>
    <title>{$title}</title>
</svelte:head>

<div class="h-full">

    {#if $navigating}

    <div class="loading-bar">
        <span></span>
    </div>

    {/if}

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

<div class="footer">
    <a target="_blank" href="https://github.com/sccreeper/earthmcdashboard/commit/{commitHash}">{commitHash.substring(0, 8)} - {commitMessage}</a>
</div>

<style lang="postcss">

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

    .footer {
        @apply text-center;
        @apply text-sm;
        @apply float-right;
        @apply m-2;
    }

    .loading-bar {
        @apply w-full;
        @apply absolute;
        @apply bg-blue-600;
        height: 2px;
        @apply overflow-hidden;

        @apply left-0;
        @apply right-0;

        @apply z-10;
    }

    @keyframes loader-animation {

        0% {
            @apply left-0;
            @apply right-full;
            @apply w-0;
        }

        10% {
            @apply left-0;
            @apply right-3/4;
            @apply w-1/4;
        }

        90% {
            @apply right-0;
            @apply left-3/4;
            @apply w-1/4;
        }

        100% {
            @apply left-full;
            @apply right-0;
            @apply w-0;
        }

    }

    .loading-bar > span {
        @apply absolute;
        @apply h-full;
        @apply bg-blue-400;
        animation: loader-animation 1s infinite;
    }
</style>