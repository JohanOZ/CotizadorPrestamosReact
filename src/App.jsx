import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Contenido from './components/Contenido';
import Button from './components/Button';
import { formatearDinero, calcularInteres } from './helpers/index.js';
function App() {
  const [cantidad, setCantidad] = useState(500);
  const [plazo, setPlazo] = useState(15);
  const [interes, setInteres] = useState(0);

  useEffect(() => {
    const resultadoTotal = calcularInteres(cantidad, plazo);
    setInteres(resultadoTotal);
  }, [cantidad, plazo]);

  const MIN = 200;
  const MAX = 5000;
  const STEP = 50;

  const MINPlazo = 14;
  const MAXPlazo = 30;
  const STEPPlazo = 1;

  const handleChangeCantidad = (e) => {
    setCantidad(+e.target.value);
  }

  const handleClickDecremento = () => {
    const valor = cantidad - STEP;

    if(valor < MIN) {
      alert('Cantidad no válida');
      return;
    }

    setCantidad(valor);
  }

  const handleClickIncremento = () => {
    const valor = cantidad + STEP;

    if(valor > MAX) {
      alert('Monto no válido');
      return;
    }


    setCantidad(valor);
  }

  const handleClickDecrementoPlazo = () => {
    const valor = plazo - STEPPlazo;

    if(valor < MIN) {
      alert('Monto no válido');
      return;
    }

    setPlazo(valor); 
  }

  const handleClickIncrementoPlazo = () => {
    const valor = plazo + STEPPlazo;

    if(valor > MAX) {
      alert('Monto no válido');
      return;
    }

    setPlazo(valor); 
  }

  const handleChangePlazo = (e) => {
    setPlazo(+e.target.value);
  }

  return (
    <div>
      <Header></Header>
      <Contenido></Contenido>
    <div className="my-20 max-w-lg bg-fondo mx-auto shadow p-10">      
      <div className='flex justify-between my-6'>
        <Button 
          operador= '-'
          fn= {handleClickDecremento}
        />
        <h2 className='text-4xl font-extrabold text-fuerte text-center'>
        Monto
        </h2>
        <Button
          operador= '+'
          fn= {handleClickIncremento}
        />
      </div>
      <input 
        type='range' 
        className="w-full h-6 bg-gray-200 accent-verde hover:accent-verde"
        min={MIN}
        max={MAX}
        step={STEP}
        value={cantidad}
        onChange={handleChangeCantidad}
      />
      <p className='text-5xl text-center text-gray-700'>
        {formatearDinero(cantidad)}
      </p>

      <div className='flex justify-between my-6'>
        <Button 
          operador= '-'
          fn= {handleClickDecrementoPlazo}
        />
        <h2 className='text-4xl font-extrabold text-fuerte text-center'>
        Plazo
        </h2>
        <Button
          operador= '+'
          fn= {handleClickIncrementoPlazo}
        />
      </div>
      <input 
        type='range' 
        className="w-full h-6 bg-gray-200 accent-verde hover:accent-verde"
        min={MINPlazo}
        max={MAXPlazo}
        step={STEPPlazo}
        value={plazo}
        onChange={handleChangePlazo}
      />
      <p className='text-5xl text-center text-gray-700'>
        {plazo} Días
      </p>
      
      <table className='table-fixed w-full mt-5'>
        <thead>
          <tr className='text-3xl font-extrabold text-verde text-center'>
            <th className='w-1/3'>
              Monto:
            </th>
            <th className='w-1/3'>
              Intereses:
            </th>
            <th className='w-1/3'>
              Total:
            </th>
          </tr>
        </thead>
          <tbody>
            <tr className='text-center text-2xl text-fuerte font-bold'>
              <td>
                {formatearDinero(cantidad)}
              </td>
              <td>
                {formatearDinero(calcularInteres(cantidad, plazo))}
              </td>
              <td>
                {formatearDinero(cantidad + interes)}
              </td>
            </tr>
          </tbody>
      </table>
  
    </div>
    </div>
  )
}

export default App
