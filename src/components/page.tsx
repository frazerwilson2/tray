import React from 'react';
import { useDispatch } from 'react-redux'
import {setActiveTab} from '../constants';
import { PageProps } from '../types';

const Page = ({children, nextStep, lastPage}: PageProps) => {
    
    const dispatch = useDispatch();
    const [valid, setValid] = React.useState(new Set());
    const [submitted, setSubmitted] = React.useState(false);

    // give each input a field to set page invalid, which can be toggled
    const validationToggle = (key:number) => {
        return (toggle: boolean) => {
            const validationCopy = valid;
            if(toggle){
                validationCopy.delete(key);
            }
            else {
                validationCopy.add(key);
            }
            setValid(validationCopy);
        }
    }

    const progressToNextPage = () => {
        setSubmitted(true);
        if(valid.size) { return }
        dispatch({ type: setActiveTab, value: nextStep })
    }

    return (<div className="page">
        <div className="page-elements">
            {React.Children.map(children, (child, i) => (
                React.cloneElement(child, {setValid: validationToggle(i), submitted: submitted})
            ))}
        </div>
        {!lastPage && <button className="submit" onClick={progressToNextPage}>Submit</button>}
    </div>)
}

export default Page;