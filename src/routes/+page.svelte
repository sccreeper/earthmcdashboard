<script>
    import { goto } from "$app/navigation";
    import bg_image from "../images/map.png";

    /** @type {import('./$types').PageData} */
    export let data;
    let search_value = "";

    /**
     * @type {string[]}
     */
    let table_data = [];

    function updateTable() {
        table_data = [];

        data.towns.forEach((/** @type {string} */ element) => {
            if (element.toLowerCase().includes(search_value.toLowerCase())) {
                table_data = [...table_data, element];
            }
        });

        if (table_data.length == 1) {
            goto(`/town/${table_data[0]}`);
        }
    }
</script>

<!-- Outermost container -->
<div class="h-full">
    <div class="header-bg" style="background-image: url({bg_image});">
        <div class="header-div">
            <h1 class="header">EarthMC dashboard</h1>
        </div>
    </div>

    <div class="stats-container">
        
        <p>{data.nations.length} <span>nations</span></p>
        <p>{data.towns.length} <span>towns</span></p>

    </div>

    <div class="search-box-container">
        <div class="search">
            <input
            type="text"
            placeholder="Search for a player, town or nation"
            bind:value={search_value}/>
            <button on:click={updateTable}>Search</button>
        </div>
    </div>

    {#if table_data.length != 0}

    <table>
        <thead>
            <td>Name</td>
        </thead>
        {#each table_data as t}
        <tr>
            <td>
                <a href={`/town/${t}`}>{t}</a>
            </td>
        </tr>
    {/each}
    </table>

    {/if}

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

    .search-box-container {

        @apply w-full;
        @apply flex;
        @apply justify-center;
        @apply mt-3;
        @apply mb-3;

    }

    .search input {

        @apply w-3/4;

    }

    .search {
        @apply w-1/2;
    }

    .stats-container {
        @apply flex;
        @apply flex-row;
        @apply w-full;
        @apply justify-center;
        @apply gap-8;
        @apply mt-4;
        @apply mb-4;
    }

    .stats-container p {

        @apply text-xl;

    }

    .stats-container span {

        @apply font-extralight;

    }
</style>
