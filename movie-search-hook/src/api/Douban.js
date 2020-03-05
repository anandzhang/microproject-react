import BaseApi from './BaseApi'
import { saveTagsAction, saveMoviesAction } from '../store/actions'

export const defaultPageLimit = 15

export const requestTags = async (dispatch) => {
  const res = await fetch(BaseApi.searchTags).then(res => res.json())
  dispatch(saveTagsAction(res.tags))
}

export const requestMovies = async (dispatch, params) => {
  params.pageLimit = defaultPageLimit
  const url = BaseApi.searchSubjects(params)
  const res = await fetch(url).then(res => res.json())
  dispatch(saveMoviesAction(res.subjects, params.tag))
}