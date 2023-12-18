export default function FooterMenu(props) {
  const items = Object.values(props);
  return (
    <div className="">
      <div className="footer__menu">
        <h5 className="section__title">{items[0]}</h5>
        <ul>
          {items.map((item, index) => {
            if (index !== 0) {
              return (
                <li key={index}>
                  <a href={item.href}>{item.title}</a>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
