import axios from 'axios';
const base_url = 'http://3.1.8.111:8080/';
const parseParams = (params) => {
    const keys = Object.keys(params);
    let options = '';

    keys.forEach((key) => {
        const isParamTypeObject = typeof params[key] === 'object';

        if (
            !isParamTypeObject &&
            typeof params[key] !== 'undefined' &&
            params[key] !== ''
        ) {
            options += `${key}=${params[key]}&`;
        }

        if (isParamTypeObject && params[key] != null && params[key].length >= 0) {
            params[key].forEach((element) => {
                options += `${key}=${element}&`;
            });
        }
    });

    return options ? options.slice(0, -1) : options;
};

export const apiCall = async ({
    endPoint,
    method,
    payload,
    headers,
    params,
    formData,
}) => {
    try {
        const result = await axios.request({
            method,
            url: base_url + endPoint,
            headers,
            data: payload,
            params,
            paramsSerializer: (params) => parseParams(params),
            formData,
        });

        if (
            result.headers.accesstoken !== undefined &&
            result.headers.refreshtoken !== undefined
        ) {
            localStorage.setItem('jwt', result.headers.accesstoken);
            localStorage.setItem('reft', result.headers.refreshtoken);
        }

        return {
            response: result,
            error: null,
        };
    } catch (e) {
        return {
            response: null,
            error: e,
        };
    }
};
