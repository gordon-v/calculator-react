import { use, useState } from 'react'
import Wrapper from "./components/Wrapper"
import Screen from "./components/Screen"
import ButtonBox from './components/ButtonBox'
import Button from './components/Button'
import './App.css'

const buttonValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "=",]
]

function App() {
  const [getCalc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0
  })

  return (
    <>
      <Wrapper>
        <Screen value={getCalc.num ? getCalc.num : getCalc.res} />
        <ButtonBox>
          {
            
            buttonValues.flat().map((btn, i) =>{
              let buttonClassName = "button"
              if(btn === "="){
                buttonClassName = "button-equals"
              }

              return (
                <Button key={i}
                  className={buttonClassName}
                  value={btn}
                  onClick={() => {
                    setCalc(prev => ({
                      ...prev,
                      num: btn,
                    }))
                  }}
                  />
              )
            })


          }
          
        </ButtonBox>
      </Wrapper>
    </>
  )
}

export default App
