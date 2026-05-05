import "./components.css"

export const AlertMessage = ({type, title, message, sub, image, onClose})=> {
return (
    <div className="alert-contianer">
        <div className={`alert-box ${type}`}>
        <div className="img">
            {image && <img src={image} className="alert-img"/>}
        </div>

            <h2>{title}</h2>
            <p>{message}</p>
            {sub && <p className="sub">{sub}</p>}

            <button onClick={onClose}>Close</button>
        </div>

    </div>
   )

}