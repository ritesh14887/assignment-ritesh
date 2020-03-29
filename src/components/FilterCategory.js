import React, { Component } from 'react';

class FilterCategory extends Component {
    render(props) {
        return (
            <div className="category-box">
                <h3 className="category-title">{this.props.filter.filterName}</h3>
                <ul className="filter-category">
                    {
                        this.props.filter.filterKeys.map((filterKey, index) => {
                            return (<li key={index}>
                                <label className="custom-checkbox">
                                    <input type="checkbox" />
                                    <span className="icon"></span>
                                    {filterKey.name}
                                </label>
                            </li>);
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default FilterCategory;  