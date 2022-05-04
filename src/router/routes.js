import { __assign, __awaiter, __generator } from "tslib";
var getPath = function (page) {
    return page
        .map(function (path) {
        if (path === 'index')
            return '';
        if (path === '~')
            return ':pathMatch(.*)*';
        if (path.startsWith('^'))
            path = path.replace('^', '');
        if (path.startsWith('_'))
            path = path.replace('_', ':');
        return path;
    })
        .join('/')
        .replace(new RegExp('///', 'g'), '/')
        .replace(new RegExp('//', 'g'), '/');
};
var makeRoute = function (page) { return __awaiter(void 0, void 0, void 0, function () {
    var path, component, component, component, component, _a, displayName, _b, middlewares, _c, name;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                path = '/' + getPath(page);
                if (!(page.length == 1)) return [3 /*break*/, 2];
                return [4 /*yield*/, import("../views/".concat(page[0], ".vue"))];
            case 1:
                component = (_d.sent())["default"];
                return [3 /*break*/, 8];
            case 2:
                if (!(page.length == 2)) return [3 /*break*/, 4];
                return [4 /*yield*/, import("../views/".concat(page[0] + '/' + page[1], ".vue"))];
            case 3:
                component = (_d.sent())["default"];
                return [3 /*break*/, 8];
            case 4:
                if (!(page.length == 3)) return [3 /*break*/, 6];
                return [4 /*yield*/, import("../views/".concat(page[0] + '/' + page[1] + '/' + page[2], ".vue"))];
            case 5:
                component = (_d.sent())["default"];
                return [3 /*break*/, 8];
            case 6:
                if (!(page.length == 4)) return [3 /*break*/, 8];
                return [4 /*yield*/, import("../views/".concat(page[0] + '/' + page[1] + '/' + page[2] + '/' + page[3], ".vue"))];
            case 7:
                component = (_d.sent())["default"];
                _d.label = 8;
            case 8:
                _a = component.displayName, displayName = _a === void 0 ? '' : _a, _b = component.middlewares, middlewares = _b === void 0 ? [] : _b, _c = component.name, name = _c === void 0 ? '' : _c;
                return [2 /*return*/, {
                        path: path,
                        name: name,
                        component: component,
                        meta: { middlewares: middlewares, displayName: displayName }
                    }];
        }
    });
}); };
var allViews = import.meta.glob('../views/**/*.vue');
var allPages = Object.keys(allViews)
    .map(function (key) { return key.slice(9).replace('.vue', '').split('/'); })
    .map(function (path) {
    var parent = null;
    var nestedIndex = path.findIndex(function (p) { return p.startsWith('^'); });
    if (nestedIndex > -1)
        parent = getPath(path.slice(0, nestedIndex));
    return { parent: parent, path: path };
});
var nestedPages = allPages.filter(function (page) { return page.parent; });
export var routes = allPages
    .filter(function (page) { return !page.parent; })
    .map(function (page) { return __awaiter(void 0, void 0, void 0, function () {
    var path, childrenPages, route, children;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                path = getPath(page.path);
                childrenPages = nestedPages
                    .filter(function (p) { return p.parent === path; })
                    .map(function (p) { return p.path; });
                return [4 /*yield*/, makeRoute(page.path)];
            case 1:
                route = _a.sent();
                return [4 /*yield*/, Promise.all(childrenPages.map(makeRoute))];
            case 2:
                children = _a.sent();
                return [2 /*return*/, __assign(__assign({}, route), { children: children })];
        }
    });
}); });
//# sourceMappingURL=routes.js.map