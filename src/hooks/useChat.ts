import { create } from "zustand";



interface chatStore {
  messages: any;
  appendMessage: (newMessage:any) => void;
  isLoading:boolean;
  setLoading:(loading:boolean) =>void;
}

const useChat = create<chatStore>((set) => ({
  isLoading: false,
  messages: [
        { body: " سلام! 😊 خوش آمدید! امیدوارم که روزتان پر از خوبی‌ها و شادی باشد. اگر سوالی یا نیاز به کمک دارید، خیالتان راحت! من در اینجا هستم تا کمک کنم.", sender: "bot", id: 2 },
      ],
  setLoading: (loading) => set({ isLoading: loading }),
  
  appendMessage: (newMessage:any) =>
      set((state:any) => ({ messages: [...state.messages, newMessage] })),
  
}));


export default useChat;