const proxyPrefix = '/api'  // 在 src/setupProxy.js 配置代理
const BaseApi = {
  searchTags: proxyPrefix + '/j/search_tags',
  searchSubjects: (tag) => proxyPrefix + '/j/search_subjects?tag=' + tag
}
export default BaseApi