import Header from "./components/header";

const PanelLayout = (props:any) => {
 
  return (

    <html lang="fa" dir="rtl">
         <body >
         <Header {...props.headerProps} />
         {props.children}

         </body>
    
      
      
   
    </html>

  )
};
export default PanelLayout;
