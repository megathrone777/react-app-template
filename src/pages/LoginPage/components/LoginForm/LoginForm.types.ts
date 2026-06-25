export enum TFormField {
  email = "email",
  password = "password",
}

export interface TFormErrors {
  [TFormField.email]: null | string;
  [TFormField.password]: null | string;
}
