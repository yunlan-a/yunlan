import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'




export default defineConfig(({ command, mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ],
    server: {
      open: true,
      root:'127.0.0.1',
      port: 6166,
      https: false,            //设置本地默认端口  选填
      proxy: {                 //设置代理，必须填
        '/api': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
          target: env.VITE_APP_SERVER_URL,     //代理的目标地址，这是豆瓣接口地址网址
          changeOrigin: true,              //是否设置同源，输入是的 
          rewrite: (path) => path.replace(/^\/api/, ''),
          // rewrite: (path) => path.replace('^/api', ''),
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '#': resolve(__dirname, 'types')
      }
    },
    define: {
      __APP_ENV__: env.APP_ENV
    }
  }
})



// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue(),
//             AutoImport({
//               resolvers: [ElementPlusResolver()],
//             }),
//             Components({
//               resolvers: [ElementPlusResolver()],
//             }),
//   ],
//   server:{
//     open:true,
//     port:6166,
//     https: false,            //设置本地默认端口  选填
//     proxy: {                 //设置代理，必须填
//       '/api': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
//           target: 'http://127.0.0.1:8000',     //代理的目标地址，这是豆瓣接口地址网址
//           changeOrigin: true,              //是否设置同源，输入是的
//           rewrite: (path) => path.replace(/^\/api/, ''),
//       }
//     }
//   },
//   resolve: {
//     alias: {
//       '@': resolve(__dirname, 'src'),
//       '#': resolve(__dirname, 'types')
//     }
//   }
// })
