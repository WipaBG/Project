import { ValidatorFn } from "@angular/forms";

export function matchPassworsValidator(passwordControl:string, rePasswordControl:string):ValidatorFn{
    return (control)=>{
        const passFirstControl = control.get(passwordControl);
        const passSecondControl = control.get(rePasswordControl);
        const areMatching = passFirstControl?.value == passSecondControl?.value;


        return areMatching ? null : {matchPassworsValidator:true};
    }
}