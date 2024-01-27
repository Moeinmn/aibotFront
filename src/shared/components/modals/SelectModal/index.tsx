"use client"

import useSelectModal from "@/src/hooks/useSelectModal";
import "./Modal.css";

const SelectModalCustom=()=>{
    const SelectModal = useSelectModal(); 
    


    return(
        <div id="modal-container" className={SelectModal.isOpen?"six":""}>
        <div className="modal-background">
          <div className="modal">
            <h2>I'm a Modal</h2>
            <p>Hear me roar.</p>
            <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
              <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3"></rect>
            </svg>
          </div>
        </div>
      </div>
    )

}

export default SelectModalCustom;