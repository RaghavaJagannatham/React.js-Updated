import React from "react";

let imageUrl = "https://image.cnbcfm.com/api/v1/image/105828186-1554212544565avengers-endgame-poster-og-social-crop.jpg?v=1555618903&w=1920&h=1080";
let title = "Avengers";
let description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam corrupti modi veniam quaerat ipsam porro eaque tempora dolore error totam expedita, unde nisi delectus. Fuga accusamus vero perspiciatis doloribus et.";
const Component = (props) =>{
    return (
        <>
            <div className="component">
                <img id="image" src={imageUrl} alt="text instead of "/>
                <h4> {title} </h4>
                <p> {description} </p>

            </div>
        </>
    );
}

export default Component;