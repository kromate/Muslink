import { __awaiter, __generator } from "tslib";
import { v4 as uuidv4 } from "uuid";
import { app } from "./init";
import { getFirestore, doc, setDoc, deleteDoc, collection, query, where, getDocs, getDoc, onSnapshot, } from "firebase/firestore";
import { useUser } from "../composables/useGlobals";
import { useLoading, useAlert } from "../composables/useNotification";
var user = useUser().user;
var _a = useLoading(), openLoading = _a.openLoading, closeLoading = _a.closeLoading;
export var db = getFirestore(app);
var result = [];
var pageBlockRef = collection(db, "pageBlocks");
export var savepageBlock = function () { return __awaiter(void 0, void 0, void 0, function () {
    var userId, id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!user.value) return [3 /*break*/, 2];
                openLoading("Saving Your Blocks, You can view it under pages");
                userId = user.value.uid;
                id = uuidv4();
                return [4 /*yield*/, setDoc(doc(db, "pageBlocks", id), {
                        date: Date(),
                        userId: userId,
                        id: id
                    })];
            case 1:
                _a.sent();
                closeLoading();
                location.assign("/pageBlock");
                return [3 /*break*/, 3];
            case 2:
                useAlert().openAlert("Your need to Sign in to save 💁‍♂️");
                _a.label = 3;
            case 3: return [2 /*return*/];
        }
    });
}); };
// export const editpageBlock = async (pageBlock, id) => {
//   const userId = user.value.uid;
//   await setDoc(doc(db, "pageBlocks", id), { ...pageBlock, userId, id });
// };
export var delpageBlock = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                openLoading("Deleting the pageBlock");
                return [4 /*yield*/, deleteDoc(doc(db, "pageBlocks", id))];
            case 1:
                _a.sent();
                location.reload();
                closeLoading();
                return [2 /*return*/];
        }
    });
}); };
export var getUserpageBlock = function () { return __awaiter(void 0, void 0, void 0, function () {
    var id, userpageBlock, querySnapshot, unsubscribe;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                openLoading("Getting your pageBlocks, this shouldn't take long 😙");
                id = user.value.uid;
                result = [];
                userpageBlock = query(pageBlockRef, where("userId", "==", id));
                return [4 /*yield*/, getDocs(userpageBlock)];
            case 1:
                querySnapshot = _a.sent();
                querySnapshot.forEach(function (doc) {
                    result.push(doc.data());
                });
                unsubscribe = onSnapshot(pageBlockRef, function (snapshot) {
                    result = [];
                    snapshot.docChanges().forEach(function (change) {
                        result.push(change.doc.data());
                    });
                });
                closeLoading();
                return [2 /*return*/, result];
        }
    });
}); };
export var getSinglepageBlock = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var singlepageBlockRef, docSnap;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                openLoading("Loading up the pageBlock 👽");
                singlepageBlockRef = doc(db, "pageBlocks", id);
                return [4 /*yield*/, getDoc(singlepageBlockRef)];
            case 1:
                docSnap = _a.sent();
                closeLoading();
                if (docSnap.exists()) {
                    return [2 /*return*/, docSnap.data()];
                }
                else {
                    return [2 /*return*/, null];
                }
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=firestore.js.map