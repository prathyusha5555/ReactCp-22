import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="blogs-list">
      {blogsList.map(each => (
        <BlogItem key={each.id} blogDetails={each} />
      ))}
    </ul>
  )
}

export default BlogList
