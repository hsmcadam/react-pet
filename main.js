
function Header() {
    return (
        <h1 className="title"><strong>To-Do List</strong>
        </h1>)
}

function Form({formDisplay, setForm, confirm, goalData, setGoalData}) {
   
    function inputChange(event){
        setGoalData(prevData=>{return{...prevData,[event.target.name]: event.target.value}})
    }

    function cancel(){
        setForm(false)
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
                    <span className="nameRequired" >Goal name is required </span>
                </div>
                <button className="formButton" type="button" onClick={cancel}>cancel</button>
                <button className="formButton" type="button" onClick={confirm}>CONFIRM</button>
            </form>
        </div>)
}

function Goal({name, description, idNumber ,newItem}) {
    const [ifClose,setClose]=React.useState(false)
    const [ifDone, setDone]=React.useState(false)

    function newGoal(newItem, idNumber){
        if(newItem == idNumber){        
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


function ToDo() {
    const [formDisplay, setForm]=React.useState(false)
    const [goalData, setGoalData]=React.useState({goalName: "",goalDescription:""})

    function add(){
        setForm(true)
    }
    const [goals,setGoals]=React.useState([])
    const [id, setId]=React.useState(0)
    
    function confirm(){
        setId(id+1)
        const newGoal= {
            name : goalData.goalName,
            decription : goalData.goalDescription,
            idNumber : id,
            newItem : id
        }
        const newGoals = goals.slice();
        for(const goal of newGoals){
            goal.newItem = id
        }
        newGoals.push(newGoal)
        setGoals(newGoals)
        setForm(false)
        setGoalData({goalName: "",goalDescription:""})
    }

    console.log(goals);
    return(

    <div>
        <Header>
        </Header>
        <AddGoal add={add}>
        </AddGoal>
        <div className="goals">
            {goals.map(goal => <Goal name={goal.name} description={goal.description} idNumber={goal.idNumber} newItem={goal.newItem}/>
            )}
        </div>
        <Form formDisplay={formDisplay}  setForm={setForm} confirm={confirm} goalData={goalData} setGoalData={setGoalData} >
        </Form>
    </div>)
}

function AddGoal({add}) {
    return (
        <div className="goalForm">
            <button className="add" onClick={add} > ADD GOAL</button>
        </div>
    )
}
ReactDOM.render(<ToDo/>, document.getElementById('root'))