import propTypes from "prop-types";

export const CustomButton = ({
  text,
  onClick,
  tabIndex,
  disabled,
  className,
  type,
}) => {
  return (
    <div className="buttons">
      <button
        className={`custom-btn ${className}`}
        onClick={onClick}
        tabIndex={tabIndex}
        disabled={disabled}
        type={type}
      >
        <span className="btn-background"></span>
        {text}
      </button>
    </div>
  );
};

CustomButton.propTypes = {
  text: propTypes.string.isRequired,
  onClick: propTypes.func,
  tabIndex: propTypes.number,
  disabled: propTypes.bool,
  className: propTypes.string,
  type: propTypes.string,
};
