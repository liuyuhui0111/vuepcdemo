/* eslint-disable */
import demo from './modules/demo/getters'
const getters = {
    token: state => state.token,
    // getDemoTitle: state => state.demo.title,
    ...demo
};

export default getters;
