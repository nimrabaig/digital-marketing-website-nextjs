import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Dropdown from "./dropdown";

const NavMenu = ({ data, depth = 0 }) => {
  const router = useRouter();

  console.log("depth0000", depth);
  return (
    <>
      <ul>
        {data.map((menu_item, i) => (
          <li
            key={i}
            className={`${
              menu_item?.has_dropdown && depth > 0
                ? "has-dropdown child-nav-menu"
                : depth > 0
                ? "child-nav-menu"
                : menu_item?.has_dropdown
                ? "has-dropdown"
                : ""
            }`}
          >
            <div
              className="menuItem"
              onClick={() => {
                if (menu_item.link) router.push(menu_item?.link);
              }}
            >
              {/* <span></span> */}
              {menu_item.title}
            </div>

            {menu_item.has_dropdown && (
              // <ul className="submenu">
              //   {menu_item.sub_menus.map((sub_menu, i) => (
              //     <li key={i}>
              //       <Link href={sub_menu.link}>
              //         <span>{sub_menu.title}</span>
              //         {/* {sub_menu.children && (
              //           <ul className="child-nav-menu">
              //            { sub_menu.children.map((child_menu, i) => (
              //             <li key={i}>
              //               <Link href={child_menu.link}>
              //                 <span>{child_menu.title}</span>
              //               </Link>
              //             </li>
              //             ))}
              //           </ul>
              //         )} */}
              //       </Link>
              //     </li>
              //   ))}
              // </ul>
              <Dropdown menu_data={menu_item.sub_menus} depth={depth} />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
