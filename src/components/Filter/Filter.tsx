import './Filter.scss'

function Filter() {
  return (
    <section className="filter">
      <span className="filter__status">10 items left</span>

      <form className="filter__groups" data-testid="filter-groups">
        <label className="filter__radio-container">
          <input
            type="radio"
            className="filter__radio-input"
            value="all"
            name="group"
          />
          <span className="filter__radio-label">All</span>
        </label>
        <label className="filter__radio-container">
          <input
            type="radio"
            className="filter__radio-input"
            value="active"
            name="group"
          />
          <span className="filter__radio-label">Active</span>
        </label>
        <label className="filter__radio-container">
          <input
            type="radio"
            className="filter__radio-input"
            value="completed"
            name="group"
          />
          <span className="filter__radio-label">Completed</span>
        </label>
      </form>

      <button className="filter__delete-button">Clear completed</button>
    </section>
  )
}

export default Filter
