/* 
Validation rules to implement front / back:
email - length < 40, valid email
password - 6 < length < 20, at least one digit, one uppercase char, one special char
names - 2 < length < 20;
*/

export const nameValidation = (candidateNames, name="name") => {
    return ( 
        candidateNames.length >= 2 
        ?   candidateNames.length <= 20 
            ?   false
            :   `${name} must be at most 20 character long`
        :   `${name} must be at least 2 character long`
    );
};

// regex credits to: Poul Bak [STACK OVERFLOW]
export const emailValidation = (emailCandidate) => {
    return  emailCandidate.length <= 40 
            ?   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailCandidate)
                ?   false
                :   "please insert a valid email"
            :   "email must be at most 40 character long"
};

// regex credits to: Tim Pietzcker [STACK OVERFLOW]
export const passwordValidation = (passwordCandidate) => {
    return (
        passwordCandidate.length >= 6 
        ?   passwordCandidate.length <= 20 
            ?   /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/.test(passwordCandidate)
                ?   false
                :   "password must contain at least one digit, one uppercase character, one special character"
            : "password must be at most 20 character long"
        :   "password must be at least 6 character long"
        )
};

export const passwordBisValidation = (passwordOne, passwordTwo) => {
    return (
        passwordOne === passwordTwo 
            ?   false
            :   "password must match"
    );
};