webpackHotUpdate("static\\development\\pages\\dashboard.js",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Destacados__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Destacados */ "./components/Destacados.js");
/* harmony import */ var _css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/dashboardcss */ "./css/dashboardcss.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);



var _this = undefined,
    _jsxFileName = "C:\\xampp\\htdocs\\daniphp\\nextjs\\dinerapp\\pages\\dashboard.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var responsivedos = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: {
      max: 4000,
      min: 3000
    },
    items: 5,
    partialVisibilityGutter: 30
  },
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 601
    },
    items: 3,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: {
      max: 600,
      min: 0
    },
    items: 2,
    partialVisibilityGutter: 10
  }
};

var Dashboard = function Dashboard() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      value = _useState[0],
      setValue = _useState[1];

  var bares = ['bar1', 'bar2', 'bar3', 'bar4', 'bar5', 'bar6', 'bar7', 'bar8', 'bar9', 'bar10'];
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var getGeoInfo, geoinfo;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            getGeoInfo = /*#__PURE__*/function () {
              var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                var res, data;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return fetch('https://ipapi.co/json/');

                      case 2:
                        res = _context.sent;
                        _context.next = 5;
                        return res.json();

                      case 5:
                        data = _context.sent;
                        return _context.abrupt("return", data);

                      case 7:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function getGeoInfo() {
                return _ref2.apply(this, arguments);
              };
            }();

            _context2.next = 3;
            return getGeoInfo();

          case 3:
            geoinfo = _context2.sent;
            console.log(geoinfo); // if ("geolocation" in navigator) {
            // navigator.geolocation.getCurrentPosition((position) => {
            //     console.log(position)
            // })
            // } else {
            // console.log("Not Available");
            // }

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), []);
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Diner App - Dashboard ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["DashboardWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx(_components_Destacados__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }), __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["TitleDes"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, "Restaurantes:"), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_7___default.a, {
    partialVisible: true,
    responsive: responsivedos,
    draggable: true,
    minimumTouchDrag: 80,
    ssr: true,
    infinite: true,
    arrows: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, bares.map(function (item, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/comercios/[slug]",
      as: "/comercios/abc",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 30
      }
    }, __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["LocalesWrapper"], {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 30
      }
    }, __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["LocalWrapp"], {
      background: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 33
      }
    }), __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["Pe"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 33
      }
    }, " Resto Lorem ")));
  })), __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["TitleDes"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, "Bares:"), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_7___default.a, {
    partialVisible: true,
    responsive: responsivedos,
    draggable: true,
    minimumTouchDrag: 80,
    ssr: true,
    infinite: true,
    arrows: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, bares.reverse().map(function (item, index) {
    return __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["LocalesWrapper"], {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 30
      }
    }, __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["LocalWrapp"], {
      background: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 33
      }
    }), __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["Pe"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 33
      }
    }, " Bares Lorem "));
  })), __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["TitleDes"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, "Favoritos:"), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_7___default.a, {
    partialVisible: true,
    responsive: responsivedos,
    draggable: true,
    minimumTouchDrag: 80,
    ssr: true,
    infinite: true,
    arrows: false,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, bares.map(function (item, index) {
    return __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["LocalesWrapper"], {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 30
      }
    }, __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["LocalWrapp"], {
      background: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 33
      }
    }), __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["Pe"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 33
      }
    }, " Favoritos  "));
  })))));
};

_s(Dashboard, "XqQdYKWvZ+Okd02aidqWkV2iB8E=");

_c = Dashboard;
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);

var _c;

