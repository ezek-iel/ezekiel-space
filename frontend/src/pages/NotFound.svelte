<script lang="ts">
    import { onMount } from "svelte";
    import { navigate } from "../utils/router";

    onMount(() => {
        navigate("/");
    });
</script>
