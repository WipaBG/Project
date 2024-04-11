import { ValidatorFn } from "@angular/forms";

export function   emailValidtor(domains:string[]):ValidatorFn{
    const domainStrings = domains.join('|');
    const regExp = new RegExp(`[A-Za-z0-9]+@abv\.(${domainStrings})`)

    
    return (control)=>{
        
      const isEmailInvalid = control.value === '' || regExp.test(control.value)
      return isEmailInvalid ? null:{emailValidtor:true};
    }

  }