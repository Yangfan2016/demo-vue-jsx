@VueClassComponent.default({
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
    computed:{
        num2() {
            return this.num+"a";
        }
    }
})
class NavBar extends Vue {
    constructor() {
        super();
    }
    render(h) {
        var data = {
            domProps: {
                title: "hahaha"
            }
        };
        if (this.show) {
            return (
                <div>
                    <ul style={this.$attrs.style}>
                        {
                            this.data.map(item => {
                                return <li title={data.domProps.title}>{item.text}</li>;
                            })
                        }
                    </ul>
                    <p onMouseover={e => { this.$listeners["klick"](666); this.num++; }}>{this.num2}</p>
                </div>
            );
        } else {
            return <p>Oops,Look like it was hided</p>
        }
    }
    data() {
        return {
            num: 1
        };
    }
    created() {
        console.log("CREATED");
    }
    updated() {
        console.log("UPDATED");
    }
    mounted() {
        console.log("MOUNTED");
    }
    destoryed() {
        console.log("DESTORYED");
    }
}

@VueClassComponent.default
class App extends Vue {
    render(h) {
        var NavBarFilter=<NavBar data={[
            {
                label: "111",
                text: "数学"
            },
            {
                label: "222",
                text: "英语"
            },
            {
                label: "333",
                text: "物理"
            }
        ]} style={{
            "color": "#080",
            "background-color": "#ccc"
        }} show={true}
            onKlick={this.yfClick} />;

        if (0) {
            return (
                <div>
                    Vue-JSX
                    NOTHING
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={this.destoryedCp}>123</button>
                    Vue-JSX
                    {NavBarFilter}
                </div>
            );
        }
    }
    data() {
        return {
            isDestory:false
        };
    }
    yfClick(d) {
        console.log("The event 'YfClick' is emited", d);
    }
    nativeClick(d) {
        console.log("The event 'nativeClick' is emited", d);
    }
    mounted() {
        this.cp=this.$children[0];
        console.log(this.$children);
    }
    destoryedCp() {
        this.cp.$destroy();
    }
}

new Vue({
    data() {
        return {
            msg: "Hello"
        }
    },
    render: (h) => h(App)
}).$mount("#app");