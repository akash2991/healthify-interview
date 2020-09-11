import { useState, useEffect } from "react";

export function useSubmitLoginForm(
    isFormSubmissionStarted,
    setIsFormSubmissionStarted
) {
    const [response, setResponse] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        async function submitForm() {
            try {
                const res = await fetch(
                    "http://www.mocky.io/v2/5d9d9219310000153650e30b"
                );
                // throw new Error()
                const parsedRes = await res.json();
                setResponse(parsedRes);
                setIsFormSubmissionStarted(false);
            } catch (error) {
                setError(error);
            }
        }

        isFormSubmissionStarted && submitForm();
    }, [isFormSubmissionStarted]);

    return {
        response,
        error,
    };
}
