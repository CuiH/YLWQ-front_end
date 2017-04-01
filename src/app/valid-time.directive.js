"use strict";
/**
 * Created by CuiH on 2017/4/1.
 */
function validTimeValidator() {
    return function (control) {
        var userTime = control.value;
        console.log(userTime);
        return { invalidTime: { userTime: userTime } };
    };
}
exports.validTimeValidator = validTimeValidator;
//# sourceMappingURL=valid-time.directive.js.map