
import useStoreViewController from '@/src/modules/setting/hooks/view-controller';
import styles from './style.module.css'

const TabLink=({item,event}:any)=>{
    const StoreViewController=useStoreViewController();

    const handleClick = () => {
        StoreViewController.changeTab(item.store)
    };
    return(
        <div onClick={handleClick} className={`${styles.container} ${StoreViewController.activeTab === item.store && styles.active}`}>
             {item.title}
        </div>
    )



};

export default TabLink;