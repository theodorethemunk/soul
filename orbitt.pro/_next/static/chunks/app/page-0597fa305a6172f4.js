(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        20111: function(e, t, a) {
            Promise.resolve().then(a.t.bind(a, 62038, 23)), Promise.resolve().then(a.bind(a, 55728)), Promise.resolve().then(a.bind(a, 28059)), Promise.resolve().then(a.bind(a, 96024)), Promise.resolve().then(a.bind(a, 50434)), Promise.resolve().then(a.t.bind(a, 28451, 23)), Promise.resolve().then(a.t.bind(a, 57673, 23)), Promise.resolve().then(a.t.bind(a, 68372, 23)), Promise.resolve().then(a.t.bind(a, 81749, 23)), Promise.resolve().then(a.bind(a, 38128)), Promise.resolve().then(a.bind(a, 23327)), Promise.resolve().then(a.bind(a, 70814)), Promise.resolve().then(a.bind(a, 11896))
        },
        86680: function(e, t, a) {
            "use strict";
            var s = a(57437),
                i = a(62038),
                r = a.n(i);
            t.Z = e => {
                let {
                    text: t,
                    href: a,
                    type: i
                } = e;
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("a", {
                        className: "".concat(r().button, " ArrowButton ").concat("shapes" === i ? r().shapes : ""),
                        href: a,
                        target: "_blank",
                        style: "white" === i ? {
                            background: "unset",
                            border: "1px solid #fff",
                            margin: "auto"
                        } : {},
                        children: (0, s.jsx)("div", {
                            className: r().inner,
                            style: "white" === i ? {
                                background: "#fff0"
                            } : {},
                            children: t
                        })
                    })
                })
            }
        },
        55728: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return y
                }
            });
            var s = a(57437),
                i = a(16691),
                r = a.n(i),
                n = a(72803),
                o = a.n(n),
                d = a(38128),
                l = {
                    src: "/_next/static/media/tg_color_2.9ab0fcef.png",
                    height: 40,
                    width: 40,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4ElEQVR42mMAgaWh95kq2y8yMSABj9erVNzfrApgQAYhq45Jeh7dbeVxb30iUEE4UEEPwyXV1+zzo+4alrZeSvRYcyzQ6+DeKs/TO6pAGoAKkhnOGb6cusvjSWNdwVWF3M4Lwb7rj+z02rlfwePDcmGPJ2tTGW5rvOE8afzCZa3fw5Tq+ssTkqecNQTp9j23w9jzyhZUN0xKv+naUH0lB8R2O73T3PvwHluGCwYvGU/rv2RqLb3GDJKoarikntN1ISNgzbEmt50HZRiQQWP1FRYQ7bn4FHP4glMuyjsOMAMANUhfMQufqEEAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                c = a(48949),
                h = a.n(c),
                x = e => {
                    let {
                        text: t,
                        href: a,
                        icon: i,
                        type: n
                    } = e;
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("a", {
                            className: h().button,
                            href: a,
                            target: "_blank",
                            style: "white" === n ? {
                                background: "unset",
                                border: "1px solid #fff"
                            } : {},
                            children: (0, s.jsxs)("div", {
                                className: h().inner,
                                style: "white" === n ? {
                                    background: "#fff0"
                                } : {},
                                children: [t, (0, s.jsx)(r(), {
                                    src: i,
                                    alt: "Logo",
                                    className: h().img
                                })]
                            })
                        })
                    })
                },
                p = a(86680),
                u = a(43645),
                A = a.n(u),
                m = a(68527),
                f = {
                    src: "/_next/static/media/xMenu.bb83a6af.webp",
                    height: 60,
                    width: 60,
                    blurDataURL: "data:image/webp;base64,UklGRpQAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEAAAAABcGLb1rKcT353SX91739kPiwyi0F4dcjMNyJCgpQg2RWQb6H5ePqxoCiPtx4l4PcHibhP1d2C/QbWAypGKXwFVlA4IC4AAAAQAgCdASoIAAgAAkA4JbACdLoB+AH4AAPIAP7kAX/1Z9NCL+0j/9QWCsy/ZAAA",
                    blurWidth: 8,
                    blurHeight: 8
                },
                g = a(2265),
                _ = a(23327),
                b = a(70814),
                j = a(7472),
                w = () => {
                    let [e, t] = (0, g.useState)(!1);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("button", {
                            className: A().burger,
                            onClick: () => t(!0),
                            children: [(0, s.jsx)("span", {}), (0, s.jsx)("span", {}), (0, s.jsx)("span", {})]
                        }), (0, s.jsxs)("div", {
                            className: "".concat(A().mobileMenu, " ").concat(e ? A().open : ""),
                            children: [(0, s.jsxs)("div", {
                                className: A().close,
                                onClick: () => t(!1),
                                children: [(0, s.jsx)("div", {
                                    children: (0, s.jsx)(r(), {
                                        src: m.Z,
                                        alt: "Logo",
                                        width: 170,
                                        height: 59
                                    })
                                }), (0, s.jsx)("div", {
                                    children: (0, s.jsx)(r(), {
                                        src: f,
                                        alt: "Logo",
                                        width: 30,
                                        height: 30
                                    })
                                })]
                            }), (0, s.jsxs)("div", {
                                className: A().arrowButtons,
                                children: [(0, s.jsx)(p.Z, {
                                    text: "Buy on Uniswap",
                                    href: "https://app.uniswap.org/tokens/ethereum/"
                                }), (0, s.jsx)("br", {}), (0, s.jsx)(p.Z, {
                                    text: "Buy on Raydium",
                                    href: "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=9HnKM5xiDHYGEjBbSjz6hrjyWW7KDRbGu6GKpsFeoCWP&outputSymbol=ORBT&fixed=in"
                                }), (0, s.jsx)("br", {}), (0, s.jsx)(p.Z, {
                                    text: "Buy on Toobit",
                                    href: "https://www.toobit.com/en-US/spot/ORBT_USDT"
                                }), (0, s.jsx)("br", {}), (0, s.jsx)(p.Z, {
                                    text: "Buy on Coinstore",
                                    href: "https://www.coinstore.com/#/spot/ORBTUSDT"
                                })]
                            }), (0, s.jsxs)("nav", {
                                className: A().nav,
                                children: [(0, s.jsxs)("div", {
                                    className: A().navItems,
                                    children: [(0, s.jsx)("a", {
                                        href: "https://www.dextools.io/app/en/ether/pair-explorer/",
                                        target: "_blank",
                                        children: "Dextools"
                                    }), (0, s.jsx)("a", {
                                        href: "https://birdeye.so/token/?chain=solana",
                                        target: "_blank",
                                        children: "Birdeye"
                                    })]
                                }), (0, s.jsx)(j.Z, {}), (0, s.jsxs)("div", {
                                    className: A().socialsContainer,
                                    children: [(0, s.jsx)("a", {
                                        href: "https://twitter.com/",
                                        children: (0, s.jsx)(r(), {
                                            src: _.default,
                                            alt: "Logo",
                                            width: 25,
                                            height: 22
                                        })
                                    }), (0, s.jsx)("a", {
                                        href: "https://t.me/+",
                                        children: (0, s.jsx)(r(), {
                                            src: b.default,
                                            alt: "Logo",
                                            width: 25,
                                            height: 22
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                y = () => (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("div", {
                        className: o().header,
                        children: [(0, s.jsx)(r(), {
                            src: d.default,
                            alt: "Logo",
                            width: 225,
                            height: 59
                        }), (0, s.jsx)(w, {}), (0, s.jsxs)("nav", {
                            className: o().nav,
                            children: [(0, s.jsxs)("div", {
                                className: o().navItems,
                                children: [(0, s.jsxs)("div", {
                                    className: o().dropdown,
                                    children: [(0, s.jsx)("p", {
                                        children: "Buy"
                                    }), (0, s.jsxs)("div", {
                                        className: o().dropdownContent,
                                        children: [(0, s.jsx)("a", {
                                            href: "https://app.uniswap.org/tokens/ethereum/",
                                            target: "_blank",
                                            children: "Uniswap"
                                        }), (0, s.jsx)("a", {
                                            href: "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=&outputSymbol=ORBT&fixed=in",
                                            target: "_blank",
                                            children: "Raydium"
                                        }), (0, s.jsx)("a", {
                                            href: "https://www.toobit.com/en-US/spot/ORBT_USDT",
                                            target: "_blank",
                                            children: "Toobit"
                                        }), (0, s.jsx)("a", {
                                            href: "https://www.coinstore.com/#/spot/ORBTUSDT",
                                            target: "_blank",
                                            children: "Coinstore"
                                        })]
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: o().dropdown,
                                    children: [(0, s.jsx)("p", {
                                        children: "Chart"
                                    }), (0, s.jsxs)("div", {
                                        className: o().dropdownContent,
                                        children: [(0, s.jsx)("a", {
                                            href: "https://www.dextools.io/app/en/ether/pair-explorer/",
                                            target: "_blank",
                                            children: "Dextools"
                                        }), (0, s.jsx)("a", {
                                            href: "https://birdeye.so/token/?chain=solana",
                                            target: "_blank",
                                            children: "Birdeye"
                                        })]
                                    })]
                                }), (0, s.jsx)("a", {
                                    href: "https://gitbook.io",
                                    target: "_blank",
                                    children: "Path"
                                }), (0, s.jsx)("a", {
                                    href: "https://twitter.com/",
                                    target: "_blank",
                                    children: "Twitter"
                                })]
                            }), (0, s.jsx)(x, {
                                text: "Community",
                                href: "https://t.me/+",
                                icon: l
                            })]
                        })]
                    })
                })
        },
        7472: function(e, t, a) {
            "use strict";
            var s = a(57437),
                i = a(16691),
                r = a.n(i),
                n = a(91670),
                o = a.n(n),
                d = a(20313),
                l = a(93056),
                c = a(35147),
                h = a(5925);
            t.Z = () => {
                let e = e => {
                    e && navigator.clipboard.writeText(e).then(() => h.toast.success("Copied!")).catch(e => console.error("Failed to copy text: ", e))
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)("p", {
                        className: o().caMobile,
                        children: "Contract address:"
                    }), (0, s.jsxs)("div", {
                        className: o().ca,
                        onClick: () => e("Contract will be uploaded soon!"),
                        children: [(0, s.jsx)(r(), {
                            src: l.Z,
                            className: o().chainIcon,
                            alt: "ETH",
                            height: 30,
                            width: 30
                        }), (0, s.jsx)("p", {
                            children: "Contract will be uploaded soon!"
                        }), (0, s.jsx)(r(), {
                            src: d.Z,
                            className: o().copyIcon,
                            alt: "Copy",
                            height: 20,
                            width: 20
                        })]
                    }), (0, s.jsxs)("div", {
                        className: o().ca,
                        onClick: () => e("9HnKM5xiDHYGEjBbSjz6hrjyWW7KDRbGu6GKpsFeoCWP"),
                        children: [(0, s.jsx)(r(), {
                            src: c.Z,
                            className: o().chainIcon,
                            alt: "Sol",
                            height: 30,
                            width: 30
                        }), (0, s.jsx)("p", {
                            children: "9HnKM5xiDHYGEjBbSjz6hrjyWW7KDRbGu6GKpsFeoCWP"
                        }), (0, s.jsx)(r(), {
                            src: d.Z,
                            className: o().copyIcon,
                            alt: "Copy",
                            height: 20,
                            width: 20
                        })]
                    })]
                })
            }
        },
        28059: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var s = a(57437),
                i = a(47424),
                r = a.n(i),
                n = JSON.parse('{"v":"5.9.0","fr":30,"ip":0,"op":247,"w":500,"h":500,"nm":"gemini robot","ddd":0,"assets":[{"id":"image_0","w":1092,"h":996,"u":"animations/Robot/images/","p":"img_0.png","e":0},{"id":"image_1","w":444,"h":457,"u":"animations/Robot/images/","p":"img_1.png","e":0},{"id":"image_2","w":572,"h":572,"u":"animations/Robot/images/","p":"img_2.png","e":0},{"id":"comp_0","nm":"robot","fr":30,"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"Ellipse 10.png","cl":"png","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[238,274,0],"ix":2,"l":2},"a":{"a":0,"k":[546,498,0],"ix":1,"l":2},"s":{"a":0,"k":[41,41,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":450,"st":0,"bm":7},{"ddd":0,"ind":2,"ty":2,"nm":"Gemini 2.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[254,218,0],"ix":2,"l":2},"a":{"a":0,"k":[222,228.5,0],"ix":1,"l":2},"s":{"a":0,"k":[72,72,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":450,"st":0,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"robot","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.1],"y":[1]},"o":{"x":[0.33],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.1],"y":[1]},"o":{"x":[0.33],"y":[0]},"t":110.253,"s":[17]},{"i":{"x":[0.1],"y":[1]},"o":{"x":[0.33],"y":[0]},"t":183.754,"s":[-37]},{"t":247,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.1,"y":1},"o":{"x":0.33,"y":0},"t":0,"s":[232,324,0],"to":[6.667,-4,0],"ti":[-0.333,16,0]},{"i":{"x":0.342,"y":0.555},"o":{"x":0.48,"y":0},"t":90,"s":[272,300,0],"to":[0.258,-12.369,0],"ti":[20.141,25.368,0]},{"i":{"x":0.545,"y":1},"o":{"x":0.229,"y":0.193},"t":134,"s":[291.306,228.668,0],"to":[-5.913,-7.447,0],"ti":[2.572,0.378,0]},{"i":{"x":0.1,"y":1},"o":{"x":0.33,"y":0},"t":174.353,"s":[234,228,0],"to":[-11.333,-1.667,0],"ti":[0.333,-16,0]},{"t":247,"s":[232,324,0]}],"ix":2,"l":2},"a":{"a":0,"k":[250,250,0],"ix":1,"l":2},"s":{"a":1,"k":[{"i":{"x":[0.1,0.1,0.1],"y":[1,1,1]},"o":{"x":[0.33,0.33,0.33],"y":[0,0,0]},"t":0,"s":[100,100,100]},{"i":{"x":[0.1,0.1,0.1],"y":[1,1,1]},"o":{"x":[0.33,0.33,0.33],"y":[0,0,0]},"t":95.724,"s":[82,82,100]},{"i":{"x":[0.1,0.1,0.1],"y":[1,1,1]},"o":{"x":[0.33,0.33,0.33],"y":[0,0,0]},"t":166.661,"s":[95,95,100]},{"t":247,"s":[100,100,100]}],"ix":6,"l":2}},"ao":0,"ef":[{"ty":29,"nm":"Gaussian Blur","np":5,"mn":"ADBE Gaussian Blur 2","ix":1,"en":1,"ef":[{"ty":0,"nm":"Blurriness","mn":"ADBE Gaussian Blur 2-0001","ix":1,"v":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":53.845,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":61.536,"s":[14.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":66.664,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":130.765,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":143.585,"s":[14.3]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":164.097,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":203.412,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":216.231,"s":[14.3]},{"t":231.6162109375,"s":[0]}],"ix":1}},{"ty":7,"nm":"Blur Dimensions","mn":"ADBE Gaussian Blur 2-0002","ix":2,"v":{"a":0,"k":1,"ix":2}},{"ty":7,"nm":"Repeat Edge Pixels","mn":"ADBE Gaussian Blur 2-0003","ix":3,"v":{"a":0,"k":1,"ix":3}}]}],"w":500,"h":500,"ip":0,"op":450,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"Frame 1597881037.png","cl":"png","refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2,"l":2},"a":{"a":0,"k":[286,286,0],"ix":1,"l":2},"s":{"a":0,"k":[60,60,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":450,"st":0,"bm":0}],"markers":[]}'),
                o = a(66475),
                d = a.n(o),
                l = a(7472),
                c = () => (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsxs)("div", {
                        className: d().hero,
                        children: [(0, s.jsxs)("div", {
                            className: d().leftSide,
                            children: [(0, s.jsxs)("h1", {
                                children: ["Awaken to your ", (0, s.jsx)("span", {
                                    children: "SOUL" "within you"
                                })]
                            }), (0, s.jsxs)("p", {
                                children: ["Navigate the Future of Trading with Our AI-Enhanced Chrome Extension.", (0, s.jsx)("br", {}), "Start your AI-powered investment journey with Orbitt PRO today!"]
                            })]
                        }), (0, s.jsx)("div", {
                            className: "flex flex-col w-full justify-center items-center kv1",
                            children: (0, s.jsx)(r(), {
                                animationData: n,
                                className: "flex justify-center items-center",
                                loop: !0
                            })
                        })]
                    }), (0, s.jsx)(l.Z, {})]
                })
        },
        96024: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return y
                }
            });
            var s = a(57437),
                i = a(2265),
                r = a(16691),
                n = a.n(r),
                o = a(79934),
                d = a.n(o),
                l = a(33885),
                c = a.n(l),
                h = e => {
                    let {
                        mouseOver: t
                    } = e, [a, r] = (0, i.useState)({
                        x: "-45",
                        y: "-45",
                        rx: "50",
                        ry: "50",
                        width: "90",
                        height: "90",
                        transform: "matrix(1,0,0,1,0,0)"
                    });
                    return (0, i.useEffect)(() => {
                        t ? r({
                            x: "-35",
                            y: "-35",
                            rx: "12",
                            ry: "12",
                            width: "70",
                            height: "70",
                            transform: "matrix(0.70711,0.70711,-0.70711,0.70711,0,0)"
                        }) : r({
                            x: "-45",
                            y: "-45",
                            rx: "50",
                            ry: "50",
                            width: "90",
                            height: "90",
                            transform: "matrix(1,0,0,1,0,0)"
                        })
                    }, [t]), (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("div", {
                            className: c().shape,
                            children: (0, s.jsxs)("svg", {
                                viewBox: "0 0 100 100",
                                width: "286px",
                                height: "100%",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, s.jsxs)("defs", {
                                    children: [(0, s.jsxs)("linearGradient", {
                                        id: "gradient-sizes-0",
                                        children: [(0, s.jsx)("stop", {
                                            offset: "15%",
                                            stopColor: "#48ecaa",
                                            children: (0, s.jsx)("animate", {
                                                attributeName: "stopColor",
                                                values: "#48ecaa;#d030ea;#48ecaa",
                                                dur: "2s",
                                                repeatCount: "indefinite"
                                            })
                                        }), (0, s.jsx)("stop", {
                                            offset: "60%",
                                            stopColor: "#4cabc7",
                                            children: (0, s.jsx)("animate", {
                                                attributeName: "offset",
                                                values: ".5;.2;.5",
                                                dur: "2.1s",
                                                repeatCount: "indefinite"
                                            })
                                        }), (0, s.jsxs)("stop", {
                                            offset: "100%",
                                            stopColor: "#d030ea",
                                            children: [(0, s.jsx)("animate", {
                                                attributeName: "offset",
                                                values: "1;.9;1",
                                                dur: "2.1s",
                                                repeatCount: "indefinite"
                                            }), (0, s.jsx)("animate", {
                                                attributeName: "stopColor",
                                                values: "#d030ea;#4cabc7;#d030ea",
                                                dur: "2.1s",
                                                repeatCount: "indefinite"
                                            })]
                                        }), (0, s.jsx)("animateTransform", {
                                            attributeName: "gradientTransform",
                                            type: "rotate",
                                            from: "0 .5 .5",
                                            to: "360 .5 .5",
                                            dur: "3.6s",
                                            repeatCount: "indefinite"
                                        })]
                                    }), (0, s.jsxs)("linearGradient", {
                                        id: "gradient",
                                        children: [(0, s.jsx)("stop", {
                                            offset: "0%",
                                            stopColor: "#FFDDB7",
                                            stopOpacity: "0",
                                            children: (0, s.jsx)("animate", {
                                                attributeName: "stopColor",
                                                values: "#FFDDB7;#086FFF",
                                                dur: "10s",
                                                repeatCount: "indefinite"
                                            })
                                        }), (0, s.jsx)("stop", {
                                            offset: "50",
                                            stopColor: "#086FFF",
                                            children: (0, s.jsx)("animate", {
                                                attributeName: "stopColor",
                                                values: "#086FFF;#FFDDB7;#086FFF",
                                                dur: "10s",
                                                repeatCount: "indefinite"
                                            })
                                        }), (0, s.jsx)("animateTransform", {
                                            attributeName: "gradientTransform",
                                            type: "rotate",
                                            from: "0 .5 .5",
                                            to: "360 .5 .5",
                                            dur: "2.8s",
                                            repeatCount: "indefinite"
                                        })]
                                    })]
                                }), (0, s.jsx)("rect", {
                                    x: "0",
                                    y: "0",
                                    width: "100%",
                                    height: "100%",
                                    fill: "url(#gradient-sizes-0)",
                                    mask: "url(#shape-sizes-0)"
                                }), (0, s.jsx)("mask", {
                                    id: "shape-sizes-0",
                                    children: (0, s.jsx)("g", {
                                        transform: "translate(50, 50)",
                                        children: (0, s.jsx)("rect", {
                                            fill: "black",
                                            stroke: "white",
                                            strokeWidth: "2",
                                            x: a.x,
                                            y: a.y,
                                            rx: a.rx,
                                            ry: a.ry,
                                            width: a.width,
                                            height: a.height,
                                            "data-rotation": "0",
                                            "data-radius-enter": "12",
                                            "data-radius-leave": "50",
                                            "data-x-enter": "-35",
                                            "data-x-leave": "-45",
                                            "data-y-enter": "-35",
                                            "data-y-leave": "-45",
                                            "data-width-enter": "70",
                                            "data-width-leave": "90",
                                            "data-height-enter": "70",
                                            "data-height-leave": "90",
                                            className: "js-rect",
                                            style: {
                                                transition: "x 0.5s, y 0.5s, rx 0.5s, ry 0.5s, width 0.5s, height 0.5s, transform 0.5s",
                                                transform: "none",
                                                rotate: "none",
                                                scale: "none",
                                                transformOrigin: "0px 0px"
                                            },
                                            "data-svg-origin": "0 0",
                                            transform: a.transform
                                        })
                                    })
                                })]
                            })
                        })
                    })
                },
                x = a(36156),
                p = a.n(x),
                u = e => {
                    let {
                        mouseOver: t
                    } = e, a = {
                        x: "-45",
                        y: "-45",
                        rx: "12",
                        ry: "12",
                        width: "90",
                        height: "90",
                        transform: "matrix(1,0,0,1,0,0)"
                    }, [r, n] = (0, i.useState)(a);
                    return (0, i.useEffect)(() => {
                        t ? n({
                            x: "-30",
                            y: "-30",
                            rx: "24",
                            ry: "24",
                            width: "60",
                            height: "60",
                            transform: "matrix(0.70711,0.70711,-0.70711,0.70711,0,0)"
                        }) : n(a)
                    }, [t]), (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("div", {
                            className: p().shape,
                            children: (0, s.jsxs)("svg", {
                                viewBox: "0 0 100 100",
                                width: "286px",
                                height: "100%",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, s.jsxs)("defs", {
                                    children: [(0, s.jsxs)("linearGradient", {
                                        id: "gradient-sizes-1",
                                        children: [(0, s.jsx)("stop", {
                                            offset: "15%",
                                            stopColor: "#48ecaa",
                                            children: (0, s.jsx)("animate", {
                                                attributeName: "stopColor",
                                                values: "#48ecaa;#d030ea;#48ecaa",
                                                dur: "2s",
                                                repeatCount: "indefinite"
                                            })
                                        }), (0, s.jsx)("stop", {
                                            offset: "60%",
                                            stopColor: "#4cabc7",
                                            children: (0, s.jsx)("animate", {
                                                attributeName: "offset",
                                                values: ".5;.2;.5",
                                                dur: "2.1s",
                                                repeatCount: "indefinite"
                                            })
                                        }), (0, s.jsxs)("stop", {
                                            offset: "100%",
                                            stopColor: "#d030ea",
                                            children: [(0, s.jsx)("animate", {
                                                attributeName: "offset",
                                                values: "1;.9;1",
                                                dur: "2.1s",
                                                repeatCount: "indefinite"
                                            }), (0, s.jsx)("animate", {
                                                attributeName: "stopColor",
                                                values: "#d030ea;#4cabc7;#d030ea",
                                                dur: "2.1s",
                                                repeatCount: "indefinite"
                                            })]
                                        }), (0, s.jsx)("animateTransform", {
                                            attributeName: "gradientTransform",
                                            type: "rotate",
                                            from: "0 .5 .5",
                                            to: "360 .5 .5",
                                            dur: "6.3s",
                                            repeatCount: "indefinite"
                                        })]
                                    }), (0, s.jsxs)("linearGradient", {
                                        id: "gradient",
                                        children: [(0, s.jsx)("stop", {
                                            offset: "0%",
                                            stopColor: "#FFDDB7",
                                            stopOpacity: "0",
                                            children: (0, s.jsx)("animate", {
                                                attributeName: "stopColor",
                                                values: "#FFDDB7;#086FFF",
                                                dur: "10s",
                                                repeatCount: "indefinite"
                                            })
                                        }), (0, s.jsx)("stop", {
                                            offset: "50",
                                            stopColor: "#086FFF",
                                            children: (0, s.jsx)("animate", {
                                                attributeName: "stopColor",
                                                values: "#086FFF;#FFDDB7;#086FFF",
                                                dur: "10s",
                                                repeatCount: "indefinite"
                                            })
                                        }), (0, s.jsx)("animateTransform", {
                                            attributeName: "gradientTransform",
                                            type: "rotate",
                                            from: "0 .5 .5",
                                            to: "360 .5 .5",
                                            dur: "4.8999999999999995s",
                                            repeatCount: "indefinite"
                                        })]
                                    })]
                                }), (0, s.jsx)("rect", {
                                    x: "0",
                                    y: "0",
                                    width: "100%",
                                    height: "100%",
                                    fill: "url(#gradient-sizes-1)",
                                    mask: "url(#shape-sizes-1)"
                                }), (0, s.jsx)("mask", {
                                    id: "shape-sizes-1",
                                    children: (0, s.jsx)("g", {
                                        transform: "translate(50, 50)",
                                        children: (0, s.jsx)("rect", {
                                            fill: "black",
                                            stroke: "white",
                                            strokeWidth: "2",
                                            x: r.x,
                                            y: r.y,
                                            rx: r.rx,
                                            ry: r.ry,
                                            width: r.width,
                                            height: r.height,
                                            "data-rotation": "0",
                                            "data-radius-enter": "24",
                                            "data-radius-leave": "12",
                                            "data-x-enter": "-30",
                                            "data-x-leave": "-35",
                                            "data-y-enter": "-30",
                                            "data-y-leave": "-35",
                                            "data-width-enter": "60",
                                            "data-width-leave": "70",
                                            "data-height-enter": "60",
                                            "data-height-leave": "70",
                                            className: "js-rect",
                                            style: {
                                                transition: "x 0.5s, y 0.5s, rx 0.5s, ry 0.5s, width 0.5s, height 0.5s, transform 0.5s",
                                                translate: "none",
                                                rotate: "none",
                                                scale: "none",
                                                transformOrigin: "0px 0px"
                                            },
                                            "data-svg-origin": "0 0",
                                            transform: r.transform
                                        })
                                    })
                                })]
                            })
                        })
                    })
                },
                A = a(22645),
                m = a.n(A),
                f = e => {
                    let {
                        mouseOver: t
                    } = e, a = {
                        x: "-35",
                        y: "-35",
                        rx: "12",
                        ry: "12",
                        width: "70",
                        height: "70",
                        transform: "matrix(0.70711,0.70711,-0.70711,0.70711,0,0)"
                    }, [r, n] = (0, i.useState)(a);
                    return (0, i.useEffect)(() => {
                        t ? n({
                            x: "-25",
                            y: "-25",
                            rx: "24",
                            ry: "24",
                            width: "50",
                            height: "50",
                            transform: "matrix(0,1,-1,0,0,0)"
                        }) : n(a)
                    }, [t]), (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)("div", {
                            className: m().shape,
                            children: (0, s.jsxs)("svg", {
                                viewBox: "0 0 100 100",
                                width: "286px",
                                height: "100%",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0, s.jsxs)("defs", {
                                    children: [(0, s.jsxs)("linearGradient", {
                                        id: "gradient-sizes-2",
                                        children: [(0, s.jsx)("stop", {
                                            offset: "15%",
                                            stopColor: "#48ecaa",
                                            children: (0, s.jsx)("animate", {
                                                attributeName: "stopColor",
                                                values: "#48ecaa;#d030ea;#48ecaa",
                                                dur: "2s",
                                                repeatCount: "indefinite"
                                            })
                                        }), (0, s.jsx)("stop", {
                                            offset: "60%",
                                            stopColor: "#4cabc7",
                                            children: (0, s.jsx)("animate", {
                                                attributeName: "offset",
                                                values: ".5;.2;.5",
                                                dur: "2.1s",
                                                repeatCount: "indefinite"
                                            })
                                        }), (0, s.jsxs)("stop", {
                                            offset: "100%",
                                            stopColor: "#d030ea",
                                            children: [(0, s.jsx)("animate", {
                                                attributeName: "offset",
                                                values: "1;.9;1",
                                                dur: "2.1s",
                                                repeatCount: "indefinite"
                                            }), (0, s.jsx)("animate", {
                                                attributeName: "stopColor",
                                                values: "#d030ea;#4cabc7;#d030ea",
                                                dur: "2.1s",
                                                repeatCount: "indefinite"
                                            })]
                                        }), (0, s.jsx)("animateTransform", {
                                            attributeName: "gradientTransform",
                                            type: "rotate",
                                            from: "0 .5 .5",
                                            to: "360 .5 .5",
                                            dur: "9s",
                                            repeatCount: "indefinite"
                                        })]
                                    }), (0, s.jsxs)("linearGradient", {
                                        id: "gradient",
                                        children: [(0, s.jsx)("stop", {
                                            offset: "0%",
                                            stopColor: "#FFDDB7",
                                            stopOpacity: "0",
                                            children: (0, s.jsx)("animate", {
                                                attributeName: "stopColor",
                                                values: "#FFDDB7;#086FFF",
                                                dur: "10s",
                                                repeatCount: "indefinite"
                                            })
                                        }), (0, s.jsx)("stop", {
                                            offset: "50",
                                            stopColor: "#086FFF",
                                            children: (0, s.jsx)("animate", {
                                                attributeName: "stopColor",
                                                values: "#086FFF;#FFDDB7;#086FFF",
                                                dur: "10s",
                                                repeatCount: "indefinite"
                                            })
                                        }), (0, s.jsx)("animateTransform", {
                                            attributeName: "gradientTransform",
                                            type: "rotate",
                                            from: "0 .5 .5",
                                            to: "360 .5 .5",
                                            dur: "7s",
                                            repeatCount: "indefinite"
                                        })]
                                    })]
                                }), (0, s.jsx)("rect", {
                                    x: "0",
                                    y: "0",
                                    width: "100%",
                                    height: "100%",
                                    fill: "url(#gradient-sizes-2)",
                                    mask: "url(#shape-sizes-2)"
                                }), (0, s.jsx)("mask", {
                                    id: "shape-sizes-2",
                                    children: (0, s.jsx)("g", {
                                        transform: "translate(50, 50)",
                                        children: (0, s.jsx)("rect", {
                                            fill: "black",
                                            stroke: "white",
                                            strokeWidth: "2",
                                            x: r.x,
                                            y: r.y,
                                            rx: r.rx,
                                            ry: r.ry,
                                            width: r.width,
                                            height: r.height,
                                            "data-rotation": "45",
                                            "data-radius-enter": "24",
                                            "data-radius-leave": "12",
                                            "data-x-enter": "-25",
                                            "data-x-leave": "-25",
                                            "data-y-enter": "-25",
                                            "data-y-leave": "-25",
                                            "data-width-enter": "50",
                                            "data-width-leave": "50",
                                            "data-height-enter": "50",
                                            "data-height-leave": "50",
                                            className: "js-rect",
                                            style: {
                                                transition: "x 0.5s, y 0.5s, rx 0.5s, ry 0.5s, width 0.5s, height 0.5s, transform 0.5s",
                                                translate: "none",
                                                rotate: "none",
                                                scale: "none",
                                                transformOrigin: "0px 0px"
                                            },
                                            "data-svg-origin": "0 0",
                                            transform: "matrix(0.70711,0.70711,-0.70711,0.70711,0,0)"
                                        })
                                    })
                                })]
                            })
                        })
                    })
                },
                g = a(86680),
                _ = a(5925),
                b = a(20313),
                j = a(93056),
                w = a(35147),
                y = () => {
                    let [e, t] = (0, i.useState)(!1), [a, r] = (0, i.useState)(!1), [o, l] = (0, i.useState)(!1), c = e => {
                        e && navigator.clipboard.writeText(e).then(() => _.toast.success("Copied!")).catch(e => console.error("Failed to copy text: ", e))
                    };
                    return (0, s.jsxs)("div", {
                        className: d().shapesContainer,
                        children: [(0, s.jsxs)("div", {
                            className: d().row,
                            children: [(0, s.jsxs)("div", {
                                className: d().shapeContainer,
                                onMouseEnter: () => r(!0),
                                onMouseLeave: () => r(!1),
                                children: [(0, s.jsxs)("div", {
                                    className: d().shape,
                                    children: [(0, s.jsx)(u, {
                                        mouseOver: a
                                    }), (0, s.jsx)("p", {
                                        className: d().shapeTextIn,
                                        children: "10M"
                                    })]
                                }), (0, s.jsx)("p", {
                                    className: d().shapeTextBelow,
                                    children: "Total Supply"
                                })]
                            }), (0, s.jsxs)("div", {
                                className: d().shapeContainer,
                                onMouseEnter: () => t(!0),
                                onMouseLeave: () => t(!1),
                                children: [(0, s.jsxs)("div", {
                                    className: d().shape,
                                    children: [(0, s.jsx)(h, {
                                        mouseOver: e
                                    }), (0, s.jsx)("p", {
                                        className: d().shapeTextIn,
                                        children: "3%"
                                    })]
                                }), (0, s.jsx)("p", {
                                    className: d().shapeTextBelow,
                                    children: "Buy Tax"
                                })]
                            }), (0, s.jsxs)("div", {
                                className: d().shapeContainer,
                                onMouseEnter: () => l(!0),
                                onMouseLeave: () => l(!1),
                                children: [(0, s.jsxs)("div", {
                                    className: d().shape,
                                    children: [(0, s.jsx)(f, {
                                        mouseOver: o
                                    }), (0, s.jsx)("p", {
                                        className: d().shapeTextIn,
                                        children: "3%"
                                    })]
                                }), (0, s.jsx)("p", {
                                    className: d().shapeTextBelow,
                                    children: "Sell Tax"
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            children: [(0, s.jsx)("p", {
                                className: d().caMobile,
                                children: "Contract address:"
                            }), (0, s.jsxs)("div", {
                                className: d().ca,
                                onClick: () => c("Contract will be uploaded soon!"),
                                children: [(0, s.jsx)(n(), {
                                    src: j.Z,
                                    className: d().chainIcon,
                                    alt: "ETH",
                                    height: 30,
                                    width: 30
                                }), (0, s.jsx)("p", {
                                    children: "Contract will be uploaded soon!"
                                }), (0, s.jsx)(n(), {
                                    src: b.Z,
                                    className: d().copyIcon,
                                    alt: "Copy",
                                    height: 20,
                                    width: 20
                                })]
                            }), (0, s.jsxs)("div", {
                                className: d().ca,
                                onClick: () => c("9HnKM5xiDHYGEjBbSjz6hrjyWW7KDRbGu6GKpsFeoCWP"),
                                children: [(0, s.jsx)(n(), {
                                    src: w.Z,
                                    className: d().chainIcon,
                                    alt: "Sol",
                                    height: 30,
                                    width: 30
                                }), (0, s.jsx)("p", {
                                    children: "9HnKM5xiDHYGEjBbSjz6hrjyWW7KDRbGu6GKpsFeoCWP"
                                }), (0, s.jsx)(n(), {
                                    src: b.Z,
                                    className: d().copyIcon,
                                    alt: "Copy",
                                    height: 20,
                                    width: 20
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: d().ContainerShapesButton,
                            children: [(0, s.jsx)(g.Z, {
                                text: "Uniswap",
                                href: "https://app.uniswap.org/tokens/ethereum/",
                                type: "shapes"
                            }), (0, s.jsx)(g.Z, {
                                text: "Raydium",
                                href: "https://raydium.io/swap/?inputCurrency=sol&outputCurrency=9HnKM5xiDHYGEjBbSjz6hrjyWW7KDRbGu6GKpsFeoCWP&outputSymbol=ORBT&fixed=in",
                                type: "shapes"
                            }), (0, s.jsx)(g.Z, {
                                text: "Etherscan",
                                href: "https://etherscan.io/address/",
                                type: "shapes"
                            })]
                        })]
                    })
                }
        },
        50434: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a(57437),
                i = a(65611),
                r = a.n(i),
                n = a(86680);
            t.default = () => (0, s.jsx)(s.Fragment, {
                children: (0, s.jsxs)("div", {
                    className: r().main,
                    children: [(0, s.jsxs)("h2", {
                        className: r().sectionHeading2,
                        children: [(0, s.jsx)("span", {
                            style: {
                                backgroundImage: "linear-gradient(183deg, #68a1c5 36%,#886ed1  53%,  #b149dd 80%)"
                            },
                            children: "Orbitt PRO:"
                        }), " ", "AI Meets Crypto"]
                    }), (0, s.jsx)("div", {
                        className: r().compare,
                        children: (0, s.jsx)("div", {
                            className: "".concat(r().inner),
                            children: (0, s.jsx)("video", {
                                autoPlay: !0,
                                controls: !0,
                                muted: !0,
                                loop: !0,
                                style: {
                                    width: "100%"
                                },
                                children: (0, s.jsx)("source", {
                                    src: "Orbittvideo_1.mp4"
                                })
                            })
                        })
                    }), (0, s.jsx)("div", {
                        className: r().buttons,
                        children: (0, s.jsx)(n.Z, {
                            text: "Access Beta",
                            href: "/ai"
                        })
                    })]
                })
            })
        },
        62038: function(e) {
            e.exports = {
                button: "ArrowButton_button___pzXh",
                shapes: "ArrowButton_shapes__00oD8",
                inner: "ArrowButton_inner__jSW7G"
            }
        },
        48949: function(e) {
            e.exports = {
                button: "SocialButton_button__YiBiz",
                inner: "SocialButton_inner__UTARO",
                img: "SocialButton_img__7DmE5"
            }
        },
        57673: function(e) {
            e.exports = {
                containerFooterNain: "footer_containerFooterNain__0rZ09",
                containerFooterLogo: "footer_containerFooterLogo__igXyD",
                containerButtonFooter: "footer_containerButtonFooter___c723",
                Twitter: "footer_Twitter__qSShv",
                Telegram: "footer_Telegram__RmeLp",
                lineContainer: "footer_lineContainer__OeNkb",
                footerNoteRow: "footer_footerNoteRow__ILpNX",
                footerText: "footer_footerText__a39I1",
                uNite: "footer_uNite__U9XpW"
            }
        },
        72803: function(e) {
            e.exports = {
                header: "Header_header__rEoCd",
                nav: "Header_nav__fXrYZ",
                navItems: "Header_navItems__zfRQZ",
                dropdown: "Header_dropdown__l7H_o",
                dropdownContent: "Header_dropdownContent__5bErC"
            }
        },
        43645: function(e) {
            e.exports = {
                burger: "Mobile_burger__l808x",
                mobileMenu: "Mobile_mobileMenu___uM_i",
                socialsContainer: "Mobile_socialsContainer__SBfRK",
                arrowButtons: "Mobile_arrowButtons__iyqX2",
                open: "Mobile_open__obD6n",
                navItems: "Mobile_navItems__ZS_mG",
                close: "Mobile_close__Ezwfl"
            }
        },
        68372: function(e) {
            e.exports = {
                gradientSection: "GradientSection_gradientSection__4FUXI",
                gradientSectionParagraf: "GradientSection_gradientSectionParagraf__SAY0G",
                ArrowButton: "GradientSection_ArrowButton___xYVD",
                gradientSectionParagrafMobile: "GradientSection_gradientSectionParagrafMobile__nqOc3"
            }
        },
        91670: function(e) {
            e.exports = {
                ca: "CA_ca__RlM3b",
                chainIcon: "CA_chainIcon__hqIXK",
                copyIcon: "CA_copyIcon__uzTBi",
                caMobile: "CA_caMobile__vQ_5C"
            }
        },
        66475: function(e) {
            e.exports = {
                hero: "Hero_hero__g3wzR",
                kv1: "Hero_kv1__sxkHN",
                leftSide: "Hero_leftSide__VHUuf",
                shine: "Hero_shine__owH0N"
            }
        },
        79934: function(e) {
            e.exports = {
                shapesContainer: "ShapesSection_shapesContainer__mxXk3",
                ContainerShapesButton: "ShapesSection_ContainerShapesButton__huaRS",
                ca: "ShapesSection_ca__J35C6",
                chainIcon: "ShapesSection_chainIcon__PEmv3",
                copyIcon: "ShapesSection_copyIcon__Vt_JT",
                caMobile: "ShapesSection_caMobile__3E4hg",
                row: "ShapesSection_row__r_v2M",
                shapeContainer: "ShapesSection_shapeContainer__b2DKS",
                shape: "ShapesSection_shape___4kpP",
                shapeTextIn: "ShapesSection_shapeTextIn__q9UvI",
                shapeTextBelow: "ShapesSection_shapeTextBelow__2AMz4"
            }
        },
        33885: function() {},
        22645: function() {},
        36156: function() {},
        65611: function(e) {
            e.exports = {
                main: "VideoSection_main__x5cEy",
                sectionHeading2: "VideoSection_sectionHeading2__wlbkk",
                buttons: "VideoSection_buttons__q2yHo",
                compare: "VideoSection_compare__dys3R",
                inner: "VideoSection_inner__hjmic"
            }
        },
        28451: function(e) {
            e.exports = {
                main: "page_main__ux7yf",
                SectionImg: "page_SectionImg__unWwJ",
                row: "page_row__tnNGc",
                sectionHeading: "page_sectionHeading__wcwuJ",
                sectionText: "page_sectionText__Sn8q1",
                textSection: "page_textSection__4eVlR",
                buttonsSplit: "page_buttonsSplit__CxhV9",
                ArrowButton: "page_ArrowButton___YYW0",
                tokenomicsSection: "page_tokenomicsSection__8YG4G",
                sectionHeading2: "page_sectionHeading2__9kM0l",
                video: "page_video__YfC99"
            }
        },
        93056: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/eth.a365d308.svg",
                height: 30,
                width: 30,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        35147: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/solana.a237604a.png",
                height: 30,
                width: 30,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAwklEQVR42l2PuwrCQBBF8zvmF7W0sfIbBK1FUSGFRMTCR2EjWqXQ+EDWaFATM7uZvTpBLBy4MHAOXK5jcnY+cQH4AEjy/V1HzlorUD1J45pluOkMF5MiYa0KSexzlKI2XFF1sUR5PUflOKULpxAmAm2DBJ32Ad1RiNYkgLfZgdlCWCFozZh5EbzeCX1/j+Y4QBg9f4L/Ci2W5ZTGtRiDukK7caT7Q/8qXHO3iq4WWcxI4hz0YoGKc1sSQVL6n2kMFzPfnFbdzH862lUAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        20313: function(e, t) {
            "use strict";
            t.Z = {
                src: "https://orbitt.pro/_next/static/media/copy.b1493343.svg",
                height: 22,
                width: 22,
                blurWidth: 0,
                blurHeight: 0
            }
        },
        68527: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/logo_orbitt.6b385351.webp",
                height: 119,
                width: 341,
                blurDataURL: "data:image/webp;base64,UklGRn4AAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAov9iCBIICwr//8JMcXVvd5//YAYZGxgWAFZQOCA+AAAA0AEAnQEqCAADAAJAOCWQAnQBH/8Dd5AAzj/zKL76vfB/o1qlqlQTUsvYoWXsbv7Evu93c2Oen0LX8AAAAAA=",
                blurWidth: 8,
                blurHeight: 3
            }
        },
        38128: function(e, t, a) {
            "use strict";
            a.r(t), t.default = {
                src: "/_next/static/media/logo_orbitt_pro.8c155e76.webp",
                height: 119,
                width: 450,
                blurDataURL: "data:image/webp;base64,UklGRngAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAA4t4wNzgvTnHg3C89RTVdhABWUDggQAAAAJABAJ0BKggAAgACQDglqAJ0AMTmJgD+2H+/of++Z/U0XK9Hy+Cf8cDXWz8sq/vv/8G///Rm/EK9j7//Bv/G8AA=",
                blurWidth: 8,
                blurHeight: 2
            }
        },
        23327: function(e, t, a) {
            "use strict";
            a.r(t), t.default = {
                src: "/_next/static/media/pajamas_twitter.38f61c92.webp",
                height: 40,
                width: 40,
                blurDataURL: "data:image/webp;base64,UklGRroAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAJn1gAAMATRALf3JYAFlgAAAnZGpoagAABABVTKUEAAEDABemS1sABAACfEppaCgAAHk2AFZugQsnPwAFAF17JgBWUDggUgAAALABAJ0BKggACAACQDglsAJ0API0FoAA+KMTmCwV+OwUPZxUAnNNoXZVWhSwGuhZ/jvMcHBn/NPDRqXP/8W/L9R788kBX/wCb7/5offyb9/QAAA=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        70814: function(e, t, a) {
            "use strict";
            a.r(t), t.default = {
                src: "/_next/static/media/teenyicons_telegram_outline.aea5007a.webp",
                height: 40,
                width: 40,
                blurDataURL: "data:image/webp;base64,UklGRrIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSEEAAAAAAAICAAAAJFAAAAAZOmFXjAcxYVF6egBjlYEgU7kgE2UJRGSQMQAzUAAAAEVsADc9AQIDACdoghwAAAAEAANEAwBWUDggSgAAANABAJ0BKggACAACQDglsAJ0ANsfoFkAAOGMQF2ETTQVIArDZMMkH9tFnf5X8UYaM7+lldqXmP/FuI8dYmi//+UV3/1aH+DfrSAA",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        11896: function(e, t, a) {
            "use strict";
            a.r(t), t.default = {
                src: "/_next/static/media/unite.f4b9c273.svg",
                height: 15,
                width: 50,
                blurWidth: 0,
                blurHeight: 0
            }
        }
    },
    function(e) {
        e.O(0, [705, 564, 424, 971, 938, 744], function() {
            return e(e.s = 20111)
        }), _N_E = e.O()
    }
]);