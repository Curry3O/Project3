import { queryLogs } from '@/services/logs';
const LogsModel = {
  namespace: 'logs',
  state: {
    logsData: [],
    total: 0
  },
  effects: {
    *fetchLoadLogs(_, { call, put }) {
      const response = yield call(queryLogs, _.payload);
      yield put({
        type: 'changeLogsData',
        payload: response
      });
    }
  },
  reducers: {
    changeLogsData(state, action) {
      return {
        ...state,
        total: action.payload.data.total,
        logsData: action.payload.data.list
      };
    }
  }
};
export default LogsModel;

// uat3
