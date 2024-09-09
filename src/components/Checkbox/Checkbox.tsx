import classNames from 'classnames'

import './Checkbox.scss'

interface CheckboxProps {
  className: string
  isChecked: boolean
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Checkbox({ className, isChecked, onChange }: CheckboxProps) {
  return (
    <label className={classNames('checkbox', className)}>
      <input
        type="checkbox"
        className="checkbox__system-checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <span className="checkbox__custom-checkbox"></span>
    </label>
  )
}

export default Checkbox
