import { APIBaseV3 } from '$lib/consts'
import { fetchEntity } from '$lib/util'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    /** @type {import("$lib/api").Town} */
    const nation_res = (await fetchEntity(params.uuid, "nations"))[0]

    return {
        nation: nation_res, 
        success: true
    }

}