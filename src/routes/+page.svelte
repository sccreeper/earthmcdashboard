<script>
    import OpenGraph from "$lib/components/OpenGraph.svelte";
    import ResultsList from "$lib/components/ResultsList.svelte";
    import { HeaderContext, SubheaderContext, TitleContext } from "$lib/consts";
    import { list } from "postcss";
    import { getContext, onMount, setContext } from "svelte";

    /** @type {import('./$types').PageData} */
    export let data;
    let search_value = "";
    let previous_search_value = "";

    /**
     * @type {Object.<string[], string[]>}
     */
    let table_data = { towns: [], nations: [] };

    function updateTable() {
        previous_search_value = search_value

        table_data = { towns: [], nations: [] };

        data.towns.forEach((/** @type {string} */ element) => {
            if (element.toLowerCase().includes(search_value.toLowerCase())) {
                table_data.towns = [...table_data.towns, element];
            }
        });

        data.nations.forEach((/** @type {string} */ element) => {
            if (element.toLowerCase().includes(search_value.toLowerCase())) {
                table_data.nations = [...table_data.nations, element];
            }
        });
    }


    const { header } = getContext(HeaderContext)
    const { title } = getContext(TitleContext)
    const { subheader } = getContext(SubheaderContext)

    $header = "EMC Stats"
    $title = "Home - EMC Stats"
    $subheader = ""

</script>

<OpenGraph title="Home" description=""/>

<!-- Nation and town stats -->
<div class="stats-container">
    <p>{data.nations.length} <span>nations</span></p>
    <p>{data.towns.length} <span>towns</span></p>
    <p>{data.online} <span>online</span></p>
</div>

<!-- Search box -->
<div class="search-box-container">
    <div class="search">
        <input
            type="text"
            placeholder="Search for a player, town or nation"
            bind:value={search_value}
        />
        <button on:click={updateTable}>Search</button>
    </div>
</div>

<!-- Search results for nations & towns -->

{#if table_data.towns.length == 0 && table_data.nations.length == 0}
    <h3 class="w-full text-center">Search for a town or a nation.</h3>
{:else}
    <div class="settlement-results">
        <div class="w-1/3">
            <h3 class="table-heading">Towns</h3>
            {#if table_data.towns.length == 0}
                <p>No towns matching "{previous_search_value}"</p>
            {:else}
                <div class="res-table">
                    <ResultsList limit={12} list={table_data.towns} type="town"/>
                </div>
            {/if}
        </div>
        <div class="w-1/3">
            <h3 class="table-heading">Nations</h3>
            {#if table_data.nations.length == 0}
                <p>No nations matching "{previous_search_value}"</p>
            {:else}
                <ResultsList limit={12} list={table_data.nations} type="nation"/>
            {/if}
        </div>
    </div>
{/if}

<style>
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

    .settlement-results {
        @apply w-full;
        @apply flex;
        @apply flex-row;
        @apply justify-center;
        @apply gap-7;
    }
</style>
