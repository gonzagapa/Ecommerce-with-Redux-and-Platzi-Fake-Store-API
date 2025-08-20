import { useState, type ChangeEvent } from "react";

export function useForm<FormValues> (initialForm:FormValues){

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    return {
        ...formState,
        onInputChange
    }
}