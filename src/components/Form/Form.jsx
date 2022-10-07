import React from "react";
import InputText from "../Input/InputText";
import InputTextArea from "../Input/InputTextArea";
import './form.css';
import { useState } from 'react';



const Form = () => {
  const USER_ID = 1;
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [isArticleSend, setIsArticleSend] = useState(false)
  
  const sendArticle = async (event) => {
    event.preventDefault();
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId: USER_ID
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }).then((response) => {
      setIsArticleSend(true)
      setTitle('')
      setBody('')
      return response.json()
    }).then((json) => console.log(json));

  }

  return (
    <form onSubmit={sendArticle}>
      <InputText value={title} onChange={(event) => setTitle(event.currentTarget.value)}/>

      <InputTextArea value={body} onChange={(event) => setBody(event.currentTarget.value)}/>

      <input hidden name="userId" defaultValue={USER_ID} />

      <button
        type="submit"
      >Envoyer
      </button>

      { isArticleSend && <p>Votre article a bien été envoyé</p>}
    </form>
  );
};

export default Form;
