<script lang="ts">
    import { getAllBlogs } from "../utils/funcs";
    import BlogCard from "../lib/BlogCard.svelte";
    import Icon from "@iconify/svelte";

    let allBlogs = $state(getAllBlogs());
</script>

<section>
    <h2 id="blog-heading">Blogs <Icon icon="tabler:star" /></h2>
    <p>Some of the stuff I've written.</p>
</section>

<section aria-label="Blog List" class="blog-list">
    {#await allBlogs then data}
        {#each data as blog, _ (_)}
            <BlogCard {blog} />
        {/each}
    {/await}
</section>

<style>

    h2 {
        display: flex;
        align-items: center;
        gap: 0.25rem;
    }

    section.blog-list {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-block-start: 4rem;
    }
</style>
