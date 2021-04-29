import React from 'react';
import { useSelector } from 'react-redux';
import Page from '../components/page';
import {RootState} from '../store';

const DonePage = (props:any) => {
    useSelector((state:RootState) => {
        const { activeTab, ...rest} = state;
        console.log(rest);
    })
    return (
    <Page {...props}>
        <div className="center">
            <h1>Success!</h1>
            <img src="https://media.giphy.com/media/xNBcChLQt7s9a/giphy.gif" alt="success"/>
            <p>
                Please verify your email address, you should have received an email from us already!
            </p>
        </div>
    </Page>
    );
}

export default DonePage;