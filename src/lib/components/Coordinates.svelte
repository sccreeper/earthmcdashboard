<script>
    import Button from "./Button.svelte";
    import MinorButton from "./MinorButton.svelte";

    export let x = 0
    export let y = 0
    export let z = 0

    // TODO: add toasts when coordinates are copied.
    function copyCoordsToClipboard() {
        navigator.clipboard.writeText(`X: ${Math.round(x)} Y: ${Math.round(y)} Z: ${Math.round(z)}`).then(() => {
            console.info("Coordinates copied to clipboard.")
        }, (err) => {
            console.error("Couldn't copy coordinates: ", err)
        })   
    }

</script>

<!-- XYZ and copy coords button -->

<a href="https://earthmc.net/map/aurora/?worldname=earth&mapname=flat&zoom=7&x={x}&y={y}&z={z}" target="_blank"> 
    <span class="text-red-600">X:</span> {Math.round(x)}
    <span class="text-green-600">Y:</span> {Math.round(y)}
    <span class="text-blue-600">Z:</span> {Math.round(z)}
</a>

<MinorButton icon="copy" title="Copy coordiantes to clipboard" callback={copyCoordsToClipboard}/>
