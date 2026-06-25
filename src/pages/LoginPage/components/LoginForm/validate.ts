import { email, object, string } from "zod/v4";

import { TFormField } from "./LoginForm.types";

const schema = object({
  [TFormField.email]: email({ error: "Invalid email" }),
  [TFormField.password]: string().min(1, "Password is required"),
});

const validate = (values: TFormField): Partial<Record<keyof TFormField, string>> => {
  const { error, success } = schema.safeParse(values);

  if (success) return {};

  return error.issues.reduce<Partial<Record<keyof TFormField, string>>>(
    (accumulator, { message, path }) => {
      const key = path[0] as keyof TFormField;

      if (key && !accumulator[key]) accumulator[key] = message;

      return accumulator;
    },
    {}
  );
};

export { validate };
