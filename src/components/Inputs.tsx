import styled from "styled-components";
import { CostData } from "./Charts";

const InputWrapper = styled.div`
  display: flex;
  gap:5rem;
  margin-top: 30px;
`;

const InputCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 200px;
`;
const StyledDatalist = styled.datalist`
  width: 200px;
  display: flex;
  justify-content: space-between;
`;

interface InputsProps {
  storageInput: string;
  setStorageInput: React.Dispatch<React.SetStateAction<string>>;
  transferInput: string;
  setTransferInput: React.Dispatch<React.SetStateAction<string>>;
  setMinCoastService: React.Dispatch<React.SetStateAction<CostData>>
}

const Inputs: React.FC<InputsProps> = ({storageInput, setStorageInput, transferInput, setTransferInput, setMinCoastService}) => {

  const handelSetStorageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinCoastService({name: '', cost: +Infinity})
    setStorageInput(e.target.value)
  }

  const handelSetTransferInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinCoastService({name: '', cost: +Infinity})
    setTransferInput(e.target.value)
  }


  return (
    <InputWrapper>
      <InputCategoryWrapper>
        <label >{`Storage: ${storageInput}`}</label>
        <StyledInput onChange={handelSetStorageInput} type="range" max={1000} list="storage" />
        <StyledDatalist id="storage">
          <option value="0" label="0"/>
          <option value="1000" label="1000"/>
        </StyledDatalist>
      </InputCategoryWrapper>
      <InputCategoryWrapper>
        <label >{`Transfer: ${transferInput}`}</label>
        <StyledInput onChange={handelSetTransferInput} type="range" max={1000} list="transfer" />
        <StyledDatalist id="transfer">
          <option value="0" label="0"/>
          <option value="1000" label="1000"/>
        </StyledDatalist>
      </InputCategoryWrapper>
    </InputWrapper>
  )
}

export default Inputs;