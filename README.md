# Khóa học AI văn phòng

Web so sánh khóa học AI cho người đi làm văn phòng, là một phần của đề tài nghiên cứu MK-04 về Generative Engine Optimization.

Giao diện dựa trên [AstroPaper](https://github.com/satnaing/astro-paper) (MIT License, xem `LICENSE`).

## Chạy trên máy

Cần Node.js >= 22.23.4 và pnpm.

```bash
pnpm install
pnpm run dev
```

Bài viết nằm trong `src/content/posts/`. Mỗi lần đẩy lên nhánh `main`, GitHub Actions sẽ build và đăng web lên GitHub Pages.
