<script lang="ts">
    import { route } from "../utils/router";
    import {
        getBlogByShortTitle,
        formatDate,
        parseMarkdown,
    } from "../utils/funcs";

    let id = $state(route.params.id!);
    let blog = $state(getBlogByShortTitle(id));
</script>

{#await blog then data}
    {#if data}
        <section aria-label="blog heading">
            <h1>{data.title}</h1>
            <p>Written {formatDate(new Date(data.created))}</p>
            <hr />
        </section>

        <section aria-label="Blog Content">
            {@html parseMarkdown(data.content)}
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
{/await}

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
