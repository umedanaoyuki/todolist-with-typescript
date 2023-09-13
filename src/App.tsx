import React, {useState} from 'react';
import './App.css';

function App() {

    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState<Todo[]>([]);


    type Todo = {
        inputValue: string;
        id: number;
        checked: boolean;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        //画面のリロードの回避
      e.preventDefault();

    };

  return (
    <div className="App">
      <div>
        <h2>Todoリスト with Typescript</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" onChange={(e) => handleChange(e)} className="inputText"></input>
          <input type="submit" value="作成" className="submitButton"></input>
        </form>
      </div>
    </div>
  );
}

export default App;
