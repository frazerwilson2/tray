import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {RootState} from '../store'
import {validateLoop} from '../validationService';
import {InputTypes} from '../types';

const Input = ({value, setValid, changeAction, submitted, validation = [], validationLabel}:InputTypes) => {
    const [dirty, setDirty] = React.useState(false);
    React.useEffect(()=>{
        validation.length && validateInput('');
    }, []);
    const [validationMsg, showValidationMsg] = React.useState(false);
    const dispatch = useDispatch();
    const validateInput = (value:string) => {
        if (validation) {
            const valid = validateLoop(validation)(value)
            setValid(valid);
            showValidationMsg(!valid);
        }
        else {
            setValid(true);
        }
    }
    const storeValue = useSelector((state:RootState) => state[value]) as string;
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setDirty(true);
        dispatch({type:changeAction, value:e.target.value})
        validateInput(e.target.value)
    }
    const invalid = validationMsg && (submitted || dirty );
    return (
        <div className={`input-row ${invalid ? 'invalid':''}`}>
            <label htmlFor={value}>{value}{validation.length > 0 && <span className="required">*</span>}</label>
            <input 
                type="text"
                id={value}
                value={storeValue} 
                onChange={onChange}
            />
            {invalid && <span className="validation-msg">{validationLabel}</span>}
        </div>
    )
}

export default Input;