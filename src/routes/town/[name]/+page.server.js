import { APIBase } from '$lib/consts'
import { error, redirect } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    const town_res = await fetch(APIBase + "/towns/" + params.name)
    const ok = await town_res.ok

    if (!ok) {
        throw error(404, "Town does not exist")
    }

    const town_json = await town_res.json()

    let leader_uuid

    const leader_uuid_res = await fetch(`https://api.mojang.com/users/profiles/minecraft/${town_json.strings.mayor}`)
    if (leader_uuid_res.status != 200) {
        leader_uuid = "0"
    } else {
        leader_uuid = (await leader_uuid_res.json()).id
    }


    return {
        town: town_json, 
        town_name: params.name,
        leader_uuid: leader_uuid,
        success: true
    }

}