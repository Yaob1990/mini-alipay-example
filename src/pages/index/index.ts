import { IPageStore } from './store';
import { Page } from 'herbjs';

interface IPageState {}

interface IPageMethods {
  init(): void;
}

Page<IPageState, IPageMethods, IPageStore>({
  onLoad(options) {
    this.init();
  },
  onReady() {
    this.addData();
  },
  onShow() {},
  onHide() {},
  onUnload() {},
  init() {
    this.dispatch('beforeRender');
  },
  saveComponentLoadData(ref) {
    this.loadDataComponent = ref;
  },
  getListData(currentPage, pageSize) {
    return {
      list: [{ num: 1 }, { num: 2 }, { num: 3 }],
      totalNum: 3,
    };
  },
  addData() {
    this.loadDataComponent.getData();
  },
});
