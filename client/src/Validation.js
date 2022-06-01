import React from 'react'

const Validation = (info) => {

    let errors = {};

    if(!info.fullname) {
        errors.fullname = "Name is required";
    }

    if(!info.email) {
        errors.email = "Email is required";
    } else if(!/\S+@\S+\.\S+/.test(info.email)){
        errors.email = "Email is invalid";
    };

    if(!info.number) {
        errors.number = "Number is required";
    } else if(info.number.length < 10) {
        errors.number ="Please enter 10 digit number"
    }

    if(!info.password) {
        errors.password = "Password is required";
    } else if (info.password.length < 8) {
        errors.password = "Password should have atleast 8 characters";
    }

    return errors;
}

export default Validation