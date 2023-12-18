<script>

    /**
     * @type {string|any}
     */
    export let name;
    export let type = "town" || "nation"

</script>

{#if type != "resident"}

<span><a href={`/${type}/${name}`}>{name.replaceAll("_", " ")}</a></span>

{:else}

<span>{name}</span>

{/if}

<style>
    span {
        cursor: pointer;
    }
</style>