import { APIBaseV3 } from '$lib/consts'
import { fetchEntity } from '$lib/util'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    /** @type {import("$lib/api").Player} */
    const resident_json = (await fetchEntity(params.uuid, "players"))[0]

    if (resident_json.status.isNPC) {
        throw error(404, "Resident is an NPC")
    }

    return {
        resident: resident_json,
        success: true
    }

}