import * as types from './types'
import axios from 'axios'

export const fetchSongs = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: types.SONG_FETCH_REQUEST,
    })

    const { data } = await axios.get('https://swapi.dev/api/planets/')
    // console.log(data)
    dispatch({
      type: types.SONG_FETCH_SUCCESS,
      payload: data.results,
    })
  } catch (err) {
    dispatch({
      type: types.SONG_FETCH_FAIL,
      payload: 'Some Error occured',
    })
  }
}
