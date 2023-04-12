import React, { useState } from "react";
import "./style.scss";

const filterData = [
  {
    name: "All",
    id: "all",
  },
  {
    name: "Products",
    id: "product",
  },
  {
    name: "Web Pages",
    id: "web-page",
  },
  {
    name: "Web Apps",
    id: "web-app",
  },
  {
    name: "Mobile-apps",
    id: "mobile-app",
  },
];
export default function Filters({ filterProjects }) {
  const [active, setActive] = useState("");

  const clickHandler = (id) => {
    setActive(id);
    filterProjects(id);
  };
  return (
    <ul className="filter-menu-items">
      {filterData.map((item) => {
        return (
          <li
            key={item.id}
            onClick={() => clickHandler(item.id)}
            className={`filter-menu-item ${active === item.id ? "active" : ""}`}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}
