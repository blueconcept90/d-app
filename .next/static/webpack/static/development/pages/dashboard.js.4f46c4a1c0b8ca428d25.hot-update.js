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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var getGeoInfo = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
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
        return _ref.apply(this, arguments);
      };
    }();

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
      key: index,
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
      key: index,
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
      key: index,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9kYXNoYm9hcmQuanMiXSwibmFtZXMiOlsicmVzcG9uc2l2ZWRvcyIsInN1cGVyTGFyZ2VEZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwicGFydGlhbFZpc2liaWxpdHlHdXR0ZXIiLCJkZXNrdG9wIiwidGFibGV0IiwibW9iaWxlIiwiRGFzaGJvYXJkIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiYmFyZXMiLCJ1c2VFZmZlY3QiLCJnZXRHZW9JbmZvIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsImdlb2luZm8iLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaXRlbSIsImluZGV4IiwicmV2ZXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxhQUFhLEdBQUc7QUFDbEJDLG1CQUFpQixFQUFFO0FBQ2pCO0FBQ0FDLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FGSztBQUdqQkMsU0FBSyxFQUFFLENBSFU7QUFJakJDLDJCQUF1QixFQUFFO0FBSlIsR0FERDtBQU9sQkMsU0FBTyxFQUFFO0FBQ1BMLGNBQVUsRUFBRTtBQUFFQyxTQUFHLEVBQUUsSUFBUDtBQUFhQyxTQUFHLEVBQUU7QUFBbEIsS0FETDtBQUVQQyxTQUFLLEVBQUUsQ0FGQTtBQUdQQywyQkFBdUIsRUFBRTtBQUhsQixHQVBTO0FBWWxCRSxRQUFNLEVBQUU7QUFDTk4sY0FBVSxFQUFFO0FBQUVDLFNBQUcsRUFBRSxJQUFQO0FBQWFDLFNBQUcsRUFBRTtBQUFsQixLQUROO0FBRU5DLFNBQUssRUFBRSxDQUZEO0FBR05DLDJCQUF1QixFQUFFO0FBSG5CLEdBWlU7QUFpQmxCRyxRQUFNLEVBQUU7QUFDTlAsY0FBVSxFQUFFO0FBQUVDLFNBQUcs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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESCxFQUVHLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSCxDQURKO0FBTUgsR0FQQSxDQVJOLENBekNBLENBREosQ0FESixDQURKO0FBaUVILENBNUZEOztHQUFNZixTOztLQUFBQSxTO0FBOEZTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZGFzaGJvYXJkLmpzLjRmNDZjNGExYzBiOGNhNDI4ZDI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IERlc3RhY2Fkb3MgZnJvbSAnLi4vY29tcG9uZW50cy9EZXN0YWNhZG9zJ1xyXG5pbXBvcnQgKiBhcyBEIGZyb20gJy4uL2Nzcy9kYXNoYm9hcmRjc3MnXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tdWx0aS1jYXJvdXNlbCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5jb25zdCByZXNwb25zaXZlZG9zID0ge1xyXG4gICAgc3VwZXJMYXJnZURlc2t0b3A6IHtcclxuICAgICAgLy8gdGhlIG5hbWluZyBjYW4gYmUgYW55LCBkZXBlbmRzIG9uIHlvdS5cclxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQwMDAsIG1pbjogMzAwMCB9LFxyXG4gICAgICBpdGVtczogNSxcclxuICAgICAgcGFydGlhbFZpc2liaWxpdHlHdXR0ZXI6IDMwXHJcbiAgICB9LFxyXG4gICAgZGVza3RvcDoge1xyXG4gICAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXHJcbiAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICBwYXJ0aWFsVmlzaWJpbGl0eUd1dHRlcjogMzBcclxuICAgIH0sXHJcbiAgICB0YWJsZXQ6IHtcclxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNjAxIH0sXHJcbiAgICAgIGl0ZW1zOiAzLFxyXG4gICAgICBwYXJ0aWFsVmlzaWJpbGl0eUd1dHRlcjogMzBcclxuICAgIH0sXHJcbiAgICBtb2JpbGU6IHtcclxuICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDYwMCwgbWluOiAwIH0sXHJcbiAgICAgIGl0ZW1zOiAyLFxyXG4gICAgICBwYXJ0aWFsVmlzaWJpbGl0eUd1dHRlcjogMTBcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiBcclxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgICBjb25zdCBiYXJlcyA9IFsnYmFyMScsICdiYXIyJywgJ2JhcjMnLCAnYmFyNCcsICdiYXI1JywgJ2JhcjYnLCAnYmFyNycsICdiYXI4JywgJ2JhcjknLCAnYmFyMTAnXVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGdldEdlb0luZm8gPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2lwYXBpLmNvL2pzb24vJylcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBnZW9pbmZvID0gZ2V0R2VvSW5mbygpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGdlb2luZm8pXHJcbiAgICAgICAgLy8gaWYgKFwiZ2VvbG9jYXRpb25cIiBpbiBuYXZpZ2F0b3IpIHtcclxuICAgICAgICAvLyBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhwb3NpdGlvbilcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJOb3QgQXZhaWxhYmxlXCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH0sIFtdKVxyXG5cclxuIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bW90aW9uLmRpdj5cclxuICAgICAgICAgICAgPExheW91dCB0aXRsZT1cIkRpbmVyIEFwcCAtIERhc2hib2FyZCBcIj5cclxuICAgICAgICAgICAgICAgIDxELkRhc2hib2FyZFdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERlc3RhY2Fkb3MgLz5cclxuICAgICAgICAgICAgICAgICAgICA8RC5UaXRsZURlcz5SZXN0YXVyYW50ZXM6PC9ELlRpdGxlRGVzPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgICAgICBwYXJ0aWFsVmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmVkb3N9XHJcbiAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgbWluaW11bVRvdWNoRHJhZz17ODB9XHJcbiAgICAgICAgICAgICAgICAgc3NyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgIGluZmluaXRlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgIGFycm93cz17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICB7YmFyZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29tZXJjaW9zL1tzbHVnXVwiIGFzPVwiL2NvbWVyY2lvcy9hYmNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RC5Mb2NhbGVzV3JhcHBlciBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RC5Mb2NhbFdyYXBwIGtleT17aW5kZXh9IGJhY2tncm91bmQ9e2l0ZW19PjwvRC5Mb2NhbFdyYXBwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxELlBlPiBSZXN0byBMb3JlbSA8L0QuUGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0QuTG9jYWxlc1dyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgICAgICAgIDxELlRpdGxlRGVzPkJhcmVzOjwvRC5UaXRsZURlcz5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgcGFydGlhbFZpc2libGVcclxuICAgICAgICAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlZG9zfVxyXG4gICAgICAgICAgICAgICAgIGRyYWdnYWJsZVxyXG4gICAgICAgICAgICAgICAgIG1pbmltdW1Ub3VjaERyYWc9ezgwfVxyXG4gICAgICAgICAgICAgICAgIHNzcj17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICBhcnJvd3M9e2ZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICAge2JhcmVzLnJldmVyc2UoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEQuTG9jYWxlc1dyYXBwZXIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEQuTG9jYWxXcmFwcCBrZXk9e2luZGV4fSBiYWNrZ3JvdW5kPXtpdGVtfT48L0QuTG9jYWxXcmFwcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RC5QZT4gQmFyZXMgTG9yZW0gPC9ELlBlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ELkxvY2FsZXNXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICA8RC5UaXRsZURlcz5GYXZvcml0b3M6PC9ELlRpdGxlRGVzPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgICAgICAgICBwYXJ0aWFsVmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmVkb3N9XHJcbiAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlXHJcbiAgICAgICAgICAgICAgICAgbWluaW11bVRvdWNoRHJhZz17ODB9XHJcbiAgICAgICAgICAgICAgICAgc3NyPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgIGluZmluaXRlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgIGFycm93cz17ZmFsc2V9PlxyXG4gICAgICAgICAgICAgICAgICAgICB7YmFyZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxELkxvY2FsZXNXcmFwcGVyIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxELkxvY2FsV3JhcHAga2V5PXtpbmRleH0gYmFja2dyb3VuZD17aXRlbX0+PC9ELkxvY2FsV3JhcHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEQuUGU+IEZhdm9yaXRvcyAgPC9ELlBlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ELkxvY2FsZXNXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgICAgICAgICA8L0QuRGFzaGJvYXJkV3JhcHBlcj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=