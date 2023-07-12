import './Form.css'
export function Form({formDisplay, setForm, goalData, setGoalData, id, setId, goals, setGoals}) {
   
    function inputChange(event){
        setGoalData(prevData=>{return{...prevData,[event.target.name]: event.target.value}})
    }

    function cancel(){
        setForm(false)
    }

    function confirm(){
        {goalData.goalName!=="" && goalData.goalDescription!=="" && (
            goalCreation()

        )}
    }

    function goalCreation(){
        setId(id+1)
        const newGoal= {
            name : goalData.goalName,
            description : goalData.goalDescription,
            idNumber : id,
            newItem : id
        }
        const newGoals = goals.slice();
        for(const goal of newGoals){
            goal.newItem = id
        }
        newGoals.unshift(newGoal)
        setGoals(newGoals)
        setForm(false)
        setGoalData({goalName: "",goalDescription:""})

    }
    
    const formStyle={
        display: formDisplay? "block" : "none"
    }


    return (

        <div className="form" id="formGoal" style={formStyle}>
            <form className="formG">
                <div className="container">
                    <div className="input">
                        <label><b>Goal Name</b></label>
                    </div>
                    <div className="input">
                        <input className="nameGoal" type="text" placeholder="Enter goal name." id="nameG" name="goalName" onChange={inputChange} value={goalData.goalName}></input>
                    </div>
                    <div className="input">
                        <label><b>Goal Description</b></label>
                    </div>
                    <div className="input">
                        <input type="text" placeholder="Enter goal description." id="descriptionG" name="goalDescription"  onChange={inputChange} value={goalData.goalDescription}></input>
                    </div> 
                </div>
                <button className="formButton" type="button" onClick={cancel}>cancel</button>
                <button className="formButton" type="button" onClick={confirm}>CONFIRM</button>
            </form>
        </div>)
}