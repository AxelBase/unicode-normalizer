<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Understanding Unicode Normalization: NFC vs NFD • AxelBase Blog</title>
	<meta name="description" content="Learn why the same character can be stored in multiple ways in Unicode, what NFC and NFD mean, and why this matters for developers and systems." />
	<meta property="og:title" content="Understanding Unicode Normalization: NFC vs NFD • AxelBase Blog" />
	<meta property="og:description" content="Learn why the same character can be stored in multiple ways in Unicode, what NFC and NFD mean, and why this matters for developers and systems." />
	<meta property="og:url" content="{base}/blog/posts/post1" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/blog">Blog</a>
		<span>/</span>
		<p>Understanding Unicode Normalization</p>
	</div>

	<article class="prose">
		<h1>Understanding Unicode Normalization: NFC vs NFD</h1>
		<p class="post-meta">Published: November 20, 2025</p>

		<p>Have you ever typed the word “café” on a Mac and then copied it to a Linux server, only to find that a simple string comparison suddenly fails? This is not a bug in your code. It is a direct result of how Unicode handles text representation through a process called normalization.</p>

		<p>Unicode allows the same visible character to be represented in more than one way. For example, the letter “é” can be stored as a single precomposed character or as two separate characters: the base letter “e” followed by a combining acute accent mark. These two forms look identical on screen but are completely different at the binary level.</p>

		<h2>What Are NFC and NFD?</h2>
		<p>NFC stands for Normalization Form C, also known as composed form. In this format, characters are combined whenever possible into a single code point. NFD, or Normalization Form D, is the decomposed form, where characters are broken down into their base letter and separate combining marks.</p>

		<p>Most Windows and Linux applications use NFC by default. Apple’s macOS and iOS, however, use NFD as the standard file system and text storage format. This difference creates silent incompatibilities when text moves between platforms.</p>

		<h3>Why Does This Matter?</h3>
		<ul>
			<li>File names that appear identical may not match in comparisons</li>
			<li>Database searches can miss results if one entry is normalized and another is not</li>
			<li>User input from different devices can cause duplicate records</li>
			<li>Security systems may fail to detect malicious homograph attacks using combining marks</li>
		</ul>

		<h3>The Solution: Always Normalize</h3>
		<p>The most reliable approach is to normalize all text to a single consistent form as early as possible, ideally at the point of input. Converting everything to NFC is the most widely recommended practice because it reduces storage size and improves performance in most text-processing operations.</p>

		<p>Modern browsers already include built-in support for this through JavaScript’s normalize method, making it possible to perform instant, private, client-side normalization without any external dependencies or data transmission.</p>

		<p class="italic-note">Understanding normalization is essential for building robust, cross-platform applications that handle text reliably in any environment.</p>
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