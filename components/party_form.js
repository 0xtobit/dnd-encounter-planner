import React, { useState } from 'react'

const xpThresholds = {
   1:   [25,   50,   75,   100],
   2:   [50,  100,  150,   200],
   3:   [75,  150,  225,   400],
   4:  [125,  250,  375,   500],
   5:  [250,  500,  750,  1100],
   6:  [300,  600,  900,  1400],
   7:  [350,  750, 1100,  1700],
   8:  [450,  900, 1400,  2100],
   9:  [550, 1100, 1600,  2400],
  10:  [600, 1200, 1900,  2800],
  11:  [800, 1600, 2400,  3600],
  12: [1000, 2000, 3000,  4500],
  13: [1100, 2200, 3400,  5100],
  14: [1250, 2500, 3800,  5700],
  15: [1400, 2800, 4300,  6400],
  16: [1600, 3200, 4800,  7200],
  17: [2000, 3900, 5900,  8800],
  18: [2100, 4200, 6300,  9500],
  19: [2400, 4900, 7300, 10900],
  20: [2800, 5700, 8500, 12700]
}

const encounterMultiplier = {
   1: 1,
   2: 1.5,
   3: 2,
   4: 2,
   5: 2,
   6: 2,
   7: 2.5,
   8: 2.5,
   9: 2.5,
  10: 2.5,
  11: 3,
  12: 3,
  13: 3,
  14: 3,
  15: 4
}

const PartyForm = () => {
  const [numberOfPlayers, setNumberOfPlayers] = useState(4)
  const [level, setLevel] = useState(1)
  const [xpList, setXpList] = useState('25, 25')

  // sum all numbers
  let totalXP = xpList.split(',').map(x => parseInt(x)).reduce((a,b) => a+b, 0)
  let totalMonsters = xpList.split(',').length
  let xpDifficulty = totalXP * encounterMultiplier[Math.min(totalMonsters, 15)]

  let easyDifficulty = 0
  let mediumDifficulty = 0
  let hardDifficulty = 0
  let deadlyDifficulty = 0
  if (numberOfPlayers !== '' && level !== '') {
     easyDifficulty = xpThresholds[level][0] * numberOfPlayers
     mediumDifficulty = xpThresholds[level][1] * numberOfPlayers
     hardDifficulty = xpThresholds[level][2] * numberOfPlayers
     deadlyDifficulty = xpThresholds[level][3] * numberOfPlayers
  }

  return (
    <>
    <p>
      <label>
         Level:
        <input type="integer" value={level} onChange={e => setLevel(e.target.value)} />
      </label>
    </p>

    <p>
      <label>
         Number of Players:
        <input type="integer" value={numberOfPlayers} onChange={e => setNumberOfPlayers(e.target.value)} />
      </label>
    </p>

    <p>
      <label>
         XP List:
        <input type="string" value={xpList} onChange={e => setXpList(e.target.value)} />
      </label>
    </p>
    Easy: {easyDifficulty} Medium: {mediumDifficulty} Hard: {hardDifficulty} Deadly: {deadlyDifficulty}
    <p>
      XP Difficulty: {xpDifficulty}
    </p>
    </>
  )
}

export default PartyForm
