<script lang="ts">
    import { route } from "../utils/router";
    import type { Post } from "../utils/funcs";
    import {
        getBlogByShortTitle,
        formatDate,
        parseMarkdown,
    } from "../utils/funcs";
    import { onMount } from "svelte";
    import { get } from "svelte/store";

    let id = $state(route.params.id!);
    let isLoading = $state(true);
    let blogContents: Post | null = $state(null);

    onMount(function () {
        getBlogByShortTitle(id).then(function (resp) {
            blogContents = resp;
            isLoading = false;
        });
    });
</script>

<svelte:head>
    {#if blogContents}
        <title>{blogContents.title} | Ezekiel Space</title>
        <meta property="og:title" content={blogContents.title} />
        <meta property="og:description" content={blogContents.subtitle} />
        <meta property="og:image" content={blogContents.preview_image} />
    {/if}
</svelte:head>

{#if isLoading}
    <span aria-busy="true">Loading blog content</span>
{:else if blogContents}
    <section aria-label="blog heading">
        <h1>{blogContents.title}</h1>
        <p>Written {formatDate(new Date(blogContents.created))}</p>
        <hr />
    </section>

    <section aria-label="Blog Content">
        <div class="markdown-block">
            {@html parseMarkdown(blogContents.content)}
        </div>
    </section>
{:else}
    <section class="not-found" aria-label="Blog Not Found">
        <article>
            <h2>The blog you're looking for does not exist.</h2>
            <h4>
                You could check the <a href="/blogs">blog list</a> for other posts.
            </h4>
        </article>
    </section>
{/if}

<style>
    p {
        font-size: 0.95rem;
    }

    .not-found {
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
