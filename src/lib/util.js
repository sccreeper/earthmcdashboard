import { Months } from "./consts";

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
 * @param {number} number 
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
export function clamp(number, min, max) {
    return Math.max(min, Math.min(number, max));
  }