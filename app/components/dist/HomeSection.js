'use strict';
var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
var __generator =
	(this && this.__generator) ||
	function (thisArg, body) {
		var _ = {
				label: 0,
				sent: function () {
					if (t[0] & 1) throw t[1];
					return t[1];
				},
				trys: [],
				ops: [],
			},
			f,
			y,
			t,
			g;
		return (
			(g = { next: verb(0), throw: verb(1), return: verb(2) }),
			typeof Symbol === 'function' &&
				(g[Symbol.iterator] = function () {
					return this;
				}),
			g
		);
		function verb(n) {
			return function (v) {
				return step([n, v]);
			};
		}
		function step(op) {
			if (f) throw new TypeError('Generator is already executing.');
			while (_)
				try {
					if (
						((f = 1),
						y &&
							(t =
								op[0] & 2
									? y['return']
									: op[0]
									? y['throw'] || ((t = y['return']) && t.call(y), 0)
									: y.next) &&
							!(t = t.call(y, op[1])).done)
					)
						return t;
					if (((y = 0), t)) op = [op[0] & 2, t.value];
					switch (op[0]) {
						case 0:
						case 1:
							t = op;
							break;
						case 4:
							_.label++;
							return { value: op[1], done: false };
						case 5:
							_.label++;
							y = op[1];
							op = [0];
							continue;
						case 7:
							op = _.ops.pop();
							_.trys.pop();
							continue;
						default:
							if (
								!((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
								(op[0] === 6 || op[0] === 2)
							) {
								_ = 0;
								continue;
							}
							if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
								_.label = op[1];
								break;
							}
							if (op[0] === 6 && _.label < t[1]) {
								_.label = t[1];
								t = op;
								break;
							}
							if (t && _.label < t[2]) {
								_.label = t[2];
								_.ops.push(op);
								break;
							}
							if (t[2]) _.ops.pop();
							_.trys.pop();
							continue;
					}
					op = body.call(thisArg, _);
				} catch (e) {
					op = [6, e];
					y = 0;
				} finally {
					f = t = 0;
				}
			if (op[0] & 5) throw op[1];
			return { value: op[0] ? op[1] : void 0, done: true };
		}
	};
exports.__esModule = true;
var image_1 = require('next/image');
// var blogs = [
// 	{
// 		id: '687e266dc46d0c2fa8b9278adfd',
// 		title: 'NextJS is Awesome',
// 		description:
// 			'<p>Hello, NextJS is really Awesome. </p><p>You should learn it.</p>',
// 		imageUrl:
// 			'http://res.cloudinary.com/ddspmoji8/image/upload/v1753097834/nextjs-full-stack-blog/ksb579sm2mihahed4tkb.png',
// 		userId: '686f8d4ffe76db0c15bcfa94',
// 		createdAt: '2025-07-21T11:37:17.438Z',
// 		updatedAt: '2025-07-21T11:50:22.720Z',
// 		categoryId: '686fe4548e6426dc4251e00b',
// 		location: 'India',
// 	},
// 	{
// 		id: '687e266dc46d0c2fa8b9278adfsd',
// 		title: 'NextJS is Awesome',
// 		description:
// 			'<p>Hello, NextJS is really Awesome. </p><p>You should learn it.</p>',
// 		imageUrl:
// 			'http://res.cloudinary.com/ddspmoji8/image/upload/v1753097834/nextjs-full-stack-blog/ksb579sm2mihahed4tkb.png',
// 		userId: '686f8d4ffe76db0c15bcfa94',
// 		createdAt: '2025-07-21T11:37:17.438Z',
// 		updatedAt: '2025-07-21T11:50:22.720Z',
// 		categoryId: '686fe4548e6426dc4251e00b',
// 		location: 'India',
// 	},
// 	{
// 		id: '687e266dc46d0c2fa8b9278adfs',
// 		title: 'NextJS is Awesome',
// 		description:
// 			'<p>Hello, NextJS is really Awesome. </p><p>You should learn it.</p>',
// 		imageUrl:
// 			'http://res.cloudinary.com/ddspmoji8/image/upload/v1753097834/nextjs-full-stack-blog/ksb579sm2mihahed4tkb.png',
// 		userId: '686f8d4ffe76db0c15bcfa94',
// 		createdAt: '2025-07-21T11:37:17.438Z',
// 		updatedAt: '2025-07-21T11:50:22.720Z',
// 		categoryId: '686fe4548e6426dc4251e00b',
// 		location: 'India',
// 	},
// 	{
// 		id: '687e266dc46d0c2fa8bdfsf9278a',
// 		title: 'NextJS is Awesome',
// 		description:
// 			'<p>Hello, NextJS is really Awesome. </p><p>You should learn it.</p>',
// 		imageUrl:
// 			'http://res.cloudinary.com/ddspmoji8/image/upload/v1753097834/nextjs-full-stack-blog/ksb579sm2mihahed4tkb.png',
// 		userId: '686f8d4ffe76db0c15bcfa94',
// 		createdAt: '2025-07-21T11:37:17.438Z',
// 		updatedAt: '2025-07-21T11:50:22.720Z',
// 		categoryId: '686fe4548e6426dc4251e00b',
// 		location: 'India',
// 	},
// 	{
// 		id: '687e266dc46d0c2fdfsfa8b9278a',
// 		title: 'NextJS is Awesome',
// 		description:
// 			'<p>Hello, NextJS is really Awesome. </p><p>You should learn it.</p>',
// 		imageUrl:
// 			'http://res.cloudinary.com/ddspmoji8/image/upload/v1753097834/nextjs-full-stack-blog/ksb579sm2mihahed4tkb.png',
// 		userId: '686f8d4ffe76db0c15bcfa94',
// 		createdAt: '2025-07-21T11:37:17.438Z',
// 		updatedAt: '2025-07-21T11:50:22.720Z',
// 		categoryId: '686fe4548e6426dc4251e00b',
// 		location: 'India',
// 	},
// 	{
// 		id: '687e266ddfsdc46d0c2fa8b9278a',
// 		title: 'NextJS is Awesome',
// 		description:
// 			'<p>Hello, NextJS is really Awesome. </p><p>You should learn it.</p>',
// 		imageUrl:
// 			'http://res.cloudinary.com/ddspmoji8/image/upload/v1753097834/nextjs-full-stack-blog/ksb579sm2mihahed4tkb.png',
// 		userId: '686f8d4ffe76db0c15bcfa94',
// 		createdAt: '2025-07-21T11:37:17.438Z',
// 		updatedAt: '2025-07-21T11:50:22.720Z',
// 		categoryId: '686fe4548e6426dc4251e00b',
// 		location: 'India',
// 	},
// ];
var HomeSection = function () {
	return __awaiter(void 0, void 0, void 0, function () {
		return __generator(this, function (_a) {
			// const blogs = await getAllBlogs(6);
			return [
				2 /*return*/,
				React.createElement(
					'section',
					{ className: 'w-full my-4' },
					React.createElement(
						'div',
						{
							className:
								'w-full flex min-xs:flex-col min-md:flex-row justify-center items-center',
						},
						React.createElement(
							'div',
							{ className: 'p-8 w-3/4 flex flex-col gap-3' },
							React.createElement(
								'p',
								{
									className:
										'tracking-wide min-lg:text-6xl min-md:text-3xl min-xs:text-2xl min-md:w-2/4 min-xs:4/4 text-start text-gray-900',
								},
								'Learn from the best, and become the best.',
							),
							React.createElement(
								'p',
								{
									className:
										'tracking-wide my-2 min-md:text-2xl min-xs:text-md font-semibold min-md:w-3/4 min-xs:w-full text-start text-gray-900',
								},
								'Learn it by doing it for FREE with practical step by step series and articles.',
							),
						),
						React.createElement(
							'div',
							{ className: 'min-md:w-2/4 min-xs:w-3/4 min-md:mx-2 min-xs:my-2' },
							React.createElement(image_1['default'], {
								className: 'w-full rounded-2xl drop-shadow-2xl',
								alt: 'CarouselImage',
								width: 300,
								height: 200,
								src: 'https://images.unsplash.com/photo-1749740577807-e20202e60da4',
							}),
						),
					),
					React.createElement('hr', { className: 'p-3 my-4' }),
					React.createElement(
						'div',
						{ className: 'flex flex-col justify-center items-center' },
						React.createElement(
							'div',
							{ className: 'p-4' },
							React.createElement(
								'h2',
								{ className: 'text-2xl font-semibold' },
								'Recent Articles',
							),
						),
						React.createElement(
							'div',
							{ className: 'flex w-full flex-wrap justify-center' },
							blogs.map(function (blog) {
								return;
							}),
						),
					),
				),
			];
		});
	});
};
exports['default'] = HomeSection;
