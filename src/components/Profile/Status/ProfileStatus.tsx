import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../../Redux/redux-store";
import {profilePageType} from "../../../Redux/reducer-profile";


type propsType = {
    userID? : number | null
    updateProfileStatus:(status:string)=>void
}

const ProfileStatus = (props:propsType) => {

    const [value, setValue] = useState(false)
    const profilePage = useSelector<rootReducerType, profilePageType>(state =>state.profilePage )
    const status= profilePage.status
    const [statusValue, setStatusValue] = useState(status)

    useEffect(()=>{
        setStatusValue(status)
    },[status])

    const onclickHandler=()=> {
        setValue(true)
    }

    const onblurHandler =(e:React.FocusEvent<HTMLInputElement>)=> {
        setValue(false)
        props.updateProfileStatus(e.currentTarget.defaultValue)
    }

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setStatusValue(e.currentTarget.value)
    }

    return (
        <div>
            {!value
                ?<div>Status: <span onClick={onclickHandler}>{status?status:''}</span></div>
                :<div><input autoFocus={true} onBlur={onblurHandler} value={statusValue} onChange={onChangeCallback}/></div>}
            
        </div>
    );
};

export default ProfileStatus;