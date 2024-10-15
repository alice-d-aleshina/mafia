import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Вызов API для регистрации
      const response = await axios.post("http://localhost:5000/api/register", data);
      if (response.status === 200) {
        alert("Registration successful!");
        navigate("/login"); // Перенаправление на страницу входа
      }
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Try again.");
    }
  };

  return (
    <div>
      <h2>Register</h2>
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
            {...register("password", { required: true, minLength: 6 })}
            placeholder="Enter password"
          />
          {errors.password && <span>Password must be at least 6 characters</span>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
