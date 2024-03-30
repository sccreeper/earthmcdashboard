<script>

    /**
     * @type {import('$lib/api').EntitySkeleton}
     */
    export let data;
    export let type = "town" || "nation" || "resident"

</script>

{#if type != "resident"}

<span><a href={`/${type}/${data.uuid}`}>{data.name.replaceAll("_", " ")}</a></span>

{:else}

<span><a href={`/${type}/${data.uuid}`}>{data.name}</a></span>

{/if}

<style>
    span {
        cursor: pointer;
    }
</style>