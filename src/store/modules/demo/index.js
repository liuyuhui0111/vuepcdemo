/* eslint-disable */
// initial state
// shape: [{ id, quantity }]
const state = {
    title: 'demo标题',
};


// actions
const actions = {

};

// mutations
const mutations = {
    setTitle(state, title) {
        state.title = title;
    },
};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
};
