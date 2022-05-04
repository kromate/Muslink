import { app } from "./init";
// eslint-disable-next-line import/named
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, } from "firebase/auth";
import { useAlert, useLoading } from "../composables/useNotification";
import { useUser } from "../composables/useGlobals";
var openAlert = useAlert().openAlert;
var _a = useLoading(), openLoading = _a.openLoading, closeLoading = _a.closeLoading;
var _b = useUser(), clearUser = _b.clearUser, saveUser = _b.saveUser;
var auth = getAuth(app);
onAuthStateChanged(auth, function (user) {
    if (user) {
        saveUser(user);
    }
    else {
        clearUser();
        // User is signed out
        // ...
    }
});
var provider = new GoogleAuthProvider();
export var googleAuth = function () {
    openLoading("Logging you in... 🤩");
    signInWithPopup(auth, provider)
        .then(function (result) {
        closeLoading();
        var user = result.user;
        saveUser(user);
        openAlert("You have successfully signed in 🥳");
    })["catch"](function (error) {
        closeLoading();
        openAlert("Oops seems something went wrong \uD83D\uDE15 : ".concat(error.message));
    });
};
export var signOutUser = function () {
    openLoading("Signing You out...😗");
    signOut(auth)
        .then(function () {
        clearUser();
        location.reload();
        closeLoading();
    })["catch"](function (error) {
        closeLoading();
        openAlert("Oops seems something went wrong \uD83D\uDE15 : ".concat(error.message));
    });
};
//# sourceMappingURL=auth.js.map