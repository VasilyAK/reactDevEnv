/**
 * тестовый компонент
 * @author VAK
 * @module TestApp
 * @since 0.0.1
 */
import './TestApp.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { testAction } from './actions';

import koticImg from '~/assets/images/testType1/test.jpg';
import koticComponentImg from './test_component.jpg';

/**
 * @memberof TestApp
 * @description тестовый контейнер
 */
class TestApp extends Component {
    constructor(props) {
        super(props);
        this.getRandom = this.getRandom.bind(this);
        this.pressButton = this.pressButton.bind(this);
    }
    /**
     * @description генерирует рандомно 0 или 1
     * @return {number} рандом 0 или 1
     */
    getRandom() {
        return Math.round(Math.random());
    }

    pressButton() {
        this.props.dispatch(testAction(!this.props.testData));
    }

    render() {
        return (
            <>
                <p className="test">Test page!!!</p>
                <img src={koticImg}></img>
                <img src={koticComponentImg}></img>
                <p className="test">Random number: {this.getRandom()}</p>
                <button onClick={this.pressButton}>Test action: {this.props.testData.toString()}</button>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        testData: state.TestApp.testData,
    };
}

export default connect(mapStateToProps)(TestApp);
