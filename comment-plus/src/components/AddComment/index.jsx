import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../../redux/actions'
import './index.css'

class AddComment extends React.Component {
  constructor(props) {
    super(props)
    this.name = React.createRef()
    this.content = React.createRef()
  }

  clearInfo = () => {
    this.name.current.value = null
    this.content.current.value = null
  }

  whetherToDisplayPrompt = (value, nextElementSibling) => {
    if (value) {
      nextElementSibling.style.display = 'none'
    } else {
      nextElementSibling.style.display = 'inline'
      this.demo = true
    }
  }

  nameChange = () => {
    const { value, nextElementSibling } = this.name.current
    this.whetherToDisplayPrompt(value, nextElementSibling)
  }

  contentChange = () => {
    const { value, nextElementSibling } = this.content.current
    this.whetherToDisplayPrompt(value, nextElementSibling)
  }

  handleAdd = () => {
    const name = this.name.current.value
    const content = this.content.current.value
    if (name && content) {
      this.props.add({ name, content })
      this.clearInfo()
    } else {
      this.contentChange()
      this.nameChange()
    }
  }

  render() {
    return (
      <Fragment>
        <h2>发表评论</h2>
        <div className="info">
          <label>
            昵称：<input type="text" onFocus={this.nameChange} onChange={this.nameChange} ref={this.name} />
            <span>请输入昵称！</span>
          </label>
          <label>
            内容：<textarea onFocus={this.contentChange} onChange={this.contentChange} ref={this.content}></textarea>
            <span>请输入评论内容！</span>
          </label>
          <button onClick={this.clearInfo}>清空</button>
          <button onClick={this.handleAdd}>发表</button>
        </div>
      </Fragment>
    )
  }
}

// 1. mapStateToProps 把store数据映射到组件属性
// function mapStateToProps(state) { return {} }
// 2. mapDispatchToProps 把store的dispatch派发映射到组件
// function mapDispatchToProps(dispatch) {
//   return {
//     add: (value) => dispatch(addAction(value))
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(AddComment)
export default connect(null, { add: addComment })(AddComment)