import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://aoi0701.github.io/",
    title: "Khóa học AI văn phòng",
    description:
      "Tổng hợp và so sánh thông tin các khóa học AI cho người đi làm văn phòng, có ghi rõ nguồn và ngày kiểm tra.",
    author: "Khóa học AI văn phòng",
    ogImage: "default-og.jpg",
    lang: "vi",
    timezone: "Asia/Ho_Chi_Minh",
    dir: "ltr",
  },
  posts: {
    perPage: 8,
    perIndex: 8,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: false,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [],
  shareLinks: [],
});
