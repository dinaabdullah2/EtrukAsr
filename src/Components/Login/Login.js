import React, { useState, useContext } from 'react'
import style from './Login.module.css'
import { AuthContext } from '../../Components/Context/AuthContext'
import Form from 'react-bootstrap/Form';
import { useTranslation } from 'react-i18next';
export default function Login() {
    const [active, setActive] = useState(true)
    const showActive = (role) => {
        role === "volenteer" ? setActive(true) : setActive(false)
    }
    const { t } = useTranslation()

    const authContext = useContext(AuthContext);
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const validPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',

    })

    const { email, password } = formData
    const [formError, setFormError] = useState({})

    const onChangeHandler = e => {

        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)

    }

    function login(e) {
        e.preventDefault();


        if (password === 'basmala123') {
            const token = 'abc';
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            authContext.setAuth({ token, email });
        }

        let err = {}

        if (formData.email === '') {
            err.email = "Email is required";
        } else if (!validEmail.test(email)) {
            err.email = "Invalid Email";
        }
        if (formData.password === '') {
            err.password = "password is required"
        } else if (!validPass.test(password)) {
            err.password = 'Minimum eight characters, at least one letter and one numbe';

        }
        setFormError({ ...err })
    }

    return (
        <>
            <section className={style.logForm}>

                <div className='container'>
                    <div className={style.login}>
                        <h2 className={style.login__title}>{t("?????????? ????????????")}</h2>
                        <hr />
                        <ul className={`${style.userLog__list}`}>
                            <li className={`${style.userLog__item}`} onClick={() => { showActive("volenteer") }} >
                                <button type='button' className={`${active ? style.user__link : style.userLog__link}`} >{t("????????????")}</button>
                            </li>
                            <li className={`${style.userLog__item}  `} onClick={() => { showActive("charity") }} >
                                <button type='button' className={`${active ? style.userLog__link : style.user__link}`} >{t("?????????? ")}</button>
                            </li>
                        </ul>
                        <div className={style.userName}>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control name="email" autoComplete="off" className={`${style.input}`} placeholder={t(" ???????????? ????????????????????")} onChange={onChangeHandler} value={email} />
                                <Form.Text className={`${style.msErr}`}>
                                    {formError.email}
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control name="password" type="password" autoComplete="off" className={`${style.input}`} placeholder={t("???????? ????????????")} onChange={onChangeHandler} value={password} />
                                <Form.Text className={`${style.msErr}`}>
                                    {formError.password}
                                </Form.Text>
                            </Form.Group>
                            <button className={style.log__btn} onClick={login}>{t("?????????? ????????????")}</button>
                        </div>
                        <hr className={style.forgetLine} />
                        <a href='/forget' className={style.log__link}> {t("???? ???????? ???????? ??????????")}</a>
                    </div>
                </div>
            </section>
        </>
    )
}
