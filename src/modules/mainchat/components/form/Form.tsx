'use client';

import { 
  HiPaperAirplane, 
  HiPhoto
} from "react-icons/hi2";
import MessageInput from "../MessageInput";
import { 
  useForm 
} from "react-hook-form";
import axios from "axios";

import { useEffect } from "react";
import useChat from "@/src/hooks/useChat";
import "./style.css";

const Form = () => {

  const chat = useChat();

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: {
      errors,
    }
  } = useForm({
    defaultValues: {
      message: ''
    }
  });

  const onSubmit= (data:any) => {
    chat.appendMessage({
      body: data.message ,
      type:"text",
      sender: "user",
      id: 8,
    })
    chat.setLoading(true)
  
    axios.post('http://38.242.132.56:11000', {
    "message": data.message
  })
  .then((res) => {
    chat.setLoading(false)
    console.log(res,"res")
    chat.appendMessage({
      body: res.data ,
      type:"text",
      sender: "bot",
      id: 8,
    })
  })
  .catch((err) => {

    chat.setLoading(false)
    chat.appendMessage({
      body: err.data ,
      type:"error",
      sender: "bot",
      id: 8,
    })
  })
  

  }



  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
        message: ''
      })
    }
  }, [formState , reset])

  return ( 
    <div className="message-form message-form-rounded">
      <form onSubmit={handleSubmit(onSubmit)} className="message-form-lg-gap">
        <MessageInput 
          id="message" 
          register={register} 
          errors={errors} 
          required 
          placeholder="سوال خود را بپرسید؟" 
        />
        <button type="submit" className="submit-button">
          <HiPaperAirplane size={18} className="text-white" />
        </button>
      </form>
    </div>
  );
}
 
export default Form;