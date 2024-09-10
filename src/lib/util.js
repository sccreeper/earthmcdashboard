import { error, fail } from "@sveltejs/kit";
import { APIBaseV3, Months } from "./consts";

/**
 * 
 * @param {Date} date 
 * @returns {string}
 */
export function prettyDate(date) {
    return `${date.getDate()} ${Months[date.getMonth()]} ${date.getFullYear()}`
}

/**
 * 
 * @param {number} time 
 * @returns {string}
 */
export function prettyDuration(time) {
    
    time = time / 1000

    if (time > 24 * 60 * 60) {

        return `${Math.floor(time / (60 * 60 * 24))} days`
        
    } else if(time > 60 * 60) {
        
        return `${Math.floor(time / (60 * 60))} hours`

    } else {

        return `${Math.floor(time / 60)} minutes`

    }

}

/**
 * 
 * @param {number} number 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
}

/**
 * 
 * @param {string} uuid 
 * @param {string} type 
 * @returns {Promise<any>}
 */
export async function fetchEntity(uuid, type) {
    
    const resp =  await fetch(
        APIBaseV3 + `/${type}`,
        {
            method: "POST",
            body: JSON.stringify({
                query: [ uuid ]
            })
        }
    )

    if (resp.status == 404) {
        throw error(resp.status, `${type} "${uuid}" not found`) 
    } else if (!resp.ok) {
        throw error(resp.status, resp.statusText)
    }

    return await resp.json()

}