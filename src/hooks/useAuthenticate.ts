import { SignupData } from "../types";
import { auth } from "../firebase/config";
import { useAsyncCall } from "./useAsyncCall";

export const useAuthenticate = () => {
  const { loading, setLoading, error, setError } = useAsyncCall();
  const signup = async (data: SignupData) => {
    const { username, email, password } = data;

    try {
      setLoading(true);

      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!response) {
        setError("Sorry. something went wrong.");
        setLoading(false);
        return;
      }

      // Update the user displayname in firebase auth
      await auth.currentUser?.updateProfile({
        displayName: username,
      });

      // Call onSignup fintions to create a new user in firestore

      setLoading(false);
      console.log("auth response =>", response);

      return response
    } catch (error) {
      const { message } = error as { message: string };
      console.log("useAuthenticate message =>", message);
      setError(message);
      setLoading(false);
    }
  };

  return { signup, loading, error };
};
