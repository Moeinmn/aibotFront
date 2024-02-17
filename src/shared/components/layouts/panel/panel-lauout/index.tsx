import Header from "./components/header";

const PanelLayout = (props:any) => {
 
  return (

    <html lang="fa" dir="rtl">
    
      
      <Header {...props.headerProps} />
      {props.children}
   
    </html>

  )
};
export default PanelLayout;
