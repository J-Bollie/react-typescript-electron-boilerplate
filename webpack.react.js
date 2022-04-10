const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

let config = {
	entry: "./src/renderer.tsx",
	target: "electron-renderer",
	devtool: "source-map",
	resolve: {
		alias: {
			["@"]: path.resolve(__dirname, "src"),
		},
		extensions: [".tsx", ".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				include: /src/,
				use: [
					{
						loader: "ts-loader",
					},
				],
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|jp2|webp)$/,
				loader: "file-loader",
				options: {
					name: "images/[name].[ext]",
				},
			},
			{
				test: /\.svg$/,
				use: ["@svgr/webpack", "url-loader"],
			},
		],
	},
	output: {
		path: __dirname + "/dist",
		filename: "renderer.js",
		hashFunction: "xxhash64",
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: "./src/index.html",
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "dist"),
		},
		hot: true,
		// open: true,
		compress: true,
		port: 9000,
	},
};

module.exports = (env, argv) => {
	if (argv.mode === "development") {
		config.target = "web";
	}

	return config;
};
