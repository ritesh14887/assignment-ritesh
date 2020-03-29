

import React, { Component } from 'react';

class SearchBox extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="search-wrap">
                <h3 className="form-legend">Search By name</h3>
                <form className="search-box">
                    <input type="search" />
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

export default SearchBox;