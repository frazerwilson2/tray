import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from '../store'
import {ChecboxInputTypes} from '../types';

const Checkbox = ({value, changeAction, label}:ChecboxInputTypes) => {
    const dispatch = useDispatch();
    const storeValue = useSelector((state:RootState) => state[value]) as boolean;
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({type:changeAction, value:e.target.checked})
    }
    return (
        <div className="input-row">
            <input 
                className="checkbox"
                type="checkbox"
                id={value}
                checked={storeValue} 
                onChange={onChange}
            />
            <label htmlFor={value}>{label}</label>
        </div>
    )
}

export default Checkbox;