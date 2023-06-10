<script>
    import { goto } from '$app/navigation';

    /** @type {import('./$types').PageData} */
    export let data;
    let search_value = ""

    /**
     * @type {string[]}
     */
    let table_data = []

    function updateTable() {

        table_data = []
        
        data.towns.forEach((/** @type {string} */ element) => {

            if (element.toLowerCase().includes(search_value.toLowerCase())) {
                table_data = [...table_data, element]
            }

        });

        if (table_data.length == 1) {
            goto(`/town/${table_data[0]}`)
        }

    }

</script>

<h1>EarthMC dashboard</h1>

<input type="text" placeholder="Search for a player, town or nation" bind:value={search_value}/><button on:click={updateTable}>Search</button>

{#each table_data as t}
    <a href={`/town/${t}`}>{t}</a>
{/each}