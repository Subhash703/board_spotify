export const fetchSongs = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SONG_FETCH_REQUEST,
    })

    const { data } = await axios.get('https://swapi.dev/api/planets/')
    console.log(data)
    dispatch({
      type: SONG_FETCH_SUCCESS,
      payload: data.results,
    })
  } catch (err) {
    dispatch({
      type: SONG_FETCH_FAIL,
      payload: 'Some Error occured',
    })
  }
}
