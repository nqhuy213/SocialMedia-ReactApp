import React, {useState} from 'react';
import './RegisterForm.scss';
import {
  Segment,
  Divider,
  Grid,
  Form,
  Radio,
  Button,
  Label,
  Message,
} from 'semantic-ui-react';
import {register} from '../../../api/auth';

export default function RegisterForm({closeRegisterForm}) {
  const [registerEntries, setRegisterEntries] = useState({
    lastName: '',
    firstName: '',
    email: '',
    password: '',
    day: 'Day',
    month: 'Month',
    year: 'Year',
    gender: 'male',
  });

  const [errors, setErrors] = useState({});

  const handleOnChange = (e) => {
    const name = e.target.name;
    setRegisterEntries({...registerEntries, [name]: e.target.value});
  };

  const handleGenderChange = (e, {value}) => {
    setRegisterEntries({...registerEntries, gender: value});
  };

  const allExisted = () => {
    var result = true
    setErrors({})
    if (registerEntries.lastName.trim() === ''){
      setErrors((errors) => ({
        ...errors,
        lastName: true,
      }));
      result = false
    }
      
    if (registerEntries.firstName.trim() === ''){
      setErrors((errors) => ({
        ...errors,
        firstName: true,
      }));
      result = false
    }

    if (registerEntries.email.trim() === ''){
      setErrors((errors) => ({
        ...errors,
        email: true,
      }));
      result = false
    }
    if (registerEntries.password.trim() === ''){
      setErrors((errors) => ({
        ...errors,
        password: true,
      }));
      result = false
    }
    return result
  }



  const handleOnSubmit = async (e) => {
    const {lastName, firstName, email, password, day, month, year, gender} = registerEntries
    const dobString = `${month}/${day}/${year}`
    var dt = Date.parse(dobString)
    var dob;
    if(!allExisted()){
      setErrors(errors => ({...errors, global:'Please fill in all the fields'}))
    }
    else if (!dt) {
      console.log(dobString);
      console.log(dt);
      setErrors(errors => ({...errors, global:'Date of birth must a valid date'}))
    }else{
      dob = new Date(dt)
      var body = {
        lastName, firstName, email, password, dateOfBirth: dob, gender
      }
      const result = await register(body)
      if(result.success){
        closeRegisterForm()
        
      }else{
        setErrors({...errors, global: result.message})
      }
    }
  };

  return (
    <Segment className="form-container">
      <h1 className="title">Register</h1>
      <p className="subtitle">Quick and easy</p>
      <Divider />
      <Form onSubmit={handleOnSubmit} error={errors.global ? true : false}>
        {errors.global && <Message error header={errors.global} />}
        <Grid>
          <Grid.Row columns={2} className="grid-row">
            <Grid.Column>
              <Form.Input
                error={errors.lastName}
                placeholder="Last Name"
                className="register-entry"
                name="lastName"
                onChange={handleOnChange}
                value={registerEntries.lastName}
              />
            </Grid.Column>
            <Grid.Column>
              <Form.Input
                error={errors.firstName}
                placeholder="First Name"
                className="register-entry"
                value={registerEntries.firstName}
                name="firstName"
                onChange={handleOnChange}
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={1} className="grid-row">
            <Grid.Column>
              <Form.Input
                error={errors.email}
                placeholder="Email"
                className="register-entry"
                name="email"
                type="email"
                onChange={handleOnChange}
                value={registerEntries.email}
              />
              <Form.Input
                error={errors.password}
                placeholder="Password"
                className="register-entry"
                value={registerEntries.password}
                name="password"
                type="password"
                onChange={handleOnChange}
              />
            </Grid.Column>
          </Grid.Row>
          <label className="description-label">Date of Birth</label>
          <Grid.Row columns={3} className="grid-row">
            <Grid.Column className="grid-col">
              <select
                name="day"
                placeholder="Day"
                className="register-entry dob"
                value={registerEntries.day}
                onChange={handleOnChange}
                name="day"
              >
                <option value="day">Day</option>
                {[...Array(31)].map((x, i) => {
                  return (
                    <option key={i} value={(i + 1) < 10 ? `0${i + 1}` : `${i+1}`}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
            </Grid.Column>
            <Grid.Column className="grid-col">
              <select
                placeholder="Month"
                className="register-entry dob"
                value={registerEntries.month}
                onChange={handleOnChange}
                name="month"
              >
                <option value="Month">Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </Grid.Column>
            <Grid.Column className="grid-col">
              <select
                placeholder="Year"
                className="register-entry dob"
                value={registerEntries.year}
                onChange={handleOnChange}
                name="year"
              >
                <option value="year">Year</option>
                {[...Array(100)].map((x, i) => {
                  return (
                    <option key={2020 - i} value={`${2020 - i}`}>
                      {2020 -  i}
                    </option>
                  );
                })}
              </select>
            </Grid.Column>
          </Grid.Row>
          <label className="description-label">Gender</label>
          <Grid.Row columns={2} className="grid-row">
            <Grid.Column>
              <Radio
                label="Male"
                name="gender"
                className="register-entry"
                value="male"
                checked={registerEntries.gender === 'male'}
                onChange={handleGenderChange}
              />
            </Grid.Column>
            <Grid.Column>
              <Radio
                label="Female"
                name="gender"
                checked={registerEntries.gender === 'female'}
                className="register-entry"
                value="female"
                onChange={handleGenderChange}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Button className="register-button" type="submit">
          Register
        </Button>
      </Form>
    </Segment>
  );
}
