import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './component/accordian/Accordian'
import Color from './component/bg-color-changer/Color'
import StarRating from './component/star-rating/StarRating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Accordian/> */}
      {/* <Color /> */}
      <StarRating noOfStars={7} />
    </>
  )
}

export default App
