import styled from "styled-components";
import {services} from "./mockData";

const XAxisWrap = styled.div`
  width: 350px;
  // height: 100px;
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
`;
const StyledTickWrap = styled.div`
  rotate: -90deg;
`;

// interface CustomAxisIconsProps {
  
// }

const CustomAxisIcons = () => {
  
  return (
    <XAxisWrap>
      {services.map(service => (
        <XAxisItemWrap key={service.id}>
          <StyledImg src={service.icon} width={50} alt="logo" />
          <StyledTickWrap>
            <div>{service.name}</div>
            {((service.price.storage.hdd !== service.price.storage.ssd) ||
              (service.price.transfer.hdd !== service.price.transfer.ssd)) && 
              <div style={{ fontSize: '8px'}}>
                <input checked name="options1" type="radio" id="hdd" />
                <label htmlFor="hdd">HDD</label>
                <input name="options1" type="radio" id="ssd" />
                <label htmlFor="ssd">SSD</label>
              </div>
            }
            {((service.price.storage.multi.multiprice !== service.price.storage.singl.singlprice) ||
              (service.price.transfer.multi.multiprice !== service.price.transfer.singl.singlprice)) && 
              <div style={{ fontSize: '8px'}}>
                <input name="options2" type="radio" id="hdd" />
                <label htmlFor="hdd">multi</label>
                <input checked name="options2" type="radio" id="ssd" />
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