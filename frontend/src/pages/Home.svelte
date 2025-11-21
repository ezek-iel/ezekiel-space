<script lang="ts">
    import Icon from "@iconify/svelte";
    import { getAllPinnedBlogs } from "../utils/funcs";
    import BlogCard from "../lib/BlogCard.svelte";
   
    let allPinnedBlogs = $state(getAllPinnedBlogs());
</script>

<svelte:head>
    <title>Home | Ezekiel Space</title>
</svelte:head>

<section class="intro" aria-label="Introduction">
    <h1>Hi I'm Ezekiel</h1>
    <p class="main-text">
        I am a web developer based in Lagos, Nigeria. I love teaching others how
        to build software that harnesses the awesome power of the web. I also
        enjoy understanding how things work under the hood. When I am not on the
        keyboard, I love listening to Japanese music
        <span class="inline-icon">
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
        <a href="blogs"><button>Read Blogs</button></a>
    </div>
</section>

<section class="blog-section" aria-labelledby="blog-heading">
    <h2 id="blog-heading">Blogs <Icon icon="tabler:star" /></h2>

    <div class="blogs">
        {#await allPinnedBlogs}
            <span aria-busy="true">Waiting for the blogs</span>
        {:then data}
            {#each data as blog, _ (_)}
                <BlogCard {blog} />
            {/each}
        {:catch _}
            <article>
                <h5>Looks like something went wrong here {@html "<3"}</h5>
            </article>
        {/await}
    </div>
</section>

<style>
    .main-text {
        line-height: 2;
    }

    .intro {
        padding-block-end: 4rem;
    }

    .intro h1 {
        margin-block-end: 1.5rem;
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
        margin-block-start: 2rem;
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
