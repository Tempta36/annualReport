import Vue from 'vue';
import axios from 'axios';
// let token = window.token || '';

axios.defaults.method = 'post';
axios.defaults.withCredentials = true;

// axios.interceptors.request.use(function(request) {
//     token = token || window.token;
//     if (token) {
//         request.headers.token = token;
//     }

//     return request;
// });

axios.interceptors.response.use(
    function (response) {
        return response.data;
    },
    function (error) {
        console.log(error);
        return Promise.reject(error);
    }
);

const $api = Vue.api = Vue.prototype.$api = function (requestObj, urlData) {
    if (!requestObj) {
        console.log('请求资源读取错误：', requestObj);
    }
    if (!requestObj.method) {
        requestObj.method = axios.defaults.method;
    }
    var data = null;
    if (requestObj.method.toLowerCase() === 'post') {
        data = requestObj.data;
    } else {
        data = {
            params: requestObj.data
        };
    }

    var context = '';
    // if (process.env.NODE_ENV == 'production') {
    //     context = window.location.origin + ':80';
    // }

    var apiUrl = context + requestObj.url;
    if (urlData) {
        for (var k in urlData) {
            apiUrl += (apiUrl.indexOf('?') < 0 ? '?' : '&') + k + '=' + urlData[k];
        }
    }

    return axios[requestObj.method](apiUrl, data)
};

export default $api;