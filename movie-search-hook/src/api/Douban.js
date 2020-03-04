import BaseApi from './BaseApi'
import { saveTagsAction, saveMoviesAction } from '../store/actions'

export const requestTags = async (dispatch) => {
  const tags = fetch(BaseApi.searchTags).then(res => res.json())
  dispatch(saveTagsAction(tags))
}

export const requestMovies = async (dispatch, tag) => {
  const url = BaseApi.searchSubjects(tag)
  const res = await fetch(url).then(res => res.json())
  dispatch(saveMoviesAction(res.subjects))
}