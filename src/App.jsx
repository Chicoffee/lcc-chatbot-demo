import ChatBotIcon from "./components/ChatBotIcon";
import ChatForm from "./components/ChatForm";
import { useRef, useState, useEffect } from 'react';
import ChatMessage from './components/ChatMessage';
import EnrollmentPage from "./components/EnrollmentPage";
import handbookInfo from "./handbookInfo";

const App = () => {
  const [chatHistory, setChatHistory] = useState([
    {
      hideInChat: true,
      role: "model",
      text: handbookInfo,
    }
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();
  

  const generateBotResponse = async (history) => {
    const updateHistory = (text, isError = false) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), {role: "model", text, isError}]);
    };

    history = history.map(({role, text}) => ({
      role, 
      parts:[{text}]
    }));

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({contents: history })
    };

    try {
      const response = await fetch(import.meta.env.VITE_GEMINI_API, requestOptions);
      const data = await response.json();
      if(!response.ok) throw new Error(data.error.message || "Something went wrong!");

      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
      updateHistory(apiResponseText);
    } catch (error) {
        updateHistory(error.message, true);
    }
  };

  useEffect(() => {
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior: "smooth"});
  }, [chatHistory]);


  return(
    <div className={`container ${showChatbot ? "show-chatbot" : ""}`} style={{ position: 'relative', minHeight: '100vh' }}>

      <EnrollmentPage/>

      <button onClick={() => setShowChatbot(prev => !prev)} id="chatbot-toggler">
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-rounded">close</span>
      </button>

      <div className="chatbot-popup">
        {/*Chabot Header */}
        <div className="chatbot-header">
            <div className="header-info">
            <ChatBotIcon/>
            <h2 className="logo-text">LISA</h2>
            </div>
            <button onClick={() => setShowChatbot(prev => !prev)} className="material-symbols-rounded">keyboard_arrow_down </button>
          </div>

           {/*Chabot Body */}
          <div ref={chatBodyRef} className="chatbot-body">
            <div className="message bot-message">
              <ChatBotIcon/>
                <p className="message-text">
                  Im LISA, LCC's Inteligent Student Asssitant, a friendly, warm, and helpful AI assistant for La Concepcion College (LCC) students.
                </p>
              </div>
            {/*Chat Render*/}
            {chatHistory.map((chat, index) => (
              <ChatMessage key={index} chat={chat}/>
            ))} 
          </div>

          {/*Chabot Footer */}
          <div className="chatbot-footer">
            <ChatForm chatHistory={chatHistory} setChatHistory ={setChatHistory} generateBotResponse={generateBotResponse}/>
          </div>
        </div>
      </div>
  );
}

export default App