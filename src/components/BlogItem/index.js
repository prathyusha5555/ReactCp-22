import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="blog-item">
      <div className="post-container">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <p className="published-date">{publishedDate}</p>
    </li>
  )
}

export default BlogItem
