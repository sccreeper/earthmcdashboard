import { APIBase } from '$lib/consts'
import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {

    const nation_res = await fetch(APIBase + "/nations/" + params.name)
    const ok = await nation_res.ok

    if (!ok) {
        if (nation_res.status == 404) {
            throw error(404, "Nation does not exist")
        } else {
            throw error(nation_res.status,  await nation_res.text())
        }
    }

    const nation_json = await nation_res.json()
    let leader_uuid

    const leader_uuid_res = await fetch(`https://playerdb.co/api/player/minecraft/${nation_json.strings.king}`)
    if (leader_uuid_res.status != 200) {
        leader_uuid = "0"
    } else {
        leader_uuid = (await leader_uuid_res.json()).data.player.id
    }

    // For some reason the map hex code is the one in the for the capital, not the nation ??
    // Actually on further inspection this appears to be completely broken.
    const hex_code = (await (await fetch(APIBase + "/towns/" + nation_json.strings.capital)).json()).strings.mapColorHexCode

    return {
        nation: nation_json,
        leader_uuid: leader_uuid,
        hex_code: hex_code,
        nation_name: params.name,
        success: true
    }

}