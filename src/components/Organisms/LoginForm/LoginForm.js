import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import { ElevatedCard, Logo, Button } from "../../Atoms";
import { useSubmitLoginForm } from "./LoginFormService";
import { ValidateEmail } from "../../../utils";

const ErrorMessage = () => (
    <div style={{ color: "red" }}>This is a required Field</div>
);
export function LoginForm({}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(true);
    const [isEmailInvalid, setIsEmailInvalid] = useState(true);
    const [isFormSubmissionStarted, setIsFormSubmissionStarted] = useState(
        false
    );
    // const [loginError, setLoginError] = useState('');

    const { response, error } = useSubmitLoginForm(
        isFormSubmissionStarted,
        setIsFormSubmissionStarted
    );

    function handleEmailInput(event) {
        const val = event.target.value;
        const isValid = ValidateEmail(val) && val.length > 5;
        if (isValid) {
            setIsEmailInvalid(false);
        } else {
            setIsEmailInvalid(true);
        }
        console.log({ isValid });
        setEmail(val);
    }

    function handlePasswordInput(event) {
        const val = event.target.value;
        if (/[A-Z]/.test(val)) {
            setIsPasswordInvalid(false);
        } else {
            setIsPasswordInvalid(true);
        }
        setPassword(val);
    }

    function handleSubmit() {
        setIsFormSubmissionStarted(true);
    }

    const isSubmitButtonDisabled =
        isFormSubmissionStarted ||
        !email ||
        !password ||
        isEmailInvalid ||
        isPasswordInvalid;

    const errorInputStyle = {
        borderColor: "red",
    };

    return (
        <ElevatedCard style={{}}>
            <Logo />
            <div className='sign-in'>Sign In</div>
            <div style={{ marginTop: 20, marginBottom: 20 }}>
                Use your Healthifyme Account
            </div>
            <div className='Input-container'>
                <input
                    className='input'
                    type='email'
                    value={email}
                    onChange={handleEmailInput}
                    placeholder='Enter you email'
                    style={isEmailInvalid ? errorInputStyle : {}}
                />
                {isEmailInvalid && <ErrorMessage />}
            </div>

            <div className='Input-container'>
                <input
                    className='input'
                    type='password'
                    value={password}
                    onChange={handlePasswordInput}
                    placeholder='Enter you password'
                    style={isPasswordInvalid ? errorInputStyle : {}}
                />
                {isPasswordInvalid && <ErrorMessage />}
            </div>

            <Button
                isDisabled={isSubmitButtonDisabled}
                displayText={isFormSubmissionStarted ? "Submitting" : "Login"}
                handleOnClick={handleSubmit}
            />
            {error && "Unable to Login"}
        </ElevatedCard>
    );
}
