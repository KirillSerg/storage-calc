interface InputsProps {
  storageInput: string;
  setStorageInput: React.Dispatch<React.SetStateAction<string>>;
  transferInput: string;
  setTransferInput: React.Dispatch<React.SetStateAction<string>>;
}

const Inputs: React.FC<InputsProps> = ({storageInput, setStorageInput, transferInput, setTransferInput}) => {

  return (
    <div style={{ display: "flex", gap:"5rem"}}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label >{`Storage: ${storageInput}`}</label>
        <input onChange={(e)=>setStorageInput(e.target.value)} style={{ width: "200px" }} type="range" max={1000} list="storage" />
        <datalist id="storage" style={{display: "flex", width: "200px", justifyContent: "space-between"}}>
          <option value="0" label="0"/>
          <option value="1000" label="1000"/>
        </datalist>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label >{`Transfer: ${transferInput}`}</label>
        <input onChange={(e)=>setTransferInput(e.target.value)} style={{ width: "200px" }} type="range" max={1000} list="transfer" />
        <datalist id="transfer" style={{display: "flex", width: "200px", justifyContent: "space-between"}}>
          <option value="0" label="0"/>
          <option value="1000" label="1000"/>
        </datalist>
      </div>
    </div>
  )
}

export default Inputs;