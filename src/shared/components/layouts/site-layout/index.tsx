import Header from "./coponents/header";
import localFont from "next/font/local"




const myFont = localFont({ src: '../../../../../fonts/IRANYekanBold.ttf' })
const SiteLayout = (props:any) => {
 
  return (

    <html lang="fa" dir="rtl">
            <body className={myFont.className}>
            <div style={props.style}>
      <Header {...props.headerProps} />
      {props?.header}
      {props.children}
      {props?.footer}
    </div>

            </body>


  

    </html>

  )
};
export default SiteLayout;
