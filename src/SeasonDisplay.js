import React from 'react';

const seasonConfig = {
  summer: {
    displayText: 'Let\'s hit the beach',
    iconName: 'sun'
  },
  winter: {
    displayText: 'Brrr it\'s cold!',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    // terenary expression
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  // removes ternary expressions
  const {displayText, iconName} = seasonConfig[season];

  return (
    <div>
      <i className={`${iconName} icon`}></i>
      <h1>{displayText}</h1>
      <i className={`${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
