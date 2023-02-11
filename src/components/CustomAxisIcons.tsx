import styled from "styled-components";
import { CostData } from "./Charts";
import {services} from "./mockData";

const XAxisWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const XAxisItemWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

const StyledImg = styled.img`
  rotate: -90deg;

  @media(max-width: 760px) {
    rotate: none;
  }
`;
const StyledTickWrap = styled.div`
  rotate: -90deg;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media(max-width: 760px) {
    rotate: none;
  }

  @media(max-width: 420px) {
    rotate: -90deg;
  }
`;

interface CustomAxisIconsProps {
  currentTarifOptions: {
    hddSsd: string;
    multiSingl: string;
  };
  setCurrentTarifOptions: React.Dispatch<React.SetStateAction<{
    hddSsd: string;
    multiSingl: string;
  }>>;
  setMinCoastService: React.Dispatch<React.SetStateAction<CostData>>
}

const CustomAxisIcons: React.FC<CustomAxisIconsProps> = ({currentTarifOptions, setCurrentTarifOptions, setMinCoastService}) => {

  const handlerHddOrSsdSelectedOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinCoastService({name: '', cost: +Infinity})
    setCurrentTarifOptions({hddSsd: e.target.value, multiSingl: currentTarifOptions.multiSingl})
  }
  const handlerMultiOrSinglSelectedOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinCoastService({name: '', cost: +Infinity})
    setCurrentTarifOptions({hddSsd: currentTarifOptions.hddSsd, multiSingl: e.target.value})
  }
  
  return (
    <XAxisWrap>
      {services.map(service => (
        <XAxisItemWrap key={service.id}>
          <StyledImg src={service.icon} width={50} alt="logo" />
          <StyledTickWrap>
            <div>{service.name}</div>
            {((service.price.storage.hdd !== service.price.storage.ssd) ||
              (service.price.transfer.hdd !== service.price.transfer.ssd)) && 
              <div style={{ fontSize: '8px'}} onChange={handlerHddOrSsdSelectedOptions}>
                <input name="options1" defaultChecked type="radio" id="hdd" value='hdd'/>
                <label htmlFor="hdd">HDD</label>
                <input  name="options1" type="radio" id="ssd" value='ssd'/>
                <label htmlFor="ssd">SSD</label>
              </div>
            }
            {((service.price.storage.multi !== service.price.storage.singl) ||
              (service.price.transfer.multi !== service.price.transfer.singl)) && 
              <div style={{ fontSize: '8px'}} onChange={handlerMultiOrSinglSelectedOptions}>
                <input name="options2" defaultChecked type="radio" id="multi" value='multi'/>
                <label htmlFor="hdd">multi</label>
                <input name="options2" type="radio" id="singl" value='singl' />
                <label htmlFor="ssd">singl</label>
              </div>
            }
            

          </StyledTickWrap>
        </XAxisItemWrap>
      ))}
    </XAxisWrap>
  )
}

export default CustomAxisIcons;