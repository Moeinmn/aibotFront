import { DocumentUpload } from 'iconsax-react';
import { useCallback, useState } from 'react';
import { useDropzone, FileRejection } from 'react-dropzone';


const UploadFlie=()=>{

  const [files, setFiles] = useState<File[]>([])


    const onDrop = useCallback((acceptedFiles:any) => {
        // Do something with the files (this function needs to be implemented)
        // For example, you can log the file names
        console.log(acceptedFiles);
      }, []);
    
      // Get the necessary props from the useDropzone hook
      const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
      
    return(

        <>
        <form style={{display:"flex",justifyContent:"center",height:"300px",alignItems:"center",flexDirection:"column"}}>
        <div {...getRootProps()} style={{cursor:"pointer",width:"75%",height:"75%",borderStyle:"dashed",borderWidth:"2px",display:"flex",alignItems:"center",justifyContent:"center"}}>
            <div style={{}}>
            <input {...getInputProps()} />
           <div style={{display:'flex',flexDirection:"column"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
            <DocumentUpload size="32"color="#000"/>

            </div>

           {isDragActive ? (
            <p>فایل ها را اینجا رها کنید...</p>
          ) : (
            <div style={{marginTop:"15px"}}>
            <p>فایل‌ها را اینجا بکشید و رها کنید یا کلیک کنید آن ها را انتخاب کنید...</p>
            <p style={{fontSize:"11px",color:"gray"}}>Supported File Types: .pdf, .doc, .docx, .txt</p>
            </div>
          )}
           </div>

            </div>
      
         
     
        </div>
        <div>
            <span style={{fontSize:"12px",color:"gray"}}>اگر یک PDF آپلود می کنید، مطمئن شوید که می توانید متن را انتخاب یا برجسته کنید.</span>
        </div>

        </form>
        </>
 
      
    )

};
export default UploadFlie;