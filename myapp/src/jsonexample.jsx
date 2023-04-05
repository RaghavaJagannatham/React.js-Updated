import './App.css';
import images from "./objectsjson"


const JsonImages = () => {
    return(
        <section>
            <div className='components_folder'>
                {images.map((eachobj) => { //for loop in objects
                const {id, url, title, thumbnailUrl} = eachobj;
                    return (
                        
                        <Profile 
                         key={id}
                         imgUrl = {url}
                         imgtitle = {title}
                         imgthumbnail = {thumbnailUrl}
                        />
                            
                    )   
                })}
                
            </div>
        
        </section>

    )
}
const Profile = (props) =>{
    return (
        <>
            <div className="component">
                <img id="image" src={props.imgUrl} alt="text instead of "/>
                <h4> {props.imgtitle} </h4>
                <p> {props.imgthumbnail} </p>

            </div>
        </>
    );
}

export default JsonImages;