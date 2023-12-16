import { Months } from "./consts";

/**
 * 
 * @param {Date} date 
 * @returns {string}
 */
export function prettyDate(date) {
    return `${date.getDate()} ${Months[date.getMonth()]} ${date.getFullYear()}`
}