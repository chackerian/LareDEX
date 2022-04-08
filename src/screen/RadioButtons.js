import './radio.scss'

export default function RadioButtons() {

  return (
  <div>
    <label className="container">One Time Purchase
      <input type="radio" name="radio" />
      <span className="checkmark"></span>
    </label>
    <label className="container">Monthly
      <input type="radio" name="radio" />
      <span className="checkmark"></span>
    </label>
    <label className="container">Bi-Weekly
      <input type="radio" name="radio" />
      <span className="checkmark"></span>
    </label>
    <label className="container">Weekly
      <input type="radio" name="radio" />
      <span className="checkmark"></span>
    </label>
    <label className="container">Daily
      <input type="radio" checked="checked" name="radio" />
      <span className="checkmark"></span>
    </label>
  </div>
  )
}