<script>
    export let callback = ()=>{}
    export let icon = "";
    export let title = "";
</script>

<!-- Svelte's same-name attribute thing doesn't work here -->
<i on:click={callback} on:keypress={callback} class="bi bi-{icon}" title={title}></i>

<style lang="postcss">

    i {
        @apply text-cyan-900;
        @apply cursor-pointer;
        @apply transition-all;
    }

    i:hover {
        @apply text-cyan-700;
    }

</style>