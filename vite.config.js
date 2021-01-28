import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
/**
 * @type {import('vite').UserConfig}
 */
module.exports = {
  outputDir: 'dist',
  base: '/mahjong/',
  assetsDir: 'assets',
  plugins: [
    vue(),
    styleImport({
      libs: [{
        libraryName: 'ant-design-vue',
        esModule: true,
        resolveStyle: (name) => {
          return `ant-design-vue/es/${name}/style/css`;
        }
      }]
    })
  ]
};
