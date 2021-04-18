import { Component } from 'herbjs';

interface IComponentData {}

interface IComponentProps {
  onGetData(currentPage: number, pageSize: number): void;

  pageSize: number;
}

interface IComponentMethods {}

interface IData {
  list: Array<any>;
  totalNum: number;
}

/**
 * Generics
 * @example
 *    Component<Data, Props, Methods, PageStore, AppStore>
 */
Component<IComponentData, IComponentProps, IComponentMethods>({
  data: {
    list: [],
    currentPage: 0, // 现在页面
    totalNum: 0, // 总条数
    totalPage: 0, // 总页数
    init: false,
    finished: false,
    loadingFlag: false,
  },
  props: {
    onGetData: () => {},
    pageSize: 20,
  },
  didMount() {},
  didUnmount() {},
  methods: {
    getData() {
      let { currentPage, finished, loadingFlag } = this.data;
      if (finished || loadingFlag) return;
      this.setData({
        loadingFlag: true,
      });
      return new Promise((resolve, reject) => {
        resolve(this.props.onGetData(++currentPage, this.props.pageSize));
      }).then((res: IData) => {
        console.log(res);
        const totalPage = Math.ceil(res.totalNum / this.props.pageSize);
        if (currentPage === 1) {
          this.setData({
            currentPage,
            list: res.list,
            init: true,
            totalPage,
            totalNum: res.totalNum,
            loadingFlag: false,
            finished:
              totalPage === 0 || (totalPage && currentPage === totalPage),
          });
        } else {
          this.setData({
            loadingFlag: false,
            currentPage,
            finished: totalPage && currentPage === totalPage,
            list: [...this.data.list, ...res.list],
          });
        }
      });
    },
  },
});
