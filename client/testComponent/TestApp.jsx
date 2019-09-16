/**
 * тестовый компонент
 * @author VAK
 * @module TestApp
 * @since 0.0.1
 */
import './TestApp.scss';
import React from 'react';
import koticImg from '~/assets/images/testType1/test.jpg';
import koticComponentImg from './test_component.jpg';

/**
 * @function getRandom генерирует рандомно 0 или 1
 * @return {number} рандом 0 или 1
 */
function getRandom() {
    return getRound(Math.random());
}

function TestApp() {
    return (
        <>
            <p className="test">Test page!!!</p>
            <img src={koticImg}></img>
            <img src={koticComponentImg}></img>
            <p className="test">Random number: {getRandom()}</p>
        </>
    );
}

export default TestApp;
