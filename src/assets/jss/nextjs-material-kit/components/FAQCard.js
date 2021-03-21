import {title} from "src/assets/jss/nextjs-material-kit.js";
import cardHeaderStyle from "src/assets/jss/nextjs-material-kit/components/cardHeaderStyle"



const FAQStyle = {
    title,
    ...cardHeaderStyle,
    description: {
        color: 'var(--text-color)',
        fontSize: 'var(--text-size)',
    },
    subtitle: {
        color: 'var(--text-color)',
        fontSize: '24px',
    },
}

export default FAQStyle