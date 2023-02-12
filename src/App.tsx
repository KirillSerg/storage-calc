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
  gap: 20px;

  @media(max-width: 760px) {
    flex-direction: column-reverse;
  }
`;

const ChartWrapper = styled.div`
  rotate: 90deg;
  width: 40vh;

  @media(max-width: 760px) {
    rotate: none;
    width: 60vw;
  }
`;

const App: React.FC = () => {

  const [storageInput, setStorageInput] = useState<string>('');
  const [transferInput, setTransferInput] = useState<string>('');
  const [minCoastService, setMinCoastService] = useState<CostData>({ name: '', cost: +Infinity });
  const [currentTarifOptions, setCurrentTarifOptions] = useState<{ hddSsd: string; multiSingl: string }>({ hddSsd: 'hdd', multiSingl: 'multi' });
  
  const calculation = (service: any) => { 
    let cost = 0;
    let storageCost = 0;
    let transferCost = 0;

    if ((service.price.storage.multi !== service.price.storage.singl) ||
      (service.price.transfer.multi !== service.price.transfer.singl)) {
        const storagePrice = service.price.storage[currentTarifOptions.multiSingl]
        const transferPrice = service.price.transfer[currentTarifOptions.multiSingl]
        
        //bonus storage, free GB
        if (service.price.storage.bonus && service.price.storage.bonus < +storageInput) {
          storageCost = storagePrice * (+storageInput - service.price.storage.bonus)
        } else if (service.price.storage.bonus && service.price.storage.bonus > +storageInput) {
          storageCost = storagePrice * 0;
        } else {
          storageCost = storagePrice * +storageInput
        }
        
        //bonus transfer, free GB
        if (service.price.transfer.bonus && service.price.transfer.bonus < +transferInput) {
          transferCost = transferPrice * (+transferInput - service.price.transfer.bonus)
        } else if (service.price.transfer.bonus && service.price.transfer.bonus > +transferInput) {
          transferCost = transferPrice * 0
        } else {
          transferCost = transferPrice * +transferInput
        }
        
        // min, max
        if (service.price.min && service.price.min > storageCost + transferCost) {
          cost = service.price.min
        } else if (service.price.max && service.price.max < storageCost + transferCost) {
          cost = service.price.max
        } else {
          cost = storageCost + transferCost
        }
    } else if ((service.price.storage.hdd !== service.price.storage.ssd) ||
      (service.price.transfer.hdd !== service.price.transfer.ssd)) {
        const storagePrice = service.price.storage[currentTarifOptions.hddSsd]
        const transferPrice = service.price.transfer[currentTarifOptions.hddSsd]
        
        //bonus storage, free GB
        if (service.price.storage.bonus && service.price.storage.bonus < +storageInput) {
          storageCost = storagePrice * (+storageInput - service.price.storage.bonus)
        }else if (service.price.storage.bonus && service.price.storage.bonus > +storageInput) {
          storageCost = storagePrice * 0
        } else {
          storageCost = storagePrice * +storageInput
        }
        
        //bonus transfer, free GB
        if (service.price.transfer.bonus && service.price.transfer.bonus < +transferInput) {
          transferCost = transferPrice * (+transferInput - service.price.transfer.bonus)
        } else if (service.price.transfer.bonus && service.price.transfer.bonus > +transferInput) {
          transferCost = transferPrice * 0
        } else {
          transferCost = transferPrice * +transferInput
        }
        
        // min, max
        if (service.price.min && service.price.min > storageCost + transferCost) {
          cost = service.price.min
        } else if (service.price.max && service.price.max < storageCost + transferCost) {
          cost = service.price.max
        } else {
          cost = storageCost + transferCost
        }
    } else {
      const storagePrice = service.price.storage.hdd
      const transferPrice = service.price.transfer.hdd
      
      //bonus storage, free GB
      if (service.price.storage.bonus && service.price.storage.bonus < +storageInput) {
        storageCost = storagePrice * (+storageInput - service.price.storage.bonus)
      }else if (service.price.storage.bonus && service.price.storage.bonus > +storageInput) {
        storageCost = storagePrice * 0
      } else {
        storageCost = storagePrice * +storageInput
      }
      
      //bonus transfer, free GB
      if (service.price.transfer.bonus && service.price.transfer.bonus < +transferInput) {
        transferCost = transferPrice * (+transferInput - service.price.transfer.bonus)
      } else if (service.price.transfer.bonus && service.price.transfer.bonus > +transferInput) {
        transferCost = transferPrice * 0
      } else {
        transferCost = transferPrice * +transferInput
      }

      if (service.price.min && service.price.min > storageCost + transferCost) {
        cost = service.price.min
      } else if (service.price.max && service.price.max < storageCost + transferCost) {
        cost = service.price.max
      } else {
        cost = storageCost + transferCost
      }
    }


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
          <CustomAxisIcons setMinCoastService={setMinCoastService} currentTarifOptions={currentTarifOptions} setCurrentTarifOptions={setCurrentTarifOptions} />
        </ChartWrapper>
      </MainWrapper>
    </>
  );
}

export default App;
