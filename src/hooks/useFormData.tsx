import { useState } from "react";
import { ZodObject } from "zod";

type ValidationError = { error: { [key: string]: string[] } };

const useFormData = (
  fields: { [key: string]: string },
  validationSchema: ZodObject<any>,
) => {
  const [formData, setFormdata] = useState(fields);
  const [validationError, setValidationError] = useState<ValidationError>({
    error: {},
  });
  const [disabledButton, setDisabledButton] = useState(true);

  const validateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const schema = validationSchema.safeParse({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (!schema.success) {
      const error = schema.error.flatten().fieldErrors;
      setValidationError((prevState) => {
        return {
          ...prevState,
          error: {
            ...prevState.error,
            [e.target.name]: error[e.target.name] || [],
          },
        };
      });
      setDisabledButton(true);
    } else {
      setValidationError((prevState) => {
        return {
          ...prevState,
          error: {
            ...prevState.error,
            [e.target.name]: [],
          },
        };
      });
      setDisabledButton(false);
    }
  };

  const handleChangeFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateFormData(e);

    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlurFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    validateFormData(e);
  };

  const resetFormData = () => {
    const fields = Object.keys(formData);
    fields.forEach((field) => {
      setFormdata({
        ...formData,
        [field]: "",
      });
    });
  };

  return {
    formData,
    validationError,
    disabledButton,
    handleChangeFormData,
    handleBlurFormData,
    resetFormData,
    setValidationError,
  };
};

export default useFormData;
