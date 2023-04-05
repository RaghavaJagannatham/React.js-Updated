import './App.css';
import Component from './Component';
import movies from './object';



const MovieTile = (props) => {
    return (
        <>
            <div className='components_folder'>
                <Component />
                {movies.map((eachobj, index) => { //for loop in objects
                    console.log(eachobj);
                    return (
                        <>
                            <div className="component" key={index} >
                                <img id="image" src={eachobj.Poster} alt="text instead of "/>
                                <h4>{eachobj.Title}</h4>
                                <p>{eachobj.Plot}</p>
                                <p>{eachobj.Year}</p>
                                <p>{eachobj.Released}</p>
                                <p>{eachobj.Director}</p>
                
                            </div>
                        </>
                    )   
                })}
                
            </div>
        </>
        
      );

}
function FullName(){
  return (
    <>
        <MovieTile/>
    </>
    
  );
  
};

export default FullName;