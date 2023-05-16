import { FC } from 'react';

const DarkLayout : FC = (children) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: '10px',
        borderRadius: '5px',
    }}>
        <h3>Dark Layout</h3>
        {children}
    </div>
  )
}

export default DarkLayout