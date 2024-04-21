import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts";
import Field from "../common/Field";

export default function LoginForm() {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submitForm = (formData) => {
        const user = { ...formData };
        setAuth({ user });
        console.log(formData);
        navigate('/');
    }

    return (
        <form className=" border-b border-[#3f3f3f] pb-10 lg:pb-[60px] " onSubmit={handleSubmit(submitForm)} >
            <Field label="Email" error={errors.email}>
                <input {...register("email", { required: "Email ID is required" })}
                    className={`auth-input ${errors.email ? "border-red-500" : "border-gray-200"}`}
                    type="email"
                    name="email"
                    id="email"
                />
            </Field>

            <Field label="Password" error={errors.password}>
                <input {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 8,
                        message: "Your password must be at least 8 characters",
                    }
                })}
                    className={`auth-input ${errors.password ? "border-red-500" : "border-gray-200"} `}
                    type="password"
                    name="password"
                    id="password"
                />
            </Field>

            <Field>
                <button className=" auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90 ">Login</button>
            </Field>
        </form>
    )
}
