<script>
    export let x = 0
    export let y = 0
    export let z = 0
</script>

<a href="https://earthmc.net/map/aurora/?worldname=earth&mapname=flat&zoom=5&x={x}&y={y}&z={z}" target="_blank"> 
    <span class="text-red-600">X:</span> {Math.round(x)}
    <span class="text-green-600">Y:</span> {Math.round(y)}
    <span class="text-blue-600">Z:</span> {Math.round(z)}
</a>