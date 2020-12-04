import React, {useState, useEffect} from "react"
import styling from "./styling.css"
const MovingImages = () => {
    const [images, setImages] = useState("./photo1.jpg")
   
    useEffect(() => {
        
    const changeImages = () => {
         let allImages = ["./photo1.jpg","./photo2.jpg","./photo3.jpg","./photo4.jpg","./photo5.jpg","./photo6.jpg","./photo7.jpg"]
        let count = 0;
         setInterval(()=> {
            console.log(count)
            if (count == 6) {
                count = -1
            }
            count+=1
            setImages(allImages[count])
        }, 5000)
         
    }
    changeImages()
    }, []);

   
    return (
        <>
            <div className="emptyPhone" style={{backgroundImage:"url('./emptyPhone.png')"}}>

                {/* <img className="emptyPhone" src="./emptyPhone.png"></img> */}
                <div className="logoPhotoContainer">
                    <img className="logoPhoto" src="./rightHereLogo.png"></img>
                    <img className="cameraPhoto" src="./camera.png"></img>

                </div>
                <div className="individualPhotoContainer">
                    
                    <img className="individualPhoto" src={images}></img>
                </div>
                
            </div>
        </>)
}


export default MovingImages