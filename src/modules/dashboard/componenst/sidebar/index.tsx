import MenuLink from "./component/menulink";
import "./style.css";
import { MdOutlineSpaceDashboard,MdEditDocument,MdMessage,MdOutlineSettingsSuggest } from "react-icons/md";



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
          path: "/dashboard/train",
          icon: <MdEditDocument />,
        },
        {
          title: "پیام های من",
          path: "/dashboard/mymessage",
          icon: <MdMessage />,
        },
        {
          title: "تنظیمات",
          path: "/dashboard/setting",
          icon: <MdOutlineSettingsSuggest />,
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