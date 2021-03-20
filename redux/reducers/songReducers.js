import {
  SONG_FETCH_REQUEST,
  SONG_FETCH_SUCCESS,
  SONG_FETCH_FAIL,
} from '../actions/types'

export const songFetchReducer = (state = { posts: [] }, action) => {
  const { type, payload } = action
  switch (type) {
    case SONG_FETCH_REQUEST:
      return {
        loading: true,
      }

    case SONG_FETCH_SUCCESS:
      return {
        loading: false,
        posts: payload,
      }

    case SONG_FETCH_FAIL:
      return {
        loading: false,
        error: payload,
      }

    default:
      return state
  }
}

export const getAllSongs = (state = {}, action) => {
  const { type, payload } = action
  switch (type) {
    case SONG_FETCH_REQUEST:
      return {}

    case SONG_FETCH_SUCCESS:
      return {}

    case SONG_FETCH_FAIL:
      return {}

    default:
      return state
  }
}
