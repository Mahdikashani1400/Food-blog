import "./categories.css";

export default function CatBox({ num, title, img }) {
  return (
    <div className="">
      <div
        className="cat__box__container"
        style={{ backgroundImage: `url("cat/${img}.jpg")` }}
      >
        <div className="content">
          <h6 className="title">{title}</h6>
          <div className="number">{num}</div>
        </div>
      </div>
    </div>
  );
}
