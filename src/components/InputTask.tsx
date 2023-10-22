import "./InputTask.css"
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {inputTitleState} from "../states/inputTitleState";
import React, {useCallback} from "react";
export const InputTask = () => {

    // const inputTitle = useRecoilValue(inputTitleState);
    // const setInputTitle = useSetRecoilState(inputTitleState);

    const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);

    const handleClick = () => {
        console.log("inputTitle");
    }

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value);
        console.log(inputTitle);
    }, [inputTitle]);

    return <div className="inputField">
        <input type="text" className="inputTitle" onChange={onChange}/>
        <button type="button" className="addButton" onClick={handleClick}>追加</button>
    </div>
};