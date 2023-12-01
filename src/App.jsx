import { useState } from 'react'
import Payment from "./Components/Payment/Payment"
import AfterPayment from "./Components/AfterPayment/After-payment"
import './App.css'

function App() {
  const [cardNum, setcardNum] = useState("")
  const [name, setName] = useState("")
  const [dateMM,setdateMM] = useState("")
  const [dateYY,setdateYY] = useState("")
  const [CVC, setCVC] = useState("")
  const [confirm, setConfirm] = useState(false)

  const [cardNumError,setcardNumError ] = useState("")
  const [nameError,setnameError ] = useState("")
  const [dateError,setdateError ] = useState("")
  const [CVCError,setCVCError ] = useState("")




  return (
    <>
      <div id="page">
        <div id="heading">
          <div id="cardsBack"><p id="CVC">{CVC ? CVC : "123"}</p></div>
          <div id="cardsFront">
            <div id="signs">
              <div id="firstCircle"></div>
              <div id="secondCircle"></div>
            </div>
            <div id="cardInfo">
              <p id="cardNum">{cardNum ? cardNum : "0000 0000 0000 0000"}</p>
              <div id="nameDATE">
                <p id="name">{name ? name : "JANE APPLESEED"}</p>
                <p id="DATE">{dateMM && dateYY ? `${dateMM} / ${dateYY}` : "00/00"}</p>
              </div>
            </div>
          </div>
        </div>
        {confirm ?   
        <AfterPayment 
          setcardNum={setcardNum}
          setName={setName} 
          setdateMM={setdateMM}
          setdateYY={setdateYY}
          setCVC={setCVC} 
          setConfirm={setConfirm}
        />:
        <Payment 
          cardNum={cardNum} 
          setcardNum={setcardNum} 
          name={name} 
          setName={setName} 
          dateMM={dateMM} 
          setdateMM={setdateMM} 
          dateYY={dateYY} 
          setdateYY={setdateYY} 
          CVC={CVC} 
          setCVC={setCVC} 
          confirm={confirm} 
          setConfirm={setConfirm}
          cardNumError={cardNumError}
          setcardNumError={setcardNumError}
          nameError={nameError}
          setnameError={setnameError}
          dateError={dateError}
          setdateError={setdateError}
          CVCError={CVCError}
          setCVCError={setCVCError}
        />}
      </div>
    </>
  )
}

export default App
