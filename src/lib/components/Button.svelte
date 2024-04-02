<script>
    export let callback = ()=>{}
    export let text = "";
    export let icon = "";
</script>

<button on:click={callback} on:keypress={callback}>
    
    <i class="bi bi-{icon}"></i>
    {text}

</button>

<style lang="postcss">

button {

    @apply bg-cyan-700;
    @apply text-white;
    @apply rounded-sm;
    @apply p-1;
    @apply pl-2;
    @apply pr-2;
    @apply border-2;
    @apply border-cyan-700;
    @apply transition-all;

}

button:focus,button:hover {

    @apply bg-transparent;
    @apply text-cyan-700;

}

</style>