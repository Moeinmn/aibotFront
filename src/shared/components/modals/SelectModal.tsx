import useSelectModal from "@/src/hooks/useSelectModal"
import Modal from "./Modal";
import { 
    FieldValues, 
    SubmitHandler, 
    useForm
  } from "react-hook-form";

const SelectModal=()=>{
const selectModal=useSelectModal();
const { 
    register, 
    handleSubmit,
    formState: {
      errors,
    },
  } = useForm<FieldValues>({
    defaultValues: {
      urls: '',
    },
  });


  const onSubmit: SubmitHandler<FieldValues> = 
  (data) => {
    console.log(data)
  }


return(
    <Modal
      onClose={selectModal.onClose}
      isOpen={selectModal.isOpen}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="ساختن چت بات"
      
    
     />
)

}

export default SelectModal;