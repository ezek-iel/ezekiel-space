import type { RecordService } from "pocketbase";
import Pocketbase from "pocketbase";
import moment from "moment";
import markdownit from "markdown-it";

export interface Post {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    created: string;
    short_title: string;
    pinned: boolean;
}

interface TypedPocketbase extends Pocketbase {
    collection(idOrName: "post"): RecordService<Post>;
}

const pb = new Pocketbase("http://127.0.0.1:8090") as TypedPocketbase;

export async function getAllBlogs() {
    return await pb.collection("post").getFullList();
}

export async function getBlogByShortTitle(short_title: string) {
    const records = await pb.collection("post").getFullList({
        filter: `short_title="${short_title}"`
    });
    return records[0];
}

export function formatDate(date: Date): string {
    return moment(date).format("MMMM Do YYYY")
}

export function parseMarkdown(content: string) {
    const parser =  markdownit();
    return parser.render(content);
}

export function getAllPinnedBlogs() {
    return pb.collection("post").getFullList({
        filter: "pinned=true"
    });
}