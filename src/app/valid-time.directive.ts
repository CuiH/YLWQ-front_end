import {ValidatorFn, AbstractControl} from "@angular/forms";
/**
 * Created by CuiH on 2017/4/1.
 */

export function validTimeValidator(): ValidatorFn {
	return (control: AbstractControl): {[key: string]: any} => {
		const userTime = control.value;
		console.log(userTime);
		return {invalidTime: {userTime}};
	};
}
