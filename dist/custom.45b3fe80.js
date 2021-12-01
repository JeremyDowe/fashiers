// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"scss/custom.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../src/images/ico/items_ico.svg":[["items_ico.c0ecba22.svg","src/images/ico/items_ico.svg"],"src/images/ico/items_ico.svg"],"./../src/images/chevron-right.png":[["chevron-right.c6f67325.png","src/images/chevron-right.png"],"src/images/chevron-right.png"],"./../src/images/chevron-left.png":[["chevron-left.17437f83.png","src/images/chevron-left.png"],"src/images/chevron-left.png"],"./../src/images/ico/heart_ico.svg":[["heart_ico.fd8838e9.svg","src/images/ico/heart_ico.svg"],"src/images/ico/heart_ico.svg"],"./../src/images/view_outfit_sprite.png":[["view_outfit_sprite.9ff818e2.png","src/images/view_outfit_sprite.png"],"src/images/view_outfit_sprite.png"],"./../src/images/ico/zoom_ico.svg":[["zoom_ico.f2fe5c5e.svg","src/images/ico/zoom_ico.svg"],"src/images/ico/zoom_ico.svg"],"./../src/images/detail_control_center.png":[["detail_control_center.1b6c2440.png","src/images/detail_control_center.png"],"src/images/detail_control_center.png"],"./../src/images/test__items.jpg":[["test__items.520a6e04.jpg","src/images/test__items.jpg"],"src/images/test__items.jpg"],"./../src/images/item_dot.png":[["item_dot.7d247c5d.png","src/images/item_dot.png"],"src/images/item_dot.png"],"./../src/images/mobile__detail__item.jpg":[["mobile__detail__item.2f2dd435.jpg","src/images/mobile__detail__item.jpg"],"src/images/mobile__detail__item.jpg"],"./fonts/oakes-grotesk-regular.eot":[["oakes-grotesk-regular.9fc09fef.eot","scss/fonts/oakes-grotesk-regular.eot"],"scss/fonts/oakes-grotesk-regular.eot"],"./fonts/oakes-grotesk-regular.woff2":[["oakes-grotesk-regular.a64c4529.woff2","scss/fonts/oakes-grotesk-regular.woff2"],"scss/fonts/oakes-grotesk-regular.woff2"],"./fonts/oakes-grotesk-regular.woff":[["oakes-grotesk-regular.776ea053.woff","scss/fonts/oakes-grotesk-regular.woff"],"scss/fonts/oakes-grotesk-regular.woff"],"./fonts/oakes-grotesk-regular.ttf":[["oakes-grotesk-regular.ad74e318.ttf","scss/fonts/oakes-grotesk-regular.ttf"],"scss/fonts/oakes-grotesk-regular.ttf"],"./fonts/oakes-grotesk-regular.svg":[["oakes-grotesk-regular.5278349b.svg","scss/fonts/oakes-grotesk-regular.svg"],"scss/fonts/oakes-grotesk-regular.svg"],"./fonts/oakes-grotesk-italic.eot":[["oakes-grotesk-italic.7fc048a5.eot","scss/fonts/oakes-grotesk-italic.eot"],"scss/fonts/oakes-grotesk-italic.eot"],"./fonts/oakes-grotesk-italic.woff2":[["oakes-grotesk-italic.587f811e.woff2","scss/fonts/oakes-grotesk-italic.woff2"],"scss/fonts/oakes-grotesk-italic.woff2"],"./fonts/oakes-grotesk-italic.woff":[["oakes-grotesk-italic.768fabf6.woff","scss/fonts/oakes-grotesk-italic.woff"],"scss/fonts/oakes-grotesk-italic.woff"],"./fonts/oakes-grotesk-italic.ttf":[["oakes-grotesk-italic.a9fb2411.ttf","scss/fonts/oakes-grotesk-italic.ttf"],"scss/fonts/oakes-grotesk-italic.ttf"],"./fonts/oakes-grotesk-italic.svg":[["oakes-grotesk-italic.151cfbd0.svg","scss/fonts/oakes-grotesk-italic.svg"],"scss/fonts/oakes-grotesk-italic.svg"],"./fonts/oakes-grotesk-light.eot":[["oakes-grotesk-light.59ddfe99.eot","scss/fonts/oakes-grotesk-light.eot"],"scss/fonts/oakes-grotesk-light.eot"],"./fonts/oakes-grotesk-light.woff2":[["oakes-grotesk-light.f5d5507c.woff2","scss/fonts/oakes-grotesk-light.woff2"],"scss/fonts/oakes-grotesk-light.woff2"],"./fonts/oakes-grotesk-light.woff":[["oakes-grotesk-light.bed06549.woff","scss/fonts/oakes-grotesk-light.woff"],"scss/fonts/oakes-grotesk-light.woff"],"./fonts/oakes-grotesk-light.ttf":[["oakes-grotesk-light.cd02f066.ttf","scss/fonts/oakes-grotesk-light.ttf"],"scss/fonts/oakes-grotesk-light.ttf"],"./fonts/oakes-grotesk-light.svg":[["oakes-grotesk-light.56ab698b.svg","scss/fonts/oakes-grotesk-light.svg"],"scss/fonts/oakes-grotesk-light.svg"],"./fonts/oakes-grotesk-medium.eot":[["oakes-grotesk-medium.1530cbe2.eot","scss/fonts/oakes-grotesk-medium.eot"],"scss/fonts/oakes-grotesk-medium.eot"],"./fonts/oakes-grotesk-medium.woff2":[["oakes-grotesk-medium.ecf520db.woff2","scss/fonts/oakes-grotesk-medium.woff2"],"scss/fonts/oakes-grotesk-medium.woff2"],"./fonts/oakes-grotesk-medium.woff":[["oakes-grotesk-medium.aa29acc5.woff","scss/fonts/oakes-grotesk-medium.woff"],"scss/fonts/oakes-grotesk-medium.woff"],"./fonts/oakes-grotesk-medium.ttf":[["oakes-grotesk-medium.27cf583e.ttf","scss/fonts/oakes-grotesk-medium.ttf"],"scss/fonts/oakes-grotesk-medium.ttf"],"./fonts/oakes-grotesk-medium.svg":[["oakes-grotesk-medium.a01e4121.svg","scss/fonts/oakes-grotesk-medium.svg"],"scss/fonts/oakes-grotesk-medium.svg"],"./fonts/oakes-grotesk-semi-bold.eot":[["oakes-grotesk-semi-bold.e86b4ffd.eot","scss/fonts/oakes-grotesk-semi-bold.eot"],"scss/fonts/oakes-grotesk-semi-bold.eot"],"./fonts/oakes-grotesk-semi-bold.woff2":[["oakes-grotesk-semi-bold.8155de93.woff2","scss/fonts/oakes-grotesk-semi-bold.woff2"],"scss/fonts/oakes-grotesk-semi-bold.woff2"],"./fonts/oakes-grotesk-semi-bold.woff":[["oakes-grotesk-semi-bold.fa197a09.woff","scss/fonts/oakes-grotesk-semi-bold.woff"],"scss/fonts/oakes-grotesk-semi-bold.woff"],"./fonts/oakes-grotesk-semi-bold.ttf":[["oakes-grotesk-semi-bold.8a93e1c3.ttf","scss/fonts/oakes-grotesk-semi-bold.ttf"],"scss/fonts/oakes-grotesk-semi-bold.ttf"],"./fonts/oakes-grotesk-semi-bold.svg":[["oakes-grotesk-semi-bold.868e7514.svg","scss/fonts/oakes-grotesk-semi-bold.svg"],"scss/fonts/oakes-grotesk-semi-bold.svg"],"./fonts/oakes-grotesk-bold.eot":[["oakes-grotesk-bold.984bfe97.eot","scss/fonts/oakes-grotesk-bold.eot"],"scss/fonts/oakes-grotesk-bold.eot"],"./fonts/oakes-grotesk-bold.woff2":[["oakes-grotesk-bold.c6d1fb45.woff2","scss/fonts/oakes-grotesk-bold.woff2"],"scss/fonts/oakes-grotesk-bold.woff2"],"./fonts/oakes-grotesk-bold.woff":[["oakes-grotesk-bold.34b20bb6.woff","scss/fonts/oakes-grotesk-bold.woff"],"scss/fonts/oakes-grotesk-bold.woff"],"./fonts/oakes-grotesk-bold.ttf":[["oakes-grotesk-bold.0e95ccd3.ttf","scss/fonts/oakes-grotesk-bold.ttf"],"scss/fonts/oakes-grotesk-bold.ttf"],"./fonts/oakes-grotesk-bold.svg":[["oakes-grotesk-bold.a8821825.svg","scss/fonts/oakes-grotesk-bold.svg"],"scss/fonts/oakes-grotesk-bold.svg"],"./../src/images/fashiers_type.svg":[["fashiers_type.f172dedb.svg","src/images/fashiers_type.svg"],"src/images/fashiers_type.svg"],"./../src/images/ico/search_ico.svg":[["search_ico.0681c513.svg","src/images/ico/search_ico.svg"],"src/images/ico/search_ico.svg"],"./../src/images/ico/love_ico.svg":[["love_ico.919d48a2.svg","src/images/ico/love_ico.svg"],"src/images/ico/love_ico.svg"],"./../src/images/ico/cart_ico.svg":[["cart_ico.9355c960.svg","src/images/ico/cart_ico.svg"],"src/images/ico/cart_ico.svg"],"./../src/images/1-Fashiers-storyboard_new.gif":[["1-Fashiers-storyboard_new.59dc21e0.gif","src/images/1-Fashiers-storyboard_new.gif"],"src/images/1-Fashiers-storyboard_new.gif"],"./../src/images/fashiers_banner1.png":[["fashiers_banner1.19f66aec.png","src/images/fashiers_banner1.png"],"src/images/fashiers_banner1.png"],"./../src/images/ico/create_ico.svg":[["create_ico.c67f3a79.svg","src/images/ico/create_ico.svg"],"src/images/ico/create_ico.svg"],"./../src/images/ico/pointer_ico.svg":[["pointer_ico.224a2362.svg","src/images/ico/pointer_ico.svg"],"src/images/ico/pointer_ico.svg"],"./../src/images/ico/pointer_plus_ico.svg":[["pointer_plus_ico.8112caf9.svg","src/images/ico/pointer_plus_ico.svg"],"src/images/ico/pointer_plus_ico.svg"],"./../src/images/ico/shop_and_brands_ico.svg":[["shop_and_brands_ico.47b7f724.svg","src/images/ico/shop_and_brands_ico.svg"],"src/images/ico/shop_and_brands_ico.svg"],"./../src/images/brand_amazon_sprite.png":[["brand_amazon_sprite.e5106991.png","src/images/brand_amazon_sprite.png"],"src/images/brand_amazon_sprite.png"],"./../src/images/brand_yoox_sprite.png":[["brand_yoox_sprite.9ff6e701.png","src/images/brand_yoox_sprite.png"],"src/images/brand_yoox_sprite.png"],"./../src/images/brand_shein_sprite.png":[["brand_shein_sprite.a835f59d.png","src/images/brand_shein_sprite.png"],"src/images/brand_shein_sprite.png"],"./../src/images/brand_loewe_sprite.png":[["brand_loewe_sprite.aaa3dd7e.png","src/images/brand_loewe_sprite.png"],"src/images/brand_loewe_sprite.png"],"./../src/images/brand_zaful_sprite.png":[["brand_zaful_sprite.e7144ba4.png","src/images/brand_zaful_sprite.png"],"src/images/brand_zaful_sprite.png"],"./../src/images/brand_beckham_sprite.png":[["brand_beckham_sprite.ea4157d2.png","src/images/brand_beckham_sprite.png"],"src/images/brand_beckham_sprite.png"],"./../src/images/ico/mobile_menu.svg":[["mobile_menu.d5a3bf43.svg","src/images/ico/mobile_menu.svg"],"src/images/ico/mobile_menu.svg"],"_css_loader":"../../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58240" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/custom.45b3fe80.js.map