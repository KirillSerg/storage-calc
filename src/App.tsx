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
        max: 5,
        storage: {
          hdd: 0.15,
          ssd: 0.2,
          multi: 0.4,
          singl: 0.5,
        },
        transfer: {
          hdd: 0.3,
          ssd: 0.4,
          multi: 0.4,
          singl: 0.5,
        },
      },
    },
    {
      id: 2,
      name: "bunny",
      price: {
        min: 7,
        max: 5,
        storage: {
          hdd: 0.9,
          ssd: 0.2,
          multi: 0.4,
          singl: 0.5,
        },
        transfer: {
          hdd: 0.3,
          ssd: 0.4,
          multi: 0.4,
          singl: 0.5,
        },
      },
    },
    {
      id: 3,
      name: "scaleway",
      price: {
        min: 7,
        max: 5,
        storage: {
          hdd: 0.5,
          ssd: 0.2,
          multi: 0.4,
          singl: 0.5,
        },
        transfer: {
          hdd: 0.3,
          ssd: 0.4,
          multi: 0.4,
          singl: 0.5,
        },
      },
    },
    {
      id: 4,
      name: "vultr",
      price: {
        min: 7,
        max: 5,
        storage: {
          hdd: 0.1,
          ssd: 0.2,
          multi: 0.4,
          singl: 0.5,
        },
        transfer: {
          hdd: 0.3,
          ssd: 0.4,
          multi: 0.4,
          singl: 0.5,
        },
      },
    },
  ]

  const data = services.map(service => {
    return (
      {
        name: service.name,
        cost: service.price.storage.hdd * +storageInput,
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
