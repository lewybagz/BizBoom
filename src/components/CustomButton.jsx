import propTypes from "prop-types";

export const CustomButton = ({
  text,
  onClick,
  tabIndex,
  disabled,
  className,
}) => {
  return (
    <div className="buttons">
      <button
        className={`custom-btn ${className}`}
        onClick={onClick}
        tabIndex={tabIndex}
        disabled={disabled}
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
};
