import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import MyCheckoutForm from '../MyCheckoutForm/MyCheckoutForm';

const stripePromise = loadStripe('pk_test_51IeIJfCZX23jEbRUts8fEpD3EVRmvtsH1Hww1lSkkqejyl6fZOAluFDSx7wEMVTR8SALeMsCF9KpS4HuQC56JcX900Qzzp7XAJ');

const ProcessPayment = ({handelPayment}) => {
    return (
        <Elements stripe={stripePromise}>
             <MyCheckoutForm handelPayment={handelPayment}/>
        </Elements>
    );
};

export default ProcessPayment;