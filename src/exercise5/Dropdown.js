import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

// Class component
export default class Dropdown extends React.Component {
    static propTypes = {
        header: PropTypes.any.isRequired
    }

    state = { isOpen: false };

    toggleDropdown = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

    render() {
        const { header, children } = this.props;

        return (
            <div className="Dropdown">
                <div className="Dropdown__header" onClick={this.toggleDropdown}>{header}</div>
                {this.state.isOpen && <div className="Dropdown__content">{children}</div>}
            </div>
        )
    }
}

// Functional component w/hooks
// export default function Dropdown({ header, children }) {
//     const [isOpen, toggleDropdown] = useState(false);
//     const onClick = () => toggleDropdown(!isOpen);

//     return (
//         <div className="Dropdown">
//             <div className="Dropdown__header" onClick={onClick}>{header}</div>
//             {isOpen && <div className="Dropdown__content">{children}</div>}
//         </div>
//     );
// }

// Dropdown.propTypes = {
//     header: PropTypes.any.isRequired
// };