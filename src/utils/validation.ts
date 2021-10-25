namespace App {
  export interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }

  export function validate(validatableInput: Validatable) {
    let isValid = true;
    if (validatableInput.required) {
      isValid =
        isValid && validatableInput.value.toString().trim().length !== 0;
    } else if (
      typeof validatableInput.value === "string" &&
      validatableInput.minLength != null
    ) {
      isValid =
        isValid && validatableInput.value.length >= validatableInput.minLength;
    } else if (
      typeof validatableInput.value === "string" &&
      validatableInput.maxLength != null
    ) {
      isValid =
        isValid && validatableInput.value.length <= validatableInput.maxLength;
    } else if (
      typeof validatableInput.value === "number" &&
      validatableInput.min != null
    ) {
      isValid = isValid && validatableInput.value >= validatableInput.min;
    } else if (
      typeof validatableInput.value === "number" &&
      validatableInput.max != null
    ) {
      isValid = isValid && validatableInput.value <= validatableInput.max;
    }

    return isValid;
  }
}
