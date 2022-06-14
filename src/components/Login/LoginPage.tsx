import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string,
    password: string,
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={"input"} name={"login"} placeholder={"login"}/>
                <Field component={"input"} name={"password"} placeholder={"password"}/>
                <Field type={"checkbox"} component={"input"} name={"rememberME"} placeholder={"remember"}/>
                <button>Login</button>
            </form>
        </div>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

export const LoginPage = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log("form data", formData)
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}