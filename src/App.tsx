import React, { useState } from 'react';
import Charts from './components/Charts';
import Inputs from './components/Inputs';
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => {

  const [storageInput, setStorageInput] = useState('0')
  const [transferInput, setTransferInput] = useState('0')

  const services = [
    {
      id: 1,
      name: "backblaze",
      price: {
        min: 7,
        max: null,
        storage: {
          hdd: 0.005,
          ssd: 0.005,
          multi: 0.005,
          singl: 0.005,
        },
        transfer: {
          hdd: 0.01,
          ssd: 0.01,
          multi: 0.01,
          singl: 0.01,
        },
      },
    },
    {
      id: 2,
      name: "bunny",
      price: {
        min: null,
        max: 10,
        storage: {
          hdd: 0.01,
          ssd: 0.02,
          multi: null,
          singl: null,
        },
        transfer: {
          hdd: 0.01,
          ssd: 0.01,
          multi: null,
          singl: null,
        },
      },
    },
    {
      id: 3,
      name: "scaleway",
      price: {
        min: null,
        max: null,
        storage: {
          hdd: null,
          ssd: null,
          multi: {
            multiprice: 0.06,
            bonus: 75,
          },
          singl: {
            singlprice: 0.03,
            bonus: 75,
          },
        },
        transfer: {
          hdd: null,
          ssd: null,
          multi: {
            multiprice: 0.02,
            bonus: 75,
          },
          singl: {
            singlprice: 0.02,
            bonus: 75,
          },
        },
      },
    },
    {
      id: 4,
      name: "vultr",
      price: {
        min: 5,
        max: null,
        storage: {
          hdd: 0.01,
          ssd: 0.01,
          multi: {
            multiprice: 0.01,
            bonus: null,
          },
          singl: {
            singlprice: 0.01,
            bonus: null
          },
        },
        transfer: {
          hdd: 0.01,
          ssd: 0.01,
          multi: {
            multiprice: 0.01,
            bonus: null,
          },
          singl: {
            singlprice: 0.01,
            bonus: null,
          },
        },
      },
    },
  ]

  const calculation = (service: any) => {
    console.log(service)
    return 1
  }

  const data = services.map(service => {
    return (
      {
        name: service.name,
        cost: calculation(service),
      }
    )
  })
  
  return (
    <>
      <Wrapper>
        <Inputs
          storageInput={storageInput}
          setStorageInput={setStorageInput}
          transferInput={transferInput}
          setTransferInput={setTransferInput}
        />
        <Charts data={data} />
      </Wrapper>
    </>
  );
}

export default App;
