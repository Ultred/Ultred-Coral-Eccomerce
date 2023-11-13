import { useState } from "react";

function useErrorShow(initialMessage = "", timeout = 2000) {
  const [errorMessage, setErrorMessage] = useState<string>(initialMessage);
  const [showError, setShowError] = useState<boolean>(false);
  const setError = (message: string) => {
    setErrorMessage(message);
    setShowError(true);
    setTimeout(() => {
      setErrorMessage("");
      setShowError(false);
    }, timeout);
  };

  return { errorMessage, showError, setError };
}

export default useErrorShow;
