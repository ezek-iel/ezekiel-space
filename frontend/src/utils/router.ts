import { createRouter } from "sv-router";
import Home from "../pages/Home.svelte";
import Blogs from "../pages/Blogs.svelte";
import BlogPage from "../pages/BlogPage.svelte";
import NotFound from "../pages/NotFound.svelte";

export const {p, navigate, route} = createRouter( {
    "/": Home,
    "/blogs": Blogs,
    "/blogs/:id": BlogPage,
    "*": NotFound
})