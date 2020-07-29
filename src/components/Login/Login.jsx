import React from "react";
import style from './Login.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {Input} from "../Common/FormsControls/FormsControls";
import {Redirect} from "react-router-dom";

const maxLength35 = maxLengthCreator(35);

function LoginForm(props) {
    return <form onSubmit={props.handleSubmit}>
        <div className={style.container}>
            <div className={style.field}>
                <label htmlFor={"uname"}><b>Username</b></label>
                <Field component={Input} validate={[requiredField, maxLength35]} type={"text"}
                       placeholder={"Enter Username"} name={"email"} required/>
            </div>
            <div className={style.field}>
                <label htmlFor={"psw"}><b>Password</b></label>
                <Field component={Input} validate={[requiredField, maxLength35]} type={"password"}
                       placeholder={"Enter Password"} name={"password"} required/>
            </div>

            <button type={"submit"}>Login</button>
            {props.error && <div className={style.formSummeryTooltipPosition}>
                {props.error}
            </div>}
            <label>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"}/> Remember me
                <span className={style.psw}> Forgot <a>password?</a></span>
            </label>
        </div>

        <div className={style.container} style={{backgroundColor: "#f1f1f1"}}>

        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

function Login(props) {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth){
        return <Redirect to={"/profile/" + props.userId}/>
    }

    return <div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>

}

export default Login;