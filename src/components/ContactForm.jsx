import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import ReactModal from "react-modal";
import emailjs from "emailjs-com";
const serviceID = "service_dqns5bn";
const templateID = "template_rfvi8dm";
const publicKey = "usoNh5TkF6-fHviVy";
import TermsAndConditions from "./TermsAndConditions";
import { CustomButton } from "/src/components/CustomButton.jsx";
import "../styles/ContactForm.css";
import "../styles/CustomButton.css";

export default function ContactForm() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const formFields = [
    { name: "name", label: "Name", required: true },
    {
      name: "email",
      label: "Email",
      required: true,
      pattern: /\S+@\S+\.\S+/,
    },
    { name: "phone", label: "Phone", required: false },
    { name: "message", label: "Message", required: true },
  ];
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
  });
  let fieldIndex = 0;
  const [messageState, setMessageState] = useState({
    success: "",
    error: "",
  });

  const [setFieldError] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const onSubmit = (data) => {
    emailjs
      .sendForm(serviceID, templateID, data, publicKey)
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
    <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset tabIndex="-1">
        <h1>Get in touch!</h1>
        <p className="required-indicator"> Indicates Required Field</p>

        <ul>
          <li>
            <select
              {...register("serviceOption", { required: true })}
              defaultValue=""
            >
              <option value="" disabled>
                -- Please choose an option --
              </option>
              <option value="Request Quote">Request Quote</option>
              <option value="Other">Other</option>
            </select>
          </li>
        </ul>
        {formFields.map((field, index) => (
          <div
            className={`form-wrapper ${field.required ? "required" : ""}`}
            key={field.name}
            tabIndex={fieldIndex + index}
          >
            <input
              required={field.required}
              type={field.type || "text"}
              placeholder={field.label}
              {...register(field.name, field.validation)}
              id={field.name}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit(onSubmit)(e)}
              style={{
                border: formState.errors[field.name] ? "1px solid red" : "",
              }}
            />

            {formState.errors[field.name] && (
              <span className="error-message">
                {formState.errors[field.name]?.message}
              </span>
            )}
          </div>
        ))}
        <li>
          <input
            type="checkbox"
            id="terms"
            {...register("terms", { required: true })}
          />
          <label
            htmlFor="terms"
            tabIndex={fieldIndex + formFields.length}
            id="terms-label"
          >
            I have read and agreed with{" "}
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                openModal();
              }}
            >
              the terms and conditions.
            </a>
          </label>
        </li>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Terms and Conditions"
          style={{
            overlay: {
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              zIndex: 1000,
            },
            content: {
              position: "fixed",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)", // Center the modal
              border: "1px solid #ccc",
              borderRadius: "20px",
              background: "#fff",
              overflow: "auto",
              outline: "none",
              padding: "20px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
              width: windowWidth <= 900 ? "90%" : "50%",
              maxHeight: "calc(100% - 80px)",
              boxSizing: "border-box",
            },
          }}
        >
          <TermsAndConditions />
          <button onClick={closeModal}>Close</button>
        </ReactModal>

        <CustomButton
          type="submit"
          text="Blast Off"
          onClick={() => handleSubmit(onSubmit)()}
          tabIndex={fieldIndex + formFields.length}
          disabled={!formState.isValid}
        />
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
