import './App.css';
import { IFormRequest } from './interfaces';
import { client } from './jrpc';


function App(): JSX.Element {

  const onSubmit = async (e: any) => {
    e.preventDefault();
    
    const target = e.target;
    

    const data: IFormRequest = {
      name: target.name.value,
      description: target.description.value,
      type: target.type.value
    }
    
    client.request('create', data);
    target.reset();


  }

  return (
    <>
      <h1>Редактор форм</h1>

      <form onSubmit={onSubmit}>
        <input type="text" name='name' placeholder='название формы' />
        <input type="text" name='description' placeholder='описание формы' />
        <input type="text" name='type' placeholder='выберите один из: textarea, input, select' />
        <button type='submit'>Создать форму</button>
      </form>
    </>
  );
}

export default App;
