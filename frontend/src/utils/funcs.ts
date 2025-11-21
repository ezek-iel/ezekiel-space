import type { RecordService } from "pocketbase";
import Pocketbase from "pocketbase";
import moment from "moment";
import markdownit from "markdown-it";
import hljs from "highlight.js";
import type { Attachment } from "svelte/attachments";
import markdownFootnote from "markdown-it-footnote"
import markdownCustomContainer from "markdown-it-container"
import type Token from "markdown-it/lib/token";

export interface Post {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    created: string;
    short_title: string;
    pinned: boolean;
    related: string;
    preview_image: string;
}

interface Image {
    id: string;

    /**
     * The name of the file rather than the file itself
     */
    file: string;
    created: string;
}

interface TypedPocketbase extends Pocketbase {
    collection(idOrName: "post"): RecordService<Post>;
    collection(idOrName: "images"): RecordService<Image>
}

const pb = new Pocketbase("/") as TypedPocketbase;

export async function getAllBlogs() {
    return await pb.collection("post").getFullList();
}

export async function getBlogByShortTitle(short_title: string) {
    const records = await pb.collection("post").getFullList({
        filter: `short_title="${short_title}"`
    });

    if (records.length == 0) {
        throw new Error("Blog does not exist")
    }

    return records[0]
}

export async function getAllImages() {
    return await pb.collection("images").getFullList()
}

export function formatDate(date: Date): string {
    return moment(date).format("MMMM Do YYYY")
}

export function parseMarkdown(content: string) {
    const parser = markdownit({
        highlight: function (str: string, lang: string) {
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(str, { language: lang }).value;
                } catch (__) { }
            }
            return ''; // use external default escaping
        }
    });

    parser.use(markdownFootnote)
    parser.use(markdownCustomContainer, 'iframe', {
        validate: function (params: string) {
            return params.trim().match(/^iframe\s(.*)$/)
        },
        render: function (tokens: Token[], idx: number) {
            const matches = tokens[idx].info.trim().match(/^iframe(.*)$/);

            if (tokens[idx].nesting === 1 && matches) {
                // opening tag
                const src = matches[1];
                return `<div class="iframe-container"><iframe src="${src}" frameborder="0" allowfullscreen></iframe>\n`;
            } else {
                return '</div>\n'
            }
        }
    });
    parser.use(markdownCustomContainer, "callout", {
        validate: function (params: string) {
            return params.trim().match(/^callout\s(.*)$/)
        },
        render: function (tokens: Token[], idx: number) {
            const matches = tokens[idx].info.trim().match(/^callout\s(.*)$/)
            console.log(matches)
            if (tokens[idx].nesting === 1 && matches) {
                return `<div class="callout ${parser.utils.escapeHtml(matches[1])}"> 
                <p class="title">${parser.utils.escapeHtml(matches[1])}</p>
                `
            } else {
                return `</div>\n`
            }
        }
    })
    return parser.render(content);
}

export function getAllPinnedBlogs() {
    return pb.collection("post").getFullList({
        filter: "pinned=true"
    });
}

export function getImageUrl(img: Image) {
    return pb.files.getURL(img, img.file)
}