<script>

    /**
     * @type {string|any}
     */
    export let name;
    export let type = "town" || "nation" || "resident"

</script>

{#if type != "resident"}

<span><a href={`/${type}/${name}`}>{name.replaceAll("_", " ")}</a></span>

{:else}

<span><a href={`/${type}/${name}`}>{name}</a></span>

{/if}

<style>
    span {
        cursor: pointer;
    }
</style>