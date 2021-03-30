import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button className={background.className} onClick={() => selectNextBackground({background: background})}>
      {background.label}
    </button>
  )
}
export default ColourSelector;
