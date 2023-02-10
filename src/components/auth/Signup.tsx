import React from "react";
import Button from "../button.tsx/Button";
import { useForm } from "react-hook-form";
import Input from "../input/Input";

type Props = {};

const Sigup: React.FC<Props> = () => {
  const { register, errors, handleSubmit } = useForm<{
    username: string;
    email: string;
    password: string;
  }>();

  const handelSignup = handleSubmit((data) => {
    console.log("handelSignup =>", data);
  });

  return (
    <>
      <div className="backdrop"></div>

      <div className="modal modal--auth-form">
        <div className="modal-close">&times;</div>
        <h3 className="header--center paragraph--orange">
          Sign up to e-Commerce
        </h3>
        <form className="form" onSubmit={handelSignup}>
          <Input
            name="username"
            label="Username"
            placeholder="Your username"
            error={errors.username?.message}
            ref={register({
              required: "Username is required.",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters.",
              },
              maxLength: {
                value: 20,
                message: "Username must not be greater thant 20 characters.",
              },
            })}
          />
          <div className="form__input-container">
            <label htmlFor="Email" className="form__input-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input"
              placeholder="Your email"
            />
          </div>
          <div className="form__input-container">
            <label htmlFor="Password" className="form__input-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input"
              placeholder="Your password"
            />
          </div>
          <Button width="100%" style={{ margin: "0.5rem 0" }}>
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default Sigup;
