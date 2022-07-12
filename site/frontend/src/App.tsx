import React from 'react';
import './App.css';

function App(): JSX.Element {


  const onSendData = (e: any) => {
    e.preventDefault();
    const target = e.target;

    console.log(target.select.value);



  }



  return (
    <>
      <h1>Формы</h1>
      <form onSubmit={onSendData}>
      <label htmlFor="textarea"> desc</label>
        <input type="text" name='name' id='name' />
        
              <label htmlFor="textarea"> desc</label>

        <textarea name="textarea" id='textarea'  placeholder='textarea' />
        <select name="select" id='select'>
          <option >пункт 1</option>
          <option >пункт 2</option>
        </select>

        <button type="submit">Отправить</button>
      </form>

    </>
  );
}

export default App;
