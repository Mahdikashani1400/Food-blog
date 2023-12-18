import "./categories.css";
import CatBox from "../Categories/CatBox";
export default function Categories() {
  const catInfos = [
    {
      num: 1,
      title: "مد",
      img: "cat-1",
    },
    {
      num: 2,

      title: "سلامتی",
      img: "cat-2",
    },
    {
      num: 3,

      title: "زندگی",
      img: "cat-3",
    },
  ];
  return (
    <div className="">
      <div className="category__container">
        <div className="content">
          {catInfos.map((cat, index) => {
            return <CatBox key={index} {...cat}></CatBox>;
          })}
          {catInfos.map((cat, index) => {
            return <CatBox key={index + 3} {...cat}></CatBox>;
          })}
        </div>
      </div>
    </div>
  );
}
