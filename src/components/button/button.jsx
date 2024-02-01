const Button = ({ children, buttonType, onClick }) => {
  return (
    <button
      className={`${
        buttonType === "signUp"
          ? "bg-accent text-white hover:bg-dark-gray"
          : buttonType === "googleSignIn"
          ? "bg-emerald-500 hover:brightness-110"
          : buttonType === "standardBtn"
          ? "bg-light-gray hover:bg-accent hover:text-white"
          : ""
      } p-4 rounded`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
