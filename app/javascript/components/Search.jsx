import React from "react";
import { render } from "react-dom";

render() {
    return (
        <div>
            <div className="search-box">
                <form onSubmit={(e) => this.props.handleSearchSubmit(e)}>
                    <input type="text" name="title" placeholder="Search by Title" onChange={this.props.handleInputChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}