import {toast} from 'react-hot-toast';


// Validate login page username

const userNamerValidate = (values) =>{
    const errors = userNamerVerify({},values);
    return errors;
}

export default userNamerValidate

/* userName validate */ 

function userNamerVerify(error={},values){
    if(!values.username){
        error.username = toast.error("Username Required...!")
    }else if(values.username.includes(" ")){
        error.username = toast.error("Invalid Username...!")
    }
    return error;
}