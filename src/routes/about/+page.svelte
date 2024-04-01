<script>
    import OpenGraph from "$lib/components/OpenGraph.svelte";
    import { HeaderContext, SubheaderContext, TitleContext } from "$lib/consts";
    import { getContext } from "svelte";

    const { title } = getContext(TitleContext)
    $title = "About - EMC Stats"

    const { header } = getContext(HeaderContext)
    $header = "About"

    const { subheader } = getContext(SubheaderContext)
    $subheader = ""

</script>

<OpenGraph title="About" description=""/>

<div class="flex flex-col items-center justify-center">

    <div class="w-11/12 sm:w-2/3 mt-6">

        <p class="text-base sm:text-xl body-text">This is a hobby project which uses EarthMC's <a target="_blank" href="https://earthmc.net/docs/api">REST API</a> to show information about all the towns and nations on the server. 
            It also makes use of <a target="_blank" href="https://mineatar.io">mineatar.io</a> to get player skins.
            It is written in <a target="_blank" href="https://kit.svelte.dev/">SvelteKit</a> and runs on Cloudflare Pages.
        </p>

        <p class="text-center links">

            <a href="https://github.com/sccreeper/earthmcdashboard/" target="_blank"> <i class="bi bi-github"></i>  Source code</a>
            <a href="https://www.oscarcp.net" target="_blank"> <i class="bi bi-globe"></i>  My website</a>

        </p>
    
    </div>

</div>

<style lang="postcss">

    .body-text > a {
        @apply underline;
    }

    .links {
        @apply m-4;
    }

    .links > a {
        @apply text-xs;
        @apply sm:text-base;
        @apply m-4;
    }

</style>