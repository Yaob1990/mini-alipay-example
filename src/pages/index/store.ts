import { Store } from 'herbjs';

interface IPageState {}

interface IPageGetters {}

interface IPageMutations {}

interface IPageActions {
  beforeRender(): Promise<any>;
}

export interface IPageStore {
  state: IPageState;
  getters: IPageGetters;
  mutations: IPageMutations;
  actions: IPageActions;
}

Store<IPageState, IPageGetters, IPageMutations, IPageActions>({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async beforeRender({ state, commit, dispatch }) {},
  },
});
