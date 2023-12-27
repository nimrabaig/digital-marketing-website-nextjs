import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";
import { useRouter } from "next/router";

const NavMenu = () => {
  const router = useRouter();
  return (
    <>
      <ul> 
        {menu_data.map((menu_item, i) => (
          <li key={i} className={`${menu_item?.has_dropdown && "has-dropdown"}`}>
            <div   className="menuItem" onClick={() => {
               if (menu_item.link) router.push(menu_item?.link)
            }} > 
              {/* <span></span> */}
              {menu_item.title}
            </div>
            {menu_item.has_dropdown && (
              <ul className="submenu"> 
                {menu_item.sub_menus.map((sub_menu, i) => (
                  <li key={i}>  
                    <Link href={sub_menu.link}><span>{sub_menu.title}</span></Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
