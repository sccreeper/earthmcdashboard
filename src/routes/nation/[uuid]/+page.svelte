<script>
    import Coordinates from '$lib/components/Coordinates.svelte';
    import LeaderInfo from '$lib/components/LeaderInfo.svelte';
    import OpenGraph from '$lib/components/OpenGraph.svelte';
    import ResultsList from '$lib/components/ResultsList.svelte';
    import StatusBool from '$lib/components/StatusBool.svelte';
    import { HeaderContext, SubheaderContext, TitleContext } from '$lib/consts';
    import { prettyDate } from '$lib/util';
    import { getContext } from 'svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    const { header } = getContext(HeaderContext)
    const { title } = getContext(TitleContext)
    const { subheader } = getContext(SubheaderContext)

    $header = data.nation.name.replaceAll("_" , " ")
    $subheader = "Nation"
    $title = `${data.nation.name.replaceAll("_" , " ")} - EarthMC stats`

</script>

<OpenGraph title={`${data.nation.name.replaceAll("_" , " ")} - Nation`} description={`${data.nation.stats.balance} gold ${data.nation.towns.length} towns ${data.nation.stats.numTownBlocks} chunks`}/>

<div class="flex flex-col items-center m-3">

<div class="headline-stats">

    <p>{data.nation.stats.balance} <span class="font-extralight">gold</span></p>
    <p>{data.nation.towns.length} <span class="font-extralight">towns</span></p>
    <p>{data.nation.residents.length} <span class="font-extralight">residents</span></p>
    <p>{data.nation.stats.numTownBlocks} <span class="font-extralight">chunks</span></p>

</div>

<hr>

<div class="grid grid-cols-2 w-3/4">

    <div class="w-96">

        <h1 class="table-heading">Towns</h1>

        <ResultsList list={data.nation.towns} type="town" limit={12}/>

    </div>
    

    <div>

        <h1 class="table-heading">Info</h1>

        <div class="grid grid-cols-2">
            <LeaderInfo name={data.nation.king.name} uuid={data.nation.king.uuid}/>

            <div class="block">
                <i><i class="bi bi-info-circle"></i> Board</i>
                <p>{data.nation.board}</p>

                <i><i class="bi bi-lightbulb"></i> Status</i>

                <br>

                <StatusBool label="Public" value={data.nation.status.isPublic}></StatusBool>
                <StatusBool label="Open" value={data.nation.status.isOpen}></StatusBool>

                <br>

                <i><i class="bi bi-houses"></i> Capital</i>
                <br>
                <a href="/town/{data.nation.capital.uuid}">{data.nation.capital.name.replaceAll("_", " ")}</a>
                <br>
                <i><i class="bi bi-geo-alt"></i> Spawn</i>
                <br>
                <Coordinates x={data.nation.coordinates.spawn.x} y={data.nation.coordinates.spawn.y} z={data.nation.coordinates.spawn.z}/>
                <br>
                <i><i class="bi bi-calendar"></i> Founded</i>
                <p>{prettyDate(new Date(data.nation.timestamps.registered))}</p>
                <i><i class="bi bi-palette"></i> Colour</i>
                <br>
                <p> <span style="color: #{data.nation.dynmapColour}">⏺</span> #{data.nation.dynmapColour}</p>


            </div>
        </div>

    </div>

</div>

</div>

<style>

    .headline-stats {
        @apply flex;
        @apply flex-row;
        @apply text-xl;
    }

    .headline-stats > p {
        @apply m-1;
    }

</style>
