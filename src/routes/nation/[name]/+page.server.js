import { APIBase } from '$lib/consts'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    const nation_res = await fetch(APIBase + "/nations/" + params.name)
    const ok = await nation_res.ok

    if (!ok) {
        return {
            town: null, 
            town_name: params.name,
            success: false
        }
    }

    const nation_json = await nation_res.json()

    return {
        nation: nation_json, 
        nation_name: params.name,
        success: true
    }

}