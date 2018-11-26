const PATH = require('path')
const { injectBabelPlugin } = require('react-app-rewired');

function resolve(url){
    return PATH.resolve(__dirname, 'src/', url)
}



module.exports = function override(config, evn) {

    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
    
    
    config.resolve.alias = {
        ...config.resolve.alias,
        '@' : resolve(''),
        '@As' : resolve('assets'),
        '@C' : resolve('components'),
        '@Pages' : resolve('pages'),
        '@Lib' : resolve('lib'),
        '@Store' : resolve('store')
    }
    return config  
};