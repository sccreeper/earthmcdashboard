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