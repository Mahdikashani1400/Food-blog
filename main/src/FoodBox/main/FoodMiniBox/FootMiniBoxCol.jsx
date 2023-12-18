import "./FoodMiniBox.css";
import "../FoodIntro/FoodIntro.css";
import Box from "../../Box/Box";
function FoodMiniBoxCol() {
  const boxInfo = [
    {
      title: "رژیم غذایی سالم برای داشتن یک بدن",
      img: "blog-1",
      date: "۱۴۰۱-۰۶-۲۷",
    },
    {
      title: "طرز تهیه پاستا خوشمزه و ساده ایتالیایی",
      img: "blog-2",
      date: "۱۴۰۱-۰۶-۲۷",
    },
    {
      title: "راهنمای کامل داشتن تغذیه سالم در زندگی",
      img: "blog-3",
      date: "۱۴۰۱-۰۶-۲۷",
    },
    {
      title: "راهنمای کامل داشتن تغذیه سالم در زندگی",
      img: "blog-3",
      date: "۱۴۰۱-۰۶-۲۷",
    },
  ];
  return (
    <div className="food__mini__box">
      <div className="food__mini__box-col">
        <div className="food__intro">
          {boxInfo.map((info, index) => (
            <Box key={index} {...info}></Box>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FoodMiniBoxCol;
