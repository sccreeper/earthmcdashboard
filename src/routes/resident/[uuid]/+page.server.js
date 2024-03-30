import { APIBaseV3 } from '$lib/consts'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    const resident_resp = await fetch(APIBaseV3 + "/players?query=" + params.uuid)
    const ok = await resident_resp.ok

    if (!ok) {
        if (resident_resp.status == 404) {
            throw error(404, "Resident does not exist")
        } else {
            throw error(resident_resp.status,  await resident_resp.text())
        }
    }

    //console.log(await resident_resp.text())

    /** @type {import('$lib/api').Player} */
    const resident_json = (await resident_resp.json())[0]

    if (resident_json.status.isNPC) {
        throw error(404, "Resident is an NPC")
    }

    return {
        resident: resident_json,
        success: true
    }

}