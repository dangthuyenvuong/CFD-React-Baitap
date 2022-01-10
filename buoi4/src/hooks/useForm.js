import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const REGEX = {
    email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}

export const useForm = (initValue) => {
    const Navigate = useNavigate();
    let [form,setForm] = useState(initValue);
    let [error,setError] = useState({});
    function _onChange(name) {
        return (e) => {
            setForm({
                ...form,
                [name]: e.currentTarget.checked || e.currentTarget.value
            })
        }
    }
    function validate() {
        // email, useName, password, confirm, select, age, check
        let ob = {};
         Object.keys(form).forEach(name => {
            if(form.confirm && form.confirm != form.password) ob.confirm = 'Không giông password'
            else if(form.age && form.age < 18) ob.age = 'Tuổi dưới 18'

            if(!form[name].trim()) ob[name] = 'Không được để trống'
            else if(REGEX[name] && !REGEX[name].test(form[name])) ob[name] = 'Sai định dạng'
        })
        setError(ob);

        return ob;
    }
    const register = (name) =>{
        return {
            name,
            value:form[name],
            onChange:_onChange(name)
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        let ob = validate();
        if (Object.keys(ob).length == 0) {
            Navigate('/auth')
        } 
    }
    return {
        form,
        error,
        handleSubmit,
        register,
        validate
    }
}
