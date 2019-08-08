import Vuex from 'vuex'
import Vue from 'vue'


Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''

        // user: {},
        // token: null,
        // title: ''
    },
    mutations: {
        changeLogin(state, account) {
            state.Authorization = account.Authorization;
            localStorage.setItem('Authorization', account.Authorization);
        }

        // [types.LOGIN]: (state, data) => {
        //     localStorage.token = data;
        //     state.token = data;
        // },
        // [types.LOGOUT]: (state) => {
        //     localStorage.removeItem('token');
        //     state.token = null
        // },
        // [types.TITLE]: (state, data) => {
        //     state.title = data;
        // }
    }
})