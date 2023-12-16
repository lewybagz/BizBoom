import { useForm } from "react-hook-form";
import { useState } from "react";
import emailjs from "emailjs-com";
const serviceID = "service_dqns5bn";
const templateID = "template_rfvi8dm";
const publicKey = "usoNh5TkF6-fHviVy";

export default function ContactForm() {
  const formFields = [
    { name: "name", label: "Your Name", required: true },
    {
      name: "email",
      label: "Your Email",
      required: true,
      pattern: /\S+@\S+\.\S+/,
    },
    { name: "message", label: "Your Message", required: true },
  ];
  const { register, handleSubmit, formState } = useForm();
  let fieldIndex = 0;
  const [messageState, setMessageState] = useState({
    success: "",
    error: "",
  });

  const [setFieldError] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: register("name").value,
      email: register("email").value,
      message: register("message").value,
    };

    emailjs
      .sendForm(serviceID, templateID, formData, publicKey)
      .then(() => {
        setMessageState((prevState) => ({
          ...prevState,
          success: "Your message has been sent!",
        }));
      })
      .catch((error) => {
        console.error(error.text);
        setMessageState((prevState) => ({
          ...prevState,
          error: "An error occurred. Please try again later.",
        }));
      });

    // Use formState errors directly
    Object.keys(formState.errors).forEach((field) => {
      if (formState.errors[field]) {
        setFieldError(field, formState.errors[field].message);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset tabIndex="-1">
        {formFields.map((field) => (
          <div key={field.name} tabIndex={fieldIndex}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type || "text"}
              {...register(field.name, field.validation)}
              id={field.name}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit(onSubmit)(e)}
              style={{
                border: formState.errors[field] ? "1px solid red" : "none",
              }}
            />
            {formState.errors[field] && (
              <span className="error-message">
                {formState.errors[field].message}
              </span>
            )}
          </div>
        ))}
        <button type="submit" tabIndex={fieldIndex + 1}>
          Blast Off
        </button>
      </fieldset>
      {messageState.success && (
        <p className="success-message">{messageState.success}</p>
      )}
      {messageState.error && (
        <p className="error-message">{messageState.error}</p>
      )}
    </form>
  );
}
