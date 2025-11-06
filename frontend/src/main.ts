import { mount } from 'svelte'
import '@picocss/pico'
import '@picocss/pico/css/pico.indigo.min.css'
import './app.css'
import App from './App.svelte'
import "highlight.js/styles/github-dark.css"

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
