import "./FoodMiniBox.css";
import "../FoodIntro/FoodIntro.css";
import Box from "../../Box/Box";
function MiniBoxPost() {
  const boxInfo = [
    {
      title: "راهنمای کامل داشتن تغذیه سالم در زندگی و مزایای",
      img: "blog-1",
      date: "۱۴۰۱-۰۶-۲۷",
    },
    {
      title: "راهنمای کامل داشتن تغذیه سالم در زندگی و مزایای",
      img: "blog-2",
      date: "۱۴۰۱-۰۶-۲۷",
    },
    {
      title: "راهنمای کامل داشتن تغذیه سالم در زندگی و مزایای",
      img: "blog-3",
      date: "۱۴۰۱-۰۶-۲۷",
    },
  ];
  return (
    <div className="mini__box-post">
      <div className="food__mini__box">
        <div className="food__mini__box-col">
          <div className="food__intro">
            {boxInfo.map((info,index) => (
              <Box key={index} {...info}></Box>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiniBoxPost;
