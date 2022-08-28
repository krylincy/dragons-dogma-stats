const fighterStats = {
  hp: 37,
  st: 15,
  attack: 4,
  defense: 4,
  mattack: 2,
  mdefense: 1,
};

const striderStats = {
  hp: 25,
  st: 25,
  attack: 3,
  defense: 3,
  mattack: 3,
  mdefense: 2,
};

const mageStats = {
  hp: 21,
  st: 10,
  attack: 2,
  defense: 1,
  mattack: 4,
  mdefense: 4,
};

const warriorStats = {
  hp: 40,
  st: 10,
  attack: 5,
  defense: 3,
  mattack: 2,
  mdefense: 1,
};

const rangerStats = {
  hp: 21,
  st: 30,
  attack: 4,
  defense: 2,
  mattack: 3,
  mdefense: 2,
};

const sorcererStats = {
  hp: 16,
  st: 15,
  attack: 2,
  defense: 1,
  mattack: 5,
  mdefense: 5,
};

const init = [
  {
    hp: 720,
    st: 720,
    attack: 116,
    defense: 107,
    mattack: 78,
    mdefense: 78,
  },
  {
    hp: 655,
    st: 765,
    attack: 97,
    defense: 97,
    mattack: 97,
    mdefense: 88,
  },
  {
    hp: 608,
    st: 720,
    attack: 78,
    defense: 87,
    mattack: 116,
    mdefense: 107,
  },
];

const fighterStats200 = {
  hp: 15,
  st: 5,
  attack: 1,
  defense: 3,
  mattack: 0,
  mdefense: 0,
};

const striderStats200 = {
  hp: 5,
  st: 15,
  attack: 1,
  defense: 1,
  mattack: 1,
  mdefense: 1,
};

const mageStats200 = {
  hp: 10,
  st: 10,
  attack: 0,
  defense: 0,
  mattack: 2,
  mdefense: 2,
};

const warriorStats200 = {
  hp: 5,
  st: 15,
  attack: 2,
  defense: 2,
  mattack: 0,
  mdefense: 0,
};

const rangerStats200 = {
  hp: 5,
  st: 15,
  attack: 2,
  defense: 1,
  mattack: 0,
  mdefense: 1,
};

const sorcererStats200 = {
  hp: 10,
  st: 10,
  attack: 0,
  defense: 0,
  mattack: 3,
  mdefense: 1,
};

