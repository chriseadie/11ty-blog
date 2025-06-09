import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
    eleventyConfig.setOutputDirectory("./docs");
    eleventyConfig.addPassthroughCopy("./styles/main.css");
    eleventyConfig.addWatchTarget("./styles/main.css")
    eleventyConfig.addPassthroughCopy("./styles/prism.css");
    eleventyConfig.addWatchTarget("./styles/prism.css")
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("./javascript/main.js");
    eleventyConfig.addWatchTarget("./javascript/main.js");
    eleventyConfig.addPassthroughCopy("./javascript/prismjs.js");
    eleventyConfig.addWatchTarget("./javascript/prismjs.js");

    eleventyConfig.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));
    eleventyConfig.addNunjucksFilter("log", (val) => console.log(val));

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