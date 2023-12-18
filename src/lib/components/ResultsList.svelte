<script>
    import { clamp } from "$lib/util";
    import SettlementResult from "./SettlementResult.svelte";



    /**
     * @type {any[]}
     */
    export let list;
    /**
     * @type {number}
     */
    export let limit;

    /**
     * @type {string}
     */
    export let type;

    let page = 1
    /**
     * @type {number[][]}
     */
    let ranges = []

    $: {

        list.sort()

        if (list.length > limit) {
            
            let range_count = Math.ceil(list.length / limit)

            for (let i = 0; i < range_count; i++) {

                if (i == range_count-1) {
                    ranges.push([i*limit, list.length-1])
                } else {
                    ranges.push([i*limit,(i+1)*limit])
                }
                
            }

        }

    }

    $: {
        
        page = clamp(page, 1, ranges.length)

    }

</script>


{#if list.length > limit}

<div class="res-table">

{#each list.slice(ranges[page-1][0], ranges[page-1][1]) as item }

<SettlementResult name={item} type={type}/>

{/each}

</div>

<span>Page <input type="number" max="{list.length}" min="1" bind:value={page}/> / {ranges.length}</span>

{:else}

<div class="res-table">

{#each list as item }

<SettlementResult name={item} type={type}/>

{/each}

</div>

{/if}