import React, {useState, useContext} from "react"
import {Context} from "../Context"

function Image({className, img}) {
    const [hovered, setHovered] = useState(false);
    const {toggleFavorite} = useContext(Context)

    function heartIcon() {
        if(img.isFavorite) {
            return  <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite"  onClick={() => toggleFavorite(img.id)}></i>;
        }
    }
    const plusIcon = hovered && <i className="ri-add-circle-line cart"></i>;


    return (
        <div 
            className={`${className} image-container`} 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >

            {heartIcon()}
            {plusIcon}
            <img src={img.url} className="image-grid" alt=""/>

        </div>
    )
}

export default Image
