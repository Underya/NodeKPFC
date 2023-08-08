const path = require("path");
const port = 3001;   

module.exports = {
    entry: "./app.jsx", 
    output:{
        path: path.resolve(__dirname, "./public"),
        publicPath: "/public/",
        filename: "bundle.js"       
    },
    devServer: {
     historyApiFallback: true,
     static: {
      directory: path.join(__dirname, "/"),
    },
     port: port,
     open: true
   },
    module:{
        rules:[   
            {
                test: /\.jsx?$/, 
                exclude: /(node_modules)/,  
                loader: "babel-loader",   
                options:{
                    presets:[ "@babel/preset-react"]    // используемые плагины
                }
            }
        ]
    }
}