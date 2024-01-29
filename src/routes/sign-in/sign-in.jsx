import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up/sign-up-form";
import Button from "../../components/button/button";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1 className="text-3xl">Sign In</h1>
      <br />
      <Button
        buttonType="googleSignIn"
        onClick={logGoogleUser}
        className="border-4"
      >
        Sign In with Google
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
