"use client"

import useSelectModal from "@/src/hooks/useSelectModal";
import "./Modal.css";
import { IoMdClose } from "react-icons/io";
import { useCallback, useState } from "react";

const SelectModalCustom=()=>{

    const SelectModal = useSelectModal(); 
    const [selectedUrls, setSelectedUrls] = useState([]);

    const handleCheckboxChange = (url:any) => {
      if (selectedUrls.includes(url)) {
        setSelectedUrls(selectedUrls.filter(selectedUrl => selectedUrl !== url));
      } else {
        setSelectedUrls([...selectedUrls, url]);
      }
    };
    const handleClsoeModal=()=>{
      SelectModal.onClose();
      SelectModal.resetUrls();

    };
    
  

    return(
        <div id="modal-container" className={SelectModal.isOpen?"one":" one out"}>
        <div className="modal-background">
          <div className="modal">
            <button className="closeBtn" onClick={handleClsoeModal}>
            <IoMdClose size={22}/>
            </button>
            <h2>بررسی صفحات</h2>
            <hr className="custom-hr" />
            <p>صفحات مورد نظرتان را برای بررسی دیتا انتخاب کنید؟</p>
            <div className="urlBox">
            {SelectModal.urls.map((url, index) => (
              <div key={index} >
                <input
                  type="checkbox"
                  id={`url-${index}`}
                  onChange={() => handleCheckboxChange(url)}
                  checked={selectedUrls.includes(url)}
                  className="inputCheck"
                />
                <label htmlFor={`url-${index}`} className="labelUrl">{url}</label>
              </div>
            ))}

            </div>
            <button className="sumbitBtn">بررسی اطلاعات</button>
          
          
         
           
          </div>
        </div>
      </div>
    )

}

export default SelectModalCustom;