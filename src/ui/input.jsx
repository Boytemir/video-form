

const Input = ({label, state, setState, type='text'}) => {
  return (
    <div className="form-floating">
        <input type={type} className="form-control" id="floatingInput" placeholder={label} value={state} onChange={(e) => setState(e.target.value)} />
        <label for="floatingInput">{label}</label>
    </div>
  )
}

export default Input