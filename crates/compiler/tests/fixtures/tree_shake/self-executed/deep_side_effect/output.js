//index.js:
 (globalThis || window || global)['__farm_default_namespace__'] = {__FARM_TARGET_ENV__: 'browser'};(function (modules, entryModule) {
            var cache = {};

            function dynamicRequire(id) {
              return Promise.resolve(require(id));
            }
          
            function require(id) {
              if (cache[id]) return cache[id].exports;
          
              var module = {
                id: id,
                exports: {}
              };
          
              modules[id](module, module.exports, require, dynamicRequire);
              cache[id] = module;
              return module.exports;
            }
          
            require(entryModule);
          })({"ec853507": function(module, exports, farmRequire, farmDynamicRequire) {
console.log("runtime/index.js")(globalThis || window || global)["__farm_default_namespace__"].__farm_module_system__.setPlugins([]);

},}, "ec853507");(function (modules) {
            for (var key in modules) {
              modules[key].__farm_resource_pot__ = 'index_d7f6.js';
                (globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.register(key, modules[key]);
            }
        })({"446ec84b": function(module, exports, farmRequire, farmDynamicRequire) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "result", {
    enumerable: true,
    get: function() {
        return _use.default;
    }
});
var _interop_require_default = farmRequire("@swc/helpers/_/_interop_require_default");
farmRequire("bebcbd1b");
var _use = /*#__PURE__*/ _interop_require_default._(farmRequire("e0004d19"));

},
"8fb552f8": function(module, exports, farmRequire, farmDynamicRequire) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    get: function() {
        return get;
    },
    set: function() {
        return set;
    }
});
let cache = {};
function set(key, obj) {
    cache[key] = obj;
}
function get(key) {
    return cache[key];
}

},
"b5d64806": function(module, exports, farmRequire, farmDynamicRequire) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _export = farmRequire("446ec84b");
console.log(_export.result);

},
"bebcbd1b": function(module, exports, farmRequire, farmDynamicRequire) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _cache = farmRequire("8fb552f8");
(0, _cache.set)("1", {
    a: 1
});
(0, _cache.set)("2", {
    a: 2
});
(0, _cache.set)("3", {
    a: 3
});
(0, _cache.set)("4", {
    a: 4
});
(0, _cache.set)("5", {
    a: 5
});
(0, _cache.set)("6", {
    a: 6
});

},
"e0004d19": function(module, exports, farmRequire, farmDynamicRequire) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _cache = farmRequire("8fb552f8");
console.log((0, _cache.get)("1").a);
const r = (0, _cache.get)("1").a;
var _default = r;

},});(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setInitialLoadedResources([]);(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setDynamicModuleResourcesMap({  });var farmModuleSystem = (globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__;farmModuleSystem.bootstrap();var entry = farmModuleSystem.require("b5d64806");