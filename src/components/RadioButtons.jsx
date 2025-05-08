import React, { useState } from 'react';

const CircleUnchecked = () => (
  <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15.5" r="14.5" stroke="black" />
  </svg>
);

const CircleChecked = () => (
  <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="15.5" r="14.5" stroke="black" />
    <circle cx="15" cy="15.5" r="10" fill="#3BA5AD" />
  </svg>
);

const VisualRadioButton = ({ checked, label, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        marginRight: 10,
        cursor: 'pointer',
        userSelect: 'none',
        alignSelf: "self-start"
      }}
      role="radio"
      aria-checked={checked}
      tabIndex={0}
      onKeyDown={e => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {checked ? <CircleChecked /> : <CircleUnchecked />}
      <span>{label}</span>
    </div>
  );
};

function RadioButtons({ items }){
  const [selectedIndex, setSelectedIndex] = useState(
    items.findIndex(item => item.checked) >= 0 ? items.findIndex(item => item.checked) : 0
  );

  return (
    <div role="radiogroup" 
      style={{ display: 'flex',
               gap: '20px', 
               display: "flex",
               flexDirection: "column", 
               flexShrink: "0",
               alignItems: "center",
               alignSelf: "self-start", 
               paddingLeft: "10%"
              }}>
      {items.map(({ label }, idx) => (
        <VisualRadioButton
          key={idx}
          checked={selectedIndex === idx}
          label={label}
          onClick={() => setSelectedIndex(idx)}
        />
      ))}
    </div>
  );
};

export default RadioButtons

/*
export default function App() {
  const items = [
    { label: 'Opción 1' },
    { label: 'Opción 2' },
    { label: 'Opción 3' },
    { label: 'Opción 4' },
    { label: 'Opción 5' },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h3>Radiobuttons personalizados con texto</h3>
      <RadioButtonGroup items={items} />
    </div>
  );
}
*/
