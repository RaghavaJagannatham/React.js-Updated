import React, { useState } from 'react'

const UseStateExample = () => {

    const [showdata,setshowdata] = useState(false);

    const datashow = () => {
      setshowdata(!showdata); 
    }

  return (
    <div>
        <button onClick={datashow}>{showdata ? "hide" : "show "}</button>
        {showdata && (
            <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem quam, enim doloremque suscipit corrupti dolores vero sed molestiae blanditiis vitae, neque soluta atque dicta ad laboriosam quis ab. Id.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, iure hic earum dignissimos unde aut facilis sapiente obcaecati eum libero reiciendis eos ad ipsam corrupti ex soluta. Quaerat, nemo odit.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium distinctio sequi maiores sed animi asperiores ipsum et. Praesentium doloremque enim delectus dignissimos aut iste nisi magni, sunt vero repellendus quod?
        </div> 
        )}
    </div>
  )
}

export default UseStateExample;