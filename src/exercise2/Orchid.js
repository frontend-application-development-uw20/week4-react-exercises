import React from 'react';
import PropTypes from 'prop-types';
import './Orchid.css';

// Here's a URL to get you started
const orchidImageUrl = 'https://upload.wikimedia.org/wikipedia/commons/d/df/Orchid_high_resolution.jpg';

// Class component
export default class Orchid extends React.Component {
    static propTypes = {
        borderColor: PropTypes.string
    }

    render() {
        const { borderColor } = this.props;
        return (
            <img
                className="Orchid"
                src={orchidImageUrl}
                style={{border: `3px solid ${borderColor}`}}
                alt="Orchid" 
            />
        );
    }
}

// // Functional component
// export default function Orchid({ borderColor }) {
//     return (
//         <img
//             className="Orchid"
//             src={orchidImageUrl}
//             style={{border: `3px solid ${borderColor}`}}
//             alt="Orchid" 
//         />
//     );
// }

// Orchid.propTypes = {
//     borderColor: PropTypes.string
// };
