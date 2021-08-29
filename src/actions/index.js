import cocktailServer from '../apis/cocktailServer';

export const fetchDrinks = () => async (dispatch) => {
  const response = await cocktailServer.get('');
  //console.log(response.data);
  dispatch({
    type: 'FETCH_DRINKS',
    payload: response.data,
  });
};
