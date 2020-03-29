import React, { Component } from 'react';
import FilterCategory from "./FilterCategory";


class Sidebar extends Component {
    constructor() {
        super();
        this.filters = [{

            filterName: "aamir",
            filterKeys: [{
                name: "filter1"
            }, {
                name: "filter1"
            }, {
                name: "filter1"
            }]
        }, {

            filterName: "aamir",
            filterKeys: [{
                name: "filter1"
            }, {
                name: "filter1"
            }, {
                name: "filter1"
            }]
        }, {

            filterName: "aamir",
            filterKeys: [{
                name: "filter1"
            }, {
                name: "filter1"
            }, {
                name: "filter1"
            }]
        }];
    }

    render() {
        return (
            <aside className="sidebar clearfix">
                <h2 className="sub-heading">Filters</h2>
                {
                    this.filters.map((currentFilter, index) => {
                        return <FilterCategory key={index} filter={currentFilter} />
                    })
                }
            </aside>
        );
    }
}
export default Sidebar;  