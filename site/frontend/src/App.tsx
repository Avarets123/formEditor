import { useState } from 'react';
import './App.css';
import { IResForm } from './interfaces/form.res.interface';
import { reqToServer } from './utils/request';

function App(): JSX.Element {

  const [form, setForm] = useState<IResForm | null>(null);

  const onSendData = async (e: any) => {
    e.preventDefault();
    const target = e.target;

    const data = {
      formId: form?.form_uid,
      //@ts-ignore
      data: target[form?.name].value
    }

    const res = await reqToServer('filling', '', data);
    console.log(res);
    target.reset();
  }

  const onSearchForm = async (e: any) => {
    e.preventDefault();
    const target = e.target;

    const res = await reqToServer('get', target.id.value.trim());
    setForm(res);
    console.log(res)
    target.reset();
  }




  return (
    <>
      <a href="http://localhost:3000"> ссылка на конструктор форм</a>
      <h1>Формы</h1>
      <form onSubmit={onSearchForm} >
        <input className='search-input' name='id' type="text" placeholder='введите id формы для отображания' />
        <button className='search-btn'>Найти</button>
      </form>

      {form ?
        <form onSubmit={onSendData}>
          <label style={{ marginBottom: '0.7rem', display: 'inline-block' }}>{form.description}</label>

          {form.type === 'input' ? <input type={'text'} name={form.name} placeholder={form.name} /> :
            form.type === 'textarea' ? <textarea name={form.name} placeholder={form.name} /> :
              <select name={form.name} >
                <option > {form.name}</option>
              </select>
          }
          <button type="submit">Отправить</button>

          <p style={{marginTop: '2rem'}}>{JSON.stringify(form)}</p>
        </form>

        : null}

    </>
  );
}

export default App;
