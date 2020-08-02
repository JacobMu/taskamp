import React from "react";
import moment from "moment";

import {
  Dialog,
  FormGroup,
  InputGroup,
  TextArea,
  Label,
  Button,
  ButtonGroup,
  Divider,
} from "@blueprintjs/core";
import { DateInput } from "@blueprintjs/datetime";

import { InputErrorView } from "./InputErrorView";
import { useCreateNewTaskDialog } from "./useCreateNewTaskDialog";
import {
  FORM_FIELD_NAME,
  TaskProps,
  TASK_PRIORITY,
  DATE_FORMAT,
} from "./CreateNewTaskDialogService";

import "./CreateNewTaskDialogView.scss";

const SELECT_ITEMS = [
  { value: TASK_PRIORITY.LOWEST },
  { value: TASK_PRIORITY.LOW },
  { value: TASK_PRIORITY.MEDIUM },
  { value: TASK_PRIORITY.HIGH },
  { value: TASK_PRIORITY.HIGHEST },
];

interface Props {
  isDialogOpen: boolean;
  handleClose(): void;
  dispatchNewCard(cardProps: TaskProps): void;
}

export const CreateNewTaskDialogContainer: React.FC<Props> = ({
  isDialogOpen,
  handleClose,
  dispatchNewCard,
}) => {
  const {
    handleConfirm,
    handleInput,
    formErrors,
    isTaskSubmitted,
    creationTime,
  } = useCreateNewTaskDialog(dispatchNewCard);

  const showDialog = isTaskSubmitted ? false : isDialogOpen;

  return (
    <Dialog
      isOpen={showDialog}
      isCloseButtonShown
      canOutsideClickClose
      onClose={handleClose}
      title="createNewTaskDialog.title"
    >
      <div className="formGroupPadding">
        <FormGroup>
          <Label>
            {"dialog.form.taskId.label"}
            <InputGroup
              fill
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleInput(FORM_FIELD_NAME.TASK_ID, event.target.value)
              }
            />
            {formErrors?.TASK_ID.hasError && <InputErrorView />}
          </Label>
          <Label>
            {"dialog.form.taskNameLabel"}
            <InputGroup
              fill
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleInput(FORM_FIELD_NAME.TASK_NAME, event.target.value)
              }
            />
            {formErrors?.TASK_NAME.hasError && <InputErrorView />}
          </Label>
          <Label>
            {"dialog.form.dateLabel"}
            <DateInput
              fill
              formatDate={(date) => moment(date).format(DATE_FORMAT)}
              defaultValue={creationTime}
              disabled
            />
          </Label>
          <Label>
            {"dialog.form.describtionLabel"}
            <TextArea
              fill
              onChange={(event) =>
                handleInput(
                  FORM_FIELD_NAME.TASK_DESCRIPTION,
                  event.target.value
                )
              }
            />
            {formErrors?.TASK_DESCRIPTION.hasError && <InputErrorView />}
          </Label>
          <Label>
            {"dialog.form.selectLabel"}
            <div className="bp3-select">
              <select
                onChange={(event) =>
                  handleInput(FORM_FIELD_NAME.TASK_PRIO, event.target.value)
                }
              >
                {SELECT_ITEMS.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.value}
                  </option>
                ))}
              </select>
            </div>
          </Label>
        </FormGroup>
        <Divider />
        <ButtonGroup className="formGroupPadding">
          <Button onClick={handleConfirm}>{"dialog.confirmBtn"}</Button>
        </ButtonGroup>
      </div>
    </Dialog>
  );
};
