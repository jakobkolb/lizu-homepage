import Switch from '@material-ui/core/Switch'

const Switcher = ({ active, onChange }) => {
  return (
    <div>
      🔆
      <Switch checked={active} onChange={onChange} color="default" />
      🌙
    </div>
  )
}

export default Switcher
