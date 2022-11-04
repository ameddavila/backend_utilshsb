import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import clienteAxios from '../config/clienteAxios';
import 'primeicons/primeicons.css';
import { Image } from 'primereact/image';
//import './CarouselDemo.css';

const CarouselDemo = () => {
  const [fichas, setFichas] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '600px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
    }
    {
      breakpoint: '280px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  useEffect(() => {
    const listar = async () => {
      try {
        const res = await clienteAxios('/fichas');
        // console.log(res.data[0])
        setFichas(res.data[0]);
      } catch (error) {
        console.log(error)
      }
    }
    listar();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const productTemplate = (fichas) => {
    return (
      <div className="p-1rem">
        <div className="card-container blue-container flex align-items-center justify-content-start">
          <div className="col-3 block">
        
          <Image src="images/medico.png" alt={fichas.MEDICO} className="product-image" width="40" height="40" preview />
         
          </div>
          <div className="w-full block font-bold text-center border-round">
            <div className="p-1rem yellow-container">
              <div className="block font-bold text-left m-1">
                <span className='text-500 font-medium '>
                  {fichas.Descripcion}
                </span>
              </div>
              <div className="block font-bold text-left m-1">
                <span className='text-500 font-medium '>
                  {fichas.MEDICO}
                </span>
              </div>
              <div className="block font-bold text-left m-1">
                <span className='text-500 font-medium '>
                  FICHAS DISPONIBLES: {fichas.cantidad}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="carousel-demo">
      <div className="card">
        <Carousel value={fichas}
          numVisible={5}
          numScroll={1}
          orientation="vertical"
          verticalViewPortHeight="300px"
          responsiveOptions={responsiveOptions}
          className="custom-carousel" circular
          autoplayInterval={10000}
          showNavigators={false}
          showIndicators={false}
          itemTemplate={productTemplate}
          header={<h5>FICHAS DISPONIBLES (Beta hoy)</h5>} />
      </div>

    </div>
  );
}
export default CarouselDemo
