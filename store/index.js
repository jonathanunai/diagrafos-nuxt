export const strict = false

export const state = () => ({
  user: null,
  menuOpen: false,
  editItem: false,
  slide: 'inicio',
  config: {
    inicio: {
      left: 'Medio ambiente',
      right: 'Tecnología',
      top: '',
      bottom: 'Empresa',
    },
  },
})
export const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_EDIT_ITEM(state, item) {
    state.editItem = item
  },
  OPEN_MENU(state) {
    state.menuOpen = true
  },
  CLOSE_MENU(state) {
    state.menuOpen = false
  },
  TOGGLE_MENU(state) {
    state.menuOpen = !state.menuOpen
  },
  LOAD_CONFIG(state, destination) {
    state.slide = destination
  },
}

export const actions = {
  logout(state) {
    state.commit('SET_USER', null)
  },
  login(state, user) {
    state.commit('SET_USER', user)
  },
  toggleMenu(state) {
    state.commit('TOGGLE_MENU')
  },
  closeMenu(state) {
    state.commit('CLOSE_MENU')
  },
  loadConfig(state, destination) {
    state.commit('LOAD_CONFIG', destination)
  },
  setEditItem(state, item) {
    state.commit('SET_EDIT_ITEM', item)
  },
}
