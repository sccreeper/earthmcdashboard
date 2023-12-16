<script>
    import { page } from "$app/stores"
    import ErrorLabel from "$lib/components/ErrorLabel.svelte";
</script>

<ErrorLabel code={$page.status} text={$page.error?.message}></ErrorLabel>