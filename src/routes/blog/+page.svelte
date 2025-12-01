<script lang="ts">
	import { base } from '$app/paths';

	const posts = [
		{ href: '/blog/posts/post1', title: 'Understanding Unicode Normalization: NFC vs NFD', description: 'A deep dive into why Unicode has multiple ways to represent the same character — and why it matters.' },
		{ href: '/blog/posts/post2', title: 'When “é” Is Not Equal to “é”: Canonical Equivalence Explained', description: 'Explore how visually identical characters can have different binary representations — and break string comparison.' },
		{ href: '/blog/posts/post3', title: 'The Hidden Bugs of Unnormalized Text in Databases', description: 'Why storing NFD text from macOS can cause duplicate entries, search failures, and indexing issues.' },
		{ href: '/blog/posts/post4', title: 'How Modern Browsers Handle NFC and NFD Differently', description: 'Real examples of URL encoding, form submissions, and DOM behavior across platforms.' },
		{ href: '/blog/posts/post5', title: 'Detecting Normalization Form in JavaScript: The Native Way', description: 'How String.prototype.normalize() and comparison tricks reveal the true form of any text.' },
		{ href: '/blog/posts/post6', title: 'Best Practices: Always Normalize Input at the Edge', description: 'Why you should normalize user input early — and how to do it safely in web apps.' },
		{ href: '/blog/posts/post7', title: 'Unicode Normalization in Search, Sorting, and Security', description: 'From preventing homograph attacks to enabling accurate full-text search across platforms.' }
	];
</script>

<svelte:head>
	<title>Blog • AxelBase Unicode Normalizer</title>
	<meta name="description" content="Technical deep dives into Unicode normalization, NFC/NFD differences, real-world bugs, and best practices for consistent text handling." />
</svelte:head>

<div class="container py-5 blog-index">
	<header class="blog-header text-center mb-5">
		<h1 class="display-5 fw-bold text-primary mb-4">
			<i class="bi bi-journal-text"></i> AxelBase Insights
		</h1>
		<p class="lead text-muted col-lg-8 mx-auto">
			Expert articles on Unicode normalization, text encoding edge cases, and building robust cross-platform applications.
		</p>
	</header>

	<div class="posts-grid">
		{#each posts as post}
			<a href="{base}{post.href}" class="card post-card h-100 shadow-sm border-0 text-decoration-none">
				<div class="card-body d-flex flex-column">
					<h2 class="post-title h5 fw-bold text-primary mb-3">{post.title}</h2>
					<p class="post-description text-muted small flex-grow-1">{post.description}</p>
					<span class="read-more text-primary fw-semibold mt-3">
						Read Article →
					</span>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
	.blog-index { max-width: 1200px; margin: 0 auto; }
	.posts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
		gap: 2rem;
	}
	.post-card {
		transition: transform 0.2s, box-shadow 0.2s;
		background: white;
		border-radius: 12px;
		overflow: hidden;
	}
	.post-card:hover {
		transform: translateY(-8px);
		box-shadow: 0 12px 24px rgba(0,0,0,0.1) !important;
	}
	.post-card:hover .read-more {
		transform: translateX(6px);
	}
	.read-more {
		transition: transform 0.2s ease;
		align-self: flex-start;
	}
</style>