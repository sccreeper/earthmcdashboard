import { APIBase } from '$lib/consts'
import { error, redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    const town_res = await fetch(APIBase + "/towns/" + params.name)
    const ok = await town_res.ok

    if (!ok) {
        if (town_res.status == 404) {
            throw error(404, "Nation does not exist")
        } else {
            throw error(town_res.status,  await town_res.text())
        }
    }

    const town_json = await town_res.json()

    let leader_uuid

    const leader_uuid_res = await fetch(`https://playerdb.co/api/player/minecraft/${town_json.strings.mayor}`)
    if (leader_uuid_res.status != 200) {
        leader_uuid = "0"
    } else {
        leader_uuid = (await leader_uuid_res.json()).data.player.id
    }


    return {
        town: town_json, 
        town_name: params.name,
        leader_uuid: leader_uuid,
        success: true
    }

}