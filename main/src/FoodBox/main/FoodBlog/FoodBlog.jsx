import Box from "../../Box/Box";
import "./FoodBlog.css";

export default function FoodBlog() {
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
    <div className="food__blogs__content">
      {boxInfo.map((info, index) => (
        <Box key={index} {...info}></Box>
      ))}
    </div>
  );
}
