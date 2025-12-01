<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>When “é” Is Not Equal to “é”: Canonical Equivalence • AxelBase Blog</title>
	<meta name="description" content="Discover why two visually identical characters can fail equality checks and how canonical equivalence affects real applications." />
	<meta property="og:title" content="When “é” Is Not Equal to “é”: Canonical Equivalence • AxelBase Blog" />
	<meta property="og:description" content="Discover why two visually identical characters can fail equality checks and how canonical equivalence affects real applications." />
	<meta property="og:url" content="{base}/blog/posts/post2" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/blog">Blog</a>
		<span>/</span>
		<p>Canonical Equivalence</p>
	</div>

	<article class="prose">
		<h1>When “é” Is Not Equal to “é”: Canonical Equivalence Explained</h1>
		<p class="post-meta">Published: November 22, 2025</p>

		<p>It seems impossible, but two strings that look exactly the same on screen can be considered different by computers. This phenomenon occurs because Unicode defines multiple valid ways to represent the same visual character through a concept known as canonical equivalence.</p>

		<p>When two sequences of code points are canonically equivalent, they must be treated as identical for comparison, searching, and sorting operations. However, they are not necessarily identical at the byte level, which causes problems in systems that perform direct string matching.</p>

		<h2>Real Examples in Everyday Use</h2>
		<p>A user on a Mac types their name “René” and saves a document. The operating system stores it in decomposed form. Later, a Windows-based web application receives the same text in composed form. A simple equality check between the two versions returns false, even though both display identically to humans.</p>

		<p>Similar issues appear in URL handling, form validation, and authentication systems. A password entered with decomposed characters on one device may be rejected when compared against a stored composed version, frustrating users and creating support tickets.</p>

		<h3>The Root Cause</h3>
		<ul>
			<li>Combining marks can be applied in different orders</li>
			<li>Precomposed characters exist alongside decomposed sequences</li>
			<li>Different platforms prefer different default forms</li>
			<li>Legacy text may use compatibility characters instead of standard ones</li>
		</ul>

		<h3>How to Solve It</h3>
		<p>The Unicode Standard provides clear rules for normalizing text to eliminate these differences. By converting all input to a single consistent form, applications can ensure reliable comparisons regardless of where or how the text was created.</p>

		<p>Client-side tools that perform instant normalization help developers catch these issues early, before data enters databases or file systems. This preventive approach is far more effective than trying to handle mixed forms later in the pipeline.</p>

		<p class="italic-note">Canonical equivalence is one of the most common sources of subtle text-processing bugs, but it is also one of the easiest to prevent with proper normalization.</p>
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