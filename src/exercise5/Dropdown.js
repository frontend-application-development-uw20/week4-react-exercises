import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';

export default class Dropdown extends React.Component {
    static propTypes = {
        header: PropTypes.any.isRequired
    }

    render() {
        const { header, children } = this.props;

        return (
            <div className="Dropdown">
                <div className="Dropdown__header">{header}</div>
                <div className="Dropdown__content">{children}</div>
            </div>
        )
    }
}