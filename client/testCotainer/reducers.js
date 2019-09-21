import { TEST_TYPE } from './actionTypes';

const initState = {
    testData: false,
};

const reducersTestApp = (state = initState, { type, payload }) => {
    switch (type) {
        case TEST_TYPE:
            return {
                ...state,
                testData: payload,
            };
        default:
            return state;
    }
};

export default reducersTestApp;
