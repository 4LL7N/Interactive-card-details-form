import { useState } from "react"
import './Payment.css'

function Payment(props){
    function isAllNum(element){
        let numbers = element.replace(/\s/g, '');
        return /^[0-9]+$/.test(numbers)
        
    }

    function isAllLetter(element){
        let text = element.replace(/\s/g, '');
        return /^[A-Za-z]+$/.test(text)
    }

    function Confirm(event){
        event.preventDefault()
        let globalError = false
        // console.log(props.name)
        // console.log(!props.name)
        if(!props.name){
            props.setnameError("Can’t be blank")
            globalError =true
        }else if(!isAllLetter(props.name)){
            props.setnameError("name must only contain letters")
            globalError =true
        }else{
            props.setnameError("")
        }
        // console.log(props.nameError)
        if(!props.cardNum){
            // console.log("card blank")
            props.setcardNumError("Can’t be blank")
            globalError =true
        }else if(props.cardNum.replace(/\s/g, '').length != 16){
            props.setcardNumError("card number must contain 16 symbols")
            globalError =true
        }else if(!isAllNum(props.cardNum)){
            props.setcardNumError("all simbol must be number")
            globalError =true
            
        }else{
            props.setcardNumError("")
        }

        if(!props.dateMM || !props.dateYY){
            // console.log("date blank")
            props.setdateError("Can’t be blank")
            globalError =true
        }else if(props.dateMM.length != 2 || props.dateYY.length != 2){
            props.setdateError("both date input must contain 2 symbols")
            globalError =true
        }else if(!isAllNum(props.dateMM) || !isAllNum(props.dateYY)){
            props.setdateError("all simbol must be number")
            globalError =true
        }else{
            props.setdateError("")
        }
            // console.log("cvc blank");

        if(!props.CVC){
            props.setCVCError("Can’t be blank");
            globalError =true
            // console.log(props.CVCError);
        }else if(props.CVC.length != 3){
            props.setCVCError("CVC must contain 3 symbols")
            globalError =true
        }else if(!isAllNum(props.CVC)){
            props.setCVCError("all simbol must be number")
            globalError =true
        }else{
            props.setCVCError("")
        }
        // console.log(props.nameError)
        if(!globalError){
            // console.log(props.confirm)
            props.setConfirm(true)
            console.log(props.confirm)
            
        }
    }

    function cardNumber(element){
        let cleannumber = element.target.value.replace(/\s/g, '');
        let number =""
        for(let j = 0 ; j < cleannumber.length ; j++ ){
            if(j%4 == 0){
                number+= " "
            }
            number += cleannumber[j]
            props.setcardNum(number)
        }
        
    }


    return(
        <>
        <form id="paymentBox" onSubmit={Confirm}>
            <div className="nameBox">
                <h2 className="nameBoxHead">Cardholder Name</h2>
                <input type="text" className="Input" name="Input" placeholder="e.g. Jane Appleseed" style={{border: props.nameError ? "1px solid #FF5050" :undefined }} onChange={(event) => props.setName(event.target.value)}/>
                <p className="Error">{props.nameError}</p>
            </div>
            <div className="nameBox">
                <h2 className="nameBoxHead">Card Number</h2>
                <input type="text" className="Input" name="Input" placeholder="e.g. 1234 5678 9123 0000" maxLength="16" style={{border: props.cardNumError ? "1px solid #FF5050" : undefined}} onChange={(event) =>cardNumber(event)}/>
                <p className="Error">{props.cardNumError}</p>
            </div>
            <div id="DATEcvc">
                <div className="nameBox">
                    <h2 className="nameBoxHead">Exp. Date (MM/YY)</h2>
                    <span id="MMYYinput">
                        <input type="text" className="Input MMinput" name="Input" placeholder="MM" maxLength="2" style={{border: props.dateError ? "1px solid #FF5050" : undefined}} onChange={(event) => props.setdateMM(event.target.value)}/>
                        <input type="text" className="Input YYinput" name="Input" placeholder="YY" maxLength="2" style={{border: props.dateError ? "1px solid #FF5050" : undefined}} onChange={(event) => props.setdateYY(event.target.value)}/>
                    </span>
                    <p className="Error">{props.dateError}</p>
                </div>
                <div className="nameBox">
                    <p className="nameBoxHead">CVC</p>
                    <input type="text" className="Input CVCinput" name="Input" placeholder="e.g. 123" maxLength="3" style={{border: props.CVCError ? "1px solid #FF5050" : undefined}} onChange={(event) => props.setCVC(event.target.value)}/>
                    <p className="Error">{props.CVCError}</p>
                </div>
            </div>
            <button type="Submit" id="confirmation">Confirm</button>
        </form>

        </>
    )
}

export default Payment