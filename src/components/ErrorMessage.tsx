import { IErrorMessage } from "../models";

const ErrorMessage = ({ error }: IErrorMessage) => {
  return <p>{error}</p>;
}

export default ErrorMessage;
