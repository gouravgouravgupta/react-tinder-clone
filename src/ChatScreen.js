import { Avatar } from '@material-ui/core'
import  React ,{ useState } from 'react'
import './ChatScreen.css'


function ChatScreen() {
   const [input , setInput] = useState("");
   const [messages, setMessages ] = useState([
     {
       name:"Ellen",
       image:"https://img.izismile.com/img/img6/20130304/640/naturally_beautiful_girls_640_49.jpg",
       message:"whats up?"
     },
     {
      name:"Ellen",
      image:"https://img.izismile.com/img/img6/20130304/640/naturally_beautiful_girls_640_49.jpg",
      message:"Howz it's going?"
     },
    {  
      message:"hey how are you Ellen"
    } ]
    );
    
    const handleSend = e =>{
      e.preventDefault();
      setMessages([...messages , { message:input }]);
      setInput("");
    };

  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">YOU MATCHED WITH ALLEN AT 10/08/20</p>
      {
        messages.map( (message) => (
          message.name ? (
          <div className="chatScreen_message">
            <Avatar className="chat_image"
            src={message.image}
            alt={message.name} >

            </Avatar>
            <p className="chatScreen_text">{message.message}</p>
          </div>
          ) :(
            <div className="chatScreen_message">
              <p className="chatScreen_textUser">
                {message.message}
              </p>
            </div>
          )
        ))
      }

      
        <form className="chatScreen_input">
          <input type="text"
          value={input}
          onChange={ (e) => setInput(e.target.value)}
          className="chatScreen_inputField"
          placeholder="type a message ...">

          </input>
          <button className="chatScreen_inputButton" onClick={handleSend}
          type="submit"></button>
        </form>
      </div>
    
  )
}

export default ChatScreen

