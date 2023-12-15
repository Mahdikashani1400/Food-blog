import Box from "../../Box/Box";
import "./FoodIntro.css";

function FoodIntro() {
  const boxInfo = [
    {
      title: "غذاهای ساده و سریع؛ طرز تهیه ۱۸ غذای",
      img: "blog-1",
      date: "۱۴۰۱-۰۶-۲۷",
    },
    {
      title: "راهنمای کامل داشتن تغذیه سالم در زندگی و مزایای",
      img: "blog-3",
      date: "۱۴۰۱-۰۶-۲۷",
    },
  ];
  return (
    <div className="food__intro">
      <Box {...boxInfo[0]}></Box>
      <Box {...boxInfo[1]}></Box>
    </div>
  );
}

export default FoodIntro;
