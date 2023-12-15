import SingleIcon from "../../../Icons/SingleIcon"
import "./DateBox.css"

export default function DateBox(props) {
  const{date} = props
  return (
    <p className="blog__date">

<SingleIcon name="calendar">
    </SingleIcon>        
    <span>{date}</span>
    </p>
  )
}
