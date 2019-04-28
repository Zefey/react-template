import * as types from '../constants/ActionTypes';

import Config from '../utils/Config';
import Request from '../utils/Request';

export function userAction(reqData) {
    return dispatch => {
        //模拟异步
        return setTimeout(() => {
            let data = {
                status:1,
                info:'success',
                data:[]
            };
            dispatch(userInfo(data));
        }, 2000);
    }
};


function userInfo(data) {
    return {
        type: types.USER,
        ...data
    };
}
