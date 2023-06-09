import { APIBase } from '../lib/consts';

/** @type {import('./$types').PageServerLoad} */
export async function load() {

    const town_res = await fetch(APIBase + "/towns")
    const town_json = await town_res.json()

    return {towns: town_json.allTowns}

}