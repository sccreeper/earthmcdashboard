<script>

    export let title = "";
    export let description = "";

</script>

<svelte:head>

<meta property="og:title" content={title}/>
<meta property="og:description" content={description}/>

</svelte:head>