<script lang="ts">
    import type { Post } from "../utils/funcs";
    import { formatDate } from "../utils/funcs";

    let { blog }: { blog: Post } = $props();
</script>

<article>
    <a href="/blogs/{blog.short_title}" aria-label="Link to article"></a>
    <h4>{blog.title}</h4>
    <p>
        {blog.subtitle}
    </p>
    <span>Written on {formatDate(new Date(blog.created))}</span>
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

    a:hover + h4 {
        text-decoration: underline;
    }

    span {
        font-size: 0.875rem;
    }
</style>
