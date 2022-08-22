const contactFormModule = {
  state: {
    name: '',
    email: '',
    content: '',
    disabled: true
  },
  mutations: {
    updateName(state, data) {
      state.name = data;
    },
    updateEmail(state, data) {
      state.email = data;
    },
    updateContent(state, data) {
      state.content = data;
    },
    setDisabledState(state, data) {
      state.disabled = data;
    }
  },
  getters: {
    getName(state) {
      return state.name
    },
    getEmail(state) {
      return state.email
    },
    getContent(state) {
      return state.content
    },
    getDisabled(state) {
      return state.disabled
    }
  }

}

export default contactFormModule;