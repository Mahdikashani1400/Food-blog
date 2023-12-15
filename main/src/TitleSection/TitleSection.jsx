import "./TitleSection.css";
function TitleSection(props) {
  return (
    <div className="TitleSection">
      <h2>{props.title}</h2>
    </div>
  );
}

export default TitleSection;
