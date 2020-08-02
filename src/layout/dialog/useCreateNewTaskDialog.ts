import { useCallback, useState } from "react";
import moment from "moment";

import {
  FORM_FIELD_NAME,
  FormFieldsErrors,
  getInputFieldsErrors,
  hasFormError,
  TaskProps,
  TASK_PRIORITY,
} from "./CreateNewTaskDialogService";

const INITIAL_TASK_PROPS = {
  [FORM_FIELD_NAME.TASK_ID]: "",
  [FORM_FIELD_NAME.TASK_NAME]: "",
  [FORM_FIELD_NAME.TASK_DATE]: moment().toDate(),
  [FORM_FIELD_NAME.TASK_DESCRIPTION]: "",
  [FORM_FIELD_NAME.TASK_PRIO]: TASK_PRIORITY.LOWEST,
};

type DispatchNewCard = (cardProps: TaskProps) => void;

interface HookResults {
  creationTime: Date;
  formErrors?: FormFieldsErrors;
  isTaskSubmitted?: boolean;
  handleConfirm(): void;
  handleInput(inputAttribute: string, inputValue: string): void;
}

export const useCreateNewTaskDialog = (
  dispatchNewCard: DispatchNewCard
): HookResults => {
  const [newTask, setNewTask] = useState<TaskProps>(INITIAL_TASK_PROPS);
  const [formErrors, setFormErrors] = useState<FormFieldsErrors | undefined>();
  const [isTaskSubmitted, setTaskSubmitted] = useState<boolean>(false);

  const handleConfirm = useCallback(() => {
    if (hasFormError(newTask!)) {
      setFormErrors(getInputFieldsErrors(newTask!));
      return;
    }

    dispatchNewCard(newTask);
    setTaskSubmitted(true);
  }, [setFormErrors, newTask, dispatchNewCard]);

  const handleInput = useCallback(
    (inputAttribute: string, inputValue: string) => {
      const updatedTask = {
        ...newTask,
        [inputAttribute]: inputValue,
      } as TaskProps;
      setNewTask(updatedTask);
    },
    [newTask]
  );

  return {
    handleConfirm,
    handleInput,
    formErrors,
    isTaskSubmitted,
    creationTime: INITIAL_TASK_PROPS[FORM_FIELD_NAME.TASK_DATE],
  };
};
