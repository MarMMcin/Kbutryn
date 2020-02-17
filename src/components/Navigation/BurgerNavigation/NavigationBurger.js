import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const list = [
  { name: "O firmie", path: "/ofirmie", exact: true },
  { name: "Wycena nieruchomości", path: "/wycena" },
  { name: "Geodezja", path: "/geodezja" },
  { name: "Pozostałe usługi", path: "/pozostale" },
  { name: "Artykuły", path: "/artykuly" },
  { name: "Kontakt", path: "/kontakt" }
];
const Navigation = () => {
  const menu = list.map(item => (
    <li className="li2" key={item.name}>
      <NavLink
        to={item.path}
        exact={item.exact ? item.exact : false}
        activeClassName="active"
        activeStyle={{
          color: "#ec7801"
        }}
      >
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav>
      <div>{menu}</div>
    </nav>
  );
};

export default withRouter(Navigation);
