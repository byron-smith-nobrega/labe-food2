import React, { useState } from "react";
import { Header } from '../../components/Header/Header'
import { Email } from "../../components/Inputs/Email";
import { Name } from "../../components/Inputs/Name";
import { CPF } from "../../components/Inputs/CPF";
import { EditNameStyle } from "./style";
import { Button } from "../../components/Button/Button";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";
import { goToProfilePage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { validateCPF, validateEmail, validateName } from "../../constants/constants";
import useProtectedPage from "../../hooks/useProtectedPage";

const EditNamePage = () => {

    useProtectedPage()

    const navigate = useNavigate()

    const [form, onChange] = useForm({
        name: JSON.parse(localStorage.getItem("name")),
        email: JSON.parse(localStorage.getItem("email")),
        cpf: JSON.parse(localStorage.getItem("cpf"))
    })

    const [isValid, setIsValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isCPFValid, setIsCPFValid] = useState(true)
    const [isNameValid, setIsNameValid] = useState(true)
    const [errorText, setErrorText] = useState(undefined)

    const EditProfile = () => {
        axios.put(`${BASE_URL}/profile`, form, {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
            .then((response) => {
                goToProfilePage(navigate)
            })
            .catch((error) => {
                setErrorText(error.response.data.message)
                setIsValid(false)
            })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setIsEmailValid(validateEmail(form.email))
        setIsCPFValid(validateCPF(form.cpf))
        setIsNameValid(validateName(form.name))
        isEmailValid && isCPFValid && isNameValid && EditProfile()
    }
    return (
        <>
            <Header showArrow={'true'} showTitle={'true'} title={'Editar'} />
            <EditNameStyle>
                {isValid ?

                    <form onSubmit={onSubmit}>
                        <Name name="name" value={form.name} onChange={onChange} color="#B8B8B8" isValid={isNameValid} />
                        <Email name="email" value={form.email} onChange={onChange} color="#B8B8B8" isValid={isEmailValid} />
                        <CPF name="cpf" value={form.cpf} onChange={onChange} color="#B8B8B8" isValid={isCPFValid} />
                        <Button type="submit" color="#5CB646" buttonTitle="SALVAR" />
                    </form>

                    :

                    <form onSubmit={onSubmit}>
                        <Name name="name" value={form.name} onChange={onChange} color="#e02020" isValid={isNameValid} />
                        <Email name="email" value={form.email} onChange={onChange} color="#e02020" isValid={isEmailValid} />
                        <CPF name="cpf" value={form.cpf} onChange={onChange} color="#e02020" isValid={isCPFValid} />
                        {isEmailValid && isCPFValid && isNameValid ? <p>{errorText}.</p> : undefined}
                        <Button type="submit" color="#5CB646" buttonTitle="SALVAR" />
                    </form>}
            </EditNameStyle>
        </>
    )
}

export default EditNamePage;