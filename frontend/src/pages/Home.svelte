<script lang="ts">
    import Icon from "@iconify/svelte";
    import { getAllPinnedBlogs } from "../utils/funcs";
    import BlogCard from "../lib/BlogCard.svelte";

    let allPinnedBlogs = $state(getAllPinnedBlogs());
</script>

<section class="intro" aria-label="Introduction">
    <h1>I'm Ezekiel</h1>
    <p>
        Hi, I'm a Developer based in Nigeria, I love building projects and
        teaching people how to build projects. On the side, I enjoy listening to
        Japanese music <span class="inline-icon">
            <Icon icon="tabler:music-code" />
        </span>
        , playing Need for Speed
        <span class="inline-icon"><Icon icon="tabler:device-gamepad-2" /></span>
        and reading books
        <span class="inline-icon">
            <Icon icon="tabler:book" />
        </span>
    </p>
    <div class="cta">
        <button
            >Watch Videos
            <Icon icon="tabler:brand-youtube" />
        </button>
        <a href="blogs"><button class="outline">Read Blogs</button></a>
    </div>
</section>

<section class="blog-section" aria-labelledby="blog-heading">
    <h2 id="blog-heading">Blogs <Icon icon="tabler:star" /></h2>

    <div class="blogs">
        {#await allPinnedBlogs then data}
            {#each data as blog, _ (_)}
                <BlogCard {blog} />
            {/each}
        {/await}
    </div>
</section>

<style>
    .intro {
        padding-block-end: 4rem;
    }

    .intro h1 {
        margin-bottom: 1.5rem;
    }

    button {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }

    .inline-icon {
        font-size: 1.3rem;
    }

    .cta {
        margin-top: 2rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .blog-section {
        margin-block-start: 4rem;
    }

    h2 {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .blogs {
        margin-block-start: 2rem;
    }

    @media (min-width: 700px) {
        .blogs {
            margin-block-start: 3rem;
        }
    }
</style>
