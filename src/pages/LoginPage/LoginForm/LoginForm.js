import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./LoginForm.scss";
import { Segment, Form, Button, Divider, Message } from "semantic-ui-react";
import { login } from "../../../api/auth";
import { setToken } from "../../../utils/token";
import PropTypes from "prop-types";
import { history } from "../../../history";
import { withRouter } from "react-router-dom";
import { loginSuccess } from "../../../redux/actions/auth";
import { openNewSocket } from "../../../redux/actions/socket";

function LoginForm({ openRegisterForm, ...props }) {
  const dispatch = useDispatch();

  const [loginEntries, setLoginEntries] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const handleOnChange = (e) => {
    const name = e.target.name;
    setLoginEntries({ ...loginEntries, [name]: e.target.value });
  };

  const handleOnSubmit = async () => {
    setErrors({});
    if (!loginEntries.email || !loginEntries.password) {
      if (!loginEntries.email)
        setErrors((errors) => ({
          ...errors,
          email: true,
          message: "Please fill in all the fields",
        }));
      if (!loginEntries.password)
        setErrors((errors) => ({
          ...errors,
          password: true,
          message: "Please fill in all the fields",
        }));
    } else {
      setLoading(true)
      const result = await login(loginEntries);
      setLoading(false)
      if (result.success) {
        setToken("token", result.token);
        dispatch(loginSuccess(result.token));
        dispatch(openNewSocket());
        history.push("/home");
      } else {
        setErrors({ message: result.message });
      }
    }
  };

  return (
    <Segment className="form-container">
      <Form
        loading={loading}
        className="form-entries"
        onSubmit={handleOnSubmit}
        error={errors.message ? true : false}
      >
        {errors.message && <Message error={true} header={errors.message} />}
        <Form.Field error={errors.email}>
          <input
            placeholder="Email"
            className="login-entry"
            name="email"
            type="email"
            value={loginEntries.email}
            onChange={handleOnChange}
          />
        </Form.Field>
        <Form.Field error={errors.password}>
          <input
            placeholder="Password"
            type="password"
            className="login-entry"
            name="password"
            value={loginEntries.password}
            onChange={handleOnChange}
          />
        </Form.Field>
        <Button className="login-button" fluid type="submit">
          Log in
        </Button>
      </Form>

      <a href="#" className="forget-link">
        Forget password?
      </a>
      <Divider />
      <Button className="open-register-button" onClick={openRegisterForm}>
        Create new account
      </Button>
    </Segment>
  );
}

LoginForm.propTypes = {
  openRegisterForm: PropTypes.func.isRequired,
};

export default withRouter(LoginForm);
