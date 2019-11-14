import React, { useState } from 'react'
import XpChart from './xp_chart'

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
    <XpChart numberOfPlayers={numberOfPlayers} level={level} />

    <p>
      <label>
         XP List:
        <input type="string" value={xpList} onChange={e => setXpList(e.target.value)} />
      </label>
    </p>
    <p>
      XP Difficulty: {xpDifficulty}
    </p>
    </>
  )
}

export default PartyForm
