import React from 'react';
import Dropdown from './Dropdown';

export default class Exercise5 extends React.Component {
    render() {
        return (
            <div>
                <h2>Exercise 5</h2>
                <p>
                    This exercise will involve adding state to a component. In the file <code>Dropdown.js</code>, there is code that currently displays an open dropdown.
                </p>
                <ol>
                    <li>Import and render the <code>Dropdown</code> in <code>Exercise5.js</code></li>
                    <li>Add a state property called <code>isOpen</code></li>
                    <li>Add a click handler called <code>toggleDropdown</code> that makes the content hide/show on click.</li>
                    <li>Ensure that the corresponding tests pass.</li>
                </ol>
                <Dropdown header="Title">
                    Description
                </Dropdown>
            </div>
        )
    }
}