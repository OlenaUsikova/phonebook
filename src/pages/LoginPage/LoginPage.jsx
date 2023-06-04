import { loginThunk } from "Redux/Auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {selectUserLoading} from "../../Redux/Contacts/selectors"
import { Button, StyledForm, StyledInput, StyledTitle } from "components/addForm/AddForm.styled";

export const LoginPage = () => {
  const navigate = useNavigate()
	const dispatch = useDispatch()
	const isLoadingUser = useSelector(selectUserLoading)
	const handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		const email = form.email.value
		const password = form.password.value
		dispatch(loginThunk({ email, password }))
			.then(() => navigate('/contacts'))
			.catch(() => alert('Try again'))
		form.reset()
	}
	if (isLoadingUser) {
		return (
			<div >
				<h1 >Loading...</h1>
			</div>
		)
	}
	return (
		<div >
			<StyledTitle>Login Form</StyledTitle>
			<StyledForm	onSubmit={handleSubmit}>
				<StyledInput
					name='email'
					placeholder='Email...'
					type='text'
				/>
				<StyledInput
					name='password'
					placeholder='Password...'
					type='password'
				/>
				<Button>Login</Button>
			</StyledForm>
		</div>
	)
  };