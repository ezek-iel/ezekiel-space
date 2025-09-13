<script lang="ts">
  import "./utils/router";
  import { Router } from "sv-router";
  import Footer from "./lib/Footer.svelte";
  import Navbar from "./lib/Navbar.svelte";
</script>

<Navbar />
<main>
  <Router />
</main>
<Footer />
