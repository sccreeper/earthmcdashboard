<script>
    import { SkinAPIBase } from "$lib/consts";


    export let name = "";
    export let uuid = "";

</script>

<div class="flex flex-col h-24 w-24">

    <strong>Leader</strong>

    <img src="{SkinAPIBase}/body/full/{uuid}?scale=6" alt="skin of {name}"/>

    <div>
        <i>{name}</i>
    </div>

</div>

<style>
    div {
        @apply text-center;
    }
</style>