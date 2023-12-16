<script>
    export let label = "";
    export let value = false;
</script>

<span>
{label} 

{#if value}
<i class="bi bi-check-lg text-green-600"></i>
{:else}
<i class="bi bi-x-lg text-red-600"></i>
{/if}

</span>