import { mount } from 'svelte'
import '@picocss/pico'
import '@picocss/pico/css/pico.indigo.min.css'
import './app.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

export default app
