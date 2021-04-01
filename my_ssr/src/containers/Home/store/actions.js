import { CHANGE_LIST } from "./constants";

const changeList = list => ({
  type: CHANGE_LIST,
  list
});

export const getHomeList = (server) => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/news.json')
      .then((res) => {
        const list = res.data.data
        dispatch(changeList(list))
      });
  };
};


export const onclick = (id) => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/mbo/news', {id}).then(function (result) {
      dispatch({
          type: "ORDER_LOG",
          payload: result.data
      });
  })}
}