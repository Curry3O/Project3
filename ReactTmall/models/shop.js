import {queryShop} from '@/services/shop';
const ShopModel = {
  namespace: 'shop',
  state: {
    shopData:[],
    total:0,
  },
  effects: {
    *fetchLoadShop(_, { call, put }) {
      const response = yield call(queryShop, _.payload);
      yield put({
        type: 'changeShopData',
        payload: response,
      });
    }
  },
  reducers: {
    changeShopData(state, action) {
      return { 
      	...state,
      	total:action.payload.data.total,
      	shopData: action.payload.data.list
      };
    },
  },
};
export default ShopModel;
