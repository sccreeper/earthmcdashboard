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

    <div class="w-2/3 mt-6">

        <p class="text-xl body-text">This is a hobby project which uses EarthMC's <a target="_blank" href="https://earthmc.net/docs/api">REST API</a> to show information about all the towns and nations on the server. 
            It also makes use of other API's, notably <a target="_blank" href="https://mcstatus.io">mcstatus.io</a>, <a target="_blank" href="https://playerdb.co/">playerdb.co</a> and <a target="_blank" href="https://mineatar.io">mineatar.io</a> to get player skins and general server statistics.
            It is written in <a target="_blank" href="https://kit.svelte.dev/">SvelteKit</a> and runs on Cloudflare Pages.
        </p>

        <p class="text-center links">

            <a href="https://github.com/sccreeper/earthmcdashboard/" target="_blank"> <i class="bi bi-github"></i>  Source code</a>
            <a href="https://www.oscarcp.net" target="_blank"> <i class="bi bi-globe"></i>  My website</a>

        </p>
    
    </div>

</div>

<style>

    .body-text > a {
        @apply underline;
    }

    .links > a {
        @apply m-4;
    }

</style>