import { createRoot} from "react-dom/client"
import { AlertMessage } from "./AlertMessage";

import successImg from "../../assets/images/success.jpeg";
import errorImg from "../../assets/images/error.jpeg";
import warnImg from "../../assets/images/warning.jpeg"

let container = null;
let root = null;

const show = (config)=>{

    if(container){
        root.unmount();
        container.remove();
        container = null;
        root = null;
    }

container = document.createElement("div");
document.body.appendChild(container);

root = createRoot(container);

const handleClose = () =>{
    root.unmount();
    container.remove();
    container = null;
    root = null;
}

if(config.duration){
    setTimeout(handleClose, config.duration);
}

root.render(
    <AlertMessage
        {...config}
        onClose={handleClose}
    />
);
};

export const Alert = {
    success: (title, message, opt ={})=>{
        show({
            type: 'success',
            title,
            message,
            image: successImg,
            duration: 1500, 
            ...opt
        });
    },

    error: (title, message, opt ={})=>{
        show({
            type: 'error',
            title,
            message,
            image: errorImg,
            duration: 2500, 
             ...opt
        });
    },

    warning: (title, message, opt = {})=>{
        show({
            type: 'warn',
            title,
            message,
            image: warnImg, 
            duration: 2500,
            ...opt
        });
    }
}