function calcTo200(selectionString, statsTo100) {
  const minLevel = 0;
  const maxLevel = 100;

  function returnTempStats(attr, fighter = 0, strider = 0, mage = 0, warrior = 0, ranger = 0) {
    let sumUpStat = 0;

    if (fighter) {
      sumUpStat += fighter * fighterStats200[attr];
    }
    if (strider) {
      sumUpStat += strider * striderStats200[attr];
    }
    if (mage) {
      sumUpStat += mage * mageStats200[attr];
    }
    if (warrior) {
      sumUpStat += warrior * warriorStats200[attr];
    }
    if (ranger) {
      sumUpStat += ranger * rangerStats200[attr];
    }

    return sumUpStat + statsTo100[attr];
  }

  console.log(`--> sub-loop ${selectionString}`);
  for (let fighter = minLevel; fighter < maxLevel; fighter++) {
    if (
      returnTempStats('hp', fighter) > 4000 ||
      returnTempStats('st', fighter) > 4000 ||
      returnTempStats('attack', fighter) > 620 ||
      returnTempStats('mattack', fighter) > 620 ||
      returnTempStats('defense', fighter) > 380 ||
      returnTempStats('mdefense', fighter) > 380
    ) {
      break;
    }
    for (let strider = minLevel; strider < maxLevel; strider++) {
      if (
        fighter + strider > maxLevel ||
        returnTempStats('hp', fighter, strider) > 4000 ||
        returnTempStats('st', fighter, strider) > 4000 ||
        returnTempStats('attack', fighter, strider) > 620 ||
        returnTempStats('mattack', fighter, strider) > 620 ||
        returnTempStats('defense', fighter, strider) > 380 ||
        returnTempStats('mdefense', fighter, strider) > 380
      ) {
        break;
      }
      for (let mage = minLevel; mage < maxLevel; mage++) {
        if (
          fighter + strider + mage > maxLevel ||
          returnTempStats('hp', fighter, strider, mage) > 4000 ||
          returnTempStats('st', fighter, strider, mage) > 4000 ||
          returnTempStats('attack', fighter, strider, mage) > 620 ||
          returnTempStats('mattack', fighter, strider, mage) > 620 ||
          returnTempStats('defense', fighter, strider, mage) > 380 ||
          returnTempStats('mdefense', fighter, strider, mage) > 380
        ) {
          break;
        }
        for (let warrior = minLevel; warrior < maxLevel; warrior++) {
          if (
            fighter + strider + mage + warrior > maxLevel ||
            returnTempStats('hp', fighter, strider, mage, warrior) > 4000 ||
            returnTempStats('st', fighter, strider, mage, warrior) > 4000 ||
            returnTempStats('attack', fighter, strider, mage, warrior) > 620 ||
            returnTempStats('mattack', fighter, strider, mage, warrior) > 620 ||
            returnTempStats('defense', fighter, strider, mage, warrior) > 380 ||
            returnTempStats('mdefense', fighter, strider, mage, warrior) > 380
          ) {
            break;
          }
          for (let ranger = minLevel; ranger < maxLevel; ranger++) {
            if (
              fighter + strider + mage + warrior + ranger > maxLevel ||
              returnTempStats('hp', fighter, strider, mage, warrior, ranger) > 4000 ||
              returnTempStats('st', fighter, strider, mage, warrior, ranger) > 4000 ||
              returnTempStats('attack', fighter, strider, mage, warrior, ranger) > 620 ||
              returnTempStats('mattack', fighter, strider, mage, warrior, ranger) > 620 ||
              returnTempStats('defense', fighter, strider, mage, warrior, ranger) > 380 ||
              returnTempStats('mdefense', fighter, strider, mage, warrior, ranger) > 380
            ) {
              break;
            }
            for (let sorcerer = minLevel; sorcerer < maxLevel; sorcerer++) {
              if (fighter + strider + mage + warrior + ranger + sorcerer === maxLevel) {
                // calculate stats
                function returnStats(attr) {
                  return (
                    fighter * fighterStats200[attr] +
                    strider * striderStats200[attr] +
                    mage * mageStats200[attr] +
                    warrior * warriorStats200[attr] +
                    ranger * rangerStats200[attr] +
                    sorcerer * sorcererStats200[attr] +
                    statsTo100[attr]
                  );
                }

                let stats = {
                  hp: returnStats('hp'),
                  st: returnStats('st'),
                  attack: returnStats('attack'),
                  defense: returnStats('defense'),
                  mattack: returnStats('mattack'),
                  mdefense: returnStats('mdefense'),
                };

                const modulo = 10;
                if (
                  stats.hp === 4000 &&
                  stats.st === 4000 &&
                  stats.attack % modulo === 0 &&
                  stats.defense % modulo === 0 &&
                  stats.mattack % modulo === 0 &&
                  stats.mdefense % modulo === 0 &&
                  Math.abs(stats.defense - stats.mdefense) < 50 &&
                  Math.abs(stats.attack - stats.mattack) < 100
                ) {
                  console.log('----');
                  console.log(JSON.stringify(stats));
                  console.log(selectionString);
                  console.log(
                    `fighter-200: ${fighter}, strider-200: ${strider}, mage-200: ${mage}, warrior-200: ${warrior}, ranger-200: ${ranger}, sorcerer-200: ${sorcerer}`
                  );
                }
              }
              if (fighter + strider + mage + warrior + ranger + sorcerer > maxLevel) {
                break;
              }
            }
          }
        }
      }
    }
  }
}

