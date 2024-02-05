"use client"

import useSelectModal from "@/src/hooks/useSelectModal";
import "./modal.css";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import MainChat from "@/src/modules/mainchat";

const ChatModalCustom=()=>{

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
  

    return(
      <div id="modal-container" >
        <div className="modal-background">
          <div className="modal">
          
          <MainChat/>
         
           
          </div>
        </div>
      </div>
    )

}

export default ChatModalCustom;