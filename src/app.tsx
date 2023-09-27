import { memo } from "preact/compat"
import BreakingLogo from './components/BreakingLogo'
import { useState,useEffect } from "preact/hooks"
import Breakify from './helpers/Breakify'
const App=()=> {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [first, setFirst] = useState(['', '', ''])
  const [last, setLast] = useState(['', '', ''])

  useEffect(() => {
    setFirst(Breakify(firstName))
  }, [firstName])

  useEffect(() => {
    setLast(Breakify(lastName))
  }, [lastName])

  return (
    <div className='app'>
      <div className='content'>
        <BreakingLogo result={first} />
        <BreakingLogo result={last} />
        <div className='row'>
          <div className='col'>
            <label>First Name</label>
            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} />
          </div>
          <div className='col'>
            <label>Last Name</label>
            <input onChange={(e) => setLastName(e.target.value)} value={lastName} />
          </div>
        </div>
        <button>Breakify</button>
      </div>
    </div>
  )
}
export default memo(App)