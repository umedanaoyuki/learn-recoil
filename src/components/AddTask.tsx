import {useRecoilValue} from "recoil";
import {addTitleState} from "../states/addTitleState";

export const AddTask = () => {

    const addTitle = useRecoilValue(addTitleState);


    return <div className="taskField">
        <div>{addTitle.length}個のタスクがあります</div>
        <ul>
            {addTitle.map((task) => (
                <li key={task.id}>{task.title}</li>))}
        </ul>
    </div>
};