<script>

    /**
     * @type {string|any}
     */
    export let name;
    export let type = "town" || "nation"

</script>

<span><a href={`/${type}/${name}`}>{name.replaceAll("_", " ")}</a></span>

<style>
    span {
        cursor: pointer;
    }
</style>