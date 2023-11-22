import React from "react";
import "./GPT.css";
import Modal from "react-modal";
import { NavLink } from "react-router-dom";
import Arrow from "../../Assets/SideArrow.svg";
import { useState, useEffect } from "react";
import { useRef } from "react";
import ChatMessage from "./ChatMessage";
import GPTMenuBar from "./GPTMenuBar";
import Logo from "../Logo";
import { fetchAsyncUsersSelf, getUser } from "../../redux/Users/userSlice";
import { useDispatch, useSelector } from "react-redux";
const CustomModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modal-ai"
      overlayClassName="modal-overlay"
    >
      {children}
    </Modal>
  );
};
const GPTInterface = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [text, setText] = useState("");
  const containerRef = useRef();
  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "How can I help you?",
    },
    {
      user: "user",
      message: "Use gpt right",
    },
  ]);

  async function handleSubmit(e) {
    e.preventDefault();
    setText("Texting...");
    if (input === "") return;
    let chatLogNew = [
      ...chatLog,
      { user: "user", message: `${input}`, timeStamps: new Date() },
    ];
    setInput("");
    setChatLog(chatLogNew);
    // fetch response to the
    const messages = chatLogNew.map((message) => message.message).join("");
    const response = await fetch(
      "https://crackube-backend-ai-test.onrender.com/v1/chat",
      {
        method: "POST",
        headers: {
          //url encoded
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: messages,
        }),
      }
    );
    const data = await response.json();
    setChatLog([...chatLogNew, { user: "gpt", message: `${data.result}` }]);
    setText("");
  }
  const openModal = () => {
    console.log("open");
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    containerRef.current.scrollTop = containerRef.current.scrollHeight;
  }, [chatLog]);
  const res = useSelector(getUser);
  return (
    <div className="gpt-cover">
      <div className="gpt-menubar">
        <GPTMenuBar />
      </div>
      <CustomModal isOpen={isModalOpen}>
        <div className="payment">
          <div className="plan-1">
            <h1>Plan-1</h1>
            <p>10rs</p>
            <button>Buy Now</button>
          </div>
          <div className="plan-2">
            <h1>Plan-2</h1>
            <p>20rs</p>
            <button>Buy Now</button>
          </div>
        </div>
      </CustomModal>
      <div className="gpt-mainbar">
        <div className="conv-cover" ref={containerRef}>
          <div className="conversation">
            {chatLog &&
              chatLog.map((message, index) => {
                return <ChatMessage key={index} res={res} message={message} />;
              })}
            <p>{text}</p>
          </div>
        </div>

        <div className="gpt-bottom">
          <div className="bottom">
            <form action="" onSubmit={handleSubmit}>
              <div className="gpt-input-4">
                <input
                  type="text"
                  placeholder="Enter your text here..."
                  className="input-gpt"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className="gpt-submit-button-4" onClick={handleSubmit}>
                  Send
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9507 7.76667L5.28403 1.93334C4.8236 1.70418 4.30371 1.6226 3.79522 1.69971C3.28674 1.77683 2.81441 2.0089 2.44264 2.36427C2.07086 2.71964 1.81774 3.18102 1.71777 3.68551C1.61781 4.19 1.67586 4.71305 1.88403 5.18334L3.88403 9.65834C3.92941 9.76653 3.95278 9.88268 3.95278 10C3.95278 10.1173 3.92941 10.2335 3.88403 10.3417L1.88403 14.8167C1.71461 15.1973 1.64299 15.6142 1.67568 16.0295C1.70836 16.4448 1.84431 16.8454 2.07118 17.1948C2.29805 17.5442 2.60863 17.8313 2.97471 18.0302C3.34079 18.229 3.75076 18.3332 4.16736 18.3333C4.55755 18.3294 4.94194 18.2383 5.29236 18.0667L16.959 12.2333C17.3729 12.0252 17.7207 11.7061 17.9638 11.3117C18.2068 10.9174 18.3355 10.4632 18.3355 10C18.3355 9.53676 18.2068 9.08263 17.9638 8.68827C17.7207 8.29392 17.3729 7.97485 16.959 7.76667H16.9507ZM16.209 10.7417L4.54236 16.575C4.38916 16.6486 4.21714 16.6735 4.04935 16.6465C3.88156 16.6196 3.72603 16.5419 3.60362 16.424C3.48121 16.3062 3.39776 16.1537 3.36447 15.987C3.33118 15.8204 3.34963 15.6475 3.41736 15.4917L5.40903 11.0167C5.43481 10.9569 5.45707 10.8957 5.47569 10.8333H11.2174C11.4384 10.8333 11.6503 10.7455 11.8066 10.5893C11.9629 10.433 12.0507 10.221 12.0507 10C12.0507 9.77899 11.9629 9.56703 11.8066 9.41075C11.6503 9.25447 11.4384 9.16667 11.2174 9.16667H5.47569C5.45707 9.10431 5.43481 9.0431 5.40903 8.98334L3.41736 4.50834C3.34963 4.35247 3.33118 4.17963 3.36447 4.01298C3.39776 3.84633 3.48121 3.69384 3.60362 3.57596C3.72603 3.45808 3.88156 3.38045 4.04935 3.35347C4.21714 3.32648 4.38916 3.35145 4.54236 3.42501L16.209 9.25834C16.3455 9.32827 16.4601 9.43452 16.5401 9.56538C16.6201 9.69624 16.6624 9.84663 16.6624 10C16.6624 10.1534 16.6201 10.3038 16.5401 10.4346C16.4601 10.5655 16.3455 10.6717 16.209 10.7417Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
          <p>
            RabbitAI may display inaccurate or offensive information people,
            places, or facts. Read CracKubeAI Privacy.
          </p>
        </div>
      </div>
    </div>
  );
};
const GPTNavBar = () => {
  return (
    <div className="gpt-top">
      <div className="gpt-navbar">
        <NavLink
          to="/gpt"
          style={({ isActive }) => ({
            background: isActive ? "white" : "black",

            color: isActive ? "black" : "white",
          })}
        >
          Dolphin AI
        </NavLink>
        <NavLink
          to="/gpt4"
          style={({ isActive }) => ({
            background: isActive ? "white" : "black",
            color: isActive ? "black" : "white",
          })}
        >
          Shark AI
        </NavLink>
      </div>
    </div>
  );
};
export default GPTInterface;
