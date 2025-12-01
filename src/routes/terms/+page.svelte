<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Terms and Conditions • AxelBase Unicode Normalizer</title>
	<meta name="description" content="Terms of use for the free, open-source, client-side Unicode Normalizer tool by AxelBase." />
	<meta property="og:title" content="Terms and Conditions • AxelBase Unicode Normalizer" />
	<meta property="og:description" content="Terms of use for the free, open-source, client-side Unicode Normalizer tool by AxelBase." />
	<meta property="og:url" content="{base}/terms" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
	<div class="breadcrumbs">
		<a href="{base}/">Home</a>
		<span>/</span>
		<p>Terms and Conditions</p>
	</div>

	<article class="prose">
		<h1>Terms and Conditions</h1>
		<p class="post-meta">Last Updated: December 1, 2025</p>

		<p>By accessing or using the <strong>AxelBase Unicode Normalizer</strong> ("the Tool"), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the Tool.</p>

		<h2>1. Nature of the Service</h2>
		<p>The Tool is a <strong>free, open-source, client-side web application</strong> that performs Unicode normalization (NFC to NFD) entirely in your browser. No data is transmitted to any server. The Tool is provided "as is" for informational, educational, and productivity purposes.</p>

		<h2>2. License to Use</h2>
		<p>You are granted a worldwide, non-exclusive, royalty-free license to use the Tool for personal or commercial purposes, including offline use, provided you do not:</p>
		<ul>
			<li>Modify, redistribute, or resell the Tool as a paid service without permission</li>
			<li>Remove or alter copyright notices or attribution</li>
			<li>Use the Tool for unlawful purposes or to process illegal content</li>
		</ul>

		<h2>3. No Warranty</h2>
		<p>The Tool is provided <strong>without any warranties</strong>, express or implied. We do not guarantee that it will be error-free, available at all times, or suitable for any particular purpose. Use at your own risk.</p>

		<h2>4. Limitation of Liability</h2>
		<p>In no event shall AxelBase, its creators, or contributors be liable for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the Tool — including data loss, corruption, or business interruption — even if advised of the possibility.</p>

		<h2>5. Accuracy of Results</h2>
		<p>While the Tool uses the official JavaScript <code>normalize()</code> method, you are solely responsible for verifying that normalized output meets your technical or compliance requirements.</p>

		<h2>6. Intellectual Property</h2>
		<p>The source code is open and available on GitHub under the MIT License. You may fork, study, and improve it freely with proper attribution.</p>

		<h2>7. Changes to Terms</h2>
		<p>We reserve the right to modify these terms at any time. Continued use after changes constitutes acceptance of the new terms.</p>

		<h2>8. Governing Law</h2>
		<p>These terms shall be governed by the laws of the Republic of Cyprus, without regard to conflict of law principles.</p>

		<p class="italic-note">
			<strong>Simple, fair, and transparent.</strong><br>
			Use the tool freely, improve it, share it — just don’t break the web.
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