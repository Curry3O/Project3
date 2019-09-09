import { queryNews,deleteNews,addNews,changeStatus} from '@/services/newsCenter';
const NewsModel = {
  namespace: 'newsCenter',
  state: {
    newsData: [],
    total:0,
  },
  effects: {
    *fetchLoadNews(_, { call, put }) {
      const response = yield call(queryNews,_.payload);
      yield put({
        type: 'changeNewsData',
        payload: response,
      });
    },
    *fetchDeleteNews(_, { call, put }) {
      const response = yield call(deleteNews,_.payload.forms);
      yield put({
        type: 'fetchLoadNews',
        payload: _.payload.page,
      });
    },
    *fetchAddNews(_, { call, put }) {
      const response = yield call(addNews,_.payload.forms);
      yield put({
        type: 'fetchLoadNews',
        payload: _.payload.page,
      });
    },
    *fetchChangeStatus(_, { call, put }) {
      const response = yield call(changeStatus, _.payload.forms);
      yield put({
        type: 'fetchLoadNews',
        payload: _.payload.page,
      });
    }
  },
  reducers: {
    changeNewsData(state, action) {
      return { 
      	...state,
      	total:action.payload.data.total,
      	newsData:action.payload.data.list
      };
    },
  },
};
export default NewsModel;
