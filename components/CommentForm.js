import axios from "axios";
import { useState } from "react"


export const CommentForm = ({ recipeId, commentsContent }) => {

    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
       const newMessage = e.target.value;
       setMessage(newMessage);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
           await axios.post(
             "https://gastro-guide-cb84aa2b2322.herokuapp.com/api/comments",
             {text: message, recipe: recipeId},
             {
               headers: {
                 Authorization: `Bearer ${localStorage.getItem("authToken")}`, 
               },
             }
           );
        }
        catch (err) {
            console.error(err);
        }

        setMessage("");
    }

    return (
      <>
        {isSent ? (
          <></>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>{commentsContent.commentForm.message}</label>
            <textarea
              value={message}
              type="text"
              name="message"
              required
              onChange={handleChange}
              placeholder={commentsContent.commentForm.messPlaceholder}
            ></textarea>
            <button type="Submit">{commentsContent.commentForm.btn}</button>
          </form>
        )}
      </>
    );
}