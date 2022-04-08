// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, isActive, setImg} = props
  const {thumbnailUrl, thumbnailAltText, id} = details
  const ThumbnailClass = isActive ? `thumbnail active` : `thumbnail`

  const OnclickSetImage = () => {
    setImg(id)
  }

  return (
    <li className="list-items">
      <button type="button" onClick={OnclickSetImage} className="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={ThumbnailClass}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
