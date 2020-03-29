

import React, { Component } from 'react';

class SortBox extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="sort-box">
                <select>
                    <option>Ascending</option>
                    <option>Decending</option>
                </select>
            </div>
        );
    }
}

export default SortBox;