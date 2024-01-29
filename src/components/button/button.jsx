const Button = ({ children, buttonType, onClick }) => {
  return (
    <button
      className={`${
        buttonType === "signUp"
          ? "bg-accent text-white hover:bg-dark-gray "
          : buttonType === "googleSignIn"
          ? "bg-emerald-500 hover:brightness-110"
          : ""
      } p-4 rounded border`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
