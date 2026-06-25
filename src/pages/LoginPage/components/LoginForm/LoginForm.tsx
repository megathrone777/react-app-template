import React from "react";
import { Field, Form } from "react-final-form";
import { useActionData, useNavigation, useSubmit } from "react-router";

import { Input, Spinner } from "@/ui";

import { TFormField } from "./LoginForm.types";
import { validate } from "./validate";

import { loadingClass } from "./LoginForm.css";

const fieldsProps: Record<
  TFormField,
  React.InputHTMLAttributes<HTMLInputElement> & { iconId?: TIconID }
> = {
  [TFormField.email]: {
    iconId: "email",
    placeholder: "E-mail",
    type: "email",
  },

  [TFormField.password]: {
    iconId: "lock",
    placeholder: "Password",
    type: "password",
  },
};

const LoginForm: React.FC = () => {
  const actionData = useActionData<TActionData>();
  const { state } = useNavigation();
  const submit = useSubmit();

  const getErrorMessage = (fieldType: TFormField): string | undefined => {
    if (!actionData) return;
    const { message, name } = actionData;

    if (fieldType === name) {
      return message;
    }
  };

  const handleSubmit = (values: TFormField): void => {
    submit(values, { method: "POST" });
  };

  return (
    <Form<TFormField>
      {...{ validate }}
      onSubmit={handleSubmit}
      render={({ handleSubmit }): React.ReactElement => (
        <form onSubmit={handleSubmit}>
          {Object.values(TFormField).map<React.ReactElement>((field: TFormField) => {
            const fieldProps = fieldsProps[field];

            return (
              <Field
                key={`login-form-field-${field}`}
                name={field}
                render={({ input, meta }): React.ReactElement => {
                  const errorMessage = getErrorMessage(field);

                  return (
                    <>
                      <Input
                        {...fieldProps}
                        {...input}
                        errorMessage={meta.touched && meta.error ? meta.error : ""}
                      />

                      {errorMessage && <p>{errorMessage}</p>}
                    </>
                  );
                }}
              />
            );
          })}

          {(state === "loading" || state === "submitting") && (
            <div className={loadingClass}>
              <Spinner />
            </div>
          )}

          <button type="submit">Login</button>
        </form>
      )}
    />
  );
};

export { LoginForm };
