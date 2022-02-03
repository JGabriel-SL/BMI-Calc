import { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [msg, setMsg] = useState('');
  const [color, setColor] = useState('');
  
  function calcIMC() {
    const height_ = height / 100
    const imc = (weight / (height_ * height_)).toFixed(2);

    if(imc < 17) {
      setMsg(`Está muito abaixo do peso! IMC : ${imc}`)
      setColor("very-low");
    } else if (imc >= 17 && imc <= 18.49) {
      setMsg(`Está abaixo do peso! IMC : ${imc}`)
      setColor("low");
    } else if (imc >= 18.5 && imc <= 24.99) {
      setMsg(`Peso ideal! IMC : ${imc}`)
      setColor("medium");
    } else if (imc >= 25 && imc <= 29.99) {
      setMsg(`Está acima do peso! IMC : ${imc}`)
      setColor("high");
    } else if (imc >= 30 && imc <= 34.99) {
      setMsg(`Obesidade I! IMC : ${imc}`)
      setColor("warning");
    } else if (imc >= 35 && imc <= 39.99) {
      setMsg(`Obesidade II (severa)! IMC : ${imc}`)
      setColor("dangerous");
    } else if (imc >= 40) {
      setMsg(`Obesidade III (mórbida)! IMC : ${imc}`)
      setColor("very-dangerous");
    }
  }

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <span>Vamos calcular o seu IMC!</span>

      <div className="area-inputs">
        <input 
          type="text"
          placeholder="Peso em (kg)"
          value={weight}
          onChange={e => setWeight(e.target.value) }
        />
        <input 
          type="text"
          placeholder='Altura em (cm)'
          value={height}
          onChange={e => setHeight(e.target.value) }
        />

        <button onClick={calcIMC} >
          Calcular
        </button>
      </div>

      <h2 className={color}>{msg}</h2>
    </div>
  );
}

export default App;
