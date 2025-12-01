<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Unicode Normalization in Search, Sorting, and Security • AxelBase Blog</title>
	<meta name="description" content="How proper normalization enables accurate search, correct alphabetical order, and protection against homograph attacks." />
	<meta property="og:title" content="Unicode Normalization in Search, Sorting, and Security • AxelBase Blog" />
	<meta property="og:description" content="How proper normalization enables accurate search, correct alphabetical order, and protection against homograph attacks." />
	<meta property="og:url" content="{base}/blog/posts/post7" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/blog">Blog</a>
		<span>/</span>
		<p>Search, Sorting, and Security</p>
	</div>

	<article class="prose">
		<h1>Unicode Normalization in Search, Sorting, and Security</h1>
		<p class="post-meta">Published: December 3, 2025</p>

		<p>Beyond basic text handling, proper Unicode normalization plays a critical role in three major areas: search accuracy, correct sorting order, and protection against security threats. Failing to normalize text can lead to poor user experience and even exploitable vulnerabilities.</p>

		<p>In search systems, users expect to find “ naïve” when they type “naive” with combining marks. Without normalization, these equivalent forms are treated as completely different terms, resulting in missed results and frustration. Full-text search engines that respect canonical equivalence deliver far better relevance.</p>

		<h2>Alphabetical Sorting</h2>
		<p>When displaying lists of names, cities, or products, alphabetical order should be intuitive. But unnormalized text disrupts this. A name like “Zürich” stored in decomposed form may appear at the end of a list instead of near “Zurich” because the combining marks affect code point values.</p>

		<p>Consistent normalization ensures that sorting behaves predictably and matches user expectations across all languages and scripts.</p>

		<h3>Security Implications</h3>
		<ul>
			<li>Attackers can use combining marks to create visually identical domain names</li>
			<li>Phishing URLs can bypass filters by using decomposed characters</li>
			<li>Authentication bypass may occur if normalization is inconsistent</li>
			<li>File system attacks exploit case and normalization differences</li>
		</ul>

		<h3>A Unified Defense</h3>
		<p>By enforcing strict normalization at input time, applications gain protection across all these dimensions simultaneously. Search becomes accurate, sorting becomes reliable, and many classes of text-based attacks are prevented automatically.</p>

		<p>This is why leading platforms and security-conscious organizations make normalization a non-negotiable part of their text processing pipeline.</p>

		<p class="italic-note">Normalization is not just about correctness, it is a fundamental layer of application reliability and security in a Unicode world.</p>
	</article>
</div>

<style>
	.post-layout { max-width: 800px; padding-top: 2rem; padding-bottom: 4rem; }
	.breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--text-secondary); }
	.breadcrumbs a { color: var(--accent-secondary); }
	.breadcrumbs a:hover { text-decoration: underline; }
	.breadcrumbs p { margin: 0; }
	.prose { line-height: 1.8; }
	.prose .post-meta { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; }
	.prose h1, .prose h2, .prose h3 { color: var(--accent-secondary); }
	.prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
	.prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--secondary-bg); padding-bottom: 0.5rem; }
	.prose p { color: var(--text-primary); }
	.prose ul { list-style-type: '→ '; padding-left: 1.5rem; color: var(--text-primary); }
	.prose ul li::marker { color: var(--accent-primary); }
	.prose ul li { padding-left: 0.5rem; margin-bottom: 0.5rem; }
	.prose .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; }
</style>