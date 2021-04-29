import React from 'react';
import Page from '../components/page';
import Input from '../components/input';
import {setName, name, role, setRole, email, setEmail, password, setPassword} from '../constants'
import {required, validEmail, minLen, hasNumbers, hasLowerCase, hasUpperCase} from '../validationService';

const UserPage = (props:any) => (
    <Page {...props}>

        <Input value={name} changeAction={setName} validation={[required]}
            validationLabel="this field is required"
        />

        <Input value={role} changeAction={setRole} />

        <Input value={email} changeAction={setEmail} validation={[validEmail]}
            validationLabel="email is invalid"
        />

        <Input value={password} changeAction={setPassword} validation={[minLen, hasNumbers, hasLowerCase, hasUpperCase]}
            validationLabel="password must be more than 9 characters, contain at least 1 number and contain at least 1 uppercase and lowercase letter"
        />

    </Page>
)

export default UserPage;