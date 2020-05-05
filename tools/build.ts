
import { build } from 'vite'
import { promises as fs } from 'fs'

(async function() {
  const result = await build({
    rollupInputOptions: {
      input: './App.vue'
    },
    rollupOutputOptions: {
      format: 'iife',
      file: './dist/bundle.js'
    },
    root: process.cwd(),
    cdn: false,
    write: true,
    minify: false,
    silent: false
  })

  //await fs.writeFile('./dist/bundle.js', result.assets[0].code)

})()