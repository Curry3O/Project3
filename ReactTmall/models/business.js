import { queryBusiness } from '@/services/business';
const BusinessModel = {
  namespace: 'business',
  state: {
    businessData: [],
    total: 0
  },
  effects: {
    *fetchLoadBusiness(_, { call, put }) {
      const response = yield call(queryBusiness, _.payload);
      yield put({
        type: 'changeBusinessData',
        payload: response
      });
    }
  },
  reducers: {
    changeBusinessData(state, action) {
      return {
        ...state,
        total: action.payload.data.total,
        businessData: action.payload.data.list
      };
    }
  }
};
export default BusinessModel;

// uat1
