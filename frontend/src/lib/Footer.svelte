<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<footer>
    <section>
        <p>Made with <Icon icon="mdi:heart" /> using Svelte and Pocketbase</p>
        <p>
            Let's connect on <a
                href="https://www.linkedin.com/in/akinfenwa-ezekiel"
                target="_blank"
                >Linkedin <span class="social-icon">
                    <Icon icon="tabler:brand-linkedin" />
                </span></a
            >,
            <a href="https://bsky.app/profile/thatboyezekiel.bsky.social"
                >Bluesky <span class="social-icon"
                    ><Icon icon="tabler:brand-bluesky" /></span
                ></a
            >
            and
            <a href="https://github.com/ezek-iel"
                >Github <Icon icon="tabler:brand-github" /></a
            >
        </p>
        <i class="small-text"
            ><Icon icon="tabler:mail" />Send me a mail at hi@ezekielspace.cc</i
        >
    </section>
</footer>

<style>
    footer {
        border-block-start: 0.25rem dashed var(--pico-primary-background);
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
