import Pusher from "pusher-js";
import React, { useEffect, useState } from "react";
import "./Chat.css";
import chat from "../../assets/images/chat.png";

const Chat = () => {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [openChat, setOpenChat] = useState(false);

  useEffect(() => {
    const pusher = new Pusher("7b9089da1038cda52fbe", {
      cluster: "ap2",
    });
    const channel = pusher.subscribe("my-channel");
    channel.bind("my-event", function (data) {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      pusher.unsubscribe("my-channel");
    };
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    try {
      const currentDate = new Date().toLocaleString();
      const response = await fetch(
        "http://coderadd.beget.tech/public/api/messages",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            message,
            date: currentDate,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setMessage("");
    } catch (error) {
      console.error("Error during fetch:", error);
    }
  };

  return (
    <div>
      <div className="openChatButton" onClick={() => setOpenChat(!openChat)}>
        <img src={chat} alt="" />
      </div>
      <div className={`chattingContainer ${openChat ? "active" : ""}`}>
        <div className="top">
          <h1>Chat</h1>
          <input
            type="text"
            value={username}
            placeholder="Type here your username!"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="msger-chat">
          {messages.length == 0 ? (
            <img
              src="https://i.pinimg.com/originals/54/85/6a/54856ab427f28a0b40b1a305792a3b00.png"
              alt=""
            />
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`msg ${
                  message.username == username ? "right-msg " : "left-msg"
                }`}>
                <div className="msg-bubble">
                  <div className="msg-info">
                    <div className="msg-info-name">{message.username}</div>
                    <div className="msg-info-time">
                      {message.date.substring(12)}
                    </div>
                  </div>

                  <div className="msg-text">{message.message}</div>
                </div>
              </div>
            ))
          )}
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Type your message!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit" onClick={(e) => submit(e)}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
