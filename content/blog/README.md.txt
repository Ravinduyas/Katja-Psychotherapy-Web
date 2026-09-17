HOW TO ADD A BLOG ARTICLE
=========================

1. Create a new file in this folder ending in .md
   The file name becomes the URL, e.g. "coping-with-anxiety.md" -> /blog/coping-with-anxiety

2. Start the file with a frontmatter block:

---
title: "Your Article Title"
date: "2026-09-17"
excerpt: "A one-or-two sentence summary shown on the blog listing page."
image: "/blog/my-image.jpg"        (optional — put the image in public/blog/)
tags: ["Anxiety", "Self-care"]     (optional)
---

3. Below the frontmatter, write the article in Markdown:
   ## Heading
   **bold**, *italic*, [links](https://example.com)
   - bullet lists
   > quotes

The newest article (by date) appears first on /blog.

(This file is named .md.txt on purpose so it does not show up as an article.)
