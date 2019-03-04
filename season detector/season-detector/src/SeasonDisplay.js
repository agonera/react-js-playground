import './SeasonDisplay.css';
import React from 'react';


const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Brr, it\'s chilly!',
        iconName: 'snowflake'
    }
};

// determine which season is
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        // return lat > 0 ? 'summer' : 'winter';
        if (lat > 0) {
            return 'summer';
        } else {
            return 'winter';
        }
    } else {
        // return lat > 0 ? 'winter' : 'summer';
        if (lat > 0) {
            return 'winter';
        } else {
            return 'summer';
        }
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <i className={`massive ${iconName} icon`}/>
            <h1>{text}</h1>
        </div>
    );
};

export default SeasonDisplay;