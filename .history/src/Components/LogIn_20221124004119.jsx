import React from 'react';

const LogIn = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const { signIn,
        signinGoogle,
    } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                swal('User Logged In');
                navigate(from, { replace: true });
                form.reset();
                setError('');
            })

            .catch(error => {
                console.log(error)
                setError(error.message)
            })

    }

    const handleGoogleSignIn = () => {
        signinGoogle()
            .then(result => {
                console.log(result.user);
                swal('Google Log in Succeessful')
                navigate(from, { replace: true });
            })
            .catch((error) => {
                swal(error.message)
            })
    }
    return (
        <div>
            <h1>hi</h1>
        </div>
    );
};

export default LogIn;