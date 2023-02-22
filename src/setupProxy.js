const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports= app => {
    app.use(
        createProxyMiddleware('/login',
        {
            target:'https://apifood.kaviet.vn/api/kfood/v1',
            changeOrigin:true
        }
        
        )
        
    )
    app.use(
        createProxyMiddleware('/viewRole',{
            target:'https://apifood.kaviet.vn/api/kfood/v1',
            changeOrigin:true
        }
        
        )
        
    )
    // app.use(
    //     createProxyMiddleware('/viewRole',{
    //         target:'https://apifood.kaviet.vn/api/kfood/v1',
    //         changeOrigin:true
    //     }
        
    //     )
        
    // )
}