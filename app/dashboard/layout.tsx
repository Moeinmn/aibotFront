import Sidebar from "@/src/modules/dashboard/componenst/sidebar";

const Layout=({
    children,
  }: {
    children: React.ReactNode
  })=>{
  return(

    <html lang="fa" dir="rtl">

    <div style={{display:"flex"}}>
        <div style={{
            flex:"1",
            padding:"20px",
            minHeight:"100vh",
        }}>
            <Sidebar/>
        </div>
        <div style={{
            flex:"4",
            padding:"20px"
        }}>

            {children}
        </div>
    </div>
    </html>

  )
};
export default Layout