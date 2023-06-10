import { APIBase } from '$lib/consts'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    const town_res = await fetch(APIBase + "/towns/" + params.name)
    const ok = await town_res.ok

    if (!ok) {
        return {
            town: null, 
            town_name: params.name,
            success: false
        }
    }

    const town_json = await town_res.json()

    return {
        town: town_json, 
        town_name: params.name,
        success: true
    }

}