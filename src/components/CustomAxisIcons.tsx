import styled from "styled-components";
import {services} from "./mockData";

const XAxisWrap = styled.div`
  width: 350px;
  // height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
        <div key={service.id} >
          <StyledImg src={service.icon} width={50} alt="logo" />
          <StyledTickWrap>
            <div>{service.name}</div>
            <div style={{ fontSize: '8px'}}>
              <input type="checkbox" id="hdd" />
              <label htmlFor="hdd">HDD</label>
              <input type="checkbox" id="ssd" />
              <label htmlFor="ssd">SSD</label>
            </div>
          </StyledTickWrap>
        </div>
      ))}
    </XAxisWrap>
  )
}

export default CustomAxisIcons;