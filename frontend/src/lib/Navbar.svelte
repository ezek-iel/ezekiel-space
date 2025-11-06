<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<nav>
    <a href="/"><span class="inline-icon"><Icon icon="tabler:home" /></span>Home</a>
    <a href="/blogs"> <span class="inline-icon"><Icon icon="tabler:books" /></span>Blogs</a>
    <a href="/ai"><span class="inline-icon"><Icon icon="tabler:robot" /></span>AI</a>
    <a href="/images"><span class="inline-icon"><Icon icon="tabler:photo" /></span>Img</a>
</nav>

<style>
    nav {
        padding-block: 1rem;
        display: flex;
        align-items: center;
        gap: 3rem;
        font-weight: 500;
        justify-content: center;
        margin-block-end: 2rem;
    }

    .inline-icon {
        font-size: 1.3rem;
    }
</style>
