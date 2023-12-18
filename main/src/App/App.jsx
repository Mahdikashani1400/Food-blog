import reactLogo from "../assets/react.svg";

import Icons from "../Icons/Icons";
import Header from "../Header/Header";

// import Footer from "../Footer/Footer"
import "./reset.css";
import "./App.css";
import TitleSection from "../TitleSection/TitleSection";
import FoodBlog from "../FoodBox/main/FoodBlog/FoodBlog";
import FoodIntro from "../FoodBox/main/FoodIntro/FoodIntro";
import FoodMiniBox from "../FoodBox/main/FoodMiniBox/FoodMiniBox";
import FoodMiniBoxCol from "../FoodBox/main/FoodMiniBox/FootMiniBoxCol";
import FoodPost from "../FoodBox/main/FoodIntro/FoodPost";
import FoodLearn from "../FoodBox/main/FoodBlog/FoodLearn";
import IconBox from "../Icons/IconBox";
import MiniBoxPost from "../FoodBox/main/FoodMiniBox/MiniBoxPost";
import InfoBox from "../FoodBox/main/FoodIntro/InfoBox";
import Categories from "../categories/categories";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";
function App() {
  const iconBoxInfo = [
    {
      color: "#0263d0",
      name: "facebook",
      title: "دنبال کنندگان",
      count: "334",
    },
    { color: "blue", name: "twitter", title: "طرفداران", count: "345" },

    { color: "#ff3385", name: "instagram", title: "پسندها", count: "370" },

    {
      color: "#87d4ff",
      name: "arrow-up-on-square",
      title: "نظرات",
      count: "520",
    },
    {
      color: "#0e76a8",
      name: "linkedin",
      title: "دنبال کنندگان",
      count: "589",
    },
    { color: "#ef242b", name: "youtube", title: "عضویت ها", count: "610" },
  ];
  return (
    <>
      <div className="app__container">
        <Icons></Icons>
        <Header></Header>
        <main>
          <section className="food__blogs">
            <div className="container">
              <div className="">
                <FoodBlog></FoodBlog>
              </div>
            </div>
          </section>
          <section className="last__seen">
            <div className="container">
              <div className="content">
                <TitleSection title="آخرین بازدید ها"></TitleSection>
                <div className="side">
                  <div className="right">
                    <div className="right__content">
                      <FoodIntro></FoodIntro>
                      <FoodMiniBox></FoodMiniBox>
                    </div>
                  </div>
                  <div className="left">
                    <div className="left__video">
                      <img src="../../public/blog-1.jpg" alt="" />
                    </div>
                    <FoodMiniBoxCol></FoodMiniBoxCol>
                  </div>
                </div>
                <div className="poster">
                  <img src="../../public/poster.png" alt="" />
                </div>
              </div>
            </div>
          </section>
          <section className="special__post">
            <div className="container">
              <div className="content">
                <TitleSection title="پست های ویژه"></TitleSection>
                <div className="side">
                  <div className="right">
                    <div className="right__content">
                      <FoodPost></FoodPost>
                      <FoodLearn></FoodLearn>
                    </div>
                  </div>
                  <div className="left">
                    <div className="left__content">
                      <div className="">
                        <TitleSection title="در ارتباط باش"></TitleSection>
                        <div className="socials__post">
                          {iconBoxInfo.map((icon, index) => (
                            <IconBox key={index} {...icon}></IconBox>
                          ))}
                        </div>
                      </div>
                      <div className="">
                        <TitleSection title="بیشتر بخوانید"></TitleSection>

                        <div className="mini__boxes--post">
                          <MiniBoxPost></MiniBoxPost>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="food__info">
            <div className="container">
              <div className="content">
                <div className="side">
                  <div className="right">
                    <div className="right__content">
                      <TitleSection title="پست های ویژه"></TitleSection>
                      <InfoBox></InfoBox>
                    </div>
                    <div className="btn__container">
                      <a href="#" className="btn">
                        مشاهده مطالب
                      </a>
                    </div>
                  </div>
                  <div className="left">
                    <div className="left__content">
                      <div className="">
                        <TitleSection title="دسته بندی ها"></TitleSection>
                        <Categories></Categories>
                      </div>
                      <div className="food__box">
                        <TitleSection title="بیشتر بخوانید"></TitleSection>
                        <FoodMiniBoxCol></FoodMiniBoxCol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="gallery">
            <div className="content">
              <Gallery></Gallery>
            </div>
          </section>
        </main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
