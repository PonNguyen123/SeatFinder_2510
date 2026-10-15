import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowLeft, i as QrCode, r as Search, t as X } from "../_libs/lucide-react.mjs";
import { t as require_lib } from "../_libs/qrcode.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BL5-yf08.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_lib = require_lib();
var eventCopy = {
	kicker: "Tiệc cưới",
	title: "Sơ đồ chỗ ngồi",
	thanks: "Cảm ơn quý khách đã đến chung vui.",
	hint: "Nhập tên trên thiệp mời để xem bàn của mình trong sảnh.",
	sampleNote: "Đang dùng danh sách mẫu. Gửi mình danh sách khách và số bàn để thay bằng tên thật."
};
var guests = [
	[
		"Nguyễn Thị Hồng Nhung",
		1,
		"Nhà gái"
	],
	[
		"Trần Văn Minh",
		1,
		"Nhà gái"
	],
	[
		"Lê Thị Thu Hà",
		1,
		"Nhà gái"
	],
	[
		"Phạm Đức Anh",
		2,
		"Nhà trai"
	],
	[
		"Hoàng Mai Linh",
		2,
		"Nhà trai"
	],
	[
		"Vũ Ngọc Bích",
		2,
		"Nhà trai"
	],
	[
		"Đặng Quốc Huy",
		3,
		"Họ hàng"
	],
	[
		"Bùi Thanh Tâm",
		3,
		"Họ hàng"
	],
	[
		"Ngô Thị Lan Anh",
		3,
		"Bạn bè"
	],
	[
		"Lý Gia Hân",
		4,
		"Bạn bè"
	],
	[
		"Đỗ Minh Khoa",
		4,
		"Bạn bè"
	],
	[
		"Trịnh Thu Trang",
		4,
		"Đồng nghiệp"
	],
	[
		"Phan Hải Đăng",
		5,
		"Đồng nghiệp"
	],
	[
		"Võ Thị Kim Ngân",
		5,
		"Đồng nghiệp"
	],
	[
		"Dương Anh Tú",
		5,
		"Bạn bè"
	],
	[
		"Cao Nhật Nam",
		6,
		"Bạn bè"
	],
	[
		"Mai Phương Thảo",
		6,
		"Bạn bè"
	],
	[
		"Hồ Quang Vinh",
		6,
		"Họ hàng"
	],
	[
		"Tạ Hồng Đào",
		7,
		"Họ hàng"
	],
	[
		"Lương Thế Vinh",
		7,
		"Nhà trai"
	],
	[
		"Chu Thị Mỹ Duyên",
		7,
		"Nhà trai"
	],
	[
		"Kiều Bảo Châu",
		8,
		"Nhà gái"
	],
	[
		"Ông Văn Khôi",
		8,
		"Họ hàng"
	],
	[
		"La Thị Thanh Hương",
		8,
		"Họ hàng"
	],
	[
		"Quách Tuấn Kiệt",
		9,
		"Bạn bè"
	],
	[
		"Đinh Ngọc Ánh",
		9,
		"Bạn bè"
	],
	[
		"Tô Hoài Nam",
		9,
		"Đồng nghiệp"
	],
	[
		"Uông Thị Bích Ngọc",
		10,
		"Đồng nghiệp"
	],
	[
		"Lâm Gia Bảo",
		10,
		"Bạn bè"
	],
	[
		"Hà Thuỳ Dương",
		10,
		"Bạn bè"
	],
	[
		"Trương Minh Triết",
		11,
		"Bạn bè"
	],
	[
		"Vương Cẩm Tú",
		11,
		"Bạn bè"
	],
	[
		"Đoàn Phúc An",
		11,
		"Họ hàng"
	],
	[
		"Nguyễn Văn An",
		12,
		"Bạn bè"
	],
	[
		"Lê Hoàng Yến",
		12,
		"Bạn bè"
	],
	[
		"Phùng Đức Trọng",
		12,
		"Đồng nghiệp"
	],
	[
		"Thái Hà My",
		13,
		"Đồng nghiệp"
	],
	[
		"Mạc Đình Phong",
		13,
		"Bạn bè"
	],
	[
		"Huỳnh Thị Kiều Oanh",
		13,
		"Bạn bè"
	],
	[
		"Tống Ngọc Diệp",
		14,
		"Nhà gái"
	],
	[
		"Bạch Công Danh",
		14,
		"Nhà gái"
	],
	[
		"Âu Dương Thiên Kim",
		14,
		"Họ hàng"
	],
	[
		"Giáp Thị Hồng",
		15,
		"Họ hàng"
	],
	[
		"Từ Minh Quân",
		15,
		"Bạn bè"
	],
	[
		"Nghiêm Thuỳ Chi",
		15,
		"Bạn bè"
	],
	[
		"Lục Văn Hùng",
		16,
		"Bạn bè"
	],
	[
		"Khương Thanh Hà",
		16,
		"Đồng nghiệp"
	],
	[
		"Tiêu Bảo Trâm",
		16,
		"Đồng nghiệp"
	],
	[
		"Nhâm Đức Huy",
		17,
		"Nhà trai"
	],
	[
		"Trịnh Gia Linh",
		17,
		"Nhà trai"
	],
	[
		"Phan Thị Mỹ Linh",
		17,
		"Họ hàng"
	],
	[
		"Đào Nhật Minh",
		18,
		"Họ hàng"
	],
	[
		"Văn Thị Ngọc",
		18,
		"Bạn bè"
	],
	[
		"Cung Thành Đạt",
		18,
		"Bạn bè"
	],
	[
		"Lại Phương Anh",
		19,
		"Bạn bè"
	],
	[
		"Sử Đức Thắng",
		19,
		"Đồng nghiệp"
	],
	[
		"Kha Thị Thuý",
		19,
		"Đồng nghiệp"
	],
	[
		"Biện Hoàng Long",
		20,
		"Đồng nghiệp"
	],
	[
		"Đàm Thuỳ Trang",
		20,
		"Bạn bè"
	],
	[
		"Hứa Minh Tuấn",
		20,
		"Bạn bè"
	],
	[
		"Lữ Gia Khiêm",
		21,
		"Bạn bè"
	],
	[
		"Mẫn Thị Hoa",
		21,
		"Họ hàng"
	],
	[
		"Ngọ Văn Tài",
		21,
		"Họ hàng"
	],
	[
		"Ông Thị Yến",
		22,
		"Nhà gái"
	],
	[
		"Phí Minh Đức",
		22,
		"Nhà gái"
	],
	[
		"Quản Thuỳ Linh",
		22,
		"Bạn bè"
	],
	[
		"Sầm Quốc Bảo",
		23,
		"Bạn bè"
	],
	[
		"Tăng Mỹ Hạnh",
		23,
		"Bạn bè"
	],
	[
		"Ung Hoàng Phúc",
		23,
		"Đồng nghiệp"
	],
	[
		"Viên Thị Lan",
		24,
		"Đồng nghiệp"
	],
	[
		"Xử Đức Anh",
		24,
		"Bạn bè"
	],
	[
		"Yên Ngọc Hà",
		24,
		"Bạn bè"
	],
	[
		"Trần Khánh Linh",
		25,
		"Bạn bè"
	],
	[
		"Nguyễn Nhật Trường",
		25,
		"Bạn bè"
	],
	[
		"Lê Bảo Ngọc",
		25,
		"Họ hàng"
	],
	[
		"Phạm Quỳnh Chi",
		26,
		"Họ hàng"
	],
	[
		"Hoàng Anh Dũng",
		26,
		"Nhà trai"
	],
	[
		"Vũ Thuỳ Dương",
		26,
		"Nhà trai"
	],
	[
		"Đặng Mỹ Anh",
		27,
		"Nhà gái"
	],
	[
		"Bùi Đức Thịnh",
		27,
		"Nhà gái"
	],
	[
		"Ngô Khánh Vy",
		27,
		"Bạn bè"
	],
	[
		"Lý Thành Nam",
		28,
		"Bạn bè"
	],
	[
		"Đỗ Hà My",
		28,
		"Đồng nghiệp"
	],
	[
		"Mai Xuân Trường",
		28,
		"Đồng nghiệp"
	],
	[
		"Hồ Ngọc Trâm",
		29,
		"Đồng nghiệp"
	],
	[
		"Tạ Minh Hiếu",
		29,
		"Bạn bè"
	],
	[
		"Lương Thuỳ Tiên",
		29,
		"Bạn bè"
	],
	[
		"Kiều Anh Thư",
		30,
		"Bạn bè"
	],
	[
		"Chu Đức Mạnh",
		30,
		"Họ hàng"
	],
	[
		"La Phương Nhi",
		30,
		"Họ hàng"
	],
	[
		"Quách Gia Huy",
		31,
		"Họ hàng"
	],
	[
		"Đinh Thanh Sơn",
		31,
		"Bạn bè"
	],
	[
		"Tô Thị Hạnh",
		31,
		"Bạn bè"
	],
	[
		"Hà Minh Châu",
		32,
		"Bạn bè"
	],
	[
		"Trương Bảo Anh",
		32,
		"Đồng nghiệp"
	],
	[
		"Vương Quốc Việt",
		32,
		"Đồng nghiệp"
	]
].map(([name, table, side], index) => ({
	id: `g${index + 1}`,
	name,
	table,
	side
}));
function fold(value) {
	return value.normalize("NFD").replace(/\p{M}/gu, "").replace(/đ/g, "d").replace(/Đ/g, "d").toLowerCase().replace(/\s+/g, " ").trim();
}
function searchGuests(guests, query) {
	const needle = fold(query);
	if (needle.length < 1) return [];
	return guests.map((guest) => {
		const name = fold(guest.name);
		const compact = name.replace(/ /g, "");
		const q = needle.replace(/ /g, "");
		let score = 0;
		if (name === needle) score = 100;
		else if (name.startsWith(needle)) score = 80;
		else if (name.includes(needle)) score = 60;
		else if (compact.includes(q)) score = 40;
		else {
			const parts = needle.split(" ").filter(Boolean);
			if (parts.length > 1 && parts.every((part) => name.includes(part))) score = 50;
		}
		return {
			guest,
			score
		};
	}).filter((item) => item.score > 0).sort((a, b) => b.score - a.score || a.guest.name.localeCompare(b.guest.name, "vi")).slice(0, 8).map((item) => item.guest);
}
function inFinder(x, y, size) {
	return [
		[0, 0],
		[size - 7, 0],
		[0, size - 7]
	].some(([ox, oy]) => x >= ox && x < ox + 7 && y >= oy && y < oy + 7);
}
function DotQr({ value, className }) {
	const model = (0, import_react.useMemo)(() => {
		const qr = (0, import_lib.create)(value, { errorCorrectionLevel: "H" });
		return {
			size: qr.modules.size,
			data: qr.modules.data
		};
	}, [value]);
	const quiet = 2;
	const total = model.size + 4;
	const finders = [
		0,
		model.size - 7,
		0
	].map((_, index) => {
		return [
			[0, 0],
			[model.size - 7, 0],
			[0, model.size - 7]
		][index];
	});
	const dots = [];
	for (let y = 0; y < model.size; y++) for (let x = 0; x < model.size; x++) {
		if (!model.data[y * model.size + x]) continue;
		if (inFinder(x, y, model.size)) continue;
		dots.push({
			cx: x + quiet + .5,
			cy: y + quiet + .5
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${total} ${total}`,
		className,
		role: "img",
		"aria-label": "Mã QR dẫn tới trang tìm chỗ ngồi",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: total,
				height: total,
				rx: 1.4,
				className: "fill-cream"
			}),
			finders.map(([x, y]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				transform: `translate(${x + quiet} ${y + quiet})`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: 7,
						height: 7,
						rx: 1.4,
						className: "fill-wine"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: 1,
						y: 1,
						width: 5,
						height: 5,
						rx: .8,
						className: "fill-cream"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: 2,
						y: 2,
						width: 3,
						height: 3,
						rx: .6,
						className: "fill-navy"
					})
				]
			}, `${x}-${y}`)),
			dots.map((dot) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: dot.cx,
				cy: dot.cy,
				r: .36,
				className: "fill-navy"
			}, `${dot.cx}-${dot.cy}`))
		]
	});
}
var data = {
	"tables": [
		{
			"id": 14,
			"x": 304,
			"y": 701
		},
		{
			"id": 10,
			"x": 457,
			"y": 766
		},
		{
			"id": 15,
			"x": 304,
			"y": 858
		},
		{
			"id": 7,
			"x": 605,
			"y": 859
		},
		{
			"id": 11,
			"x": 457,
			"y": 925
		},
		{
			"id": 3,
			"x": 752,
			"y": 935
		},
		{
			"id": 1,
			"x": 907,
			"y": 1005
		},
		{
			"id": 8,
			"x": 605,
			"y": 1016
		},
		{
			"id": 16,
			"x": 304,
			"y": 1020
		},
		{
			"id": 12,
			"x": 457,
			"y": 1089
		},
		{
			"id": 4,
			"x": 752,
			"y": 1092
		},
		{
			"id": 2,
			"x": 906,
			"y": 1172
		},
		{
			"id": 9,
			"x": 605,
			"y": 1180
		},
		{
			"id": 6,
			"x": 303,
			"y": 1183
		},
		{
			"id": 13,
			"x": 457,
			"y": 1241
		},
		{
			"id": 5,
			"x": 752,
			"y": 1255
		},
		{
			"id": 30,
			"x": 1726,
			"y": 695
		},
		{
			"id": 26,
			"x": 1588,
			"y": 757
		},
		{
			"id": 23,
			"x": 1433,
			"y": 858
		},
		{
			"id": 31,
			"x": 1736,
			"y": 861
		},
		{
			"id": 27,
			"x": 1596,
			"y": 926
		},
		{
			"id": 19,
			"x": 1280,
			"y": 936
		},
		{
			"id": 17,
			"x": 1140,
			"y": 1006
		},
		{
			"id": 24,
			"x": 1432,
			"y": 1016
		},
		{
			"id": 32,
			"x": 1736,
			"y": 1018
		},
		{
			"id": 28,
			"x": 1594,
			"y": 1091
		},
		{
			"id": 20,
			"x": 1279,
			"y": 1093
		},
		{
			"id": 18,
			"x": 1139,
			"y": 1172
		},
		{
			"id": 22,
			"x": 1736,
			"y": 1173
		},
		{
			"id": 25,
			"x": 1433,
			"y": 1178
		},
		{
			"id": 29,
			"x": 1594,
			"y": 1242
		},
		{
			"id": 21,
			"x": 1280,
			"y": 1255
		}
	],
	"chairs": [
		{
			"x": 1758,
			"y": 1218,
			"w": 26,
			"h": 26,
			"t": 22
		},
		{
			"x": 258,
			"y": 950,
			"w": 26,
			"h": 26,
			"t": 16
		},
		{
			"x": 772,
			"y": 1302,
			"w": 26,
			"h": 24,
			"t": 5
		},
		{
			"x": 1544,
			"y": 686,
			"w": 26,
			"h": 26,
			"t": 26
		},
		{
			"x": 836,
			"y": 1176,
			"w": 24,
			"h": 26,
			"t": 2
		},
		{
			"x": 1236,
			"y": 1184,
			"w": 26,
			"h": 26,
			"t": 21
		},
		{
			"x": 326,
			"y": 1068,
			"w": 24,
			"h": 24,
			"t": 16
		},
		{
			"x": 706,
			"y": 1184,
			"w": 24,
			"h": 26,
			"t": 5
		},
		{
			"x": 1524,
			"y": 1060,
			"w": 28,
			"h": 24,
			"t": 28
		},
		{
			"x": 1210,
			"y": 940,
			"w": 24,
			"h": 24,
			"t": 19
		},
		{
			"x": 1328,
			"y": 940,
			"w": 24,
			"h": 24,
			"t": 19
		},
		{
			"x": 1586,
			"y": 1288,
			"w": 24,
			"h": 26,
			"t": 29
		},
		{
			"x": 1526,
			"y": 1094,
			"w": 26,
			"h": 26,
			"t": 28
		},
		{
			"x": 1664,
			"y": 1176,
			"w": 26,
			"h": 26,
			"t": 22
		},
		{
			"x": 558,
			"y": 906,
			"w": 26,
			"h": 24,
			"t": 7
		},
		{
			"x": 682,
			"y": 906,
			"w": 24,
			"h": 24,
			"t": 3
		},
		{
			"x": 292,
			"y": 904,
			"w": 24,
			"h": 26,
			"t": 15
		},
		{
			"x": 558,
			"y": 946,
			"w": 26,
			"h": 24,
			"t": 8
		},
		{
			"x": 592,
			"y": 1224,
			"w": 26,
			"h": 28,
			"t": 9
		},
		{
			"x": 682,
			"y": 940,
			"w": 24,
			"h": 24,
			"t": 3
		},
		{
			"x": 412,
			"y": 1018,
			"w": 24,
			"h": 26,
			"t": 12
		},
		{
			"x": 1578,
			"y": 686,
			"w": 24,
			"h": 26,
			"t": 26
		},
		{
			"x": 740,
			"y": 1184,
			"w": 24,
			"h": 26,
			"t": 5
		},
		{
			"x": 1784,
			"y": 832,
			"w": 26,
			"h": 24,
			"t": 31
		},
		{
			"x": 234,
			"y": 1154,
			"w": 24,
			"h": 26,
			"t": 6
		},
		{
			"x": 682,
			"y": 1260,
			"w": 24,
			"h": 24,
			"t": 5
		},
		{
			"x": 772,
			"y": 1022,
			"w": 24,
			"h": 26,
			"t": 4
		},
		{
			"x": 388,
			"y": 736,
			"w": 24,
			"h": 26,
			"t": 10
		},
		{
			"x": 1620,
			"y": 1288,
			"w": 24,
			"h": 26,
			"t": 29
		},
		{
			"x": 1692,
			"y": 1102,
			"w": 24,
			"h": 24,
			"t": 22
		},
		{
			"x": 592,
			"y": 904,
			"w": 26,
			"h": 26,
			"t": 7
		},
		{
			"x": 1784,
			"y": 866,
			"w": 24,
			"h": 26,
			"t": 31
		},
		{
			"x": 326,
			"y": 904,
			"w": 24,
			"h": 26,
			"t": 15
		},
		{
			"x": 350,
			"y": 1188,
			"w": 26,
			"h": 26,
			"t": 6
		},
		{
			"x": 1586,
			"y": 1018,
			"w": 24,
			"h": 26,
			"t": 28
		},
		{
			"x": 1188,
			"y": 1010,
			"w": 24,
			"h": 26,
			"t": 17
		},
		{
			"x": 534,
			"y": 1022,
			"w": 26,
			"h": 24,
			"t": 8
		},
		{
			"x": 1236,
			"y": 1302,
			"w": 26,
			"h": 24,
			"t": 21
		},
		{
			"x": 1666,
			"y": 832,
			"w": 24,
			"h": 24,
			"t": 31
		},
		{
			"x": 1784,
			"y": 1176,
			"w": 24,
			"h": 26,
			"t": 22
		},
		{
			"x": 706,
			"y": 1302,
			"w": 26,
			"h": 24,
			"t": 5
		},
		{
			"x": 534,
			"y": 986,
			"w": 26,
			"h": 26,
			"t": 8
		},
		{
			"x": 1726,
			"y": 1064,
			"w": 24,
			"h": 26,
			"t": 32
		},
		{
			"x": 1328,
			"y": 1062,
			"w": 26,
			"h": 26,
			"t": 20
		},
		{
			"x": 258,
			"y": 1068,
			"w": 26,
			"h": 24,
			"t": 16
		},
		{
			"x": 592,
			"y": 946,
			"w": 26,
			"h": 24,
			"t": 8
		},
		{
			"x": 352,
			"y": 864,
			"w": 26,
			"h": 24,
			"t": 15
		},
		{
			"x": 1210,
			"y": 1062,
			"w": 24,
			"h": 26,
			"t": 20
		},
		{
			"x": 954,
			"y": 976,
			"w": 26,
			"h": 26,
			"t": 1
		},
		{
			"x": 350,
			"y": 1154,
			"w": 26,
			"h": 26,
			"t": 6
		},
		{
			"x": 1526,
			"y": 1246,
			"w": 24,
			"h": 26,
			"t": 29
		},
		{
			"x": 1270,
			"y": 1138,
			"w": 26,
			"h": 26,
			"t": 20
		},
		{
			"x": 506,
			"y": 736,
			"w": 26,
			"h": 26,
			"t": 10
		},
		{
			"x": 1364,
			"y": 1020,
			"w": 24,
			"h": 26,
			"t": 24
		},
		{
			"x": 258,
			"y": 748,
			"w": 26,
			"h": 24,
			"t": 14
		},
		{
			"x": 1482,
			"y": 1020,
			"w": 24,
			"h": 26,
			"t": 24
		},
		{
			"x": 1758,
			"y": 948,
			"w": 26,
			"h": 24,
			"t": 32
		},
		{
			"x": 706,
			"y": 982,
			"w": 26,
			"h": 26,
			"t": 3
		},
		{
			"x": 1760,
			"y": 1064,
			"w": 24,
			"h": 26,
			"t": 32
		},
		{
			"x": 706,
			"y": 1022,
			"w": 24,
			"h": 26,
			"t": 4
		},
		{
			"x": 1526,
			"y": 896,
			"w": 24,
			"h": 26,
			"t": 27
		},
		{
			"x": 504,
			"y": 1212,
			"w": 26,
			"h": 24,
			"t": 13
		},
		{
			"x": 1552,
			"y": 1288,
			"w": 26,
			"h": 24,
			"t": 29
		},
		{
			"x": 1304,
			"y": 1184,
			"w": 24,
			"h": 26,
			"t": 21
		},
		{
			"x": 258,
			"y": 788,
			"w": 26,
			"h": 24,
			"t": 15
		},
		{
			"x": 1456,
			"y": 788,
			"w": 26,
			"h": 24,
			"t": 23
		},
		{
			"x": 1304,
			"y": 1138,
			"w": 24,
			"h": 26,
			"t": 20
		},
		{
			"x": 292,
			"y": 630,
			"w": 24,
			"h": 26,
			"t": 14
		},
		{
			"x": 292,
			"y": 748,
			"w": 24,
			"h": 24,
			"t": 14
		},
		{
			"x": 740,
			"y": 982,
			"w": 24,
			"h": 24,
			"t": 3
		},
		{
			"x": 1188,
			"y": 1142,
			"w": 24,
			"h": 26,
			"t": 18
		},
		{
			"x": 478,
			"y": 972,
			"w": 26,
			"h": 24,
			"t": 11
		},
		{
			"x": 652,
			"y": 1150,
			"w": 26,
			"h": 24,
			"t": 9
		},
		{
			"x": 740,
			"y": 1022,
			"w": 24,
			"h": 26,
			"t": 4
		},
		{
			"x": 388,
			"y": 1212,
			"w": 24,
			"h": 24,
			"t": 13
		},
		{
			"x": 1692,
			"y": 908,
			"w": 26,
			"h": 24,
			"t": 31
		},
		{
			"x": 234,
			"y": 830,
			"w": 24,
			"h": 24,
			"t": 15
		},
		{
			"x": 1328,
			"y": 1098,
			"w": 24,
			"h": 24,
			"t": 20
		},
		{
			"x": 478,
			"y": 1288,
			"w": 26,
			"h": 26,
			"t": 13
		},
		{
			"x": 446,
			"y": 696,
			"w": 26,
			"h": 24,
			"t": 10
		},
		{
			"x": 800,
			"y": 1260,
			"w": 24,
			"h": 24,
			"t": 5
		},
		{
			"x": 534,
			"y": 1150,
			"w": 26,
			"h": 26,
			"t": 9
		},
		{
			"x": 1692,
			"y": 948,
			"w": 26,
			"h": 24,
			"t": 32
		},
		{
			"x": 1070,
			"y": 1142,
			"w": 24,
			"h": 26,
			"t": 18
		},
		{
			"x": 324,
			"y": 630,
			"w": 26,
			"h": 26,
			"t": 14
		},
		{
			"x": 326,
			"y": 748,
			"w": 24,
			"h": 24,
			"t": 14
		},
		{
			"x": 1518,
			"y": 728,
			"w": 24,
			"h": 24,
			"t": 26
		},
		{
			"x": 1552,
			"y": 1018,
			"w": 26,
			"h": 26,
			"t": 28
		},
		{
			"x": 1636,
			"y": 728,
			"w": 24,
			"h": 24,
			"t": 26
		},
		{
			"x": 558,
			"y": 1108,
			"w": 26,
			"h": 26,
			"t": 9
		},
		{
			"x": 682,
			"y": 1098,
			"w": 24,
			"h": 26,
			"t": 4
		},
		{
			"x": 772,
			"y": 982,
			"w": 26,
			"h": 24,
			"t": 3
		},
		{
			"x": 1236,
			"y": 982,
			"w": 26,
			"h": 26,
			"t": 19
		},
		{
			"x": 1658,
			"y": 666,
			"w": 26,
			"h": 24,
			"t": 30
		},
		{
			"x": 1304,
			"y": 864,
			"w": 24,
			"h": 26,
			"t": 19
		},
		{
			"x": 1096,
			"y": 1052,
			"w": 26,
			"h": 26,
			"t": 17
		},
		{
			"x": 954,
			"y": 1142,
			"w": 26,
			"h": 26,
			"t": 2
		},
		{
			"x": 706,
			"y": 1140,
			"w": 26,
			"h": 24,
			"t": 4
		},
		{
			"x": 1364,
			"y": 1150,
			"w": 24,
			"h": 24,
			"t": 25
		},
		{
			"x": 534,
			"y": 830,
			"w": 26,
			"h": 24,
			"t": 7
		},
		{
			"x": 1726,
			"y": 790,
			"w": 24,
			"h": 26,
			"t": 31
		},
		{
			"x": 1328,
			"y": 906,
			"w": 24,
			"h": 24,
			"t": 19
		},
		{
			"x": 1364,
			"y": 1184,
			"w": 24,
			"h": 24,
			"t": 25
		},
		{
			"x": 1456,
			"y": 906,
			"w": 26,
			"h": 24,
			"t": 23
		},
		{
			"x": 1096,
			"y": 1102,
			"w": 26,
			"h": 24,
			"t": 18
		},
		{
			"x": 478,
			"y": 696,
			"w": 26,
			"h": 24,
			"t": 10
		},
		{
			"x": 1644,
			"y": 1060,
			"w": 24,
			"h": 24,
			"t": 28
		},
		{
			"x": 412,
			"y": 856,
			"w": 24,
			"h": 24,
			"t": 11
		},
		{
			"x": 1686,
			"y": 624,
			"w": 24,
			"h": 26,
			"t": 30
		},
		{
			"x": 1666,
			"y": 990,
			"w": 24,
			"h": 24,
			"t": 32
		},
		{
			"x": 1270,
			"y": 982,
			"w": 26,
			"h": 26,
			"t": 19
		},
		{
			"x": 1070,
			"y": 1176,
			"w": 24,
			"h": 26,
			"t": 18
		},
		{
			"x": 1482,
			"y": 864,
			"w": 24,
			"h": 24,
			"t": 23
		},
		{
			"x": 1130,
			"y": 1052,
			"w": 24,
			"h": 26,
			"t": 17
		},
		{
			"x": 862,
			"y": 1052,
			"w": 24,
			"h": 24,
			"t": 1
		},
		{
			"x": 1726,
			"y": 1218,
			"w": 24,
			"h": 26,
			"t": 22
		},
		{
			"x": 624,
			"y": 946,
			"w": 26,
			"h": 24,
			"t": 8
		},
		{
			"x": 1664,
			"y": 1024,
			"w": 26,
			"h": 24,
			"t": 32
		},
		{
			"x": 1328,
			"y": 1226,
			"w": 26,
			"h": 24,
			"t": 21
		},
		{
			"x": 1456,
			"y": 1224,
			"w": 26,
			"h": 26,
			"t": 25
		},
		{
			"x": 260,
			"y": 1230,
			"w": 24,
			"h": 26,
			"t": 6
		},
		{
			"x": 326,
			"y": 1114,
			"w": 26,
			"h": 24,
			"t": 6
		},
		{
			"x": 446,
			"y": 812,
			"w": 24,
			"h": 26,
			"t": 10
		},
		{
			"x": 1130,
			"y": 1102,
			"w": 24,
			"h": 26,
			"t": 18
		},
		{
			"x": 1482,
			"y": 1150,
			"w": 24,
			"h": 24,
			"t": 25
		},
		{
			"x": 706,
			"y": 864,
			"w": 26,
			"h": 26,
			"t": 3
		},
		{
			"x": 1718,
			"y": 624,
			"w": 26,
			"h": 26,
			"t": 30
		},
		{
			"x": 682,
			"y": 1226,
			"w": 24,
			"h": 24,
			"t": 5
		},
		{
			"x": 258,
			"y": 630,
			"w": 26,
			"h": 26,
			"t": 14
		},
		{
			"x": 258,
			"y": 904,
			"w": 26,
			"h": 26,
			"t": 15
		},
		{
			"x": 1304,
			"y": 982,
			"w": 24,
			"h": 26,
			"t": 19
		},
		{
			"x": 234,
			"y": 992,
			"w": 24,
			"h": 24,
			"t": 16
		},
		{
			"x": 1518,
			"y": 762,
			"w": 24,
			"h": 24,
			"t": 26
		},
		{
			"x": 928,
			"y": 936,
			"w": 24,
			"h": 24,
			"t": 1
		},
		{
			"x": 894,
			"y": 1052,
			"w": 26,
			"h": 24,
			"t": 1
		},
		{
			"x": 558,
			"y": 1226,
			"w": 26,
			"h": 24,
			"t": 9
		},
		{
			"x": 292,
			"y": 1230,
			"w": 24,
			"h": 26,
			"t": 6
		},
		{
			"x": 446,
			"y": 1134,
			"w": 24,
			"h": 26,
			"t": 12
		},
		{
			"x": 1096,
			"y": 1218,
			"w": 26,
			"h": 26,
			"t": 18
		},
		{
			"x": 652,
			"y": 986,
			"w": 26,
			"h": 26,
			"t": 8
		},
		{
			"x": 444,
			"y": 1172,
			"w": 26,
			"h": 24,
			"t": 13
		},
		{
			"x": 1584,
			"y": 972,
			"w": 26,
			"h": 26,
			"t": 27
		},
		{
			"x": 1686,
			"y": 742,
			"w": 26,
			"h": 26,
			"t": 30
		},
		{
			"x": 1456,
			"y": 944,
			"w": 26,
			"h": 26,
			"t": 24
		},
		{
			"x": 800,
			"y": 940,
			"w": 24,
			"h": 24,
			"t": 3
		},
		{
			"x": 1644,
			"y": 1212,
			"w": 24,
			"h": 24,
			"t": 29
		},
		{
			"x": 624,
			"y": 1062,
			"w": 26,
			"h": 26,
			"t": 8
		},
		{
			"x": 234,
			"y": 672,
			"w": 24,
			"h": 24,
			"t": 14
		},
		{
			"x": 928,
			"y": 1052,
			"w": 24,
			"h": 24,
			"t": 1
		},
		{
			"x": 1664,
			"y": 1142,
			"w": 26,
			"h": 26,
			"t": 22
		},
		{
			"x": 326,
			"y": 1230,
			"w": 26,
			"h": 26,
			"t": 6
		},
		{
			"x": 478,
			"y": 1134,
			"w": 26,
			"h": 26,
			"t": 12
		},
		{
			"x": 1130,
			"y": 1218,
			"w": 24,
			"h": 26,
			"t": 18
		},
		{
			"x": 1526,
			"y": 1212,
			"w": 24,
			"h": 24,
			"t": 29
		},
		{
			"x": 1692,
			"y": 790,
			"w": 26,
			"h": 26,
			"t": 31
		},
		{
			"x": 478,
			"y": 1172,
			"w": 26,
			"h": 24,
			"t": 13
		},
		{
			"x": 592,
			"y": 788,
			"w": 26,
			"h": 26,
			"t": 7
		},
		{
			"x": 1422,
			"y": 1062,
			"w": 26,
			"h": 26,
			"t": 24
		},
		{
			"x": 1364,
			"y": 864,
			"w": 24,
			"h": 24,
			"t": 23
		},
		{
			"x": 292,
			"y": 950,
			"w": 26,
			"h": 26,
			"t": 16
		},
		{
			"x": 1096,
			"y": 936,
			"w": 26,
			"h": 24,
			"t": 17
		},
		{
			"x": 1422,
			"y": 1108,
			"w": 26,
			"h": 24,
			"t": 25
		},
		{
			"x": 386,
			"y": 1058,
			"w": 26,
			"h": 26,
			"t": 12
		},
		{
			"x": 1644,
			"y": 932,
			"w": 24,
			"h": 24,
			"t": 27
		},
		{
			"x": 624,
			"y": 788,
			"w": 26,
			"h": 26,
			"t": 7
		},
		{
			"x": 1664,
			"y": 866,
			"w": 26,
			"h": 26,
			"t": 31
		},
		{
			"x": 1456,
			"y": 1062,
			"w": 26,
			"h": 26,
			"t": 24
		},
		{
			"x": 478,
			"y": 856,
			"w": 26,
			"h": 24,
			"t": 11
		},
		{
			"x": 1726,
			"y": 1102,
			"w": 24,
			"h": 24,
			"t": 22
		},
		{
			"x": 260,
			"y": 1114,
			"w": 24,
			"h": 24,
			"t": 6
		},
		{
			"x": 1456,
			"y": 1108,
			"w": 26,
			"h": 24,
			"t": 25
		},
		{
			"x": 1544,
			"y": 804,
			"w": 26,
			"h": 24,
			"t": 26
		},
		{
			"x": 682,
			"y": 1062,
			"w": 24,
			"h": 26,
			"t": 4
		},
		{
			"x": 800,
			"y": 1062,
			"w": 24,
			"h": 26,
			"t": 4
		},
		{
			"x": 292,
			"y": 1068,
			"w": 24,
			"h": 24,
			"t": 16
		},
		{
			"x": 446,
			"y": 972,
			"w": 24,
			"h": 24,
			"t": 11
		},
		{
			"x": 836,
			"y": 1010,
			"w": 24,
			"h": 26,
			"t": 1
		},
		{
			"x": 446,
			"y": 1018,
			"w": 24,
			"h": 26,
			"t": 12
		},
		{
			"x": 1270,
			"y": 1300,
			"w": 26,
			"h": 26,
			"t": 21
		},
		{
			"x": 1390,
			"y": 906,
			"w": 24,
			"h": 24,
			"t": 23
		},
		{
			"x": 1390,
			"y": 944,
			"w": 24,
			"h": 26,
			"t": 24
		},
		{
			"x": 1422,
			"y": 1224,
			"w": 26,
			"h": 26,
			"t": 25
		},
		{
			"x": 652,
			"y": 830,
			"w": 26,
			"h": 24,
			"t": 7
		},
		{
			"x": 1784,
			"y": 988,
			"w": 24,
			"h": 26,
			"t": 32
		},
		{
			"x": 386,
			"y": 1094,
			"w": 26,
			"h": 24,
			"t": 12
		},
		{
			"x": 1188,
			"y": 1176,
			"w": 24,
			"h": 26,
			"t": 18
		},
		{
			"x": 558,
			"y": 788,
			"w": 26,
			"h": 26,
			"t": 7
		},
		{
			"x": 1586,
			"y": 1134,
			"w": 24,
			"h": 26,
			"t": 28
		},
		{
			"x": 478,
			"y": 1018,
			"w": 24,
			"h": 26,
			"t": 12
		},
		{
			"x": 1304,
			"y": 1302,
			"w": 26,
			"h": 24,
			"t": 21
		},
		{
			"x": 1422,
			"y": 904,
			"w": 26,
			"h": 26,
			"t": 23
		},
		{
			"x": 1210,
			"y": 1098,
			"w": 26,
			"h": 24,
			"t": 20
		},
		{
			"x": 800,
			"y": 1098,
			"w": 24,
			"h": 24,
			"t": 4
		},
		{
			"x": 1584,
			"y": 1172,
			"w": 26,
			"h": 24,
			"t": 29
		},
		{
			"x": 772,
			"y": 864,
			"w": 26,
			"h": 26,
			"t": 3
		},
		{
			"x": 1422,
			"y": 944,
			"w": 26,
			"h": 26,
			"t": 24
		},
		{
			"x": 504,
			"y": 932,
			"w": 26,
			"h": 24,
			"t": 11
		},
		{
			"x": 1480,
			"y": 1184,
			"w": 26,
			"h": 24,
			"t": 25
		},
		{
			"x": 1636,
			"y": 762,
			"w": 24,
			"h": 26,
			"t": 26
		},
		{
			"x": 1776,
			"y": 666,
			"w": 26,
			"h": 24,
			"t": 30
		},
		{
			"x": 1620,
			"y": 1134,
			"w": 24,
			"h": 26,
			"t": 28
		},
		{
			"x": 292,
			"y": 1114,
			"w": 26,
			"h": 24,
			"t": 6
		},
		{
			"x": 652,
			"y": 864,
			"w": 26,
			"h": 24,
			"t": 7
		},
		{
			"x": 534,
			"y": 864,
			"w": 26,
			"h": 24,
			"t": 7
		},
		{
			"x": 1236,
			"y": 1140,
			"w": 26,
			"h": 24,
			"t": 20
		},
		{
			"x": 860,
			"y": 1102,
			"w": 26,
			"h": 24,
			"t": 2
		},
		{
			"x": 800,
			"y": 906,
			"w": 24,
			"h": 24,
			"t": 3
		},
		{
			"x": 592,
			"y": 1108,
			"w": 26,
			"h": 26,
			"t": 9
		},
		{
			"x": 352,
			"y": 670,
			"w": 26,
			"h": 26,
			"t": 14
		},
		{
			"x": 1752,
			"y": 742,
			"w": 26,
			"h": 24,
			"t": 30
		},
		{
			"x": 1612,
			"y": 804,
			"w": 24,
			"h": 24,
			"t": 26
		},
		{
			"x": 1210,
			"y": 906,
			"w": 24,
			"h": 24,
			"t": 19
		},
		{
			"x": 1552,
			"y": 972,
			"w": 26,
			"h": 26,
			"t": 27
		},
		{
			"x": 800,
			"y": 1226,
			"w": 24,
			"h": 24,
			"t": 5
		},
		{
			"x": 624,
			"y": 1108,
			"w": 28,
			"h": 26,
			"t": 9
		},
		{
			"x": 1210,
			"y": 1260,
			"w": 24,
			"h": 26,
			"t": 21
		},
		{
			"x": 954,
			"y": 1176,
			"w": 24,
			"h": 26,
			"t": 2
		},
		{
			"x": 1236,
			"y": 864,
			"w": 26,
			"h": 26,
			"t": 19
		},
		{
			"x": 386,
			"y": 930,
			"w": 26,
			"h": 26,
			"t": 11
		},
		{
			"x": 1644,
			"y": 896,
			"w": 24,
			"h": 26,
			"t": 27
		},
		{
			"x": 352,
			"y": 706,
			"w": 26,
			"h": 24,
			"t": 14
		},
		{
			"x": 1390,
			"y": 788,
			"w": 24,
			"h": 24,
			"t": 23
		},
		{
			"x": 1188,
			"y": 976,
			"w": 24,
			"h": 26,
			"t": 17
		},
		{
			"x": 1726,
			"y": 908,
			"w": 24,
			"h": 24,
			"t": 31
		},
		{
			"x": 1390,
			"y": 1108,
			"w": 24,
			"h": 24,
			"t": 25
		},
		{
			"x": 1644,
			"y": 1246,
			"w": 24,
			"h": 26,
			"t": 29
		},
		{
			"x": 1784,
			"y": 1142,
			"w": 24,
			"h": 26,
			"t": 22
		},
		{
			"x": 1390,
			"y": 1224,
			"w": 24,
			"h": 26,
			"t": 25
		},
		{
			"x": 1422,
			"y": 788,
			"w": 26,
			"h": 26,
			"t": 23
		},
		{
			"x": 446,
			"y": 1288,
			"w": 24,
			"h": 26,
			"t": 13
		},
		{
			"x": 1620,
			"y": 854,
			"w": 24,
			"h": 26,
			"t": 27
		},
		{
			"x": 1620,
			"y": 972,
			"w": 24,
			"h": 26,
			"t": 27
		},
		{
			"x": 1164,
			"y": 1052,
			"w": 24,
			"h": 26,
			"t": 17
		},
		{
			"x": 388,
			"y": 770,
			"w": 24,
			"h": 26,
			"t": 10
		},
		{
			"x": 506,
			"y": 772,
			"w": 24,
			"h": 24,
			"t": 10
		},
		{
			"x": 1758,
			"y": 908,
			"w": 26,
			"h": 24,
			"t": 31
		},
		{
			"x": 1164,
			"y": 1102,
			"w": 24,
			"h": 24,
			"t": 18
		},
		{
			"x": 232,
			"y": 1188,
			"w": 26,
			"h": 26,
			"t": 6
		},
		{
			"x": 1364,
			"y": 986,
			"w": 24,
			"h": 26,
			"t": 24
		},
		{
			"x": 1552,
			"y": 1134,
			"w": 26,
			"h": 26,
			"t": 28
		},
		{
			"x": 326,
			"y": 950,
			"w": 24,
			"h": 26,
			"t": 16
		},
		{
			"x": 1128,
			"y": 936,
			"w": 26,
			"h": 24,
			"t": 17
		},
		{
			"x": 352,
			"y": 828,
			"w": 26,
			"h": 26,
			"t": 15
		},
		{
			"x": 954,
			"y": 1010,
			"w": 26,
			"h": 26,
			"t": 1
		},
		{
			"x": 928,
			"y": 1102,
			"w": 24,
			"h": 24,
			"t": 2
		},
		{
			"x": 1480,
			"y": 986,
			"w": 26,
			"h": 26,
			"t": 24
		},
		{
			"x": 412,
			"y": 1172,
			"w": 24,
			"h": 24,
			"t": 13
		},
		{
			"x": 1552,
			"y": 856,
			"w": 26,
			"h": 24,
			"t": 27
		},
		{
			"x": 506,
			"y": 896,
			"w": 24,
			"h": 26,
			"t": 11
		},
		{
			"x": 1758,
			"y": 1102,
			"w": 26,
			"h": 24,
			"t": 22
		},
		{
			"x": 740,
			"y": 1302,
			"w": 24,
			"h": 24,
			"t": 5
		},
		{
			"x": 386,
			"y": 896,
			"w": 26,
			"h": 24,
			"t": 11
		},
		{
			"x": 558,
			"y": 1062,
			"w": 26,
			"h": 26,
			"t": 8
		},
		{
			"x": 1692,
			"y": 1218,
			"w": 24,
			"h": 26,
			"t": 22
		},
		{
			"x": 1390,
			"y": 1062,
			"w": 26,
			"h": 26,
			"t": 24
		},
		{
			"x": 388,
			"y": 1246,
			"w": 24,
			"h": 26,
			"t": 13
		},
		{
			"x": 504,
			"y": 1246,
			"w": 26,
			"h": 26,
			"t": 13
		},
		{
			"x": 534,
			"y": 1184,
			"w": 26,
			"h": 24,
			"t": 9
		},
		{
			"x": 592,
			"y": 1064,
			"w": 26,
			"h": 24,
			"t": 8
		},
		{
			"x": 1658,
			"y": 700,
			"w": 26,
			"h": 24,
			"t": 30
		},
		{
			"x": 1270,
			"y": 1022,
			"w": 26,
			"h": 26,
			"t": 20
		},
		{
			"x": 1328,
			"y": 1260,
			"w": 24,
			"h": 26,
			"t": 21
		},
		{
			"x": 1364,
			"y": 828,
			"w": 24,
			"h": 26,
			"t": 23
		},
		{
			"x": 1482,
			"y": 830,
			"w": 24,
			"h": 24,
			"t": 23
		},
		{
			"x": 740,
			"y": 1138,
			"w": 24,
			"h": 26,
			"t": 4
		},
		{
			"x": 446,
			"y": 856,
			"w": 24,
			"h": 24,
			"t": 11
		},
		{
			"x": 1304,
			"y": 1022,
			"w": 24,
			"h": 24,
			"t": 20
		},
		{
			"x": 506,
			"y": 1094,
			"w": 24,
			"h": 24,
			"t": 12
		},
		{
			"x": 1692,
			"y": 1064,
			"w": 26,
			"h": 26,
			"t": 32
		},
		{
			"x": 652,
			"y": 1022,
			"w": 26,
			"h": 24,
			"t": 8
		},
		{
			"x": 478,
			"y": 812,
			"w": 26,
			"h": 26,
			"t": 10
		},
		{
			"x": 234,
			"y": 706,
			"w": 24,
			"h": 26,
			"t": 14
		},
		{
			"x": 1070,
			"y": 976,
			"w": 24,
			"h": 26,
			"t": 17
		},
		{
			"x": 1070,
			"y": 1010,
			"w": 24,
			"h": 26,
			"t": 17
		},
		{
			"x": 860,
			"y": 1218,
			"w": 26,
			"h": 26,
			"t": 2
		},
		{
			"x": 836,
			"y": 976,
			"w": 26,
			"h": 24,
			"t": 1
		},
		{
			"x": 1718,
			"y": 740,
			"w": 26,
			"h": 26,
			"t": 30
		},
		{
			"x": 894,
			"y": 1102,
			"w": 26,
			"h": 24,
			"t": 2
		},
		{
			"x": 894,
			"y": 1218,
			"w": 26,
			"h": 26,
			"t": 2
		},
		{
			"x": 1270,
			"y": 864,
			"w": 26,
			"h": 26,
			"t": 19
		},
		{
			"x": 860,
			"y": 936,
			"w": 26,
			"h": 24,
			"t": 1
		},
		{
			"x": 412,
			"y": 696,
			"w": 26,
			"h": 24,
			"t": 10
		},
		{
			"x": 1612,
			"y": 686,
			"w": 24,
			"h": 26,
			"t": 26
		},
		{
			"x": 894,
			"y": 936,
			"w": 26,
			"h": 24,
			"t": 1
		},
		{
			"x": 624,
			"y": 1226,
			"w": 26,
			"h": 24,
			"t": 9
		},
		{
			"x": 1584,
			"y": 856,
			"w": 28,
			"h": 24,
			"t": 27
		},
		{
			"x": 652,
			"y": 1184,
			"w": 26,
			"h": 24,
			"t": 9
		},
		{
			"x": 292,
			"y": 788,
			"w": 24,
			"h": 24,
			"t": 15
		},
		{
			"x": 624,
			"y": 906,
			"w": 26,
			"h": 24,
			"t": 7
		},
		{
			"x": 1776,
			"y": 700,
			"w": 26,
			"h": 24,
			"t": 30
		},
		{
			"x": 412,
			"y": 1134,
			"w": 24,
			"h": 26,
			"t": 12
		},
		{
			"x": 234,
			"y": 1026,
			"w": 24,
			"h": 24,
			"t": 16
		},
		{
			"x": 1620,
			"y": 1172,
			"w": 24,
			"h": 24,
			"t": 29
		},
		{
			"x": 836,
			"y": 1142,
			"w": 24,
			"h": 26,
			"t": 2
		},
		{
			"x": 412,
			"y": 972,
			"w": 24,
			"h": 24,
			"t": 11
		},
		{
			"x": 352,
			"y": 1026,
			"w": 26,
			"h": 26,
			"t": 16
		},
		{
			"x": 1760,
			"y": 790,
			"w": 24,
			"h": 26,
			"t": 31
		},
		{
			"x": 1270,
			"y": 1184,
			"w": 24,
			"h": 26,
			"t": 21
		},
		{
			"x": 234,
			"y": 862,
			"w": 24,
			"h": 26,
			"t": 15
		},
		{
			"x": 1752,
			"y": 624,
			"w": 24,
			"h": 26,
			"t": 30
		},
		{
			"x": 412,
			"y": 812,
			"w": 24,
			"h": 26,
			"t": 10
		},
		{
			"x": 740,
			"y": 864,
			"w": 24,
			"h": 26,
			"t": 3
		},
		{
			"x": 1578,
			"y": 804,
			"w": 24,
			"h": 24,
			"t": 26
		},
		{
			"x": 772,
			"y": 1184,
			"w": 26,
			"h": 26,
			"t": 5
		},
		{
			"x": 1784,
			"y": 1024,
			"w": 26,
			"h": 24,
			"t": 32
		},
		{
			"x": 1526,
			"y": 930,
			"w": 26,
			"h": 26,
			"t": 27
		},
		{
			"x": 1162,
			"y": 1220,
			"w": 26,
			"h": 24,
			"t": 18
		},
		{
			"x": 1210,
			"y": 1226,
			"w": 26,
			"h": 24,
			"t": 21
		},
		{
			"x": 928,
			"y": 1218,
			"w": 24,
			"h": 26,
			"t": 2
		},
		{
			"x": 412,
			"y": 1288,
			"w": 24,
			"h": 24,
			"t": 13
		},
		{
			"x": 1162,
			"y": 936,
			"w": 26,
			"h": 24,
			"t": 17
		},
		{
			"x": 324,
			"y": 788,
			"w": 26,
			"h": 24,
			"t": 15
		},
		{
			"x": 1552,
			"y": 1172,
			"w": 26,
			"h": 24,
			"t": 29
		},
		{
			"x": 1726,
			"y": 948,
			"w": 24,
			"h": 24,
			"t": 32
		},
		{
			"x": 1238,
			"y": 1022,
			"w": 24,
			"h": 26,
			"t": 20
		},
		{
			"x": 504,
			"y": 1060,
			"w": 26,
			"h": 24,
			"t": 12
		},
		{
			"x": 772,
			"y": 1140,
			"w": 26,
			"h": 24,
			"t": 4
		},
		{
			"x": 1644,
			"y": 1094,
			"w": 24,
			"h": 24,
			"t": 28
		},
		{
			"x": 352,
			"y": 992,
			"w": 26,
			"h": 24,
			"t": 16
		},
		{
			"x": 1620,
			"y": 1018,
			"w": 24,
			"h": 26,
			"t": 28
		}
	]
};
var tables = data.tables;
var chairs = data.chairs;
var FULL = {
	x: 180,
	y: 330,
	w: 1720,
	h: 1420
};
function focusView(cx, cy) {
	const w = 640;
	const h = 760;
	return {
		x: Math.max(FULL.x, Math.min(cx - w / 2, FULL.x + FULL.w - w)),
		y: Math.max(FULL.y, Math.min(cy - h / 2 - 40, FULL.y + FULL.h - h)),
		w,
		h
	};
}
function FloorPlan({ activeTable, focus, onToggleFocus }) {
	const active = tables.find((table) => table.id === activeTable) ?? null;
	const view = active && focus ? focusView(active.x, active.y) : FULL;
	const dim = activeTable !== null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full min-h-0 w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: `${view.x} ${view.y} ${view.w} ${view.h}`,
			className: "h-full w-full",
			role: "img",
			"aria-label": active ? `Sơ đồ sảnh, bàn ${active.id} được đánh dấu` : "Sơ đồ sảnh tiệc, 32 bàn",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M211 530\n             C250 430 340 368 460 378\n             C560 386 640 430 760 456\n             C900 478 1040 450 1180 410\n             C1360 354 1560 318 1700 338\n             C1780 350 1824 420 1836 520\n             L1836 936\n             L1867 936\n             L1867 1552\n             L211 1552\n             Z",
					className: "fill-none stroke-cream",
					strokeWidth: 3
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M211 530\n             C250 418 340 356 460 366\n             C560 374 640 418 760 444\n             C900 466 1040 438 1180 398\n             C1360 342 1560 306 1700 326\n             C1780 338 1824 408 1836 508",
					className: "fill-none stroke-cream opacity-70",
					strokeWidth: 1.5
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: 630,
					y: 528,
					width: 46,
					height: 58,
					className: "fill-cream"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: 996,
					y: 528,
					width: 46,
					height: 58,
					className: "fill-cream"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: 1364,
					y: 528,
					width: 44,
					height: 58,
					className: "fill-cream"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: 822,
					y: 612,
					width: 412,
					height: 198,
					className: "fill-cream"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: 1028,
					y: 724,
					textAnchor: "middle",
					className: "fill-wine font-display",
					style: {
						fontSize: 42,
						letterSpacing: "0.18em"
					},
					children: "SÂN KHẤU"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: 990,
					y: 810,
					width: 72,
					height: 560,
					className: "fill-cream"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: 386,
					y: 1552,
					width: 366,
					height: 120,
					className: "fill-none stroke-cream",
					strokeWidth: 3
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: 752,
					y: 1552,
					width: 296,
					height: 120,
					className: "fill-none stroke-cream",
					strokeWidth: 3
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: 1360,
					y: 1552,
					width: 507,
					height: 156,
					className: "fill-none stroke-cream",
					strokeWidth: 3
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: 1613,
					y: 1640,
					textAnchor: "middle",
					className: "fill-cream font-sans",
					style: {
						fontSize: 26,
						letterSpacing: "0.22em"
					},
					children: "STAFF ONLY"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M1128 1552 A 58 58 0 0 1 1244 1552",
					className: "fill-none stroke-cream",
					strokeWidth: 3
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M1244 1552 A 58 58 0 0 1 1360 1552",
					className: "fill-none stroke-cream",
					strokeWidth: 3
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M1648 1552 A 52 52 0 0 1 1752 1552",
					className: "fill-none stroke-cream",
					strokeWidth: 3
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M1752 1552 A 52 52 0 0 1 1856 1552",
					className: "fill-none stroke-cream",
					strokeWidth: 3
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: 1244,
					y: 1616,
					textAnchor: "middle",
					className: "fill-cream font-sans",
					style: {
						fontSize: 22,
						letterSpacing: "0.2em"
					},
					children: "LỐI VÀO"
				}),
				tables.map((table) => {
					const on = table.id === activeTable;
					const seats = chairs.filter((chair) => chair.t === table.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						opacity: !dim || on ? 1 : .42,
						children: [
							seats.map((seat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
								x: seat.x,
								y: seat.y,
								width: seat.w,
								height: seat.h,
								rx: 4,
								className: on ? "fill-paper stroke-cream" : "fill-sky",
								strokeWidth: on ? 2 : 0
							}, `${seat.x}-${seat.y}`)),
							on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: table.x,
								cy: table.y,
								r: 86,
								className: "seat-ring fill-none stroke-cream",
								strokeWidth: 7
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
								cx: table.x,
								cy: table.y,
								r: 34,
								className: on ? "fill-cream" : "fill-paper"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
								x: table.x,
								y: table.y + 2,
								textAnchor: "middle",
								dominantBaseline: "middle",
								className: "fill-wine font-display",
								style: {
									fontSize: on ? 36 : 30,
									fontWeight: 600
								},
								children: table.id
							})
						]
					}, table.id);
				})
			]
		}), onToggleFocus && active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onToggleFocus,
			className: "absolute right-3 bottom-3 rounded-full bg-cream px-4 py-2 text-sm font-medium text-wine",
			children: focus ? "Xem toàn sảnh" : "Phóng bàn của bạn"
		})]
	});
}
function SeatingApp() {
	const [screen, setScreen] = (0, import_react.useState)("find");
	const [query, setQuery] = (0, import_react.useState)("");
	const [guest, setGuest] = (0, import_react.useState)(null);
	const [focus, setFocus] = (0, import_react.useState)(true);
	const [inviteUrl, setInviteUrl] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const url = new URL(window.location.href);
		url.search = "";
		url.hash = "";
		setInviteUrl(url.toString());
	}, []);
	const results = (0, import_react.useMemo)(() => searchGuests(guests, query), [query]);
	const mates = guest ? guests.filter((item) => item.table === guest.table && item.id !== guest.id) : [];
	function pick(next) {
		setGuest(next);
		setFocus(true);
		setScreen("seat");
	}
	if (screen === "qr") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-wine text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex min-h-screen max-w-lg flex-col px-6 py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setScreen("find"),
					className: "inline-flex items-center gap-2 text-sm text-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "size-4",
						"aria-hidden": true
					}), "Quay lại"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-xs tracking-widest uppercase text-cream/80",
					children: eventCopy.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-5xl leading-none text-cream",
					children: "Mã mời"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-sm text-base leading-relaxed text-cream/90",
					children: "In hoặc chiếu mã này. Khách quét bằng điện thoại sẽ mở trang tìm chỗ ngồi."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 rounded-card bg-cream p-6",
					children: inviteUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotQr, {
						value: inviteUrl,
						className: "mx-auto aspect-square w-full max-w-xs"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto aspect-square w-full max-w-xs" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 break-all text-center text-sm text-cream/75",
					children: inviteUrl
				})
			]
		})
	});
	if (screen === "seat" && guest) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex h-dvh flex-col bg-wine text-cream",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex items-start gap-3 px-4 pt-4 pb-3 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setScreen("find"),
					className: "mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-cream/30",
					"aria-label": "Quay lại tìm tên",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "size-5",
						"aria-hidden": true
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest uppercase text-cream/70",
							children: guest.side
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "truncate font-display text-3xl leading-tight sm:text-4xl",
							children: guest.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-cream/80",
							children: ["Cùng bàn: ", mates.map((mate) => mate.name).join(", ")]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shrink-0 rounded-card bg-cream px-4 py-2 text-center text-wine",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest uppercase",
						children: "Bàn"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl leading-none",
						children: guest.table
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative min-h-0 flex-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloorPlan, {
				activeTable: guest.table,
				focus,
				onToggleFocus: () => setFocus((value) => !value)
			})
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-wine text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid min-h-screen max-w-6xl lg:grid-cols-[minmax(0,28rem)_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col px-6 py-8 sm:px-10 sm:py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest uppercase text-cream/75",
						children: eventCopy.kicker
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-xs font-display text-6xl leading-[0.9] text-balance sm:text-7xl",
						children: eventCopy.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-sm font-display text-2xl leading-snug text-cream",
						children: eventCopy.thanks
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-sm text-sm leading-relaxed text-cream/80",
						children: eventCopy.hint
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-8",
						onSubmit: (event) => {
							event.preventDefault();
							if (results[0]) pick(results[0]);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "guest-search",
							className: "sr-only",
							children: "Tên khách mời"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 rounded-full bg-cream px-4 text-wine",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
									className: "size-5 shrink-0",
									"aria-hidden": true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "guest-search",
									value: query,
									onChange: (event) => setQuery(event.target.value),
									placeholder: "Nhập tên của bạn",
									autoComplete: "off",
									className: "h-14 w-full bg-transparent text-base outline-none placeholder:text-wine/45"
								}),
								query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => setQuery(""),
									"aria-label": "Xoá tên",
									className: "text-wine",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
										className: "size-5",
										"aria-hidden": true
									})
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4",
						"aria-live": "polite",
						children: [query.trim() && results.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-card border border-cream/25 px-4 py-4 text-sm leading-relaxed",
							children: "Chưa thấy tên này trong danh sách. Thử tên không dấu, hoặc hỏi bàn lễ tân."
						}), results.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex flex-col gap-2",
							children: results.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => pick(item),
								className: "flex w-full items-center justify-between gap-3 rounded-card bg-cream px-4 py-3 text-left text-wine",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-base font-medium",
									children: item.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-sm text-wine/70",
									children: item.side
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-2xl leading-none",
									children: ["Bàn ", item.table]
								})]
							}) }, item.id))
						})]
					}),
					!query && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-sm text-sm leading-relaxed text-cream/70",
						children: eventCopy.sampleNote
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setScreen("qr"),
						className: "mt-auto inline-flex items-center gap-2 pt-10 text-sm text-cream/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QrCode, {
							className: "size-4",
							"aria-hidden": true
						}), "Mã QR cho ban tổ chức"]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "relative hidden min-h-screen border-l border-cream/15 lg:block",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloorPlan, {
					activeTable: null,
					focus: false
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "pointer-events-none absolute top-8 left-8 text-xs tracking-widest uppercase text-cream/70",
					children: "Sảnh · 32 bàn"
				})]
			})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SeatingApp, {});
}
//#endregion
export { Home as component };
