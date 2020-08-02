import {
  FORM_FIELD_NAME,
  getInputFieldsErrors,
  hasFormError,
} from "../CreateNewTaskDialogService";

describe("CreateNewTaskDialogService", () => {
  describe("#hasFormError", () => {
    it("returns false when form has no errors", () => {
      const form = {
        [FORM_FIELD_NAME.TASK_ID]: "123",
        [FORM_FIELD_NAME.TASK_NAME]: "name",
        [FORM_FIELD_NAME.TASK_DATE]: ("12.12.2012" as unknown) as Date,
        [FORM_FIELD_NAME.TASK_DESCRIPTION]: "description",
        [FORM_FIELD_NAME.TASK_PRIO]: "lowest",
      };
      const hasError = hasFormError(form);

      expect(hasError).toBe(false);
    });

    it("returns true when form has error", () => {
      const form = {
        [FORM_FIELD_NAME.TASK_ID]: "",
        [FORM_FIELD_NAME.TASK_NAME]: "name",
        [FORM_FIELD_NAME.TASK_DATE]: ("12.12.2012" as unknown) as Date,
        [FORM_FIELD_NAME.TASK_DESCRIPTION]: "description",
        [FORM_FIELD_NAME.TASK_PRIO]: "lowest",
      };
      const hasError = hasFormError(form);

      expect(hasError).toBe(true);
    });
  });

  describe("#getInputFieldsErrors()", () => {
    it("returns object containing flag hasError", () => {
      const form = {
        [FORM_FIELD_NAME.TASK_ID]: "",
        [FORM_FIELD_NAME.TASK_NAME]: "name",
        [FORM_FIELD_NAME.TASK_DATE]: ("12.12.2012" as unknown) as Date,
        [FORM_FIELD_NAME.TASK_DESCRIPTION]: "",
        [FORM_FIELD_NAME.TASK_PRIO]: "lowest",
      };

      const inputFieldErrors = getInputFieldsErrors(form);

      expect(inputFieldErrors).toEqual({
        ["TASK_ID"]: { hasError: true },
        ["TASK_NAME"]: { hasError: false },
        ["TASK_DATE"]: { hasError: false },
        ["TASK_DESCRIPTION"]: { hasError: true },
        ["TASK_PRIO"]: { hasError: false },
      });
    });
  });
});
