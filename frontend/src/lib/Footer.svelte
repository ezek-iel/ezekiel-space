<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<footer>
    <section>
        <p>Made with <Icon icon="mdi:heart" /> using Svelte and Pocketbase</p>
        <p>
                Let's connect on <a
                href="https://twitter.com/yourusername"
                target="_blank"
                >Linkedin <span class="social-icon">
                    <Icon icon="tabler:brand-linkedin" />
                </span></a
            >,
            <a href="/"
                >Bluesky <span class="social-icon"
                    ><Icon icon="tabler:brand-bluesky" /></span
                ></a
            >
            and
            <a href="/">Github <Icon icon="tabler:brand-github" /></a>
        </p>
    </section>
</footer>

<style>
    footer {
        background-color: #181546;
        padding: 4rem 1.5rem;
        margin-block-start: 6rem;
    }

    .social-icon {
        font-size: 1.3rem;
    }

    @media (min-width: 700px) {
        footer {
            padding-inline: 6rem;
        }
    }

    @media (min-width: 1024px) {
        footer > * {
            margin-inline: auto;
        }
    }
</style>
