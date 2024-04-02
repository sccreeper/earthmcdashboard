<script>
    import Button from '$lib/components/Button.svelte';
import OpenGraph from '$lib/components/OpenGraph.svelte';
    import StatusBool from '$lib/components/StatusBool.svelte';
    import { HeaderContext, SkinAPIBase, SubheaderContext, TitleContext } from '$lib/consts';
    import { prettyDate, prettyDuration } from '$lib/util';
    import { getContext } from 'svelte';

    
    /** @type {import('./$types').PageData} */
    export let data;

    const { header } = getContext(HeaderContext)
    const { subheader } = getContext(SubheaderContext)
    const { title } = getContext(TitleContext)

    $header = data.resident.name;
    $subheader = "Resident"
    $title = `${data.resident.name} - EarthMC stats`

    //TODO: change name of skin
    function downloadSkin() {
        let a = document.createElement("a")
        a.href = `${SkinAPIBase}/skin/${data.resident.uuid}?download=true`
        //a.download = `${data.resident.name} skin.png`
        a.click();
    }

</script>

<OpenGraph title={data.resident.name} description={`${data.resident.town.name.replaceAll("_", " ")}, ${data.resident.nation.name.replaceAll("_", " ")}`}/>

<div class="flex flex-col items-center m-3">

<div class="grid grid-cols-2 w-3/4">


    <div>

        <img src="{SkinAPIBase}/body/full/{data.resident.uuid}?scale=6" alt="skin of {data.resident.name}" title="skin of {data.resident.name}"/>

        <br>

        <img src="{SkinAPIBase}/skin/{data.resident.uuid}" alt="raw skin for {data.resident.name}" class="raw-skin"/>

        <br>

        <Button text="Download skin" icon="download" callback={downloadSkin}/>

    </div>

    <div class="text-sm sm:text-base info-table">

        <h1 class="table-heading">Info</h1>

        <div class="block">

            <StatusBool label="{data.resident.status.isOnline ? 'Online' : 'Offline'}" value={data.resident.status.isOnline}></StatusBool>

            {#if data.resident.timestamps.joinedTownAt != 0}
            <br>
            <i><i class="bi bi-globe"></i> Town</i>
            <br>
            <a href="/town/{data.resident.town.uuid}">{data.resident.town.name.replaceAll("_", " ")}</a>
            {/if}

            <br>
            <i><i class="bi bi-calendar"></i> Last online</i>
            <p>{prettyDate(new Date(data.resident.timestamps.lastOnline))} ({prettyDuration(Date.now() - data.resident.timestamps.lastOnline)} ago)</p>
            <i><i class="bi bi-calendar"></i> Registered</i>
            <p>{prettyDate(new Date(data.resident.timestamps.registered))}</p>
            {#if data.resident.timestamps.joinedTownAt != 0}
            <i><i class="bi bi-calendar"></i> Joined town</i>
            <p>{prettyDate(new Date(data.resident.timestamps.joinedTownAt))}</p>
            {/if}


        </div>


    </div>


</div>

</div>

<style lang="postcss">

.raw-skin {

    @apply bg-gray-200;

}

</style>

