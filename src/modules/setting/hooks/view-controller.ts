import { create } from 'zustand';

interface StoreViewController {
    activeTab: any;
    changeTab: (newTab:any) => void;
    isLoading:boolean;
    setLoading:(loading:boolean) =>void;
};


const useStoreViewController = create<StoreViewController>( 
    (set) => ({
    isLoading: false,
    activeTab:"General",
    setLoading: (loading) => set({ isLoading: loading }),
    
    changeTab: (newTab:any) =>
        set((state:any) => ({activeTab:newTab})),
    
  }));
  




export default useStoreViewController;