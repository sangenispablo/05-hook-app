import {useState} from "react";

export const useForm = (inialState = {}) => {

    const [values, setValues] = useState(inialState);

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value,
        })
    }

    return [values, handleInputChange];

}