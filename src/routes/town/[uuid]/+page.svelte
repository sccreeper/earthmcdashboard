<script>
    import Coordinates from '$lib/components/Coordinates.svelte';
    import LeaderInfo from '$lib/components/LeaderInfo.svelte';
    import OpenGraph from '$lib/components/OpenGraph.svelte';
    import ResultsList from '$lib/components/ResultsList.svelte';
    import StatusBool from '$lib/components/StatusBool.svelte';
    import { DefaultBoards, HeaderContext, SubheaderContext, TitleContext } from '$lib/consts';
    import { prettyDate } from '$lib/util';
    import { getContext } from 'svelte';

    /** @type {import('./$types').PageData} */
    export let data;

    const { header } = getContext(HeaderContext)
    const { title } = getContext(TitleContext)
    const { subheader } = getContext(SubheaderContext)

    $header = data.town.name.replaceAll("_" , " ")
    $title = `${data.town.name.replaceAll("_" , " ")} - EarthMC stats`
    $subheader = "Town"

</script>

<OpenGraph title={`${data.town.name.replaceAll("_" , " ")} - Town`} description={`${data.town.stats.balance} gold ${data.town.residents.length} residents ${data.town.stats.numTownBlocks} chunks`}/>

<div class="flex flex-col items-center m-3">

<div class="headline-stats">

    <p>{data.town.stats.balance} <span class="font-extralight">gold</span></p>
    <p>{data.town.residents.length} <span class="font-extralight">residents</span></p>
    <p>{data.town.stats.numTownBlocks} <span class="font-extralight">chunks</span></p>

</div>

<hr>

<div class="grid grid-cols-1 sm:grid-cols-2 w-11/12 sm:w-3/4">

    <div class="w-80 sm:w-64 lg:w-96">

        <h1 class="table-heading">Residents</h1>

        <ResultsList list={data.town.residents} type="resident" limit={12}/>

    </div>
    

    <div>

        <h1 class="table-heading">Info</h1>

        <div class="grid grid-cols-2 text-sm sm:text-base">
            <LeaderInfo name={data.town.mayor.name} uuid={data.town.mayor.uuid}/>

            <div class="block">
                <i><i class="bi bi-info-circle"></i> Board</i>
                {#if data.town.board == DefaultBoards.Town}
                <p>No board message set</p>
                {:else}
                <p>{data.town.board}</p>
                {/if}

                <i><i class="bi bi-lightbulb"></i> Status</i>

                <br>

                <StatusBool label="Public" value={data.town.status.isPublic}></StatusBool>
                <StatusBool label="Open" value={data.town.status.isOpen}></StatusBool>

                {#if data.town.timestamps.joinedNationAt != 0}
                <StatusBool label="Capital" value={data.town.status.isCapital}></StatusBool>
                {/if}

                <StatusBool label="PVP" value={data.town.perms.flags.pvp}></StatusBool>
                <StatusBool label="Explosion" value={data.town.perms.flags.explosion}></StatusBool>
                <StatusBool label="Fire" value={data.town.perms.flags.fire}></StatusBool>
                <StatusBool label="Mob spawning" value={data.town.perms.flags.mobs}></StatusBool>

                {#if data.town.timestamps.joinedNationAt != 0}
                <br>
                <i><i class="bi bi-globe"></i> Nation</i>
                <br>
                <a href="/nation/{data.town.nation.uuid}">{data.town.nation.name}</a>
                {/if}

                <br>
                <i><i class="bi bi-geo-alt"></i> Spawn</i>
                <br>
                <Coordinates x={data.town.coordinates.spawn.x} y={data.town.coordinates.spawn.y} z={data.town.coordinates.spawn.z}/>
                <br>
                <i><i class="bi bi-calendar"></i> Founded</i>
                <p>{prettyDate(new Date(data.town.timestamps.registered))}</p>
                {#if data.town.timestamps.joinedNationAt != 0}
                <i><i class="bi bi-calendar"></i> Joined nation</i>
                <p>{prettyDate(new Date(data.town.timestamps.joinedNationAt))}</p>
                {/if}


            </div>
        </div>

    </div>

</div>

</div>

<style lang="postcss">

    .headline-stats {
        @apply flex;
        @apply flex-row;
        @apply text-lg;
        @apply sm:text-xl;
    }

    .headline-stats > p {
        @apply m-1;
    }

</style>
