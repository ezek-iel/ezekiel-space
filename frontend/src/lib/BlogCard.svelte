<script lang="ts">
    import type { Post } from "../utils/funcs";
    import { formatDate } from "../utils/funcs";

    let { blog }: { blog: Post } = $props();
</script>

<article>
    <h4>{blog.title}</h4>
    <p>
        {blog.subtitle}
    </p>
    <span>Written on {formatDate(new Date(blog.created))}</span>
    <a href="/blogs/{blog.short_title}" aria-label="Link to article"></a>
</article>

<style>
    p {
        color: #212121;
        font-size: 0.95rem;
    }

    @media (prefers-color-scheme: dark) {
        p {
            color: #a0acc7;
        }
    }

    article {
        position: relative;
    }

    a {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
    }

    article:has(a):hover {
        text-decoration: underline;
        text-decoration-thickness: 1px;
    }

    span {
        font-size: 0.875rem;
    }
</style>
