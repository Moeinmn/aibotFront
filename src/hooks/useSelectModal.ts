import { create } from 'zustand';

interface SelectModaltore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  urls:string[];
  setUrls:(urls:string[])=>void;

}

const useSelectModal = create<SelectModaltore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  urls:[""],
  setUrls: (urls)=>set({urls}),
  
}));


export default useSelectModal;
