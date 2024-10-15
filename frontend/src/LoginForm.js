import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", data);
      if (response.status === 200) {
        alert("Login successful!");
        localStorage.setItem("token", response.data.token); // Сохранение токена
        navigate("/dashboard"); // Перенаправление на главную страницу
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Username</label>
          <input 
            {...register("username", { required: true })}
            placeholder="Enter username"
          />
          {errors.username && <span>This field is required</span>}
        </div>
        <div>
          <label>Password</label>
          <input 
            type="password"
            {...register("password", { required: true })}
            placeholder="Enter password"
          />
          {errors.password && <span>This field is required</span>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
