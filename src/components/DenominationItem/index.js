import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickValue = () => {
    updateBalance(value)
  }
  return (
    <li className="denomination-list">
      <button type="button" className="btn-styles" onClick={onClickValue}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
