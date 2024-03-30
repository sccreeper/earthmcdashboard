// Objects used in API
// Generated using https://tools.w3cub.com/json-to-jsdoc
// Some are altered slightly

/**
 * @typedef {object} Coordinates
 * @property {object} coordinates.spawn
 * @property {string} coordinates.spawn.world
 * @property {number} coordinates.spawn.x
 * @property {number} coordinates.spawn.y
 * @property {number} coordinates.spawn.z
 * @property {number} coordinates.spawn.pitch
 * @property {number} coordinates.spawn.yaw
 */

/** 
 * @typedef {object} EntitySkeleton
 * @property {string} name
 * @property {string} uuid
 */

// Nation objects

/** 
 * @typedef {object} Nation
 * @property {string} name
 * @property {string} uuid
 * @property {string} board
 * @property {string} dynmapColour
 * @property {string} dynmapOutline
 * @property {null|string} wiki
 * @property {object} king
 * @property {string} king.name
 * @property {string} king.uuid
 * @property {object} capital
 * @property {string} capital.name
 * @property {string} capital.uuid
 * @property {object} timestamps
 * @property {number} timestamps.registered
 * @property {object} status
 * @property {boolean} status.isPublic
 * @property {boolean} status.isOpen
 * @property {boolean} status.isNeutral
 * @property {object} stats
 * @property {number} stats.numTownBlocks
 * @property {number} stats.numResidents
 * @property {number} stats.numTowns
 * @property {number} stats.numAllies
 * @property {number} stats.numEnemies
 * @property {number} stats.balance
 * @property {Coordinates} coordinates
 * @property {object[]} residents
 * @property {string} residents.name
 * @property {string} residents.uuid
 * @property {object[]} towns
 * @property {string} towns.name
 * @property {string} towns.uuid
 * @property {string[]} allies
 * @property {string[]} enemies
 * @property {string[]} sanctioned
 * @property {object} ranks
 * @property {string[]} ranks.Chancellor
 * @property {string[]} ranks.Colonist
 * @property {string[]} ranks.Diplomat
 */

// Town objects

/** 
 * @typedef {object} Town
 * @property {string} name
 * @property {string} uuid
 * @property {string} board
 * @property {string} founder
 * @property {null|string} wiki
 * @property {object} mayor
 * @property {string} mayor.name
 * @property {string} mayor.uuid
 * @property {object} nation
 * @property {string} nation.name
 * @property {string} nation.uuid
 * @property {object} timestamps
 * @property {number} timestamps.registered
 * @property {number} timestamps.joinedNationAt
 * @property {number} timestamps.ruinedAt
 * @property {object} status
 * @property {boolean} status.isPublic
 * @property {boolean} status.isOpen
 * @property {boolean} status.isNeutral
 * @property {boolean} status.isCapital
 * @property {boolean} status.isOverClaimed
 * @property {boolean} status.isRuined
 * @property {boolean} status.isForSale
 * @property {boolean} status.hasNation
 * @property {boolean} status.hasOverclaimShield
 * @property {object} stats
 * @property {number} stats.numTownBlocks
 * @property {number} stats.maxTownBlocks
 * @property {number} stats.numResidents
 * @property {number} stats.numTrusted
 * @property {number} stats.numOutlaws
 * @property {number} stats.balance
 * @property {null} stats.forSalePrice
 * @property {object} perms
 * @property {boolean[]} perms.build
 * @property {boolean[]} perms.destroy
 * @property {boolean[]} perms.switch
 * @property {boolean[]} perms.itemUse
 * @property {object} perms.flags
 * @property {boolean} perms.flags.pvp
 * @property {boolean} perms.flags.explosion
 * @property {boolean} perms.flags.fire
 * @property {boolean} perms.flags.mobs
 * @property {object} coordinates
 * @property {object} coordinates.spawn
 * @property {string} coordinates.spawn.world
 * @property {number} coordinates.spawn.x
 * @property {number} coordinates.spawn.y
 * @property {number} coordinates.spawn.z
 * @property {number} coordinates.spawn.pitch
 * @property {number} coordinates.spawn.yaw
 * @property {number[]} coordinates.homeBlock
 * @property {number[][]} coordinates.townBlocks
 * @property {object[]} residents
 * @property {string} residents.name
 * @property {string} residents.uuid
 * @property {object[]} trusted
 * @property {string} trusted.name
 * @property {string} trusted.uuid
 * @property {object[]} outlaws
 * @property {string} outlaws.name
 * @property {string} outlaws.uuid
 * @property {string[]} quarters
 * @property {object} ranks
 * @property {string[]} ranks.Councillor
 * @property {string[]} ranks.Builder
 * @property {string[]} ranks.Recruiter
 * @property {string[]} ranks.Police
 * @property {string[]} ranks.Tax-exempt (idk what to do about this)
 * @property {string[]} ranks.Treasurer
 * @property {string[]} ranks.Realtor
 * @property {string[]} ranks.Settler
 */

// Player objects

/** 
 * @typedef {object} Player
 * @property {string} name
 * @property {string} uuid
 * @property {null|string} title
 * @property {null|string} surname
 * @property {string} formattedName
 * @property {string} about
 * @property {object} town
 * @property {string} town.name
 * @property {string} town.uuid
 * @property {object} nation
 * @property {string} nation.name
 * @property {string} nation.uuid
 * @property {object} timestamps
 * @property {number} timestamps.registered
 * @property {number} timestamps.joinedTownAt
 * @property {number} timestamps.lastOnline
 * @property {object} status
 * @property {boolean} status.isOnline
 * @property {boolean} status.isNPC
 * @property {boolean} status.isMayor
 * @property {boolean} status.isKing
 * @property {boolean} status.hasTown
 * @property {boolean} status.hasNation
 * @property {object} stats
 * @property {number} stats.balance
 * @property {number} stats.numFriends
 * @property {object} perms
 * @property {boolean[]} perms.build
 * @property {boolean[]} perms.destroy
 * @property {boolean[]} perms.switch
 * @property {boolean[]} perms.itemUse
 * @property {object} perms.flags
 * @property {boolean} perms.flags.pvp
 * @property {boolean} perms.flags.explosion
 * @property {boolean} perms.flags.fire
 * @property {boolean} perms.flags.mobs
 * @property {object} ranks
 * @property {string[]} ranks.townRanks
 * @property {string[]} ranks.nationRanks
 * @property {string[]} friends
 */

/** 
 * @typedef {object} ServerStatus
 * @property {string} version
 * @property {string} moonPhase
 * @property {object} timestamps
 * @property {number} timestamps.newDayTime
 * @property {object} status
 * @property {boolean} status.hasStorm
 * @property {boolean} status.isThundering
 * @property {object} stats
 * @property {number} stats.time
 * @property {number} stats.fullTime
 * @property {number} stats.maxPlayers
 * @property {number} stats.numOnlinePlayers
 * @property {number} stats.numOnlineNomads
 * @property {number} stats.numResidents
 * @property {number} stats.numNomads
 * @property {number} stats.numTowns
 * @property {number} stats.numTownBlocks
 * @property {number} stats.numNations
 * @property {number} stats.numQuarters
 * @property {number} stats.numCuboids
 * @property {object} voteParty
 * @property {number} voteParty.target
 * @property {number} voteParty.numRemaining
 */


export default {};