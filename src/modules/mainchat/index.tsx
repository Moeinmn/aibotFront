import { useEffect, useRef } from "react";
import Form from "./components/form/Form";
import useChat from "@/src/hooks/useChat";
import MessageBox from "./components/messagebox/MessageBox";
import "./style.css";

export default function MainChat() {
  const bottomRef = useRef(null);
  const chat = useChat();

  useEffect(() => {
    console.log(chat);
    bottomRef?.current?.scrollIntoView();
  }, [chat.messages]);

  return (
    <main className="main-chat-container">
      <div className="chat-container">
        <div className="message-container scroll-bar-styling">
          {chat.messages.map((message, i) => (
            <MessageBox
              isLast={i === chat.messages.length - 1}
              key={message.id}
              data={message}
            />
          ))}
          <div className="pt-2" ref={bottomRef} />
        </div>
        <Form />
      </div>
    </main>
  );
}
