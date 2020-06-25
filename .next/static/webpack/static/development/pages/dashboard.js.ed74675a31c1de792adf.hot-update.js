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

  function getGeoInfo() {
    return _getGeoInfo.apply(this, arguments);
  }

  function _getGeoInfo() {
    _getGeoInfo = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('https://ipapi.co/json/', {
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: 'GET'
              });

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              return _context.abrupt("return", _context.sent);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getGeoInfo.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var geoinfo = getGeoInfo();
    console.log(geoinfo); // if ("geolocation" in navigator) {
    // navigator.geolocation.getCurrentPosition((position) => {
    //     console.log(position)
    // })
    // } else {
    // console.log("Not Available");
    // }
  }, []);
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Diner App - Dashboard ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["DashboardWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx(_components_Destacados__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }), __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["TitleDes"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 71,
      columnNumber: 17
    }
  }, bares.map(function (item, index) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
      href: "/comercios/[slug]",
      as: "/comercios/abc",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 30
      }
    }, __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["LocalesWrapper"], {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 30
      }
    }, __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["LocalWrapp"], {
      background: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 33
      }
    }), __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["Pe"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 33
      }
    }, " Resto Lorem ")));
  })), __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["TitleDes"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 91,
      columnNumber: 17
    }
  }, bares.reverse().map(function (item, index) {
    return __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["LocalesWrapper"], {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 30
      }
    }, __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["LocalWrapp"], {
      background: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 33
      }
    }), __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["Pe"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 33
      }
    }, " Bares Lorem "));
  })), __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["TitleDes"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
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
      lineNumber: 109,
      columnNumber: 17
    }
  }, bares.map(function (item, index) {
    return __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["LocalesWrapper"], {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 30
      }
    }, __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["LocalWrapp"], {
      background: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 33
      }
    }), __jsx(_css_dashboardcss__WEBPACK_IMPORTED_MODULE_6__["Pe"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsicmVzcG9uc2l2ZWRvcyIsInN1cGVyTGFyZ2VEZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwicGFydGlhbFZpc2liaWxpdHlHdXR0ZXIiLCJkZXNrdG9wIiwidGFibGV0IiwibW9iaWxlIiwiRGFzaGJvYXJkIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiYmFyZXMiLCJnZXRHZW9JbmZvIiwiZmV0Y2giLCJoZWFkZXJzIiwibWV0aG9kIiwicmVzcG9uc2UiLCJqc29uIiwidXNlRWZmZWN0IiwiZ2VvaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJyZXZlcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLGFBQWEsR0FBRztBQUNsQkMsbUJBQWlCLEVBQUU7QUFDakI7QUFDQUMsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQUZLO0FBR2pCQyxTQUFLLEVBQUUsQ0FIVTtBQUlqQkMsMkJBQXVCLEVBQUU7QUFKUixHQUREO0FBT2xCQyxTQUFPLEVBQUU7QUFDUEwsY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQURMO0FBRVBDLFNBQUssRUFBRSxDQUZBO0FBR1BDLDJCQUF1QixFQUFFO0FBSGxCLEdBUFM7QUFZbEJFLFFBQU0sRUFBRTtBQUNOTixjQUFVLEVBQUU7QUFBRUMsU0FBRyxFQUFFLElBQVA7QUFBYUMsU0FBRyxFQUFFO0FBQWxCLEtBRE47QUFFTkMsU0FBSyxFQUFFLENBRkQ7QUFHTkMsMkJBQXVCLEVBQUU7QUFIbkIsR0FaVTtBQWlCbEJHLFFBQU0sRUFBRTtBQUNOUCxjQUFV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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESCxFQUVHLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSCxDQURKO0FBTUgsR0FQQSxDQVJOLENBekNBLENBREosQ0FESixDQURKO0FBaUVILENBaEdEOztHQUFNaEIsUzs7S0FBQUEsUztBQWtHU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRhc2hib2FyZC5qcy5lZDc0Njc1YTMxYzFkZTc5MmFkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHttb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXHJcbmltcG9ydCBEZXN0YWNhZG9zIGZyb20gJy4uL2NvbXBvbmVudHMvRGVzdGFjYWRvcydcclxuaW1wb3J0ICogYXMgRCBmcm9tICcuLi9jc3MvZGFzaGJvYXJkY3NzJ1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAncmVhY3QtbXVsdGktY2Fyb3VzZWwnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuY29uc3QgcmVzcG9uc2l2ZWRvcyA9IHtcclxuICAgIHN1cGVyTGFyZ2VEZXNrdG9wOiB7XHJcbiAgICAgIC8vIHRoZSBuYW1pbmcgY2FuIGJlIGFueSwgZGVwZW5kcyBvbiB5b3UuXHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0MDAwLCBtaW46IDMwMDAgfSxcclxuICAgICAgaXRlbXM6IDUsXHJcbiAgICAgIHBhcnRpYWxWaXNpYmlsaXR5R3V0dGVyOiAzMFxyXG4gICAgfSxcclxuICAgIGRlc2t0b3A6IHtcclxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxyXG4gICAgICBpdGVtczogMyxcclxuICAgICAgcGFydGlhbFZpc2liaWxpdHlHdXR0ZXI6IDMwXHJcbiAgICB9LFxyXG4gICAgdGFibGV0OiB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDYwMSB9LFxyXG4gICAgICBpdGVtczogMyxcclxuICAgICAgcGFydGlhbFZpc2liaWxpdHlHdXR0ZXI6IDMwXHJcbiAgICB9LFxyXG4gICAgbW9iaWxlOiB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MDAsIG1pbjogMCB9LFxyXG4gICAgICBpdGVtczogMixcclxuICAgICAgcGFydGlhbFZpc2liaWxpdHlHdXR0ZXI6IDEwXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gXHJcbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gICAgY29uc3QgYmFyZXMgPSBbJ2JhcjEnLCAnYmFyMicsICdiYXIzJywgJ2JhcjQnLCAnYmFyNScsICdiYXI2JywgJ2JhcjcnLCAnYmFyOCcsICdiYXI5JywgJ2JhcjEwJ11cclxuICAgIFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0R2VvSW5mbygpIHtcclxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9pcGFwaS5jby9qc29uLycsIHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCggKCk9PiB7XHJcbiAgICAgICAgY29uc3QgZ2VvaW5mbyA9IGdldEdlb0luZm8oKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGdlb2luZm8pXHJcbiAgICAgICAgLy8gaWYgKFwiZ2VvbG9jYXRpb25cIiBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICAvLyBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhwb3NpdGlvbilcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJOb3QgQXZhaWxhYmxlXCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH0sIFtdKVxyXG5cclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bW90aW9uLmRpdj5cclxuICAgICAgICAgICAgPExheW91dCB0aXRsZT1cIkRpbmVyIEFwcCAtIERhc2hib2FyZCBcIj5cclxuICAgICAgICAgICAgICAgIDxELkRhc2hib2FyZFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlc3RhY2Fkb3MgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RC5UaXRsZURlcz5SZXN0YXVyYW50ZXM6PC9ELlRpdGxlRGVzPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgICAgICBwYXJ0aWFsVmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmVkb3N9XHJcbiAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgbWluaW11bVRvdWNoRHJhZz17ODB9XHJcbiAgICAgICAgICAgICAgICAgc3NyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgIGluZmluaXRlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgIGFycm93cz17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICB7YmFyZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tZXJjaW9zL1tzbHVnXVwiIGFzPVwiL2NvbWVyY2lvcy9hYmNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RC5Mb2NhbGVzV3JhcHBlciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RC5Mb2NhbFdyYXBwIGJhY2tncm91bmQ9e2l0ZW19PjwvRC5Mb2NhbFdyYXBwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxELlBlPiBSZXN0byBMb3JlbSA8L0QuUGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0QuTG9jYWxlc1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgIDxELlRpdGxlRGVzPkJhcmVzOjwvRC5UaXRsZURlcz5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgcGFydGlhbFZpc2libGVcclxuICAgICAgICAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlZG9zfVxyXG4gICAgICAgICAgICAgICAgIGRyYWdnYWJsZVxyXG4gICAgICAgICAgICAgICAgIG1pbmltdW1Ub3VjaERyYWc9ezgwfVxyXG4gICAgICAgICAgICAgICAgIHNzcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAge2JhcmVzLnJldmVyc2UoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEQuTG9jYWxlc1dyYXBwZXIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEQuTG9jYWxXcmFwcCBiYWNrZ3JvdW5kPXtpdGVtfT48L0QuTG9jYWxXcmFwcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RC5QZT4gQmFyZXMgTG9yZW0gPC9ELlBlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ELkxvY2FsZXNXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICA8RC5UaXRsZURlcz5GYXZvcml0b3M6PC9ELlRpdGxlRGVzPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgICAgICBwYXJ0aWFsVmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmVkb3N9XHJcbiAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgbWluaW11bVRvdWNoRHJhZz17ODB9XHJcbiAgICAgICAgICAgICAgICAgc3NyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgIGluZmluaXRlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgIGFycm93cz17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICB7YmFyZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxELkxvY2FsZXNXcmFwcGVyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxELkxvY2FsV3JhcHAgYmFja2dyb3VuZD17aXRlbX0+PC9ELkxvY2FsV3JhcHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEQuUGU+IEZhdm9yaXRvcyAgPC9ELlBlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ELkxvY2FsZXNXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICA8L0QuRGFzaGJvYXJkV3JhcHBlcj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=