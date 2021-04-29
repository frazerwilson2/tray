import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import App from './App';
import Input from './components/input';
import {required, validEmail, minLen, hasNumbers, hasLowerCase, hasUpperCase} from './validationService';
import store from './store';

describe('signup form', ()=>{
  test('renders correct tab', () => {
    const {getByText} = render(<Provider store={store}><App /></Provider>);
    expect(getByText('User')).toHaveClass('menu-active')
  });
  
  test('shows email validation', ()=>{
    const {getByText, getByLabelText} = render(<Provider store={store}><App /></Provider>);
    fireEvent.change(getByLabelText(/email/i), { target: { value: 'a' } })
    expect(getByText('email is invalid')).toBeInTheDocument();
  });

  test('progresses to next step', ()=>{
    const {getByText, getByLabelText} = render(<Provider store={store}><App /></Provider>);
    fireEvent.change(getByLabelText(/name/i), { target: { value: 'person' } })
    fireEvent.change(getByLabelText(/email/i), { target: { value: 'email@email.com' } })
    fireEvent.change(getByLabelText(/password/i), { target: { value: 'ValidP4ssword' } })
    fireEvent.click(getByText('Submit'));
    expect(getByText('Privacy')).toHaveClass('menu-active');
  })
});

describe('Input', ()=>{
  test('calls dispatch on change', ()=>{
    const validation = jest.fn();
    const {getByLabelText} = render(<Provider store={store}><Input value="name" changeAction="" setValid={validation} /></Provider>);
    fireEvent.change(getByLabelText(/name/i), { target: { value: 'a' } })
    expect(validation).toBeCalled();
  })
})

describe('validations service', ()=>{
  test('required', ()=>{
    expect(required('thing')).toBe(true);
    expect(required('')).toBe(false);
  });
  test('validEmail', ()=>{
    expect(validEmail('test@email.com')).toBe(true);
    expect(validEmail('badtestemail.com')).toBe(false);
  });
  test('minLen', ()=>{
    expect(minLen('1234567890')).toBe(true);
    expect(minLen('123')).toBe(false);
  });
  test('hasNumbers', ()=>{
    expect(hasNumbers('thing123')).toBe(true);
    expect(hasNumbers('thing')).toBe(false);
  });
  test('hasLowerCase', ()=>{
    expect(hasLowerCase('thing')).toBe(true);
    expect(hasLowerCase('THING')).toBe(false);
  });
  test('hasUpperCase', ()=>{
    expect(hasUpperCase('THING')).toBe(true);
    expect(hasUpperCase('thing')).toBe(false);
  });
})
