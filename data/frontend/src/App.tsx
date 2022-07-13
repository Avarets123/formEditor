import { useState } from 'react';
import './App.css';
import { IFormRequest } from './interfaces';
import { reqToServer } from './utils';


function App(): JSX.Element {

  const [message, setMessage] = useState<string>();

  const onAddForm = async (e: any) => {
    e.preventDefault();

    const target = e.target;


    const data: IFormRequest = {
      name: target.name.value,
      description: target.description.value,
      type: target.type.value
    }

    const res = await reqToServer('create', data);

    setMessage(res[0]);
    console.log(res);

    target.reset();

  }


  const onDelForm = async (e: any) => {
    e.preventDefault();
    const target = e.target;

    const res = await reqToServer('delete', null, target.id.value.trim());

    console.log(res.affected);

    if (res.affected > 0) {
      setMessage('Форма была удалена')
    }

    target.reset();

  }

  return (
    <>
      <a href="http://localhost:3001">ссылка на страницу форм</a>
      <h1>Редактор форм</h1>

      {message ? <p style={{ color: 'red', fontSize: '24px', textAlign: 'center' }}>{message}</p> : null}


      <form onSubmit={onAddForm}>
        <input type="text" name='name' placeholder='название формы' />
        <input type="text" name='description' placeholder='описание формы' />
        <input type="text" name='type' placeholder='выберите один из: textarea, input, select' />
        <button type='submit'>Создать форму</button>
      </form>


      <form style={{ marginTop: '8rem' }} onSubmit={onDelForm}>
        <input type="text" name='id' placeholder='введите  id формы' />
        <button type='submit'>Удалить форму</button>
      </form>
    </>
  );
}

export default App;
