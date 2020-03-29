

import React, { Component } from 'react';

class FilterBox extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="filtered-items-box clearfix">
                <h2 className="sub-heading">Selected Filters</h2>
                <ul className="filtered-items">
                    <li>
                        <button className="filter-btn">Aamir</button>
                    </li>
                    <li>
                        <button className="filter-btn">Aamir</button>
                    </li>
                    <li>
                        <button className="filter-btn">Aamir</button>
                    </li>
                    <li>
                        <button className="filter-btn">Aamir</button>
                    </li>
                </ul>
            </div>
        );
    }
}

export default FilterBox;