<script lang="ts">
    import { formatDate, getAllImages, getImageUrl } from "../utils/funcs";

    let allImages = $state(getAllImages());
    $inspect(allImages);
</script>

<section>
    <h2>Images</h2>
    <p>
        This is where all the images used throughout the blogposts
        are kept in case you need it.
    </p>

    {#await allImages then data}
        <ul>
            {#each data as image}
            {@const imageUrl = getImageUrl(image)}
                <li>
                    <a href={imageUrl}
                        >{image.file} added {formatDate(
                            new Date(image.created),
                        )}</a
                    >: <small>{imageUrl}</small>
                </li>
            {/each}
        </ul>
    {/await}
</section>
