import { CostData } from "./Charts";

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
    <div style={{ display: "flex", gap:"5rem"}}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label >{`Storage: ${storageInput}`}</label>
        <input onChange={handelSetStorageInput} style={{ width: "200px" }} type="range" max={1000} list="storage" />
        <datalist id="storage" style={{display: "flex", width: "200px", justifyContent: "space-between"}}>
          <option value="0" label="0"/>
          <option value="1000" label="1000"/>
        </datalist>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label >{`Transfer: ${transferInput}`}</label>
        <input onChange={handelSetTransferInput} style={{ width: "200px" }} type="range" max={1000} list="transfer" />
        <datalist id="transfer" style={{display: "flex", width: "200px", justifyContent: "space-between"}}>
          <option value="0" label="0"/>
          <option value="1000" label="1000"/>
        </datalist>
      </div>
    </div>
  )
}

export default Inputs;