const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const {ModuleFederationPlugin}=require("webpack").container

module.exports = {
  entry: "./src/index.js", // Entry point of the application
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "auto", // Needed for React Router
  },
  mode: "development", // Change to "production" for production builds
  devtool: "source-map",
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3001,
    hot: true,
    historyApiFallback: true, // Enables React Router to work properly
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Process JS and JSX files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/, // Process CSS files
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Handle images
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // Allow importing without file extensions
  },
  plugins: [
    new ModuleFederationPlugin({
        name:'emailComponent',
        filename:'remoteEntry.js',
        exposes:{
            './App':"./src/App.js"
        },
     
        
    }),
    new CleanWebpackPlugin(), // Cleans dist folder before build
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Uses our HTML template
      filename: "index.html",
    }),
  ],
};
