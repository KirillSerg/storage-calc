import React, {useState} from 'react';
import Charts, { CostData } from './components/Charts';
import Inputs from './components/Inputs';
import styled from 'styled-components'
import { services } from './components/mockData';
import CustomAxisIcons from './components/CustomAxisIcons';

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // gap: 30px;
`;

const ChartWrapper = styled.div`
  rotate: 90deg;
  width: 350px;
`;

const App: React.FC = () => {

  const [storageInput, setStorageInput] = useState<string>('')
  const [transferInput, setTransferInput] = useState<string>('')
  const [minCoastService, setMinCoastService] = useState<CostData>({name: '', cost: +Infinity})

  const calculation = (service: any) => {

    



    const cost = service.price.storage.hdd * +storageInput;
    
    
    
    
    if (cost < minCoastService.cost) {
      setMinCoastService({ name: service.name, cost: cost })
    }
    return cost
  }

  const costData = services.map((service) => {
    return (
      {
        name: service.name,
        cost: calculation(service),
      }
    )
  })
  
  return (
    <>
      <MainWrapper>
        <Inputs
          storageInput={storageInput}
          setStorageInput={setStorageInput}
          transferInput={transferInput}
          setTransferInput={setTransferInput}
          setMinCoastService={setMinCoastService}
        />
        <ChartWrapper>
          <Charts minCoastServiceName={minCoastService.name} costData={costData} />
          <CustomAxisIcons />
        </ChartWrapper>
      </MainWrapper>
    </>
  );
}

export default App;
