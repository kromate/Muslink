import { __assign } from "tslib";
import { useStorage } from '@vueuse/core';
import { ref } from 'vue';
export var GlobalState = useStorage("GlobalState", {
    darkMode: "",
    savedData: [],
    isLoggedIn: false,
    UserRef: ""
});
export var currentUser = {
    user: GlobalState.value.UserRef
        ? ref(JSON.parse(GlobalState.value.UserRef))
        : ref(null)
};
export var useUser = function () {
    var saveUser = function (user) {
        currentUser.user.value = user;
        GlobalState.value.UserRef = JSON.stringify(user);
        GlobalState.value.isLoggedIn = true;
    };
    var clearUser = function () {
        currentUser.user.value = null;
        GlobalState.value.UserRef = '';
        GlobalState.value.isLoggedIn = false;
    };
    return __assign(__assign(__assign({}, GlobalState.value), currentUser), { saveUser: saveUser, clearUser: clearUser });
};
//# sourceMappingURL=useGlobals.js.map