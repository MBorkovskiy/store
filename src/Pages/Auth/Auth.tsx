import "./Auth.css";
import { MainButton } from "../../Ui/Buttons/MainButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormState, useForm } from "react-hook-form";
import { TextField } from "@mui/material";
import { isLogIn } from "../../store/authSlice";
import { useEffect } from "react";
import { getUsers } from "../../store/userSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { FC } from "react";

interface FormValues {
  mailValue: string;
  passwordValue: string;
  username: string;
  firstname: string;
  lastname: string;
}

const Auth: FC = () => {
  const users = useAppSelector((state) => state.users.users);
  const [error, setError] = useState(false);
  const [loginOrRegister, setLoginOrRegister] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    reset,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<FormValues>({
    mode: "onBlur",
  });

  const changeLoginOrRegister = () => {
    setLoginOrRegister(!loginOrRegister);
  };

  const isLogin = (data: FormValues) => {
    const findAuthUsers = users.find(
      (el) => el.email === data.mailValue && el.password === data.passwordValue
    );
    if (findAuthUsers && isValid) {
      localStorage.setItem("user", JSON.stringify(findAuthUsers));
      dispatch(isLogIn(true));
      navigate("/");
    } else {
      setError(true);
    }
  };

  const addNewUser = (data: FormValues) => {
    const findUsers = users.find(
      (el) => el.email === data.mailValue && el.password === data.passwordValue
    );
    const user = {
      email: data.mailValue,
      username: data.username,
      password: data.passwordValue,
      name: { firstname: data.firstname, lastname: data.lastname },
    };
    if (findUsers === undefined && isValid) {
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(isLogIn(true));
      navigate("/");
    } else {
      reset();
    }
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="auth">
      <form className="auth_wrapper">
        <div className="auth_form">
          <TextField
            InputProps={{
              style: {
                borderRadius: "0px",
              },
            }}
            fullWidth
            size="small"
            {...register("mailValue", {
              required: "Required field",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Uncorrect Email",
              },
            })}
            type="email"
            label="E-mail"
          />
          {errors.mailValue && (
            <p className="error">{errors.mailValue.message}</p>
          )}
          <TextField
            InputProps={{
              style: {
                borderRadius: "0px",
              },
            }}
            fullWidth
            size="small"
            {...register("passwordValue", {
              required: "Required field",
              pattern: {
                value: /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                message: "Uncorrect Password",
              },
            })}
            type="password"
            label="Password"
          />
          {errors.passwordValue && (
            <p className="error">{errors.passwordValue.message}</p>
          )}

          {loginOrRegister && (
            <>
              <TextField
                InputProps={{
                  style: {
                    borderRadius: "0px",
                  },
                }}
                fullWidth
                size="small"
                {...register("username", {
                  required: "Required field",
                  minLength: {
                    value: 4,
                    message: `Minimal Length of Username is 4`,
                  },
                  pattern: {
                    value: /^[a-zA-Z\-]+$/,
                    message: "Uncorrect Username",
                  },
                })}
                type="text"
                label="Username"
              />
              {errors.username && (
                <p className="error">{errors.username.message}</p>
              )}
              <TextField
                InputProps={{
                  style: {
                    borderRadius: "0px",
                  },
                }}
                fullWidth
                size="small"
                {...register("firstname", {
                  required: "Required field",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Uncorrect FirstName",
                  },
                })}
                type="text"
                label="Firstname"
              />
              {errors.firstname && (
                <p className="error">{errors.firstname.message}</p>
              )}
              <TextField
                InputProps={{
                  style: {
                    borderRadius: "0px",
                  },
                }}
                fullWidth
                size="small"
                {...register("lastname", {
                  required: "Required field",
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Uncorrect LastName",
                  },
                })}
                type="text"
                label="Lastname"
              />
              {errors.lastname && (
                <p className="error">{errors.lastname.message}</p>
              )}
              <MainButton
                onClick={handleSubmit(addNewUser)}
                disabled={!isValid}
              >
                Registration
              </MainButton>
              <div className="auth">
                Already have an accunt?
                <span onClick={changeLoginOrRegister}> Login </span>
              </div>
            </>
          )}

          {!loginOrRegister && (
            <>
              <MainButton onClick={handleSubmit(isLogin)}>Sign In</MainButton>
              {error && (
                <p className="error">E-mail or password does not match</p>
              )}
              <div className="auth">
                Dont have an accunt?
                <span onClick={changeLoginOrRegister}>Registration</span>
              </div>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Auth;
