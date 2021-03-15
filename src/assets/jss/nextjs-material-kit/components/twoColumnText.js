const twoColumnText = {
  '@media (min-width: 1200px)': {
    columnGap: '30px',
    webkitColumnCount: 4,
    mozColumnCount: 4,
    columnCount: 4,
    webkitColumnCap: '3em',
    mozColumnCap: '3em',
    columnCap: '3em',
    textAlign: 'justify'
  },

  '@media (min-width: 800px) and (max-width: 1200px)': {
    columnGap: '30px',
    webkitColumnCount: 2,
    mozColumnCount: 2,
    columnCount: 2,
    webkitColumnCap: '3em',
    mozColumnCap: '3em',
    columnCap: '3em',
    textAlign: 'justify'
  },

  '@media (max-width: 800px)': {
    webkitColumnCount: 1,
    mozColumnCount: 1,
    columnCount: 1,
    webkitColumnCap: '3em',
    mozColumnCap: '3em',
    columnCap: '3em',
    textAlign: 'justify'
  }
}
export default twoColumnText
