import { __awaiter, __generator } from "tslib";
import { routes } from '@/router/routes';
import { createRouter, createWebHistory } from 'vue-router';
export var setupRouter = function () { return __awaiter(void 0, void 0, void 0, function () {
    var router, _a;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = createRouter;
                _b = {
                    history: createWebHistory()
                };
                return [4 /*yield*/, Promise.all(routes)];
            case 1:
                router = _a.apply(void 0, [(_b.routes = _c.sent(),
                        _b)]);
                router.afterEach(function () {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                });
                return [2 /*return*/, router];
        }
    });
}); };
export var router = setupRouter();
//# sourceMappingURL=index.js.map