$RefreshReg$(_c, "Dashboard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsicmVzcG9uc2l2ZWRvcyIsInN1cGVyTGFyZ2VEZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwicGFydGlhbFZpc2liaWxpdHlHdXR0ZXIiLCJkZXNrdG9wIiwidGFibGV0IiwibW9iaWxlIiwiRGFzaGJvYXJkIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiYmFyZXMiLCJ1c2VFZmZlY3QiLCJnZXRHZW9JbmZvIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsImdlb2luZm8iLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaXRlbSIsImluZGV4IiwicmV2ZXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxhQUFhLEdBQUc7QUFDbEJDLG1CQUFpQixFQUFFO0FBQ2pCO0FBQ0FDLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FGSztBQUdqQkMsU0FBSyxFQUFFLENBSFU7QUFJakJDLDJCQUF1QixFQUFFO0FBSlIsR0FERDtBQU9sQkMsU0FBTyxFQUFFO0FBQ1BMLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETDtBQUVQQyxTQUFLLEVBQUUsQ0FGQTtBQUdQQywyQkFBdUIsRUFBRTtBQUhsQixHQVBTO0FBWWxCRSxRQUFNLEVBQUU7QUFDTk4sY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQUROO0FBRU5DLFNBQUssRUFBRSxDQUZEO0FBR05DLDJCQUF1QixFQUFFO0FBSG5CLEdBWlU7QUFpQmxCRyxRQUFNLEVBQUU7QUFDTlAsY0FBVSxFQUFFO0FBQUVDLFNBQUcs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QUFBQTtBQUFBLE1BREgsRUFFRyxNQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkgsQ0FESjtBQU1ILEdBUEEsQ0FSTixDQXpDQSxDQURKLENBREosQ0FESjtBQWlFSCxDQTVGRDs7R0FBTWYsUzs7S0FBQUEsUztBQThGU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRhc2hib2FyZC5qcy5iNjM0OWFjNzM4MGFjNDdjODdkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHttb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBEZXN0YWNhZG9zIGZyb20gJy4uL2NvbXBvbmVudHMvRGVzdGFjYWRvcydcclxuaW1wb3J0ICogYXMgRCBmcm9tICcuLi9jc3MvZGFzaGJvYXJkY3NzJ1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuY29uc3QgcmVzcG9uc2l2ZWRvcyA9IHtcclxuICAgIHN1cGVyTGFyZ2VEZXNrdG9wOiB7XHJcbiAgICAgIC8vIHRoZSBuYW1pbmcgY2FuIGJlIGFueSwgZGVwZW5kcyBvbiB5b3UuXHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0MDAwLCBtaW46IDMwMDAgfSxcclxuICAgICAgaXRlbXM6IDUsXHJcbiAgICAgIHBhcnRpYWxWaXNpYmlsaXR5R3V0dGVyOiAzMFxyXG4gICAgfSxcclxuICAgIGRlc2t0b3A6IHtcclxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxyXG4gICAgICBpdGVtczogMyxcclxuICAgICAgcGFydGlhbFZpc2liaWxpdHlHdXR0ZXI6IDMwXHJcbiAgICB9LFxyXG4gICAgdGFibGV0OiB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDYwMSB9LFxyXG4gICAgICBpdGVtczogMyxcclxuICAgICAgcGFydGlhbFZpc2liaWxpdHlHdXR0ZXI6IDMwXHJcbiAgICB9LFxyXG4gICAgbW9iaWxlOiB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MDAsIG1pbjogMCB9LFxyXG4gICAgICBpdGVtczogMixcclxuICAgICAgcGFydGlhbFZpc2liaWxpdHlHdXR0ZXI6IDEwXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgYmFyZXMgPSBbJ2JhcjEnLCAnYmFyMicsICdiYXIzJywgJ2JhcjQnLCAnYmFyNScsICdiYXI2JywgJ2JhcjcnLCAnYmFyOCcsICdiYXI5JywgJ2JhcjEwJ11cclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgdXNlRWZmZWN0KCBhc3luYyAoKT0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZ2V0R2VvSW5mbyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vaXBhcGkuY28vanNvbi8nKVxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGdlb2luZm8gPSBhd2FpdCBnZXRHZW9JbmZvKClcclxuICAgICAgICBjb25zb2xlLmxvZyhnZW9pbmZvKVxyXG4gICAgICAgIC8vIGlmIChcImdlb2xvY2F0aW9uXCIgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgICAgLy8gbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pID0+IHtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocG9zaXRpb24pXHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTm90IEF2YWlsYWJsZVwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9LCBbXSlcclxuXHJcbiBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1vdGlvbi5kaXY+XHJcbiAgICAgICAgICAgIDxMYXlvdXQgdGl0bGU9XCJEaW5lciBBcHAgLSBEYXNoYm9hcmQgXCI+XHJcbiAgICAgICAgICAgICAgICA8RC5EYXNoYm9hcmRXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEZXN0YWNhZG9zIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEQuVGl0bGVEZXM+UmVzdGF1cmFudGVzOjwvRC5UaXRsZURlcz5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgcGFydGlhbFZpc2libGVcclxuICAgICAgICAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlZG9zfVxyXG4gICAgICAgICAgICAgICAgIGRyYWdnYWJsZVxyXG4gICAgICAgICAgICAgICAgIG1pbmltdW1Ub3VjaERyYWc9ezgwfVxyXG4gICAgICAgICAgICAgICAgIHNzcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAge2JhcmVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbWVyY2lvcy9bc2x1Z11cIiBhcz1cIi9jb21lcmNpb3MvYWJjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEQuTG9jYWxlc1dyYXBwZXIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEQuTG9jYWxXcmFwcCBiYWNrZ3JvdW5kPXtpdGVtfT48L0QuTG9jYWxXcmFwcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RC5QZT4gUmVzdG8gTG9yZW0gPC9ELlBlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ELkxvY2FsZXNXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICA8RC5UaXRsZURlcz5CYXJlczo8L0QuVGl0bGVEZXM+XHJcbiAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgIHBhcnRpYWxWaXNpYmxlXHJcbiAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZWRvc31cclxuICAgICAgICAgICAgICAgICBkcmFnZ2FibGVcclxuICAgICAgICAgICAgICAgICBtaW5pbXVtVG91Y2hEcmFnPXs4MH1cclxuICAgICAgICAgICAgICAgICBzc3I9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgaW5maW5pdGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgYXJyb3dzPXtmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHtiYXJlcy5yZXZlcnNlKCkubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxELkxvY2FsZXNXcmFwcGVyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxELkxvY2FsV3JhcHAgYmFja2dyb3VuZD17aXRlbX0+PC9ELkxvY2FsV3JhcHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEQuUGU+IEJhcmVzIExvcmVtIDwvRC5QZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRC5Mb2NhbGVzV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgPEQuVGl0bGVEZXM+RmF2b3JpdG9zOjwvRC5UaXRsZURlcz5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgcGFydGlhbFZpc2libGVcclxuICAgICAgICAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlZG9zfVxyXG4gICAgICAgICAgICAgICAgIGRyYWdnYWJsZVxyXG4gICAgICAgICAgICAgICAgIG1pbmltdW1Ub3VjaERyYWc9ezgwfVxyXG4gICAgICAgICAgICAgICAgIHNzcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAge2JhcmVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RC5Mb2NhbGVzV3JhcHBlciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RC5Mb2NhbFdyYXBwIGJhY2tncm91bmQ9e2l0ZW19PjwvRC5Mb2NhbFdyYXBwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxELlBlPiBGYXZvcml0b3MgIDwvRC5QZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRC5Mb2NhbGVzV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICAgICAgPC9ELkRhc2hib2FyZFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgKTtcclxufVxyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDsiXSwic291cmNlUm9vdCI6IiJ9