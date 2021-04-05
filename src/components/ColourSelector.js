import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  console.log("--------",config);
  const { background } = config;
  return (
    <button style = {{backgroundColor : config.background}} className={background.className} onClick={() => selectNextBackground({background})}>
      {console.log("inside button",background)}
      {background.label}
    </button>
  )
}
export default ColourSelector;
