const cardStyle = {
  card: {
    border: '0',
    marginBottom: '30px',
    marginTop: '30px',
    borderRadius: '6px',
    color: 'var(--color-primary)',
    background: 'var(--color-foreground)',
    width: '100%',
    boxShadow:
      '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '0',
    wordWrap: 'break-word',
    fontSize: '.875rem',
    transition: 'all 300ms linear',
    '&:hover': {
      cursor: 'pointer',
      boxShadow:
        '0 6px 6px 0 rgba(0, 0, 0, 0.14), 0 4px 2px -2px rgba(0, 0, 0, 0.2), 0 2px 8px 0 rgba(0, 0, 0, 0.12)'
    }
  },
  cardPlain: {
    background: 'transparent',
    boxShadow: 'none'
  },
  cardCarousel: {
    overflow: 'hidden'
  }
}

export default cardStyle
