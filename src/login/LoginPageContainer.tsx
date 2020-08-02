import React from "react";
import { Card, FormGroup, Button } from "@blueprintjs/core";

import { LoginPageFormView } from "./LoginPageFormView";
import { useLoginPageContainer } from "./useLoginPageContainer";
import "./LoginPageContainer.scss";

const LoginPageContainer: React.FC = () => {
  const { handleSubmit } = useLoginPageContainer();
  return (
    <div className="loginFormLayout">
      <Card>
        <FormGroup>
          <LoginPageFormView />
          <Button onClick={handleSubmit}>{"login.form.confirmBtn"}</Button>
        </FormGroup>
      </Card>
    </div>
  );
};

export default LoginPageContainer;
