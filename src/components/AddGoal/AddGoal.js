import './AddGoal.css'
export function AddGoal({add}) {
    return (
        <div className="goalForm">
            <button className="add" onClick={add} > ADD GOAL</button>
        </div>
    )
}