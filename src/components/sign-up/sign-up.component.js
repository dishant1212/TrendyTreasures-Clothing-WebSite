import "./sign-up.style.scss"
import { useContext, useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import { userContext } from "../../contexts/user.context"


const defaultFormFaild = {
    displayName: "",

    email: "",
    password: "",
    confirmPassword: ""
}

const SignUp = () => {

    const [formFaild, setFormFaild] = useState(defaultFormFaild)
    const { displayName, email, password, confirmPassword } = formFaild

    const { setCurrentUser } = useContext(userContext)

    const resetFormFields = () => {
        setFormFaild(defaultFormFaild)
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFaild({ ...formFaild, [name]: value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }
        try {

            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user)
            await createUserDocumentFromAuth(user, { displayName });

            resetFormFields();

        } catch (error) {
            if (error.code === "auth/email-already-in-use") {
                alert("Cannot create user, email already in use");
            } else {
                console.log("error", error);
            }
        }
    }


    return (
        <div className="signUpContainer">
            <h2 className="signUp-headdingStyle">Don't have an account?</h2>
            <p className="signUp-paraStyle">Sign up with your email and password</p>

            <form onSubmit={handleSubmit}>
                <label >Display Name</label><br />
                <input required type="text" name="displayName" value={displayName} onChange={handleChange} placeholder="Enter display name" /><br />
                <label>Email</label><br />
                <input required type="email" name="email" value={email} onChange={handleChange} placeholder="Enter email" /><br />
                <label>Password</label><br />
                <input required type="password" name="password" value={password} onChange={handleChange} placeholder="Enter password" /><br />
                <label>Confirm Password</label><br />
                <input required type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} placeholder="Enter confirm password" /><br />
                <button className="signUpBtn" type="submit">Submit</button>

            </form>
        </div>
    )
}
export default SignUp;