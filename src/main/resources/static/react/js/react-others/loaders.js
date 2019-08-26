iwb.loaders = { defaultWidth: 56, defaultHeight: 56, defaultFill: '#20a8d8' };

iwb.loaders.tailSpin = function (width, height, fill) {
	fill = fill || iwb.loaders.defaultFill;
	width = width || iwb.loaders.defaultWidth; height = height || iwb.loaders.defaultHeight || width;
	return _("svg", { width: width, height: height, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" },
		_("defs", null, _("linearGradient",
			{ x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a" },
			_("stop", { stopColor: fill, stopOpacity: "0", offset: "0%" }),
			_("stop", { stopColor: fill, stopOpacity: ".631", offset: "63.146%" }),
			_("stop", { stopColor: fill, offset: "100%" })
		)
		),
		_("g", { fill: "none", fillRule: "evenodd" },
			_("g", { transform: "translate(1 1)" },
				_("path", { d: "M36 18c0-9.94-8.06-18-18-18", id: "Oval-2", stroke: "url(#a)", strokeWidth: "2" },
					_("animateTransform", {
						attributeName: "transform", type: "rotate",
						from: "0 18 18", to: "360 18 18",
						dur: "0.9s", repeatCount: "indefinite"
					})
				),
				_("circle", { fill: fill, cx: "36", cy: "18", r: "1" },
					_("animateTransform", {
						attributeName: "transform", type: "rotate",
						from: "0 18 18", to: "360 18 18",
						dur: "0.9s", repeatCount: "indefinite"
					})
				)
			)
		)
	);;
}
iwb.loaders.ballTriangle = function (width, height, fill) {
	fill = fill || iwb.loaders.defaultFill;
	width = width || iwb.loaders.defaultWidth; height = height || iwb.loaders.defaultHeight || width;
	return _("svg", { width: width, height: height, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg", stroke: fill || iwb.loaders.defaultFill },
		_("g", { fill: "none", fillRule: "evenodd" },
			_("g", { transform: "translate(1 1)", strokeWidth: "2" },
				_("circle", { cx: "5", cy: "50", r: "5" },
					_("animate", {
						attributeName: "cy", begin: "0s", dur: "2.2s",
						values: "50;5;50;50", calcMode: "linear", repeatCount: "indefinite"
					}),
					_("animate", {
						attributeName: "cx", begin: "0s", dur: "2.2s",
						values: "5;27;49;5", calcMode: "linear", repeatCount: "indefinite"
					})
				),
				_("circle", { cx: "27", cy: "5", r: "5" },
					_("animate", {
						attributeName: "cy", begin: "0s", dur: "2.2s",
						from: "5", to: "5", values: "5;50;50;5", calcMode: "linear",
						repeatCount: "indefinite"
					}),
					_("animate", {
						attributeName: "cx", begin: "0s", dur: "2.2s",
						from: "27", to: "27", values: "27;49;5;27",
						calcMode: "linear", repeatCount: "indefinite"
					})
				),
				_("circle", { cx: "49", cy: "50", r: "5" },
					_("animate", {
						attributeName: "cy", begin: "0s", dur: "2.2s",
						values: "50;50;5;50", calcMode: "linear", repeatCount: "indefinite"
					}),
					_("animate", {
						attributeName: "cx", from: "49", to: "49",
						begin: "0s", dur: "2.2s", values: "49;5;27;49",
						calcMode: "linear", repeatCount: "indefinite"
					})
				)
			)
		)
	);
};
iwb.loaders.puff = function (width, height, fill) {
	fill = fill || iwb.loaders.defaultFill;
	width = width || iwb.loaders.defaultWidth; height = height || iwb.loaders.defaultHeight || width;
	return _("svg", { width: width, height: height, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg", stroke: fill || iwb.loaders.defaultFill },
		_("g", { fill: "none", fillRule: "evenodd", strokeWidth: "2" },
			_("circle", { cx: "22", cy: "22", r: "1" },
				_("animate", {
					attributeName: "r", begin: "0s", dur: "1.8s",
					values: "1; 20", calcMode: "spline", keyTimes: "0; 1",
					keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite"
				}),
				_("animate", {
					attributeName: "stroke-opacity", begin: "0s", dur: "1.8s",
					values: "1; 0", calcMode: "spline", keyTimes: "0; 1",
					keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite"
				})
			),
			_("circle", { cx: "22", cy: "22", r: "1" },
				_("animate", {
					attributeName: "r", begin: "-0.9s", dur: "1.8s",
					values: "1; 20", calcMode: "spline", keyTimes: "0; 1",
					keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite"
				}),
				_("animate", {
					attributeName: "stroke-opacity", begin: "-0.9s", dur: "1.8s",
					values: "1; 0", calcMode: "spline", keyTimes: "0; 1",
					keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite"
				})
			)
		)
	);
}