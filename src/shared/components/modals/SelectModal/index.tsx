"use client"

import useSelectModal from "@/src/hooks/useSelectModal";
import "./Modal.css";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";

const SelectModalCustom=()=>{

    const SelectModal = useSelectModal(); 
    const [selectedUrls, setSelectedUrls] = useState([]);
    const [selectError, setSelectError] = useState('');

    const handleCheckboxChange = (url:any) => {
      if (selectedUrls.includes(url)) {
        setSelectedUrls(selectedUrls.filter(selectedUrl => selectedUrl !== url));
      } else {
        setSelectedUrls([...selectedUrls, url]);
      }
    };
    const handleClsoeModal=()=>{
     
    };
    const handleSubmit=()=>{
      if(selectedUrls.length==0){
        setSelectError("لطفا حداقل یک لینک را انتخاب کنید")
        return
      }
      // setLoading(true);
    
      axios.post(`http://localhost:3001/v1/crawlerlink`,{url:selectedUrls})
        .then((response:any) => {
          SelectModal.onClose();
          SelectModal.resetUrls();
          setSelectedUrls([])
        })
        .catch(error => {
          console.error('Error:', error);
        });



     
      SelectModal.onClose();
      setSelectedUrls([])
    }

    useEffect(()=>{
      setSelectError("")
    },[selectedUrls])
    
  

    return(
      <div id="modal-container" className={SelectModal.isOpen === null ? "" : SelectModal.isOpen ? "one" : "one out"}>
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
            { selectError && <p style={{fontSize:"12px"}}>{selectError}</p>} 
            <button className="sumbitBtn" onClick={handleSubmit}>بررسی اطلاعات</button>
          
          
         
           
          </div>
        </div>
      </div>
    )

}

export default SelectModalCustom;