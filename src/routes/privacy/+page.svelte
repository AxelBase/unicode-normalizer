<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Privacy Policy • AxelBase Unicode Normalizer</title>
	<meta name="description" content="We collect zero data. Your text never leaves your device. Full privacy by design." />
	<meta property="og:title" content="Privacy Policy • AxelBase Unicode Normalizer" />
	<meta property="og:description" content="We collect zero data. Your text never leaves your device. Full privacy by design." />
	<meta property="og:url" content="{base}/privacy" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/">Home</a>
		<span>/</span>
		<p>Privacy Policy</p>
	</div>

	<article class="prose">
		<h1>Privacy Policy</h1>
		<p class="post-meta">Effective Date: December 1, 2025</p>

		<p>Welcome to the <strong>AxelBase Unicode Normalizer</strong>, a completely client-side web tool that converts and detects Unicode normalization forms (NFC and NFD). We are deeply committed to your privacy. This policy explains exactly how we handle your information — or rather, how we <strong>don’t</strong>.</p>

		<h2>1. No Data Collection Whatsoever</h2>
		<p>This tool runs <strong>100% in your browser</strong>. Every character you type, paste, or upload is processed <em>only on your device</em>. We do <strong>not</strong> collect, store, transmit, log, or analyze:</p>
		<ul>
			<li>Any text you input or normalize</li>
			<li>Your IP address</li>
			<li>Browser type, operating system, or device information</li>
			<li>Timestamps, session duration, or usage patterns</li>
			<li>Cookies, localStorage (beyond temporary session needs), or any tracking pixels</li>
		</ul>

		<h2>2. How It Works — Purely Local</h2>
		<p>All normalization, detection, copying, and sharing happens using native JavaScript (<code>String.prototype.normalize()</code>) directly in your browser. Nothing is ever sent to any server — not ours, not a CDN, not a third party. Even the "Share via URL" feature only encodes your text into the browser address bar using standard <code>encodeURIComponent</code>.</p>

		<h2>3. No Analytics, No Tracking</h2>
		<p>We do not use Google Analytics, Plausible, Fathom, Umami, or any other analytics service. There are <strong>zero third-party scripts</strong> that could track you. The only external resources are Bootstrap 5 and Bootstrap Icons from jsDelivr CDN — both served with Subresource Integrity (SRI) and no tracking capabilities.</p>

		<h2>4. Offline-First Design</h2>
		<p>After the first visit, the entire tool works offline. Your browser caches all files, so you can normalize text with zero internet connection and zero privacy risk.</p>

		<h2>5. Security & Your Responsibility</h2>
		<p>Since no data leaves your device, we cannot be breached, hacked, or subpoenaed for your content. However, you remain responsible for the security of your own device and browser.</p>

		<h2>6. Children’s Privacy</h2>
		<p>Our tool is safe and appropriate for all ages and collects no data from anyone, including children under 13.</p>

		<h2>7. Changes to This Policy</h2>
		<p>If this policy ever changes (extremely unlikely), the new version will be posted here with an updated effective date.</p>

		<p class="italic-note">
			<strong>Your text belongs to you — always has, always will.</strong><br>
			No servers. No logs. No compromise.
		</p>
	</article>
</div>

<style>
	.post-layout { max-width: 800px; padding: 2rem 1rem; margin: 0 auto; }
	.breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--text-secondary); }
	.breadcrumbs a { color: var(--accent-secondary); text-decoration: none; }
	.breadcrumbs a:hover { text-decoration: underline; }
	.prose { line-height: 1.8; }
	.prose .post-meta { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; }
	.prose h1, .prose h2 { color: var(--accent-secondary); }
	.prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
	.prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--secondary-bg); padding-bottom: 0.5rem; }
	.prose ul { list-style-type: '→ '; padding-left: 1.5rem; }
	.prose ul li::marker { color: var(--accent-primary); }
	.prose .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; font-size: 1.1rem; }
</style>