import { registrationThunk } from 'Redux/Auth/authOperations';
import { Button, StyledForm, StyledInput, StyledTitle } from 'components/addForm/AddForm.styled';
import { useDispatch } from 'react-redux'

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
		e.preventDefault()
		const form = e.target
		const name = form.name.value
		const email = form.email.value
		const password = form.password.value
		dispatch(registrationThunk ({ name, email, password }))
	}
    return <div>
      <StyledTitle >Registration form </StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
					<StyledInput
					name='name'
					type='text'
					placeholder='Name...'
				/>
				<StyledInput
					name='email'
					autoComplete='off'
					type='text'
					placeholder='Email...'
				/>
				<StyledInput
					name='password'
					type='password'
					placeholder='Password...'
				/>
				<Button>SignUP</Button>

			</StyledForm>
    </div>;
  };