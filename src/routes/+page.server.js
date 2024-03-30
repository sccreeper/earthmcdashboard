import { APIBaseV3 } from '../lib/consts';

/** @type {import('./$types').PageServerLoad} */
export async function load() {

    const town_res = await fetch(APIBaseV3 + "/towns")
    /** @type {import('$lib/api.js').EntitySkeleton[]}  */
    const town_array = await town_res.json()

    const nation_res = await fetch(APIBaseV3 + "/nations")
    /** @type {import('$lib/api.js').EntitySkeleton[]}  */
    const nation_array = await nation_res.json()

    const server_status = await fetch(APIBaseV3)
    /** @type {import('$lib/api.js').ServerStatus}  */
    const status_json = await server_status.json()

    return {
        towns: town_array, 
        nations: nation_array, 
        online: status_json.stats.numOnlinePlayers
    }

}