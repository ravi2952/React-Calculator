import { useState } from 'react';
import './App.css';

function App() {

  const [result, setresult] = useState("");

  const handleclick = (e) => {
    setresult(result.concat(e.target.name));
  }
  const clear = () => {
    setresult("");
  }
  const backspace = () => {
    setresult(result.slice(0, -1));
  }

  const calculation = () => {
    try {
      setresult(eval(result).toString());
    } catch (err) {
      setresult('Error!');
    }

  }
  return (
    <div className='container'>
      <form>
        <input type='text' value={result}></input>
      </form>
      <div className='keypad'>
        <button className='high-lite' id='clear' onClick={clear} >clear</button>
        <button className='high-lite' id='backspace' onClick={backspace} >C</button>
        <button name='/' className='highlite' onClick={handleclick} >&divide;</button>
        <button name='7' onClick={handleclick} >7</button>
        <button name='8' onClick={handleclick} >8</button>
        <button name='9' onClick={handleclick} >9</button>
        <button name='*' className='high-lite' onClick={handleclick} >&times;</button>
        <button name='4' onClick={handleclick} >4</button>
        <button name='5' onClick={handleclick} >5</button>
        <button name='6' onClick={handleclick} >6</button>
        <button name='-' className='high-lite' onClick={handleclick} >-</button>
        <button name='1' onClick={handleclick} >1</button>
        <button name='2' onClick={handleclick} >2</button>
        <button name='3' onClick={handleclick} >3</button>
        <button name='+' className='high-lite' onClick={handleclick} >+</button>
        <button name='0' onClick={handleclick} >0</button>
        <button name='.' onClick={handleclick} >.</button>
        <button className='high-lite' id='result' onClick={calculation} >=</button>
      </div>
    </div>
  );
}

export default App;
