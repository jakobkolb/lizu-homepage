import Switch from '@material-ui/core/Switch'

import styles from 'src/assets/jss/nextjs-material-kit/components/headerLinksStyle.js'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(styles)

const Switcher = ({ active, onChange }) => {
  const { navSwitch } = useStyles()
  return (
    <div>
      🔆
      <Switch
        className={navSwitch}
        checked={active}
        onChange={onChange}
        color="default"
      />
      🌙
    </div>
  )
}

export default Switcher
