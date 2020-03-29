

import React, { Component } from 'react';

import SearchBox from './SearchBox';
import SortBox from './SortBox';

class SearchBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="search-bar">
                <SearchBox />
                <SortBox />
            </div>
        );
    }
}

export default SearchBar;