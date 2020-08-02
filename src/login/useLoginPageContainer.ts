import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import {INITIAL_APP_ROUTES} from "../start-app/AppService";

interface HookResults {
  handleSubmit(): void;
}

export const useLoginPageContainer = (): HookResults => {
  const history  = useHistory();
  const handleSubmit = useCallback(() => history.push(INITIAL_APP_ROUTES.OVERVIEW), [history]);

  return {
    handleSubmit,
  };
};
