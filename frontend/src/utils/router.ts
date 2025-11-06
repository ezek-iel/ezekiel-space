import { createRouter } from "sv-router";
import Home from "../pages/Home.svelte";
import Blogs from "../pages/Blogs.svelte";
import BlogPage from "../pages/BlogPage.svelte";
import NotFound from "../pages/NotFound.svelte";
import AIManifesto from "../pages/AIManifesto.svelte";
import Images from "../pages/Images.svelte";

export const {p, navigate, route} = createRouter( {
    "/": Home,
    "/blogs": Blogs,
    "/blogs/:id": BlogPage,
    "/ai": AIManifesto,
    "*": NotFound,
    "/images": Images
})