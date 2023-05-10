import React, { useState } from "react";

function AddDoctor(){
    const user = JSON.parse(localStorage.getItem("user"));
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [discription, setDiscription] = useState("");
    const [image, setImage] = useState("");
    const [speciality, setSpeciality] = useState("");
    const [nameError, setNameError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [discriptionError, setDiscriptionError] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [specialityError, setSpecialityError] = useState(false);

    const restValue = () => {
        setName("");
        setCity("");
        setDiscription("");
        setImage("");
        setSpeciality("");
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let errors = false;

        if(name === ""){
            setNameError(true);
            errors = true;
        }else{
            setNameError(false);
        }

        if(city === ""){
            setCityError(true);
            errors = true;
        }else{
            setCityError(false);
        }

        if(discription === ""){
            setDiscriptionError(true);
            errors = true;
        }else{
            setDiscriptionError(false);
        }

        if(image === ""){
            setImageError(true);
            errors = true;
        }else{
            setImageError(false);
        }

        if(speciality === ""){
            setSpecialityError(true);
            errors = true;
        }else{
            setSpecialityError(false);
        }

        
    }

    
}