import React from "react";
import { InputGroup, Switch } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";

export const LoginPageFormView: React.FC = () => (
  <>
    <InputGroup placeholder={"login.form.username"} />
    <InputGroup placeholder={"login.form.password"} leftIcon={IconNames.LOCK} />
    <Switch label={"login.form.rememberMe"} />
  </>
);
