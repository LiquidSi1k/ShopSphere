import SignUpForm from "../../components/sign-up/sign-up-form";
import SignInForm from "../../components/sign-in/sign-in-form";

const Authentication = () => {
  return (
    <div className="flex sm:flex-row flex-col justify-between my-20 w-[56rem] mx-auto">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
