const validate = (emailValue, passwordValue) => {
  const validEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    emailValue
  );
  // Corrected the regular expression for password validation
  const validPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
    passwordValue
  );

  if (!validEmail) return "Email is not valid";
  if (!validPassword) return "Password is not valid";

  return null;
};

export default validate;
