import { APIBaseV3 } from '$lib/consts'
import { error, redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    const town_res = await fetch(APIBaseV3 + "/towns?query=" + params.uuid)
    const ok = await town_res.ok

    if (!ok) {
        if (town_res.status == 404) {
            throw error(404, "Nation does not exist")
        } else {
            throw error(town_res.status,  await town_res.text())
        }
    }

    /** @type {import('$lib/api').Town} */
    const town_json = (await town_res.json())[0]

    return {
        town: town_json, 
        success: true
    }

}