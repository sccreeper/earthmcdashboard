import { APIBaseV3 } from '$lib/consts'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    const nation_res = await fetch(APIBaseV3 + "/nations?query=" + params.uuid)
    const ok = await nation_res.ok

    if (!ok) {
        if (nation_res.status == 404) {
            throw error(404, "Nation does not exist")
        } else {
            throw error(nation_res.status,  await nation_res.text())
        }
    }

    /** @type {import('$lib/api').Nation} */
    const nation_json = (await nation_res.json())[0]

    return {
        nation: nation_json,
        success: true
    }

}