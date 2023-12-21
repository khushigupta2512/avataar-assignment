import React, { useState } from "react";
import styles from "./NavList.module.scss";
import { useViewport } from "../../../context/ResizeContext";
import { TopNavMenuItems } from "../../../utils/topnav";

const NavList = () => {
  const { width } = useViewport();
  const avgItemWidth = 150;

  const noVisibleItems = Math.floor((width - 500) / avgItemWidth);
  console.log(noVisibleItems);

  return (
    <div className={styles.list_body}>
      {TopNavMenuItems.map((item, index) => {
        if (item.id > noVisibleItems) {
          return;
        }
        return (
          <div className={styles.list_item} key={item.id}>
            <span>{item.label}</span>
          </div>
        );
      })}
      {noVisibleItems < TopNavMenuItems.length && (
        <MoreMenu
          items={TopNavMenuItems.slice(noVisibleItems, TopNavMenuItems.length)}
        />
      )}
    </div>
  );
};

export default NavList;

const MoreMenu = ({ items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.list_item}>
      <div
        onClick={() => setOpen((prev) => !prev)}
        style={{
          color: open ? "#16d2f7" : "white",
        }}
      >
        More &#x25BE;
      </div>
      <div
        className={`${styles.dropdown_body} ${
          open ? styles.active : styles.not_active
        }`}
      >
        {items.map((item) => (
          <div className={styles.dropdown_item} key={item.id}>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
