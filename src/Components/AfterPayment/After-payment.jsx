import { useState } from "react";
import './After-payment.css'

function AfterPayment(props){
    // function restart(event){
    //     event.preventDefault()
    //     props.setcardNum("")
    //     props.setName("")
    //     props.setdateMM("")
    //     props.setdateYY("")
    //     props.setCVC("") 
    //     props.setConfirm(false)
    // }
    return(
        <>
            <form id="confirmedPage" >
                <img src="./src/icon-complete.svg" id="completeImg"/>
                <h1 id="confirmHead">THANK YOU!</h1>
                <p id="description">We’ve added your card details</p>
                <button  id="continue" >Continue</button>
            </form>
        </>
    )
}

export default AfterPayment