function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kboard-kboard-module-ngfactory"], {
  /***/
  "../common/utils.ts":
  /*!**************************!*\
    !*** ../common/utils.ts ***!
    \**************************/

  /*! exports provided: mergeBoard */

  /***/
  function commonUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mergeBoard", function () {
      return mergeBoard;
    });

    var mergeBoard = function mergeBoard(p, b) {
      var board = {
        boardId: b.boardId,
        createdOn: b.createdOn,
        title: p.title,
        createdBy: p.createdBy,
        comments: p.comments,
        cards: p.cards
      };
      return board;
    };
    /***/

  },

  /***/
  "./node_modules/@angular/forms/fesm2015/forms.js":
  /*!*******************************************************!*\
    !*** ./node_modules/@angular/forms/fesm2015/forms.js ***!
    \*******************************************************/

  /*! exports provided: AbstractControl, AbstractControlDirective, AbstractFormGroupDirective, COMPOSITION_BUFFER_MODE, CheckboxControlValueAccessor, CheckboxRequiredValidator, ControlContainer, DefaultValueAccessor, EmailValidator, FormArray, FormArrayName, FormBuilder, FormControl, FormControlDirective, FormControlName, FormGroup, FormGroupDirective, FormGroupName, FormsModule, MaxLengthValidator, MinLengthValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgControl, NgControlStatus, NgControlStatusGroup, NgForm, NgModel, NgModelGroup, NgSelectOption, NumberValueAccessor, PatternValidator, RadioControlValueAccessor, RangeValueAccessor, ReactiveFormsModule, RequiredValidator, SelectControlValueAccessor, SelectMultipleControlValueAccessor, VERSION, Validators, ɵInternalFormsSharedModule, ɵNgNoValidate, ɵNgSelectMultipleOption, ɵangular_packages_forms_forms_a, ɵangular_packages_forms_forms_b, ɵangular_packages_forms_forms_ba, ɵangular_packages_forms_forms_bb, ɵangular_packages_forms_forms_bc, ɵangular_packages_forms_forms_bd, ɵangular_packages_forms_forms_be, ɵangular_packages_forms_forms_c, ɵangular_packages_forms_forms_d, ɵangular_packages_forms_forms_e, ɵangular_packages_forms_forms_f, ɵangular_packages_forms_forms_g, ɵangular_packages_forms_forms_h, ɵangular_packages_forms_forms_i, ɵangular_packages_forms_forms_j, ɵangular_packages_forms_forms_k, ɵangular_packages_forms_forms_l, ɵangular_packages_forms_forms_m, ɵangular_packages_forms_forms_n, ɵangular_packages_forms_forms_o, ɵangular_packages_forms_forms_p, ɵangular_packages_forms_forms_q, ɵangular_packages_forms_forms_r, ɵangular_packages_forms_forms_s, ɵangular_packages_forms_forms_t, ɵangular_packages_forms_forms_u, ɵangular_packages_forms_forms_v, ɵangular_packages_forms_forms_w, ɵangular_packages_forms_forms_x, ɵangular_packages_forms_forms_y, ɵangular_packages_forms_forms_z */

  /***/
  function node_modulesAngularFormsFesm2015FormsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractControl", function () {
      return AbstractControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractControlDirective", function () {
      return AbstractControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbstractFormGroupDirective", function () {
      return AbstractFormGroupDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "COMPOSITION_BUFFER_MODE", function () {
      return COMPOSITION_BUFFER_MODE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxControlValueAccessor", function () {
      return CheckboxControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckboxRequiredValidator", function () {
      return CheckboxRequiredValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlContainer", function () {
      return ControlContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultValueAccessor", function () {
      return DefaultValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailValidator", function () {
      return EmailValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormArray", function () {
      return FormArray;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormArrayName", function () {
      return FormArrayName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormBuilder", function () {
      return FormBuilder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControl", function () {
      return FormControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControlDirective", function () {
      return FormControlDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormControlName", function () {
      return FormControlName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormGroup", function () {
      return FormGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormGroupDirective", function () {
      return FormGroupDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormGroupName", function () {
      return FormGroupName;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsModule", function () {
      return FormsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaxLengthValidator", function () {
      return MaxLengthValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinLengthValidator", function () {
      return MinLengthValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NG_ASYNC_VALIDATORS", function () {
      return NG_ASYNC_VALIDATORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NG_VALIDATORS", function () {
      return NG_VALIDATORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NG_VALUE_ACCESSOR", function () {
      return NG_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgControl", function () {
      return NgControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgControlStatus", function () {
      return NgControlStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgControlStatusGroup", function () {
      return NgControlStatusGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgForm", function () {
      return NgForm;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgModel", function () {
      return NgModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgModelGroup", function () {
      return NgModelGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgSelectOption", function () {
      return NgSelectOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NumberValueAccessor", function () {
      return NumberValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatternValidator", function () {
      return PatternValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RadioControlValueAccessor", function () {
      return RadioControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RangeValueAccessor", function () {
      return RangeValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule", function () {
      return ReactiveFormsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequiredValidator", function () {
      return RequiredValidator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectControlValueAccessor", function () {
      return SelectControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectMultipleControlValueAccessor", function () {
      return SelectMultipleControlValueAccessor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Validators", function () {
      return Validators;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵInternalFormsSharedModule", function () {
      return ɵInternalFormsSharedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵNgNoValidate", function () {
      return ɵNgNoValidate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵNgSelectMultipleOption", function () {
      return ɵNgSelectMultipleOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_a", function () {
      return SHARED_FORM_DIRECTIVES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_b", function () {
      return TEMPLATE_DRIVEN_DIRECTIVES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_ba", function () {
      return CHECKBOX_REQUIRED_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bb", function () {
      return EMAIL_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc", function () {
      return MIN_LENGTH_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bd", function () {
      return MAX_LENGTH_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_be", function () {
      return PATTERN_VALIDATOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_c", function () {
      return REACTIVE_DRIVEN_DIRECTIVES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_d", function () {
      return ɵInternalFormsSharedModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_e", function () {
      return CHECKBOX_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_f", function () {
      return DEFAULT_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_g", function () {
      return AbstractControlStatus;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_h", function () {
      return ngControlStatusHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_i", function () {
      return formDirectiveProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j", function () {
      return formControlBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_k", function () {
      return modelGroupProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_l", function () {
      return NUMBER_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_m", function () {
      return RADIO_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_n", function () {
      return RadioControlRegistry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_o", function () {
      return RANGE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_p", function () {
      return NG_MODEL_WITH_FORM_CONTROL_WARNING;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_q", function () {
      return formControlBinding$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_r", function () {
      return controlNameBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_s", function () {
      return formDirectiveProvider$1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_t", function () {
      return formGroupNameProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_u", function () {
      return formArrayNameProvider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_v", function () {
      return SELECT_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_w", function () {
      return SELECT_MULTIPLE_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_x", function () {
      return ɵNgSelectMultipleOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_y", function () {
      return ɵNgNoValidate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_z", function () {
      return REQUIRED_VALIDATOR;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @license Angular v10.0.1
     * (c) 2010-2020 Google LLC. https://angular.io/
     * License: MIT
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Used to provide a `ControlValueAccessor` for form controls.
     *
     * See `DefaultValueAccessor` for how to implement one.
     *
     * @publicApi
     */


    var NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValueAccessor');
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var CHECKBOX_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return CheckboxControlValueAccessor;
      }),
      multi: true
    };
    /**
     * @description
     * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
     * element.
     *
     * @usageNotes
     *
     * ### Using a checkbox with a reactive form.
     *
     * The following example shows how to use a checkbox with a reactive form.
     *
     * ```ts
     * const rememberLoginControl = new FormControl();
     * ```
     *
     * ```
     * <input type="checkbox" [formControl]="rememberLoginControl">
     * ```
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var CheckboxControlValueAccessor = /*#__PURE__*/function () {
      function CheckboxControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, CheckboxControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * @description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange = function (_) {};
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched = function () {};
      }
      /**
       * Sets the "checked" property on the input element.
       *
       * @param value The checked value
       */


      _createClass(CheckboxControlValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'checked', value);
        }
        /**
         * @description
         * Registers a function called when the control value changes.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @description
         * Registers a function called when the control is touched.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param isDisabled The disabled value
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }]);

      return CheckboxControlValueAccessor;
    }();

    CheckboxControlValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
        host: {
          '(change)': 'onChange($event.target.checked)',
          '(blur)': 'onTouched()'
        },
        providers: [CHECKBOX_VALUE_ACCESSOR]
      }]
    }];

    CheckboxControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var DEFAULT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return DefaultValueAccessor;
      }),
      multi: true
    };
    /**
     * We must check whether the agent is Android because composition events
     * behave differently between iOS and Android.
     */

    function _isAndroid() {
      var userAgent = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])() ? Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵgetDOM"])().getUserAgent() : '';
      return /android (\d+)/.test(userAgent.toLowerCase());
    }
    /**
     * @description
     * Provide this token to control if form directives buffer IME input until
     * the "compositionend" event occurs.
     * @publicApi
     */


    var COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('CompositionEventMode');
    /**
     * @description
     * The default `ControlValueAccessor` for writing a value and listening to changes on input
     * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * @usageNotes
     *
     * ### Using the default value accessor
     *
     * The following example shows how to use an input element that activates the default value accessor
     * (in this case, a text field).
     *
     * ```ts
     * const firstNameControl = new FormControl();
     * ```
     *
     * ```
     * <input type="text" [formControl]="firstNameControl">
     * ```
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var DefaultValueAccessor = /*#__PURE__*/function () {
      function DefaultValueAccessor(_renderer, _elementRef, _compositionMode) {
        _classCallCheck(this, DefaultValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._compositionMode = _compositionMode;
        /**
         * @description
         * The registered callback function called when an input event occurs on the input element.
         */

        this.onChange = function (_) {};
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched = function () {};
        /** Whether the user is creating a composition string (IME events). */


        this._composing = false;

        if (this._compositionMode == null) {
          this._compositionMode = !_isAndroid();
        }
      }
      /**
       * Sets the "value" property on the input element.
       *
       * @param value The checked value
       */


      _createClass(DefaultValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          var normalizedValue = value == null ? '' : value;

          this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        }
        /**
         * @description
         * Registers a function called when the control value changes.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @description
         * Registers a function called when the control is touched.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param isDisabled The disabled value
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /** @internal */

      }, {
        key: "_handleInput",
        value: function _handleInput(value) {
          if (!this._compositionMode || this._compositionMode && !this._composing) {
            this.onChange(value);
          }
        }
        /** @internal */

      }, {
        key: "_compositionStart",
        value: function _compositionStart() {
          this._composing = true;
        }
        /** @internal */

      }, {
        key: "_compositionEnd",
        value: function _compositionEnd(value) {
          this._composing = false;
          this._compositionMode && this.onChange(value);
        }
      }]);

      return DefaultValueAccessor;
    }();

    DefaultValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
        // TODO: vsavkin replace the above selector with the one below it once
        // https://github.com/angular/angular/issues/3011 is implemented
        // selector: '[ngModel],[formControl],[formControlName]',
        host: {
          '(input)': '$any(this)._handleInput($event.target.value)',
          '(blur)': 'onTouched()',
          '(compositionstart)': '$any(this)._compositionStart()',
          '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
        },
        providers: [DEFAULT_VALUE_ACCESSOR]
      }]
    }];

    DefaultValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: Boolean,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [COMPOSITION_BUFFER_MODE]
        }]
      }];
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @description
     * Base class for control directives.
     *
     * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
     *
     * @publicApi
     */


    var AbstractControlDirective = /*#__PURE__*/function () {
      function AbstractControlDirective() {
        _classCallCheck(this, AbstractControlDirective);
      }

      _createClass(AbstractControlDirective, [{
        key: "reset",

        /**
         * @description
         * Resets the control with the provided value if the control is present.
         */
        value: function reset() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          if (this.control) this.control.reset(value);
        }
        /**
         * @description
         * Reports whether the control with the given path has the error specified.
         *
         * @param errorCode The code of the error to check
         * @param path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * If no path is given, this method checks for the error on the current control.
         *
         * @returns whether the given error is present in the control at the given path.
         *
         * If the control is not present, false is returned.
         */

      }, {
        key: "hasError",
        value: function hasError(errorCode, path) {
          return this.control ? this.control.hasError(errorCode, path) : false;
        }
        /**
         * @description
         * Reports error data for the control with the given path.
         *
         * @param errorCode The code of the error to check
         * @param path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * @returns error data for that particular error. If the control or error is not present,
         * null is returned.
         */

      }, {
        key: "getError",
        value: function getError(errorCode, path) {
          return this.control ? this.control.getError(errorCode, path) : null;
        }
      }, {
        key: "value",

        /**
         * @description
         * Reports the value of the control if it is present, otherwise null.
         */
        get: function get() {
          return this.control ? this.control.value : null;
        }
        /**
         * @description
         * Reports whether the control is valid. A control is considered valid if no
         * validation errors exist with the current value.
         * If the control is not present, null is returned.
         */

      }, {
        key: "valid",
        get: function get() {
          return this.control ? this.control.valid : null;
        }
        /**
         * @description
         * Reports whether the control is invalid, meaning that an error exists in the input value.
         * If the control is not present, null is returned.
         */

      }, {
        key: "invalid",
        get: function get() {
          return this.control ? this.control.invalid : null;
        }
        /**
         * @description
         * Reports whether a control is pending, meaning that that async validation is occurring and
         * errors are not yet available for the input value. If the control is not present, null is
         * returned.
         */

      }, {
        key: "pending",
        get: function get() {
          return this.control ? this.control.pending : null;
        }
        /**
         * @description
         * Reports whether the control is disabled, meaning that the control is disabled
         * in the UI and is exempt from validation checks and excluded from aggregate
         * values of ancestor controls. If the control is not present, null is returned.
         */

      }, {
        key: "disabled",
        get: function get() {
          return this.control ? this.control.disabled : null;
        }
        /**
         * @description
         * Reports whether the control is enabled, meaning that the control is included in ancestor
         * calculations of validity or value. If the control is not present, null is returned.
         */

      }, {
        key: "enabled",
        get: function get() {
          return this.control ? this.control.enabled : null;
        }
        /**
         * @description
         * Reports the control's validation errors. If the control is not present, null is returned.
         */

      }, {
        key: "errors",
        get: function get() {
          return this.control ? this.control.errors : null;
        }
        /**
         * @description
         * Reports whether the control is pristine, meaning that the user has not yet changed
         * the value in the UI. If the control is not present, null is returned.
         */

      }, {
        key: "pristine",
        get: function get() {
          return this.control ? this.control.pristine : null;
        }
        /**
         * @description
         * Reports whether the control is dirty, meaning that the user has changed
         * the value in the UI. If the control is not present, null is returned.
         */

      }, {
        key: "dirty",
        get: function get() {
          return this.control ? this.control.dirty : null;
        }
        /**
         * @description
         * Reports whether the control is touched, meaning that the user has triggered
         * a `blur` event on it. If the control is not present, null is returned.
         */

      }, {
        key: "touched",
        get: function get() {
          return this.control ? this.control.touched : null;
        }
        /**
         * @description
         * Reports the validation status of the control. Possible values include:
         * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
         * If the control is not present, null is returned.
         */

      }, {
        key: "status",
        get: function get() {
          return this.control ? this.control.status : null;
        }
        /**
         * @description
         * Reports whether the control is untouched, meaning that the user has not yet triggered
         * a `blur` event on it. If the control is not present, null is returned.
         */

      }, {
        key: "untouched",
        get: function get() {
          return this.control ? this.control.untouched : null;
        }
        /**
         * @description
         * Returns a multicasting observable that emits a validation status whenever it is
         * calculated for the control. If the control is not present, null is returned.
         */

      }, {
        key: "statusChanges",
        get: function get() {
          return this.control ? this.control.statusChanges : null;
        }
        /**
         * @description
         * Returns a multicasting observable of value changes for the control that emits every time the
         * value of the control changes in the UI or programmatically.
         * If the control is not present, null is returned.
         */

      }, {
        key: "valueChanges",
        get: function get() {
          return this.control ? this.control.valueChanges : null;
        }
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */

      }, {
        key: "path",
        get: function get() {
          return null;
        }
      }]);

      return AbstractControlDirective;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @description
     * A base class for directives that contain multiple registered instances of `NgControl`.
     * Only used by the forms module.
     *
     * @publicApi
     */


    var ControlContainer = /*#__PURE__*/function (_AbstractControlDirec) {
      _inherits(ControlContainer, _AbstractControlDirec);

      var _super = _createSuper(ControlContainer);

      function ControlContainer() {
        _classCallCheck(this, ControlContainer);

        return _super.apply(this, arguments);
      }

      _createClass(ControlContainer, [{
        key: "formDirective",

        /**
         * @description
         * The top-level form directive for the control.
         */
        get: function get() {
          return null;
        }
        /**
         * @description
         * The path to this group.
         */

      }, {
        key: "path",
        get: function get() {
          return null;
        }
      }]);

      return ControlContainer;
    }(AbstractControlDirective);
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function unimplemented() {
      throw new Error('unimplemented');
    }
    /**
     * @description
     * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
     * object to a DOM element.
     *
     * @publicApi
     */


    var NgControl = /*#__PURE__*/function (_AbstractControlDirec2) {
      _inherits(NgControl, _AbstractControlDirec2);

      var _super2 = _createSuper(NgControl);

      function NgControl() {
        var _this2;

        _classCallCheck(this, NgControl);

        _this2 = _super2.apply(this, arguments);
        /**
         * @description
         * The parent form for the control.
         *
         * @internal
         */

        _this2._parent = null;
        /**
         * @description
         * The name for the control
         */

        _this2.name = null;
        /**
         * @description
         * The value accessor for the control
         */

        _this2.valueAccessor = null;
        /**
         * @description
         * The uncomposed array of synchronous validators for the control
         *
         * @internal
         */

        _this2._rawValidators = [];
        /**
         * @description
         * The uncomposed array of async validators for the control
         *
         * @internal
         */

        _this2._rawAsyncValidators = [];
        return _this2;
      }
      /**
       * @description
       * The registered synchronous validator function for the control
       *
       * @throws An exception that this method is not implemented
       */


      _createClass(NgControl, [{
        key: "validator",
        get: function get() {
          return unimplemented();
        }
        /**
         * @description
         * The registered async validator function for the control
         *
         * @throws An exception that this method is not implemented
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return unimplemented();
        }
      }]);

      return NgControl;
    }(AbstractControlDirective);
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var AbstractControlStatus = /*#__PURE__*/function () {
      function AbstractControlStatus(cd) {
        _classCallCheck(this, AbstractControlStatus);

        this._cd = cd;
      }

      _createClass(AbstractControlStatus, [{
        key: "ngClassUntouched",
        get: function get() {
          return this._cd.control ? this._cd.control.untouched : false;
        }
      }, {
        key: "ngClassTouched",
        get: function get() {
          return this._cd.control ? this._cd.control.touched : false;
        }
      }, {
        key: "ngClassPristine",
        get: function get() {
          return this._cd.control ? this._cd.control.pristine : false;
        }
      }, {
        key: "ngClassDirty",
        get: function get() {
          return this._cd.control ? this._cd.control.dirty : false;
        }
      }, {
        key: "ngClassValid",
        get: function get() {
          return this._cd.control ? this._cd.control.valid : false;
        }
      }, {
        key: "ngClassInvalid",
        get: function get() {
          return this._cd.control ? this._cd.control.invalid : false;
        }
      }, {
        key: "ngClassPending",
        get: function get() {
          return this._cd.control ? this._cd.control.pending : false;
        }
      }]);

      return AbstractControlStatus;
    }();

    var ngControlStatusHost = {
      '[class.ng-untouched]': 'ngClassUntouched',
      '[class.ng-touched]': 'ngClassTouched',
      '[class.ng-pristine]': 'ngClassPristine',
      '[class.ng-dirty]': 'ngClassDirty',
      '[class.ng-valid]': 'ngClassValid',
      '[class.ng-invalid]': 'ngClassInvalid',
      '[class.ng-pending]': 'ngClassPending'
    };
    /**
     * @description
     * Directive automatically applied to Angular form controls that sets CSS classes
     * based on control status.
     *
     * @usageNotes
     *
     * ### CSS classes applied
     *
     * The following classes are applied as the properties become true:
     *
     * * ng-valid
     * * ng-invalid
     * * ng-pending
     * * ng-pristine
     * * ng-dirty
     * * ng-untouched
     * * ng-touched
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var NgControlStatus = /*#__PURE__*/function (_AbstractControlStatu) {
      _inherits(NgControlStatus, _AbstractControlStatu);

      var _super3 = _createSuper(NgControlStatus);

      function NgControlStatus(cd) {
        _classCallCheck(this, NgControlStatus);

        return _super3.call(this, cd);
      }

      return NgControlStatus;
    }(AbstractControlStatus);

    NgControlStatus.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formControlName],[ngModel],[formControl]',
        host: ngControlStatusHost
      }]
    }];

    NgControlStatus.ctorParameters = function () {
      return [{
        type: NgControl,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }];
    };
    /**
     * @description
     * Directive automatically applied to Angular form groups that sets CSS classes
     * based on control status (valid/invalid/dirty/etc).
     *
     * @see `NgControlStatus`
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */


    var NgControlStatusGroup = /*#__PURE__*/function (_AbstractControlStatu2) {
      _inherits(NgControlStatusGroup, _AbstractControlStatu2);

      var _super4 = _createSuper(NgControlStatusGroup);

      function NgControlStatusGroup(cd) {
        _classCallCheck(this, NgControlStatusGroup);

        return _super4.call(this, cd);
      }

      return NgControlStatusGroup;
    }(AbstractControlStatus);

    NgControlStatusGroup.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
        host: ngControlStatusHost
      }]
    }];

    NgControlStatusGroup.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }]
      }];
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function isEmptyInputValue(value) {
      // we don't check for string here so it also works with arrays
      return value == null || value.length === 0;
    }

    function hasValidLength(value) {
      // non-strict comparison is intentional, to check for both `null` and `undefined` values
      return value != null && typeof value.length === 'number';
    }
    /**
     * @description
     * An `InjectionToken` for registering additional synchronous validators used with
     * `AbstractControl`s.
     *
     * @see `NG_ASYNC_VALIDATORS`
     *
     * @usageNotes
     *
     * ### Providing a custom validator
     *
     * The following example registers a custom validator directive. Adding the validator to the
     * existing collection of validators requires the `multi: true` option.
     *
     * ```typescript
     * @Directive({
     *   selector: '[customValidator]',
     *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
     * })
     * class CustomValidatorDirective implements Validator {
     *   validate(control: AbstractControl): ValidationErrors | null {
     *     return { 'custom': true };
     *   }
     * }
     * ```
     *
     * @publicApi
     */


    var NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgValidators');
    /**
     * @description
     * An `InjectionToken` for registering additional asynchronous validators used with
     * `AbstractControl`s.
     *
     * @see `NG_VALIDATORS`
     *
     * @publicApi
     */

    var NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgAsyncValidators');
    /**
     * A regular expression that matches valid e-mail addresses.
     *
     * At a high level, this regexp matches e-mail addresses of the format `local-part@tld`, where:
     * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
     *   punctuation symbols).
     * - `local-part` cannot begin or end with a period (`.`).
     * - `local-part` cannot be longer than 64 characters.
     * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
     *   `foo.com`.
     * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
     *   periods (`.`)).
     * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
     * - A `label` cannot be longer than 63 characters.
     * - The whole address cannot be longer than 254 characters.
     *
     * ## Implementation background
     *
     * This regexp was ported over from AngularJS (see there for git history):
     * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
     * It is based on the
     * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
     * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
     * lengths of different parts of the address). The main differences from the WHATWG version are:
     *   - Disallow `local-part` to begin or end with a period (`.`).
     *   - Disallow `local-part` length to exceed 64 characters.
     *   - Disallow total address length to exceed 254 characters.
     *
     * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
     */

    var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    /**
     * @description
     * Provides a set of built-in validators that can be used by form controls.
     *
     * A validator is a function that processes a `FormControl` or collection of
     * controls and returns an error map or null. A null map means that validation has passed.
     *
     * @see [Form Validation](/guide/form-validation)
     *
     * @publicApi
     */

    var Validators = /*#__PURE__*/function () {
      function Validators() {
        _classCallCheck(this, Validators);
      }

      _createClass(Validators, null, [{
        key: "min",

        /**
         * @description
         * Validator that requires the control's value to be greater than or equal to the provided number.
         * The validator exists only as a function and not as a directive.
         *
         * @usageNotes
         *
         * ### Validate against a minimum of 3
         *
         * ```typescript
         * const control = new FormControl(2, Validators.min(3));
         *
         * console.log(control.errors); // {min: {min: 3, actual: 2}}
         * ```
         *
         * @returns A validator function that returns an error map with the
         * `min` property if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */
        value: function min(_min) {
          return function (control) {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(_min)) {
              return null; // don't validate empty values to allow optional controls
            }

            var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
            // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min

            return !isNaN(value) && value < _min ? {
              'min': {
                'min': _min,
                'actual': control.value
              }
            } : null;
          };
        }
        /**
         * @description
         * Validator that requires the control's value to be less than or equal to the provided number.
         * The validator exists only as a function and not as a directive.
         *
         * @usageNotes
         *
         * ### Validate against a maximum of 15
         *
         * ```typescript
         * const control = new FormControl(16, Validators.max(15));
         *
         * console.log(control.errors); // {max: {max: 15, actual: 16}}
         * ```
         *
         * @returns A validator function that returns an error map with the
         * `max` property if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "max",
        value: function max(_max) {
          return function (control) {
            if (isEmptyInputValue(control.value) || isEmptyInputValue(_max)) {
              return null; // don't validate empty values to allow optional controls
            }

            var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
            // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max

            return !isNaN(value) && value > _max ? {
              'max': {
                'max': _max,
                'actual': control.value
              }
            } : null;
          };
        }
        /**
         * @description
         * Validator that requires the control have a non-empty value.
         *
         * @usageNotes
         *
         * ### Validate that the field is non-empty
         *
         * ```typescript
         * const control = new FormControl('', Validators.required);
         *
         * console.log(control.errors); // {required: true}
         * ```
         *
         * @returns An error map with the `required` property
         * if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "required",
        value: function required(control) {
          return isEmptyInputValue(control.value) ? {
            'required': true
          } : null;
        }
        /**
         * @description
         * Validator that requires the control's value be true. This validator is commonly
         * used for required checkboxes.
         *
         * @usageNotes
         *
         * ### Validate that the field value is true
         *
         * ```typescript
         * const control = new FormControl('', Validators.requiredTrue);
         *
         * console.log(control.errors); // {required: true}
         * ```
         *
         * @returns An error map that contains the `required` property
         * set to `true` if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "requiredTrue",
        value: function requiredTrue(control) {
          return control.value === true ? null : {
            'required': true
          };
        }
        /**
         * @description
         * Validator that requires the control's value pass an email validation test.
         *
         * Tests the value using a [regular
         * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
         * pattern suitable for common usecases. The pattern is based on the definition of a valid email
         * address in the [WHATWG HTML
         * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
         * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
         * lengths of different parts of the address).
         *
         * The differences from the WHATWG version include:
         * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
         * - Disallow `local-part` to be longer than 64 characters.
         * - Disallow the whole address to be longer than 254 characters.
         *
         * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
         * validate the value against a different pattern.
         *
         * @usageNotes
         *
         * ### Validate that the field matches a valid email pattern
         *
         * ```typescript
         * const control = new FormControl('bad@', Validators.email);
         *
         * console.log(control.errors); // {email: true}
         * ```
         *
         * @returns An error map with the `email` property
         * if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "email",
        value: function email(control) {
          if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
          }

          return EMAIL_REGEXP.test(control.value) ? null : {
            'email': true
          };
        }
        /**
         * @description
         * Validator that requires the length of the control's value to be greater than or equal
         * to the provided minimum length. This validator is also provided by default if you use the
         * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
         * only for types that have a numeric `length` property, such as strings or arrays. The
         * `minLength` validator logic is also not invoked for values when their `length` property is 0
         * (for example in case of an empty string or an empty array), to support optional controls. You
         * can use the standard `required` validator if empty values should not be considered valid.
         *
         * @usageNotes
         *
         * ### Validate that the field has a minimum of 3 characters
         *
         * ```typescript
         * const control = new FormControl('ng', Validators.minLength(3));
         *
         * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
         * ```
         *
         * ```html
         * <input minlength="5">
         * ```
         *
         * @returns A validator function that returns an error map with the
         * `minlength` if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "minLength",
        value: function minLength(_minLength) {
          return function (control) {
            if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
              // don't validate empty values to allow optional controls
              // don't validate values without `length` property
              return null;
            }

            return control.value.length < _minLength ? {
              'minlength': {
                'requiredLength': _minLength,
                'actualLength': control.value.length
              }
            } : null;
          };
        }
        /**
         * @description
         * Validator that requires the length of the control's value to be less than or equal
         * to the provided maximum length. This validator is also provided by default if you use the
         * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
         * only for types that have a numeric `length` property, such as strings or arrays.
         *
         * @usageNotes
         *
         * ### Validate that the field has maximum of 5 characters
         *
         * ```typescript
         * const control = new FormControl('Angular', Validators.maxLength(5));
         *
         * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
         * ```
         *
         * ```html
         * <input maxlength="5">
         * ```
         *
         * @returns A validator function that returns an error map with the
         * `maxlength` property if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "maxLength",
        value: function maxLength(_maxLength) {
          return function (control) {
            return hasValidLength(control.value) && control.value.length > _maxLength ? {
              'maxlength': {
                'requiredLength': _maxLength,
                'actualLength': control.value.length
              }
            } : null;
          };
        }
        /**
         * @description
         * Validator that requires the control's value to match a regex pattern. This validator is also
         * provided by default if you use the HTML5 `pattern` attribute.
         *
         * @usageNotes
         *
         * ### Validate that the field only contains letters or spaces
         *
         * ```typescript
         * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
         *
         * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
         * ```
         *
         * ```html
         * <input pattern="[a-zA-Z ]*">
         * ```
         *
         * @param pattern A regular expression to be used as is to test the values, or a string.
         * If a string is passed, the `^` character is prepended and the `$` character is
         * appended to the provided string (if not already present), and the resulting regular
         * expression is used to test the values.
         *
         * @returns A validator function that returns an error map with the
         * `pattern` property if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "pattern",
        value: function pattern(_pattern) {
          if (!_pattern) return Validators.nullValidator;
          var regex;
          var regexStr;

          if (typeof _pattern === 'string') {
            regexStr = '';
            if (_pattern.charAt(0) !== '^') regexStr += '^';
            regexStr += _pattern;
            if (_pattern.charAt(_pattern.length - 1) !== '$') regexStr += '$';
            regex = new RegExp(regexStr);
          } else {
            regexStr = _pattern.toString();
            regex = _pattern;
          }

          return function (control) {
            if (isEmptyInputValue(control.value)) {
              return null; // don't validate empty values to allow optional controls
            }

            var value = control.value;
            return regex.test(value) ? null : {
              'pattern': {
                'requiredPattern': regexStr,
                'actualValue': value
              }
            };
          };
        }
        /**
         * @description
         * Validator that performs no operation.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "nullValidator",
        value: function nullValidator(control) {
          return null;
        }
      }, {
        key: "compose",
        value: function compose(validators) {
          if (!validators) return null;
          var presentValidators = validators.filter(isPresent);
          if (presentValidators.length == 0) return null;
          return function (control) {
            return _mergeErrors(_executeValidators(control, presentValidators));
          };
        }
        /**
         * @description
         * Compose multiple async validators into a single function that returns the union
         * of the individual error objects for the provided control.
         *
         * @returns A validator function that returns an error map with the
         * merged error objects of the async validators if the validation check fails, otherwise `null`.
         *
         * @see `updateValueAndValidity()`
         *
         */

      }, {
        key: "composeAsync",
        value: function composeAsync(validators) {
          if (!validators) return null;
          var presentValidators = validators.filter(isPresent);
          if (presentValidators.length == 0) return null;
          return function (control) {
            var observables = _executeAsyncValidators(control, presentValidators).map(toObservable);

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(_mergeErrors));
          };
        }
      }]);

      return Validators;
    }();

    function isPresent(o) {
      return o != null;
    }

    function toObservable(r) {
      var obs = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(r) ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(r) : r;

      if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisObservable"])(obs)) {
        throw new Error("Expected validator to return Promise or Observable.");
      }

      return obs;
    }

    function _executeValidators(control, validators) {
      return validators.map(function (v) {
        return v(control);
      });
    }

    function _executeAsyncValidators(control, validators) {
      return validators.map(function (v) {
        return v(control);
      });
    }

    function _mergeErrors(arrayOfErrors) {
      var res = {}; // Not using Array.reduce here due to a Chrome 80 bug
      // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

      arrayOfErrors.forEach(function (errors) {
        res = errors != null ? Object.assign(Object.assign({}, res), errors) : res;
      });
      return Object.keys(res).length === 0 ? null : res;
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    function normalizeValidator(validator) {
      if (!!validator.validate) {
        return function (c) {
          return validator.validate(c);
        };
      } else {
        return validator;
      }
    }

    function normalizeAsyncValidator(validator) {
      if (!!validator.validate) {
        return function (c) {
          return validator.validate(c);
        };
      } else {
        return validator;
      }
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var NUMBER_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return NumberValueAccessor;
      }),
      multi: true
    };
    /**
     * @description
     * The `ControlValueAccessor` for writing a number value and listening to number input changes.
     * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
     * directives.
     *
     * @usageNotes
     *
     * ### Using a number input with a reactive form.
     *
     * The following example shows how to use a number input with a reactive form.
     *
     * ```ts
     * const totalCountControl = new FormControl();
     * ```
     *
     * ```
     * <input type="number" [formControl]="totalCountControl">
     * ```
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var NumberValueAccessor = /*#__PURE__*/function () {
      function NumberValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, NumberValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * @description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */

        this.onChange = function (_) {};
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched = function () {};
      }
      /**
       * Sets the "value" property on the input element.
       *
       * @param value The checked value
       */


      _createClass(NumberValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
          var normalizedValue = value == null ? '' : value;

          this._renderer.setProperty(this._elementRef.nativeElement, 'value', normalizedValue);
        }
        /**
         * @description
         * Registers a function called when the control value changes.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = function (value) {
            fn(value == '' ? null : parseFloat(value));
          };
        }
        /**
         * @description
         * Registers a function called when the control is touched.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param isDisabled The disabled value
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }]);

      return NumberValueAccessor;
    }();

    NumberValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
        host: {
          '(input)': 'onChange($event.target.value)',
          '(blur)': 'onTouched()'
        },
        providers: [NUMBER_VALUE_ACCESSOR]
      }]
    }];

    NumberValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var RADIO_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return RadioControlValueAccessor;
      }),
      multi: true
    };
    /**
     * @description
     * Class used by Angular to track radio buttons. For internal use only.
     */

    var RadioControlRegistry = /*#__PURE__*/function () {
      function RadioControlRegistry() {
        _classCallCheck(this, RadioControlRegistry);

        this._accessors = [];
      }
      /**
       * @description
       * Adds a control to the internal registry. For internal use only.
       */


      _createClass(RadioControlRegistry, [{
        key: "add",
        value: function add(control, accessor) {
          this._accessors.push([control, accessor]);
        }
        /**
         * @description
         * Removes a control from the internal registry. For internal use only.
         */

      }, {
        key: "remove",
        value: function remove(accessor) {
          for (var i = this._accessors.length - 1; i >= 0; --i) {
            if (this._accessors[i][1] === accessor) {
              this._accessors.splice(i, 1);

              return;
            }
          }
        }
        /**
         * @description
         * Selects a radio button. For internal use only.
         */

      }, {
        key: "select",
        value: function select(accessor) {
          var _this3 = this;

          this._accessors.forEach(function (c) {
            if (_this3._isSameGroup(c, accessor) && c[1] !== accessor) {
              c[1].fireUncheck(accessor.value);
            }
          });
        }
      }, {
        key: "_isSameGroup",
        value: function _isSameGroup(controlPair, accessor) {
          if (!controlPair[0].control) return false;
          return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
        }
      }]);

      return RadioControlRegistry;
    }();

    RadioControlRegistry.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @description
     * The `ControlValueAccessor` for writing radio control values and listening to radio control
     * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * @usageNotes
     *
     * ### Using radio buttons with reactive form directives
     *
     * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
     * a reactive form, radio buttons in the same group should have the same `formControlName`.
     * Providing a `name` attribute is optional.
     *
     * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var RadioControlValueAccessor = /*#__PURE__*/function () {
      function RadioControlValueAccessor(_renderer, _elementRef, _registry, _injector) {
        _classCallCheck(this, RadioControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._registry = _registry;
        this._injector = _injector;
        /**
         * @description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange = function () {};
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched = function () {};
      }
      /**
       * @description
       * A lifecycle method called when the directive is initialized. For internal use only.
       */


      _createClass(RadioControlValueAccessor, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._control = this._injector.get(NgControl);

          this._checkName();

          this._registry.add(this._control, this);
        }
        /**
         * @description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._registry.remove(this);
        }
        /**
         * @description
         * Sets the "checked" property value on the radio input element.
         *
         * @param value The checked value
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this._state = value === this.value;

          this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
        }
        /**
         * @description
         * Registers a function called when the control value changes.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          var _this4 = this;

          this._fn = fn;

          this.onChange = function () {
            fn(_this4.value);

            _this4._registry.select(_this4);
          };
        }
        /**
         * Sets the "value" on the radio input element and unchecks it.
         *
         * @param value
         */

      }, {
        key: "fireUncheck",
        value: function fireUncheck(value) {
          this.writeValue(value);
        }
        /**
         * @description
         * Registers a function called when the control is touched.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the input element.
         *
         * @param isDisabled The disabled value
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }, {
        key: "_checkName",
        value: function _checkName() {
          if (this.name && this.formControlName && this.name !== this.formControlName) {
            this._throwNameError();
          }

          if (!this.name && this.formControlName) this.name = this.formControlName;
        }
      }, {
        key: "_throwNameError",
        value: function _throwNameError() {
          throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
        }
      }]);

      return RadioControlValueAccessor;
    }();

    RadioControlValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
        host: {
          '(change)': 'onChange()',
          '(blur)': 'onTouched()'
        },
        providers: [RADIO_VALUE_ACCESSOR]
      }]
    }];

    RadioControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: RadioControlRegistry
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }];
    };

    RadioControlValueAccessor.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formControlName: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var RANGE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return RangeValueAccessor;
      }),
      multi: true
    };
    /**
     * @description
     * The `ControlValueAccessor` for writing a range value and listening to range input changes.
     * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
     * directives.
     *
     * @usageNotes
     *
     * ### Using a range input with a reactive form
     *
     * The following example shows how to use a range input with a reactive form.
     *
     * ```ts
     * const ageControl = new FormControl();
     * ```
     *
     * ```
     * <input type="range" [formControl]="ageControl">
     * ```
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var RangeValueAccessor = /*#__PURE__*/function () {
      function RangeValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, RangeValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /**
         * @description
         * The registered callback function called when a change or input event occurs on the input
         * element.
         */

        this.onChange = function (_) {};
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched = function () {};
      }
      /**
       * Sets the "value" property on the input element.
       *
       * @param value The checked value
       */


      _createClass(RangeValueAccessor, [{
        key: "writeValue",
        value: function writeValue(value) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(value));
        }
        /**
         * @description
         * Registers a function called when the control value changes.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = function (value) {
            fn(value == '' ? null : parseFloat(value));
          };
        }
        /**
         * @description
         * Registers a function called when the control is touched.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the range input element.
         *
         * @param isDisabled The disabled value
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
      }]);

      return RangeValueAccessor;
    }();

    RangeValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
        host: {
          '(change)': 'onChange($event.target.value)',
          '(input)': 'onChange($event.target.value)',
          '(blur)': 'onTouched()'
        },
        providers: [RANGE_VALUE_ACCESSOR]
      }]
    }];

    RangeValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var FormErrorExamples = {
      formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
      formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
      formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
      ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
      ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var ReactiveErrors = /*#__PURE__*/function () {
      function ReactiveErrors() {
        _classCallCheck(this, ReactiveErrors);
      }

      _createClass(ReactiveErrors, null, [{
        key: "controlParentException",
        value: function controlParentException() {
          throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formControlName));
        }
      }, {
        key: "ngModelGroupException",
        value: function ngModelGroupException() {
          throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ".concat(FormErrorExamples.formGroupName, "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ").concat(FormErrorExamples.ngModelGroup));
        }
      }, {
        key: "missingFormException",
        value: function missingFormException() {
          throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ".concat(FormErrorExamples.formControlName));
        }
      }, {
        key: "groupParentException",
        value: function groupParentException() {
          throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formGroupName));
        }
      }, {
        key: "arrayParentException",
        value: function arrayParentException() {
          throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ".concat(FormErrorExamples.formArrayName));
        }
      }, {
        key: "disabledAttrWarning",
        value: function disabledAttrWarning() {
          console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n\n      Example:\n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
        }
      }, {
        key: "ngModelWarning",
        value: function ngModelWarning(directiveName) {
          console.warn("\n    It looks like you're using ngModel on the same form field as ".concat(directiveName, ".\n    Support for using the ngModel input property and ngModelChange event with\n    reactive form directives has been deprecated in Angular v6 and will be removed\n    in a future version of Angular.\n\n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/").concat(directiveName === 'formControl' ? 'FormControlDirective' : 'FormControlName', "#use-with-ngmodel\n    "));
        }
      }]);

      return ReactiveErrors;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var SELECT_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return SelectControlValueAccessor;
      }),
      multi: true
    };

    function _buildValueString(id, value) {
      if (id == null) return "".concat(value);
      if (value && typeof value === 'object') value = 'Object';
      return "".concat(id, ": ").concat(value).slice(0, 50);
    }

    function _extractId(valueString) {
      return valueString.split(':')[0];
    }
    /**
     * @description
     * The `ControlValueAccessor` for writing select control values and listening to select control
     * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * @usageNotes
     *
     * ### Using select controls in a reactive form
     *
     * The following examples show how to use a select control in a reactive form.
     *
     * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
     *
     * ### Using select controls in a template-driven form
     *
     * To use a select in a template-driven form, simply add an `ngModel` and a `name`
     * attribute to the main `<select>` tag.
     *
     * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
     *
     * ### Customizing option selection
     *
     * Angular uses object identity to select option. It's possible for the identities of items
     * to change while the data does not. This can happen, for example, if the items are produced
     * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
     * second response will produce objects with different identities.
     *
     * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
     * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
     * If `compareWith` is given, Angular selects option by the return value of the function.
     *
     * ```ts
     * const selectedCountriesControl = new FormControl();
     * ```
     *
     * ```
     * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
     *     <option *ngFor="let country of countries" [ngValue]="country">
     *         {{country.name}}
     *     </option>
     * </select>
     *
     * compareFn(c1: Country, c2: Country): boolean {
     *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
     * }
     * ```
     *
     * **Note:** We listen to the 'change' event because 'input' events aren't fired
     * for selects in Firefox and IE:
     * https://bugzilla.mozilla.org/show_bug.cgi?id=1024350
     * https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/4660045/
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */


    var SelectControlValueAccessor = /*#__PURE__*/function () {
      function SelectControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, SelectControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** @internal */

        this._optionMap = new Map();
        /** @internal */

        this._idCounter = 0;
        /**
         * @description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange = function (_) {};
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched = function () {};

        this._compareWith = Object.is;
      }
      /**
       * @description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       */


      _createClass(SelectControlValueAccessor, [{
        key: "writeValue",

        /**
         * Sets the "value" property on the input element. The "selectedIndex"
         * property is also set if an ID is provided on the option element.
         *
         * @param value The checked value
         */
        value: function writeValue(value) {
          this.value = value;

          var id = this._getOptionId(value);

          if (id == null) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
          }

          var valueString = _buildValueString(id, value);

          this._renderer.setProperty(this._elementRef.nativeElement, 'value', valueString);
        }
        /**
         * @description
         * Registers a function called when the control value changes.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          var _this5 = this;

          this.onChange = function (valueString) {
            _this5.value = _this5._getOptionValue(valueString);
            fn(_this5.value);
          };
        }
        /**
         * @description
         * Registers a function called when the control is touched.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the select input element.
         *
         * @param isDisabled The disabled value
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /** @internal */

      }, {
        key: "_registerOption",
        value: function _registerOption() {
          return (this._idCounter++).toString();
        }
        /** @internal */

      }, {
        key: "_getOptionId",
        value: function _getOptionId(value) {
          for (var _i3 = 0, _Array$from = Array.from(this._optionMap.keys()); _i3 < _Array$from.length; _i3++) {
            var id = _Array$from[_i3];
            if (this._compareWith(this._optionMap.get(id), value)) return id;
          }

          return null;
        }
        /** @internal */

      }, {
        key: "_getOptionValue",
        value: function _getOptionValue(valueString) {
          var id = _extractId(valueString);

          return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
        }
      }, {
        key: "compareWith",
        set: function set(fn) {
          if (typeof fn !== 'function') {
            throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
          }

          this._compareWith = fn;
        }
      }]);

      return SelectControlValueAccessor;
    }();

    SelectControlValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
        host: {
          '(change)': 'onChange($event.target.value)',
          '(blur)': 'onTouched()'
        },
        providers: [SELECT_VALUE_ACCESSOR]
      }]
    }];

    SelectControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    SelectControlValueAccessor.propDecorators = {
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @description
     * Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * @see `SelectControlValueAccessor`
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var NgSelectOption = /*#__PURE__*/function () {
      function NgSelectOption(_element, _renderer, _select) {
        _classCallCheck(this, NgSelectOption);

        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;
        if (this._select) this.id = this._select._registerOption();
      }
      /**
       * @description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       */


      _createClass(NgSelectOption, [{
        key: "_setElementValue",

        /** @internal */
        value: function _setElementValue(value) {
          this._renderer.setProperty(this._element.nativeElement, 'value', value);
        }
        /**
         * @description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._select) {
            this._select._optionMap["delete"](this.id);

            this._select.writeValue(this._select.value);
          }
        }
      }, {
        key: "ngValue",
        set: function set(value) {
          if (this._select == null) return;

          this._select._optionMap.set(this.id, value);

          this._setElementValue(_buildValueString(this.id, value));

          this._select.writeValue(this._select.value);
        }
        /**
         * @description
         * Tracks simple string values bound to the option element.
         * For objects, use the `ngValue` input binding.
         */

      }, {
        key: "value",
        set: function set(value) {
          this._setElementValue(value);

          if (this._select) this._select.writeValue(this._select.value);
        }
      }]);

      return NgSelectOption;
    }();

    NgSelectOption.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'option'
      }]
    }];

    NgSelectOption.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: SelectControlValueAccessor,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };

    NgSelectOption.propDecorators = {
      ngValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngValue']
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['value']
      }]
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var SELECT_MULTIPLE_VALUE_ACCESSOR = {
      provide: NG_VALUE_ACCESSOR,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return SelectMultipleControlValueAccessor;
      }),
      multi: true
    };

    function _buildValueString$1(id, value) {
      if (id == null) return "".concat(value);
      if (typeof value === 'string') value = "'".concat(value, "'");
      if (value && typeof value === 'object') value = 'Object';
      return "".concat(id, ": ").concat(value).slice(0, 50);
    }

    function _extractId$1(valueString) {
      return valueString.split(':')[0];
    }
    /** Mock interface for HTMLCollection */


    var HTMLCollection = function HTMLCollection() {
      _classCallCheck(this, HTMLCollection);
    };
    /**
     * @description
     * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select
     * control changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
     * `NgModel` directives.
     *
     * @see `SelectControlValueAccessor`
     *
     * @usageNotes
     *
     * ### Using a multi-select control
     *
     * The follow example shows you how to use a multi-select control with a reactive form.
     *
     * ```ts
     * const countryControl = new FormControl();
     * ```
     *
     * ```
     * <select multiple name="countries" [formControl]="countryControl">
     *   <option *ngFor="let country of countries" [ngValue]="country">
     *     {{ country.name }}
     *   </option>
     * </select>
     * ```
     *
     * ### Customizing option selection
     *
     * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
     * See the `SelectControlValueAccessor` for usage.
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */


    var SelectMultipleControlValueAccessor = /*#__PURE__*/function () {
      function SelectMultipleControlValueAccessor(_renderer, _elementRef) {
        _classCallCheck(this, SelectMultipleControlValueAccessor);

        this._renderer = _renderer;
        this._elementRef = _elementRef;
        /** @internal */

        this._optionMap = new Map();
        /** @internal */

        this._idCounter = 0;
        /**
         * @description
         * The registered callback function called when a change event occurs on the input element.
         */

        this.onChange = function (_) {};
        /**
         * @description
         * The registered callback function called when a blur event occurs on the input element.
         */


        this.onTouched = function () {};

        this._compareWith = Object.is;
      }
      /**
       * @description
       * Tracks the option comparison algorithm for tracking identities when
       * checking for changes.
       */


      _createClass(SelectMultipleControlValueAccessor, [{
        key: "writeValue",

        /**
         * @description
         * Sets the "value" property on one or of more
         * of the select's options.
         *
         * @param value The value
         */
        value: function writeValue(value) {
          var _this6 = this;

          this.value = value;
          var optionSelectedStateSetter;

          if (Array.isArray(value)) {
            // convert values to ids
            var ids = value.map(function (v) {
              return _this6._getOptionId(v);
            });

            optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
              opt._setSelected(ids.indexOf(o.toString()) > -1);
            };
          } else {
            optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
              opt._setSelected(false);
            };
          }

          this._optionMap.forEach(optionSelectedStateSetter);
        }
        /**
         * @description
         * Registers a function called when the control value changes
         * and writes an array of the selected options.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          var _this7 = this;

          this.onChange = function (_) {
            var selected = [];

            if (_.selectedOptions !== undefined) {
              var options = _.selectedOptions;

              for (var i = 0; i < options.length; i++) {
                var opt = options.item(i);

                var val = _this7._getOptionValue(opt.value);

                selected.push(val);
              }
            } // Degrade on IE
            else {
                var _options = _.options;

                for (var _i4 = 0; _i4 < _options.length; _i4++) {
                  var _opt = _options.item(_i4);

                  if (_opt.selected) {
                    var _val = _this7._getOptionValue(_opt.value);

                    selected.push(_val);
                  }
                }
              }

            _this7.value = selected;
            fn(selected);
          };
        }
        /**
         * @description
         * Registers a function called when the control is touched.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * Sets the "disabled" property on the select input element.
         *
         * @param isDisabled The disabled value
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /** @internal */

      }, {
        key: "_registerOption",
        value: function _registerOption(value) {
          var id = (this._idCounter++).toString();

          this._optionMap.set(id, value);

          return id;
        }
        /** @internal */

      }, {
        key: "_getOptionId",
        value: function _getOptionId(value) {
          for (var _i5 = 0, _Array$from2 = Array.from(this._optionMap.keys()); _i5 < _Array$from2.length; _i5++) {
            var id = _Array$from2[_i5];
            if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
          }

          return null;
        }
        /** @internal */

      }, {
        key: "_getOptionValue",
        value: function _getOptionValue(valueString) {
          var id = _extractId$1(valueString);

          return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
        }
      }, {
        key: "compareWith",
        set: function set(fn) {
          if (typeof fn !== 'function') {
            throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
          }

          this._compareWith = fn;
        }
      }]);

      return SelectMultipleControlValueAccessor;
    }();

    SelectMultipleControlValueAccessor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
        host: {
          '(change)': 'onChange($event.target)',
          '(blur)': 'onTouched()'
        },
        providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
      }]
    }];

    SelectMultipleControlValueAccessor.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    SelectMultipleControlValueAccessor.propDecorators = {
      compareWith: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @description
     * Marks `<option>` as dynamic, so Angular can be notified when options change.
     *
     * @see `SelectMultipleControlValueAccessor`
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var ɵNgSelectMultipleOption = /*#__PURE__*/function () {
      function ɵNgSelectMultipleOption(_element, _renderer, _select) {
        _classCallCheck(this, ɵNgSelectMultipleOption);

        this._element = _element;
        this._renderer = _renderer;
        this._select = _select;

        if (this._select) {
          this.id = this._select._registerOption(this);
        }
      }
      /**
       * @description
       * Tracks the value bound to the option element. Unlike the value binding,
       * ngValue supports binding to objects.
       */


      _createClass(ɵNgSelectMultipleOption, [{
        key: "_setElementValue",

        /** @internal */
        value: function _setElementValue(value) {
          this._renderer.setProperty(this._element.nativeElement, 'value', value);
        }
        /** @internal */

      }, {
        key: "_setSelected",
        value: function _setSelected(selected) {
          this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
        }
        /**
         * @description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._select) {
            this._select._optionMap["delete"](this.id);

            this._select.writeValue(this._select.value);
          }
        }
      }, {
        key: "ngValue",
        set: function set(value) {
          if (this._select == null) return;
          this._value = value;

          this._setElementValue(_buildValueString$1(this.id, value));

          this._select.writeValue(this._select.value);
        }
        /**
         * @description
         * Tracks simple string values bound to the option element.
         * For objects, use the `ngValue` input binding.
         */

      }, {
        key: "value",
        set: function set(value) {
          if (this._select) {
            this._value = value;

            this._setElementValue(_buildValueString$1(this.id, value));

            this._select.writeValue(this._select.value);
          } else {
            this._setElementValue(value);
          }
        }
      }]);

      return ɵNgSelectMultipleOption;
    }();

    ɵNgSelectMultipleOption.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'option'
      }]
    }];

    ɵNgSelectMultipleOption.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: SelectMultipleControlValueAccessor,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };

    ɵNgSelectMultipleOption.propDecorators = {
      ngValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngValue']
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['value']
      }]
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    function controlPath(name, parent) {
      return [].concat(_toConsumableArray(parent.path), [name]);
    }

    function setUpControl(control, dir) {
      if (!control) _throwError(dir, 'Cannot find control with');
      if (!dir.valueAccessor) _throwError(dir, 'No value accessor for form control with');
      control.validator = Validators.compose([control.validator, dir.validator]);
      control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
      dir.valueAccessor.writeValue(control.value);
      setUpViewChangePipeline(control, dir);
      setUpModelChangePipeline(control, dir);
      setUpBlurPipeline(control, dir);

      if (dir.valueAccessor.setDisabledState) {
        control.registerOnDisabledChange(function (isDisabled) {
          dir.valueAccessor.setDisabledState(isDisabled);
        });
      } // re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4


      dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(function () {
          return control.updateValueAndValidity();
        });
      });

      dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(function () {
          return control.updateValueAndValidity();
        });
      });
    }

    function cleanUpControl(control, dir) {
      dir.valueAccessor.registerOnChange(function () {
        return _noControlError(dir);
      });
      dir.valueAccessor.registerOnTouched(function () {
        return _noControlError(dir);
      });

      dir._rawValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
          validator.registerOnValidatorChange(null);
        }
      });

      dir._rawAsyncValidators.forEach(function (validator) {
        if (validator.registerOnValidatorChange) {
          validator.registerOnValidatorChange(null);
        }
      });

      if (control) control._clearChangeFns();
    }

    function setUpViewChangePipeline(control, dir) {
      dir.valueAccessor.registerOnChange(function (newValue) {
        control._pendingValue = newValue;
        control._pendingChange = true;
        control._pendingDirty = true;
        if (control.updateOn === 'change') updateControl(control, dir);
      });
    }

    function setUpBlurPipeline(control, dir) {
      dir.valueAccessor.registerOnTouched(function () {
        control._pendingTouched = true;
        if (control.updateOn === 'blur' && control._pendingChange) updateControl(control, dir);
        if (control.updateOn !== 'submit') control.markAsTouched();
      });
    }

    function updateControl(control, dir) {
      if (control._pendingDirty) control.markAsDirty();
      control.setValue(control._pendingValue, {
        emitModelToViewChange: false
      });
      dir.viewToModelUpdate(control._pendingValue);
      control._pendingChange = false;
    }

    function setUpModelChangePipeline(control, dir) {
      control.registerOnChange(function (newValue, emitModelEvent) {
        // control -> view
        dir.valueAccessor.writeValue(newValue); // control -> ngModel

        if (emitModelEvent) dir.viewToModelUpdate(newValue);
      });
    }

    function setUpFormContainer(control, dir) {
      if (control == null) _throwError(dir, 'Cannot find control with');
      control.validator = Validators.compose([control.validator, dir.validator]);
      control.asyncValidator = Validators.composeAsync([control.asyncValidator, dir.asyncValidator]);
    }

    function _noControlError(dir) {
      return _throwError(dir, 'There is no FormControl instance attached to form control element with');
    }

    function _throwError(dir, message) {
      var messageEnd;

      if (dir.path.length > 1) {
        messageEnd = "path: '".concat(dir.path.join(' -> '), "'");
      } else if (dir.path[0]) {
        messageEnd = "name: '".concat(dir.path, "'");
      } else {
        messageEnd = 'unspecified name attribute';
      }

      throw new Error("".concat(message, " ").concat(messageEnd));
    }

    function composeValidators(validators) {
      return validators != null ? Validators.compose(validators.map(normalizeValidator)) : null;
    }

    function composeAsyncValidators(validators) {
      return validators != null ? Validators.composeAsync(validators.map(normalizeAsyncValidator)) : null;
    }

    function isPropertyUpdated(changes, viewModel) {
      if (!changes.hasOwnProperty('model')) return false;
      var change = changes['model'];
      if (change.isFirstChange()) return true;
      return !Object.is(viewModel, change.currentValue);
    }

    var BUILTIN_ACCESSORS = [CheckboxControlValueAccessor, RangeValueAccessor, NumberValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor];

    function isBuiltInAccessor(valueAccessor) {
      return BUILTIN_ACCESSORS.some(function (a) {
        return valueAccessor.constructor === a;
      });
    }

    function syncPendingControls(form, directives) {
      form._syncPendingControls();

      directives.forEach(function (dir) {
        var control = dir.control;

        if (control.updateOn === 'submit' && control._pendingChange) {
          dir.viewToModelUpdate(control._pendingValue);
          control._pendingChange = false;
        }
      });
    } // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented


    function selectValueAccessor(dir, valueAccessors) {
      if (!valueAccessors) return null;
      if (!Array.isArray(valueAccessors)) _throwError(dir, 'Value accessor was not provided as an array for form control with');
      var defaultAccessor = undefined;
      var builtinAccessor = undefined;
      var customAccessor = undefined;
      valueAccessors.forEach(function (v) {
        if (v.constructor === DefaultValueAccessor) {
          defaultAccessor = v;
        } else if (isBuiltInAccessor(v)) {
          if (builtinAccessor) _throwError(dir, 'More than one built-in value accessor matches form control with');
          builtinAccessor = v;
        } else {
          if (customAccessor) _throwError(dir, 'More than one custom value accessor matches form control with');
          customAccessor = v;
        }
      });
      if (customAccessor) return customAccessor;
      if (builtinAccessor) return builtinAccessor;
      if (defaultAccessor) return defaultAccessor;

      _throwError(dir, 'No valid value accessor for form control with');

      return null;
    }

    function removeDir(list, el) {
      var index = list.indexOf(el);
      if (index > -1) list.splice(index, 1);
    } // TODO(kara): remove after deprecation period


    function _ngModelWarning(name, type, instance, warningConfig) {
      if (!Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() || warningConfig === 'never') return;

      if ((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce || warningConfig === 'always' && !instance._ngModelWarningSent) {
        ReactiveErrors.ngModelWarning(name);
        type._ngModelWarningSentOnce = true;
        instance._ngModelWarningSent = true;
      }
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Reports that a FormControl is valid, meaning that no errors exist in the input value.
     *
     * @see `status`
     */


    var VALID = 'VALID';
    /**
     * Reports that a FormControl is invalid, meaning that an error exists in the input value.
     *
     * @see `status`
     */

    var INVALID = 'INVALID';
    /**
     * Reports that a FormControl is pending, meaning that that async validation is occurring and
     * errors are not yet available for the input value.
     *
     * @see `markAsPending`
     * @see `status`
     */

    var PENDING = 'PENDING';
    /**
     * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
     * calculations of validity or value.
     *
     * @see `markAsDisabled`
     * @see `status`
     */

    var DISABLED = 'DISABLED';

    function _find(control, path, delimiter) {
      if (path == null) return null;

      if (!Array.isArray(path)) {
        path = path.split(delimiter);
      }

      if (Array.isArray(path) && path.length === 0) return null; // Not using Array.reduce here due to a Chrome 80 bug
      // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

      var controlToFind = control;
      path.forEach(function (name) {
        if (controlToFind instanceof FormGroup) {
          controlToFind = controlToFind.controls.hasOwnProperty(name) ? controlToFind.controls[name] : null;
        } else if (controlToFind instanceof FormArray) {
          controlToFind = controlToFind.at(name) || null;
        } else {
          controlToFind = null;
        }
      });
      return controlToFind;
    }

    function coerceToValidator(validatorOrOpts) {
      var validator = isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts;
      return Array.isArray(validator) ? composeValidators(validator) : validator || null;
    }

    function coerceToAsyncValidator(asyncValidator, validatorOrOpts) {
      var origAsyncValidator = isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator;
      return Array.isArray(origAsyncValidator) ? composeAsyncValidators(origAsyncValidator) : origAsyncValidator || null;
    }

    function isOptionsObj(validatorOrOpts) {
      return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === 'object';
    }
    /**
     * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
     *
     * It provides some of the shared behavior that all controls and groups of controls have, like
     * running validators, calculating status, and resetting state. It also defines the properties
     * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
     * instantiated directly.
     *
     * @see [Forms Guide](/guide/forms)
     * @see [Reactive Forms Guide](/guide/reactive-forms)
     * @see [Dynamic Forms Guide](/guide/dynamic-form)
     *
     * @publicApi
     */


    var AbstractControl = /*#__PURE__*/function () {
      /**
       * Initialize the AbstractControl instance.
       *
       * @param validator The function that determines the synchronous validity of this control.
       * @param asyncValidator The function that determines the asynchronous validity of this
       * control.
       */
      function AbstractControl(validator, asyncValidator) {
        _classCallCheck(this, AbstractControl);

        this.validator = validator;
        this.asyncValidator = asyncValidator;
        /** @internal */

        this._onCollectionChange = function () {};
        /**
         * A control is `pristine` if the user has not yet changed
         * the value in the UI.
         *
         * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
         * Programmatic changes to a control's value do not mark it dirty.
         */


        this.pristine = true;
        /**
         * True if the control is marked as `touched`.
         *
         * A control is marked `touched` once the user has triggered
         * a `blur` event on it.
         */

        this.touched = false;
        /** @internal */

        this._onDisabledChange = [];
      }
      /**
       * The parent control.
       */


      _createClass(AbstractControl, [{
        key: "setValidators",

        /**
         * Sets the synchronous validators that are active on this control.  Calling
         * this overwrites any existing sync validators.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         */
        value: function setValidators(newValidator) {
          this.validator = coerceToValidator(newValidator);
        }
        /**
         * Sets the async validators that are active on this control. Calling this
         * overwrites any existing async validators.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         */

      }, {
        key: "setAsyncValidators",
        value: function setAsyncValidators(newValidator) {
          this.asyncValidator = coerceToAsyncValidator(newValidator);
        }
        /**
         * Empties out the sync validator list.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         */

      }, {
        key: "clearValidators",
        value: function clearValidators() {
          this.validator = null;
        }
        /**
         * Empties out the async validator list.
         *
         * When you add or remove a validator at run time, you must call
         * `updateValueAndValidity()` for the new validation to take effect.
         *
         */

      }, {
        key: "clearAsyncValidators",
        value: function clearAsyncValidators() {
          this.asyncValidator = null;
        }
        /**
         * Marks the control as `touched`. A control is touched by focus and
         * blur events that do not change the value.
         *
         * @see `markAsUntouched()`
         * @see `markAsDirty()`
         * @see `markAsPristine()`
         *
         * @param opts Configuration options that determine how the control propagates changes
         * and emits events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         */

      }, {
        key: "markAsTouched",
        value: function markAsTouched() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.touched = true;

          if (this._parent && !opts.onlySelf) {
            this._parent.markAsTouched(opts);
          }
        }
        /**
         * Marks the control and all its descendant controls as `touched`.
         * @see `markAsTouched()`
         */

      }, {
        key: "markAllAsTouched",
        value: function markAllAsTouched() {
          this.markAsTouched({
            onlySelf: true
          });

          this._forEachChild(function (control) {
            return control.markAllAsTouched();
          });
        }
        /**
         * Marks the control as `untouched`.
         *
         * If the control has any children, also marks all children as `untouched`
         * and recalculates the `touched` status of all parent controls.
         *
         * @see `markAsTouched()`
         * @see `markAsDirty()`
         * @see `markAsPristine()`
         *
         * @param opts Configuration options that determine how the control propagates changes
         * and emits events after the marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         */

      }, {
        key: "markAsUntouched",
        value: function markAsUntouched() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.touched = false;
          this._pendingTouched = false;

          this._forEachChild(function (control) {
            control.markAsUntouched({
              onlySelf: true
            });
          });

          if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
          }
        }
        /**
         * Marks the control as `dirty`. A control becomes dirty when
         * the control's value is changed through the UI; compare `markAsTouched`.
         *
         * @see `markAsTouched()`
         * @see `markAsUntouched()`
         * @see `markAsPristine()`
         *
         * @param opts Configuration options that determine how the control propagates changes
         * and emits events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         */

      }, {
        key: "markAsDirty",
        value: function markAsDirty() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.pristine = false;

          if (this._parent && !opts.onlySelf) {
            this._parent.markAsDirty(opts);
          }
        }
        /**
         * Marks the control as `pristine`.
         *
         * If the control has any children, marks all children as `pristine`,
         * and recalculates the `pristine` status of all parent
         * controls.
         *
         * @see `markAsTouched()`
         * @see `markAsUntouched()`
         * @see `markAsDirty()`
         *
         * @param opts Configuration options that determine how the control emits events after
         * marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         */

      }, {
        key: "markAsPristine",
        value: function markAsPristine() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.pristine = true;
          this._pendingDirty = false;

          this._forEachChild(function (control) {
            control.markAsPristine({
              onlySelf: true
            });
          });

          if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
          }
        }
        /**
         * Marks the control as `pending`.
         *
         * A control is pending while the control performs async validation.
         *
         * @see {@link AbstractControl.status}
         *
         * @param opts Configuration options that determine how the control propagates changes and
         * emits events after marking is applied.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
         * observable emits an event with the latest status the control is marked pending.
         * When false, no events are emitted.
         *
         */

      }, {
        key: "markAsPending",
        value: function markAsPending() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.status = PENDING;

          if (opts.emitEvent !== false) {
            this.statusChanges.emit(this.status);
          }

          if (this._parent && !opts.onlySelf) {
            this._parent.markAsPending(opts);
          }
        }
        /**
         * Disables the control. This means the control is exempt from validation checks and
         * excluded from the aggregate value of any parent. Its status is `DISABLED`.
         *
         * If the control has children, all children are also disabled.
         *
         * @see {@link AbstractControl.status}
         *
         * @param opts Configuration options that determine how the control propagates
         * changes and emits events after the control is disabled.
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is disabled.
         * When false, no events are emitted.
         */

      }, {
        key: "disable",
        value: function disable() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          // If parent has been marked artificially dirty we don't want to re-calculate the
          // parent's dirtiness based on the children.
          var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

          this.status = DISABLED;
          this.errors = null;

          this._forEachChild(function (control) {
            control.disable(Object.assign(Object.assign({}, opts), {
              onlySelf: true
            }));
          });

          this._updateValue();

          if (opts.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
          }

          this._updateAncestors(Object.assign(Object.assign({}, opts), {
            skipPristineCheck: skipPristineCheck
          }));

          this._onDisabledChange.forEach(function (changeFn) {
            return changeFn(true);
          });
        }
        /**
         * Enables the control. This means the control is included in validation checks and
         * the aggregate value of its parent. Its status recalculates based on its value and
         * its validators.
         *
         * By default, if the control has children, all children are enabled.
         *
         * @see {@link AbstractControl.status}
         *
         * @param opts Configure options that control how the control propagates changes and
         * emits events when marked as untouched
         * * `onlySelf`: When true, mark only this control. When false or not supplied,
         * marks all direct ancestors. Default is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is enabled.
         * When false, no events are emitted.
         */

      }, {
        key: "enable",
        value: function enable() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          // If parent has been marked artificially dirty we don't want to re-calculate the
          // parent's dirtiness based on the children.
          var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

          this.status = VALID;

          this._forEachChild(function (control) {
            control.enable(Object.assign(Object.assign({}, opts), {
              onlySelf: true
            }));
          });

          this.updateValueAndValidity({
            onlySelf: true,
            emitEvent: opts.emitEvent
          });

          this._updateAncestors(Object.assign(Object.assign({}, opts), {
            skipPristineCheck: skipPristineCheck
          }));

          this._onDisabledChange.forEach(function (changeFn) {
            return changeFn(false);
          });
        }
      }, {
        key: "_updateAncestors",
        value: function _updateAncestors(opts) {
          if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);

            if (!opts.skipPristineCheck) {
              this._parent._updatePristine();
            }

            this._parent._updateTouched();
          }
        }
        /**
         * @param parent Sets the parent of the control
         */

      }, {
        key: "setParent",
        value: function setParent(parent) {
          this._parent = parent;
        }
        /**
         * Recalculates the value and validation status of the control.
         *
         * By default, it also updates the value and validity of its ancestors.
         *
         * @param opts Configuration options determine how the control propagates changes and emits events
         * after updates and validity checks are applied.
         * * `onlySelf`: When true, only update this control. When false or not supplied,
         * update all direct ancestors. Default is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is updated.
         * When false, no events are emitted.
         */

      }, {
        key: "updateValueAndValidity",
        value: function updateValueAndValidity() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          this._setInitialStatus();

          this._updateValue();

          if (this.enabled) {
            this._cancelExistingSubscription();

            this.errors = this._runValidator();
            this.status = this._calculateStatus();

            if (this.status === VALID || this.status === PENDING) {
              this._runAsyncValidator(opts.emitEvent);
            }
          }

          if (opts.emitEvent !== false) {
            this.valueChanges.emit(this.value);
            this.statusChanges.emit(this.status);
          }

          if (this._parent && !opts.onlySelf) {
            this._parent.updateValueAndValidity(opts);
          }
        }
        /** @internal */

      }, {
        key: "_updateTreeValidity",
        value: function _updateTreeValidity() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            emitEvent: true
          };

          this._forEachChild(function (ctrl) {
            return ctrl._updateTreeValidity(opts);
          });

          this.updateValueAndValidity({
            onlySelf: true,
            emitEvent: opts.emitEvent
          });
        }
      }, {
        key: "_setInitialStatus",
        value: function _setInitialStatus() {
          this.status = this._allControlsDisabled() ? DISABLED : VALID;
        }
      }, {
        key: "_runValidator",
        value: function _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
      }, {
        key: "_runAsyncValidator",
        value: function _runAsyncValidator(emitEvent) {
          var _this8 = this;

          if (this.asyncValidator) {
            this.status = PENDING;
            var obs = toObservable(this.asyncValidator(this));
            this._asyncValidationSubscription = obs.subscribe(function (errors) {
              return _this8.setErrors(errors, {
                emitEvent: emitEvent
              });
            });
          }
        }
      }, {
        key: "_cancelExistingSubscription",
        value: function _cancelExistingSubscription() {
          if (this._asyncValidationSubscription) {
            this._asyncValidationSubscription.unsubscribe();
          }
        }
        /**
         * Sets errors on a form control when running validations manually, rather than automatically.
         *
         * Calling `setErrors` also updates the validity of the parent control.
         *
         * @usageNotes
         *
         * ### Manually set the errors for a control
         *
         * ```
         * const login = new FormControl('someLogin');
         * login.setErrors({
         *   notUnique: true
         * });
         *
         * expect(login.valid).toEqual(false);
         * expect(login.errors).toEqual({ notUnique: true });
         *
         * login.setValue('someOtherLogin');
         *
         * expect(login.valid).toEqual(true);
         * ```
         */

      }, {
        key: "setErrors",
        value: function setErrors(errors) {
          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.errors = errors;

          this._updateControlsErrors(opts.emitEvent !== false);
        }
        /**
         * Retrieves a child control given the control's name or path.
         *
         * @param path A dot-delimited string or array of string/number values that define the path to the
         * control.
         *
         * @usageNotes
         * ### Retrieve a nested control
         *
         * For example, to get a `name` control nested within a `person` sub-group:
         *
         * * `this.form.get('person.name');`
         *
         * -OR-
         *
         * * `this.form.get(['person', 'name']);`
         */

      }, {
        key: "get",
        value: function get(path) {
          return _find(this, path, '.');
        }
        /**
         * @description
         * Reports error data for the control with the given path.
         *
         * @param errorCode The code of the error to check
         * @param path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * @returns error data for that particular error. If the control or error is not present,
         * null is returned.
         */

      }, {
        key: "getError",
        value: function getError(errorCode, path) {
          var control = path ? this.get(path) : this;
          return control && control.errors ? control.errors[errorCode] : null;
        }
        /**
         * @description
         * Reports whether the control with the given path has the error specified.
         *
         * @param errorCode The code of the error to check
         * @param path A list of control names that designates how to move from the current control
         * to the control that should be queried for errors.
         *
         * @usageNotes
         * For example, for the following `FormGroup`:
         *
         * ```
         * form = new FormGroup({
         *   address: new FormGroup({ street: new FormControl() })
         * });
         * ```
         *
         * The path to the 'street' control from the root form would be 'address' -> 'street'.
         *
         * It can be provided to this method in one of two formats:
         *
         * 1. An array of string control names, e.g. `['address', 'street']`
         * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
         *
         * If no path is given, this method checks for the error on the current control.
         *
         * @returns whether the given error is present in the control at the given path.
         *
         * If the control is not present, false is returned.
         */

      }, {
        key: "hasError",
        value: function hasError(errorCode, path) {
          return !!this.getError(errorCode, path);
        }
        /**
         * Retrieves the top-level ancestor of this control.
         */

      }, {
        key: "_updateControlsErrors",

        /** @internal */
        value: function _updateControlsErrors(emitEvent) {
          this.status = this._calculateStatus();

          if (emitEvent) {
            this.statusChanges.emit(this.status);
          }

          if (this._parent) {
            this._parent._updateControlsErrors(emitEvent);
          }
        }
        /** @internal */

      }, {
        key: "_initObservables",
        value: function _initObservables() {
          this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }
      }, {
        key: "_calculateStatus",
        value: function _calculateStatus() {
          if (this._allControlsDisabled()) return DISABLED;
          if (this.errors) return INVALID;
          if (this._anyControlsHaveStatus(PENDING)) return PENDING;
          if (this._anyControlsHaveStatus(INVALID)) return INVALID;
          return VALID;
        }
        /** @internal */

      }, {
        key: "_anyControlsHaveStatus",
        value: function _anyControlsHaveStatus(status) {
          return this._anyControls(function (control) {
            return control.status === status;
          });
        }
        /** @internal */

      }, {
        key: "_anyControlsDirty",
        value: function _anyControlsDirty() {
          return this._anyControls(function (control) {
            return control.dirty;
          });
        }
        /** @internal */

      }, {
        key: "_anyControlsTouched",
        value: function _anyControlsTouched() {
          return this._anyControls(function (control) {
            return control.touched;
          });
        }
        /** @internal */

      }, {
        key: "_updatePristine",
        value: function _updatePristine() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.pristine = !this._anyControlsDirty();

          if (this._parent && !opts.onlySelf) {
            this._parent._updatePristine(opts);
          }
        }
        /** @internal */

      }, {
        key: "_updateTouched",
        value: function _updateTouched() {
          var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          this.touched = this._anyControlsTouched();

          if (this._parent && !opts.onlySelf) {
            this._parent._updateTouched(opts);
          }
        }
        /** @internal */

      }, {
        key: "_isBoxedValue",
        value: function _isBoxedValue(formState) {
          return typeof formState === 'object' && formState !== null && Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
        }
        /** @internal */

      }, {
        key: "_registerOnCollectionChange",
        value: function _registerOnCollectionChange(fn) {
          this._onCollectionChange = fn;
        }
        /** @internal */

      }, {
        key: "_setUpdateStrategy",
        value: function _setUpdateStrategy(opts) {
          if (isOptionsObj(opts) && opts.updateOn != null) {
            this._updateOn = opts.updateOn;
          }
        }
        /**
         * Check to see if parent has been marked artificially dirty.
         *
         * @internal
         */

      }, {
        key: "_parentMarkedDirty",
        value: function _parentMarkedDirty(onlySelf) {
          var parentDirty = this._parent && this._parent.dirty;
          return !onlySelf && parentDirty && !this._parent._anyControlsDirty();
        }
      }, {
        key: "parent",
        get: function get() {
          return this._parent;
        }
        /**
         * A control is `valid` when its `status` is `VALID`.
         *
         * @see {@link AbstractControl.status}
         *
         * @returns True if the control has passed all of its validation tests,
         * false otherwise.
         */

      }, {
        key: "valid",
        get: function get() {
          return this.status === VALID;
        }
        /**
         * A control is `invalid` when its `status` is `INVALID`.
         *
         * @see {@link AbstractControl.status}
         *
         * @returns True if this control has failed one or more of its validation checks,
         * false otherwise.
         */

      }, {
        key: "invalid",
        get: function get() {
          return this.status === INVALID;
        }
        /**
         * A control is `pending` when its `status` is `PENDING`.
         *
         * @see {@link AbstractControl.status}
         *
         * @returns True if this control is in the process of conducting a validation check,
         * false otherwise.
         */

      }, {
        key: "pending",
        get: function get() {
          return this.status == PENDING;
        }
        /**
         * A control is `disabled` when its `status` is `DISABLED`.
         *
         * Disabled controls are exempt from validation checks and
         * are not included in the aggregate value of their ancestor
         * controls.
         *
         * @see {@link AbstractControl.status}
         *
         * @returns True if the control is disabled, false otherwise.
         */

      }, {
        key: "disabled",
        get: function get() {
          return this.status === DISABLED;
        }
        /**
         * A control is `enabled` as long as its `status` is not `DISABLED`.
         *
         * @returns True if the control has any status other than 'DISABLED',
         * false if the status is 'DISABLED'.
         *
         * @see {@link AbstractControl.status}
         *
         */

      }, {
        key: "enabled",
        get: function get() {
          return this.status !== DISABLED;
        }
        /**
         * A control is `dirty` if the user has changed the value
         * in the UI.
         *
         * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
         * Programmatic changes to a control's value do not mark it dirty.
         */

      }, {
        key: "dirty",
        get: function get() {
          return !this.pristine;
        }
        /**
         * True if the control has not been marked as touched
         *
         * A control is `untouched` if the user has not yet triggered
         * a `blur` event on it.
         */

      }, {
        key: "untouched",
        get: function get() {
          return !this.touched;
        }
        /**
         * Reports the update strategy of the `AbstractControl` (meaning
         * the event on which the control updates itself).
         * Possible values: `'change'` | `'blur'` | `'submit'`
         * Default value: `'change'`
         */

      }, {
        key: "updateOn",
        get: function get() {
          return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
        }
      }, {
        key: "root",
        get: function get() {
          var x = this;

          while (x._parent) {
            x = x._parent;
          }

          return x;
        }
      }]);

      return AbstractControl;
    }();
    /**
     * Tracks the value and validation status of an individual form control.
     *
     * This is one of the three fundamental building blocks of Angular forms, along with
     * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
     * implements most of the base functionality for accessing the value, validation status,
     * user interactions and events. See [usage examples below](#usage-notes).
     *
     * @see `AbstractControl`
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see [Usage Notes](#usage-notes)
     *
     * @usageNotes
     *
     * ### Initializing Form Controls
     *
     * Instantiate a `FormControl`, with an initial value.
     *
     * ```ts
     * const control = new FormControl('some value');
     * console.log(control.value);     // 'some value'
     *```
     *
     * The following example initializes the control with a form state object. The `value`
     * and `disabled` keys are required in this case.
     *
     * ```ts
     * const control = new FormControl({ value: 'n/a', disabled: true });
     * console.log(control.value);     // 'n/a'
     * console.log(control.status);    // 'DISABLED'
     * ```
     *
     * The following example initializes the control with a sync validator.
     *
     * ```ts
     * const control = new FormControl('', Validators.required);
     * console.log(control.value);      // ''
     * console.log(control.status);     // 'INVALID'
     * ```
     *
     * The following example initializes the control using an options object.
     *
     * ```ts
     * const control = new FormControl('', {
     *    validators: Validators.required,
     *    asyncValidators: myAsyncValidator
     * });
     * ```
     *
     * ### Configure the control to update on a blur event
     *
     * Set the `updateOn` option to `'blur'` to update on the blur `event`.
     *
     * ```ts
     * const control = new FormControl('', { updateOn: 'blur' });
     * ```
     *
     * ### Configure the control to update on a submit event
     *
     * Set the `updateOn` option to `'submit'` to update on a submit `event`.
     *
     * ```ts
     * const control = new FormControl('', { updateOn: 'submit' });
     * ```
     *
     * ### Reset the control back to an initial value
     *
     * You reset to a specific form state by passing through a standalone
     * value or a form state object that contains both a value and a disabled state
     * (these are the only two properties that cannot be calculated).
     *
     * ```ts
     * const control = new FormControl('Nancy');
     *
     * console.log(control.value); // 'Nancy'
     *
     * control.reset('Drew');
     *
     * console.log(control.value); // 'Drew'
     * ```
     *
     * ### Reset the control back to an initial value and disabled
     *
     * ```
     * const control = new FormControl('Nancy');
     *
     * console.log(control.value); // 'Nancy'
     * console.log(control.status); // 'VALID'
     *
     * control.reset({ value: 'Drew', disabled: true });
     *
     * console.log(control.value); // 'Drew'
     * console.log(control.status); // 'DISABLED'
     * ```
     *
     * @publicApi
     */


    var FormControl = /*#__PURE__*/function (_AbstractControl) {
      _inherits(FormControl, _AbstractControl);

      var _super5 = _createSuper(FormControl);

      /**
       * Creates a new `FormControl` instance.
       *
       * @param formState Initializes the control with an initial value,
       * or an object that defines the initial value and disabled state.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions
       *
       */
      function FormControl() {
        var _this9;

        var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var validatorOrOpts = arguments.length > 1 ? arguments[1] : undefined;
        var asyncValidator = arguments.length > 2 ? arguments[2] : undefined;

        _classCallCheck(this, FormControl);

        _this9 = _super5.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        /** @internal */

        _this9._onChange = [];

        _this9._applyFormState(formState);

        _this9._setUpdateStrategy(validatorOrOpts);

        _this9.updateValueAndValidity({
          onlySelf: true,
          emitEvent: false
        });

        _this9._initObservables();

        return _this9;
      }
      /**
       * Sets a new value for the form control.
       *
       * @param value The new value for the control.
       * @param options Configuration options that determine how the control propagates changes
       * and emits events when the value changes.
       * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
       * updateValueAndValidity} method.
       *
       * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
       * false.
       * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
       * `valueChanges`
       * observables emit events with the latest status and value when the control value is updated.
       * When false, no events are emitted.
       * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
       * `onChange` event to
       * update the view.
       * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
       * `ngModelChange`
       * event to update the model.
       *
       */


      _createClass(FormControl, [{
        key: "setValue",
        value: function setValue(value) {
          var _this10 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.value = this._pendingValue = value;

          if (this._onChange.length && options.emitModelToViewChange !== false) {
            this._onChange.forEach(function (changeFn) {
              return changeFn(_this10.value, options.emitViewToModelChange !== false);
            });
          }

          this.updateValueAndValidity(options);
        }
        /**
         * Patches the value of a control.
         *
         * This function is functionally the same as {@link FormControl#setValue setValue} at this level.
         * It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
         * `FormArrays`, where it does behave differently.
         *
         * @see `setValue` for options
         */

      }, {
        key: "patchValue",
        value: function patchValue(value) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          this.setValue(value, options);
        }
        /**
         * Resets the form control, marking it `pristine` and `untouched`, and setting
         * the value to null.
         *
         * @param formState Resets the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param options Configuration options that determine how the control propagates changes
         * and emits events after the value changes.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         *
         */

      }, {
        key: "reset",
        value: function reset() {
          var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._applyFormState(formState);

          this.markAsPristine(options);
          this.markAsUntouched(options);
          this.setValue(this.value, options);
          this._pendingChange = false;
        }
        /**
         * @internal
         */

      }, {
        key: "_updateValue",
        value: function _updateValue() {}
        /**
         * @internal
         */

      }, {
        key: "_anyControls",
        value: function _anyControls(condition) {
          return false;
        }
        /**
         * @internal
         */

      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          return this.disabled;
        }
        /**
         * Register a listener for change events.
         *
         * @param fn The method that is called when the value changes
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange.push(fn);
        }
        /**
         * @internal
         */

      }, {
        key: "_clearChangeFns",
        value: function _clearChangeFns() {
          this._onChange = [];
          this._onDisabledChange = [];

          this._onCollectionChange = function () {};
        }
        /**
         * Register a listener for disabled events.
         *
         * @param fn The method that is called when the disabled status changes.
         */

      }, {
        key: "registerOnDisabledChange",
        value: function registerOnDisabledChange(fn) {
          this._onDisabledChange.push(fn);
        }
        /**
         * @internal
         */

      }, {
        key: "_forEachChild",
        value: function _forEachChild(cb) {}
        /** @internal */

      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          if (this.updateOn === 'submit') {
            if (this._pendingDirty) this.markAsDirty();
            if (this._pendingTouched) this.markAsTouched();

            if (this._pendingChange) {
              this.setValue(this._pendingValue, {
                onlySelf: true,
                emitModelToViewChange: false
              });
              return true;
            }
          }

          return false;
        }
      }, {
        key: "_applyFormState",
        value: function _applyFormState(formState) {
          if (this._isBoxedValue(formState)) {
            this.value = this._pendingValue = formState.value;
            formState.disabled ? this.disable({
              onlySelf: true,
              emitEvent: false
            }) : this.enable({
              onlySelf: true,
              emitEvent: false
            });
          } else {
            this.value = this._pendingValue = formState;
          }
        }
      }]);

      return FormControl;
    }(AbstractControl);
    /**
     * Tracks the value and validity state of a group of `FormControl` instances.
     *
     * A `FormGroup` aggregates the values of each child `FormControl` into one object,
     * with each control name as the key.  It calculates its status by reducing the status values
     * of its children. For example, if one of the controls in a group is invalid, the entire
     * group becomes invalid.
     *
     * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
     * along with `FormControl` and `FormArray`.
     *
     * When instantiating a `FormGroup`, pass in a collection of child controls as the first
     * argument. The key for each child registers the name for the control.
     *
     * @usageNotes
     *
     * ### Create a form group with 2 controls
     *
     * ```
     * const form = new FormGroup({
     *   first: new FormControl('Nancy', Validators.minLength(2)),
     *   last: new FormControl('Drew'),
     * });
     *
     * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
     * console.log(form.status);  // 'VALID'
     * ```
     *
     * ### Create a form group with a group-level validator
     *
     * You include group-level validators as the second arg, or group-level async
     * validators as the third arg. These come in handy when you want to perform validation
     * that considers the value of more than one child control.
     *
     * ```
     * const form = new FormGroup({
     *   password: new FormControl('', Validators.minLength(2)),
     *   passwordConfirm: new FormControl('', Validators.minLength(2)),
     * }, passwordMatchValidator);
     *
     *
     * function passwordMatchValidator(g: FormGroup) {
     *    return g.get('password').value === g.get('passwordConfirm').value
     *       ? null : {'mismatch': true};
     * }
     * ```
     *
     * Like `FormControl` instances, you choose to pass in
     * validators and async validators as part of an options object.
     *
     * ```
     * const form = new FormGroup({
     *   password: new FormControl('')
     *   passwordConfirm: new FormControl('')
     * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
     * ```
     *
     * ### Set the updateOn property for all controls in a form group
     *
     * The options object is used to set a default value for each child
     * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
     * group level, all child controls default to 'blur', unless the child
     * has explicitly specified a different `updateOn` value.
     *
     * ```ts
     * const c = new FormGroup({
     *   one: new FormControl()
     * }, { updateOn: 'blur' });
     * ```
     *
     * @publicApi
     */


    var FormGroup = /*#__PURE__*/function (_AbstractControl2) {
      _inherits(FormGroup, _AbstractControl2);

      var _super6 = _createSuper(FormGroup);

      /**
       * Creates a new `FormGroup` instance.
       *
       * @param controls A collection of child controls. The key for each child is the name
       * under which it is registered.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions
       *
       */
      function FormGroup(controls, validatorOrOpts, asyncValidator) {
        var _this11;

        _classCallCheck(this, FormGroup);

        _this11 = _super6.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        _this11.controls = controls;

        _this11._initObservables();

        _this11._setUpdateStrategy(validatorOrOpts);

        _this11._setUpControls();

        _this11.updateValueAndValidity({
          onlySelf: true,
          emitEvent: false
        });

        return _this11;
      }
      /**
       * Registers a control with the group's list of controls.
       *
       * This method does not update the value or validity of the control.
       * Use {@link FormGroup#addControl addControl} instead.
       *
       * @param name The control name to register in the collection
       * @param control Provides the control for the given name
       */


      _createClass(FormGroup, [{
        key: "registerControl",
        value: function registerControl(name, control) {
          if (this.controls[name]) return this.controls[name];
          this.controls[name] = control;
          control.setParent(this);

          control._registerOnCollectionChange(this._onCollectionChange);

          return control;
        }
        /**
         * Add a control to this group.
         *
         * This method also updates the value and validity of the control.
         *
         * @param name The control name to add to the collection
         * @param control Provides the control for the given name
         */

      }, {
        key: "addControl",
        value: function addControl(name, control) {
          this.registerControl(name, control);
          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Remove a control from this group.
         *
         * @param name The control name to remove from the collection
         */

      }, {
        key: "removeControl",
        value: function removeControl(name) {
          if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
          delete this.controls[name];
          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Replace an existing control.
         *
         * @param name The control name to replace in the collection
         * @param control Provides the control for the given name
         */

      }, {
        key: "setControl",
        value: function setControl(name, control) {
          if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
          delete this.controls[name];
          if (control) this.registerControl(name, control);
          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Check whether there is an enabled control with the given name in the group.
         *
         * Reports false for disabled controls. If you'd like to check for existence in the group
         * only, use {@link AbstractControl#get get} instead.
         *
         * @param controlName The control name to check for existence in the collection
         *
         * @returns false for disabled controls, true otherwise.
         */

      }, {
        key: "contains",
        value: function contains(controlName) {
          return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
        }
        /**
         * Sets the value of the `FormGroup`. It accepts an object that matches
         * the structure of the group, with control names as keys.
         *
         * @usageNotes
         * ### Set the complete value for the form group
         *
         * ```
         * const form = new FormGroup({
         *   first: new FormControl(),
         *   last: new FormControl()
         * });
         *
         * console.log(form.value);   // {first: null, last: null}
         *
         * form.setValue({first: 'Nancy', last: 'Drew'});
         * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
         * ```
         *
         * @throws When strict checks fail, such as setting the value of a control
         * that doesn't exist or if you exclude a value of a control that does exist.
         *
         * @param value The new value for the control that matches the structure of the group.
         * @param options Configuration options that determine how the control propagates changes
         * and emits events after the value changes.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         */

      }, {
        key: "setValue",
        value: function setValue(value) {
          var _this12 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._checkAllValuesPresent(value);

          Object.keys(value).forEach(function (name) {
            _this12._throwIfControlMissing(name);

            _this12.controls[name].setValue(value[name], {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Patches the value of the `FormGroup`. It accepts an object with control
         * names as keys, and does its best to match the values to the correct controls
         * in the group.
         *
         * It accepts both super-sets and sub-sets of the group without throwing an error.
         *
         * @usageNotes
         * ### Patch the value for a form group
         *
         * ```
         * const form = new FormGroup({
         *    first: new FormControl(),
         *    last: new FormControl()
         * });
         * console.log(form.value);   // {first: null, last: null}
         *
         * form.patchValue({first: 'Nancy'});
         * console.log(form.value);   // {first: 'Nancy', last: null}
         * ```
         *
         * @param value The object that matches the structure of the group.
         * @param options Configuration options that determine how the control propagates changes and
         * emits events after the value is patched.
         * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
         * true.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         */

      }, {
        key: "patchValue",
        value: function patchValue(value) {
          var _this13 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          Object.keys(value).forEach(function (name) {
            if (_this13.controls[name]) {
              _this13.controls[name].patchValue(value[name], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            }
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Resets the `FormGroup`, marks all descendants are marked `pristine` and `untouched`, and
         * the value of all descendants to null.
         *
         * You reset to a specific form state by passing in a map of states
         * that matches the structure of your form, with control names as keys. The state
         * is a standalone value or a form state object with both a value and a disabled
         * status.
         *
         * @param value Resets the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param options Configuration options that determine how the control propagates changes
         * and emits events when the group is reset.
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * @usageNotes
         *
         * ### Reset the form group values
         *
         * ```ts
         * const form = new FormGroup({
         *   first: new FormControl('first name'),
         *   last: new FormControl('last name')
         * });
         *
         * console.log(form.value);  // {first: 'first name', last: 'last name'}
         *
         * form.reset({ first: 'name', last: 'last name' });
         *
         * console.log(form.value);  // {first: 'name', last: 'last name'}
         * ```
         *
         * ### Reset the form group values and disabled status
         *
         * ```
         * const form = new FormGroup({
         *   first: new FormControl('first name'),
         *   last: new FormControl('last name')
         * });
         *
         * form.reset({
         *   first: {value: 'name', disabled: true},
         *   last: 'last'
         * });
         *
         * console.log(this.form.value);  // {first: 'name', last: 'last name'}
         * console.log(this.form.get('first').status);  // 'DISABLED'
         * ```
         */

      }, {
        key: "reset",
        value: function reset() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._forEachChild(function (control, name) {
            control.reset(value[name], {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });

          this._updatePristine(options);

          this._updateTouched(options);

          this.updateValueAndValidity(options);
        }
        /**
         * The aggregate value of the `FormGroup`, including any disabled controls.
         *
         * Retrieves all values regardless of disabled status.
         * The `value` property is the best way to get the value of the group, because
         * it excludes disabled controls in the `FormGroup`.
         */

      }, {
        key: "getRawValue",
        value: function getRawValue() {
          return this._reduceChildren({}, function (acc, control, name) {
            acc[name] = control instanceof FormControl ? control.value : control.getRawValue();
            return acc;
          });
        }
        /** @internal */

      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          var subtreeUpdated = this._reduceChildren(false, function (updated, child) {
            return child._syncPendingControls() ? true : updated;
          });

          if (subtreeUpdated) this.updateValueAndValidity({
            onlySelf: true
          });
          return subtreeUpdated;
        }
        /** @internal */

      }, {
        key: "_throwIfControlMissing",
        value: function _throwIfControlMissing(name) {
          if (!Object.keys(this.controls).length) {
            throw new Error("\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
          }

          if (!this.controls[name]) {
            throw new Error("Cannot find form control with name: ".concat(name, "."));
          }
        }
        /** @internal */

      }, {
        key: "_forEachChild",
        value: function _forEachChild(cb) {
          var _this14 = this;

          Object.keys(this.controls).forEach(function (k) {
            return cb(_this14.controls[k], k);
          });
        }
        /** @internal */

      }, {
        key: "_setUpControls",
        value: function _setUpControls() {
          var _this15 = this;

          this._forEachChild(function (control) {
            control.setParent(_this15);

            control._registerOnCollectionChange(_this15._onCollectionChange);
          });
        }
        /** @internal */

      }, {
        key: "_updateValue",
        value: function _updateValue() {
          this.value = this._reduceValue();
        }
        /** @internal */

      }, {
        key: "_anyControls",
        value: function _anyControls(condition) {
          for (var _i6 = 0, _Object$keys = Object.keys(this.controls); _i6 < _Object$keys.length; _i6++) {
            var controlName = _Object$keys[_i6];
            var control = this.controls[controlName];

            if (this.contains(controlName) && condition(control)) {
              return true;
            }
          }

          return false;
        }
        /** @internal */

      }, {
        key: "_reduceValue",
        value: function _reduceValue() {
          var _this16 = this;

          return this._reduceChildren({}, function (acc, control, name) {
            if (control.enabled || _this16.disabled) {
              acc[name] = control.value;
            }

            return acc;
          });
        }
        /** @internal */

      }, {
        key: "_reduceChildren",
        value: function _reduceChildren(initValue, fn) {
          var res = initValue;

          this._forEachChild(function (control, name) {
            res = fn(res, control, name);
          });

          return res;
        }
        /** @internal */

      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          for (var _i7 = 0, _Object$keys2 = Object.keys(this.controls); _i7 < _Object$keys2.length; _i7++) {
            var controlName = _Object$keys2[_i7];

            if (this.controls[controlName].enabled) {
              return false;
            }
          }

          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        /** @internal */

      }, {
        key: "_checkAllValuesPresent",
        value: function _checkAllValuesPresent(value) {
          this._forEachChild(function (control, name) {
            if (value[name] === undefined) {
              throw new Error("Must supply a value for form control with name: '".concat(name, "'."));
            }
          });
        }
      }]);

      return FormGroup;
    }(AbstractControl);
    /**
     * Tracks the value and validity state of an array of `FormControl`,
     * `FormGroup` or `FormArray` instances.
     *
     * A `FormArray` aggregates the values of each child `FormControl` into an array.
     * It calculates its status by reducing the status values of its children. For example, if one of
     * the controls in a `FormArray` is invalid, the entire array becomes invalid.
     *
     * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
     * along with `FormControl` and `FormGroup`.
     *
     * @usageNotes
     *
     * ### Create an array of form controls
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl('Nancy', Validators.minLength(2)),
     *   new FormControl('Drew'),
     * ]);
     *
     * console.log(arr.value);   // ['Nancy', 'Drew']
     * console.log(arr.status);  // 'VALID'
     * ```
     *
     * ### Create a form array with array-level validators
     *
     * You include array-level validators and async validators. These come in handy
     * when you want to perform validation that considers the value of more than one child
     * control.
     *
     * The two types of validators are passed in separately as the second and third arg
     * respectively, or together as part of an options object.
     *
     * ```
     * const arr = new FormArray([
     *   new FormControl('Nancy'),
     *   new FormControl('Drew')
     * ], {validators: myValidator, asyncValidators: myAsyncValidator});
     * ```
     *
     * ### Set the updateOn property for all controls in a form array
     *
     * The options object is used to set a default value for each child
     * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
     * array level, all child controls default to 'blur', unless the child
     * has explicitly specified a different `updateOn` value.
     *
     * ```ts
     * const arr = new FormArray([
     *    new FormControl()
     * ], {updateOn: 'blur'});
     * ```
     *
     * ### Adding or removing controls from a form array
     *
     * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
     * in `FormArray` itself. These methods ensure the controls are properly tracked in the
     * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
     * the `FormArray` directly, as that result in strange and unexpected behavior such
     * as broken change detection.
     *
     * @publicApi
     */


    var FormArray = /*#__PURE__*/function (_AbstractControl3) {
      _inherits(FormArray, _AbstractControl3);

      var _super7 = _createSuper(FormArray);

      /**
       * Creates a new `FormArray` instance.
       *
       * @param controls An array of child controls. Each child control is given an index
       * where it is registered.
       *
       * @param validatorOrOpts A synchronous validator function, or an array of
       * such functions, or an `AbstractControlOptions` object that contains validation functions
       * and a validation trigger.
       *
       * @param asyncValidator A single async validator or array of async validator functions
       *
       */
      function FormArray(controls, validatorOrOpts, asyncValidator) {
        var _this17;

        _classCallCheck(this, FormArray);

        _this17 = _super7.call(this, coerceToValidator(validatorOrOpts), coerceToAsyncValidator(asyncValidator, validatorOrOpts));
        _this17.controls = controls;

        _this17._initObservables();

        _this17._setUpdateStrategy(validatorOrOpts);

        _this17._setUpControls();

        _this17.updateValueAndValidity({
          onlySelf: true,
          emitEvent: false
        });

        return _this17;
      }
      /**
       * Get the `AbstractControl` at the given `index` in the array.
       *
       * @param index Index in the array to retrieve the control
       */


      _createClass(FormArray, [{
        key: "at",
        value: function at(index) {
          return this.controls[index];
        }
        /**
         * Insert a new `AbstractControl` at the end of the array.
         *
         * @param control Form control to be inserted
         */

      }, {
        key: "push",
        value: function push(control) {
          this.controls.push(control);

          this._registerControl(control);

          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Insert a new `AbstractControl` at the given `index` in the array.
         *
         * @param index Index in the array to insert the control
         * @param control Form control to be inserted
         */

      }, {
        key: "insert",
        value: function insert(index, control) {
          this.controls.splice(index, 0, control);

          this._registerControl(control);

          this.updateValueAndValidity();
        }
        /**
         * Remove the control at the given `index` in the array.
         *
         * @param index Index in the array to remove the control
         */

      }, {
        key: "removeAt",
        value: function removeAt(index) {
          if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
          this.controls.splice(index, 1);
          this.updateValueAndValidity();
        }
        /**
         * Replace an existing control.
         *
         * @param index Index in the array to replace the control
         * @param control The `AbstractControl` control to replace the existing control
         */

      }, {
        key: "setControl",
        value: function setControl(index, control) {
          if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
          this.controls.splice(index, 1);

          if (control) {
            this.controls.splice(index, 0, control);

            this._registerControl(control);
          }

          this.updateValueAndValidity();

          this._onCollectionChange();
        }
        /**
         * Length of the control array.
         */

      }, {
        key: "setValue",

        /**
         * Sets the value of the `FormArray`. It accepts an array that matches
         * the structure of the control.
         *
         * This method performs strict checks, and throws an error if you try
         * to set the value of a control that doesn't exist or if you exclude the
         * value of a control.
         *
         * @usageNotes
         * ### Set the values for the controls in the form array
         *
         * ```
         * const arr = new FormArray([
         *   new FormControl(),
         *   new FormControl()
         * ]);
         * console.log(arr.value);   // [null, null]
         *
         * arr.setValue(['Nancy', 'Drew']);
         * console.log(arr.value);   // ['Nancy', 'Drew']
         * ```
         *
         * @param value Array of values for the controls
         * @param options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         */
        value: function setValue(value) {
          var _this18 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._checkAllValuesPresent(value);

          value.forEach(function (newValue, index) {
            _this18._throwIfControlMissing(index);

            _this18.at(index).setValue(newValue, {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Patches the value of the `FormArray`. It accepts an array that matches the
         * structure of the control, and does its best to match the values to the correct
         * controls in the group.
         *
         * It accepts both super-sets and sub-sets of the array without throwing an error.
         *
         * @usageNotes
         * ### Patch the values for controls in a form array
         *
         * ```
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         * console.log(arr.value);   // [null, null]
         *
         * arr.patchValue(['Nancy']);
         * console.log(arr.value);   // ['Nancy', null]
         * ```
         *
         * @param value Array of latest values for the controls
         * @param options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         */

      }, {
        key: "patchValue",
        value: function patchValue(value) {
          var _this19 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          value.forEach(function (newValue, index) {
            if (_this19.at(index)) {
              _this19.at(index).patchValue(newValue, {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            }
          });
          this.updateValueAndValidity(options);
        }
        /**
         * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
         * value of all descendants to null or null maps.
         *
         * You reset to a specific form state by passing in an array of states
         * that matches the structure of the control. The state is a standalone value
         * or a form state object with both a value and a disabled status.
         *
         * @usageNotes
         * ### Reset the values in a form array
         *
         * ```ts
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         * arr.reset(['name', 'last name']);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * ```
         *
         * ### Reset the values in a form array and the disabled status for the first control
         *
         * ```
         * this.arr.reset([
         *   {value: 'name', disabled: true},
         *   'last'
         * ]);
         *
         * console.log(this.arr.value);  // ['name', 'last name']
         * console.log(this.arr.get(0).status);  // 'DISABLED'
         * ```
         *
         * @param value Array of values for the controls
         * @param options Configure options that determine how the control propagates changes and
         * emits events after the value changes
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
         * is false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control is reset.
         * When false, no events are emitted.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         */

      }, {
        key: "reset",
        value: function reset() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this._forEachChild(function (control, index) {
            control.reset(value[index], {
              onlySelf: true,
              emitEvent: options.emitEvent
            });
          });

          this._updatePristine(options);

          this._updateTouched(options);

          this.updateValueAndValidity(options);
        }
        /**
         * The aggregate value of the array, including any disabled controls.
         *
         * Reports all values regardless of disabled status.
         * For enabled controls only, the `value` property is the best way to get the value of the array.
         */

      }, {
        key: "getRawValue",
        value: function getRawValue() {
          return this.controls.map(function (control) {
            return control instanceof FormControl ? control.value : control.getRawValue();
          });
        }
        /**
         * Remove all controls in the `FormArray`.
         *
         * @usageNotes
         * ### Remove all elements from a FormArray
         *
         * ```ts
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         * console.log(arr.length);  // 2
         *
         * arr.clear();
         * console.log(arr.length);  // 0
         * ```
         *
         * It's a simpler and more efficient alternative to removing all elements one by one:
         *
         * ```ts
         * const arr = new FormArray([
         *    new FormControl(),
         *    new FormControl()
         * ]);
         *
         * while (arr.length) {
         *    arr.removeAt(0);
         * }
         * ```
         */

      }, {
        key: "clear",
        value: function clear() {
          if (this.controls.length < 1) return;

          this._forEachChild(function (control) {
            return control._registerOnCollectionChange(function () {});
          });

          this.controls.splice(0);
          this.updateValueAndValidity();
        }
        /** @internal */

      }, {
        key: "_syncPendingControls",
        value: function _syncPendingControls() {
          var subtreeUpdated = this.controls.reduce(function (updated, child) {
            return child._syncPendingControls() ? true : updated;
          }, false);
          if (subtreeUpdated) this.updateValueAndValidity({
            onlySelf: true
          });
          return subtreeUpdated;
        }
        /** @internal */

      }, {
        key: "_throwIfControlMissing",
        value: function _throwIfControlMissing(index) {
          if (!this.controls.length) {
            throw new Error("\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
          }

          if (!this.at(index)) {
            throw new Error("Cannot find form control at index ".concat(index));
          }
        }
        /** @internal */

      }, {
        key: "_forEachChild",
        value: function _forEachChild(cb) {
          this.controls.forEach(function (control, index) {
            cb(control, index);
          });
        }
        /** @internal */

      }, {
        key: "_updateValue",
        value: function _updateValue() {
          var _this20 = this;

          this.value = this.controls.filter(function (control) {
            return control.enabled || _this20.disabled;
          }).map(function (control) {
            return control.value;
          });
        }
        /** @internal */

      }, {
        key: "_anyControls",
        value: function _anyControls(condition) {
          return this.controls.some(function (control) {
            return control.enabled && condition(control);
          });
        }
        /** @internal */

      }, {
        key: "_setUpControls",
        value: function _setUpControls() {
          var _this21 = this;

          this._forEachChild(function (control) {
            return _this21._registerControl(control);
          });
        }
        /** @internal */

      }, {
        key: "_checkAllValuesPresent",
        value: function _checkAllValuesPresent(value) {
          this._forEachChild(function (control, i) {
            if (value[i] === undefined) {
              throw new Error("Must supply a value for form control at index: ".concat(i, "."));
            }
          });
        }
        /** @internal */

      }, {
        key: "_allControlsDisabled",
        value: function _allControlsDisabled() {
          var _iterator = _createForOfIteratorHelper(this.controls),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var control = _step.value;
              if (control.enabled) return false;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return this.controls.length > 0 || this.disabled;
        }
      }, {
        key: "_registerControl",
        value: function _registerControl(control) {
          control.setParent(this);

          control._registerOnCollectionChange(this._onCollectionChange);
        }
      }, {
        key: "length",
        get: function get() {
          return this.controls.length;
        }
      }]);

      return FormArray;
    }(AbstractControl);
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var formDirectiveProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return NgForm;
      })
    };

    var ɵ0 = function ɵ0() {
      return Promise.resolve(null);
    };

    var resolvedPromise = ɵ0();
    /**
     * @description
     * Creates a top-level `FormGroup` instance and binds it to a form
     * to track aggregate form value and validation status.
     *
     * As soon as you import the `FormsModule`, this directive becomes active by default on
     * all `<form>` tags.  You don't need to add a special selector.
     *
     * You optionally export the directive into a local template variable using `ngForm` as the key
     * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
     * `FormGroup` instance are duplicated on the directive itself, so a reference to it
     * gives you access to the aggregate value and validity status of the form, as well as
     * user interaction properties like `dirty` and `touched`.
     *
     * To register child controls with the form, use `NgModel` with a `name`
     * attribute. You may use `NgModelGroup` to create sub-groups within the form.
     *
     * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
     * triggered a form submission. The `ngSubmit` event emits the original form
     * submission event.
     *
     * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
     * To import the `FormsModule` but skip its usage in some forms,
     * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
     * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
     * unnecessary because the `<form>` tags are inert. In that case, you would
     * refrain from using the `formGroup` directive.
     *
     * @usageNotes
     *
     * ### Listening for form submission
     *
     * The following example shows how to capture the form values from the "ngSubmit" event.
     *
     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * ### Setting the update options
     *
     * The following example shows you how to change the "updateOn" option from its default using
     * ngFormOptions.
     *
     * ```html
     * <form [ngFormOptions]="{updateOn: 'blur'}">
     *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
     * </form>
     * ```
     *
     * ### Native DOM validation UI
     *
     * In order to prevent the native DOM form validation UI from interfering with Angular's form
     * validation, Angular automatically adds the `novalidate` attribute on any `<form>` whenever
     * `FormModule` or `ReactiveFormModule` are imported into the application.
     * If you want to explicitly enable native DOM validation UI with Angular forms, you can add the
     * `ngNativeValidate` attribute to the `<form>` element:
     *
     * ```html
     * <form ngNativeValidate>
     *   ...
     * </form>
     * ```
     *
     * @ngModule FormsModule
     * @publicApi
     */

    var NgForm = /*#__PURE__*/function (_ControlContainer) {
      _inherits(NgForm, _ControlContainer);

      var _super8 = _createSuper(NgForm);

      function NgForm(validators, asyncValidators) {
        var _this22;

        _classCallCheck(this, NgForm);

        _this22 = _super8.call(this);
        /**
         * @description
         * Returns whether the form submission has been triggered.
         */

        _this22.submitted = false;
        _this22._directives = [];
        /**
         * @description
         * Event emitter for the "ngSubmit" event
         */

        _this22.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this22.form = new FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
        return _this22;
      }
      /**
       * @description
       * Lifecycle method called after the view is initialized. For internal use only.
       */


      _createClass(NgForm, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._setUpdateStrategy();
        }
        /**
         * @description
         * The directive instance.
         */

      }, {
        key: "addControl",

        /**
         * @description
         * Method that sets up the control directive in this group, re-calculates its value
         * and validity, and adds the instance to the internal list of directives.
         *
         * @param dir The `NgModel` directive instance.
         */
        value: function addControl(dir) {
          var _this23 = this;

          resolvedPromise.then(function () {
            var container = _this23._findContainer(dir.path);

            dir.control = container.registerControl(dir.name, dir.control);
            setUpControl(dir.control, dir);
            dir.control.updateValueAndValidity({
              emitEvent: false
            });

            _this23._directives.push(dir);
          });
        }
        /**
         * @description
         * Retrieves the `FormControl` instance from the provided `NgModel` directive.
         *
         * @param dir The `NgModel` directive instance.
         */

      }, {
        key: "getControl",
        value: function getControl(dir) {
          return this.form.get(dir.path);
        }
        /**
         * @description
         * Removes the `NgModel` instance from the internal list of directives
         *
         * @param dir The `NgModel` directive instance.
         */

      }, {
        key: "removeControl",
        value: function removeControl(dir) {
          var _this24 = this;

          resolvedPromise.then(function () {
            var container = _this24._findContainer(dir.path);

            if (container) {
              container.removeControl(dir.name);
            }

            removeDir(_this24._directives, dir);
          });
        }
        /**
         * @description
         * Adds a new `NgModelGroup` directive instance to the form.
         *
         * @param dir The `NgModelGroup` directive instance.
         */

      }, {
        key: "addFormGroup",
        value: function addFormGroup(dir) {
          var _this25 = this;

          resolvedPromise.then(function () {
            var container = _this25._findContainer(dir.path);

            var group = new FormGroup({});
            setUpFormContainer(group, dir);
            container.registerControl(dir.name, group);
            group.updateValueAndValidity({
              emitEvent: false
            });
          });
        }
        /**
         * @description
         * Removes the `NgModelGroup` directive instance from the form.
         *
         * @param dir The `NgModelGroup` directive instance.
         */

      }, {
        key: "removeFormGroup",
        value: function removeFormGroup(dir) {
          var _this26 = this;

          resolvedPromise.then(function () {
            var container = _this26._findContainer(dir.path);

            if (container) {
              container.removeControl(dir.name);
            }
          });
        }
        /**
         * @description
         * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
         *
         * @param dir The `NgModelGroup` directive instance.
         */

      }, {
        key: "getFormGroup",
        value: function getFormGroup(dir) {
          return this.form.get(dir.path);
        }
        /**
         * Sets the new value for the provided `NgControl` directive.
         *
         * @param dir The `NgControl` directive instance.
         * @param value The new value for the directive's control.
         */

      }, {
        key: "updateModel",
        value: function updateModel(dir, value) {
          var _this27 = this;

          resolvedPromise.then(function () {
            var ctrl = _this27.form.get(dir.path);

            ctrl.setValue(value);
          });
        }
        /**
         * @description
         * Sets the value for this `FormGroup`.
         *
         * @param value The new value
         */

      }, {
        key: "setValue",
        value: function setValue(value) {
          this.control.setValue(value);
        }
        /**
         * @description
         * Method called when the "submit" event is triggered on the form.
         * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
         *
         * @param $event The "submit" event object
         */

      }, {
        key: "onSubmit",
        value: function onSubmit($event) {
          this.submitted = true;
          syncPendingControls(this.form, this._directives);
          this.ngSubmit.emit($event);
          return false;
        }
        /**
         * @description
         * Method called when the "reset" event is triggered on the form.
         */

      }, {
        key: "onReset",
        value: function onReset() {
          this.resetForm();
        }
        /**
         * @description
         * Resets the form to an initial value and resets its submitted status.
         *
         * @param value The new value for the form.
         */

      }, {
        key: "resetForm",
        value: function resetForm() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          this.form.reset(value);
          this.submitted = false;
        }
      }, {
        key: "_setUpdateStrategy",
        value: function _setUpdateStrategy() {
          if (this.options && this.options.updateOn != null) {
            this.form._updateOn = this.options.updateOn;
          }
        }
        /** @internal */

      }, {
        key: "_findContainer",
        value: function _findContainer(path) {
          path.pop();
          return path.length ? this.form.get(path) : this.form;
        }
      }, {
        key: "formDirective",
        get: function get() {
          return this;
        }
        /**
         * @description
         * The internal `FormGroup` instance.
         */

      }, {
        key: "control",
        get: function get() {
          return this.form;
        }
        /**
         * @description
         * Returns an array representing the path to this group. Because this directive
         * always lives at the top level of a form, it is always an empty array.
         */

      }, {
        key: "path",
        get: function get() {
          return [];
        }
        /**
         * @description
         * Returns a map of the controls in this group.
         */

      }, {
        key: "controls",
        get: function get() {
          return this.form.controls;
        }
      }]);

      return NgForm;
    }(ControlContainer);

    NgForm.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]',
        providers: [formDirectiveProvider],
        host: {
          '(submit)': 'onSubmit($event)',
          '(reset)': 'onReset()'
        },
        outputs: ['ngSubmit'],
        exportAs: 'ngForm'
      }]
    }];

    NgForm.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    NgForm.propDecorators = {
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngFormOptions']
      }]
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @description
     * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
     *
     * @publicApi
     */

    var AbstractFormGroupDirective = /*#__PURE__*/function (_ControlContainer2) {
      _inherits(AbstractFormGroupDirective, _ControlContainer2);

      var _super9 = _createSuper(AbstractFormGroupDirective);

      function AbstractFormGroupDirective() {
        _classCallCheck(this, AbstractFormGroupDirective);

        return _super9.apply(this, arguments);
      }

      _createClass(AbstractFormGroupDirective, [{
        key: "ngOnInit",

        /**
         * @description
         * An internal callback method triggered on the instance after the inputs are set.
         * Registers the group with its parent group.
         */
        value: function ngOnInit() {
          this._checkParentType();

          this.formDirective.addFormGroup(this);
        }
        /**
         * @description
         * An internal callback method triggered before the instance is destroyed.
         * Removes the group from its parent group.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.formDirective) {
            this.formDirective.removeFormGroup(this);
          }
        }
        /**
         * @description
         * The `FormGroup` bound to this directive.
         */

      }, {
        key: "_checkParentType",

        /** @internal */
        value: function _checkParentType() {}
      }, {
        key: "control",
        get: function get() {
          return this.formDirective.getFormGroup(this);
        }
        /**
         * @description
         * The path to this group from the top-level directive.
         */

      }, {
        key: "path",
        get: function get() {
          return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
        }
        /**
         * @description
         * The top-level directive for this group if present, otherwise null.
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ? this._parent.formDirective : null;
        }
        /**
         * @description
         * The synchronous validators registered with this group.
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._validators);
        }
        /**
         * @description
         * The async validators registered with this group.
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._asyncValidators);
        }
      }]);

      return AbstractFormGroupDirective;
    }(ControlContainer);

    AbstractFormGroupDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"]
    }];
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var TemplateDrivenErrors = /*#__PURE__*/function () {
      function TemplateDrivenErrors() {
        _classCallCheck(this, TemplateDrivenErrors);
      }

      _createClass(TemplateDrivenErrors, null, [{
        key: "modelParentException",
        value: function modelParentException() {
          throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      ".concat(FormErrorExamples.formControlName, "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ").concat(FormErrorExamples.ngModelWithFormGroup));
        }
      }, {
        key: "formGroupNameException",
        value: function formGroupNameException() {
          throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
        }
      }, {
        key: "missingNameException",
        value: function missingNameException() {
          throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
        }
      }, {
        key: "modelGroupParentException",
        value: function modelGroupParentException() {
          throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
        }
      }]);

      return TemplateDrivenErrors;
    }();
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var modelGroupProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return NgModelGroup;
      })
    };
    /**
     * @description
     * Creates and binds a `FormGroup` instance to a DOM element.
     *
     * This directive can only be used as a child of `NgForm` (within `<form>` tags).
     *
     * Use this directive to validate a sub-group of your form separately from the
     * rest of your form, or if some values in your domain model make more sense
     * to consume together in a nested object.
     *
     * Provide a name for the sub-group and it will become the key
     * for the sub-group in the form's full value. If you need direct access, export the directive into
     * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
     *
     * @usageNotes
     *
     * ### Consuming controls in a grouping
     *
     * The following example shows you how to combine controls together in a sub-group
     * of the form.
     *
     * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
     *
     * @ngModule FormsModule
     * @publicApi
     */

    var NgModelGroup = /*#__PURE__*/function (_AbstractFormGroupDir) {
      _inherits(NgModelGroup, _AbstractFormGroupDir);

      var _super10 = _createSuper(NgModelGroup);

      function NgModelGroup(parent, validators, asyncValidators) {
        var _this28;

        _classCallCheck(this, NgModelGroup);

        _this28 = _super10.call(this);
        _this28._parent = parent;
        _this28._validators = validators;
        _this28._asyncValidators = asyncValidators;
        return _this28;
      }
      /** @internal */


      _createClass(NgModelGroup, [{
        key: "_checkParentType",
        value: function _checkParentType() {
          if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelGroupParentException();
          }
        }
      }]);

      return NgModelGroup;
    }(AbstractFormGroupDirective);

    NgModelGroup.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngModelGroup]',
        providers: [modelGroupProvider],
        exportAs: 'ngModelGroup'
      }]
    }];

    NgModelGroup.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    NgModelGroup.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModelGroup']
      }]
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var formControlBinding = {
      provide: NgControl,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return NgModel;
      })
    };

    var ɵ0$1 = function ɵ0$1() {
      return Promise.resolve(null);
    };
    /**
     * `ngModel` forces an additional change detection run when its inputs change:
     * E.g.:
     * ```
     * <div>{{myModel.valid}}</div>
     * <input [(ngModel)]="myValue" #myModel="ngModel">
     * ```
     * I.e. `ngModel` can export itself on the element and then be used in the template.
     * Normally, this would result in expressions before the `input` that use the exported directive
     * to have and old value as they have been
     * dirty checked before. As this is a very common case for `ngModel`, we added this second change
     * detection run.
     *
     * Notes:
     * - this is just one extra run no matter how many `ngModel` have been changed.
     * - this is a general problem when using `exportAs` for directives!
     */


    var resolvedPromise$1 = ɵ0$1();
    /**
     * @description
     * Creates a `FormControl` instance from a domain model and binds it
     * to a form control element.
     *
     * The `FormControl` instance tracks the value, user interaction, and
     * validation status of the control and keeps the view synced with the model. If used
     * within a parent form, the directive also registers itself with the form as a child
     * control.
     *
     * This directive is used by itself or as part of a larger form. Use the
     * `ngModel` selector to activate it.
     *
     * It accepts a domain model as an optional `Input`. If you have a one-way binding
     * to `ngModel` with `[]` syntax, changing the value of the domain model in the component
     * class sets the value in the view. If you have a two-way binding with `[()]` syntax
     * (also known as 'banana-box syntax'), the value in the UI always syncs back to
     * the domain model in your class.
     *
     * To inspect the properties of the associated `FormControl` (like validity state),
     * export the directive into a local template variable using `ngModel` as the key (ex:
     * `#myVar="ngModel"`). You then access the control using the directive's `control` property, but
     * most properties used (like `valid` and `dirty`) fall through to the control anyway for direct
     * access. See a full list of properties directly available in `AbstractControlDirective`.
     *
     * @see `RadioControlValueAccessor`
     * @see `SelectControlValueAccessor`
     *
     * @usageNotes
     *
     * ### Using ngModel on a standalone control
     *
     * The following examples show a simple standalone control using `ngModel`:
     *
     * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
     *
     * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
     * so that the control can be registered with the parent form under that name.
     *
     * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
     * as the parent form syncs the value for you. You access its properties by exporting it into a
     * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
     * needed on form submission.
     *
     * If you do need to populate initial values into your form, using a one-way binding for
     * `ngModel` tends to be sufficient as long as you use the exported form's value rather
     * than the domain model's value on submit.
     *
     * ### Using ngModel within a form
     *
     * The following example shows controls using `ngModel` within a form:
     *
     * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
     *
     * ### Using a standalone ngModel within a group
     *
     * The following example shows you how to use a standalone ngModel control
     * within a form. This controls the display of the form, but doesn't contain form data.
     *
     * ```html
     * <form>
     *   <input name="login" ngModel placeholder="Login">
     *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
     * </form>
     * <!-- form value: {login: ''} -->
     * ```
     *
     * ### Setting the ngModel name attribute through options
     *
     * The following example shows you an alternate way to set the name attribute. The name attribute is
     * used within a custom form component, and the name `@Input` property serves a different purpose.
     *
     * ```html
     * <form>
     *   <my-person-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
     *   </my-person-control>
     * </form>
     * <!-- form value: {user: ''} -->
     * ```
     *
     * @ngModule FormsModule
     * @publicApi
     */

    var NgModel = /*#__PURE__*/function (_NgControl) {
      _inherits(NgModel, _NgControl);

      var _super11 = _createSuper(NgModel);

      function NgModel(parent, validators, asyncValidators, valueAccessors) {
        var _this29;

        _classCallCheck(this, NgModel);

        _this29 = _super11.call(this);
        _this29.control = new FormControl();
        /** @internal */

        _this29._registered = false;
        /**
         * @description
         * Event emitter for producing the `ngModelChange` event after
         * the view model updates.
         */

        _this29.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this29._parent = parent;
        _this29._rawValidators = validators || [];
        _this29._rawAsyncValidators = asyncValidators || [];
        _this29.valueAccessor = selectValueAccessor(_assertThisInitialized(_this29), valueAccessors);
        return _this29;
      }
      /**
       * @description
       * A lifecycle method called when the directive's inputs change. For internal use
       * only.
       *
       * @param changes A object of key/value pairs for the set of changed inputs.
       */


      _createClass(NgModel, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._checkForErrors();

          if (!this._registered) this._setUpControl();

          if ('isDisabled' in changes) {
            this._updateDisabled(changes);
          }

          if (isPropertyUpdated(changes, this.viewModel)) {
            this._updateValue(this.model);

            this.viewModel = this.model;
          }
        }
        /**
         * @description
         * Lifecycle method called before the directive's instance is destroyed. For internal
         * use only.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.formDirective && this.formDirective.removeControl(this);
        }
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */

      }, {
        key: "viewToModelUpdate",

        /**
         * @description
         * Sets the new value for the view model and emits an `ngModelChange` event.
         *
         * @param newValue The new value emitted by `ngModelChange`.
         */
        value: function viewToModelUpdate(newValue) {
          this.viewModel = newValue;
          this.update.emit(newValue);
        }
      }, {
        key: "_setUpControl",
        value: function _setUpControl() {
          this._setUpdateStrategy();

          this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
          this._registered = true;
        }
      }, {
        key: "_setUpdateStrategy",
        value: function _setUpdateStrategy() {
          if (this.options && this.options.updateOn != null) {
            this.control._updateOn = this.options.updateOn;
          }
        }
      }, {
        key: "_isStandalone",
        value: function _isStandalone() {
          return !this._parent || !!(this.options && this.options.standalone);
        }
      }, {
        key: "_setUpStandalone",
        value: function _setUpStandalone() {
          setUpControl(this.control, this);
          this.control.updateValueAndValidity({
            emitEvent: false
          });
        }
      }, {
        key: "_checkForErrors",
        value: function _checkForErrors() {
          if (!this._isStandalone()) {
            this._checkParentType();
          }

          this._checkName();
        }
      }, {
        key: "_checkParentType",
        value: function _checkParentType() {
          if (!(this._parent instanceof NgModelGroup) && this._parent instanceof AbstractFormGroupDirective) {
            TemplateDrivenErrors.formGroupNameException();
          } else if (!(this._parent instanceof NgModelGroup) && !(this._parent instanceof NgForm)) {
            TemplateDrivenErrors.modelParentException();
          }
        }
      }, {
        key: "_checkName",
        value: function _checkName() {
          if (this.options && this.options.name) this.name = this.options.name;

          if (!this._isStandalone() && !this.name) {
            TemplateDrivenErrors.missingNameException();
          }
        }
      }, {
        key: "_updateValue",
        value: function _updateValue(value) {
          var _this30 = this;

          resolvedPromise$1.then(function () {
            _this30.control.setValue(value, {
              emitViewToModelChange: false
            });
          });
        }
      }, {
        key: "_updateDisabled",
        value: function _updateDisabled(changes) {
          var _this31 = this;

          var disabledValue = changes['isDisabled'].currentValue;
          var isDisabled = disabledValue === '' || disabledValue && disabledValue !== 'false';
          resolvedPromise$1.then(function () {
            if (isDisabled && !_this31.control.disabled) {
              _this31.control.disable();
            } else if (!isDisabled && _this31.control.disabled) {
              _this31.control.enable();
            }
          });
        }
      }, {
        key: "path",
        get: function get() {
          return this._parent ? controlPath(this.name, this._parent) : [this.name];
        }
        /**
         * @description
         * The top-level directive for this control if present, otherwise null.
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ? this._parent.formDirective : null;
        }
        /**
         * @description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._rawValidators);
        }
        /**
         * @description
         * Async validator function composed of all the async validators registered with this
         * directive.
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._rawAsyncValidators);
        }
      }]);

      return NgModel;
    }(NgControl);

    NgModel.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngModel]:not([formControlName]):not([formControl])',
        providers: [formControlBinding],
        exportAs: 'ngModel'
      }]
    }];

    NgModel.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALUE_ACCESSOR]
        }]
      }];
    };

    NgModel.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['disabled']
      }],
      model: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModel']
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModelOptions']
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['ngModelChange']
      }]
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @description
     *
     * Adds `novalidate` attribute to all forms by default.
     *
     * `novalidate` is used to disable browser's native form validation.
     *
     * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
     *
     * ```
     * <form ngNativeValidate></form>
     * ```
     *
     * @publicApi
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     */

    var ɵNgNoValidate = function ɵNgNoValidate() {
      _classCallCheck(this, ɵNgNoValidate);
    };

    ɵNgNoValidate.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
        host: {
          'novalidate': ''
        }
      }]
    }];
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Token to provide to turn off the ngModel warning on formControl and formControlName.
     */

    var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('NgModelWithFormControlWarning');
    var formControlBinding$1 = {
      provide: NgControl,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return FormControlDirective;
      })
    };
    /**
     * @description
     * Synchronizes a standalone `FormControl` instance to a form control element.
     *
     * Note that support for using the `ngModel` input property and `ngModelChange` event with reactive
     * form directives was deprecated in Angular v6 and is scheduled for removal in
     * a future version of Angular.
     * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `FormControl`
     * @see `AbstractControl`
     *
     * @usageNotes
     *
     * The following example shows how to register a standalone control and set its value.
     *
     * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
     *
     * @ngModule ReactiveFormsModule
     * @publicApi
     */

    var FormControlDirective = /*#__PURE__*/function (_NgControl2) {
      _inherits(FormControlDirective, _NgControl2);

      var _super12 = _createSuper(FormControlDirective);

      function FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this32;

        _classCallCheck(this, FormControlDirective);

        _this32 = _super12.call(this);
        _this32._ngModelWarningConfig = _ngModelWarningConfig;
        /** @deprecated as of v6 */

        _this32.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular `FormControlDirective` instance. Used to support warning config of "always".
         *
         * @internal
         */

        _this32._ngModelWarningSent = false;
        _this32._rawValidators = validators || [];
        _this32._rawAsyncValidators = asyncValidators || [];
        _this32.valueAccessor = selectValueAccessor(_assertThisInitialized(_this32), valueAccessors);
        return _this32;
      }
      /**
       * @description
       * Triggers a warning that this input should not be used with reactive forms.
       */


      _createClass(FormControlDirective, [{
        key: "ngOnChanges",

        /**
         * @description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param changes A object of key/value pairs for the set of changed inputs.
         */
        value: function ngOnChanges(changes) {
          if (this._isControlChanged(changes)) {
            setUpControl(this.form, this);

            if (this.control.disabled && this.valueAccessor.setDisabledState) {
              this.valueAccessor.setDisabledState(true);
            }

            this.form.updateValueAndValidity({
              emitEvent: false
            });
          }

          if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControl', FormControlDirective, this, this._ngModelWarningConfig);

            this.form.setValue(this.model);
            this.viewModel = this.model;
          }
        }
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */

      }, {
        key: "viewToModelUpdate",

        /**
         * @description
         * Sets the new value for the view model and emits an `ngModelChange` event.
         *
         * @param newValue The new value for the view model.
         */
        value: function viewToModelUpdate(newValue) {
          this.viewModel = newValue;
          this.update.emit(newValue);
        }
      }, {
        key: "_isControlChanged",
        value: function _isControlChanged(changes) {
          return changes.hasOwnProperty('form');
        }
      }, {
        key: "isDisabled",
        set: function set(isDisabled) {
          ReactiveErrors.disabledAttrWarning();
        }
      }, {
        key: "path",
        get: function get() {
          return [];
        }
        /**
         * @description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._rawValidators);
        }
        /**
         * @description
         * Async validator function composed of all the async validators registered with this
         * directive.
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._rawAsyncValidators);
        }
        /**
         * @description
         * The `FormControl` bound to this directive.
         */

      }, {
        key: "control",
        get: function get() {
          return this.form;
        }
      }]);

      return FormControlDirective;
    }(NgControl);
    /**
     * @description
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlDirective. Used to support warning config of "once".
     *
     * @internal
     */


    FormControlDirective._ngModelWarningSentOnce = false;
    FormControlDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formControl]',
        providers: [formControlBinding$1],
        exportAs: 'ngForm'
      }]
    }];

    FormControlDirective.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALUE_ACCESSOR]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
        }]
      }];
    };

    FormControlDirective.propDecorators = {
      form: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formControl']
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['disabled']
      }],
      model: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModel']
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['ngModelChange']
      }]
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var formDirectiveProvider$1 = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return FormGroupDirective;
      })
    };
    /**
     * @description
     *
     * Binds an existing `FormGroup` to a DOM element.
     *
     * This directive accepts an existing `FormGroup` instance. It will then use this
     * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
     * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
     * and `FormArrayName` directives.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `AbstractControl`
     *
     * ### Register Form Group
     *
     * The following example registers a `FormGroup` with first name and last name controls,
     * and listens for the *ngSubmit* event when the button is clicked.
     *
     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * @ngModule ReactiveFormsModule
     * @publicApi
     */

    var FormGroupDirective = /*#__PURE__*/function (_ControlContainer3) {
      _inherits(FormGroupDirective, _ControlContainer3);

      var _super13 = _createSuper(FormGroupDirective);

      function FormGroupDirective(_validators, _asyncValidators) {
        var _this33;

        _classCallCheck(this, FormGroupDirective);

        _this33 = _super13.call(this);
        _this33._validators = _validators;
        _this33._asyncValidators = _asyncValidators;
        /**
         * @description
         * Reports whether the form submission has been triggered.
         */

        _this33.submitted = false;
        /**
         * @description
         * Tracks the list of added `FormControlName` instances
         */

        _this33.directives = [];
        /**
         * @description
         * Tracks the `FormGroup` bound to this directive.
         */

        _this33.form = null;
        /**
         * @description
         * Emits an event when the form submission has been triggered.
         */

        _this33.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this33;
      }
      /**
       * @description
       * A lifecycle method called when the directive's inputs change. For internal use only.
       *
       * @param changes A object of key/value pairs for the set of changed inputs.
       */


      _createClass(FormGroupDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._checkFormPresent();

          if (changes.hasOwnProperty('form')) {
            this._updateValidators();

            this._updateDomValue();

            this._updateRegistrations();
          }
        }
        /**
         * @description
         * Returns this directive's instance.
         */

      }, {
        key: "addControl",

        /**
         * @description
         * Method that sets up the control directive in this group, re-calculates its value
         * and validity, and adds the instance to the internal list of directives.
         *
         * @param dir The `FormControlName` directive instance.
         */
        value: function addControl(dir) {
          var ctrl = this.form.get(dir.path);
          setUpControl(ctrl, dir);
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
          this.directives.push(dir);
          return ctrl;
        }
        /**
         * @description
         * Retrieves the `FormControl` instance from the provided `FormControlName` directive
         *
         * @param dir The `FormControlName` directive instance.
         */

      }, {
        key: "getControl",
        value: function getControl(dir) {
          return this.form.get(dir.path);
        }
        /**
         * @description
         * Removes the `FormControlName` instance from the internal list of directives
         *
         * @param dir The `FormControlName` directive instance.
         */

      }, {
        key: "removeControl",
        value: function removeControl(dir) {
          removeDir(this.directives, dir);
        }
        /**
         * Adds a new `FormGroupName` directive instance to the form.
         *
         * @param dir The `FormGroupName` directive instance.
         */

      }, {
        key: "addFormGroup",
        value: function addFormGroup(dir) {
          var ctrl = this.form.get(dir.path);
          setUpFormContainer(ctrl, dir);
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
        /**
         * No-op method to remove the form group.
         *
         * @param dir The `FormGroupName` directive instance.
         */

      }, {
        key: "removeFormGroup",
        value: function removeFormGroup(dir) {}
        /**
         * @description
         * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
         *
         * @param dir The `FormGroupName` directive instance.
         */

      }, {
        key: "getFormGroup",
        value: function getFormGroup(dir) {
          return this.form.get(dir.path);
        }
        /**
         * Adds a new `FormArrayName` directive instance to the form.
         *
         * @param dir The `FormArrayName` directive instance.
         */

      }, {
        key: "addFormArray",
        value: function addFormArray(dir) {
          var ctrl = this.form.get(dir.path);
          setUpFormContainer(ctrl, dir);
          ctrl.updateValueAndValidity({
            emitEvent: false
          });
        }
        /**
         * No-op method to remove the form array.
         *
         * @param dir The `FormArrayName` directive instance.
         */

      }, {
        key: "removeFormArray",
        value: function removeFormArray(dir) {}
        /**
         * @description
         * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
         *
         * @param dir The `FormArrayName` directive instance.
         */

      }, {
        key: "getFormArray",
        value: function getFormArray(dir) {
          return this.form.get(dir.path);
        }
        /**
         * Sets the new value for the provided `FormControlName` directive.
         *
         * @param dir The `FormControlName` directive instance.
         * @param value The new value for the directive's control.
         */

      }, {
        key: "updateModel",
        value: function updateModel(dir, value) {
          var ctrl = this.form.get(dir.path);
          ctrl.setValue(value);
        }
        /**
         * @description
         * Method called with the "submit" event is triggered on the form.
         * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
         *
         * @param $event The "submit" event object
         */

      }, {
        key: "onSubmit",
        value: function onSubmit($event) {
          this.submitted = true;
          syncPendingControls(this.form, this.directives);
          this.ngSubmit.emit($event);
          return false;
        }
        /**
         * @description
         * Method called when the "reset" event is triggered on the form.
         */

      }, {
        key: "onReset",
        value: function onReset() {
          this.resetForm();
        }
        /**
         * @description
         * Resets the form to an initial value and resets its submitted status.
         *
         * @param value The new value for the form.
         */

      }, {
        key: "resetForm",
        value: function resetForm() {
          var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
          this.form.reset(value);
          this.submitted = false;
        }
        /** @internal */

      }, {
        key: "_updateDomValue",
        value: function _updateDomValue() {
          var _this34 = this;

          this.directives.forEach(function (dir) {
            var newCtrl = _this34.form.get(dir.path);

            if (dir.control !== newCtrl) {
              cleanUpControl(dir.control, dir);
              if (newCtrl) setUpControl(newCtrl, dir);
              dir.control = newCtrl;
            }
          });

          this.form._updateTreeValidity({
            emitEvent: false
          });
        }
      }, {
        key: "_updateRegistrations",
        value: function _updateRegistrations() {
          var _this35 = this;

          this.form._registerOnCollectionChange(function () {
            return _this35._updateDomValue();
          });

          if (this._oldForm) this._oldForm._registerOnCollectionChange(function () {});
          this._oldForm = this.form;
        }
      }, {
        key: "_updateValidators",
        value: function _updateValidators() {
          var sync = composeValidators(this._validators);
          this.form.validator = Validators.compose([this.form.validator, sync]);
          var async = composeAsyncValidators(this._asyncValidators);
          this.form.asyncValidator = Validators.composeAsync([this.form.asyncValidator, async]);
        }
      }, {
        key: "_checkFormPresent",
        value: function _checkFormPresent() {
          if (!this.form) {
            ReactiveErrors.missingFormException();
          }
        }
      }, {
        key: "formDirective",
        get: function get() {
          return this;
        }
        /**
         * @description
         * Returns the `FormGroup` bound to this directive.
         */

      }, {
        key: "control",
        get: function get() {
          return this.form;
        }
        /**
         * @description
         * Returns an array representing the path to this group. Because this directive
         * always lives at the top level of a form, it always an empty array.
         */

      }, {
        key: "path",
        get: function get() {
          return [];
        }
      }]);

      return FormGroupDirective;
    }(ControlContainer);

    FormGroupDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formGroup]',
        providers: [formDirectiveProvider$1],
        host: {
          '(submit)': 'onSubmit($event)',
          '(reset)': 'onReset()'
        },
        exportAs: 'ngForm'
      }]
    }];

    FormGroupDirective.ctorParameters = function () {
      return [{
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    FormGroupDirective.propDecorators = {
      form: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formGroup']
      }],
      ngSubmit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var formGroupNameProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return FormGroupName;
      })
    };
    /**
     * @description
     *
     * Syncs a nested `FormGroup` to a DOM element.
     *
     * This directive can only be used with a parent `FormGroupDirective`.
     *
     * It accepts the string name of the nested `FormGroup` to link, and
     * looks for a `FormGroup` registered with that name in the parent
     * `FormGroup` instance you passed into `FormGroupDirective`.
     *
     * Use nested form groups to validate a sub-group of a
     * form separately from the rest or to group the values of certain
     * controls into their own nested object.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     *
     * @usageNotes
     *
     * ### Access the group by name
     *
     * The following example uses the {@link AbstractControl#get get} method to access the
     * associated `FormGroup`
     *
     * ```ts
     *   this.form.get('name');
     * ```
     *
     * ### Access individual controls in the group
     *
     * The following example uses the {@link AbstractControl#get get} method to access
     * individual controls within the group using dot syntax.
     *
     * ```ts
     *   this.form.get('name.first');
     * ```
     *
     * ### Register a nested `FormGroup`.
     *
     * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
     * and provides methods to retrieve the nested `FormGroup` and individual controls.
     *
     * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
     *
     * @ngModule ReactiveFormsModule
     * @publicApi
     */

    var FormGroupName = /*#__PURE__*/function (_AbstractFormGroupDir2) {
      _inherits(FormGroupName, _AbstractFormGroupDir2);

      var _super14 = _createSuper(FormGroupName);

      function FormGroupName(parent, validators, asyncValidators) {
        var _this36;

        _classCallCheck(this, FormGroupName);

        _this36 = _super14.call(this);
        _this36._parent = parent;
        _this36._validators = validators;
        _this36._asyncValidators = asyncValidators;
        return _this36;
      }
      /** @internal */


      _createClass(FormGroupName, [{
        key: "_checkParentType",
        value: function _checkParentType() {
          if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.groupParentException();
          }
        }
      }]);

      return FormGroupName;
    }(AbstractFormGroupDirective);

    FormGroupName.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formGroupName]',
        providers: [formGroupNameProvider]
      }]
    }];

    FormGroupName.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    FormGroupName.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formGroupName']
      }]
    };
    var formArrayNameProvider = {
      provide: ControlContainer,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return FormArrayName;
      })
    };
    /**
     * @description
     *
     * Syncs a nested `FormArray` to a DOM element.
     *
     * This directive is designed to be used with a parent `FormGroupDirective` (selector:
     * `[formGroup]`).
     *
     * It accepts the string name of the nested `FormArray` you want to link, and
     * will look for a `FormArray` registered with that name in the parent
     * `FormGroup` instance you passed into `FormGroupDirective`.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `AbstractControl`
     *
     * @usageNotes
     *
     * ### Example
     *
     * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
     *
     * @ngModule ReactiveFormsModule
     * @publicApi
     */

    var FormArrayName = /*#__PURE__*/function (_ControlContainer4) {
      _inherits(FormArrayName, _ControlContainer4);

      var _super15 = _createSuper(FormArrayName);

      function FormArrayName(parent, validators, asyncValidators) {
        var _this37;

        _classCallCheck(this, FormArrayName);

        _this37 = _super15.call(this);
        _this37._parent = parent;
        _this37._validators = validators;
        _this37._asyncValidators = asyncValidators;
        return _this37;
      }
      /**
       * @description
       * A lifecycle method called when the directive's inputs are initialized. For internal use only.
       *
       * @throws If the directive does not have a valid parent.
       */


      _createClass(FormArrayName, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._checkParentType();

          this.formDirective.addFormArray(this);
        }
        /**
         * @description
         * A lifecycle method called before the directive's instance is destroyed. For internal use only.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.formDirective) {
            this.formDirective.removeFormArray(this);
          }
        }
        /**
         * @description
         * The `FormArray` bound to this directive.
         */

      }, {
        key: "_checkParentType",
        value: function _checkParentType() {
          if (_hasInvalidParent(this._parent)) {
            ReactiveErrors.arrayParentException();
          }
        }
      }, {
        key: "control",
        get: function get() {
          return this.formDirective.getFormArray(this);
        }
        /**
         * @description
         * The top-level directive for this group if present, otherwise null.
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ? this._parent.formDirective : null;
        }
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */

      }, {
        key: "path",
        get: function get() {
          return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
        }
        /**
         * @description
         * Synchronous validator function composed of all the synchronous validators registered with this
         * directive.
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._validators);
        }
        /**
         * @description
         * Async validator function composed of all the async validators registered with this directive.
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._asyncValidators);
        }
      }]);

      return FormArrayName;
    }(ControlContainer);

    FormArrayName.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formArrayName]',
        providers: [formArrayNameProvider]
      }]
    }];

    FormArrayName.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }];
    };

    FormArrayName.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formArrayName']
      }]
    };

    function _hasInvalidParent(parent) {
      return !(parent instanceof FormGroupName) && !(parent instanceof FormGroupDirective) && !(parent instanceof FormArrayName);
    }
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */


    var controlNameBinding = {
      provide: NgControl,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return FormControlName;
      })
    };
    /**
     * @description
     * Syncs a `FormControl` in an existing `FormGroup` to a form control
     * element by name.
     *
     * @see [Reactive Forms Guide](guide/reactive-forms)
     * @see `FormControl`
     * @see `AbstractControl`
     *
     * @usageNotes
     *
     * ### Register `FormControl` within a group
     *
     * The following example shows how to register multiple form controls within a form group
     * and set their value.
     *
     * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
     *
     * To see `formControlName` examples with different form control types, see:
     *
     * * Radio buttons: `RadioControlValueAccessor`
     * * Selects: `SelectControlValueAccessor`
     *
     * ### Use with ngModel is deprecated
     *
     * Support for using the `ngModel` input property and `ngModelChange` event with reactive
     * form directives has been deprecated in Angular v6 and is scheduled for removal in
     * a future version of Angular.
     *
     * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
     *
     * @ngModule ReactiveFormsModule
     * @publicApi
     */

    var FormControlName = /*#__PURE__*/function (_NgControl3) {
      _inherits(FormControlName, _NgControl3);

      var _super16 = _createSuper(FormControlName);

      function FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
        var _this38;

        _classCallCheck(this, FormControlName);

        _this38 = _super16.call(this);
        _this38._ngModelWarningConfig = _ngModelWarningConfig;
        _this38._added = false;
        /** @deprecated as of v6 */

        _this38.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * @description
         * Instance property used to track whether an ngModel warning has been sent out for this
         * particular FormControlName instance. Used to support warning config of "always".
         *
         * @internal
         */

        _this38._ngModelWarningSent = false;
        _this38._parent = parent;
        _this38._rawValidators = validators || [];
        _this38._rawAsyncValidators = asyncValidators || [];
        _this38.valueAccessor = selectValueAccessor(_assertThisInitialized(_this38), valueAccessors);
        return _this38;
      }
      /**
       * @description
       * Triggers a warning that this input should not be used with reactive forms.
       */


      _createClass(FormControlName, [{
        key: "ngOnChanges",

        /**
         * @description
         * A lifecycle method called when the directive's inputs change. For internal use only.
         *
         * @param changes A object of key/value pairs for the set of changed inputs.
         */
        value: function ngOnChanges(changes) {
          if (!this._added) this._setUpControl();

          if (isPropertyUpdated(changes, this.viewModel)) {
            _ngModelWarning('formControlName', FormControlName, this, this._ngModelWarningConfig);

            this.viewModel = this.model;
            this.formDirective.updateModel(this, this.model);
          }
        }
        /**
         * @description
         * Lifecycle method called before the directive's instance is destroyed. For internal use only.
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.formDirective) {
            this.formDirective.removeControl(this);
          }
        }
        /**
         * @description
         * Sets the new value for the view model and emits an `ngModelChange` event.
         *
         * @param newValue The new value for the view model.
         */

      }, {
        key: "viewToModelUpdate",
        value: function viewToModelUpdate(newValue) {
          this.viewModel = newValue;
          this.update.emit(newValue);
        }
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */

      }, {
        key: "_checkParentType",
        value: function _checkParentType() {
          if (!(this._parent instanceof FormGroupName) && this._parent instanceof AbstractFormGroupDirective) {
            ReactiveErrors.ngModelGroupException();
          } else if (!(this._parent instanceof FormGroupName) && !(this._parent instanceof FormGroupDirective) && !(this._parent instanceof FormArrayName)) {
            ReactiveErrors.controlParentException();
          }
        }
      }, {
        key: "_setUpControl",
        value: function _setUpControl() {
          this._checkParentType();

          this.control = this.formDirective.addControl(this);

          if (this.control.disabled && this.valueAccessor.setDisabledState) {
            this.valueAccessor.setDisabledState(true);
          }

          this._added = true;
        }
      }, {
        key: "isDisabled",
        set: function set(isDisabled) {
          ReactiveErrors.disabledAttrWarning();
        }
      }, {
        key: "path",
        get: function get() {
          return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
        }
        /**
         * @description
         * The top-level directive for this group if present, otherwise null.
         */

      }, {
        key: "formDirective",
        get: function get() {
          return this._parent ? this._parent.formDirective : null;
        }
        /**
         * @description
         * Synchronous validator function composed of all the synchronous validators
         * registered with this directive.
         */

      }, {
        key: "validator",
        get: function get() {
          return composeValidators(this._rawValidators);
        }
        /**
         * @description
         * Async validator function composed of all the async validators registered with this
         * directive.
         */

      }, {
        key: "asyncValidator",
        get: function get() {
          return composeAsyncValidators(this._rawAsyncValidators);
        }
      }]);

      return FormControlName;
    }(NgControl);
    /**
     * @description
     * Static property used to track whether any ngModel warnings have been sent across
     * all instances of FormControlName. Used to support warning config of "once".
     *
     * @internal
     */


    FormControlName._ngModelWarningSentOnce = false;
    FormControlName.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[formControlName]',
        providers: [controlNameBinding]
      }]
    }];

    FormControlName.ctorParameters = function () {
      return [{
        type: ControlContainer,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_ASYNC_VALIDATORS]
        }]
      }, {
        type: Array,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_VALUE_ACCESSOR]
        }]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
        }]
      }];
    };

    FormControlName.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['formControlName']
      }],
      isDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['disabled']
      }],
      model: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngModel']
      }],
      update: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['ngModelChange']
      }]
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @description
     * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
     */

    var REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return RequiredValidator;
      }),
      multi: true
    };
    /**
     * @description
     * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
     */

    var CHECKBOX_REQUIRED_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return CheckboxRequiredValidator;
      }),
      multi: true
    };
    /**
     * @description
     * A directive that adds the `required` validator to any controls marked with the
     * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * @usageNotes
     *
     * ### Adding a required validator using template-driven forms
     *
     * ```
     * <input name="fullName" ngModel required>
     * ```
     *
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     * @publicApi
     */

    var RequiredValidator = /*#__PURE__*/function () {
      function RequiredValidator() {
        _classCallCheck(this, RequiredValidator);
      }

      _createClass(RequiredValidator, [{
        key: "validate",

        /**
         * @description
         * Method that validates whether the control is empty.
         * Returns the validation result if enabled, otherwise null.
         */
        value: function validate(control) {
          return this.required ? Validators.required(control) : null;
        }
        /**
         * @description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "required",

        /**
         * @description
         * Tracks changes to the required attribute bound to this directive.
         */
        get: function get() {
          return this._required;
        },
        set: function set(value) {
          this._required = value != null && value !== false && "".concat(value) !== 'false';
          if (this._onChange) this._onChange();
        }
      }]);

      return RequiredValidator;
    }();

    RequiredValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
        providers: [REQUIRED_VALIDATOR],
        host: {
          '[attr.required]': 'required ? "" : null'
        }
      }]
    }];
    RequiredValidator.propDecorators = {
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * A Directive that adds the `required` validator to checkbox controls marked with the
     * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * @usageNotes
     *
     * ### Adding a required checkbox validator using template-driven forms
     *
     * The following example shows how to add a checkbox required validator to an input attached to an
     * ngModel binding.
     *
     * ```
     * <input type="checkbox" name="active" ngModel required>
     * ```
     *
     * @publicApi
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */

    var CheckboxRequiredValidator = /*#__PURE__*/function (_RequiredValidator) {
      _inherits(CheckboxRequiredValidator, _RequiredValidator);

      var _super17 = _createSuper(CheckboxRequiredValidator);

      function CheckboxRequiredValidator() {
        _classCallCheck(this, CheckboxRequiredValidator);

        return _super17.apply(this, arguments);
      }

      _createClass(CheckboxRequiredValidator, [{
        key: "validate",

        /**
         * @description
         * Method that validates whether or not the checkbox has been checked.
         * Returns the validation result if enabled, otherwise null.
         */
        value: function validate(control) {
          return this.required ? Validators.requiredTrue(control) : null;
        }
      }]);

      return CheckboxRequiredValidator;
    }(RequiredValidator);

    CheckboxRequiredValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
        providers: [CHECKBOX_REQUIRED_VALIDATOR],
        host: {
          '[attr.required]': 'required ? "" : null'
        }
      }]
    }];
    /**
     * @description
     * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
     */

    var EMAIL_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return EmailValidator;
      }),
      multi: true
    };
    /**
     * A directive that adds the `email` validator to controls marked with the
     * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * @usageNotes
     *
     * ### Adding an email validator
     *
     * The following example shows how to add an email validator to an input attached to an ngModel
     * binding.
     *
     * ```
     * <input type="email" name="email" ngModel email>
     * <input type="email" name="email" ngModel email="true">
     * <input type="email" name="email" ngModel [email]="true">
     * ```
     *
     * @publicApi
     * @ngModule FormsModule
     * @ngModule ReactiveFormsModule
     */

    var EmailValidator = /*#__PURE__*/function () {
      function EmailValidator() {
        _classCallCheck(this, EmailValidator);
      }

      _createClass(EmailValidator, [{
        key: "validate",

        /**
         * @description
         * Method that validates whether an email address is valid.
         * Returns the validation result if enabled, otherwise null.
         */
        value: function validate(control) {
          return this._enabled ? Validators.email(control) : null;
        }
        /**
         * @description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "email",

        /**
         * @description
         * Tracks changes to the email attribute bound to this directive.
         */
        set: function set(value) {
          this._enabled = value === '' || value === true || value === 'true';
          if (this._onChange) this._onChange();
        }
      }]);

      return EmailValidator;
    }();

    EmailValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[email][formControlName],[email][formControl],[email][ngModel]',
        providers: [EMAIL_VALIDATOR]
      }]
    }];
    EmailValidator.propDecorators = {
      email: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @description
     * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
     */

    var MIN_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return MinLengthValidator;
      }),
      multi: true
    };
    /**
     * A directive that adds minimum length validation to controls marked with the
     * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * @usageNotes
     *
     * ### Adding a minimum length validator
     *
     * The following example shows how to add a minimum length validator to an input attached to an
     * ngModel binding.
     *
     * ```html
     * <input name="firstName" ngModel minlength="4">
     * ```
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var MinLengthValidator = /*#__PURE__*/function () {
      function MinLengthValidator() {
        _classCallCheck(this, MinLengthValidator);
      }

      _createClass(MinLengthValidator, [{
        key: "ngOnChanges",

        /**
         * @description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param changes A object of key/value pairs for the set of changed inputs.
         */
        value: function ngOnChanges(changes) {
          if ('minlength' in changes) {
            this._createValidator();

            if (this._onChange) this._onChange();
          }
        }
        /**
         * @description
         * Method that validates whether the value meets a minimum length
         * requirement. Returns the validation result if enabled, otherwise null.
         */

      }, {
        key: "validate",
        value: function validate(control) {
          return this.minlength == null ? null : this._validator(control);
        }
        /**
         * @description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "_createValidator",
        value: function _createValidator() {
          this._validator = Validators.minLength(typeof this.minlength === 'number' ? this.minlength : parseInt(this.minlength, 10));
        }
      }]);

      return MinLengthValidator;
    }();

    MinLengthValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
        providers: [MIN_LENGTH_VALIDATOR],
        host: {
          '[attr.minlength]': 'minlength ? minlength : null'
        }
      }]
    }];
    MinLengthValidator.propDecorators = {
      minlength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @description
     * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
     */

    var MAX_LENGTH_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return MaxLengthValidator;
      }),
      multi: true
    };
    /**
     * A directive that adds max length validation to controls marked with the
     * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * @usageNotes
     *
     * ### Adding a maximum length validator
     *
     * The following example shows how to add a maximum length validator to an input attached to an
     * ngModel binding.
     *
     * ```html
     * <input name="firstName" ngModel maxlength="25">
     * ```
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var MaxLengthValidator = /*#__PURE__*/function () {
      function MaxLengthValidator() {
        _classCallCheck(this, MaxLengthValidator);
      }

      _createClass(MaxLengthValidator, [{
        key: "ngOnChanges",

        /**
         * @description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param changes A object of key/value pairs for the set of changed inputs.
         */
        value: function ngOnChanges(changes) {
          if ('maxlength' in changes) {
            this._createValidator();

            if (this._onChange) this._onChange();
          }
        }
        /**
         * @description
         * Method that validates whether the value exceeds
         * the maximum length requirement.
         */

      }, {
        key: "validate",
        value: function validate(control) {
          return this.maxlength != null ? this._validator(control) : null;
        }
        /**
         * @description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "_createValidator",
        value: function _createValidator() {
          this._validator = Validators.maxLength(typeof this.maxlength === 'number' ? this.maxlength : parseInt(this.maxlength, 10));
        }
      }]);

      return MaxLengthValidator;
    }();

    MaxLengthValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
        providers: [MAX_LENGTH_VALIDATOR],
        host: {
          '[attr.maxlength]': 'maxlength ? maxlength : null'
        }
      }]
    }];
    MaxLengthValidator.propDecorators = {
      maxlength: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @description
     * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
     */

    var PATTERN_VALIDATOR = {
      provide: NG_VALIDATORS,
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
        return PatternValidator;
      }),
      multi: true
    };
    /**
     * @description
     * A directive that adds regex pattern validation to controls marked with the
     * `pattern` attribute. The regex must match the entire control value.
     * The directive is provided with the `NG_VALIDATORS` multi-provider list.
     *
     * @see [Form Validation](guide/form-validation)
     *
     * @usageNotes
     *
     * ### Adding a pattern validator
     *
     * The following example shows how to add a pattern validator to an input attached to an
     * ngModel binding.
     *
     * ```html
     * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
     * ```
     *
     * @ngModule ReactiveFormsModule
     * @ngModule FormsModule
     * @publicApi
     */

    var PatternValidator = /*#__PURE__*/function () {
      function PatternValidator() {
        _classCallCheck(this, PatternValidator);
      }

      _createClass(PatternValidator, [{
        key: "ngOnChanges",

        /**
         * @description
         * A lifecycle method called when the directive's inputs change. For internal use
         * only.
         *
         * @param changes A object of key/value pairs for the set of changed inputs.
         */
        value: function ngOnChanges(changes) {
          if ('pattern' in changes) {
            this._createValidator();

            if (this._onChange) this._onChange();
          }
        }
        /**
         * @description
         * Method that validates whether the value matches the
         * the pattern requirement.
         */

      }, {
        key: "validate",
        value: function validate(control) {
          return this._validator(control);
        }
        /**
         * @description
         * Registers a callback function to call when the validator inputs change.
         *
         * @param fn The callback function
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._onChange = fn;
        }
      }, {
        key: "_createValidator",
        value: function _createValidator() {
          this._validator = Validators.pattern(this.pattern);
        }
      }]);

      return PatternValidator;
    }();

    PatternValidator.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
        providers: [PATTERN_VALIDATOR],
        host: {
          '[attr.pattern]': 'pattern ? pattern : null'
        }
      }]
    }];
    PatternValidator.propDecorators = {
      pattern: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    var SHARED_FORM_DIRECTIVES = [ɵNgNoValidate, NgSelectOption, ɵNgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, RangeValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, SelectMultipleControlValueAccessor, RadioControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, MaxLengthValidator, PatternValidator, CheckboxRequiredValidator, EmailValidator];
    var TEMPLATE_DRIVEN_DIRECTIVES = [NgModel, NgModelGroup, NgForm];
    var REACTIVE_DRIVEN_DIRECTIVES = [FormControlDirective, FormGroupDirective, FormControlName, FormGroupName, FormArrayName];
    /**
     * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
     */

    var ɵInternalFormsSharedModule = function ɵInternalFormsSharedModule() {
      _classCallCheck(this, ɵInternalFormsSharedModule);
    };

    ɵInternalFormsSharedModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: SHARED_FORM_DIRECTIVES,
        exports: SHARED_FORM_DIRECTIVES
      }]
    }];
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    function isAbstractControlOptions(options) {
      return options.asyncValidators !== undefined || options.validators !== undefined || options.updateOn !== undefined;
    }
    /**
     * @description
     * Creates an `AbstractControl` from a user-specified configuration.
     *
     * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
     * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
     * forms.
     *
     * @see [Reactive Forms Guide](/guide/reactive-forms)
     *
     * @publicApi
     */


    var FormBuilder = /*#__PURE__*/function () {
      function FormBuilder() {
        _classCallCheck(this, FormBuilder);
      }

      _createClass(FormBuilder, [{
        key: "group",

        /**
         * @description
         * Construct a new `FormGroup` instance.
         *
         * @param controlsConfig A collection of child controls. The key for each child is the name
         * under which it is registered.
         *
         * @param options Configuration options object for the `FormGroup`. The object can
         * have two shapes:
         *
         * 1) `AbstractControlOptions` object (preferred), which consists of:
         * * `validators`: A synchronous validator function, or an array of validator functions
         * * `asyncValidators`: A single async validator or array of async validator functions
         * * `updateOn`: The event upon which the control should be updated (options: 'change' | 'blur' |
         * submit')
         *
         * 2) Legacy configuration object, which consists of:
         * * `validator`: A synchronous validator function, or an array of validator functions
         * * `asyncValidator`: A single async validator or array of async validator functions
         *
         */
        value: function group(controlsConfig) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

          var controls = this._reduceControls(controlsConfig);

          var validators = null;
          var asyncValidators = null;
          var updateOn = undefined;

          if (options != null) {
            if (isAbstractControlOptions(options)) {
              // `options` are `AbstractControlOptions`
              validators = options.validators != null ? options.validators : null;
              asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
              updateOn = options.updateOn != null ? options.updateOn : undefined;
            } else {
              // `options` are legacy form group options
              validators = options['validator'] != null ? options['validator'] : null;
              asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
            }
          }

          return new FormGroup(controls, {
            asyncValidators: asyncValidators,
            updateOn: updateOn,
            validators: validators
          });
        }
        /**
         * @description
         * Construct a new `FormControl` with the given state, validators and options.
         *
         * @param formState Initializes the control with an initial state value, or
         * with an object that contains both a value and a disabled status.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains
         * validation functions and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator
         * functions.
         *
         * @usageNotes
         *
         * ### Initialize a control as disabled
         *
         * The following example returns a control with an initial value in a disabled state.
         *
         * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
         * </code-example>
         */

      }, {
        key: "control",
        value: function control(formState, validatorOrOpts, asyncValidator) {
          return new FormControl(formState, validatorOrOpts, asyncValidator);
        }
        /**
         * Constructs a new `FormArray` from the given array of configurations,
         * validators and options.
         *
         * @param controlsConfig An array of child controls or control configs. Each
         * child control is given an index when it is registered.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains
         * validation functions and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator
         * functions.
         */

      }, {
        key: "array",
        value: function array(controlsConfig, validatorOrOpts, asyncValidator) {
          var _this39 = this;

          var controls = controlsConfig.map(function (c) {
            return _this39._createControl(c);
          });
          return new FormArray(controls, validatorOrOpts, asyncValidator);
        }
        /** @internal */

      }, {
        key: "_reduceControls",
        value: function _reduceControls(controlsConfig) {
          var _this40 = this;

          var controls = {};
          Object.keys(controlsConfig).forEach(function (controlName) {
            controls[controlName] = _this40._createControl(controlsConfig[controlName]);
          });
          return controls;
        }
        /** @internal */

      }, {
        key: "_createControl",
        value: function _createControl(controlConfig) {
          if (controlConfig instanceof FormControl || controlConfig instanceof FormGroup || controlConfig instanceof FormArray) {
            return controlConfig;
          } else if (Array.isArray(controlConfig)) {
            var value = controlConfig[0];
            var validator = controlConfig.length > 1 ? controlConfig[1] : null;
            var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
            return this.control(value, validator, asyncValidator);
          } else {
            return this.control(controlConfig);
          }
        }
      }]);

      return FormBuilder;
    }();

    FormBuilder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @publicApi
     */

    var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('10.0.1');
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Exports the required providers and directives for template-driven forms,
     * making them available for import by NgModules that import this module.
     *
     * @see [Forms Overview](/guide/forms-overview)
     * @see [Template-driven Forms Guide](/guide/forms)
     *
     * @publicApi
     */

    var FormsModule = function FormsModule() {
      _classCallCheck(this, FormsModule);
    };

    FormsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: TEMPLATE_DRIVEN_DIRECTIVES,
        providers: [RadioControlRegistry],
        exports: [ɵInternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
      }]
    }];
    /**
     * Exports the required infrastructure and directives for reactive forms,
     * making them available for import by NgModules that import this module.
     *
     * @see [Forms Overview](guide/forms-overview)
     * @see [Reactive Forms Guide](guide/reactive-forms)
     *
     * @publicApi
     */

    var ReactiveFormsModule = /*#__PURE__*/function () {
      function ReactiveFormsModule() {
        _classCallCheck(this, ReactiveFormsModule);
      }

      _createClass(ReactiveFormsModule, null, [{
        key: "withConfig",

        /**
         * @description
         * Provides options for configuring the reactive forms module.
         *
         * @param opts An object of configuration options
         * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
         * binding is used with reactive form directives.
         */
        value: function withConfig(opts) {
          return {
            ngModule: ReactiveFormsModule,
            providers: [{
              provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
              useValue: opts.warnOnNgModelWithFormControl
            }]
          };
        }
      }]);

      return ReactiveFormsModule;
    }();

    ReactiveFormsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [REACTIVE_DRIVEN_DIRECTIVES],
        providers: [FormBuilder, RadioControlRegistry],
        exports: [ɵInternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
      }]
    }];
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // This file only reexports content of the `src` folder. Keep it that way.

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=forms.js.map

    /***/
  },

  /***/
  "./node_modules/dexie/dist/dexie.mjs":
  /*!*******************************************!*\
    !*** ./node_modules/dexie/dist/dexie.mjs ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function node_modulesDexieDistDexieMjs(__webpack_module__, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /*
     * Dexie.js - a minimalistic wrapper for IndexedDB
     * ===============================================
     *
     * By David Fahlander, david.fahlander@gmail.com
     *
     * Version 3.0.1, Thu May 07 2020
     *
     * http://dexie.org
     *
     * Apache License Version 2.0, January 2004, http://www.apache.org/licenses/
     */


    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    var keys = Object.keys;
    var isArray = Array.isArray;

    var _global = typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : global;

    if (typeof Promise !== 'undefined' && !_global.Promise) {
      _global.Promise = Promise;
    }

    function extend(obj, extension) {
      if (typeof extension !== 'object') return obj;
      keys(extension).forEach(function (key) {
        obj[key] = extension[key];
      });
      return obj;
    }

    var getProto = Object.getPrototypeOf;
    var _hasOwn = {}.hasOwnProperty;

    function hasOwn(obj, prop) {
      return _hasOwn.call(obj, prop);
    }

    function props(proto, extension) {
      if (typeof extension === 'function') extension = extension(getProto(proto));
      keys(extension).forEach(function (key) {
        setProp(proto, key, extension[key]);
      });
    }

    var defineProperty = Object.defineProperty;

    function setProp(obj, prop, functionOrGetSet, options) {
      defineProperty(obj, prop, extend(functionOrGetSet && hasOwn(functionOrGetSet, "get") && typeof functionOrGetSet.get === 'function' ? {
        get: functionOrGetSet.get,
        set: functionOrGetSet.set,
        configurable: true
      } : {
        value: functionOrGetSet,
        configurable: true,
        writable: true
      }, options));
    }

    function derive(Child) {
      return {
        from: function from(Parent) {
          Child.prototype = Object.create(Parent.prototype);
          setProp(Child.prototype, "constructor", Child);
          return {
            extend: props.bind(null, Child.prototype)
          };
        }
      };
    }

    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

    function getPropertyDescriptor(obj, prop) {
      var pd = getOwnPropertyDescriptor(obj, prop);
      var proto;
      return pd || (proto = getProto(obj)) && getPropertyDescriptor(proto, prop);
    }

    var _slice = [].slice;

    function slice(args, start, end) {
      return _slice.call(args, start, end);
    }

    function override(origFunc, overridedFactory) {
      return overridedFactory(origFunc);
    }

    function assert(b) {
      if (!b) throw new Error("Assertion Failed");
    }

    function asap(fn) {
      if (_global.setImmediate) setImmediate(fn);else setTimeout(fn, 0);
    }

    function arrayToObject(array, extractor) {
      return array.reduce(function (result, item, i) {
        var nameAndValue = extractor(item, i);
        if (nameAndValue) result[nameAndValue[0]] = nameAndValue[1];
        return result;
      }, {});
    }

    function tryCatch(fn, onerror, args) {
      try {
        fn.apply(null, args);
      } catch (ex) {
        onerror && onerror(ex);
      }
    }

    function getByKeyPath(obj, keyPath) {
      if (hasOwn(obj, keyPath)) return obj[keyPath];
      if (!keyPath) return obj;

      if (typeof keyPath !== 'string') {
        var rv = [];

        for (var i = 0, l = keyPath.length; i < l; ++i) {
          var val = getByKeyPath(obj, keyPath[i]);
          rv.push(val);
        }

        return rv;
      }

      var period = keyPath.indexOf('.');

      if (period !== -1) {
        var innerObj = obj[keyPath.substr(0, period)];
        return innerObj === undefined ? undefined : getByKeyPath(innerObj, keyPath.substr(period + 1));
      }

      return undefined;
    }

    function setByKeyPath(obj, keyPath, value) {
      if (!obj || keyPath === undefined) return;
      if ('isFrozen' in Object && Object.isFrozen(obj)) return;

      if (typeof keyPath !== 'string' && 'length' in keyPath) {
        assert(typeof value !== 'string' && 'length' in value);

        for (var i = 0, l = keyPath.length; i < l; ++i) {
          setByKeyPath(obj, keyPath[i], value[i]);
        }
      } else {
        var period = keyPath.indexOf('.');

        if (period !== -1) {
          var currentKeyPath = keyPath.substr(0, period);
          var remainingKeyPath = keyPath.substr(period + 1);
          if (remainingKeyPath === "") {
            if (value === undefined) {
              if (isArray(obj) && !isNaN(parseInt(currentKeyPath))) obj.splice(currentKeyPath, 1);else delete obj[currentKeyPath];
            } else obj[currentKeyPath] = value;
          } else {
            var innerObj = obj[currentKeyPath];
            if (!innerObj) innerObj = obj[currentKeyPath] = {};
            setByKeyPath(innerObj, remainingKeyPath, value);
          }
        } else {
          if (value === undefined) {
            if (isArray(obj) && !isNaN(parseInt(keyPath))) obj.splice(keyPath, 1);else delete obj[keyPath];
          } else obj[keyPath] = value;
        }
      }
    }

    function delByKeyPath(obj, keyPath) {
      if (typeof keyPath === 'string') setByKeyPath(obj, keyPath, undefined);else if ('length' in keyPath) [].map.call(keyPath, function (kp) {
        setByKeyPath(obj, kp, undefined);
      });
    }

    function shallowClone(obj) {
      var rv = {};

      for (var m in obj) {
        if (hasOwn(obj, m)) rv[m] = obj[m];
      }

      return rv;
    }

    var concat = [].concat;

    function flatten(a) {
      return concat.apply([], a);
    }

    var intrinsicTypeNames = "Boolean,String,Date,RegExp,Blob,File,FileList,ArrayBuffer,DataView,Uint8ClampedArray,ImageData,Map,Set".split(',').concat(flatten([8, 16, 32, 64].map(function (num) {
      return ["Int", "Uint", "Float"].map(function (t) {
        return t + num + "Array";
      });
    }))).filter(function (t) {
      return _global[t];
    });
    var intrinsicTypes = intrinsicTypeNames.map(function (t) {
      return _global[t];
    });
    var intrinsicTypeNameSet = arrayToObject(intrinsicTypeNames, function (x) {
      return [x, true];
    });

    function deepClone(any) {
      if (!any || typeof any !== 'object') return any;
      var rv;

      if (isArray(any)) {
        rv = [];

        for (var i = 0, l = any.length; i < l; ++i) {
          rv.push(deepClone(any[i]));
        }
      } else if (intrinsicTypes.indexOf(any.constructor) >= 0) {
        rv = any;
      } else {
        rv = any.constructor ? Object.create(any.constructor.prototype) : {};

        for (var prop in any) {
          if (hasOwn(any, prop)) {
            rv[prop] = deepClone(any[prop]);
          }
        }
      }

      return rv;
    }

    var toString = {}.toString;

    function toStringTag(o) {
      return toString.call(o).slice(8, -1);
    }

    var getValueOf = function getValueOf(val, type) {
      return type === "Array" ? '' + val.map(function (v) {
        return getValueOf(v, toStringTag(v));
      }) : type === "ArrayBuffer" ? '' + new Uint8Array(val) : type === "Date" ? val.getTime() : ArrayBuffer.isView(val) ? '' + new Uint8Array(val.buffer) : val;
    };

    function getObjectDiff(a, b, rv, prfx) {
      rv = rv || {};
      prfx = prfx || '';
      keys(a).forEach(function (prop) {
        if (!hasOwn(b, prop)) rv[prfx + prop] = undefined;else {
          var ap = a[prop],
              bp = b[prop];

          if (typeof ap === 'object' && typeof bp === 'object' && ap && bp) {
            var apTypeName = toStringTag(ap);
            var bpTypeName = toStringTag(bp);

            if (apTypeName === bpTypeName) {
              if (intrinsicTypeNameSet[apTypeName]) {
                if (getValueOf(ap, apTypeName) !== getValueOf(bp, bpTypeName)) {
                  rv[prfx + prop] = b[prop];
                }
              } else {
                getObjectDiff(ap, bp, rv, prfx + prop + ".");
              }
            } else {
              rv[prfx + prop] = b[prop];
            }
          } else if (ap !== bp) rv[prfx + prop] = b[prop];
        }
      });
      keys(b).forEach(function (prop) {
        if (!hasOwn(a, prop)) {
          rv[prfx + prop] = b[prop];
        }
      });
      return rv;
    }

    var iteratorSymbol = typeof Symbol !== 'undefined' && Symbol.iterator;
    var getIteratorOf = iteratorSymbol ? function (x) {
      var i;
      return x != null && (i = x[iteratorSymbol]) && i.apply(x);
    } : function () {
      return null;
    };
    var NO_CHAR_ARRAY = {};

    function getArrayOf(arrayLike) {
      var i, a, x, it;

      if (arguments.length === 1) {
        if (isArray(arrayLike)) return arrayLike.slice();
        if (this === NO_CHAR_ARRAY && typeof arrayLike === 'string') return [arrayLike];

        if (it = getIteratorOf(arrayLike)) {
          a = [];

          while (x = it.next(), !x.done) {
            a.push(x.value);
          }

          return a;
        }

        if (arrayLike == null) return [arrayLike];
        i = arrayLike.length;

        if (typeof i === 'number') {
          a = new Array(i);

          while (i--) {
            a[i] = arrayLike[i];
          }

          return a;
        }

        return [arrayLike];
      }

      i = arguments.length;
      a = new Array(i);

      while (i--) {
        a[i] = arguments[i];
      }

      return a;
    }

    var isAsyncFunction = typeof Symbol !== 'undefined' ? function (fn) {
      return fn[Symbol.toStringTag] === 'AsyncFunction';
    } : function () {
      return false;
    };
    var debug = typeof location !== 'undefined' && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);

    function setDebug(value, filter) {
      debug = value;
      libraryFilter = filter;
    }

    var libraryFilter = function libraryFilter() {
      return true;
    };

    var NEEDS_THROW_FOR_STACK = !new Error("").stack;

    function getErrorWithStack() {
      if (NEEDS_THROW_FOR_STACK) try {
        throw new Error();
      } catch (e) {
        return e;
      }
      return new Error();
    }

    function prettyStack(exception, numIgnoredFrames) {
      var stack = exception.stack;
      if (!stack) return "";
      numIgnoredFrames = numIgnoredFrames || 0;
      if (stack.indexOf(exception.name) === 0) numIgnoredFrames += (exception.name + exception.message).split('\n').length;
      return stack.split('\n').slice(numIgnoredFrames).filter(libraryFilter).map(function (frame) {
        return "\n" + frame;
      }).join('');
    }

    var dexieErrorNames = ['Modify', 'Bulk', 'OpenFailed', 'VersionChange', 'Schema', 'Upgrade', 'InvalidTable', 'MissingAPI', 'NoSuchDatabase', 'InvalidArgument', 'SubTransaction', 'Unsupported', 'Internal', 'DatabaseClosed', 'PrematureCommit', 'ForeignAwait'];
    var idbDomErrorNames = ['Unknown', 'Constraint', 'Data', 'TransactionInactive', 'ReadOnly', 'Version', 'NotFound', 'InvalidState', 'InvalidAccess', 'Abort', 'Timeout', 'QuotaExceeded', 'Syntax', 'DataClone'];
    var errorList = dexieErrorNames.concat(idbDomErrorNames);
    var defaultTexts = {
      VersionChanged: "Database version changed by other database connection",
      DatabaseClosed: "Database has been closed",
      Abort: "Transaction aborted",
      TransactionInactive: "Transaction has already completed or failed"
    };

    function DexieError(name, msg) {
      this._e = getErrorWithStack();
      this.name = name;
      this.message = msg;
    }

    derive(DexieError).from(Error).extend({
      stack: {
        get: function get() {
          return this._stack || (this._stack = this.name + ": " + this.message + prettyStack(this._e, 2));
        }
      },
      toString: function toString() {
        return this.name + ": " + this.message;
      }
    });

    function getMultiErrorMessage(msg, failures) {
      return msg + ". Errors: " + Object.keys(failures).map(function (key) {
        return failures[key].toString();
      }).filter(function (v, i, s) {
        return s.indexOf(v) === i;
      }).join('\n');
    }

    function ModifyError(msg, failures, successCount, failedKeys) {
      this._e = getErrorWithStack();
      this.failures = failures;
      this.failedKeys = failedKeys;
      this.successCount = successCount;
      this.message = getMultiErrorMessage(msg, failures);
    }

    derive(ModifyError).from(DexieError);

    function BulkError(msg, failures) {
      this._e = getErrorWithStack();
      this.name = "BulkError";
      this.failures = failures;
      this.message = getMultiErrorMessage(msg, failures);
    }

    derive(BulkError).from(DexieError);
    var errnames = errorList.reduce(function (obj, name) {
      return obj[name] = name + "Error", obj;
    }, {});
    var BaseException = DexieError;
    var exceptions = errorList.reduce(function (obj, name) {
      var fullName = name + "Error";

      function DexieError(msgOrInner, inner) {
        this._e = getErrorWithStack();
        this.name = fullName;

        if (!msgOrInner) {
          this.message = defaultTexts[name] || fullName;
          this.inner = null;
        } else if (typeof msgOrInner === 'string') {
          this.message = "" + msgOrInner + (!inner ? '' : '\n ' + inner);
          this.inner = inner || null;
        } else if (typeof msgOrInner === 'object') {
          this.message = msgOrInner.name + " " + msgOrInner.message;
          this.inner = msgOrInner;
        }
      }

      derive(DexieError).from(BaseException);
      obj[name] = DexieError;
      return obj;
    }, {});
    exceptions.Syntax = SyntaxError;
    exceptions.Type = TypeError;
    exceptions.Range = RangeError;
    var exceptionMap = idbDomErrorNames.reduce(function (obj, name) {
      obj[name + "Error"] = exceptions[name];
      return obj;
    }, {});

    function mapError(domError, message) {
      if (!domError || domError instanceof DexieError || domError instanceof TypeError || domError instanceof SyntaxError || !domError.name || !exceptionMap[domError.name]) return domError;
      var rv = new exceptionMap[domError.name](message || domError.message, domError);

      if ("stack" in domError) {
        setProp(rv, "stack", {
          get: function get() {
            return this.inner.stack;
          }
        });
      }

      return rv;
    }

    var fullNameExceptions = errorList.reduce(function (obj, name) {
      if (["Syntax", "Type", "Range"].indexOf(name) === -1) obj[name + "Error"] = exceptions[name];
      return obj;
    }, {});
    fullNameExceptions.ModifyError = ModifyError;
    fullNameExceptions.DexieError = DexieError;
    fullNameExceptions.BulkError = BulkError;

    function nop() {}

    function mirror(val) {
      return val;
    }

    function pureFunctionChain(f1, f2) {
      if (f1 == null || f1 === mirror) return f2;
      return function (val) {
        return f2(f1(val));
      };
    }

    function callBoth(on1, on2) {
      return function () {
        on1.apply(this, arguments);
        on2.apply(this, arguments);
      };
    }

    function hookCreatingChain(f1, f2) {
      if (f1 === nop) return f2;
      return function () {
        var res = f1.apply(this, arguments);
        if (res !== undefined) arguments[0] = res;
        var onsuccess = this.onsuccess,
            onerror = this.onerror;
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res2 !== undefined ? res2 : res;
      };
    }

    function hookDeletingChain(f1, f2) {
      if (f1 === nop) return f2;
      return function () {
        f1.apply(this, arguments);
        var onsuccess = this.onsuccess,
            onerror = this.onerror;
        this.onsuccess = this.onerror = null;
        f2.apply(this, arguments);
        if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
      };
    }

    function hookUpdatingChain(f1, f2) {
      if (f1 === nop) return f2;
      return function (modifications) {
        var res = f1.apply(this, arguments);
        extend(modifications, res);
        var onsuccess = this.onsuccess,
            onerror = this.onerror;
        this.onsuccess = null;
        this.onerror = null;
        var res2 = f2.apply(this, arguments);
        if (onsuccess) this.onsuccess = this.onsuccess ? callBoth(onsuccess, this.onsuccess) : onsuccess;
        if (onerror) this.onerror = this.onerror ? callBoth(onerror, this.onerror) : onerror;
        return res === undefined ? res2 === undefined ? undefined : res2 : extend(res, res2);
      };
    }

    function reverseStoppableEventChain(f1, f2) {
      if (f1 === nop) return f2;
      return function () {
        if (f2.apply(this, arguments) === false) return false;
        return f1.apply(this, arguments);
      };
    }

    function promisableChain(f1, f2) {
      if (f1 === nop) return f2;
      return function () {
        var res = f1.apply(this, arguments);

        if (res && typeof res.then === 'function') {
          var thiz = this,
              i = arguments.length,
              args = new Array(i);

          while (i--) {
            args[i] = arguments[i];
          }

          return res.then(function () {
            return f2.apply(thiz, args);
          });
        }

        return f2.apply(this, arguments);
      };
    }

    var INTERNAL = {};
    var LONG_STACKS_CLIP_LIMIT = 100;
    var MAX_LONG_STACKS = 20;
    var ZONE_ECHO_LIMIT = 100;

    var _a = typeof Promise === 'undefined' ? [] : function () {
      var globalP = Promise.resolve();
      if (typeof crypto === 'undefined' || !crypto.subtle) return [globalP, globalP.__proto__, globalP];
      var nativeP = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
      return [nativeP, nativeP.__proto__, globalP];
    }();

    var resolvedNativePromise = _a[0];
    var nativePromiseProto = _a[1];
    var resolvedGlobalPromise = _a[2];
    var nativePromiseThen = nativePromiseProto && nativePromiseProto.then;
    var NativePromise = resolvedNativePromise && resolvedNativePromise.constructor;
    var patchGlobalPromise = !!resolvedGlobalPromise;
    var stack_being_generated = false;
    var schedulePhysicalTick = resolvedGlobalPromise ? function () {
      resolvedGlobalPromise.then(physicalTick);
    } : _global.setImmediate ? setImmediate.bind(null, physicalTick) : _global.MutationObserver ? function () {
      var hiddenDiv = document.createElement("div");
      new MutationObserver(function () {
        physicalTick();
        hiddenDiv = null;
      }).observe(hiddenDiv, {
        attributes: true
      });
      hiddenDiv.setAttribute('i', '1');
    } : function () {
      setTimeout(physicalTick, 0);
    };

    var asap$1 = function asap$1(callback, args) {
      microtickQueue.push([callback, args]);

      if (needsNewPhysicalTick) {
        schedulePhysicalTick();
        needsNewPhysicalTick = false;
      }
    };

    var isOutsideMicroTick = true;
    var needsNewPhysicalTick = true;
    var unhandledErrors = [];
    var rejectingErrors = [];
    var currentFulfiller = null;
    var rejectionMapper = mirror;
    var globalPSD = {
      id: 'global',
      global: true,
      ref: 0,
      unhandleds: [],
      onunhandled: globalError,
      pgp: false,
      env: {},
      finalize: function finalize() {
        this.unhandleds.forEach(function (uh) {
          try {
            globalError(uh[0], uh[1]);
          } catch (e) {}
        });
      }
    };
    var PSD = globalPSD;
    var microtickQueue = [];
    var numScheduledCalls = 0;
    var tickFinalizers = [];

    function DexiePromise(fn) {
      if (typeof this !== 'object') throw new TypeError('Promises must be constructed via new');
      this._listeners = [];
      this.onuncatched = nop;
      this._lib = false;
      var psd = this._PSD = PSD;

      if (debug) {
        this._stackHolder = getErrorWithStack();
        this._prev = null;
        this._numPrev = 0;
      }

      if (typeof fn !== 'function') {
        if (fn !== INTERNAL) throw new TypeError('Not a function');
        this._state = arguments[1];
        this._value = arguments[2];
        if (this._state === false) handleRejection(this, this._value);
        return;
      }

      this._state = null;
      this._value = null;
      ++psd.ref;
      executePromiseTask(this, fn);
    }

    var thenProp = {
      get: function get() {
        var psd = PSD,
            microTaskId = totalEchoes;

        function then(onFulfilled, onRejected) {
          var _this = this;

          var possibleAwait = !psd.global && (psd !== PSD || microTaskId !== totalEchoes);
          if (possibleAwait) decrementExpectedAwaits();
          var rv = new DexiePromise(function (resolve, reject) {
            propagateToListener(_this, new Listener(nativeAwaitCompatibleWrap(onFulfilled, psd, possibleAwait), nativeAwaitCompatibleWrap(onRejected, psd, possibleAwait), resolve, reject, psd));
          });
          debug && linkToPreviousPromise(rv, this);
          return rv;
        }

        then.prototype = INTERNAL;
        return then;
      },
      set: function set(value) {
        setProp(this, 'then', value && value.prototype === INTERNAL ? thenProp : {
          get: function get() {
            return value;
          },
          set: thenProp.set
        });
      }
    };
    props(DexiePromise.prototype, {
      then: thenProp,
      _then: function _then(onFulfilled, onRejected) {
        propagateToListener(this, new Listener(null, null, onFulfilled, onRejected, PSD));
      },
      "catch": function _catch(onRejected) {
        if (arguments.length === 1) return this.then(null, onRejected);
        var type = arguments[0],
            handler = arguments[1];
        return typeof type === 'function' ? this.then(null, function (err) {
          return err instanceof type ? handler(err) : PromiseReject(err);
        }) : this.then(null, function (err) {
          return err && err.name === type ? handler(err) : PromiseReject(err);
        });
      },
      "finally": function _finally(onFinally) {
        return this.then(function (value) {
          onFinally();
          return value;
        }, function (err) {
          onFinally();
          return PromiseReject(err);
        });
      },
      stack: {
        get: function get() {
          if (this._stack) return this._stack;

          try {
            stack_being_generated = true;
            var stacks = getStack(this, [], MAX_LONG_STACKS);
            var stack = stacks.join("\nFrom previous: ");
            if (this._state !== null) this._stack = stack;
            return stack;
          } finally {
            stack_being_generated = false;
          }
        }
      },
      timeout: function timeout(ms, msg) {
        var _this = this;

        return ms < Infinity ? new DexiePromise(function (resolve, reject) {
          var handle = setTimeout(function () {
            return reject(new exceptions.Timeout(msg));
          }, ms);

          _this.then(resolve, reject)["finally"](clearTimeout.bind(null, handle));
        }) : this;
      }
    });
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) setProp(DexiePromise.prototype, Symbol.toStringTag, 'Dexie.Promise');
    globalPSD.env = snapShot();

    function Listener(onFulfilled, onRejected, resolve, reject, zone) {
      this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
      this.onRejected = typeof onRejected === 'function' ? onRejected : null;
      this.resolve = resolve;
      this.reject = reject;
      this.psd = zone;
    }

    props(DexiePromise, {
      all: function all() {
        var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
        return new DexiePromise(function (resolve, reject) {
          if (values.length === 0) resolve([]);
          var remaining = values.length;
          values.forEach(function (a, i) {
            return DexiePromise.resolve(a).then(function (x) {
              values[i] = x;
              if (! --remaining) resolve(values);
            }, reject);
          });
        });
      },
      resolve: function resolve(value) {
        if (value instanceof DexiePromise) return value;
        if (value && typeof value.then === 'function') return new DexiePromise(function (resolve, reject) {
          value.then(resolve, reject);
        });
        var rv = new DexiePromise(INTERNAL, true, value);
        linkToPreviousPromise(rv, currentFulfiller);
        return rv;
      },
      reject: PromiseReject,
      race: function race() {
        var values = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
        return new DexiePromise(function (resolve, reject) {
          values.map(function (value) {
            return DexiePromise.resolve(value).then(resolve, reject);
          });
        });
      },
      PSD: {
        get: function get() {
          return PSD;
        },
        set: function set(value) {
          return PSD = value;
        }
      },
      newPSD: newScope,
      usePSD: usePSD,
      scheduler: {
        get: function get() {
          return asap$1;
        },
        set: function set(value) {
          asap$1 = value;
        }
      },
      rejectionMapper: {
        get: function get() {
          return rejectionMapper;
        },
        set: function set(value) {
          rejectionMapper = value;
        }
      },
      follow: function follow(fn, zoneProps) {
        return new DexiePromise(function (resolve, reject) {
          return newScope(function (resolve, reject) {
            var psd = PSD;
            psd.unhandleds = [];
            psd.onunhandled = reject;
            psd.finalize = callBoth(function () {
              var _this = this;

              run_at_end_of_this_or_next_physical_tick(function () {
                _this.unhandleds.length === 0 ? resolve() : reject(_this.unhandleds[0]);
              });
            }, psd.finalize);
            fn();
          }, zoneProps, resolve, reject);
        });
      }
    });

    if (NativePromise) {
      if (NativePromise.allSettled) setProp(DexiePromise, "allSettled", function () {
        var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
        return new DexiePromise(function (resolve) {
          if (possiblePromises.length === 0) resolve([]);
          var remaining = possiblePromises.length;
          var results = new Array(remaining);
          possiblePromises.forEach(function (p, i) {
            return DexiePromise.resolve(p).then(function (value) {
              return results[i] = {
                status: "fulfilled",
                value: value
              };
            }, function (reason) {
              return results[i] = {
                status: "rejected",
                reason: reason
              };
            }).then(function () {
              return --remaining || resolve(results);
            });
          });
        });
      });
      if (NativePromise.any && typeof AggregateError !== 'undefined') setProp(DexiePromise, "any", function () {
        var possiblePromises = getArrayOf.apply(null, arguments).map(onPossibleParallellAsync);
        return new DexiePromise(function (resolve, reject) {
          if (possiblePromises.length === 0) reject(new AggregateError([]));
          var remaining = possiblePromises.length;
          var failures = new Array(remaining);
          possiblePromises.forEach(function (p, i) {
            return DexiePromise.resolve(p).then(function (value) {
              return resolve(value);
            }, function (failure) {
              failures[i] = failure;
              if (! --remaining) reject(new AggregateError(failures));
            });
          });
        });
      });
    }

    function executePromiseTask(promise, fn) {
      try {
        fn(function (value) {
          if (promise._state !== null) return;
          if (value === promise) throw new TypeError('A promise cannot be resolved with itself.');
          var shouldExecuteTick = promise._lib && beginMicroTickScope();

          if (value && typeof value.then === 'function') {
            executePromiseTask(promise, function (resolve, reject) {
              value instanceof DexiePromise ? value._then(resolve, reject) : value.then(resolve, reject);
            });
          } else {
            promise._state = true;
            promise._value = value;
            propagateAllListeners(promise);
          }

          if (shouldExecuteTick) endMicroTickScope();
        }, handleRejection.bind(null, promise));
      } catch (ex) {
        handleRejection(promise, ex);
      }
    }

    function handleRejection(promise, reason) {
      rejectingErrors.push(reason);
      if (promise._state !== null) return;
      var shouldExecuteTick = promise._lib && beginMicroTickScope();
      reason = rejectionMapper(reason);
      promise._state = false;
      promise._value = reason;
      debug && reason !== null && typeof reason === 'object' && !reason._promise && tryCatch(function () {
        var origProp = getPropertyDescriptor(reason, "stack");
        reason._promise = promise;
        setProp(reason, "stack", {
          get: function get() {
            return stack_being_generated ? origProp && (origProp.get ? origProp.get.apply(reason) : origProp.value) : promise.stack;
          }
        });
      });
      addPossiblyUnhandledError(promise);
      propagateAllListeners(promise);
      if (shouldExecuteTick) endMicroTickScope();
    }

    function propagateAllListeners(promise) {
      var listeners = promise._listeners;
      promise._listeners = [];

      for (var i = 0, len = listeners.length; i < len; ++i) {
        propagateToListener(promise, listeners[i]);
      }

      var psd = promise._PSD;
      --psd.ref || psd.finalize();

      if (numScheduledCalls === 0) {
        ++numScheduledCalls;
        asap$1(function () {
          if (--numScheduledCalls === 0) finalizePhysicalTick();
        }, []);
      }
    }

    function propagateToListener(promise, listener) {
      if (promise._state === null) {
        promise._listeners.push(listener);

        return;
      }

      var cb = promise._state ? listener.onFulfilled : listener.onRejected;

      if (cb === null) {
        return (promise._state ? listener.resolve : listener.reject)(promise._value);
      }

      ++listener.psd.ref;
      ++numScheduledCalls;
      asap$1(callListener, [cb, promise, listener]);
    }

    function callListener(cb, promise, listener) {
      try {
        currentFulfiller = promise;
        var ret,
            value = promise._value;

        if (promise._state) {
          ret = cb(value);
        } else {
          if (rejectingErrors.length) rejectingErrors = [];
          ret = cb(value);
          if (rejectingErrors.indexOf(value) === -1) markErrorAsHandled(promise);
        }

        listener.resolve(ret);
      } catch (e) {
        listener.reject(e);
      } finally {
        currentFulfiller = null;
        if (--numScheduledCalls === 0) finalizePhysicalTick();
        --listener.psd.ref || listener.psd.finalize();
      }
    }

    function getStack(promise, stacks, limit) {
      if (stacks.length === limit) return stacks;
      var stack = "";

      if (promise._state === false) {
        var failure = promise._value,
            errorName,
            message;

        if (failure != null) {
          errorName = failure.name || "Error";
          message = failure.message || failure;
          stack = prettyStack(failure, 0);
        } else {
          errorName = failure;
          message = "";
        }

        stacks.push(errorName + (message ? ": " + message : "") + stack);
      }

      if (debug) {
        stack = prettyStack(promise._stackHolder, 2);
        if (stack && stacks.indexOf(stack) === -1) stacks.push(stack);
        if (promise._prev) getStack(promise._prev, stacks, limit);
      }

      return stacks;
    }

    function linkToPreviousPromise(promise, prev) {
      var numPrev = prev ? prev._numPrev + 1 : 0;

      if (numPrev < LONG_STACKS_CLIP_LIMIT) {
        promise._prev = prev;
        promise._numPrev = numPrev;
      }
    }

    function physicalTick() {
      beginMicroTickScope() && endMicroTickScope();
    }

    function beginMicroTickScope() {
      var wasRootExec = isOutsideMicroTick;
      isOutsideMicroTick = false;
      needsNewPhysicalTick = false;
      return wasRootExec;
    }

    function endMicroTickScope() {
      var callbacks, i, l;

      do {
        while (microtickQueue.length > 0) {
          callbacks = microtickQueue;
          microtickQueue = [];
          l = callbacks.length;

          for (i = 0; i < l; ++i) {
            var item = callbacks[i];
            item[0].apply(null, item[1]);
          }
        }
      } while (microtickQueue.length > 0);

      isOutsideMicroTick = true;
      needsNewPhysicalTick = true;
    }

    function finalizePhysicalTick() {
      var unhandledErrs = unhandledErrors;
      unhandledErrors = [];
      unhandledErrs.forEach(function (p) {
        p._PSD.onunhandled.call(null, p._value, p);
      });
      var finalizers = tickFinalizers.slice(0);
      var i = finalizers.length;

      while (i) {
        finalizers[--i]();
      }
    }

    function run_at_end_of_this_or_next_physical_tick(fn) {
      function finalizer() {
        fn();
        tickFinalizers.splice(tickFinalizers.indexOf(finalizer), 1);
      }

      tickFinalizers.push(finalizer);
      ++numScheduledCalls;
      asap$1(function () {
        if (--numScheduledCalls === 0) finalizePhysicalTick();
      }, []);
    }

    function addPossiblyUnhandledError(promise) {
      if (!unhandledErrors.some(function (p) {
        return p._value === promise._value;
      })) unhandledErrors.push(promise);
    }

    function markErrorAsHandled(promise) {
      var i = unhandledErrors.length;

      while (i) {
        if (unhandledErrors[--i]._value === promise._value) {
          unhandledErrors.splice(i, 1);
          return;
        }
      }
    }

    function PromiseReject(reason) {
      return new DexiePromise(INTERNAL, false, reason);
    }

    function wrap(fn, errorCatcher) {
      var psd = PSD;
      return function () {
        var wasRootExec = beginMicroTickScope(),
            outerScope = PSD;

        try {
          switchToZone(psd, true);
          return fn.apply(this, arguments);
        } catch (e) {
          errorCatcher && errorCatcher(e);
        } finally {
          switchToZone(outerScope, false);
          if (wasRootExec) endMicroTickScope();
        }
      };
    }

    var task = {
      awaits: 0,
      echoes: 0,
      id: 0
    };
    var taskCounter = 0;
    var zoneStack = [];
    var zoneEchoes = 0;
    var totalEchoes = 0;
    var zone_id_counter = 0;

    function newScope(fn, props$$1, a1, a2) {
      var parent = PSD,
          psd = Object.create(parent);
      psd.parent = parent;
      psd.ref = 0;
      psd.global = false;
      psd.id = ++zone_id_counter;
      var globalEnv = globalPSD.env;
      psd.env = patchGlobalPromise ? {
        Promise: DexiePromise,
        PromiseProp: {
          value: DexiePromise,
          configurable: true,
          writable: true
        },
        all: DexiePromise.all,
        race: DexiePromise.race,
        allSettled: DexiePromise.allSettled,
        any: DexiePromise.any,
        resolve: DexiePromise.resolve,
        reject: DexiePromise.reject,
        nthen: getPatchedPromiseThen(globalEnv.nthen, psd),
        gthen: getPatchedPromiseThen(globalEnv.gthen, psd)
      } : {};
      if (props$$1) extend(psd, props$$1);
      ++parent.ref;

      psd.finalize = function () {
        --this.parent.ref || this.parent.finalize();
      };

      var rv = usePSD(psd, fn, a1, a2);
      if (psd.ref === 0) psd.finalize();
      return rv;
    }

    function incrementExpectedAwaits() {
      if (!task.id) task.id = ++taskCounter;
      ++task.awaits;
      task.echoes += ZONE_ECHO_LIMIT;
      return task.id;
    }

    function decrementExpectedAwaits(sourceTaskId) {
      if (!task.awaits || sourceTaskId && sourceTaskId !== task.id) return;
      if (--task.awaits === 0) task.id = 0;
      task.echoes = task.awaits * ZONE_ECHO_LIMIT;
    }

    if (('' + nativePromiseThen).indexOf('[native code]') === -1) {
      incrementExpectedAwaits = decrementExpectedAwaits = nop;
    }

    function onPossibleParallellAsync(possiblePromise) {
      if (task.echoes && possiblePromise && possiblePromise.constructor === NativePromise) {
        incrementExpectedAwaits();
        return possiblePromise.then(function (x) {
          decrementExpectedAwaits();
          return x;
        }, function (e) {
          decrementExpectedAwaits();
          return rejection(e);
        });
      }

      return possiblePromise;
    }

    function zoneEnterEcho(targetZone) {
      ++totalEchoes;

      if (!task.echoes || --task.echoes === 0) {
        task.echoes = task.id = 0;
      }

      zoneStack.push(PSD);
      switchToZone(targetZone, true);
    }

    function zoneLeaveEcho() {
      var zone = zoneStack[zoneStack.length - 1];
      zoneStack.pop();
      switchToZone(zone, false);
    }

    function switchToZone(targetZone, bEnteringZone) {
      var currentZone = PSD;

      if (bEnteringZone ? task.echoes && (!zoneEchoes++ || targetZone !== PSD) : zoneEchoes && (! --zoneEchoes || targetZone !== PSD)) {
        enqueueNativeMicroTask(bEnteringZone ? zoneEnterEcho.bind(null, targetZone) : zoneLeaveEcho);
      }

      if (targetZone === PSD) return;
      PSD = targetZone;
      if (currentZone === globalPSD) globalPSD.env = snapShot();

      if (patchGlobalPromise) {
        var GlobalPromise_1 = globalPSD.env.Promise;
        var targetEnv = targetZone.env;
        nativePromiseProto.then = targetEnv.nthen;
        GlobalPromise_1.prototype.then = targetEnv.gthen;

        if (currentZone.global || targetZone.global) {
          Object.defineProperty(_global, 'Promise', targetEnv.PromiseProp);
          GlobalPromise_1.all = targetEnv.all;
          GlobalPromise_1.race = targetEnv.race;
          GlobalPromise_1.resolve = targetEnv.resolve;
          GlobalPromise_1.reject = targetEnv.reject;
          if (targetEnv.allSettled) GlobalPromise_1.allSettled = targetEnv.allSettled;
          if (targetEnv.any) GlobalPromise_1.any = targetEnv.any;
        }
      }
    }

    function snapShot() {
      var GlobalPromise = _global.Promise;
      return patchGlobalPromise ? {
        Promise: GlobalPromise,
        PromiseProp: Object.getOwnPropertyDescriptor(_global, "Promise"),
        all: GlobalPromise.all,
        race: GlobalPromise.race,
        allSettled: GlobalPromise.allSettled,
        any: GlobalPromise.any,
        resolve: GlobalPromise.resolve,
        reject: GlobalPromise.reject,
        nthen: nativePromiseProto.then,
        gthen: GlobalPromise.prototype.then
      } : {};
    }

    function usePSD(psd, fn, a1, a2, a3) {
      var outerScope = PSD;

      try {
        switchToZone(psd, true);
        return fn(a1, a2, a3);
      } finally {
        switchToZone(outerScope, false);
      }
    }

    function enqueueNativeMicroTask(job) {
      nativePromiseThen.call(resolvedNativePromise, job);
    }

    function nativeAwaitCompatibleWrap(fn, zone, possibleAwait) {
      return typeof fn !== 'function' ? fn : function () {
        var outerZone = PSD;
        if (possibleAwait) incrementExpectedAwaits();
        switchToZone(zone, true);

        try {
          return fn.apply(this, arguments);
        } finally {
          switchToZone(outerZone, false);
        }
      };
    }

    function getPatchedPromiseThen(origThen, zone) {
      return function (onResolved, onRejected) {
        return origThen.call(this, nativeAwaitCompatibleWrap(onResolved, zone, false), nativeAwaitCompatibleWrap(onRejected, zone, false));
      };
    }

    var UNHANDLEDREJECTION = "unhandledrejection";

    function globalError(err, promise) {
      var rv;

      try {
        rv = promise.onuncatched(err);
      } catch (e) {}

      if (rv !== false) try {
        var event,
            eventData = {
          promise: promise,
          reason: err
        };

        if (_global.document && document.createEvent) {
          event = document.createEvent('Event');
          event.initEvent(UNHANDLEDREJECTION, true, true);
          extend(event, eventData);
        } else if (_global.CustomEvent) {
          event = new CustomEvent(UNHANDLEDREJECTION, {
            detail: eventData
          });
          extend(event, eventData);
        }

        if (event && _global.dispatchEvent) {
          dispatchEvent(event);
          if (!_global.PromiseRejectionEvent && _global.onunhandledrejection) try {
            _global.onunhandledrejection(event);
          } catch (_) {}
        }

        if (debug && event && !event.defaultPrevented) {
          console.warn("Unhandled rejection: " + (err.stack || err));
        }
      } catch (e) {}
    }

    var rejection = DexiePromise.reject;

    function tempTransaction(db, mode, storeNames, fn) {
      if (!db._state.openComplete && !PSD.letThrough) {
        if (!db._state.isBeingOpened) {
          if (!db._options.autoOpen) return rejection(new exceptions.DatabaseClosed());
          db.open()["catch"](nop);
        }

        return db._state.dbReadyPromise.then(function () {
          return tempTransaction(db, mode, storeNames, fn);
        });
      } else {
        var trans = db._createTransaction(mode, storeNames, db._dbSchema);

        try {
          trans.create();
        } catch (ex) {
          return rejection(ex);
        }

        return trans._promise(mode, function (resolve, reject) {
          return newScope(function () {
            PSD.trans = trans;
            return fn(resolve, reject, trans);
          });
        }).then(function (result) {
          return trans._completion.then(function () {
            return result;
          });
        });
      }
    }

    var DEXIE_VERSION = '3.0.1';
    var maxString = String.fromCharCode(65535);
    var minKey = -Infinity;
    var INVALID_KEY_ARGUMENT = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.";
    var STRING_EXPECTED = "String expected.";
    var connections = [];
    var isIEOrEdge = typeof navigator !== 'undefined' && /(MSIE|Trident|Edge)/.test(navigator.userAgent);
    var hasIEDeleteObjectStoreBug = isIEOrEdge;
    var hangsOnDeleteLargeKeyRange = isIEOrEdge;

    var dexieStackFrameFilter = function dexieStackFrameFilter(frame) {
      return !/(dexie\.js|dexie\.min\.js)/.test(frame);
    };

    var DBNAMES_DB = '__dbnames';
    var READONLY = 'readonly';
    var READWRITE = 'readwrite';

    function combine(filter1, filter2) {
      return filter1 ? filter2 ? function () {
        return filter1.apply(this, arguments) && filter2.apply(this, arguments);
      } : filter1 : filter2;
    }

    var AnyRange = {
      type: 3,
      lower: -Infinity,
      lowerOpen: false,
      upper: [[]],
      upperOpen: false
    };

    var Table = function () {
      function Table() {}

      Table.prototype._trans = function (mode, fn, writeLocked) {
        var trans = this._tx || PSD.trans;
        var tableName = this.name;

        function checkTableInTransaction(resolve, reject, trans) {
          if (!trans.schema[tableName]) throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
          return fn(trans.idbtrans, trans);
        }

        var wasRootExec = beginMicroTickScope();

        try {
          return trans && trans.db === this.db ? trans === PSD.trans ? trans._promise(mode, checkTableInTransaction, writeLocked) : newScope(function () {
            return trans._promise(mode, checkTableInTransaction, writeLocked);
          }, {
            trans: trans,
            transless: PSD.transless || PSD
          }) : tempTransaction(this.db, mode, [this.name], checkTableInTransaction);
        } finally {
          if (wasRootExec) endMicroTickScope();
        }
      };

      Table.prototype.get = function (keyOrCrit, cb) {
        var _this = this;

        if (keyOrCrit && keyOrCrit.constructor === Object) return this.where(keyOrCrit).first(cb);
        return this._trans('readonly', function (trans) {
          return _this.core.get({
            trans: trans,
            key: keyOrCrit
          }).then(function (res) {
            return _this.hook.reading.fire(res);
          });
        }).then(cb);
      };

      Table.prototype.where = function (indexOrCrit) {
        if (typeof indexOrCrit === 'string') return new this.db.WhereClause(this, indexOrCrit);
        if (isArray(indexOrCrit)) return new this.db.WhereClause(this, "[" + indexOrCrit.join('+') + "]");
        var keyPaths = keys(indexOrCrit);
        if (keyPaths.length === 1) return this.where(keyPaths[0]).equals(indexOrCrit[keyPaths[0]]);
        var compoundIndex = this.schema.indexes.concat(this.schema.primKey).filter(function (ix) {
          return ix.compound && keyPaths.every(function (keyPath) {
            return ix.keyPath.indexOf(keyPath) >= 0;
          }) && ix.keyPath.every(function (keyPath) {
            return keyPaths.indexOf(keyPath) >= 0;
          });
        })[0];
        if (compoundIndex && this.db._maxKey !== maxString) return this.where(compoundIndex.name).equals(compoundIndex.keyPath.map(function (kp) {
          return indexOrCrit[kp];
        }));
        if (!compoundIndex && debug) console.warn("The query " + JSON.stringify(indexOrCrit) + " on " + this.name + " would benefit of a " + ("compound index [" + keyPaths.join('+') + "]"));
        var idxByName = this.schema.idxByName;
        var idb = this.db._deps.indexedDB;

        function equals(a, b) {
          try {
            return idb.cmp(a, b) === 0;
          } catch (e) {
            return false;
          }
        }

        var _a = keyPaths.reduce(function (_a, keyPath) {
          var prevIndex = _a[0],
              prevFilterFn = _a[1];
          var index = idxByName[keyPath];
          var value = indexOrCrit[keyPath];
          return [prevIndex || index, prevIndex || !index ? combine(prevFilterFn, index && index.multi ? function (x) {
            var prop = getByKeyPath(x, keyPath);
            return isArray(prop) && prop.some(function (item) {
              return equals(value, item);
            });
          } : function (x) {
            return equals(value, getByKeyPath(x, keyPath));
          }) : prevFilterFn];
        }, [null, null]),
            idx = _a[0],
            filterFunction = _a[1];

        return idx ? this.where(idx.name).equals(indexOrCrit[idx.keyPath]).filter(filterFunction) : compoundIndex ? this.filter(filterFunction) : this.where(keyPaths).equals('');
      };

      Table.prototype.filter = function (filterFunction) {
        return this.toCollection().and(filterFunction);
      };

      Table.prototype.count = function (thenShortcut) {
        return this.toCollection().count(thenShortcut);
      };

      Table.prototype.offset = function (offset) {
        return this.toCollection().offset(offset);
      };

      Table.prototype.limit = function (numRows) {
        return this.toCollection().limit(numRows);
      };

      Table.prototype.each = function (callback) {
        return this.toCollection().each(callback);
      };

      Table.prototype.toArray = function (thenShortcut) {
        return this.toCollection().toArray(thenShortcut);
      };

      Table.prototype.toCollection = function () {
        return new this.db.Collection(new this.db.WhereClause(this));
      };

      Table.prototype.orderBy = function (index) {
        return new this.db.Collection(new this.db.WhereClause(this, isArray(index) ? "[" + index.join('+') + "]" : index));
      };

      Table.prototype.reverse = function () {
        return this.toCollection().reverse();
      };

      Table.prototype.mapToClass = function (constructor) {
        this.schema.mappedClass = constructor;

        var readHook = function readHook(obj) {
          if (!obj) return obj;
          var res = Object.create(constructor.prototype);

          for (var m in obj) {
            if (hasOwn(obj, m)) try {
              res[m] = obj[m];
            } catch (_) {}
          }

          return res;
        };

        if (this.schema.readHook) {
          this.hook.reading.unsubscribe(this.schema.readHook);
        }

        this.schema.readHook = readHook;
        this.hook("reading", readHook);
        return constructor;
      };

      Table.prototype.defineClass = function () {
        function Class(content) {
          extend(this, content);
        }

        return this.mapToClass(Class);
      };

      Table.prototype.add = function (obj, key) {
        var _this = this;

        return this._trans('readwrite', function (trans) {
          return _this.core.mutate({
            trans: trans,
            type: 'add',
            keys: key != null ? [key] : null,
            values: [obj]
          });
        }).then(function (res) {
          return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
        }).then(function (lastResult) {
          if (!_this.core.schema.primaryKey.outbound) {
            try {
              setByKeyPath(obj, _this.core.schema.primaryKey.keyPath, lastResult);
            } catch (_) {}
          }

          return lastResult;
        });
      };

      Table.prototype.update = function (keyOrObject, modifications) {
        if (typeof modifications !== 'object' || isArray(modifications)) throw new exceptions.InvalidArgument("Modifications must be an object.");

        if (typeof keyOrObject === 'object' && !isArray(keyOrObject)) {
          keys(modifications).forEach(function (keyPath) {
            setByKeyPath(keyOrObject, keyPath, modifications[keyPath]);
          });
          var key = getByKeyPath(keyOrObject, this.schema.primKey.keyPath);
          if (key === undefined) return rejection(new exceptions.InvalidArgument("Given object does not contain its primary key"));
          return this.where(":id").equals(key).modify(modifications);
        } else {
          return this.where(":id").equals(keyOrObject).modify(modifications);
        }
      };

      Table.prototype.put = function (obj, key) {
        var _this = this;

        return this._trans('readwrite', function (trans) {
          return _this.core.mutate({
            trans: trans,
            type: 'put',
            values: [obj],
            keys: key != null ? [key] : null
          });
        }).then(function (res) {
          return res.numFailures ? DexiePromise.reject(res.failures[0]) : res.lastResult;
        }).then(function (lastResult) {
          if (!_this.core.schema.primaryKey.outbound) {
            try {
              setByKeyPath(obj, _this.core.schema.primaryKey.keyPath, lastResult);
            } catch (_) {}
          }

          return lastResult;
        });
      };

      Table.prototype["delete"] = function (key) {
        var _this = this;

        return this._trans('readwrite', function (trans) {
          return _this.core.mutate({
            trans: trans,
            type: 'delete',
            keys: [key]
          });
        }).then(function (res) {
          return res.numFailures ? DexiePromise.reject(res.failures[0]) : undefined;
        });
      };

      Table.prototype.clear = function () {
        var _this = this;

        return this._trans('readwrite', function (trans) {
          return _this.core.mutate({
            trans: trans,
            type: 'deleteRange',
            range: AnyRange
          });
        }).then(function (res) {
          return res.numFailures ? DexiePromise.reject(res.failures[0]) : undefined;
        });
      };

      Table.prototype.bulkGet = function (keys$$1) {
        var _this = this;

        return this._trans('readonly', function (trans) {
          return _this.core.getMany({
            keys: keys$$1,
            trans: trans
          });
        });
      };

      Table.prototype.bulkAdd = function (objects, keysOrOptions, options) {
        var _this = this;

        var keys$$1 = Array.isArray(keysOrOptions) ? keysOrOptions : undefined;
        options = options || (keys$$1 ? undefined : keysOrOptions);
        var wantResults = options ? options.allKeys : undefined;
        return this._trans('readwrite', function (trans) {
          var outbound = _this.core.schema.primaryKey.outbound;
          if (!outbound && keys$$1) throw new exceptions.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (keys$$1 && keys$$1.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
          var numObjects = objects.length;
          return _this.core.mutate({
            trans: trans,
            type: 'add',
            keys: keys$$1,
            values: objects,
            wantResults: wantResults
          }).then(function (_a) {
            var numFailures = _a.numFailures,
                results = _a.results,
                lastResult = _a.lastResult,
                failures = _a.failures;
            var result = wantResults ? results : lastResult;
            if (numFailures === 0) return result;
            throw new BulkError(_this.name + ".bulkAdd(): " + numFailures + " of " + numObjects + " operations failed", Object.keys(failures).map(function (pos) {
              return failures[pos];
            }));
          });
        });
      };

      Table.prototype.bulkPut = function (objects, keysOrOptions, options) {
        var _this = this;

        var keys$$1 = Array.isArray(keysOrOptions) ? keysOrOptions : undefined;
        options = options || (keys$$1 ? undefined : keysOrOptions);
        var wantResults = options ? options.allKeys : undefined;
        return this._trans('readwrite', function (trans) {
          var outbound = _this.core.schema.primaryKey.outbound;
          if (!outbound && keys$$1) throw new exceptions.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (keys$$1 && keys$$1.length !== objects.length) throw new exceptions.InvalidArgument("Arguments objects and keys must have the same length");
          var numObjects = objects.length;
          return _this.core.mutate({
            trans: trans,
            type: 'put',
            keys: keys$$1,
            values: objects,
            wantResults: wantResults
          }).then(function (_a) {
            var numFailures = _a.numFailures,
                results = _a.results,
                lastResult = _a.lastResult,
                failures = _a.failures;
            var result = wantResults ? results : lastResult;
            if (numFailures === 0) return result;
            throw new BulkError(_this.name + ".bulkPut(): " + numFailures + " of " + numObjects + " operations failed", Object.keys(failures).map(function (pos) {
              return failures[pos];
            }));
          });
        });
      };

      Table.prototype.bulkDelete = function (keys$$1) {
        var _this = this;

        var numKeys = keys$$1.length;
        return this._trans('readwrite', function (trans) {
          return _this.core.mutate({
            trans: trans,
            type: 'delete',
            keys: keys$$1
          });
        }).then(function (_a) {
          var numFailures = _a.numFailures,
              lastResult = _a.lastResult,
              failures = _a.failures;
          if (numFailures === 0) return lastResult;
          throw new BulkError(_this.name + ".bulkDelete(): " + numFailures + " of " + numKeys + " operations failed", failures);
        });
      };

      return Table;
    }();

    function Events(ctx) {
      var evs = {};

      var rv = function rv(eventName, subscriber) {
        if (subscriber) {
          var i = arguments.length,
              args = new Array(i - 1);

          while (--i) {
            args[i - 1] = arguments[i];
          }

          evs[eventName].subscribe.apply(null, args);
          return ctx;
        } else if (typeof eventName === 'string') {
          return evs[eventName];
        }
      };

      rv.addEventType = add;

      for (var i = 1, l = arguments.length; i < l; ++i) {
        add(arguments[i]);
      }

      return rv;

      function add(eventName, chainFunction, defaultFunction) {
        if (typeof eventName === 'object') return addConfiguredEvents(eventName);
        if (!chainFunction) chainFunction = reverseStoppableEventChain;
        if (!defaultFunction) defaultFunction = nop;
        var context = {
          subscribers: [],
          fire: defaultFunction,
          subscribe: function subscribe(cb) {
            if (context.subscribers.indexOf(cb) === -1) {
              context.subscribers.push(cb);
              context.fire = chainFunction(context.fire, cb);
            }
          },
          unsubscribe: function unsubscribe(cb) {
            context.subscribers = context.subscribers.filter(function (fn) {
              return fn !== cb;
            });
            context.fire = context.subscribers.reduce(chainFunction, defaultFunction);
          }
        };
        evs[eventName] = rv[eventName] = context;
        return context;
      }

      function addConfiguredEvents(cfg) {
        keys(cfg).forEach(function (eventName) {
          var args = cfg[eventName];

          if (isArray(args)) {
            add(eventName, cfg[eventName][0], cfg[eventName][1]);
          } else if (args === 'asap') {
            var context = add(eventName, mirror, function fire() {
              var i = arguments.length,
                  args = new Array(i);

              while (i--) {
                args[i] = arguments[i];
              }

              context.subscribers.forEach(function (fn) {
                asap(function fireEvent() {
                  fn.apply(null, args);
                });
              });
            });
          } else throw new exceptions.InvalidArgument("Invalid event config");
        });
      }
    }

    function makeClassConstructor(prototype, constructor) {
      derive(constructor).from({
        prototype: prototype
      });
      return constructor;
    }

    function createTableConstructor(db) {
      return makeClassConstructor(Table.prototype, function Table$$1(name, tableSchema, trans) {
        this.db = db;
        this._tx = trans;
        this.name = name;
        this.schema = tableSchema;
        this.hook = db._allTables[name] ? db._allTables[name].hook : Events(null, {
          "creating": [hookCreatingChain, nop],
          "reading": [pureFunctionChain, mirror],
          "updating": [hookUpdatingChain, nop],
          "deleting": [hookDeletingChain, nop]
        });
      });
    }

    function isPlainKeyRange(ctx, ignoreLimitFilter) {
      return !(ctx.filter || ctx.algorithm || ctx.or) && (ignoreLimitFilter ? ctx.justLimit : !ctx.replayFilter);
    }

    function addFilter(ctx, fn) {
      ctx.filter = combine(ctx.filter, fn);
    }

    function addReplayFilter(ctx, factory, isLimitFilter) {
      var curr = ctx.replayFilter;
      ctx.replayFilter = curr ? function () {
        return combine(curr(), factory());
      } : factory;
      ctx.justLimit = isLimitFilter && !curr;
    }

    function addMatchFilter(ctx, fn) {
      ctx.isMatch = combine(ctx.isMatch, fn);
    }

    function getIndexOrStore(ctx, coreSchema) {
      if (ctx.isPrimKey) return coreSchema.primaryKey;
      var index = coreSchema.getIndexByKeyPath(ctx.index);
      if (!index) throw new exceptions.Schema("KeyPath " + ctx.index + " on object store " + coreSchema.name + " is not indexed");
      return index;
    }

    function openCursor(ctx, coreTable, trans) {
      var index = getIndexOrStore(ctx, coreTable.schema);
      return coreTable.openCursor({
        trans: trans,
        values: !ctx.keysOnly,
        reverse: ctx.dir === 'prev',
        unique: !!ctx.unique,
        query: {
          index: index,
          range: ctx.range
        }
      });
    }

    function iter(ctx, fn, coreTrans, coreTable) {
      var filter = ctx.replayFilter ? combine(ctx.filter, ctx.replayFilter()) : ctx.filter;

      if (!ctx.or) {
        return iterate(openCursor(ctx, coreTable, coreTrans), combine(ctx.algorithm, filter), fn, !ctx.keysOnly && ctx.valueMapper);
      } else {
        var set_1 = {};

        var union = function union(item, cursor, advance) {
          if (!filter || filter(cursor, advance, function (result) {
            return cursor.stop(result);
          }, function (err) {
            return cursor.fail(err);
          })) {
            var primaryKey = cursor.primaryKey;
            var key = '' + primaryKey;
            if (key === '[object ArrayBuffer]') key = '' + new Uint8Array(primaryKey);

            if (!hasOwn(set_1, key)) {
              set_1[key] = true;
              fn(item, cursor, advance);
            }
          }
        };

        return Promise.all([ctx.or._iterate(union, coreTrans), iterate(openCursor(ctx, coreTable, coreTrans), ctx.algorithm, union, !ctx.keysOnly && ctx.valueMapper)]);
      }
    }

    function iterate(cursorPromise, filter, fn, valueMapper) {
      var mappedFn = valueMapper ? function (x, c, a) {
        return fn(valueMapper(x), c, a);
      } : fn;
      var wrappedFn = wrap(mappedFn);
      return cursorPromise.then(function (cursor) {
        if (cursor) {
          return cursor.start(function () {
            var c = function c() {
              return cursor["continue"]();
            };

            if (!filter || filter(cursor, function (advancer) {
              return c = advancer;
            }, function (val) {
              cursor.stop(val);
              c = nop;
            }, function (e) {
              cursor.fail(e);
              c = nop;
            })) wrappedFn(cursor.value, cursor, function (advancer) {
              return c = advancer;
            });
            c();
          });
        }
      });
    }

    var Collection = function () {
      function Collection() {}

      Collection.prototype._read = function (fn, cb) {
        var ctx = this._ctx;
        return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans('readonly', fn).then(cb);
      };

      Collection.prototype._write = function (fn) {
        var ctx = this._ctx;
        return ctx.error ? ctx.table._trans(null, rejection.bind(null, ctx.error)) : ctx.table._trans('readwrite', fn, "locked");
      };

      Collection.prototype._addAlgorithm = function (fn) {
        var ctx = this._ctx;
        ctx.algorithm = combine(ctx.algorithm, fn);
      };

      Collection.prototype._iterate = function (fn, coreTrans) {
        return iter(this._ctx, fn, coreTrans, this._ctx.table.core);
      };

      Collection.prototype.clone = function (props$$1) {
        var rv = Object.create(this.constructor.prototype),
            ctx = Object.create(this._ctx);
        if (props$$1) extend(ctx, props$$1);
        rv._ctx = ctx;
        return rv;
      };

      Collection.prototype.raw = function () {
        this._ctx.valueMapper = null;
        return this;
      };

      Collection.prototype.each = function (fn) {
        var ctx = this._ctx;
        return this._read(function (trans) {
          return iter(ctx, fn, trans, ctx.table.core);
        });
      };

      Collection.prototype.count = function (cb) {
        var _this = this;

        return this._read(function (trans) {
          var ctx = _this._ctx;
          var coreTable = ctx.table.core;

          if (isPlainKeyRange(ctx, true)) {
            return coreTable.count({
              trans: trans,
              query: {
                index: getIndexOrStore(ctx, coreTable.schema),
                range: ctx.range
              }
            }).then(function (count) {
              return Math.min(count, ctx.limit);
            });
          } else {
            var count = 0;
            return iter(ctx, function () {
              ++count;
              return false;
            }, trans, coreTable).then(function () {
              return count;
            });
          }
        }).then(cb);
      };

      Collection.prototype.sortBy = function (keyPath, cb) {
        var parts = keyPath.split('.').reverse(),
            lastPart = parts[0],
            lastIndex = parts.length - 1;

        function getval(obj, i) {
          if (i) return getval(obj[parts[i]], i - 1);
          return obj[lastPart];
        }

        var order = this._ctx.dir === "next" ? 1 : -1;

        function sorter(a, b) {
          var aVal = getval(a, lastIndex),
              bVal = getval(b, lastIndex);
          return aVal < bVal ? -order : aVal > bVal ? order : 0;
        }

        return this.toArray(function (a) {
          return a.sort(sorter);
        }).then(cb);
      };

      Collection.prototype.toArray = function (cb) {
        var _this = this;

        return this._read(function (trans) {
          var ctx = _this._ctx;

          if (ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
            var valueMapper_1 = ctx.valueMapper;
            var index = getIndexOrStore(ctx, ctx.table.core.schema);
            return ctx.table.core.query({
              trans: trans,
              limit: ctx.limit,
              values: true,
              query: {
                index: index,
                range: ctx.range
              }
            }).then(function (_a) {
              var result = _a.result;
              return valueMapper_1 ? result.map(valueMapper_1) : result;
            });
          } else {
            var a_1 = [];
            return iter(ctx, function (item) {
              return a_1.push(item);
            }, trans, ctx.table.core).then(function () {
              return a_1;
            });
          }
        }, cb);
      };

      Collection.prototype.offset = function (offset) {
        var ctx = this._ctx;
        if (offset <= 0) return this;
        ctx.offset += offset;

        if (isPlainKeyRange(ctx)) {
          addReplayFilter(ctx, function () {
            var offsetLeft = offset;
            return function (cursor, advance) {
              if (offsetLeft === 0) return true;

              if (offsetLeft === 1) {
                --offsetLeft;
                return false;
              }

              advance(function () {
                cursor.advance(offsetLeft);
                offsetLeft = 0;
              });
              return false;
            };
          });
        } else {
          addReplayFilter(ctx, function () {
            var offsetLeft = offset;
            return function () {
              return --offsetLeft < 0;
            };
          });
        }

        return this;
      };

      Collection.prototype.limit = function (numRows) {
        this._ctx.limit = Math.min(this._ctx.limit, numRows);
        addReplayFilter(this._ctx, function () {
          var rowsLeft = numRows;
          return function (cursor, advance, resolve) {
            if (--rowsLeft <= 0) advance(resolve);
            return rowsLeft >= 0;
          };
        }, true);
        return this;
      };

      Collection.prototype.until = function (filterFunction, bIncludeStopEntry) {
        addFilter(this._ctx, function (cursor, advance, resolve) {
          if (filterFunction(cursor.value)) {
            advance(resolve);
            return bIncludeStopEntry;
          } else {
            return true;
          }
        });
        return this;
      };

      Collection.prototype.first = function (cb) {
        return this.limit(1).toArray(function (a) {
          return a[0];
        }).then(cb);
      };

      Collection.prototype.last = function (cb) {
        return this.reverse().first(cb);
      };

      Collection.prototype.filter = function (filterFunction) {
        addFilter(this._ctx, function (cursor) {
          return filterFunction(cursor.value);
        });
        addMatchFilter(this._ctx, filterFunction);
        return this;
      };

      Collection.prototype.and = function (filter) {
        return this.filter(filter);
      };

      Collection.prototype.or = function (indexName) {
        return new this.db.WhereClause(this._ctx.table, indexName, this);
      };

      Collection.prototype.reverse = function () {
        this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev";
        if (this._ondirectionchange) this._ondirectionchange(this._ctx.dir);
        return this;
      };

      Collection.prototype.desc = function () {
        return this.reverse();
      };

      Collection.prototype.eachKey = function (cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        return this.each(function (val, cursor) {
          cb(cursor.key, cursor);
        });
      };

      Collection.prototype.eachUniqueKey = function (cb) {
        this._ctx.unique = "unique";
        return this.eachKey(cb);
      };

      Collection.prototype.eachPrimaryKey = function (cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        return this.each(function (val, cursor) {
          cb(cursor.primaryKey, cursor);
        });
      };

      Collection.prototype.keys = function (cb) {
        var ctx = this._ctx;
        ctx.keysOnly = !ctx.isMatch;
        var a = [];
        return this.each(function (item, cursor) {
          a.push(cursor.key);
        }).then(function () {
          return a;
        }).then(cb);
      };

      Collection.prototype.primaryKeys = function (cb) {
        var ctx = this._ctx;

        if (ctx.dir === 'next' && isPlainKeyRange(ctx, true) && ctx.limit > 0) {
          return this._read(function (trans) {
            var index = getIndexOrStore(ctx, ctx.table.core.schema);
            return ctx.table.core.query({
              trans: trans,
              values: false,
              limit: ctx.limit,
              query: {
                index: index,
                range: ctx.range
              }
            });
          }).then(function (_a) {
            var result = _a.result;
            return result;
          }).then(cb);
        }

        ctx.keysOnly = !ctx.isMatch;
        var a = [];
        return this.each(function (item, cursor) {
          a.push(cursor.primaryKey);
        }).then(function () {
          return a;
        }).then(cb);
      };

      Collection.prototype.uniqueKeys = function (cb) {
        this._ctx.unique = "unique";
        return this.keys(cb);
      };

      Collection.prototype.firstKey = function (cb) {
        return this.limit(1).keys(function (a) {
          return a[0];
        }).then(cb);
      };

      Collection.prototype.lastKey = function (cb) {
        return this.reverse().firstKey(cb);
      };

      Collection.prototype.distinct = function () {
        var ctx = this._ctx,
            idx = ctx.index && ctx.table.schema.idxByName[ctx.index];
        if (!idx || !idx.multi) return this;
        var set = {};
        addFilter(this._ctx, function (cursor) {
          var strKey = cursor.primaryKey.toString();
          var found = hasOwn(set, strKey);
          set[strKey] = true;
          return !found;
        });
        return this;
      };

      Collection.prototype.modify = function (changes) {
        var _this = this;

        var ctx = this._ctx;
        return this._write(function (trans) {
          var modifyer;

          if (typeof changes === 'function') {
            modifyer = changes;
          } else {
            var keyPaths = keys(changes);
            var numKeys = keyPaths.length;

            modifyer = function modifyer(item) {
              var anythingModified = false;

              for (var i = 0; i < numKeys; ++i) {
                var keyPath = keyPaths[i],
                    val = changes[keyPath];

                if (getByKeyPath(item, keyPath) !== val) {
                  setByKeyPath(item, keyPath, val);
                  anythingModified = true;
                }
              }

              return anythingModified;
            };
          }

          var coreTable = ctx.table.core;
          var _a = coreTable.schema.primaryKey,
              outbound = _a.outbound,
              extractKey = _a.extractKey;
          var limit = 'testmode' in Dexie ? 1 : 2000;
          var cmp = _this.db.core.cmp;
          var totalFailures = [];
          var successCount = 0;
          var failedKeys = [];

          var applyMutateResult = function applyMutateResult(expectedCount, res) {
            var failures = res.failures,
                numFailures = res.numFailures;
            successCount += expectedCount - numFailures;

            for (var _i = 0, _a = keys(failures); _i < _a.length; _i++) {
              var pos = _a[_i];
              totalFailures.push(failures[pos]);
            }
          };

          return _this.clone().primaryKeys().then(function (keys$$1) {
            var nextChunk = function nextChunk(offset) {
              var count = Math.min(limit, keys$$1.length - offset);
              return coreTable.getMany({
                trans: trans,
                keys: keys$$1.slice(offset, offset + count)
              }).then(function (values) {
                var addValues = [];
                var putValues = [];
                var putKeys = outbound ? [] : null;
                var deleteKeys = [];

                for (var i = 0; i < count; ++i) {
                  var origValue = values[i];
                  var ctx_1 = {
                    value: deepClone(origValue),
                    primKey: keys$$1[offset + i]
                  };

                  if (modifyer.call(ctx_1, ctx_1.value, ctx_1) !== false) {
                    if (ctx_1.value == null) {
                      deleteKeys.push(keys$$1[offset + i]);
                    } else if (!outbound && cmp(extractKey(origValue), extractKey(ctx_1.value)) !== 0) {
                      deleteKeys.push(keys$$1[offset + i]);
                      addValues.push(ctx_1.value);
                    } else {
                      putValues.push(ctx_1.value);
                      if (outbound) putKeys.push(keys$$1[offset + i]);
                    }
                  }
                }

                return Promise.resolve(addValues.length > 0 && coreTable.mutate({
                  trans: trans,
                  type: 'add',
                  values: addValues
                }).then(function (res) {
                  for (var pos in res.failures) {
                    deleteKeys.splice(parseInt(pos), 1);
                  }

                  applyMutateResult(addValues.length, res);
                })).then(function (res) {
                  return putValues.length > 0 && coreTable.mutate({
                    trans: trans,
                    type: 'put',
                    keys: putKeys,
                    values: putValues
                  }).then(function (res) {
                    return applyMutateResult(putValues.length, res);
                  });
                }).then(function () {
                  return deleteKeys.length > 0 && coreTable.mutate({
                    trans: trans,
                    type: 'delete',
                    keys: deleteKeys
                  }).then(function (res) {
                    return applyMutateResult(deleteKeys.length, res);
                  });
                }).then(function () {
                  return keys$$1.length > offset + count && nextChunk(offset + limit);
                });
              });
            };

            return nextChunk(0).then(function () {
              if (totalFailures.length > 0) throw new ModifyError("Error modifying one or more objects", totalFailures, successCount, failedKeys);
              return keys$$1.length;
            });
          });
        });
      };

      Collection.prototype["delete"] = function () {
        var ctx = this._ctx,
            range = ctx.range;

        if (isPlainKeyRange(ctx) && (ctx.isPrimKey && !hangsOnDeleteLargeKeyRange || range.type === 3)) {
          return this._write(function (trans) {
            var primaryKey = ctx.table.core.schema.primaryKey;
            var coreRange = range;
            return ctx.table.core.count({
              trans: trans,
              query: {
                index: primaryKey,
                range: coreRange
              }
            }).then(function (count) {
              return ctx.table.core.mutate({
                trans: trans,
                type: 'deleteRange',
                range: coreRange
              }).then(function (_a) {
                var failures = _a.failures,
                    lastResult = _a.lastResult,
                    results = _a.results,
                    numFailures = _a.numFailures;
                if (numFailures) throw new ModifyError("Could not delete some values", Object.keys(failures).map(function (pos) {
                  return failures[pos];
                }), count - numFailures);
                return count - numFailures;
              });
            });
          });
        }

        return this.modify(function (value, ctx) {
          return ctx.value = null;
        });
      };

      return Collection;
    }();

    function createCollectionConstructor(db) {
      return makeClassConstructor(Collection.prototype, function Collection$$1(whereClause, keyRangeGenerator) {
        this.db = db;
        var keyRange = AnyRange,
            error = null;
        if (keyRangeGenerator) try {
          keyRange = keyRangeGenerator();
        } catch (ex) {
          error = ex;
        }
        var whereCtx = whereClause._ctx;
        var table = whereCtx.table;
        var readingHook = table.hook.reading.fire;
        this._ctx = {
          table: table,
          index: whereCtx.index,
          isPrimKey: !whereCtx.index || table.schema.primKey.keyPath && whereCtx.index === table.schema.primKey.name,
          range: keyRange,
          keysOnly: false,
          dir: "next",
          unique: "",
          algorithm: null,
          filter: null,
          replayFilter: null,
          justLimit: true,
          isMatch: null,
          offset: 0,
          limit: Infinity,
          error: error,
          or: whereCtx.or,
          valueMapper: readingHook !== mirror ? readingHook : null
        };
      });
    }

    function simpleCompare(a, b) {
      return a < b ? -1 : a === b ? 0 : 1;
    }

    function simpleCompareReverse(a, b) {
      return a > b ? -1 : a === b ? 0 : 1;
    }

    function fail(collectionOrWhereClause, err, T) {
      var collection = collectionOrWhereClause instanceof WhereClause ? new collectionOrWhereClause.Collection(collectionOrWhereClause) : collectionOrWhereClause;
      collection._ctx.error = T ? new T(err) : new TypeError(err);
      return collection;
    }

    function emptyCollection(whereClause) {
      return new whereClause.Collection(whereClause, function () {
        return rangeEqual("");
      }).limit(0);
    }

    function upperFactory(dir) {
      return dir === "next" ? function (s) {
        return s.toUpperCase();
      } : function (s) {
        return s.toLowerCase();
      };
    }

    function lowerFactory(dir) {
      return dir === "next" ? function (s) {
        return s.toLowerCase();
      } : function (s) {
        return s.toUpperCase();
      };
    }

    function nextCasing(key, lowerKey, upperNeedle, lowerNeedle, cmp, dir) {
      var length = Math.min(key.length, lowerNeedle.length);
      var llp = -1;

      for (var i = 0; i < length; ++i) {
        var lwrKeyChar = lowerKey[i];

        if (lwrKeyChar !== lowerNeedle[i]) {
          if (cmp(key[i], upperNeedle[i]) < 0) return key.substr(0, i) + upperNeedle[i] + upperNeedle.substr(i + 1);
          if (cmp(key[i], lowerNeedle[i]) < 0) return key.substr(0, i) + lowerNeedle[i] + upperNeedle.substr(i + 1);
          if (llp >= 0) return key.substr(0, llp) + lowerKey[llp] + upperNeedle.substr(llp + 1);
          return null;
        }

        if (cmp(key[i], lwrKeyChar) < 0) llp = i;
      }

      if (length < lowerNeedle.length && dir === "next") return key + upperNeedle.substr(key.length);
      if (length < key.length && dir === "prev") return key.substr(0, upperNeedle.length);
      return llp < 0 ? null : key.substr(0, llp) + lowerNeedle[llp] + upperNeedle.substr(llp + 1);
    }

    function addIgnoreCaseAlgorithm(whereClause, match, needles, suffix) {
      var upper,
          lower,
          compare,
          upperNeedles,
          lowerNeedles,
          direction,
          nextKeySuffix,
          needlesLen = needles.length;

      if (!needles.every(function (s) {
        return typeof s === 'string';
      })) {
        return fail(whereClause, STRING_EXPECTED);
      }

      function initDirection(dir) {
        upper = upperFactory(dir);
        lower = lowerFactory(dir);
        compare = dir === "next" ? simpleCompare : simpleCompareReverse;
        var needleBounds = needles.map(function (needle) {
          return {
            lower: lower(needle),
            upper: upper(needle)
          };
        }).sort(function (a, b) {
          return compare(a.lower, b.lower);
        });
        upperNeedles = needleBounds.map(function (nb) {
          return nb.upper;
        });
        lowerNeedles = needleBounds.map(function (nb) {
          return nb.lower;
        });
        direction = dir;
        nextKeySuffix = dir === "next" ? "" : suffix;
      }

      initDirection("next");
      var c = new whereClause.Collection(whereClause, function () {
        return createRange(upperNeedles[0], lowerNeedles[needlesLen - 1] + suffix);
      });

      c._ondirectionchange = function (direction) {
        initDirection(direction);
      };

      var firstPossibleNeedle = 0;

      c._addAlgorithm(function (cursor, advance, resolve) {
        var key = cursor.key;
        if (typeof key !== 'string') return false;
        var lowerKey = lower(key);

        if (match(lowerKey, lowerNeedles, firstPossibleNeedle)) {
          return true;
        } else {
          var lowestPossibleCasing = null;

          for (var i = firstPossibleNeedle; i < needlesLen; ++i) {
            var casing = nextCasing(key, lowerKey, upperNeedles[i], lowerNeedles[i], compare, direction);
            if (casing === null && lowestPossibleCasing === null) firstPossibleNeedle = i + 1;else if (lowestPossibleCasing === null || compare(lowestPossibleCasing, casing) > 0) {
              lowestPossibleCasing = casing;
            }
          }

          if (lowestPossibleCasing !== null) {
            advance(function () {
              cursor["continue"](lowestPossibleCasing + nextKeySuffix);
            });
          } else {
            advance(resolve);
          }

          return false;
        }
      });

      return c;
    }

    function createRange(lower, upper, lowerOpen, upperOpen) {
      return {
        type: 2,
        lower: lower,
        upper: upper,
        lowerOpen: lowerOpen,
        upperOpen: upperOpen
      };
    }

    function rangeEqual(value) {
      return {
        type: 1,
        lower: value,
        upper: value
      };
    }

    var WhereClause = function () {
      function WhereClause() {}

      Object.defineProperty(WhereClause.prototype, "Collection", {
        get: function get() {
          return this._ctx.table.db.Collection;
        },
        enumerable: true,
        configurable: true
      });

      WhereClause.prototype.between = function (lower, upper, includeLower, includeUpper) {
        includeLower = includeLower !== false;
        includeUpper = includeUpper === true;

        try {
          if (this._cmp(lower, upper) > 0 || this._cmp(lower, upper) === 0 && (includeLower || includeUpper) && !(includeLower && includeUpper)) return emptyCollection(this);
          return new this.Collection(this, function () {
            return createRange(lower, upper, !includeLower, !includeUpper);
          });
        } catch (e) {
          return fail(this, INVALID_KEY_ARGUMENT);
        }
      };

      WhereClause.prototype.equals = function (value) {
        return new this.Collection(this, function () {
          return rangeEqual(value);
        });
      };

      WhereClause.prototype.above = function (value) {
        if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () {
          return createRange(value, undefined, true);
        });
      };

      WhereClause.prototype.aboveOrEqual = function (value) {
        if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () {
          return createRange(value, undefined, false);
        });
      };

      WhereClause.prototype.below = function (value) {
        if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () {
          return createRange(undefined, value, false, true);
        });
      };

      WhereClause.prototype.belowOrEqual = function (value) {
        if (value == null) return fail(this, INVALID_KEY_ARGUMENT);
        return new this.Collection(this, function () {
          return createRange(undefined, value);
        });
      };

      WhereClause.prototype.startsWith = function (str) {
        if (typeof str !== 'string') return fail(this, STRING_EXPECTED);
        return this.between(str, str + maxString, true, true);
      };

      WhereClause.prototype.startsWithIgnoreCase = function (str) {
        if (str === "") return this.startsWith(str);
        return addIgnoreCaseAlgorithm(this, function (x, a) {
          return x.indexOf(a[0]) === 0;
        }, [str], maxString);
      };

      WhereClause.prototype.equalsIgnoreCase = function (str) {
        return addIgnoreCaseAlgorithm(this, function (x, a) {
          return x === a[0];
        }, [str], "");
      };

      WhereClause.prototype.anyOfIgnoreCase = function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0) return emptyCollection(this);
        return addIgnoreCaseAlgorithm(this, function (x, a) {
          return a.indexOf(x) !== -1;
        }, set, "");
      };

      WhereClause.prototype.startsWithAnyOfIgnoreCase = function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0) return emptyCollection(this);
        return addIgnoreCaseAlgorithm(this, function (x, a) {
          return a.some(function (n) {
            return x.indexOf(n) === 0;
          });
        }, set, maxString);
      };

      WhereClause.prototype.anyOf = function () {
        var _this = this;

        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        var compare = this._cmp;

        try {
          set.sort(compare);
        } catch (e) {
          return fail(this, INVALID_KEY_ARGUMENT);
        }

        if (set.length === 0) return emptyCollection(this);
        var c = new this.Collection(this, function () {
          return createRange(set[0], set[set.length - 1]);
        });

        c._ondirectionchange = function (direction) {
          compare = direction === "next" ? _this._ascending : _this._descending;
          set.sort(compare);
        };

        var i = 0;

        c._addAlgorithm(function (cursor, advance, resolve) {
          var key = cursor.key;

          while (compare(key, set[i]) > 0) {
            ++i;

            if (i === set.length) {
              advance(resolve);
              return false;
            }
          }

          if (compare(key, set[i]) === 0) {
            return true;
          } else {
            advance(function () {
              cursor["continue"](set[i]);
            });
            return false;
          }
        });

        return c;
      };

      WhereClause.prototype.notEqual = function (value) {
        return this.inAnyRange([[minKey, value], [value, this.db._maxKey]], {
          includeLowers: false,
          includeUppers: false
        });
      };

      WhereClause.prototype.noneOf = function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);
        if (set.length === 0) return new this.Collection(this);

        try {
          set.sort(this._ascending);
        } catch (e) {
          return fail(this, INVALID_KEY_ARGUMENT);
        }

        var ranges = set.reduce(function (res, val) {
          return res ? res.concat([[res[res.length - 1][1], val]]) : [[minKey, val]];
        }, null);
        ranges.push([set[set.length - 1], this.db._maxKey]);
        return this.inAnyRange(ranges, {
          includeLowers: false,
          includeUppers: false
        });
      };

      WhereClause.prototype.inAnyRange = function (ranges, options) {
        var _this = this;

        var cmp = this._cmp,
            ascending = this._ascending,
            descending = this._descending,
            min = this._min,
            max = this._max;
        if (ranges.length === 0) return emptyCollection(this);

        if (!ranges.every(function (range) {
          return range[0] !== undefined && range[1] !== undefined && ascending(range[0], range[1]) <= 0;
        })) {
          return fail(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", exceptions.InvalidArgument);
        }

        var includeLowers = !options || options.includeLowers !== false;
        var includeUppers = options && options.includeUppers === true;

        function addRange(ranges, newRange) {
          var i = 0,
              l = ranges.length;

          for (; i < l; ++i) {
            var range = ranges[i];

            if (cmp(newRange[0], range[1]) < 0 && cmp(newRange[1], range[0]) > 0) {
              range[0] = min(range[0], newRange[0]);
              range[1] = max(range[1], newRange[1]);
              break;
            }
          }

          if (i === l) ranges.push(newRange);
          return ranges;
        }

        var sortDirection = ascending;

        function rangeSorter(a, b) {
          return sortDirection(a[0], b[0]);
        }

        var set;

        try {
          set = ranges.reduce(addRange, []);
          set.sort(rangeSorter);
        } catch (ex) {
          return fail(this, INVALID_KEY_ARGUMENT);
        }

        var rangePos = 0;
        var keyIsBeyondCurrentEntry = includeUppers ? function (key) {
          return ascending(key, set[rangePos][1]) > 0;
        } : function (key) {
          return ascending(key, set[rangePos][1]) >= 0;
        };
        var keyIsBeforeCurrentEntry = includeLowers ? function (key) {
          return descending(key, set[rangePos][0]) > 0;
        } : function (key) {
          return descending(key, set[rangePos][0]) >= 0;
        };

        function keyWithinCurrentRange(key) {
          return !keyIsBeyondCurrentEntry(key) && !keyIsBeforeCurrentEntry(key);
        }

        var checkKey = keyIsBeyondCurrentEntry;
        var c = new this.Collection(this, function () {
          return createRange(set[0][0], set[set.length - 1][1], !includeLowers, !includeUppers);
        });

        c._ondirectionchange = function (direction) {
          if (direction === "next") {
            checkKey = keyIsBeyondCurrentEntry;
            sortDirection = ascending;
          } else {
            checkKey = keyIsBeforeCurrentEntry;
            sortDirection = descending;
          }

          set.sort(rangeSorter);
        };

        c._addAlgorithm(function (cursor, advance, resolve) {
          var key = cursor.key;

          while (checkKey(key)) {
            ++rangePos;

            if (rangePos === set.length) {
              advance(resolve);
              return false;
            }
          }

          if (keyWithinCurrentRange(key)) {
            return true;
          } else if (_this._cmp(key, set[rangePos][1]) === 0 || _this._cmp(key, set[rangePos][0]) === 0) {
            return false;
          } else {
            advance(function () {
              if (sortDirection === ascending) cursor["continue"](set[rangePos][0]);else cursor["continue"](set[rangePos][1]);
            });
            return false;
          }
        });

        return c;
      };

      WhereClause.prototype.startsWithAnyOf = function () {
        var set = getArrayOf.apply(NO_CHAR_ARRAY, arguments);

        if (!set.every(function (s) {
          return typeof s === 'string';
        })) {
          return fail(this, "startsWithAnyOf() only works with strings");
        }

        if (set.length === 0) return emptyCollection(this);
        return this.inAnyRange(set.map(function (str) {
          return [str, str + maxString];
        }));
      };

      return WhereClause;
    }();

    function createWhereClauseConstructor(db) {
      return makeClassConstructor(WhereClause.prototype, function WhereClause$$1(table, index, orCollection) {
        this.db = db;
        this._ctx = {
          table: table,
          index: index === ":id" ? null : index,
          or: orCollection
        };
        var indexedDB = db._deps.indexedDB;
        if (!indexedDB) throw new exceptions.MissingAPI("indexedDB API missing");
        this._cmp = this._ascending = indexedDB.cmp.bind(indexedDB);

        this._descending = function (a, b) {
          return indexedDB.cmp(b, a);
        };

        this._max = function (a, b) {
          return indexedDB.cmp(a, b) > 0 ? a : b;
        };

        this._min = function (a, b) {
          return indexedDB.cmp(a, b) < 0 ? a : b;
        };

        this._IDBKeyRange = db._deps.IDBKeyRange;
      });
    }

    function safariMultiStoreFix(storeNames) {
      return storeNames.length === 1 ? storeNames[0] : storeNames;
    }

    function getMaxKey(IdbKeyRange) {
      try {
        IdbKeyRange.only([[]]);
        return [[]];
      } catch (e) {
        return maxString;
      }
    }

    function eventRejectHandler(reject) {
      return wrap(function (event) {
        preventDefault(event);
        reject(event.target.error);
        return false;
      });
    }

    function preventDefault(event) {
      if (event.stopPropagation) event.stopPropagation();
      if (event.preventDefault) event.preventDefault();
    }

    var Transaction = function () {
      function Transaction() {}

      Transaction.prototype._lock = function () {
        assert(!PSD.global);
        ++this._reculock;
        if (this._reculock === 1 && !PSD.global) PSD.lockOwnerFor = this;
        return this;
      };

      Transaction.prototype._unlock = function () {
        assert(!PSD.global);

        if (--this._reculock === 0) {
          if (!PSD.global) PSD.lockOwnerFor = null;

          while (this._blockedFuncs.length > 0 && !this._locked()) {
            var fnAndPSD = this._blockedFuncs.shift();

            try {
              usePSD(fnAndPSD[1], fnAndPSD[0]);
            } catch (e) {}
          }
        }

        return this;
      };

      Transaction.prototype._locked = function () {
        return this._reculock && PSD.lockOwnerFor !== this;
      };

      Transaction.prototype.create = function (idbtrans) {
        var _this = this;

        if (!this.mode) return this;
        var idbdb = this.db.idbdb;
        var dbOpenError = this.db._state.dbOpenError;
        assert(!this.idbtrans);

        if (!idbtrans && !idbdb) {
          switch (dbOpenError && dbOpenError.name) {
            case "DatabaseClosedError":
              throw new exceptions.DatabaseClosed(dbOpenError);

            case "MissingAPIError":
              throw new exceptions.MissingAPI(dbOpenError.message, dbOpenError);

            default:
              throw new exceptions.OpenFailed(dbOpenError);
          }
        }

        if (!this.active) throw new exceptions.TransactionInactive();
        assert(this._completion._state === null);
        idbtrans = this.idbtrans = idbtrans || idbdb.transaction(safariMultiStoreFix(this.storeNames), this.mode);
        idbtrans.onerror = wrap(function (ev) {
          preventDefault(ev);

          _this._reject(idbtrans.error);
        });
        idbtrans.onabort = wrap(function (ev) {
          preventDefault(ev);
          _this.active && _this._reject(new exceptions.Abort(idbtrans.error));
          _this.active = false;

          _this.on("abort").fire(ev);
        });
        idbtrans.oncomplete = wrap(function () {
          _this.active = false;

          _this._resolve();
        });
        return this;
      };

      Transaction.prototype._promise = function (mode, fn, bWriteLock) {
        var _this = this;

        if (mode === 'readwrite' && this.mode !== 'readwrite') return rejection(new exceptions.ReadOnly("Transaction is readonly"));
        if (!this.active) return rejection(new exceptions.TransactionInactive());

        if (this._locked()) {
          return new DexiePromise(function (resolve, reject) {
            _this._blockedFuncs.push([function () {
              _this._promise(mode, fn, bWriteLock).then(resolve, reject);
            }, PSD]);
          });
        } else if (bWriteLock) {
          return newScope(function () {
            var p = new DexiePromise(function (resolve, reject) {
              _this._lock();

              var rv = fn(resolve, reject, _this);
              if (rv && rv.then) rv.then(resolve, reject);
            });
            p["finally"](function () {
              return _this._unlock();
            });
            p._lib = true;
            return p;
          });
        } else {
          var p = new DexiePromise(function (resolve, reject) {
            var rv = fn(resolve, reject, _this);
            if (rv && rv.then) rv.then(resolve, reject);
          });
          p._lib = true;
          return p;
        }
      };

      Transaction.prototype._root = function () {
        return this.parent ? this.parent._root() : this;
      };

      Transaction.prototype.waitFor = function (promiseLike) {
        var root = this._root();

        var promise = DexiePromise.resolve(promiseLike);

        if (root._waitingFor) {
          root._waitingFor = root._waitingFor.then(function () {
            return promise;
          });
        } else {
          root._waitingFor = promise;
          root._waitingQueue = [];
          var store = root.idbtrans.objectStore(root.storeNames[0]);

          (function spin() {
            ++root._spinCount;

            while (root._waitingQueue.length) {
              root._waitingQueue.shift()();
            }

            if (root._waitingFor) store.get(-Infinity).onsuccess = spin;
          })();
        }

        var currentWaitPromise = root._waitingFor;
        return new DexiePromise(function (resolve, reject) {
          promise.then(function (res) {
            return root._waitingQueue.push(wrap(resolve.bind(null, res)));
          }, function (err) {
            return root._waitingQueue.push(wrap(reject.bind(null, err)));
          })["finally"](function () {
            if (root._waitingFor === currentWaitPromise) {
              root._waitingFor = null;
            }
          });
        });
      };

      Transaction.prototype.abort = function () {
        this.active && this._reject(new exceptions.Abort());
        this.active = false;
      };

      Transaction.prototype.table = function (tableName) {
        var memoizedTables = this._memoizedTables || (this._memoizedTables = {});
        if (hasOwn(memoizedTables, tableName)) return memoizedTables[tableName];
        var tableSchema = this.schema[tableName];

        if (!tableSchema) {
          throw new exceptions.NotFound("Table " + tableName + " not part of transaction");
        }

        var transactionBoundTable = new this.db.Table(tableName, tableSchema, this);
        transactionBoundTable.core = this.db.core.table(tableName);
        memoizedTables[tableName] = transactionBoundTable;
        return transactionBoundTable;
      };

      return Transaction;
    }();

    function createTransactionConstructor(db) {
      return makeClassConstructor(Transaction.prototype, function Transaction$$1(mode, storeNames, dbschema, parent) {
        var _this = this;

        this.db = db;
        this.mode = mode;
        this.storeNames = storeNames;
        this.schema = dbschema;
        this.idbtrans = null;
        this.on = Events(this, "complete", "error", "abort");
        this.parent = parent || null;
        this.active = true;
        this._reculock = 0;
        this._blockedFuncs = [];
        this._resolve = null;
        this._reject = null;
        this._waitingFor = null;
        this._waitingQueue = null;
        this._spinCount = 0;
        this._completion = new DexiePromise(function (resolve, reject) {
          _this._resolve = resolve;
          _this._reject = reject;
        });

        this._completion.then(function () {
          _this.active = false;

          _this.on.complete.fire();
        }, function (e) {
          var wasActive = _this.active;
          _this.active = false;

          _this.on.error.fire(e);

          _this.parent ? _this.parent._reject(e) : wasActive && _this.idbtrans && _this.idbtrans.abort();
          return rejection(e);
        });
      });
    }

    function createIndexSpec(name, keyPath, unique, multi, auto, compound, isPrimKey) {
      return {
        name: name,
        keyPath: keyPath,
        unique: unique,
        multi: multi,
        auto: auto,
        compound: compound,
        src: (unique && !isPrimKey ? '&' : '') + (multi ? '*' : '') + (auto ? "++" : "") + nameFromKeyPath(keyPath)
      };
    }

    function nameFromKeyPath(keyPath) {
      return typeof keyPath === 'string' ? keyPath : keyPath ? '[' + [].join.call(keyPath, '+') + ']' : "";
    }

    function createTableSchema(name, primKey, indexes) {
      return {
        name: name,
        primKey: primKey,
        indexes: indexes,
        mappedClass: null,
        idxByName: arrayToObject(indexes, function (index) {
          return [index.name, index];
        })
      };
    }

    function getKeyExtractor(keyPath) {
      if (keyPath == null) {
        return function () {
          return undefined;
        };
      } else if (typeof keyPath === 'string') {
        return getSinglePathKeyExtractor(keyPath);
      } else {
        return function (obj) {
          return getByKeyPath(obj, keyPath);
        };
      }
    }

    function getSinglePathKeyExtractor(keyPath) {
      var split = keyPath.split('.');

      if (split.length === 1) {
        return function (obj) {
          return obj[keyPath];
        };
      } else {
        return function (obj) {
          return getByKeyPath(obj, keyPath);
        };
      }
    }

    function getEffectiveKeys(primaryKey, req) {
      if (req.type === 'delete') return req.keys;
      return req.keys || req.values.map(primaryKey.extractKey);
    }

    function getExistingValues(table, req, effectiveKeys) {
      return req.type === 'add' ? Promise.resolve(new Array(req.values.length)) : table.getMany({
        trans: req.trans,
        keys: effectiveKeys
      });
    }

    function arrayify(arrayLike) {
      return [].slice.call(arrayLike);
    }

    var _id_counter = 0;

    function getKeyPathAlias(keyPath) {
      return keyPath == null ? ":id" : typeof keyPath === 'string' ? keyPath : "[" + keyPath.join('+') + "]";
    }

    function createDBCore(db, indexedDB, IdbKeyRange, tmpTrans) {
      var cmp = indexedDB.cmp.bind(indexedDB);

      function extractSchema(db, trans) {
        var tables = arrayify(db.objectStoreNames);
        return {
          schema: {
            name: db.name,
            tables: tables.map(function (table) {
              return trans.objectStore(table);
            }).map(function (store) {
              var keyPath = store.keyPath,
                  autoIncrement = store.autoIncrement;
              var compound = isArray(keyPath);
              var outbound = keyPath == null;
              var indexByKeyPath = {};
              var result = {
                name: store.name,
                primaryKey: {
                  name: null,
                  isPrimaryKey: true,
                  outbound: outbound,
                  compound: compound,
                  keyPath: keyPath,
                  autoIncrement: autoIncrement,
                  unique: true,
                  extractKey: getKeyExtractor(keyPath)
                },
                indexes: arrayify(store.indexNames).map(function (indexName) {
                  return store.index(indexName);
                }).map(function (index) {
                  var name = index.name,
                      unique = index.unique,
                      multiEntry = index.multiEntry,
                      keyPath = index.keyPath;
                  var compound = isArray(keyPath);
                  var result = {
                    name: name,
                    compound: compound,
                    keyPath: keyPath,
                    unique: unique,
                    multiEntry: multiEntry,
                    extractKey: getKeyExtractor(keyPath)
                  };
                  indexByKeyPath[getKeyPathAlias(keyPath)] = result;
                  return result;
                }),
                getIndexByKeyPath: function getIndexByKeyPath(keyPath) {
                  return indexByKeyPath[getKeyPathAlias(keyPath)];
                }
              };
              indexByKeyPath[":id"] = result.primaryKey;

              if (keyPath != null) {
                indexByKeyPath[getKeyPathAlias(keyPath)] = result.primaryKey;
              }

              return result;
            })
          },
          hasGetAll: tables.length > 0 && 'getAll' in trans.objectStore(tables[0]) && !(typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604)
        };
      }

      function makeIDBKeyRange(range) {
        if (range.type === 3) return null;
        if (range.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
        var lower = range.lower,
            upper = range.upper,
            lowerOpen = range.lowerOpen,
            upperOpen = range.upperOpen;
        var idbRange = lower === undefined ? upper === undefined ? null : IdbKeyRange.upperBound(upper, !!upperOpen) : upper === undefined ? IdbKeyRange.lowerBound(lower, !!lowerOpen) : IdbKeyRange.bound(lower, upper, !!lowerOpen, !!upperOpen);
        return idbRange;
      }

      function createDbCoreTable(tableSchema) {
        var tableName = tableSchema.name;

        function mutate(_a) {
          var trans = _a.trans,
              type = _a.type,
              keys$$1 = _a.keys,
              values = _a.values,
              range = _a.range,
              wantResults = _a.wantResults;
          return new Promise(function (resolve, reject) {
            resolve = wrap(resolve);
            var store = trans.objectStore(tableName);
            var outbound = store.keyPath == null;
            var isAddOrPut = type === "put" || type === "add";
            if (!isAddOrPut && type !== 'delete' && type !== 'deleteRange') throw new Error("Invalid operation type: " + type);
            var length = (keys$$1 || values || {
              length: 1
            }).length;

            if (keys$$1 && values && keys$$1.length !== values.length) {
              throw new Error("Given keys array must have same length as given values array.");
            }

            if (length === 0) return resolve({
              numFailures: 0,
              failures: {},
              results: [],
              lastResult: undefined
            });

            var results = wantResults && __spreadArrays(keys$$1 ? keys$$1 : getEffectiveKeys(tableSchema.primaryKey, {
              type: type,
              keys: keys$$1,
              values: values
            }));

            var req;
            var failures = [];
            var numFailures = 0;

            var errorHandler = function errorHandler(event) {
              ++numFailures;
              preventDefault(event);
              if (results) results[event.target._reqno] = undefined;
              failures[event.target._reqno] = event.target.error;
            };

            var setResult = function setResult(_a) {
              var target = _a.target;
              results[target._reqno] = target.result;
            };

            if (type === 'deleteRange') {
              if (range.type === 4) return resolve({
                numFailures: numFailures,
                failures: failures,
                results: results,
                lastResult: undefined
              });
              if (range.type === 3) req = store.clear();else req = store["delete"](makeIDBKeyRange(range));
            } else {
              var _a = isAddOrPut ? outbound ? [values, keys$$1] : [values, null] : [keys$$1, null],
                  args1 = _a[0],
                  args2 = _a[1];

              if (isAddOrPut) {
                for (var i = 0; i < length; ++i) {
                  req = args2 && args2[i] !== undefined ? store[type](args1[i], args2[i]) : store[type](args1[i]);
                  req._reqno = i;

                  if (results && results[i] === undefined) {
                    req.onsuccess = setResult;
                  }

                  req.onerror = errorHandler;
                }
              } else {
                for (var i = 0; i < length; ++i) {
                  req = store[type](args1[i]);
                  req._reqno = i;
                  req.onerror = errorHandler;
                }
              }
            }

            var done = function done(event) {
              var lastResult = event.target.result;
              if (results) results[length - 1] = lastResult;
              resolve({
                numFailures: numFailures,
                failures: failures,
                results: results,
                lastResult: lastResult
              });
            };

            req.onerror = function (event) {
              errorHandler(event);
              done(event);
            };

            req.onsuccess = done;
          });
        }

        function openCursor(_a) {
          var trans = _a.trans,
              values = _a.values,
              query = _a.query,
              reverse = _a.reverse,
              unique = _a.unique;
          return new Promise(function (resolve, reject) {
            resolve = wrap(resolve);
            var index = query.index,
                range = query.range;
            var store = trans.objectStore(tableName);
            var source = index.isPrimaryKey ? store : store.index(index.name);
            var direction = reverse ? unique ? "prevunique" : "prev" : unique ? "nextunique" : "next";
            var req = values || !('openKeyCursor' in source) ? source.openCursor(makeIDBKeyRange(range), direction) : source.openKeyCursor(makeIDBKeyRange(range), direction);
            req.onerror = eventRejectHandler(reject);
            req.onsuccess = wrap(function (ev) {
              var cursor = req.result;

              if (!cursor) {
                resolve(null);
                return;
              }

              cursor.___id = ++_id_counter;
              cursor.done = false;

              var _cursorContinue = cursor["continue"].bind(cursor);

              var _cursorContinuePrimaryKey = cursor.continuePrimaryKey;
              if (_cursorContinuePrimaryKey) _cursorContinuePrimaryKey = _cursorContinuePrimaryKey.bind(cursor);

              var _cursorAdvance = cursor.advance.bind(cursor);

              var doThrowCursorIsNotStarted = function doThrowCursorIsNotStarted() {
                throw new Error("Cursor not started");
              };

              var doThrowCursorIsStopped = function doThrowCursorIsStopped() {
                throw new Error("Cursor not stopped");
              };

              cursor.trans = trans;
              cursor.stop = cursor["continue"] = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsNotStarted;
              cursor.fail = wrap(reject);

              cursor.next = function () {
                var _this = this;

                var gotOne = 1;
                return this.start(function () {
                  return gotOne-- ? _this["continue"]() : _this.stop();
                }).then(function () {
                  return _this;
                });
              };

              cursor.start = function (callback) {
                var iterationPromise = new Promise(function (resolveIteration, rejectIteration) {
                  resolveIteration = wrap(resolveIteration);
                  req.onerror = eventRejectHandler(rejectIteration);
                  cursor.fail = rejectIteration;

                  cursor.stop = function (value) {
                    cursor.stop = cursor["continue"] = cursor.continuePrimaryKey = cursor.advance = doThrowCursorIsStopped;
                    resolveIteration(value);
                  };
                });

                var guardedCallback = function guardedCallback() {
                  if (req.result) {
                    try {
                      callback();
                    } catch (err) {
                      cursor.fail(err);
                    }
                  } else {
                    cursor.done = true;

                    cursor.start = function () {
                      throw new Error("Cursor behind last entry");
                    };

                    cursor.stop();
                  }
                };

                req.onsuccess = wrap(function (ev) {
                  req.onsuccess = guardedCallback;
                  guardedCallback();
                });
                cursor["continue"] = _cursorContinue;
                cursor.continuePrimaryKey = _cursorContinuePrimaryKey;
                cursor.advance = _cursorAdvance;
                guardedCallback();
                return iterationPromise;
              };

              resolve(cursor);
            }, reject);
          });
        }

        function query(hasGetAll) {
          return function (request) {
            return new Promise(function (resolve, reject) {
              resolve = wrap(resolve);
              var trans = request.trans,
                  values = request.values,
                  limit = request.limit,
                  query = request.query;
              var nonInfinitLimit = limit === Infinity ? undefined : limit;
              var index = query.index,
                  range = query.range;
              var store = trans.objectStore(tableName);
              var source = index.isPrimaryKey ? store : store.index(index.name);
              var idbKeyRange = makeIDBKeyRange(range);
              if (limit === 0) return resolve({
                result: []
              });

              if (hasGetAll) {
                var req = values ? source.getAll(idbKeyRange, nonInfinitLimit) : source.getAllKeys(idbKeyRange, nonInfinitLimit);

                req.onsuccess = function (event) {
                  return resolve({
                    result: event.target.result
                  });
                };

                req.onerror = eventRejectHandler(reject);
              } else {
                var count_1 = 0;
                var req_1 = values || !('openKeyCursor' in source) ? source.openCursor(idbKeyRange) : source.openKeyCursor(idbKeyRange);
                var result_1 = [];

                req_1.onsuccess = function (event) {
                  var cursor = req_1.result;
                  if (!cursor) return resolve({
                    result: result_1
                  });
                  result_1.push(values ? cursor.value : cursor.primaryKey);
                  if (++count_1 === limit) return resolve({
                    result: result_1
                  });
                  cursor["continue"]();
                };

                req_1.onerror = eventRejectHandler(reject);
              }
            });
          };
        }

        return {
          name: tableName,
          schema: tableSchema,
          mutate: mutate,
          getMany: function getMany(_a) {
            var trans = _a.trans,
                keys$$1 = _a.keys;
            return new Promise(function (resolve, reject) {
              resolve = wrap(resolve);
              var store = trans.objectStore(tableName);
              var length = keys$$1.length;
              var result = new Array(length);
              var keyCount = 0;
              var callbackCount = 0;
              var valueCount = 0;
              var req;

              var successHandler = function successHandler(event) {
                var req = event.target;
                if ((result[req._pos] = req.result) != null) ++valueCount;
                if (++callbackCount === keyCount) resolve(result);
              };

              var errorHandler = eventRejectHandler(reject);

              for (var i = 0; i < length; ++i) {
                var key = keys$$1[i];

                if (key != null) {
                  req = store.get(keys$$1[i]);
                  req._pos = i;
                  req.onsuccess = successHandler;
                  req.onerror = errorHandler;
                  ++keyCount;
                }
              }

              if (keyCount === 0) resolve(result);
            });
          },
          get: function get(_a) {
            var trans = _a.trans,
                key = _a.key;
            return new Promise(function (resolve, reject) {
              resolve = wrap(resolve);
              var store = trans.objectStore(tableName);
              var req = store.get(key);

              req.onsuccess = function (event) {
                return resolve(event.target.result);
              };

              req.onerror = eventRejectHandler(reject);
            });
          },
          query: query(hasGetAll),
          openCursor: openCursor,
          count: function count(_a) {
            var query = _a.query,
                trans = _a.trans;
            var index = query.index,
                range = query.range;
            return new Promise(function (resolve, reject) {
              var store = trans.objectStore(tableName);
              var source = index.isPrimaryKey ? store : store.index(index.name);
              var idbKeyRange = makeIDBKeyRange(range);
              var req = idbKeyRange ? source.count(idbKeyRange) : source.count();
              req.onsuccess = wrap(function (ev) {
                return resolve(ev.target.result);
              });
              req.onerror = eventRejectHandler(reject);
            });
          }
        };
      }

      var _a = extractSchema(db, tmpTrans),
          schema = _a.schema,
          hasGetAll = _a.hasGetAll;

      var tables = schema.tables.map(function (tableSchema) {
        return createDbCoreTable(tableSchema);
      });
      var tableMap = {};
      tables.forEach(function (table) {
        return tableMap[table.name] = table;
      });
      return {
        stack: "dbcore",
        transaction: db.transaction.bind(db),
        table: function table(name) {
          var result = tableMap[name];
          if (!result) throw new Error("Table '" + name + "' not found");
          return tableMap[name];
        },
        cmp: cmp,
        MIN_KEY: -Infinity,
        MAX_KEY: getMaxKey(IdbKeyRange),
        schema: schema
      };
    }

    function createMiddlewareStack(stackImpl, middlewares) {
      return middlewares.reduce(function (down, _a) {
        var create = _a.create;
        return _assign(_assign({}, down), create(down));
      }, stackImpl);
    }

    function createMiddlewareStacks(middlewares, idbdb, _a, tmpTrans) {
      var IDBKeyRange = _a.IDBKeyRange,
          indexedDB = _a.indexedDB;
      var dbcore = createMiddlewareStack(createDBCore(idbdb, indexedDB, IDBKeyRange, tmpTrans), middlewares.dbcore);
      return {
        dbcore: dbcore
      };
    }

    function generateMiddlewareStacks(db, tmpTrans) {
      var idbdb = tmpTrans.db;
      var stacks = createMiddlewareStacks(db._middlewares, idbdb, db._deps, tmpTrans);
      db.core = stacks.dbcore;
      db.tables.forEach(function (table) {
        var tableName = table.name;

        if (db.core.schema.tables.some(function (tbl) {
          return tbl.name === tableName;
        })) {
          table.core = db.core.table(tableName);

          if (db[tableName] instanceof db.Table) {
            db[tableName].core = table.core;
          }
        }
      });
    }

    function setApiOnPlace(db, objs, tableNames, dbschema) {
      tableNames.forEach(function (tableName) {
        var schema = dbschema[tableName];
        objs.forEach(function (obj) {
          if (!(tableName in obj)) {
            if (obj === db.Transaction.prototype || obj instanceof db.Transaction) {
              setProp(obj, tableName, {
                get: function get() {
                  return this.table(tableName);
                },
                set: function set(value) {
                  defineProperty(this, tableName, {
                    value: value,
                    writable: true,
                    configurable: true,
                    enumerable: true
                  });
                }
              });
            } else {
              obj[tableName] = new db.Table(tableName, schema);
            }
          }
        });
      });
    }

    function removeTablesApi(db, objs) {
      objs.forEach(function (obj) {
        for (var key in obj) {
          if (obj[key] instanceof db.Table) delete obj[key];
        }
      });
    }

    function lowerVersionFirst(a, b) {
      return a._cfg.version - b._cfg.version;
    }

    function runUpgraders(db, oldVersion, idbUpgradeTrans, reject) {
      var globalSchema = db._dbSchema;

      var trans = db._createTransaction('readwrite', db._storeNames, globalSchema);

      trans.create(idbUpgradeTrans);

      trans._completion["catch"](reject);

      var rejectTransaction = trans._reject.bind(trans);

      var transless = PSD.transless || PSD;
      newScope(function () {
        PSD.trans = trans;
        PSD.transless = transless;

        if (oldVersion === 0) {
          keys(globalSchema).forEach(function (tableName) {
            createTable(idbUpgradeTrans, tableName, globalSchema[tableName].primKey, globalSchema[tableName].indexes);
          });
          generateMiddlewareStacks(db, idbUpgradeTrans);
          DexiePromise.follow(function () {
            return db.on.populate.fire(trans);
          })["catch"](rejectTransaction);
        } else updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans)["catch"](rejectTransaction);
      });
    }

    function updateTablesAndIndexes(db, oldVersion, trans, idbUpgradeTrans) {
      var queue = [];
      var versions = db._versions;
      var globalSchema = db._dbSchema = buildGlobalSchema(db, db.idbdb, idbUpgradeTrans);
      var anyContentUpgraderHasRun = false;
      var versToRun = versions.filter(function (v) {
        return v._cfg.version >= oldVersion;
      });
      versToRun.forEach(function (version) {
        queue.push(function () {
          var oldSchema = globalSchema;
          var newSchema = version._cfg.dbschema;
          adjustToExistingIndexNames(db, oldSchema, idbUpgradeTrans);
          adjustToExistingIndexNames(db, newSchema, idbUpgradeTrans);
          globalSchema = db._dbSchema = newSchema;
          var diff = getSchemaDiff(oldSchema, newSchema);
          diff.add.forEach(function (tuple) {
            createTable(idbUpgradeTrans, tuple[0], tuple[1].primKey, tuple[1].indexes);
          });
          diff.change.forEach(function (change) {
            if (change.recreate) {
              throw new exceptions.Upgrade("Not yet support for changing primary key");
            } else {
              var store_1 = idbUpgradeTrans.objectStore(change.name);
              change.add.forEach(function (idx) {
                return addIndex(store_1, idx);
              });
              change.change.forEach(function (idx) {
                store_1.deleteIndex(idx.name);
                addIndex(store_1, idx);
              });
              change.del.forEach(function (idxName) {
                return store_1.deleteIndex(idxName);
              });
            }
          });
          var contentUpgrade = version._cfg.contentUpgrade;

          if (contentUpgrade && version._cfg.version > oldVersion) {
            generateMiddlewareStacks(db, idbUpgradeTrans);
            anyContentUpgraderHasRun = true;
            var upgradeSchema_1 = shallowClone(newSchema);
            diff.del.forEach(function (table) {
              upgradeSchema_1[table] = oldSchema[table];
            });
            removeTablesApi(db, [db.Transaction.prototype]);
            setApiOnPlace(db, [db.Transaction.prototype], keys(upgradeSchema_1), upgradeSchema_1);
            trans.schema = upgradeSchema_1;
            var contentUpgradeIsAsync_1 = isAsyncFunction(contentUpgrade);

            if (contentUpgradeIsAsync_1) {
              incrementExpectedAwaits();
            }

            var returnValue_1;
            var promiseFollowed = DexiePromise.follow(function () {
              returnValue_1 = contentUpgrade(trans);

              if (returnValue_1) {
                if (contentUpgradeIsAsync_1) {
                  var decrementor = decrementExpectedAwaits.bind(null, null);
                  returnValue_1.then(decrementor, decrementor);
                }
              }
            });
            return returnValue_1 && typeof returnValue_1.then === 'function' ? DexiePromise.resolve(returnValue_1) : promiseFollowed.then(function () {
              return returnValue_1;
            });
          }
        });
        queue.push(function (idbtrans) {
          if (!anyContentUpgraderHasRun || !hasIEDeleteObjectStoreBug) {
            var newSchema = version._cfg.dbschema;
            deleteRemovedTables(newSchema, idbtrans);
          }

          removeTablesApi(db, [db.Transaction.prototype]);
          setApiOnPlace(db, [db.Transaction.prototype], db._storeNames, db._dbSchema);
          trans.schema = db._dbSchema;
        });
      });

      function runQueue() {
        return queue.length ? DexiePromise.resolve(queue.shift()(trans.idbtrans)).then(runQueue) : DexiePromise.resolve();
      }

      return runQueue().then(function () {
        createMissingTables(globalSchema, idbUpgradeTrans);
      });
    }

    function getSchemaDiff(oldSchema, newSchema) {
      var diff = {
        del: [],
        add: [],
        change: []
      };
      var table;

      for (table in oldSchema) {
        if (!newSchema[table]) diff.del.push(table);
      }

      for (table in newSchema) {
        var oldDef = oldSchema[table],
            newDef = newSchema[table];

        if (!oldDef) {
          diff.add.push([table, newDef]);
        } else {
          var change = {
            name: table,
            def: newDef,
            recreate: false,
            del: [],
            add: [],
            change: []
          };

          if (oldDef.primKey.src !== newDef.primKey.src && !isIEOrEdge) {
            change.recreate = true;
            diff.change.push(change);
          } else {
            var oldIndexes = oldDef.idxByName;
            var newIndexes = newDef.idxByName;
            var idxName = void 0;

            for (idxName in oldIndexes) {
              if (!newIndexes[idxName]) change.del.push(idxName);
            }

            for (idxName in newIndexes) {
              var oldIdx = oldIndexes[idxName],
                  newIdx = newIndexes[idxName];
              if (!oldIdx) change.add.push(newIdx);else if (oldIdx.src !== newIdx.src) change.change.push(newIdx);
            }

            if (change.del.length > 0 || change.add.length > 0 || change.change.length > 0) {
              diff.change.push(change);
            }
          }
        }
      }

      return diff;
    }

    function createTable(idbtrans, tableName, primKey, indexes) {
      var store = idbtrans.db.createObjectStore(tableName, primKey.keyPath ? {
        keyPath: primKey.keyPath,
        autoIncrement: primKey.auto
      } : {
        autoIncrement: primKey.auto
      });
      indexes.forEach(function (idx) {
        return addIndex(store, idx);
      });
      return store;
    }

    function createMissingTables(newSchema, idbtrans) {
      keys(newSchema).forEach(function (tableName) {
        if (!idbtrans.db.objectStoreNames.contains(tableName)) {
          createTable(idbtrans, tableName, newSchema[tableName].primKey, newSchema[tableName].indexes);
        }
      });
    }

    function deleteRemovedTables(newSchema, idbtrans) {
      for (var i = 0; i < idbtrans.db.objectStoreNames.length; ++i) {
        var storeName = idbtrans.db.objectStoreNames[i];

        if (newSchema[storeName] == null) {
          idbtrans.db.deleteObjectStore(storeName);
        }
      }
    }

    function addIndex(store, idx) {
      store.createIndex(idx.name, idx.keyPath, {
        unique: idx.unique,
        multiEntry: idx.multi
      });
    }

    function buildGlobalSchema(db, idbdb, tmpTrans) {
      var globalSchema = {};
      var dbStoreNames = slice(idbdb.objectStoreNames, 0);
      dbStoreNames.forEach(function (storeName) {
        var store = tmpTrans.objectStore(storeName);
        var keyPath = store.keyPath;
        var primKey = createIndexSpec(nameFromKeyPath(keyPath), keyPath || "", false, false, !!store.autoIncrement, keyPath && typeof keyPath !== "string", true);
        var indexes = [];

        for (var j = 0; j < store.indexNames.length; ++j) {
          var idbindex = store.index(store.indexNames[j]);
          keyPath = idbindex.keyPath;
          var index = createIndexSpec(idbindex.name, keyPath, !!idbindex.unique, !!idbindex.multiEntry, false, keyPath && typeof keyPath !== "string", false);
          indexes.push(index);
        }

        globalSchema[storeName] = createTableSchema(storeName, primKey, indexes);
      });
      return globalSchema;
    }

    function readGlobalSchema(db, idbdb, tmpTrans) {
      db.verno = idbdb.version / 10;
      var globalSchema = db._dbSchema = buildGlobalSchema(db, idbdb, tmpTrans);
      db._storeNames = slice(idbdb.objectStoreNames, 0);
      setApiOnPlace(db, [db._allTables], keys(globalSchema), globalSchema);
    }

    function adjustToExistingIndexNames(db, schema, idbtrans) {
      var storeNames = idbtrans.db.objectStoreNames;

      for (var i = 0; i < storeNames.length; ++i) {
        var storeName = storeNames[i];
        var store = idbtrans.objectStore(storeName);
        db._hasGetAll = 'getAll' in store;

        for (var j = 0; j < store.indexNames.length; ++j) {
          var indexName = store.indexNames[j];
          var keyPath = store.index(indexName).keyPath;
          var dexieName = typeof keyPath === 'string' ? keyPath : "[" + slice(keyPath).join('+') + "]";

          if (schema[storeName]) {
            var indexSpec = schema[storeName].idxByName[dexieName];

            if (indexSpec) {
              indexSpec.name = indexName;
              delete schema[storeName].idxByName[dexieName];
              schema[storeName].idxByName[indexName] = indexSpec;
            }
          }
        }
      }

      if (typeof navigator !== 'undefined' && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && _global.WorkerGlobalScope && _global instanceof _global.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) {
        db._hasGetAll = false;
      }
    }

    function parseIndexSyntax(primKeyAndIndexes) {
      return primKeyAndIndexes.split(',').map(function (index, indexNum) {
        index = index.trim();
        var name = index.replace(/([&*]|\+\+)/g, "");
        var keyPath = /^\[/.test(name) ? name.match(/^\[(.*)\]$/)[1].split('+') : name;
        return createIndexSpec(name, keyPath || null, /\&/.test(index), /\*/.test(index), /\+\+/.test(index), isArray(keyPath), indexNum === 0);
      });
    }

    var Version = function () {
      function Version() {}

      Version.prototype._parseStoresSpec = function (stores, outSchema) {
        keys(stores).forEach(function (tableName) {
          if (stores[tableName] !== null) {
            var indexes = parseIndexSyntax(stores[tableName]);
            var primKey = indexes.shift();
            if (primKey.multi) throw new exceptions.Schema("Primary key cannot be multi-valued");
            indexes.forEach(function (idx) {
              if (idx.auto) throw new exceptions.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!idx.keyPath) throw new exceptions.Schema("Index must have a name and cannot be an empty string");
            });
            outSchema[tableName] = createTableSchema(tableName, primKey, indexes);
          }
        });
      };

      Version.prototype.stores = function (stores) {
        var db = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? extend(this._cfg.storesSource, stores) : stores;
        var versions = db._versions;
        var storesSpec = {};
        var dbschema = {};
        versions.forEach(function (version) {
          extend(storesSpec, version._cfg.storesSource);
          dbschema = version._cfg.dbschema = {};

          version._parseStoresSpec(storesSpec, dbschema);
        });
        db._dbSchema = dbschema;
        removeTablesApi(db, [db._allTables, db, db.Transaction.prototype]);
        setApiOnPlace(db, [db._allTables, db, db.Transaction.prototype, this._cfg.tables], keys(dbschema), dbschema);
        db._storeNames = keys(dbschema);
        return this;
      };

      Version.prototype.upgrade = function (upgradeFunction) {
        this._cfg.contentUpgrade = upgradeFunction;
        return this;
      };

      return Version;
    }();

    function createVersionConstructor(db) {
      return makeClassConstructor(Version.prototype, function Version$$1(versionNumber) {
        this.db = db;
        this._cfg = {
          version: versionNumber,
          storesSource: null,
          dbschema: {},
          tables: {},
          contentUpgrade: null
        };
      });
    }

    var databaseEnumerator;

    function DatabaseEnumerator(indexedDB) {
      var hasDatabasesNative = indexedDB && typeof indexedDB.databases === 'function';
      var dbNamesTable;

      if (!hasDatabasesNative) {
        var db = new Dexie(DBNAMES_DB, {
          addons: []
        });
        db.version(1).stores({
          dbnames: 'name'
        });
        dbNamesTable = db.table('dbnames');
      }

      return {
        getDatabaseNames: function getDatabaseNames() {
          return hasDatabasesNative ? DexiePromise.resolve(indexedDB.databases()).then(function (infos) {
            return infos.map(function (info) {
              return info.name;
            }).filter(function (name) {
              return name !== DBNAMES_DB;
            });
          }) : dbNamesTable.toCollection().primaryKeys();
        },
        add: function add(name) {
          return !hasDatabasesNative && name !== DBNAMES_DB && dbNamesTable.put({
            name: name
          })["catch"](nop);
        },
        remove: function remove(name) {
          return !hasDatabasesNative && name !== DBNAMES_DB && dbNamesTable["delete"](name)["catch"](nop);
        }
      };
    }

    function initDatabaseEnumerator(indexedDB) {
      try {
        databaseEnumerator = DatabaseEnumerator(indexedDB);
      } catch (e) {}
    }

    function vip(fn) {
      return newScope(function () {
        PSD.letThrough = true;
        return fn();
      });
    }

    function dexieOpen(db) {
      var state = db._state;
      var indexedDB = db._deps.indexedDB;
      if (state.isBeingOpened || db.idbdb) return state.dbReadyPromise.then(function () {
        return state.dbOpenError ? rejection(state.dbOpenError) : db;
      });
      debug && (state.openCanceller._stackHolder = getErrorWithStack());
      state.isBeingOpened = true;
      state.dbOpenError = null;
      state.openComplete = false;
      var resolveDbReady = state.dbReadyResolve,
          upgradeTransaction = null;
      return DexiePromise.race([state.openCanceller, new DexiePromise(function (resolve, reject) {
        if (!indexedDB) throw new exceptions.MissingAPI("indexedDB API not found. If using IE10+, make sure to run your code on a server URL " + "(not locally). If using old Safari versions, make sure to include indexedDB polyfill.");
        var dbName = db.name;
        var req = state.autoSchema ? indexedDB.open(dbName) : indexedDB.open(dbName, Math.round(db.verno * 10));
        if (!req) throw new exceptions.MissingAPI("IndexedDB API not available");
        req.onerror = eventRejectHandler(reject);
        req.onblocked = wrap(db._fireOnBlocked);
        req.onupgradeneeded = wrap(function (e) {
          upgradeTransaction = req.transaction;

          if (state.autoSchema && !db._options.allowEmptyDB) {
            req.onerror = preventDefault;
            upgradeTransaction.abort();
            req.result.close();
            var delreq = indexedDB.deleteDatabase(dbName);
            delreq.onsuccess = delreq.onerror = wrap(function () {
              reject(new exceptions.NoSuchDatabase("Database " + dbName + " doesnt exist"));
            });
          } else {
            upgradeTransaction.onerror = eventRejectHandler(reject);
            var oldVer = e.oldVersion > Math.pow(2, 62) ? 0 : e.oldVersion;
            db.idbdb = req.result;
            runUpgraders(db, oldVer / 10, upgradeTransaction, reject);
          }
        }, reject);
        req.onsuccess = wrap(function () {
          upgradeTransaction = null;
          var idbdb = db.idbdb = req.result;
          var objectStoreNames = slice(idbdb.objectStoreNames);
          if (objectStoreNames.length > 0) try {
            var tmpTrans = idbdb.transaction(safariMultiStoreFix(objectStoreNames), 'readonly');
            if (state.autoSchema) readGlobalSchema(db, idbdb, tmpTrans);else adjustToExistingIndexNames(db, db._dbSchema, tmpTrans);
            generateMiddlewareStacks(db, tmpTrans);
          } catch (e) {}
          connections.push(db);
          idbdb.onversionchange = wrap(function (ev) {
            state.vcFired = true;
            db.on("versionchange").fire(ev);
          });
          databaseEnumerator.add(dbName);
          resolve();
        }, reject);
      })]).then(function () {
        state.onReadyBeingFired = [];
        return DexiePromise.resolve(vip(db.on.ready.fire)).then(function fireRemainders() {
          if (state.onReadyBeingFired.length > 0) {
            var remainders = state.onReadyBeingFired.reduce(promisableChain, nop);
            state.onReadyBeingFired = [];
            return DexiePromise.resolve(vip(remainders)).then(fireRemainders);
          }
        });
      })["finally"](function () {
        state.onReadyBeingFired = null;
      }).then(function () {
        state.isBeingOpened = false;
        return db;
      })["catch"](function (err) {
        try {
          upgradeTransaction && upgradeTransaction.abort();
        } catch (e) {}

        state.isBeingOpened = false;
        db.close();
        state.dbOpenError = err;
        return rejection(state.dbOpenError);
      })["finally"](function () {
        state.openComplete = true;
        resolveDbReady();
      });
    }

    function awaitIterator(iterator) {
      var callNext = function callNext(result) {
        return iterator.next(result);
      },
          doThrow = function doThrow(error) {
        return iterator["throw"](error);
      },
          onSuccess = step(callNext),
          onError = step(doThrow);

      function step(getNext) {
        return function (val) {
          var next = getNext(val),
              value = next.value;
          return next.done ? value : !value || typeof value.then !== 'function' ? isArray(value) ? Promise.all(value).then(onSuccess, onError) : onSuccess(value) : value.then(onSuccess, onError);
        };
      }

      return step(callNext)();
    }

    function extractTransactionArgs(mode, _tableArgs_, scopeFunc) {
      var i = arguments.length;
      if (i < 2) throw new exceptions.InvalidArgument("Too few arguments");
      var args = new Array(i - 1);

      while (--i) {
        args[i - 1] = arguments[i];
      }

      scopeFunc = args.pop();
      var tables = flatten(args);
      return [mode, tables, scopeFunc];
    }

    function enterTransactionScope(db, mode, storeNames, parentTransaction, scopeFunc) {
      return DexiePromise.resolve().then(function () {
        var transless = PSD.transless || PSD;

        var trans = db._createTransaction(mode, storeNames, db._dbSchema, parentTransaction);

        var zoneProps = {
          trans: trans,
          transless: transless
        };

        if (parentTransaction) {
          trans.idbtrans = parentTransaction.idbtrans;
        } else {
          trans.create();
        }

        var scopeFuncIsAsync = isAsyncFunction(scopeFunc);

        if (scopeFuncIsAsync) {
          incrementExpectedAwaits();
        }

        var returnValue;
        var promiseFollowed = DexiePromise.follow(function () {
          returnValue = scopeFunc.call(trans, trans);

          if (returnValue) {
            if (scopeFuncIsAsync) {
              var decrementor = decrementExpectedAwaits.bind(null, null);
              returnValue.then(decrementor, decrementor);
            } else if (typeof returnValue.next === 'function' && typeof returnValue["throw"] === 'function') {
              returnValue = awaitIterator(returnValue);
            }
          }
        }, zoneProps);
        return (returnValue && typeof returnValue.then === 'function' ? DexiePromise.resolve(returnValue).then(function (x) {
          return trans.active ? x : rejection(new exceptions.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
        }) : promiseFollowed.then(function () {
          return returnValue;
        })).then(function (x) {
          if (parentTransaction) trans._resolve();
          return trans._completion.then(function () {
            return x;
          });
        })["catch"](function (e) {
          trans._reject(e);

          return rejection(e);
        });
      });
    }

    function pad(a, value, count) {
      var result = isArray(a) ? a.slice() : [a];

      for (var i = 0; i < count; ++i) {
        result.push(value);
      }

      return result;
    }

    function createVirtualIndexMiddleware(down) {
      return _assign(_assign({}, down), {
        table: function table(tableName) {
          var table = down.table(tableName);
          var schema = table.schema;
          var indexLookup = {};
          var allVirtualIndexes = [];

          function addVirtualIndexes(keyPath, keyTail, lowLevelIndex) {
            var keyPathAlias = getKeyPathAlias(keyPath);
            var indexList = indexLookup[keyPathAlias] = indexLookup[keyPathAlias] || [];
            var keyLength = keyPath == null ? 0 : typeof keyPath === 'string' ? 1 : keyPath.length;
            var isVirtual = keyTail > 0;

            var virtualIndex = _assign(_assign({}, lowLevelIndex), {
              isVirtual: isVirtual,
              isPrimaryKey: !isVirtual && lowLevelIndex.isPrimaryKey,
              keyTail: keyTail,
              keyLength: keyLength,
              extractKey: getKeyExtractor(keyPath),
              unique: !isVirtual && lowLevelIndex.unique
            });

            indexList.push(virtualIndex);

            if (!virtualIndex.isPrimaryKey) {
              allVirtualIndexes.push(virtualIndex);
            }

            if (keyLength > 1) {
              var virtualKeyPath = keyLength === 2 ? keyPath[0] : keyPath.slice(0, keyLength - 1);
              addVirtualIndexes(virtualKeyPath, keyTail + 1, lowLevelIndex);
            }

            indexList.sort(function (a, b) {
              return a.keyTail - b.keyTail;
            });
            return virtualIndex;
          }

          var primaryKey = addVirtualIndexes(schema.primaryKey.keyPath, 0, schema.primaryKey);
          indexLookup[":id"] = [primaryKey];

          for (var _i = 0, _a = schema.indexes; _i < _a.length; _i++) {
            var index = _a[_i];
            addVirtualIndexes(index.keyPath, 0, index);
          }

          function findBestIndex(keyPath) {
            var result = indexLookup[getKeyPathAlias(keyPath)];
            return result && result[0];
          }

          function translateRange(range, keyTail) {
            return {
              type: range.type === 1 ? 2 : range.type,
              lower: pad(range.lower, range.lowerOpen ? down.MAX_KEY : down.MIN_KEY, keyTail),
              lowerOpen: true,
              upper: pad(range.upper, range.upperOpen ? down.MIN_KEY : down.MAX_KEY, keyTail),
              upperOpen: true
            };
          }

          function translateRequest(req) {
            var index = req.query.index;
            return index.isVirtual ? _assign(_assign({}, req), {
              query: {
                index: index,
                range: translateRange(req.query.range, index.keyTail)
              }
            }) : req;
          }

          var result = _assign(_assign({}, table), {
            schema: _assign(_assign({}, schema), {
              primaryKey: primaryKey,
              indexes: allVirtualIndexes,
              getIndexByKeyPath: findBestIndex
            }),
            count: function count(req) {
              return table.count(translateRequest(req));
            },
            query: function query(req) {
              return table.query(translateRequest(req));
            },
            openCursor: function openCursor(req) {
              var _a = req.query.index,
                  keyTail = _a.keyTail,
                  isVirtual = _a.isVirtual,
                  keyLength = _a.keyLength;
              if (!isVirtual) return table.openCursor(req);

              function createVirtualCursor(cursor) {
                function _continue(key) {
                  key != null ? cursor["continue"](pad(key, req.reverse ? down.MAX_KEY : down.MIN_KEY, keyTail)) : req.unique ? cursor["continue"](pad(cursor.key, req.reverse ? down.MIN_KEY : down.MAX_KEY, keyTail)) : cursor["continue"]();
                }

                var virtualCursor = Object.create(cursor, {
                  "continue": {
                    value: _continue
                  },
                  continuePrimaryKey: {
                    value: function value(key, primaryKey) {
                      cursor.continuePrimaryKey(pad(key, down.MAX_KEY, keyTail), primaryKey);
                    }
                  },
                  key: {
                    get: function get() {
                      var key = cursor.key;
                      return keyLength === 1 ? key[0] : key.slice(0, keyLength);
                    }
                  },
                  value: {
                    get: function get() {
                      return cursor.value;
                    }
                  }
                });
                return virtualCursor;
              }

              return table.openCursor(translateRequest(req)).then(function (cursor) {
                return cursor && createVirtualCursor(cursor);
              });
            }
          });

          return result;
        }
      });
    }

    var virtualIndexMiddleware = {
      stack: "dbcore",
      name: "VirtualIndexMiddleware",
      level: 1,
      create: createVirtualIndexMiddleware
    };
    var hooksMiddleware = {
      stack: "dbcore",
      name: "HooksMiddleware",
      level: 2,
      create: function create(downCore) {
        return _assign(_assign({}, downCore), {
          table: function table(tableName) {
            var downTable = downCore.table(tableName);
            var primaryKey = downTable.schema.primaryKey;

            var tableMiddleware = _assign(_assign({}, downTable), {
              mutate: function mutate(req) {
                var dxTrans = PSD.trans;
                var _a = dxTrans.table(tableName).hook,
                    deleting = _a.deleting,
                    creating = _a.creating,
                    updating = _a.updating;

                switch (req.type) {
                  case 'add':
                    if (creating.fire === nop) break;
                    return dxTrans._promise('readwrite', function () {
                      return addPutOrDelete(req);
                    }, true);

                  case 'put':
                    if (creating.fire === nop && updating.fire === nop) break;
                    return dxTrans._promise('readwrite', function () {
                      return addPutOrDelete(req);
                    }, true);

                  case 'delete':
                    if (deleting.fire === nop) break;
                    return dxTrans._promise('readwrite', function () {
                      return addPutOrDelete(req);
                    }, true);

                  case 'deleteRange':
                    if (deleting.fire === nop) break;
                    return dxTrans._promise('readwrite', function () {
                      return deleteRange(req);
                    }, true);
                }

                return downTable.mutate(req);

                function addPutOrDelete(req) {
                  var dxTrans = PSD.trans;
                  var keys$$1 = req.keys || getEffectiveKeys(primaryKey, req);
                  if (!keys$$1) throw new Error("Keys missing");
                  req = req.type === 'add' || req.type === 'put' ? _assign(_assign({}, req), {
                    keys: keys$$1,
                    wantResults: true
                  }) : _assign({}, req);
                  if (req.type !== 'delete') req.values = __spreadArrays(req.values);
                  if (req.keys) req.keys = __spreadArrays(req.keys);
                  return getExistingValues(downTable, req, keys$$1).then(function (existingValues) {
                    var contexts = keys$$1.map(function (key, i) {
                      var existingValue = existingValues[i];
                      var ctx = {
                        onerror: null,
                        onsuccess: null
                      };

                      if (req.type === 'delete') {
                        deleting.fire.call(ctx, key, existingValue, dxTrans);
                      } else if (req.type === 'add' || existingValue === undefined) {
                        var generatedPrimaryKey = creating.fire.call(ctx, key, req.values[i], dxTrans);

                        if (key == null && generatedPrimaryKey != null) {
                          key = generatedPrimaryKey;
                          req.keys[i] = key;

                          if (!primaryKey.outbound) {
                            setByKeyPath(req.values[i], primaryKey.keyPath, key);
                          }
                        }
                      } else {
                        var objectDiff = getObjectDiff(existingValue, req.values[i]);
                        var additionalChanges_1 = updating.fire.call(ctx, objectDiff, key, existingValue, dxTrans);

                        if (additionalChanges_1) {
                          var requestedValue_1 = req.values[i];
                          Object.keys(additionalChanges_1).forEach(function (keyPath) {
                            setByKeyPath(requestedValue_1, keyPath, additionalChanges_1[keyPath]);
                          });
                        }
                      }

                      return ctx;
                    });
                    return downTable.mutate(req).then(function (_a) {
                      var failures = _a.failures,
                          results = _a.results,
                          numFailures = _a.numFailures,
                          lastResult = _a.lastResult;

                      for (var i = 0; i < keys$$1.length; ++i) {
                        var primKey = results ? results[i] : keys$$1[i];
                        var ctx = contexts[i];

                        if (primKey == null) {
                          ctx.onerror && ctx.onerror(failures[i]);
                        } else {
                          ctx.onsuccess && ctx.onsuccess(req.type === 'put' && existingValues[i] ? req.values[i] : primKey);
                        }
                      }

                      return {
                        failures: failures,
                        results: results,
                        numFailures: numFailures,
                        lastResult: lastResult
                      };
                    })["catch"](function (error) {
                      contexts.forEach(function (ctx) {
                        return ctx.onerror && ctx.onerror(error);
                      });
                      return Promise.reject(error);
                    });
                  });
                }

                function deleteRange(req) {
                  return deleteNextChunk(req.trans, req.range, 10000);
                }

                function deleteNextChunk(trans, range, limit) {
                  return downTable.query({
                    trans: trans,
                    values: false,
                    query: {
                      index: primaryKey,
                      range: range
                    },
                    limit: limit
                  }).then(function (_a) {
                    var result = _a.result;
                    return addPutOrDelete({
                      type: 'delete',
                      keys: result,
                      trans: trans
                    }).then(function (res) {
                      if (res.numFailures > 0) return Promise.reject(res.failures[0]);

                      if (result.length < limit) {
                        return {
                          failures: [],
                          numFailures: 0,
                          lastResult: undefined
                        };
                      } else {
                        return deleteNextChunk(trans, _assign(_assign({}, range), {
                          lower: result[result.length - 1],
                          lowerOpen: true
                        }), limit);
                      }
                    });
                  });
                }
              }
            });

            return tableMiddleware;
          }
        });
      }
    };

    var Dexie = function () {
      function Dexie(name, options) {
        var _this = this;

        this._middlewares = {};
        this.verno = 0;
        var deps = Dexie.dependencies;
        this._options = options = _assign({
          addons: Dexie.addons,
          autoOpen: true,
          indexedDB: deps.indexedDB,
          IDBKeyRange: deps.IDBKeyRange
        }, options);
        this._deps = {
          indexedDB: options.indexedDB,
          IDBKeyRange: options.IDBKeyRange
        };
        var addons = options.addons;
        this._dbSchema = {};
        this._versions = [];
        this._storeNames = [];
        this._allTables = {};
        this.idbdb = null;
        var state = {
          dbOpenError: null,
          isBeingOpened: false,
          onReadyBeingFired: null,
          openComplete: false,
          dbReadyResolve: nop,
          dbReadyPromise: null,
          cancelOpen: nop,
          openCanceller: null,
          autoSchema: true
        };
        state.dbReadyPromise = new DexiePromise(function (resolve) {
          state.dbReadyResolve = resolve;
        });
        state.openCanceller = new DexiePromise(function (_, reject) {
          state.cancelOpen = reject;
        });
        this._state = state;
        this.name = name;
        this.on = Events(this, "populate", "blocked", "versionchange", {
          ready: [promisableChain, nop]
        });
        this.on.ready.subscribe = override(this.on.ready.subscribe, function (subscribe) {
          return function (subscriber, bSticky) {
            Dexie.vip(function () {
              var state = _this._state;

              if (state.openComplete) {
                if (!state.dbOpenError) DexiePromise.resolve().then(subscriber);
                if (bSticky) subscribe(subscriber);
              } else if (state.onReadyBeingFired) {
                state.onReadyBeingFired.push(subscriber);
                if (bSticky) subscribe(subscriber);
              } else {
                subscribe(subscriber);
                var db_1 = _this;
                if (!bSticky) subscribe(function unsubscribe() {
                  db_1.on.ready.unsubscribe(subscriber);
                  db_1.on.ready.unsubscribe(unsubscribe);
                });
              }
            });
          };
        });
        this.Collection = createCollectionConstructor(this);
        this.Table = createTableConstructor(this);
        this.Transaction = createTransactionConstructor(this);
        this.Version = createVersionConstructor(this);
        this.WhereClause = createWhereClauseConstructor(this);
        this.on("versionchange", function (ev) {
          if (ev.newVersion > 0) console.warn("Another connection wants to upgrade database '" + _this.name + "'. Closing db now to resume the upgrade.");else console.warn("Another connection wants to delete database '" + _this.name + "'. Closing db now to resume the delete request.");

          _this.close();
        });
        this.on("blocked", function (ev) {
          if (!ev.newVersion || ev.newVersion < ev.oldVersion) console.warn("Dexie.delete('" + _this.name + "') was blocked");else console.warn("Upgrade '" + _this.name + "' blocked by other connection holding version " + ev.oldVersion / 10);
        });
        this._maxKey = getMaxKey(options.IDBKeyRange);

        this._createTransaction = function (mode, storeNames, dbschema, parentTransaction) {
          return new _this.Transaction(mode, storeNames, dbschema, parentTransaction);
        };

        this._fireOnBlocked = function (ev) {
          _this.on("blocked").fire(ev);

          connections.filter(function (c) {
            return c.name === _this.name && c !== _this && !c._state.vcFired;
          }).map(function (c) {
            return c.on("versionchange").fire(ev);
          });
        };

        this.use(virtualIndexMiddleware);
        this.use(hooksMiddleware);
        addons.forEach(function (addon) {
          return addon(_this);
        });
      }

      Dexie.prototype.version = function (versionNumber) {
        if (isNaN(versionNumber) || versionNumber < 0.1) throw new exceptions.Type("Given version is not a positive number");
        versionNumber = Math.round(versionNumber * 10) / 10;
        if (this.idbdb || this._state.isBeingOpened) throw new exceptions.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, versionNumber);
        var versions = this._versions;
        var versionInstance = versions.filter(function (v) {
          return v._cfg.version === versionNumber;
        })[0];
        if (versionInstance) return versionInstance;
        versionInstance = new this.Version(versionNumber);
        versions.push(versionInstance);
        versions.sort(lowerVersionFirst);
        versionInstance.stores({});
        this._state.autoSchema = false;
        return versionInstance;
      };

      Dexie.prototype._whenReady = function (fn) {
        var _this = this;

        return this._state.openComplete || PSD.letThrough ? fn() : new DexiePromise(function (resolve, reject) {
          if (!_this._state.isBeingOpened) {
            if (!_this._options.autoOpen) {
              reject(new exceptions.DatabaseClosed());
              return;
            }

            _this.open()["catch"](nop);
          }

          _this._state.dbReadyPromise.then(resolve, reject);
        }).then(fn);
      };

      Dexie.prototype.use = function (_a) {
        var stack = _a.stack,
            create = _a.create,
            level = _a.level,
            name = _a.name;
        if (name) this.unuse({
          stack: stack,
          name: name
        });
        var middlewares = this._middlewares[stack] || (this._middlewares[stack] = []);
        middlewares.push({
          stack: stack,
          create: create,
          level: level == null ? 10 : level,
          name: name
        });
        middlewares.sort(function (a, b) {
          return a.level - b.level;
        });
        return this;
      };

      Dexie.prototype.unuse = function (_a) {
        var stack = _a.stack,
            name = _a.name,
            create = _a.create;

        if (stack && this._middlewares[stack]) {
          this._middlewares[stack] = this._middlewares[stack].filter(function (mw) {
            return create ? mw.create !== create : name ? mw.name !== name : false;
          });
        }

        return this;
      };

      Dexie.prototype.open = function () {
        return dexieOpen(this);
      };

      Dexie.prototype.close = function () {
        var idx = connections.indexOf(this),
            state = this._state;
        if (idx >= 0) connections.splice(idx, 1);

        if (this.idbdb) {
          try {
            this.idbdb.close();
          } catch (e) {}

          this.idbdb = null;
        }

        this._options.autoOpen = false;
        state.dbOpenError = new exceptions.DatabaseClosed();
        if (state.isBeingOpened) state.cancelOpen(state.dbOpenError);
        state.dbReadyPromise = new DexiePromise(function (resolve) {
          state.dbReadyResolve = resolve;
        });
        state.openCanceller = new DexiePromise(function (_, reject) {
          state.cancelOpen = reject;
        });
      };

      Dexie.prototype["delete"] = function () {
        var _this = this;

        var hasArguments = arguments.length > 0;
        var state = this._state;
        return new DexiePromise(function (resolve, reject) {
          var doDelete = function doDelete() {
            _this.close();

            var req = _this._deps.indexedDB.deleteDatabase(_this.name);

            req.onsuccess = wrap(function () {
              databaseEnumerator.remove(_this.name);
              resolve();
            });
            req.onerror = eventRejectHandler(reject);
            req.onblocked = _this._fireOnBlocked;
          };

          if (hasArguments) throw new exceptions.InvalidArgument("Arguments not allowed in db.delete()");

          if (state.isBeingOpened) {
            state.dbReadyPromise.then(doDelete);
          } else {
            doDelete();
          }
        });
      };

      Dexie.prototype.backendDB = function () {
        return this.idbdb;
      };

      Dexie.prototype.isOpen = function () {
        return this.idbdb !== null;
      };

      Dexie.prototype.hasBeenClosed = function () {
        var dbOpenError = this._state.dbOpenError;
        return dbOpenError && dbOpenError.name === 'DatabaseClosed';
      };

      Dexie.prototype.hasFailed = function () {
        return this._state.dbOpenError !== null;
      };

      Dexie.prototype.dynamicallyOpened = function () {
        return this._state.autoSchema;
      };

      Object.defineProperty(Dexie.prototype, "tables", {
        get: function get() {
          var _this = this;

          return keys(this._allTables).map(function (name) {
            return _this._allTables[name];
          });
        },
        enumerable: true,
        configurable: true
      });

      Dexie.prototype.transaction = function () {
        var args = extractTransactionArgs.apply(this, arguments);
        return this._transaction.apply(this, args);
      };

      Dexie.prototype._transaction = function (mode, tables, scopeFunc) {
        var _this = this;

        var parentTransaction = PSD.trans;
        if (!parentTransaction || parentTransaction.db !== this || mode.indexOf('!') !== -1) parentTransaction = null;
        var onlyIfCompatible = mode.indexOf('?') !== -1;
        mode = mode.replace('!', '').replace('?', '');
        var idbMode, storeNames;

        try {
          storeNames = tables.map(function (table) {
            var storeName = table instanceof _this.Table ? table.name : table;
            if (typeof storeName !== 'string') throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return storeName;
          });
          if (mode == "r" || mode === READONLY) idbMode = READONLY;else if (mode == "rw" || mode == READWRITE) idbMode = READWRITE;else throw new exceptions.InvalidArgument("Invalid transaction mode: " + mode);

          if (parentTransaction) {
            if (parentTransaction.mode === READONLY && idbMode === READWRITE) {
              if (onlyIfCompatible) {
                parentTransaction = null;
              } else throw new exceptions.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
            }

            if (parentTransaction) {
              storeNames.forEach(function (storeName) {
                if (parentTransaction && parentTransaction.storeNames.indexOf(storeName) === -1) {
                  if (onlyIfCompatible) {
                    parentTransaction = null;
                  } else throw new exceptions.SubTransaction("Table " + storeName + " not included in parent transaction.");
                }
              });
            }

            if (onlyIfCompatible && parentTransaction && !parentTransaction.active) {
              parentTransaction = null;
            }
          }
        } catch (e) {
          return parentTransaction ? parentTransaction._promise(null, function (_, reject) {
            reject(e);
          }) : rejection(e);
        }

        var enterTransaction = enterTransactionScope.bind(null, this, idbMode, storeNames, parentTransaction, scopeFunc);
        return parentTransaction ? parentTransaction._promise(idbMode, enterTransaction, "lock") : PSD.trans ? usePSD(PSD.transless, function () {
          return _this._whenReady(enterTransaction);
        }) : this._whenReady(enterTransaction);
      };

      Dexie.prototype.table = function (tableName) {
        if (!hasOwn(this._allTables, tableName)) {
          throw new exceptions.InvalidTable("Table " + tableName + " does not exist");
        }

        return this._allTables[tableName];
      };

      return Dexie;
    }();

    var Dexie$1 = Dexie;
    props(Dexie$1, _assign(_assign({}, fullNameExceptions), {
      "delete": function _delete(databaseName) {
        var db = new Dexie$1(databaseName);
        return db["delete"]();
      },
      exists: function exists(name) {
        return new Dexie$1(name, {
          addons: []
        }).open().then(function (db) {
          db.close();
          return true;
        })["catch"]('NoSuchDatabaseError', function () {
          return false;
        });
      },
      getDatabaseNames: function getDatabaseNames(cb) {
        return databaseEnumerator ? databaseEnumerator.getDatabaseNames().then(cb) : DexiePromise.resolve([]);
      },
      defineClass: function defineClass() {
        function Class(content) {
          extend(this, content);
        }

        return Class;
      },
      ignoreTransaction: function ignoreTransaction(scopeFunc) {
        return PSD.trans ? usePSD(PSD.transless, scopeFunc) : scopeFunc();
      },
      vip: vip,
      async: function async(generatorFn) {
        return function () {
          try {
            var rv = awaitIterator(generatorFn.apply(this, arguments));
            if (!rv || typeof rv.then !== 'function') return DexiePromise.resolve(rv);
            return rv;
          } catch (e) {
            return rejection(e);
          }
        };
      },
      spawn: function spawn(generatorFn, args, thiz) {
        try {
          var rv = awaitIterator(generatorFn.apply(thiz, args || []));
          if (!rv || typeof rv.then !== 'function') return DexiePromise.resolve(rv);
          return rv;
        } catch (e) {
          return rejection(e);
        }
      },
      currentTransaction: {
        get: function get() {
          return PSD.trans || null;
        }
      },
      waitFor: function waitFor(promiseOrFunction, optionalTimeout) {
        var promise = DexiePromise.resolve(typeof promiseOrFunction === 'function' ? Dexie$1.ignoreTransaction(promiseOrFunction) : promiseOrFunction).timeout(optionalTimeout || 60000);
        return PSD.trans ? PSD.trans.waitFor(promise) : promise;
      },
      Promise: DexiePromise,
      debug: {
        get: function get() {
          return debug;
        },
        set: function set(value) {
          setDebug(value, value === 'dexie' ? function () {
            return true;
          } : dexieStackFrameFilter);
        }
      },
      derive: derive,
      extend: extend,
      props: props,
      override: override,
      Events: Events,
      getByKeyPath: getByKeyPath,
      setByKeyPath: setByKeyPath,
      delByKeyPath: delByKeyPath,
      shallowClone: shallowClone,
      deepClone: deepClone,
      getObjectDiff: getObjectDiff,
      asap: asap,
      minKey: minKey,
      addons: [],
      connections: connections,
      errnames: errnames,
      dependencies: function () {
        try {
          return {
            indexedDB: _global.indexedDB || _global.mozIndexedDB || _global.webkitIndexedDB || _global.msIndexedDB,
            IDBKeyRange: _global.IDBKeyRange || _global.webkitIDBKeyRange
          };
        } catch (e) {
          return {
            indexedDB: null,
            IDBKeyRange: null
          };
        }
      }(),
      semVer: DEXIE_VERSION,
      version: DEXIE_VERSION.split('.').map(function (n) {
        return parseInt(n);
      }).reduce(function (p, c, i) {
        return p + c / Math.pow(10, i * 2);
      }),
      "default": Dexie$1,
      Dexie: Dexie$1
    }));
    Dexie$1.maxKey = getMaxKey(Dexie$1.dependencies.IDBKeyRange);
    initDatabaseEnumerator(Dexie.dependencies.indexedDB);
    DexiePromise.rejectionMapper = mapError;
    setDebug(debug, dexieStackFrameFilter);
    /* harmony default export */

    __webpack_exports__["default"] = Dexie; //# sourceMappingURL=dexie.mjs.map

    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/bytesToUuid.js":
  /*!***********************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/bytesToUuid.js ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserBytesToUuidJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /**
     * Convert array of 16 byte values to UUID string format of the form:
     * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
     */


    var byteToHex = [];

    for (var i = 0; i < 256; ++i) {
      byteToHex.push((i + 0x100).toString(16).substr(1));
    }

    function bytesToUuid(buf, offset_) {
      var offset = offset_ || 0; // Note: Be careful editing this code!  It's been tuned for performance
      // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

      return (byteToHex[buf[offset + 0]] + byteToHex[buf[offset + 1]] + byteToHex[buf[offset + 2]] + byteToHex[buf[offset + 3]] + '-' + byteToHex[buf[offset + 4]] + byteToHex[buf[offset + 5]] + '-' + byteToHex[buf[offset + 6]] + byteToHex[buf[offset + 7]] + '-' + byteToHex[buf[offset + 8]] + byteToHex[buf[offset + 9]] + '-' + byteToHex[buf[offset + 10]] + byteToHex[buf[offset + 11]] + byteToHex[buf[offset + 12]] + byteToHex[buf[offset + 13]] + byteToHex[buf[offset + 14]] + byteToHex[buf[offset + 15]]).toLowerCase();
    }
    /* harmony default export */


    __webpack_exports__["default"] = bytesToUuid;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/index.js":
  /*!*****************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
    \*****************************************************/

  /*! exports provided: v1, v3, v4, v5 */

  /***/
  function node_modulesUuidDistEsmBrowserIndexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./v1.js */
    "./node_modules/uuid/dist/esm-browser/v1.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "v1", function () {
      return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"];
    });
    /* harmony import */


    var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./v3.js */
    "./node_modules/uuid/dist/esm-browser/v3.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "v3", function () {
      return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"];
    });
    /* harmony import */


    var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./v4.js */
    "./node_modules/uuid/dist/esm-browser/v4.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "v4", function () {
      return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"];
    });
    /* harmony import */


    var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./v5.js */
    "./node_modules/uuid/dist/esm-browser/v5.js");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "v5", function () {
      return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"];
    });
    /***/

  },

  /***/
  "./node_modules/uuid/dist/esm-browser/md5.js":
  /*!***************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserMd5Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /*
     * Browser-compatible JavaScript MD5
     *
     * Modification of JavaScript MD5
     * https://github.com/blueimp/JavaScript-MD5
     *
     * Copyright 2011, Sebastian Tschan
     * https://blueimp.net
     *
     * Licensed under the MIT license:
     * https://opensource.org/licenses/MIT
     *
     * Based on
     * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
     * Digest Algorithm, as defined in RFC 1321.
     * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
     * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
     * Distributed under the BSD License
     * See http://pajhome.org.uk/crypt/md5 for more info.
     */


    function md5(bytes) {
      if (typeof bytes === 'string') {
        var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

        bytes = new Uint8Array(msg.length);

        for (var i = 0; i < msg.length; ++i) {
          bytes[i] = msg.charCodeAt(i);
        }
      }

      return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
    }
    /*
     * Convert an array of little-endian words to an array of bytes
     */


    function md5ToHexEncodedArray(input) {
      var output = [];
      var length32 = input.length * 32;
      var hexTab = '0123456789abcdef';

      for (var i = 0; i < length32; i += 8) {
        var x = input[i >> 5] >>> i % 32 & 0xff;
        var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
        output.push(hex);
      }

      return output;
    }
    /**
     * Calculate output length with padding and bit length
     */


    function getOutputLength(inputLength8) {
      return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
    }
    /*
     * Calculate the MD5 of an array of little-endian words, and a bit length.
     */


    function wordsToMd5(x, len) {
      /* append padding */
      x[len >> 5] |= 0x80 << len % 32;
      x[getOutputLength(len) - 1] = len;
      var a = 1732584193;
      var b = -271733879;
      var c = -1732584194;
      var d = 271733878;

      for (var i = 0; i < x.length; i += 16) {
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        a = md5ff(a, b, c, d, x[i], 7, -680876936);
        d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
        c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
        b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
        a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
        d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
        c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
        b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
        a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
        d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
        c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
        b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
        a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
        d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
        c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
        b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
        a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
        d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
        c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
        b = md5gg(b, c, d, a, x[i], 20, -373897302);
        a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
        d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
        c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
        b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
        a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
        d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
        c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
        b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
        a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
        d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
        c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
        b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
        a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
        d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
        c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
        b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
        a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
        d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
        c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
        b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
        a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
        d = md5hh(d, a, b, c, x[i], 11, -358537222);
        c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
        b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
        a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
        d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
        c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
        b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
        a = md5ii(a, b, c, d, x[i], 6, -198630844);
        d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
        c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
        b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
        a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
        d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
        c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
        b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
        a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
        d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
        c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
        b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
        a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
        d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
        c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
        b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
        a = safeAdd(a, olda);
        b = safeAdd(b, oldb);
        c = safeAdd(c, oldc);
        d = safeAdd(d, oldd);
      }

      return [a, b, c, d];
    }
    /*
     * Convert an array bytes to an array of little-endian words
     * Characters >255 have their high-byte silently ignored.
     */


    function bytesToWords(input) {
      if (input.length === 0) {
        return [];
      }

      var length8 = input.length * 8;
      var output = new Uint32Array(getOutputLength(length8));

      for (var i = 0; i < length8; i += 8) {
        output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
      }

      return output;
    }
    /*
     * Add integers, wrapping at 2^32. This uses 16-bit operations internally
     * to work around bugs in some JS interpreters.
     */


    function safeAdd(x, y) {
      var lsw = (x & 0xffff) + (y & 0xffff);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 0xffff;
    }
    /*
     * Bitwise rotate a 32-bit number to the left.
     */


    function bitRotateLeft(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    /*
     * These functions implement the four basic operations the algorithm uses.
     */


    function md5cmn(q, a, b, x, s, t) {
      return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
    }

    function md5ff(a, b, c, d, x, s, t) {
      return md5cmn(b & c | ~b & d, a, b, x, s, t);
    }

    function md5gg(a, b, c, d, x, s, t) {
      return md5cmn(b & d | c & ~d, a, b, x, s, t);
    }

    function md5hh(a, b, c, d, x, s, t) {
      return md5cmn(b ^ c ^ d, a, b, x, s, t);
    }

    function md5ii(a, b, c, d, x, s, t) {
      return md5cmn(c ^ (b | ~d), a, b, x, s, t);
    }
    /* harmony default export */


    __webpack_exports__["default"] = md5;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/rng.js":
  /*!***************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserRngJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "default", function () {
      return rng;
    }); // Unique ID creation requires a high quality random # generator. In the browser we therefore
    // require the crypto API and do not support built-in fallback to lower quality random number
    // generators (like Math.random()).
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.


    var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
    var rnds8 = new Uint8Array(16);

    function rng() {
      if (!getRandomValues) {
        throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
      }

      return getRandomValues(rnds8);
    }
    /***/

  },

  /***/
  "./node_modules/uuid/dist/esm-browser/sha1.js":
  /*!****************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserSha1Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__); // Adapted from Chris Veness' SHA1 code at
    // http://www.movable-type.co.uk/scripts/sha1.html


    function f(s, x, y, z) {
      switch (s) {
        case 0:
          return x & y ^ ~x & z;

        case 1:
          return x ^ y ^ z;

        case 2:
          return x & y ^ x & z ^ y & z;

        case 3:
          return x ^ y ^ z;
      }
    }

    function ROTL(x, n) {
      return x << n | x >>> 32 - n;
    }

    function sha1(bytes) {
      var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
      var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

      if (typeof bytes === 'string') {
        var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

        bytes = [];

        for (var i = 0; i < msg.length; ++i) {
          bytes.push(msg.charCodeAt(i));
        }
      }

      bytes.push(0x80);
      var l = bytes.length / 4 + 2;
      var N = Math.ceil(l / 16);
      var M = new Array(N);

      for (var _i = 0; _i < N; ++_i) {
        var arr = new Uint32Array(16);

        for (var j = 0; j < 16; ++j) {
          arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
        }

        M[_i] = arr;
      }

      M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
      M[N - 1][14] = Math.floor(M[N - 1][14]);
      M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

      for (var _i2 = 0; _i2 < N; ++_i2) {
        var W = new Uint32Array(80);

        for (var t = 0; t < 16; ++t) {
          W[t] = M[_i2][t];
        }

        for (var _t = 16; _t < 80; ++_t) {
          W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
        }

        var a = H[0];
        var b = H[1];
        var c = H[2];
        var d = H[3];
        var e = H[4];

        for (var _t2 = 0; _t2 < 80; ++_t2) {
          var s = Math.floor(_t2 / 20);
          var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
          e = d;
          d = c;
          c = ROTL(b, 30) >>> 0;
          b = a;
          a = T;
        }

        H[0] = H[0] + a >>> 0;
        H[1] = H[1] + b >>> 0;
        H[2] = H[2] + c >>> 0;
        H[3] = H[3] + d >>> 0;
        H[4] = H[4] + e >>> 0;
      }

      return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
    }
    /* harmony default export */


    __webpack_exports__["default"] = sha1;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v1.js":
  /*!**************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserV1Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./rng.js */
    "./node_modules/uuid/dist/esm-browser/rng.js");
    /* harmony import */


    var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bytesToUuid.js */
    "./node_modules/uuid/dist/esm-browser/bytesToUuid.js"); // **`v1()` - Generate time-based UUID**
    //
    // Inspired by https://github.com/LiosK/UUID.js
    // and http://docs.python.org/library/uuid.html


    var _nodeId;

    var _clockseq; // Previous uuid creation time


    var _lastMSecs = 0;
    var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

    function v1(options, buf, offset) {
      var i = buf && offset || 0;
      var b = buf || new Array(16);
      options = options || {};
      var node = options.node || _nodeId;
      var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
      // specified.  We do this lazily to minimize issues related to insufficient
      // system entropy.  See #189

      if (node == null || clockseq == null) {
        var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

        if (node == null) {
          // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
          node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
        }

        if (clockseq == null) {
          // Per 4.2.2, randomize (14 bit) clockseq
          clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
        }
      } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
      // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
      // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
      // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


      var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
      // cycle to simulate higher resolution clock

      var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

      var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

      if (dt < 0 && options.clockseq === undefined) {
        clockseq = clockseq + 1 & 0x3fff;
      } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
      // time interval


      if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
        nsecs = 0;
      } // Per 4.2.1.2 Throw error if too many uuids are requested


      if (nsecs >= 10000) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      }

      _lastMSecs = msecs;
      _lastNSecs = nsecs;
      _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

      msecs += 12219292800000; // `time_low`

      var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
      b[i++] = tl >>> 24 & 0xff;
      b[i++] = tl >>> 16 & 0xff;
      b[i++] = tl >>> 8 & 0xff;
      b[i++] = tl & 0xff; // `time_mid`

      var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
      b[i++] = tmh >>> 8 & 0xff;
      b[i++] = tmh & 0xff; // `time_high_and_version`

      b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

      b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

      b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

      b[i++] = clockseq & 0xff; // `node`

      for (var n = 0; n < 6; ++n) {
        b[i + n] = node[n];
      }

      return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
    }
    /* harmony default export */


    __webpack_exports__["default"] = v1;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v3.js":
  /*!**************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserV3Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./v35.js */
    "./node_modules/uuid/dist/esm-browser/v35.js");
    /* harmony import */


    var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./md5.js */
    "./node_modules/uuid/dist/esm-browser/md5.js");

    var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    /* harmony default export */

    __webpack_exports__["default"] = v3;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v35.js":
  /*!***************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
    \***************************************************/

  /*! exports provided: DNS, URL, default */

  /***/
  function node_modulesUuidDistEsmBrowserV35Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DNS", function () {
      return DNS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "URL", function () {
      return URL;
    });
    /* harmony import */


    var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./bytesToUuid.js */
    "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");

    function uuidToBytes(uuid) {
      // Note: We assume we're being passed a valid uuid string
      var bytes = [];
      uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {
        bytes.push(parseInt(hex, 16));
      });
      return bytes;
    }

    function stringToBytes(str) {
      str = unescape(encodeURIComponent(str)); // UTF8 escape

      var bytes = [];

      for (var i = 0; i < str.length; ++i) {
        bytes.push(str.charCodeAt(i));
      }

      return bytes;
    }

    var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
    var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
    /* harmony default export */

    __webpack_exports__["default"] = function (name, version, hashfunc) {
      function generateUUID(value, namespace, buf, offset) {
        if (typeof value === 'string') {
          value = stringToBytes(value);
        }

        if (typeof namespace === 'string') {
          namespace = uuidToBytes(namespace);
        }

        if (!Array.isArray(value)) {
          throw TypeError('value must be an array of bytes');
        }

        if (!Array.isArray(namespace) || namespace.length !== 16) {
          throw TypeError('namespace must be uuid string or an Array of 16 byte values');
        } // Per 4.3


        var bytes = hashfunc(namespace.concat(value));
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;

        if (buf) {
          offset = offset || 0;

          for (var i = 0; i < 16; ++i) {
            buf[offset + i] = bytes[i];
          }

          return buf;
        }

        return Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
      } // Function#name is not settable on some platforms (#270)


      try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
      } catch (err) {} // For CommonJS default export support


      generateUUID.DNS = DNS;
      generateUUID.URL = URL;
      return generateUUID;
    };
    /***/

  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v4.js":
  /*!**************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserV4Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./rng.js */
    "./node_modules/uuid/dist/esm-browser/rng.js");
    /* harmony import */


    var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./bytesToUuid.js */
    "./node_modules/uuid/dist/esm-browser/bytesToUuid.js");

    function v4(options, buf, offset) {
      options = options || {};

      var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


      rnds[6] = rnds[6] & 0x0f | 0x40;
      rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

      if (buf) {
        offset = offset || 0;

        for (var i = 0; i < 16; ++i) {
          buf[offset + i] = rnds[i];
        }

        return buf;
      }

      return Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
    }
    /* harmony default export */


    __webpack_exports__["default"] = v4;
    /***/
  },

  /***/
  "./node_modules/uuid/dist/esm-browser/v5.js":
  /*!**************************************************!*\
    !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesUuidDistEsmBrowserV5Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./v35.js */
    "./node_modules/uuid/dist/esm-browser/v35.js");
    /* harmony import */


    var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./sha1.js */
    "./node_modules/uuid/dist/esm-browser/sha1.js");

    var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    /* harmony default export */

    __webpack_exports__["default"] = v5;
    /***/
  },

  /***/
  "./src/app/kboard/components/base.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/kboard/components/base.component.ts ***!
    \*****************************************************/

  /*! exports provided: BaseComponent */

  /***/
  function srcAppKboardComponentsBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseComponent", function () {
      return BaseComponent;
    });

    var BaseComponent = /*#__PURE__*/function () {
      function BaseComponent(router, activatedRoute) {
        _classCallCheck(this, BaseComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.prevUrl = '/';
        this.prevUrl = this.router.getCurrentNavigation().initialUrl.toString();
        console.info('prevUrl = ', this.prevUrl);
      }

      _createClass(BaseComponent, [{
        key: "getRouteParam",
        value: function getRouteParam(name) {
          return this.activatedRoute.snapshot.params[name];
        }
      }, {
        key: "home",
        value: function home() {
          this.navigateTo('/');
        }
      }, {
        key: "back",
        value: function back() {
          this.navigateTo(this.prevUrl);
        }
      }, {
        key: "navigateTo",
        value: function navigateTo() {
          for (var _len = arguments.length, path = new Array(_len), _key = 0; _key < _len; _key++) {
            path[_key] = arguments[_key];
          }

          this.router.navigate(path, {
            relativeTo: this.activatedRoute
          });
        }
      }]);

      return BaseComponent;
    }();
    /***/

  },

  /***/
  "./src/app/kboard/components/create.component.css.shim.ngstyle.js":
  /*!************************************************************************!*\
    !*** ./src/app/kboard/components/create.component.css.shim.ngstyle.js ***!
    \************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppKboardComponentsCreateComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tib2FyZC9jb21wb25lbnRzL2NyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"];
    /***/
  },

  /***/
  "./src/app/kboard/components/create.component.ngfactory.js":
  /*!*****************************************************************!*\
    !*** ./src/app/kboard/components/create.component.ngfactory.js ***!
    \*****************************************************************/

  /*! exports provided: RenderType_CreateComponent, View_CreateComponent_0, View_CreateComponent_Host_0, CreateComponentNgFactory */

  /***/
  function srcAppKboardComponentsCreateComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_CreateComponent", function () {
      return RenderType_CreateComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CreateComponent_0", function () {
      return View_CreateComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CreateComponent_Host_0", function () {
      return View_CreateComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateComponentNgFactory", function () {
      return CreateComponentNgFactory;
    });
    /* harmony import */


    var _create_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./create.component.css.shim.ngstyle */
    "./src/app/kboard/components/create.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _kboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./kboard.component.ngfactory */
    "./src/app/kboard/components/kboard.component.ngfactory.js");
    /* harmony import */


    var _kboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./kboard.component */
    "./src/app/kboard/components/kboard.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create.component */
    "./src/app/kboard/components/create.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _kboard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../kboard.service */
    "./src/app/kboard/kboard.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_CreateComponent = [_create_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_CreateComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_CreateComponent,
      data: {}
    });

    function View_CreateComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        kboardCtrl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Create New Board"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "app-kboard", [], null, [[null, "onSubmit"], [null, "onCancel"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("onSubmit" === en) {
          var pd_0 = _co.process($event) !== false;
          ad = pd_0 && ad;
        }

        if ("onCancel" === en) {
          var pd_1 = _co.back() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _kboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_KboardComponent_0"], _kboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_KboardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4440064, [[1, 4], ["kboard", 4]], 1, _kboard_component__WEBPACK_IMPORTED_MODULE_3__["KboardComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]], null, {
        onSubmit: "onSubmit",
        onCancel: "onCancel"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        submitBtn: 0
      })], function (_ck, _v) {
        _ck(_v, 6, 0);
      }, null);
    }

    function View_CreateComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-create", [], null, null, null, View_CreateComponent_0, RenderType_CreateComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _kboard_service__WEBPACK_IMPORTED_MODULE_7__["KboardService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var CreateComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-create", _create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"], View_CreateComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/kboard/components/create.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/kboard/components/create.component.ts ***!
    \*******************************************************/

  /*! exports provided: CreateComponent */

  /***/
  function srcAppKboardComponentsCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateComponent", function () {
      return CreateComponent;
    });
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./base.component */
    "./src/app/kboard/components/base.component.ts");

    var CreateComponent = /*#__PURE__*/function (_base_component__WEBP) {
      _inherits(CreateComponent, _base_component__WEBP);

      var _super18 = _createSuper(CreateComponent);

      function CreateComponent(router, activatedRoute, kboardSvc) {
        var _this41;

        _classCallCheck(this, CreateComponent);

        _this41 = _super18.call(this, router, activatedRoute);
        _this41.kboardSvc = kboardSvc;
        return _this41;
      }

      _createClass(CreateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "evaluate",
        value: function evaluate() {
          // if form is dirty -> dont want to leave
          return !this.kboardCtrl.boardGroup.dirty;
        }
      }, {
        key: "confirmMessage",
        value: function confirmMessage() {
          return 'You have unsaved data.\nDo you wish to leave?';
        }
      }, {
        key: "process",
        value: function process(board) {
          var _this42 = this;

          console.info('CreateComponent: board = ', board);
          this.kboardSvc.addBoard(board).then(function (boardId) {
            console.info('new boardId: ', boardId);

            _this42.kboardCtrl.initializeForm();
          })["catch"](function (error) {
            return console.error('ERROR addBoard: ', error);
          })["finally"](function () {
            return _this42.back();
          });
        }
      }]);

      return CreateComponent;
    }(_base_component__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]);
    /***/

  },

  /***/
  "./src/app/kboard/components/kboard.component.css.shim.ngstyle.js":
  /*!************************************************************************!*\
    !*** ./src/app/kboard/components/kboard.component.css.shim.ngstyle.js ***!
    \************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppKboardComponentsKboardComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".box[_ngcontent-%COMP%] {\n\twidth: 200px;\n\theight: 200px;\n\tmargin: 50px;\n}\n.form-group[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\n\tfont-size: 1.3em;\n\tfont-weight: bold;\n}\n.form-group.required[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:after, .table[_ngcontent-%COMP%]   th.required[_ngcontent-%COMP%]:after {\n\tcontent: \"*\";\n\tcolor: red;\n\tmargin-left: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2JvYXJkL2NvbXBvbmVudHMva2JvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osYUFBYTtDQUNiLFlBQVk7QUFDYjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjtBQUVBOztDQUVDLFlBQVk7Q0FDWixVQUFVO0NBQ1YsZ0JBQWdCO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAva2JvYXJkL2NvbXBvbmVudHMva2JvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94IHtcblx0d2lkdGg6IDIwMHB4O1xuXHRoZWlnaHQ6IDIwMHB4O1xuXHRtYXJnaW46IDUwcHg7XG59XG4uZm9ybS1ncm91cCA+IGxhYmVsIHtcblx0Zm9udC1zaXplOiAxLjNlbTtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5mb3JtLWdyb3VwLnJlcXVpcmVkID4gbGFiZWw6YWZ0ZXIsXG4udGFibGUgdGgucmVxdWlyZWQ6YWZ0ZXIge1xuXHRjb250ZW50OiBcIipcIjtcblx0Y29sb3I6IHJlZDtcblx0bWFyZ2luLWxlZnQ6IDFweDtcbn1cblxuIl19 */"];
    /***/
  },

  /***/
  "./src/app/kboard/components/kboard.component.ngfactory.js":
  /*!*****************************************************************!*\
    !*** ./src/app/kboard/components/kboard.component.ngfactory.js ***!
    \*****************************************************************/

  /*! exports provided: RenderType_KboardComponent, View_KboardComponent_0, View_KboardComponent_Host_0, KboardComponentNgFactory */

  /***/
  function srcAppKboardComponentsKboardComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_KboardComponent", function () {
      return RenderType_KboardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_KboardComponent_0", function () {
      return View_KboardComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_KboardComponent_Host_0", function () {
      return View_KboardComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KboardComponentNgFactory", function () {
      return KboardComponentNgFactory;
    });
    /* harmony import */


    var _kboard_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./kboard.component.css.shim.ngstyle */
    "./src/app/kboard/components/kboard.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _kboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./kboard.component */
    "./src/app/kboard/components/kboard.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_KboardComponent = [_kboard_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_KboardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_KboardComponent,
      data: {
        "animation": [{
          type: 7,
          name: "fadeInOut",
          definitions: [{
            type: 1,
            expr: "void => *",
            animation: [{
              type: 6,
              styles: {
                opacity: 0,
                transform: "translateY(-100%)"
              },
              offset: null
            }, {
              type: 4,
              styles: null,
              timings: "300ms"
            }],
            options: null
          }, {
            type: 1,
            expr: "* => void",
            animation: [{
              type: 4,
              styles: null,
              timings: "300ms"
            }, {
              type: 6,
              styles: {
                opacity: 0,
                transform: "translateY(-100%)"
              },
              offset: null
            }],
            options: null
          }],
          options: {}
        }]
      }
    });

    function View_KboardComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
    }

    function View_KboardComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "mt-4 d-flex justify-content-between align-items-center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "h3", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Add some cards to your board"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 0, "i", [["class", "far fa-hand-point-up fa-2x"]], null, null, null, null, null))], null, null);
    }

    function View_KboardComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 34, "tr", [], [[24, "@fadeInOut", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 8, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 7, "input", [["class", "form-control"], ["formControlName", "description"], ["placeholder", "Card's description"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](7, {
        "is-invalid": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 18, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 17, "select", [["class", "form-control"], ["formControlName", "priority"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;

        if ("change" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onChange($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onTouched() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 3, "option", [["value", "0"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Low"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 3, "option", [["value", "1"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Medium"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 3, "option", [["value", "2"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"]]], {
        value: [0, "value"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        value: [0, "value"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["High"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 2, "td", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 1, "button", [["class", "btn btn-danger"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.removeCard(_v.context.index) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 0, "i", [["class", "fas fa-trash-alt"]], null, null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_8 = _v.context.$implicit;

        _ck(_v, 1, 0, currVal_8);

        var currVal_16 = "form-control";

        var currVal_17 = _ck(_v, 7, 0, !_co.isControlValid("description", _v.context.index));

        _ck(_v, 6, 0, currVal_16, currVal_17);

        var currVal_18 = "description";

        _ck(_v, 10, 0, currVal_18);

        var currVal_26 = "priority";

        _ck(_v, 17, 0, currVal_26);

        var currVal_27 = "0";

        _ck(_v, 21, 0, currVal_27);

        var currVal_28 = "0";

        _ck(_v, 22, 0, currVal_28);

        var currVal_29 = "1";

        _ck(_v, 25, 0, currVal_29);

        var currVal_30 = "1";

        _ck(_v, 26, 0, currVal_30);

        var currVal_31 = "2";

        _ck(_v, 29, 0, currVal_31);

        var currVal_32 = "2";

        _ck(_v, 30, 0, currVal_32);
      }, function (_ck, _v) {
        var currVal_0 = undefined;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassUntouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassTouched;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassPristine;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassDirty;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassValid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassInvalid;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).ngClassPending;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassUntouched;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassTouched;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassPristine;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassDirty;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassValid;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassInvalid;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).ngClassPending;

        _ck(_v, 5, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassUntouched;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassTouched;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPristine;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassDirty;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassValid;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassInvalid;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).ngClassPending;

        _ck(_v, 14, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25);
      });
    }

    function View_KboardComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "table", [["class", "table mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "thead", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "tr", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "th", [["class", "required"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Priority"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "th", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 5, "tbody", [["formArrayName", "cards"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 212992, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_KboardComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = "cards";

        _ck(_v, 9, 0, currVal_7);

        var currVal_8 = _co.cardsArray.controls;

        _ck(_v, 13, 0, currVal_8);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).ngClassPending;

        _ck(_v, 8, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
      });
    }

    function View_KboardComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "button", [["class", "btn btn-primary"], ["type", "submit"]], [[8, "disabled", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Create "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "i", [["class", "far fa-calendar-plus ml-1"]], null, null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.boardGroup.invalid;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_KboardComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], null, null);
    }

    function View_KboardComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 55, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 54, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 53, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).onReset() !== false;
          ad = pd_1 && ad;
        }

        if ("ngSubmit" === en) {
          var pd_2 = _co.processForm() !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, {
        ngSubmit: "ngSubmit"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 12, "div", [["class", "form-group required"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "label", [["for", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Title"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 7, "input", [["class", "form-control"], ["formControlName", "title"], ["id", "title"], ["placeholder", "Board's title"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](12, {
        "is-invalid": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "div", [["class", "invalid-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Title must be longer than 3 characters"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 12, "div", [["class", "form-group required"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "label", [["for", "createdBy"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Created By"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 7, "input", [["class", "form-control"], ["formControlName", "createdBy"], ["id", "createdBy"], ["placeholder", "Owner's email"], ["type", "email"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](25, {
        "is-invalid": 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 1, "div", [["class", "invalid-feedback"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Please enter a valid email"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 8, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 1, "label", [["for", "comments"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Comments"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 5, "textarea", [["class", "form-control"], ["formControlName", "comments"], ["id", "comments"], ["placeholder", "Comments"], ["rows", "5"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, null, null, 9, "div", [["class", "d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_KboardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
        ngTemplateOutlet: [0, "ngTemplateOutlet"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 2, "button", [["class", "btn btn-dark mr-2"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.cancel() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Cancel "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](48, 0, null, null, 0, "i", [["class", "fas fa-window-close ml-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 2, "button", [["class", "btn btn-warning"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.addCard() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Add Card "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 0, "i", [["class", "fas fa-list-ol ml-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_KboardComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_KboardComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["defaultSubmit", 2]], null, 0, null, View_KboardComponent_5)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["customSubmit", 2]], null, 0, null, View_KboardComponent_6))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.boardGroup;

        _ck(_v, 4, 0, currVal_7);

        var currVal_15 = "form-control";

        var currVal_16 = _ck(_v, 12, 0, !_co.isControlValid("title"));

        _ck(_v, 11, 0, currVal_15, currVal_16);

        var currVal_17 = "title";

        _ck(_v, 15, 0, currVal_17);

        var currVal_25 = "form-control";

        var currVal_26 = _ck(_v, 25, 0, !_co.isControlValid("createdBy"));

        _ck(_v, 24, 0, currVal_25, currVal_26);

        var currVal_27 = "createdBy";

        _ck(_v, 28, 0, currVal_27);

        var currVal_35 = "comments";

        _ck(_v, 39, 0, currVal_35);

        var currVal_36 = !!_co.submitBtn ? _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 57) : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56);

        _ck(_v, 44, 0, currVal_36);

        var currVal_37 = _co.cardsArray.controls.length <= 0;

        _ck(_v, 53, 0, currVal_37);

        var currVal_38 = _co.cardsArray.controls.length > 0;

        _ck(_v, 55, 0, currVal_38);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassUntouched;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassTouched;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPristine;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassDirty;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassValid;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassInvalid;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).ngClassPending;

        _ck(_v, 10, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassUntouched;

        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassTouched;

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPristine;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassDirty;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassValid;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassInvalid;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).ngClassPending;

        _ck(_v, 23, 0, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24);

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassUntouched;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassTouched;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPristine;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassDirty;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassValid;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassInvalid;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).ngClassPending;

        _ck(_v, 36, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34);
      });
    }

    function View_KboardComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "app-kboard", [], null, null, null, View_KboardComponent_0, RenderType_KboardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, null, 1, _kboard_component__WEBPACK_IMPORTED_MODULE_4__["KboardComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        submitBtn: 0
      })], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var KboardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-kboard", _kboard_component__WEBPACK_IMPORTED_MODULE_4__["KboardComponent"], View_KboardComponent_Host_0, {
      value: "value"
    }, {
      onSubmit: "onSubmit",
      onValid: "onValid",
      onCancel: "onCancel"
    }, ["*"]);
    /***/

  },

  /***/
  "./src/app/kboard/components/kboard.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/kboard/components/kboard.component.ts ***!
    \*******************************************************/

  /*! exports provided: KboardComponent, ɵ0 */

  /***/
  function srcAppKboardComponentsKboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KboardComponent", function () {
      return KboardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var nonWhiteSpace = function nonWhiteSpace(ctrl) {
      if (ctrl.value.trim().length > 0) return null;
      return {
        nonWhiteSpace: true
      };
    };

    var ɵ0 = nonWhiteSpace;
    var voidStyle = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0,
      transform: 'translateY(-100%)'
    });

    var KboardComponent = /*#__PURE__*/function () {
      function KboardComponent(fb) {
        _classCallCheck(this, KboardComponent);

        this.fb = fb;
        this.onSubmit = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.onValid = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.onCancel = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(KboardComponent, [{
        key: "ngOnInit",
        // lifecycle method
        // https://angular.io/guide/lifecycle-hooks
        value: function ngOnInit() {
          this.initializeForm();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.statusChangesSub.unsubscribe();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          console.info('#submit = ', this.submitBtn);
        }
      }, {
        key: "addCard",
        value: function addCard() {
          this.cardsArray.push(this.createCard());
        }
      }, {
        key: "removeCard",
        value: function removeCard(idx) {
          this.cardsArray.removeAt(idx);
        }
      }, {
        key: "processForm",
        value: function processForm() {
          this.onSubmit.next(this.value);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.onCancel.next();
        }
      }, {
        key: "isControlValid",
        value: function isControlValid(ctrlName) {
          var idx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
          var ctrl;
          if (idx == -1) ctrl = this.boardGroup.get(ctrlName);else {
            var grp = this.cardsArray.controls[idx];
            ctrl = grp.get(ctrlName);
          }
          return ctrl.pristine || ctrl.valid;
        }
      }, {
        key: "initializeForm",
        value: function initializeForm() {
          var _this43 = this;

          var b = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          if (null != this.statusChangesSub) this.statusChangesSub.unsubscribe();
          this.boardGroup = this.createBoard(b);
          this.cardsArray = this.boardGroup.get('cards');
          this.statusChangesSub = this.boardGroup.statusChanges.subscribe(function (v) {
            return _this43.onValid.next('VALID' == v);
          });
        } // helper methods

      }, {
        key: "createBoard",
        value: function createBoard() {
          var b = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          return this.fb.group({
            title: this.fb.control(b ? b.title : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3), nonWhiteSpace]),
            createdBy: this.fb.control(b ? b.createdBy : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email]),
            comments: this.fb.control(b ? b.comments : ''),
            cards: this.createCards(b ? b.cards : [])
          });
        }
      }, {
        key: "createCards",
        value: function createCards() {
          var _this44 = this;

          var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          return this.fb.array(c.map(function (v) {
            return _this44.createCard(v);
          }));
        }
      }, {
        key: "createCard",
        value: function createCard() {
          var c = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          return this.fb.group({
            description: this.fb.control(c ? c.description : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, nonWhiteSpace]),
            priority: this.fb.control(c ? c.priority.toString() : '0')
          });
        }
      }, {
        key: "value",
        get: function get() {
          return this.boardGroup.value;
        },
        set: function set(v) {
          this.initializeForm(v);
        }
      }]);

      return KboardComponent;
    }();
    /***/

  },

  /***/
  "./src/app/kboard/components/main-kboard.component.css.shim.ngstyle.js":
  /*!*****************************************************************************!*\
    !*** ./src/app/kboard/components/main-kboard.component.css.shim.ngstyle.js ***!
    \*****************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppKboardComponentsMainKboardComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tib2FyZC9jb21wb25lbnRzL21haW4ta2JvYXJkLmNvbXBvbmVudC5jc3MifQ== */"];
    /***/
  },

  /***/
  "./src/app/kboard/components/main-kboard.component.ngfactory.js":
  /*!**********************************************************************!*\
    !*** ./src/app/kboard/components/main-kboard.component.ngfactory.js ***!
    \**********************************************************************/

  /*! exports provided: RenderType_MainKboardComponent, View_MainKboardComponent_0, View_MainKboardComponent_Host_0, MainKboardComponentNgFactory */

  /***/
  function srcAppKboardComponentsMainKboardComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MainKboardComponent", function () {
      return RenderType_MainKboardComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MainKboardComponent_0", function () {
      return View_MainKboardComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MainKboardComponent_Host_0", function () {
      return View_MainKboardComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainKboardComponentNgFactory", function () {
      return MainKboardComponentNgFactory;
    });
    /* harmony import */


    var _main_kboard_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./main-kboard.component.css.shim.ngstyle */
    "./src/app/kboard/components/main-kboard.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _main_kboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-kboard.component */
    "./src/app/kboard/components/main-kboard.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _kboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../kboard.service */
    "./src/app/kboard/kboard.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_MainKboardComponent = [_main_kboard_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_MainKboardComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_MainKboardComponent,
      data: {}
    });

    function View_MainKboardComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "a", [["class", "list-group-item list-group-item-action d-flex justify-content-between align-items-center"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.navigateTo("update", _v.context.$implicit.boardId) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](2, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "span", [["class", "badge badge-warning badge-pill"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "]))], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 0), _v.context.$implicit.title));

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.cards.length;

        _ck(_v, 4, 0, currVal_1);
      });
    }

    function View_MainKboardComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "div", [["class", "col d-flex justify-content-between"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "button", [["class", "btn btn-secondary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.back() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Back "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "i", [["class", "fas fa-arrow-left ml-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 2, "button", [["class", "btn btn-primary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.navigateTo("create") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Create "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "i", [["class", "far fa-calendar-plus ml-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 3, "div", [["class", "row mt-4"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 2, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["My Boards"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "div", [["class", "row mt-2"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "ul", [["class", "list-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_MainKboardComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.boards;

        _ck(_v, 17, 0, currVal_0);
      }, null);
    }

    function View_MainKboardComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-main-kboard", [], null, null, null, View_MainKboardComponent_0, RenderType_MainKboardComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _main_kboard_component__WEBPACK_IMPORTED_MODULE_3__["MainKboardComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _kboard_service__WEBPACK_IMPORTED_MODULE_5__["KboardService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var MainKboardComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-main-kboard", _main_kboard_component__WEBPACK_IMPORTED_MODULE_3__["MainKboardComponent"], View_MainKboardComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/kboard/components/main-kboard.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/kboard/components/main-kboard.component.ts ***!
    \************************************************************/

  /*! exports provided: MainKboardComponent */

  /***/
  function srcAppKboardComponentsMainKboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainKboardComponent", function () {
      return MainKboardComponent;
    });
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./base.component */
    "./src/app/kboard/components/base.component.ts");

    var MainKboardComponent = /*#__PURE__*/function (_base_component__WEBP2) {
      _inherits(MainKboardComponent, _base_component__WEBP2);

      var _super19 = _createSuper(MainKboardComponent);

      function MainKboardComponent(router, activateRoute, kboardSvc) {
        var _this45;

        _classCallCheck(this, MainKboardComponent);

        _this45 = _super19.call(this, router, activateRoute);
        _this45.kboardSvc = kboardSvc;
        _this45.boards = [];
        return _this45;
      }

      _createClass(MainKboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this46 = this;

          this.kboardSvc.getBoards().then(function (boards) {
            return _this46.boards = boards;
          })["catch"](function (error) {
            return console.error('ERROR getBoards: ', error);
          });
        }
      }]);

      return MainKboardComponent;
    }(_base_component__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]);
    /***/

  },

  /***/
  "./src/app/kboard/components/update.component.css.shim.ngstyle.js":
  /*!************************************************************************!*\
    !*** ./src/app/kboard/components/update.component.css.shim.ngstyle.js ***!
    \************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppKboardComponentsUpdateComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2tib2FyZC9jb21wb25lbnRzL3VwZGF0ZS5jb21wb25lbnQuY3NzIn0= */"];
    /***/
  },

  /***/
  "./src/app/kboard/components/update.component.ngfactory.js":
  /*!*****************************************************************!*\
    !*** ./src/app/kboard/components/update.component.ngfactory.js ***!
    \*****************************************************************/

  /*! exports provided: RenderType_UpdateComponent, View_UpdateComponent_0, View_UpdateComponent_Host_0, UpdateComponentNgFactory */

  /***/
  function srcAppKboardComponentsUpdateComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_UpdateComponent", function () {
      return RenderType_UpdateComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_UpdateComponent_0", function () {
      return View_UpdateComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_UpdateComponent_Host_0", function () {
      return View_UpdateComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateComponentNgFactory", function () {
      return UpdateComponentNgFactory;
    });
    /* harmony import */


    var _update_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./update.component.css.shim.ngstyle */
    "./src/app/kboard/components/update.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _kboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./kboard.component.ngfactory */
    "./src/app/kboard/components/kboard.component.ngfactory.js");
    /* harmony import */


    var _kboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./kboard.component */
    "./src/app/kboard/components/kboard.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _directives_hold_to_delete_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../directives/hold-to-delete.directive */
    "./src/app/kboard/directives/hold-to-delete.directive.ts");
    /* harmony import */


    var _update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update.component */
    "./src/app/kboard/components/update.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _kboard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../kboard.service */
    "./src/app/kboard/kboard.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_UpdateComponent = [_update_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_UpdateComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_UpdateComponent,
      data: {}
    });

    function View_UpdateComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        kboardCtrl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 5, "div", [["class", "col"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "h2", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Update Board ("])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "code", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [")"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 10, "app-kboard", [], null, [[null, "onValid"], [null, "onCancel"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("onValid" === en) {
          var pd_0 = _co.formStatus($event) !== false;
          ad = pd_0 && ad;
        }

        if ("onCancel" === en) {
          var pd_1 = _co.back() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _kboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_KboardComponent_0"], _kboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_KboardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4440064, [[1, 4], ["kboard", 4]], 1, _kboard_component__WEBPACK_IMPORTED_MODULE_3__["KboardComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]], {
        value: [0, "value"]
      }, {
        onValid: "onValid",
        onCancel: "onCancel"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        submitBtn: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, [[2, 0], ["submit", 1]], 0, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 3, "button", [["class", "btn btn-danger"], ["holdToDelete", ""], ["type", "button"]], [[4, "background-image", null]], [[null, "h2dProgress"], [null, "h2dExpired"], [null, "mousedown"], [null, "mouseup"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).mousedown() !== false;
          ad = pd_0 && ad;
        }

        if ("mouseup" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).mouseup() !== false;
          ad = pd_1 && ad;
        }

        if ("h2dProgress" === en) {
          var pd_2 = _co.progress($event) !== false;
          ad = pd_2 && ad;
        }

        if ("h2dExpired" === en) {
          var pd_3 = _co["delete"]() !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _directives_hold_to_delete_directive__WEBPACK_IMPORTED_MODULE_5__["HoldToDeleteDirective"], [], null, {
        h2dProgress: "h2dProgress",
        h2dExpired: "h2dExpired"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Delete "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 0, "i", [["class", "fas fa-trash-alt ml-1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "button", [["class", "btn btn-secondary ml-2"], ["type", "button"]], [[8, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.update(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).value) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Update "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 0, "i", [["class", "fas fa-edit ml-1"]], null, null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.board;

        _ck(_v, 9, 0, currVal_1);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.boardId;

        _ck(_v, 6, 0, currVal_0);

        var currVal_2 = _co.btnStyle;

        _ck(_v, 12, 0, currVal_2);

        var currVal_3 = !_co.enableBtn;

        _ck(_v, 16, 0, currVal_3);
      });
    }

    function View_UpdateComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-update", [], null, null, null, View_UpdateComponent_0, RenderType_UpdateComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _update_component__WEBPACK_IMPORTED_MODULE_6__["UpdateComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _kboard_service__WEBPACK_IMPORTED_MODULE_8__["KboardService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var UpdateComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-update", _update_component__WEBPACK_IMPORTED_MODULE_6__["UpdateComponent"], View_UpdateComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/kboard/components/update.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/kboard/components/update.component.ts ***!
    \*******************************************************/

  /*! exports provided: UpdateComponent */

  /***/
  function srcAppKboardComponentsUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateComponent", function () {
      return UpdateComponent;
    });
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./base.component */
    "./src/app/kboard/components/base.component.ts");
    /* harmony import */


    var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../common/utils */
    "../common/utils.ts");

    var UpdateComponent = /*#__PURE__*/function (_base_component__WEBP3) {
      _inherits(UpdateComponent, _base_component__WEBP3);

      var _super20 = _createSuper(UpdateComponent);

      function UpdateComponent(router, activatedRoute, kboardSvc) {
        var _this47;

        _classCallCheck(this, UpdateComponent);

        _this47 = _super20.call(this, router, activatedRoute);
        _this47.kboardSvc = kboardSvc;
        _this47.enableBtn = false;
        _this47.btnStyle = 'none';
        _this47.boardId = _this47.getRouteParam('bId');
        return _this47;
      }

      _createClass(UpdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this48 = this;

          this.kboardSvc.findBoardById(this.boardId).then(function (result) {
            _this48.board = result;
            console.info('board = ', _this48.board);
          })["catch"](function (error) {
            return console.info('ERROR findBoardById: ', error);
          });
        }
      }, {
        key: "formStatus",
        value: function formStatus(s) {
          this.enableBtn = s;
        }
      }, {
        key: "evaluate",
        value: function evaluate() {
          // if form is dirty -> dont want to leave
          return !this.kboardCtrl.boardGroup.dirty;
        }
      }, {
        key: "confirmMessage",
        value: function confirmMessage() {
          return 'You have unsaved data.\nDo you wish to leave?';
        }
      }, {
        key: "progress",
        value: function progress(p) {
          console.info('progress: ', p);
          if (p <= 0) this.btnStyle = 'none';else this.btnStyle = "linear-gradient(to left, rgb(220,220,220,0.4) ".concat(100 - p, "%, rgb(0,0,0,0) 0%)");
        }
      }, {
        key: "delete",
        value: function _delete() {
          var _this49 = this;

          this.kboardSvc.deleteBoard(this.board)["catch"](function (err) {
            return console.error('ERROR deleteBoard: ', err);
          })["finally"](function () {
            return _this49.navigateTo('../..');
          });
        }
      }, {
        key: "update",
        value: function update(p) {
          var _this50 = this;

          var board = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["mergeBoard"])(p, this.board);
          this.kboardSvc.updateBoard(board).then(function (result) {
            console.info("Number of records updated: ".concat(result));

            _this50.kboardCtrl.initializeForm();
          })["catch"](function (error) {
            return console.error('ERROR updateBoard: ', error);
          })["finally"](function () {
            return _this50.navigateTo('../../');
          });
        }
      }]);

      return UpdateComponent;
    }(_base_component__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]);
    /***/

  },

  /***/
  "./src/app/kboard/directives/hold-to-delete.directive.ts":
  /*!***************************************************************!*\
    !*** ./src/app/kboard/directives/hold-to-delete.directive.ts ***!
    \***************************************************************/

  /*! exports provided: HoldToDeleteDirective */

  /***/
  function srcAppKboardDirectivesHoldToDeleteDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HoldToDeleteDirective", function () {
      return HoldToDeleteDirective;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var INTERVAL = 100;

    var HoldToDeleteDirective = /*#__PURE__*/function () {
      function HoldToDeleteDirective() {
        _classCallCheck(this, HoldToDeleteDirective);

        this.h2dDuration = 1000;
        this.h2dProgress = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.h2dExpired = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.btnState = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.mouseUp$ = this.btnState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (v) {
          return v;
        }));
      }

      _createClass(HoldToDeleteDirective, [{
        key: "mousedown",
        value: function mousedown() {
          var _this51 = this;

          console.info('mouse down');
          Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["interval"])(INTERVAL).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (v) {
            return v * INTERVAL / _this51.h2dDuration * 100;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.mouseUp$)).subscribe(function (v) {
            _this51.h2dProgress.next(v);

            if (v >= 100) {
              _this51.btnState.next(true);

              _this51.h2dExpired.next();
            }
          }, null, function () {
            return _this51.h2dProgress.next(0);
          });
        }
      }, {
        key: "mouseup",
        value: function mouseup() {
          console.info('mouse up');
          this.btnState.next(true);
        }
      }]);

      return HoldToDeleteDirective;
    }();
    /***/

  },

  /***/
  "./src/app/kboard/kboard-route-guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/kboard/kboard-route-guard.ts ***!
    \**********************************************/

  /*! exports provided: EditRouteGuard */

  /***/
  function srcAppKboardKboardRouteGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditRouteGuard", function () {
      return EditRouteGuard;
    });

    var EditRouteGuard = /*#__PURE__*/function () {
      function EditRouteGuard() {
        _classCallCheck(this, EditRouteGuard);
      }

      _createClass(EditRouteGuard, [{
        key: "canDeactivate",
        value: function canDeactivate(comp, currRoute, currState) {
          console.info('canDeactivate: ', comp);
          if (!comp.evaluate()) return confirm(comp.confirmMessage());
          return true;
        }
      }]);

      return EditRouteGuard;
    }();
    /***/

  },

  /***/
  "./src/app/kboard/kboard.module.ngfactory.js":
  /*!***************************************************!*\
    !*** ./src/app/kboard/kboard.module.ngfactory.js ***!
    \***************************************************/

  /*! exports provided: KboardModuleNgFactory */

  /***/
  function srcAppKboardKboardModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KboardModuleNgFactory", function () {
      return KboardModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _kboard_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./kboard.module */
    "./src/app/kboard/kboard.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _components_main_kboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/main-kboard.component.ngfactory */
    "./src/app/kboard/components/main-kboard.component.ngfactory.js");
    /* harmony import */


    var _components_create_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/create.component.ngfactory */
    "./src/app/kboard/components/create.component.ngfactory.js");
    /* harmony import */


    var _components_update_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/update.component.ngfactory */
    "./src/app/kboard/components/update.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _kboard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./kboard.service */
    "./src/app/kboard/kboard.service.ts");
    /* harmony import */


    var _kboard_route_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./kboard-route-guard */
    "./src/app/kboard/kboard-route-guard.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _components_main_kboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/main-kboard.component */
    "./src/app/kboard/components/main-kboard.component.ts");
    /* harmony import */


    var _components_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/create.component */
    "./src/app/kboard/components/create.component.ts");
    /* harmony import */


    var _components_update_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/update.component */
    "./src/app/kboard/components/update.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var KboardModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_kboard_module__WEBPACK_IMPORTED_MODULE_1__["KboardModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_lNgFactory"], _components_main_kboard_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MainKboardComponentNgFactory"], _components_create_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["CreateComponentNgFactory"], _components_update_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["UpdateComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _kboard_service__WEBPACK_IMPORTED_MODULE_8__["KboardService"], _kboard_service__WEBPACK_IMPORTED_MODULE_8__["KboardService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _kboard_route_guard__WEBPACK_IMPORTED_MODULE_9__["EditRouteGuard"], _kboard_route_guard__WEBPACK_IMPORTED_MODULE_9__["EditRouteGuard"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _kboard_module__WEBPACK_IMPORTED_MODULE_1__["KboardModule"], _kboard_module__WEBPACK_IMPORTED_MODULE_1__["KboardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_10__["ROUTES"], function () {
        return [[{
          path: "",
          component: _components_main_kboard_component__WEBPACK_IMPORTED_MODULE_11__["MainKboardComponent"]
        }, {
          path: "create",
          component: _components_create_component__WEBPACK_IMPORTED_MODULE_12__["CreateComponent"],
          canDeactivate: [_kboard_route_guard__WEBPACK_IMPORTED_MODULE_9__["EditRouteGuard"]]
        }, {
          path: "update/:bId",
          component: _components_update_component__WEBPACK_IMPORTED_MODULE_13__["UpdateComponent"],
          canDeactivate: [_kboard_route_guard__WEBPACK_IMPORTED_MODULE_9__["EditRouteGuard"]]
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/kboard/kboard.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/kboard/kboard.module.ts ***!
    \*****************************************/

  /*! exports provided: KboardModule */

  /***/
  function srcAppKboardKboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KboardModule", function () {
      return KboardModule;
    });
    /* harmony import */


    var _components_main_kboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components/main-kboard.component */
    "./src/app/kboard/components/main-kboard.component.ts");
    /* harmony import */


    var _components_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/create.component */
    "./src/app/kboard/components/create.component.ts");
    /* harmony import */


    var _components_update_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/update.component */
    "./src/app/kboard/components/update.component.ts");
    /* harmony import */


    var _kboard_route_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./kboard-route-guard */
    "./src/app/kboard/kboard-route-guard.ts");

    var ROUTES = [{
      path: '',
      component: _components_main_kboard_component__WEBPACK_IMPORTED_MODULE_0__["MainKboardComponent"]
    }, {
      path: 'create',
      component: _components_create_component__WEBPACK_IMPORTED_MODULE_1__["CreateComponent"],
      canDeactivate: [_kboard_route_guard__WEBPACK_IMPORTED_MODULE_3__["EditRouteGuard"]]
    }, {
      path: 'update/:bId',
      component: _components_update_component__WEBPACK_IMPORTED_MODULE_2__["UpdateComponent"],
      canDeactivate: [_kboard_route_guard__WEBPACK_IMPORTED_MODULE_3__["EditRouteGuard"]]
    }];

    var KboardModule = function KboardModule() {
      _classCallCheck(this, KboardModule);
    };
    /***/

  },

  /***/
  "./src/app/kboard/kboard.service.ts":
  /*!******************************************!*\
    !*** ./src/app/kboard/kboard.service.ts ***!
    \******************************************/

  /*! exports provided: KboardService */

  /***/
  function srcAppKboardKboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KboardService", function () {
      return KboardService;
    });
    /* harmony import */


    var dexie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! dexie */
    "./node_modules/dexie/dist/dexie.mjs");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");

    var KboardService = /*#__PURE__*/function (_dexie__WEBPACK_IMPOR) {
      _inherits(KboardService, _dexie__WEBPACK_IMPOR);

      var _super21 = _createSuper(KboardService);

      function KboardService() {
        var _this52;

        _classCallCheck(this, KboardService);

        // kboard the database name
        _this52 = _super21.call(this, 'kboard'); // create schema

        _this52.version(1).stores({
          boards: 'boardId'
        });

        _this52.boards = _this52.table('boards');
        return _this52;
      }

      _createClass(KboardService, [{
        key: "deleteBoard",
        value: function deleteBoard(b) {
          var bId;
          if (typeof b === 'object') bId = b.boardId;else bId = b;
          return this.boards["delete"](bId);
        }
      }, {
        key: "updateBoard",
        value: function updateBoard(board) {
          board.updatedOn = new Date().getTime();
          return this.boards.update(board.boardId, board);
        }
      }, {
        key: "findBoardById",
        value: function findBoardById(bId) {
          return this.boards.get(bId);
        }
      }, {
        key: "getBoards",
        value: function getBoards() {
          return this.boards.toArray();
        }
      }, {
        key: "addBoard",
        value: function addBoard(b) {
          var boardId = Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])().substring(0, 8);
          var createdOn = new Date().getTime();
          var board = {
            boardId: boardId,
            createdOn: createdOn,
            title: b.title,
            createdBy: b.createdBy,
            comments: b.comments,
            cards: b.cards ? b.cards : []
          };
          return this.boards.add(board);
        }
      }]);

      return KboardService;
    }(dexie__WEBPACK_IMPORTED_MODULE_0__["default"]);
    /***/

  }
}]);
//# sourceMappingURL=kboard-kboard-module-ngfactory-es5.js.map