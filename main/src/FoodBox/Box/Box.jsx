import "./Box.css";
import DateBox from "../details/DataBox/DateBox";
import TitleBox from "../details/TitleBox/TitleBox";
export default function Box({ img, title, date, text = "" }) {
  return (
    <div className="">
      <div className="box__container">
        <div className="content">
          <div className="box__img">
            <img src={`/public/${img}.jpg `} alt="" />
          </div>
          <div className="box__text">
            <a href="#" className="mini__box">
              غذا
            </a>
            <TitleBox title={title}></TitleBox>
            <DateBox date={date}></DateBox>
            {text ? <p className="box__desc">{text}</p> : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
