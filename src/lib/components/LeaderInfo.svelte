<script>
    import { SkinAPIBase } from "$lib/consts";


    export let name = "";
    export let uuid = "";

</script>

<a href="/resident/{uuid}">

<div class="flex flex-col h-24 w-24">

    <strong>Leader</strong>

    <img src="{SkinAPIBase}/body/full/{uuid}?scale=6" alt="skin of {name}"/>

    <div>
        <i>{name}</i>
    </div>

</div>

</a>

<style lang="postcss">
    div {
        @apply text-center;
    }
</style>