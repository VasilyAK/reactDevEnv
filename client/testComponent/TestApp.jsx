import './TestApp.scss';
import React from 'react';
import koticImg from '~/assets/images/testType1/test.jpg';
import koticComponentImg from './test_component.jpg';

function TestApp() {
    return (
        <>
            <p className="test">Test page!!!</p>
            <img src={koticImg}></img>
            <img src={koticComponentImg}></img>
        </>
    );
}

export default TestApp;
