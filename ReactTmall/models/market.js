import { queryMarket,changeStatus,addMarket} from '@/services/market';
const MarketModel = {
  namespace: 'market',
  state: {
    marketData:[],
    total:0,
  },
  effects: {
    *fetchLoadMarket(_, { call, put }) {
      const response = yield call(queryMarket, _.payload);
      yield put({
        type: 'changeMarketData',
        payload: response,
      });
    },
    *fetchChangeStatus(_, { call, put }) {
      const response = yield call(changeStatus,_.payload.forms);
      yield put({
        type: 'fetchLoadMarket',
        payload: _.payload.page,
      });
    },
    *fetchAddMarket(_, { call, put }) {
      const response = yield call(addMarket, _.payload.forms);
      yield put({
        type: 'fetchLoadMarket',
        payload: _.payload.page,
      });
    },
  },
  reducers: {
    changeMarketData(state, action) {
      return { 
      	...state,
      	total:action.payload.data.total,
      	marketData:action.payload.data.list
      };
    },
  },
};
export default MarketModel;
