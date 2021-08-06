export default {
    namespace: 'Rdata',
    state: {
        name: '小慧慧',
        age: '22'
    },
    reducers: {
      delete(state, { payload: id }) {
        return state.filter(item => item.id !== id);
      },
    },
  };