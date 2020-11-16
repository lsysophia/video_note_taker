import React, { useState, useEffect } from "react";
import fetchVideo from '../utility/fetchVideo.js'

const SearchVideo = () => {
    const [searchWord, setSearchWord] = useState()
    // [video, setVideo] = useState({})

    // useEffect(() => {
    //     handleInputChange();
    // })

    function handleSearchSubmit(e) {
        e.preventDefault()
        fetchVideo.get('/search', {
            params: {
                q: searchWord
            }
        })
        console.log(res)
    //     setVideo(res)
    }

    function handleInputChange(e) {
        e.preventDefault()
        // console.log(e)
        setSearchWord(e.currentTarget.value)
    }
    console.log(searchWord)

    return (
        <div>
            <div className="search-box">
                <form className="form-inline" onSubmit={(e) => handleSearchSubmit(e)}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={handleInputChange} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                {/* <form onSubmit={(e) => this.handleSearchSubmit(e)}>
                    <input type="text" name="title" placeholder="Search by Title" onChange={this.props.handleInputChange} />
                    <input type="submit" value="Submit" />
                </form> */}
            </div>
        </div>
    )

}

export default SearchVideo;