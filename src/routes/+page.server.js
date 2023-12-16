import { APIBase } from '../lib/consts';

/** @type {import('./$types').PageServerLoad} */
export async function load() {

    const town_res = await fetch(APIBase + "/towns")
    const town_json = await town_res.json()

    const nation_res = await fetch(APIBase + "/nations")
    const nation_json = await nation_res.json()

    const server_status = await fetch("https://api.mcstatus.io/v2/status/java/play.earthmc.net")
    const status_json = await server_status.json()

    return {
        towns: town_json.allTowns, 
        nations: nation_json.allNations, 
        online: status_json.players.online
    }

}