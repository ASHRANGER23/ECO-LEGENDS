window.WeaponTypes = {
  normal: "normal",
  spicy: "spicy",
  veggie: "veggie",
  fungi: "fungi",
  chill: "chill",
}

window.Weapons = {
  "s001": {
    name: "Solarizard",
    description: "Mighty Solar type Ecomon",
    type: WeaponTypes.spicy,
    src: "images/characters/pizzas/s001.png",
    icon: "images/icons/spicy.png",
    actions: [ "saucyStatus", "clumsyStatus", "damage1" ],
  },
  "s002": {
    name: "Hydrofinn",
    description: "Hydropower wielder",
    type: WeaponTypes.spicy,
    src: "images/characters/pizzas/s002.png",
    icon: "images/icons/water.png",
    actions: [ "damage1", "saucyStatus", "clumsyStatus" ],
  },
  "s003": {
    name: "Whoosh",
    description: " Powerfull wielder of Wind energy",
    type: WeaponTypes.spicy,
    src: "images/characters/pizzas/s003.png",
    icon: "images/icons/chill.png",
    actions: [ "damage1", "saucyStatus", "clumsyStatus" ],
  },
  "v001": {
    name: "Greenodactyle",
    description: "Creature born to protect the forsests!",
    type: WeaponTypes.veggie,
    src: "images/characters/pizzas/v001.png",
    icon: "images/icons/life.png",
    actions: [ "damage1" ],
  },
  "v002": {
    name: "Firitina",
    description: "Pizza desc here",
    type: WeaponTypes.veggie,
    src: "images/characters/pizzas/v002.png",
    icon: "images/icons/fungi.png",
    actions: [ "damage1" ],
  },
  "f001": {
    name: "Poizikane",
    description: "Pizza desc here",
    type: WeaponTypes.fungi,
    src: "images/characters/pizzas/f001.png",
    icon: "images/icons/veggie.png",
    actions: [ "damage1" ],
  },
  "f002": {
    name: "Pollu",
    description: "Pizza desc here",
    type: WeaponTypes.fungi,
    src: "images/characters/pizzas/f002.png",
    icon: "images/icons/fungi.png",
    actions: [ "damage1" ],
  },
  "c001": {
    name: "Toxime",
    description: "Pizza desc here",
    type: WeaponTypes.fungi,
    src: "images/characters/pizzas/c001.png",
    icon: "images/icons/veggie.png",
    actions: [ "damage1" ],
  },
  "c002": {
    name: "Hazard",
    description: "Pizza desc here",
    type: WeaponTypes.fungi,
    src: "images/characters/pizzas/c002.png",
    icon: "images/icons/fungi.png",
    actions: [ "damage1" ],
  }
}