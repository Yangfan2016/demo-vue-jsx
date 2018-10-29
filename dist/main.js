"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _dec2, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = (_dec = VueClassComponent.default({
    props: {
        data: {
            type: Array,
            required: true
        },
        show: {
            type: Boolean,
            defalut: false
        }
    },
    computed: {
        num2: function num2() {
            return this.num + "a";
        }
    }
}), _dec(_class = function (_Vue) {
    _inherits(NavBar, _Vue);

    function NavBar() {
        _classCallCheck(this, NavBar);

        return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this));
    }

    _createClass(NavBar, [{
        key: "render",
        value: function render(h) {
            var _this2 = this;

            var data = {
                domProps: {
                    title: "hahaha"
                }
            };
            if (this.show) {
                return h("div", [h(
                    "ul",
                    { style: this.$attrs.style },
                    [this.data.map(function (item) {
                        return h(
                            "li",
                            {
                                attrs: { title: data.domProps.title }
                            },
                            [item.text]
                        );
                    })]
                ), h(
                    "p",
                    {
                        on: {
                            "mouseover": function mouseover(e) {
                                _this2.$listeners["klick"](666);_this2.num++;
                            }
                        }
                    },
                    [this.num2]
                )]);
            } else {
                return h("p", ["Oops,Look like it was hided"]);
            }
        }
    }, {
        key: "data",
        value: function data() {
            return {
                num: 1
            };
        }
    }, {
        key: "created",
        value: function created() {
            console.log("CREATED");
        }
    }, {
        key: "updated",
        value: function updated() {
            console.log("UPDATED");
        }
    }, {
        key: "mounted",
        value: function mounted() {
            console.log("MOUNTED");
        }
    }, {
        key: "destoryed",
        value: function destoryed() {
            console.log("DESTORYED");
        }
    }]);

    return NavBar;
}(Vue)) || _class);
var App = (_dec2 = VueClassComponent.default, _dec2(_class2 = function (_Vue2) {
    _inherits(App, _Vue2);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: "render",
        value: function render(h) {
            var NavBarFilter = h(NavBar, {
                attrs: { data: [{
                        label: "111",
                        text: "数学"
                    }, {
                        label: "222",
                        text: "英语"
                    }, {
                        label: "333",
                        text: "物理"
                    }], show: true
                },
                style: {
                    "color": "#080",
                    "background-color": "#ccc"
                }, on: {
                    "klick": this.yfClick
                }
            });

            if (0) {
                return h("div", ["Vue-JSX NOTHING"]);
            } else {
                return h("div", [h(
                    "button",
                    {
                        on: {
                            "click": this.destoryedCp
                        }
                    },
                    ["123"]
                ), "Vue-JSX", NavBarFilter]);
            }
        }
    }, {
        key: "data",
        value: function data() {
            return {
                isDestory: false
            };
        }
    }, {
        key: "yfClick",
        value: function yfClick(d) {
            console.log("The event 'YfClick' is emited", d);
        }
    }, {
        key: "nativeClick",
        value: function nativeClick(d) {
            console.log("The event 'nativeClick' is emited", d);
        }
    }, {
        key: "mounted",
        value: function mounted() {
            this.cp = this.$children[0];
            console.log(this.$children);
        }
    }, {
        key: "destoryedCp",
        value: function destoryedCp() {
            this.cp.$destroy();
        }
    }]);

    return App;
}(Vue)) || _class2);


new Vue({
    data: function data() {
        return {
            msg: "Hello"
        };
    },

    render: function render(h) {
        return h(App);
    }
}).$mount("#app");
//# sourceMappingURL=main.js.map