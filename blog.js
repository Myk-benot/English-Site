async function loadBlogPosts() {
  try {
    const response = await fetch("posts.json");
    const posts = await response.json();
    const blogPostsContainer = document.getElementById("blogPosts");

    posts.forEach((post) => {
      blogPostsContainer.innerHTML += `
        <div class="w-3/4 bg-gray-900 rounded-lg p-6 mb-4 text-white">
          <h3 class="text-lg font-semibold">${post.title}</h3>
          <p>${post.date}</p>
          <p>${post.summary}</p>
          <a href="post.html?markdownUrl=${encodeURIComponent(
            post.MarkdownUrl
          )}" class="post-link hover:text-green-400">Read more</a>
        </div>
      `;
    });
  } catch (error) {
    console.error("Error loading blog posts:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadBlogPosts();
});
