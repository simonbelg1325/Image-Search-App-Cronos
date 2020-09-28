import React from "react";
import {Link} from "react-router-dom";
import "./ImageList.css";

const ImageList = (props) =>{
    return(
        <div className="container">
            <div className="row">
            {props.images.map((img) => {
                return (
                    <div key={img.id} className="col-md-4" style={{marginBottom: "2rem"}}>
                        <div className="imageList__container">
                            <img className="imageList__image" src={img.largeImageURL} alt={img.tags}/>
                        </div>
                        <div className="image__details">
                            <Link to={{
                                pathname: `/image/${img.id}`,
                                state : {image: img}
                            }}>
                                <button>View</button>
                            </Link>
                        </div>   
                    </div>
                )
            })}
            </div>
        </div>
    )
};

export default ImageList;