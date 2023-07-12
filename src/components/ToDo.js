import React from 'react';
import {Header} from './Header/Header';
import {AddGoal} from './AddGoal/AddGoal';
import {Goal} from './goal/Goal';
import {Form} from './Form/Form';

export function ToDo() {
    const [formDisplay, setForm]=React.useState(false)
    const [goalData, setGoalData]=React.useState({goalName: "",goalDescription:""})

    function add(){
        setForm(true)
    }
    const [goals,setGoals]=React.useState([])
    const [id, setId]=React.useState(0)

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
        <Form formDisplay={formDisplay}  setForm={setForm} id={id} setId={setId} setGoals={setGoals} goalData={goalData} setGoalData={setGoalData} goals={goals}>
        </Form>
    </div>)
}