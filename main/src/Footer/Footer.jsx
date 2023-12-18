import "./Footer.css";
import FooterMenu from "./FooterMenu";
export default function Footer() {
  const categories = [
    "دسته بندی",
    {
      title: "سیاست",
      href: "#",
    },
    {
      title: "تکنولوژی",
      href: "#",
    },
    {
      title: "سبک زندگی",
      href: "#",
    },
    {
      title: "سفر",
      href: "#",
    },
    {
      title: "مد و فشن",
      href: "#",
    },
    {
      title: "ورزش",
      href: "#",
    },
  ];
  const fastLink = [
    "لینک های سریع",
    {
      title: "مرورگر کتابخانه",
      href: "#",
    },
    {
      title: "اخبار تلویزیون",
      href: "#",
    },
    {
      title: "اخبار موزیک",
      href: "#",
    },
    {
      title: "اخبار و بلاگ",
      href: "#",
    },
    {
      title: "ویدیو",
      href: "#",
    },
    {
      title: "تبلیغات",
      href: "#",
    },
  ];
  return (
    <footer className="">
      <div className="footer__container">
        <div className="container">
          <div className="top">
            <div className="content">
              <div className="follow">
                <div className="">
                  <img src="/public/logo.neoton.png" alt="" />
                </div>
                <p>
                  ما دوره ها و برنامه های زیادی از کارشناسان اصلی بازار داریم.
                </p>
                <h5 className="section__title">ما را دنبال کنید</h5>
              </div>
              <FooterMenu {...categories}></FooterMenu>
              <FooterMenu {...fastLink}></FooterMenu>
              <div className="">
                <h5 className="section__title">خبرنامه</h5>
                <p>
                  در خبرنامه ما عضو شوید و به روز رسانی های جدید را دریافت کنید
                </p>
                <div className="">
                  <input type="text" placeholder="ایمیل شما" />
                </div>
                <a href="#" className="btn">
                  عضویت
                </a>
              </div>
            </div>
          </div>
          <div className="bottom">
            <p>حق کپی رایت محفوظ است @2023</p>
            <ul>
              <li>
                <a href="#">خانه </a>
              </li>
              <li>
                <a href="#">درباره ما</a>
              </li>
              <li>
                <a href="#">وبلاگ</a>
              </li>
              <li>
                <a href="#">تماس با ما</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
