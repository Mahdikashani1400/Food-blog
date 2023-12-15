import "./TitleBox.css";
export default function TitleBox(props) {
  const { title } = props;
  return (
    <h6 className="title__box">
      <a href="#">{title}</a>
    </h6>
  );
}
