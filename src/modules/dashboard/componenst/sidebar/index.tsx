import MenuLink from "./component/menulink";
import "./style.css";
import { MdOutlineSpaceDashboard,MdEditDocument,MdMessage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";



const menuItems = [
    {
      title: "",
      list: [
        {
          title: "داشبورد",
          path: "/dashboard",
          icon: <MdOutlineSpaceDashboard/>,
        },
        {
          title: "آموزش ربات",
          path: "/dashboard/tarin",
          icon: <MdEditDocument />,
        },
        {
          title: "پیام های من",
          path: "/dashboard/mymessage",
          icon: <MdMessage />,
        },
        {
          title: "پروفایل من",
          path: "/dashboard/profile",
          icon: <CgProfile />,
        },
      ],
    }
  ];


const Sidebar=()=>{
    return(
        <div className="container">
               <ul className="list">
                   {menuItems.map((cat) => (
                     <li key={cat.title}>
                        <span className="cat">{cat.title}</span>
                            {cat.list.map((item) => (
                             <MenuLink item={item} key={item.title} />
            ))}
                        </li>
        ))}
                </ul>  
        </div>
    )
};

export default Sidebar;