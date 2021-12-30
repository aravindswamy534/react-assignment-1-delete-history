import './index.css'

const HistoryComponentSample = props => {
  const {ComponentSample, deleteIn} = props

  const {id, timeAccessed, logoUrl, title, domainUrl} = ComponentSample

  const deleteHistory = () => {
    deleteIn(id)
  }

  return (
    <li className="card-container">
      <p>{timeAccessed}</p>
      <img className="domain-logo" src={logoUrl} alt="domain logo" />
      <p className="domain-title">{title}</p>
      <div className="domain-container">
        <p className="domain-url">{domainUrl}</p>

        <button onClick={deleteHistory} testid="delete" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryComponentSample
