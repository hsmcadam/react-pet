import React from "react"
import './Goal.css'
export function Goal({name, description, idNumber ,newItem}) {
    const [ifClose,setClose]=React.useState(false)
    const [ifDone, setDone]=React.useState(false)
    console.log(description)
    console.log(name)

    function newGoal(newItem, idNumber){
        if(newItem === idNumber){        
            return <span className="new"> New</span>}
    }
        
    const styles={
        display: ifClose? 'none':'inherit',
        backgroundColor: 'grey'
    }

    if(!ifDone){
        delete styles.backgroundColor;
    }

    const nameStyle={
        textDecoration: ifDone? 'line-through':'inherit'
    }
      
    function close(){
        setClose(true)
    }

    function done(){
        setDone(true)
    }

    const doneClass = ifDone? 'done.checked':'done'
    const complete = ifDone? '':'Complete'

    return(
    <div className="goal" id={description} style={styles}>
        <div className="flex">
            <div className="name" style={nameStyle}>{name}{newGoal(newItem, idNumber)}
            <div className="description" id={"description"+idNumber}>{description}</div>
            </div>
            <div className="space"></div>
            <div className={doneClass} id={idNumber} onClick={done} > {complete} </div>
            <div className="close" onClick={close}>×</div>
        </div>
    </div>)
}