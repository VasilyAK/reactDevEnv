import { TEST_TYPE } from './actionTypes';

export function testAction(testData) {
    return {
        type: TEST_TYPE,
        payload: testData,
    };
}
