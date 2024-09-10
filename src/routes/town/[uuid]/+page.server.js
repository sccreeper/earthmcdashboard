import { APIBaseV3 } from '$lib/consts'
import { fetchEntity } from '$lib/util'
import { error, redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    /** @type {import("$lib/api").Town} */
    const town_res = (await fetchEntity(params.uuid, "towns"))[0]

    return {
        town: town_res, 
        success: true
    }

}