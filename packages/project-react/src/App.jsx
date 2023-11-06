import { useState } from 'react'
import { resolveAB } from '@wlk/utils';
import numIndex from '@wlk/apis';
import {num} from '@wlk/apis/userApi/user.js'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setCount(n => n + 1)
  }

  return (
    <>
      {count} - <button onClick={handleClick}>+</button>
      <hr />
      {num} --- {numIndex} --- {resolveAB(1, 2)}
    </>
  )
}

export default App
