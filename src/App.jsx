import { useState } from 'react'
import Wrapper from "./components/Wrapper"
import Screen from "./components/Screen"
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Wrapper>
        <Screen value="0" />
        <ButtonBox>
  
          <Button className="" value="" onClick={() => {console.log("Clicked")}}/>

        </ButtonBox>
      </Wrapper>
    </>
  )
}

export default App
