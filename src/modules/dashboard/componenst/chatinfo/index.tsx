import Image from 'next/image';
import styles from './styles.module.css' 

const ChatInfo=()=>{
    return(
        <>
        <div className={styles.container}>
            <div className={styles.infoWrapper}>
                <div>
                    <span className={styles.titleIndo}>چت بات ایدی:</span>
                    <span className={styles.detailsInfo}>sG-EAaBK-R4AbfET4AhmP</span>
                </div>
                <div>
                    <span className={styles.titleIndo}>حالت:</span>
                    <span className={styles.detailsInfo}>فعال </span>
                    <span className={styles.greenCircle}></span>
                </div>
                <div>
                    <span className={styles.titleIndo}>آخرین آموزش:</span>
                    <span className={styles.detailsInfo}>3 روز پیش</span>
                </div>
            </div>
            <div className={styles.chatWrapper}>
                 <Image
                    src="/images/chatTemplate.png"
                     width={800}
                     height={800}
                     alt="Picture of the chat"
                    />

            </div>

        </div>
        </>
    )

};
export default ChatInfo;