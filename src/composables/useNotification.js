import { __assign } from "tslib";
import { ref } from "vue";
var alertState = {
    active: ref(false),
    message: ref("")
};
var loadingState = {
    active: ref(false),
    message: ref("")
};
export var useAlert = function () {
    var openAlert = function (msg) {
        alertState.message.value = msg;
        alertState.active.value = true;
        setTimeout(closeAlert, 5000);
    };
    var closeAlert = function () {
        alertState.message.value = "";
        alertState.active.value = false;
    };
    return __assign(__assign({}, alertState), { openAlert: openAlert, closeAlert: closeAlert });
};
export var useLoading = function () {
    var openLoading = function (msg) {
        loadingState.message.value = msg;
        loadingState.active.value = true;
    };
    var closeLoading = function () {
        loadingState.message.value = "";
        loadingState.active.value = false;
    };
    return __assign(__assign({}, loadingState), { openLoading: openLoading, closeLoading: closeLoading });
};
//# sourceMappingURL=useNotification.js.map