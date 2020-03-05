const proxyPrefix = '/api'  // 在 src/setupProxy.js 配置代理

const searchSubjects = params => {
  const baseUrl = proxyPrefix + '/j/search_subjects'
  const { tag, pageLimit, pageStart } = params
  let query = '?tag=' + tag
  if (typeof pageLimit != 'undefined') {
    query = query + '&page_limit=' + pageLimit
  }
  if (typeof pageStart != 'undefined') {
    query = query + '&page_start=' + pageStart
  }
  return baseUrl + query
}

const BaseApi = {
  searchTags: proxyPrefix + '/j/search_tags',
  searchSubjects: searchSubjects
}

export default BaseApi