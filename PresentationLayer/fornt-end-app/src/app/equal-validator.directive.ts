import { Directive, forwardRef, Attribute, Input } from "@angular/core";
import { Validator, AbstractControl, NG_VALIDATORS } from "@angular/forms";
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: "[appValidateEqual]",
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EqualValidator, // forwardRef(() => EqualValidator),
      multi: true
    }
  ]
})
export class EqualValidator implements Validator {
  @Input() appValidateEqual: string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    const controlToCompare = control.parent.get(this.appValidateEqual);
    if (controlToCompare && controlToCompare.value !== control.value) {
      return { notEqual: true };
    }
    return null;
  }
}
