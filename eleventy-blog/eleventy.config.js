import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./styles/main.css");
    eleventyConfig.addWatchTarget("./styles/main.css")
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("./javascript/main.js");
    eleventyConfig.addWatchTarget("./javascript/main.js")

    eleventyConfig.addPlugin(feedPlugin, {
        type: "rss",
        outputPath: "/feed.xml",
        collection: {
            name: "post",
            limit: 0
        },
        metadata: {
            language: "en",
            title: "Chris Eadie Blog",
            subtitle: "This is a longer description about your blog.",
            base: "https://chriseadie.com/",
            author: {
                name: "Chris Eadie",
            }
        }
    })
}