import React from "react";
import fetchVideo from '../utility/fetchVideo.js'

const SearchVideo = (title) => {
    [video, setVideo] = useState({})

    function handleSearchSubmit(e) {
        e.preventDefault()
        fetchVideo.get('/search', {
            params: {
                q: e
            }
        })
        setVideos(res)
    }

    return (
        <div>
            <div className="search-box">
                <form onSubmit={(e) => this.handleSearchSubmit(e)}>
                    <input type="text" name="title" placeholder="Search by Title" onChange={this.props.handleInputChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )

}

// import React from "react";
// import { MDBCol } from "mdbreact";

// const SearchPage = () => {
//   return (
//     <MDBCol md="6">
//       <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
//     </MDBCol>
//   );
// }

export default SearchPage;