// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li>
      <div>
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description} </p>
    </li>
  )
}

export default BlogItem
