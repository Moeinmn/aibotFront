import Footer from "../../common/Footer";
import Header from "./coponents/header";
import localFont from "next/font/local"





const myFont = localFont({ src: '../../../../../fonts/IRANYekanBold.ttf' })

const irsans = localFont({
  src: [
    {
      path: '../../../../../fonts/iranyekanwebregular.woff2',
      weight: '400'
    },
    {
      path: '../../../../../fonts/IRANYekanBold.ttf',
      weight: '500'
    },
    {
      path: '../../../../../fonts/iranyekanwebextrabold.woff',
      weight: '600'
    }
  ],
  variable: '--font-poppins'
})

const SiteLayout = (props:any) => {
 
  return (

    <html lang="git statfa" dir="rtl">
    <body className={myFont.className}>
      
      <Header {...props.headerProps} />
      {props.children}
   
      <Footer/>
    </body>
    </html>

  )
};
export default SiteLayout;
