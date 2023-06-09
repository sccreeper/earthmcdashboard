<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<h1>EarthMC dashboard</h1>

{#each data.towns as t}
    <p>{t}</p>
{/each}
