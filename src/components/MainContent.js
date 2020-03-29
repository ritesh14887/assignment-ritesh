

import React, { Component } from 'react';
import FilterBox from "./FilterBox";
import SearchBar from "./SearchBar";
import CharactersList from "./CharactersList";

class MainContent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="content">
                <FilterBox />
                <SearchBar />
                <CharactersList />
                
            </div>
        );
    }
}

export default MainContent;