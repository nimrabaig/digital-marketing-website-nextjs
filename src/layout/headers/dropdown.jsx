import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";
import { useRouter } from "next/router";
import NavMenu from "./nav-menu";

const Dropdown = ({ menu_data, depth }) => {
  const router = useRouter();
  depth = depth + 1;
  console.log("depth", depth);
  return (
    <ul className="submenu">
      {menu_data?.map((sub_menu, i) => (
        // <li key={i}>
        //   <Link href={sub_menu.link}>
        //     <span>{sub_menu.title}</span>
        //     {/* {sub_menu.children && (
        //                 <ul className="child-nav-menu">
        //                  { sub_menu.children.map((child_menu, i) => (
        //                   <li key={i}>
        //                     <Link href={child_menu.link}>
        //                       <span>{child_menu.title}</span>
        //                     </Link>
        //                   </li>
        //                   ))}
        //                 </ul>
        //               )} */}
        //   </Link>
        // </li>
        <NavMenu data={[sub_menu]} depth={depth} />
      ))}
    </ul>
  );
};

export default Dropdown;