function calcTo100() {
  const minLevel = 0;
  const maxLevel = 90;
  for (let fighter = minLevel; fighter < maxLevel; fighter++) {
    console.log(`--> loop ${fighter} / ${maxLevel}`);
    for (let strider = minLevel; strider < maxLevel; strider++) {
      if (fighter + strider > maxLevel) {
        break;
      }
      for (let mage = minLevel; mage < maxLevel; mage++) {
        if (fighter + strider + mage > maxLevel) {
          break;
        }
        for (let warrior = minLevel; warrior < maxLevel; warrior++) {
          if (fighter + strider + mage + warrior > maxLevel) {
            break;
          }
          for (let ranger = minLevel; ranger < maxLevel; ranger++) {
            if (fighter + strider + mage + warrior + ranger > maxLevel) {
              break;
            }
            for (let sorcerer = minLevel; sorcerer < maxLevel; sorcerer++) {
              if (fighter + strider + mage + warrior + ranger + sorcerer === maxLevel) {
                // calculate stats
                function returnStats(attr, initPos) {
                  return (
                    fighter * fighterStats[attr] +
                    strider * striderStats[attr] +
                    mage * mageStats[attr] +
                    warrior * warriorStats[attr] +
                    ranger * rangerStats[attr] +
                    sorcerer * sorcererStats[attr] +
                    init[initPos][attr]
                  );
                }

                let stats = [
                  {
                    init: 0,
                    hp: returnStats('hp', 0),
                    st: returnStats('st', 0),
                    attack: returnStats('attack', 0),
                    defense: returnStats('defense', 0),
                    mattack: returnStats('mattack', 0),
                    mdefense: returnStats('mdefense', 0),
                  },
                  {
                    init: 1,
                    hp: returnStats('hp', 1),
                    st: returnStats('st', 1),
                    attack: returnStats('attack', 1),
                    defense: returnStats('defense', 1),
                    mattack: returnStats('mattack', 1),
                    mdefense: returnStats('mdefense', 1),
                  },
                  {
                    init: 2,
                    hp: returnStats('hp', 2),
                    st: returnStats('st', 2),
                    attack: returnStats('attack', 2),
                    defense: returnStats('defense', 2),
                    mattack: returnStats('mattack', 2),
                    mdefense: returnStats('mdefense', 2),
                  },
                ];

                let level200 = [
                  {
                    name: 'fighter',
                    hp: 1500,
                    st: 500,
                    attack: 100,
                    defense: 300,
                    mattack: 0,
                    mdefense: 0,
                  },
                  {
                    name: 'strider',
                    hp: 500,
                    st: 1500,
                    attack: 100,
                    defense: 100,
                    mattack: 100,
                    mdefense: 100,
                  },
                  {
                    name: 'mage',
                    hp: 1000,
                    st: 1000,
                    attack: 0,
                    defense: 0,
                    mattack: 200,
                    mdefense: 200,
                  },
                  {
                    name: 'warrior',
                    hp: 500,
                    st: 1500,
                    attack: 200,
                    defense: 200,
                    mattack: 0,
                    mdefense: 0,
                  },
                  {
                    name: 'ranger',
                    hp: 500,
                    st: 1500,
                    attack: 200,
                    defense: 100,
                    mattack: 0,
                    mdefense: 100,
                  },
                  {
                    name: 'sorcerer',
                    hp: 1000,
                    st: 1000,
                    attack: 0,
                    defense: 0,
                    mattack: 300,
                    mdefense: 100,
                  },
                  {
                    name: 'mage/sorcerer',
                    hp: 1000,
                    st: 1000,
                    attack: 0,
                    defense: 0,
                    mattack: 250,
                    mdefense: 150,
                  },
                  {
                    name: 'fighter/ranger',
                    hp: 1000,
                    st: 1000,
                    attack: 150,
                    defense: 200,
                    mattack: 0,
                    mdefense: 20,
                  },
                  {
                    name: 'strider/warrior',
                    hp: 500,
                    st: 1500,
                    attack: 150,
                    defense: 150,
                    mattack: 50,
                    mdefense: 50,
                  },
                ];

                stats.forEach((resultStats) => {
                  level200.forEach((finalClass) => {
                    const buildHp = resultStats.hp + finalClass.hp;
                    const buildST = resultStats.st + finalClass.st;
                    const buildAttack = resultStats.attack + finalClass.attack;
                    const buildDefense = resultStats.defense + finalClass.defense;
                    const buildMattack = resultStats.mattack + finalClass.mattack;
                    const buildMdefense = resultStats.mdefense + finalClass.mdefense;

                    const modulo = 5;
                    if (
                      buildHp > 3500 &&
                      buildST > 3500 &&
                      // buildDefense > 300 &&
                      // buildMdefense > 300 &&
                      buildAttack > 500 &&
                      buildMattack > 500 &&
                      buildHp % 100 === 0 &&
                      buildST % 100 === 0 &&
                      // buildAttack % modulo === 0 &&
                      // buildDefense % modulo === 0 &&
                      // buildMattack % modulo === 0 &&
                      // buildMdefense % modulo === 0 &&
                      Math.abs(buildDefense - buildMdefense) < 100 &&
                      Math.abs(buildAttack - buildMattack) < 100
                    ) {
                      console.log('----------');
                      console.log(
                        `Start Class: ${
                          resultStats.init + 1
                        } fighter: ${fighter}, strider: ${strider}, mage: ${mage}, warrior: ${warrior}, ranger: ${ranger}, sorcerer: ${sorcerer}`
                      );
                      console.log(`To 200 use: ${finalClass.name}`);
                      console.log(
                        `hp: ${buildHp}, st: ${buildST}, att: ${buildAttack}, def: ${buildDefense}, matt: ${buildMattack}, mdef: ${buildMdefense}`
                      );
                      console.log('----------');
                    }
                  });
                });
              }
              if (fighter + strider + mage + warrior + ranger + sorcerer > maxLevel) {
                break;
              }
            }
          }
        }
      }
    }
  }
}

calcTo100();
