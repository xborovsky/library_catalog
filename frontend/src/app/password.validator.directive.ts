import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validatePwd][formControlName],[validatePwd][formControl],[validatePwd][ngModel]',
  providers: [
    { provide :  NG_VALIDATORS, useExisting : forwardRef(() => PasswordValidatorDirective), multi: true}
  ]
})
export class PasswordValidatorDirective implements Validator {

  constructor(@Attribute("validatePwd") public validatePwd : string,
    @Attribute("reverse") public reverse:string) { }

  private get isReverse() {
    if (!this.reverse) return false;
    return this.reverse === 'true';
  }

  validate(c:AbstractControl): {[key : string]:any} {
    let v = c.value;
    let e = c.root.get(this.validatePwd);

    if (e && v !== e.value && !this.isReverse) {
      return {
        validatePwd : false
      };
    }

    if (e && v === e.value && this.isReverse) {
        delete e.errors['validatePwd'];
        if (!Object.keys(e.errors).length) e.setErrors(null);
    }

    // value not equal and reverse
    if (e && v !== e.value && this.isReverse) {
        e.setErrors({ validatePwd: false });
    }

    return null;
  }

}
