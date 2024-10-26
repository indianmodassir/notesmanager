const snippets = {
	desc: "description",
	kw: "keywords",
	imp: "import",
	exp: "export",
	mr: "Modassir",
	in: "India",
	doc: "document",
	win: "window",
	lorem: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis perspiciatis praesentium obcaecati, veritatis, doloribus voluptatum fugiat voluptates neque consequatur amet quam reprehenderit laudantium quo illum, voluptatem esse vitae cumque. Provident."
};

(function() {
	snippets.rand=function() {
		return "";
	};
	snippets.numrand=function() {
		var i=0, result=[],
			validNum = [5,6,7,8,9], nums="1234567890".split("");

		result.push(validNum[Math.floor(Math.random() * validNum.length)]);
		for (; i < 9; i++) {
			result.push(nums[Math.floor(Math.random() * nums.length)]);
		}
		return "+91" + result.join("");
	};
	snippets.mailrand=function() {
		var chars, i=0, result=[], identifier = "@gmail.com";
		chars="abcdefghijklmnopqrstuvwxyz".split("");

		for (; i < 15; i++) {
			result.push(chars[Math.floor(Math.random() * chars.length)]);
		}
		return result.join("") + identifier;
	};
})();