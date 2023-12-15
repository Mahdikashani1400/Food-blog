import Box from "../../Box/Box";
import "./FoodIntro.css";

export default function InfoBox() {
  const boxInfo = [
    {
      title: "غذاهای ساده و سریع؛ طرز تهیه ۱۸ غذای",
      img: "blog-1",
      date: "۱۴۰۱-۰۶-۲۷",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از...",
    },
    {
      title: "راهنمای کامل داشتن تغذیه سالم در زندگی و مزایای",
      img: "blog-3",
      date: "۱۴۰۱-۰۶-۲۷",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از...",
    },
    {
      title: "راهنمای کامل داشتن تغذیه سالم در زندگی و مزایای",
      img: "blog-2",
      date: "۱۴۰۱-۰۶-۲۷",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از...",
    },
    {
      title: "راهنمای کامل داشتن تغذیه سالم در زندگی و مزایای",
      img: "blog-1",
      date: "۱۴۰۱-۰۶-۲۷",
      text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از...",
    },
  ];
  return (
    <div className="food__info-boxes">
      <div className="food__intro">
        <Box {...boxInfo[0]}>deedwew</Box>
        <Box {...boxInfo[1]}></Box>
        <Box {...boxInfo[2]}></Box>
        <Box {...boxInfo[3]}></Box>
      </div>
    </div>
  );
}
