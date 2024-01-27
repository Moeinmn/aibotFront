"use client"

import useSelectModal from "@/src/hooks/useSelectModal";
import "./Modal.css";
import { IoMdClose } from "react-icons/io";
import { useCallback } from "react";

const SelectModalCustom=()=>{
    const SelectModal = useSelectModal(); 
    console.log(SelectModal.urls)
    const handleClose = useCallback(() => {
      console.log("xdscd")
      
      SelectModal.setUrls([""])
      setTimeout(() => {
        SelectModal.onClose()
      }, 300)
    }, [SelectModal.onClose]);
    
    // const handleCheckboxChange = (url) => {
    //   // Implement your logic for handling checkbox selection here
    //   console.log(`URL ${url} selected`);
    // };


    return(
        <div id="modal-container" className={SelectModal.isOpen?"six":""}>
        <div className="modal-background">
          <div className="modal">
          <button
            onClick={()=>{
              console.log("sss")
            }}
          >
            <IoMdClose size={18} />
          </button>
            <h2>I'm a Modal</h2>
            <p>Hear me roar.</p>
            {/* <div className="url-list">
            {SelectModal.urls.map((url, index) => (
              <div key={index} className="url-item">
                <input
                  type="checkbox"
                  id={`url-${index}`}
                  onChange={() => handleCheckboxChange(url)}
                />
                <label htmlFor={`url-${index}`}>{url}</label>
              </div>
            ))}
          </div> */}
            <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
              <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
            </svg>
          </div>
        </div>
      </div>
    )

}

export default SelectModalCustom;