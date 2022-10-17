import React, { useEffect, useState } from "react";
import { Email } from "../../components/Inputs/Email";
import { Password } from "../../components/Inputs/Password";
import { Button } from "../../components/Button/Button";
import logo from '../../images/logo.png';
import logoblack from '../../images/logo-black.png';
import { LoadingButtonLogin, LoginPageLoading, LoginPageStyle, TextContainer } from "./style";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToAddAddressPage } from "../../routes/coordinator";
import axios from "axios";
import { BASE_URL } from "../../constants/constants";
import { validateEmail, validatePassword } from "../../constants/constants";

const LoginPage = () => {

    const [loading, setLoading] = useState(true)
    const [isValid, setIsValid] = useState(true)
    const [isEmailValid, setIsEmailValid] = useState(true)
    const [isPasswordValid, setIsPasswordValid] = useState(true)
    const [loadingLogin, setLoadingLogin] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const [form, onChange] = useForm({
        email: "",
        password: ""
    })

    const Login = () => {
        axios.post(`${BASE_URL}/login`, form)
        .then((response) => {
            setLoadingLogin(false)
            setIsValid(true)
            localStorage.getItem("ProductCart")===null && localStorage.setItem("ProductCart", JSON.stringify([]))
            localStorage.setItem("token", response.data.token)
            response.data.user.hasAddress ? goToFeedPage(navigate) : goToAddAddressPage(navigate)
        })
        .catch(() => {
            setLoadingLogin(false)
            setIsValid(false)
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setLoadingLogin(true)
        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password))
        isEmailValid && isPasswordValid && Login()
    }

    return (

        <>
        {loading ? 

            <LoginPageLoading>
                <img src={logoblack} alt ="Future Eats"/>
            </LoginPageLoading>

            :

            <LoginPageStyle>
                <img src={logo} alt="Future Eats"/>
                <TextContainer>
                    <p>Entrar</p>
                </TextContainer>

                {isValid ? 

                <form onSubmit={onSubmit}>
                    <Email value={form.email} onChange={onChange} name="email" color="#B8B8B8" isValid={isEmailValid}/>
                    <Password value={form.password} onChange={onChange} name="password" label="Senha*" placeholder="Mínimo 6 caracteres" color="#B8B8B8" isValid={isPasswordValid} errorMessage="A senha deve possuir no mínimo 6 caracteres."/>
                    {loadingLogin ? <Button color={'#5cb646'} buttonTitle={<LoadingButtonLogin> </LoadingButtonLogin>} /> : <Button color={'#5cb646'} buttonTitle="Entrar" />}
                </form>

                :

                <form onSubmit={onSubmit}>
                    <Email value={form.email} onChange={onChange} name="email" color="#e02020" isValid={isEmailValid}/>
                    <Password value={form.password} onChange={onChange} name="password" label="Senha*" placeholder="Mínimo 6 caracteres" color="#e02020" isValid={isPasswordValid} errorMessage="A senha deve possuir no mínimo 6 caracteres."/>
                    {isEmailValid && isPasswordValid ? <p> E-mail e/ou senha incorretos. Tente novamente. </p> : undefined}
                    {loadingLogin ? <Button color={'#5cb646'} buttonTitle={<LoadingButtonLogin> </LoadingButtonLogin>} /> : <Button color={'#5cb646'} buttonTitle="Entrar" />}
                </form>
                
                }

                <TextContainer>
                   <Link to="/cadastro"> <p>Não possui cadastro? Clique aqui.</p> </Link>
                </TextContainer>
            </LoginPageStyle>
        }
        </>

    )
}

export default LoginPage;