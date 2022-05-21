import React, { useEffect, useState } from "react";
import "./Messages.css";
import { AiFillDelete } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";

export const Messages = () => {
  interface Message {
    id: number;
    body: string;
    isDeleted: boolean;
  }
  const defauftMessage = [
    { id: 1, body: "1", isDeleted: false },
    { id: 2, body: "2", isDeleted: false },
    { id: 3, body: "3", isDeleted: true },
    { id: 4, body: "4", isDeleted: false },
  ];
  const [lastId, setLastId] = useState(5);
  const [messagesArray, setMessagesArray] = useState(defauftMessage);
  const [displayValueIndex, setDisplayValueIndex] = useState(0);
  const [firstBlockValue, setFirstBlockValue] = useState<Message>();
  const [inputValue, setInputValue] = useState("");

  const sendMessage = () => {
    const newMessage: Message = {
      id: lastId,
      body: inputValue,
      isDeleted: false,
    };

    setMessagesArray([...messagesArray, newMessage]);
    setInputValue("");
    setLastId(lastId + 1);
  };

  const removeMessage = () => {
    setMessagesArray(
      messagesArray.map((message: Message) => {
        if (message.id === displayValueIndex + 1) {
          message.isDeleted = !message.isDeleted;
        }
        return message;
      })
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayValueIndex((displayValueIndex) => displayValueIndex + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (messagesArray.some((message) => !message.isDeleted)) {
      if (messagesArray[displayValueIndex]?.isDeleted)
        setDisplayValueIndex(displayValueIndex + 1);
      if (messagesArray.length <= displayValueIndex) {
        setDisplayValueIndex(0);
      }
      setFirstBlockValue(messagesArray[displayValueIndex]);
    }
  }, [displayValueIndex]);

  return (
    <div className="main">
      <div className="block-one">
        {!firstBlockValue?.isDeleted && (
          <TiDelete onClick={removeMessage} size={40} cursor="pointer" />
        )}
        {!firstBlockValue?.isDeleted && firstBlockValue?.body}
      </div>
      <div className="block-two">
        {messagesArray.map((message: Message) => (
          <div key={message.id}>
            <AiFillDelete opacity={message?.isDeleted ? 1 : 0} size={20} />
            {message?.body}
          </div>
        ))}
      </div>
      <div className="block-three">
        <input
          type="text"
          className="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="button" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};
