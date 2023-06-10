<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

{#if data.success}

<h1>{data.town_name}</h1>

<div style="display: inline;">

    <p>{data.town.stats.balance} gold</p>
    <p>{data.town.residents.length} residents</p>
    <p>{data.town.stats.numTownBlocks} chunks</p>

</div>

{:else}

<h1>{data.town_name} does not exist!</h1>

{/if}
