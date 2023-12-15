import SingleIcon from "../Icons/SingleIcon";

SingleIcon;
export default function Navbar() {
  return (
    <div>
      <nav className="nav">
        <div className="container">
          <div className="content">
            <div className="logo__header">
              <img src="../../public/logo.neoton.png" alt="" />
            </div>
            <ul className="">
              <a href="#">خانه</a>
              <a href="#">صفحات</a>
              <a href="#">دسته بندی</a>
              <a href="#">سفر</a>
              <a href="#">اخبار</a>
              <a href="#">وبلاگ</a>
              <a href="#">فروشگاه</a>
            </ul>

            <div className="nav__icons">
              <SingleIcon name="moon"></SingleIcon>
              <SingleIcon name="magnifying-glass"></SingleIcon>
              <SingleIcon name="shopping-bag"></SingleIcon>
            </div>
            <a href="#" className="login__btn">
              <span>ورود</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
