(function($, _window, document) {
	$.fn.render=function(tag, sources, text, attr, seed) {
		var elem, attr, rAriaAttr=/^aria(.*)$/, xlink = "http://www.w3.org/1999/xlink", rElemNS = /(?:svg|line|circle|polyline|polygon|rect|use|path|g)/, xmlsrc = "http://www.w3.org/2000/svg";

		if (typeof text !== "string") {
			attr=text;
			text=undefined;
		}

		if (typeof sources === "string") {
			text=sources;
			attr=text;
			sources=[];
		}

		elem=rElemNS.test(tag) ? document.createElementNS(xmlsrc, tag) : document.createElement(tag);

		text && $(elem).html(text);

		$.each(sources, function(property, value) {
			(property==='xlink' || tag === 'use') ? elem.setAttributeNS(xlink, "xlink:href", value) :
				(rAriaAttr.test(property) ? (elem[property]=value) : elem.setAttribute(property, value));
		});

		!seed && $(this).append(elem);
		seed && seed.push(elem);
		return this.pushStack([elem]);
	};
	$.fn.in=function(tag, sources, text, attr) {
		return this.render(tag, sources, text, attr);
	};
	$.fn.out=function(tag, sources, text, attr) {
		return this.parent().render(tag, sources, text, attr);
	};
})(jQrony, window, document);
