<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>How Modern Browsers Handle NFC and NFD Differently • AxelBase Blog</title>
	<meta name="description" content="Explore how Chrome, Safari, Firefox, and Edge treat normalized and decomposed text in forms, URLs, and the DOM." />
	<meta property="og:title" content="How Modern Browsers Handle NFC and NFD Differently • AxelBase Blog" />
	<meta property="og:description" content="Explore how Chrome, Safari, Firefox, and Edge treat normalized and decomposed text in forms, URLs, and the DOM." />
	<meta property="og:url" content="{base}/blog/posts/post4" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/blog">Blog</a>
		<span>/</span>
		<p>Browser Behavior</p>
	</div>

	<article class="prose">
		<h1>How Modern Browsers Handle NFC and NFD Differently</h1>
		<p class="post-meta">Published: November 27, 2025</p>

		<p>Even though all modern browsers support Unicode fully, they do not agree on how to handle normalization internally. This creates subtle but important differences in behavior when users type, paste, or submit text across platforms.</p>

		<p>Safari, being built on Apple’s core foundation, tends to preserve the decomposed form when text is entered or pasted. This means that when a user types “café” on a Mac, the browser often keeps the combining accents separate. In contrast, Chrome, Firefox, and Edge on Windows and Linux almost always convert text to the composed form automatically during input events.</p>

		<h2>Form Submission Differences</h2>
		<p>When a form is submitted, browsers may normalize the data before sending it to the server. However, this normalization is not consistent. Some browsers apply it only to certain fields, while others leave the text untouched. As a result, the same form filled on different devices can send completely different byte sequences for identical-looking text.</p>

		<p>This inconsistency affects everything from login systems to search filters. A user who registers with an accented name on Safari might later fail to log in from Chrome if the server performs strict string matching without prior normalization.</p>

		<h3>URL and DOM Behavior</h3>
		<ul>
			<li>URLs containing accented characters are percent-encoded differently depending on normalization</li>
			<li>DOM text nodes may display identical content but have different underlying string lengths</li>
			<li>Event targets and selectors can behave unexpectedly when text nodes contain combining marks</li>
			<li>Copy-paste operations between applications preserve the source normalization form</li>
		</ul>

		<h3>Why Client-Side Normalization Wins</h3>
		<p>Waiting for the server to normalize text is risky because the damage is already done by the time data arrives. The safest and fastest solution is to normalize text directly in the browser, immediately after input, before any form submission or storage occurs.</p>

		<p>Doing this on the client ensures consistent behavior across all devices and browsers, eliminates surprises, and keeps user data clean from the very first moment it enters your application.</p>

		<p class="italic-note">Browser differences in normalization are invisible to users but can break applications. Normalizing early in the browser is the only reliable defense.</p>
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