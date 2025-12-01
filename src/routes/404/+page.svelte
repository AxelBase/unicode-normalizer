<script lang="ts">
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>404 — Page Not Found • AxelBase Unicode Normalizer</title>
	<meta name="description" content="Oops! The page you're looking for doesn't exist. Return home to normalize Unicode instantly and privately." />
	<meta property="og:title" content="404 — Page Not Found • AxelBase Unicode Normalizer" />
	<meta property="og:description" content="Oops! The page you're looking for doesn't exist. Return home to normalize Unicode instantly and privately." />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container py-5 text-center">
	<div class="row justify-content-center">
		<div class="col-lg-8 col-xl-7">

			<h1 class="display-1 fw-bold text-primary mb-4">404</h1>
			<h2 class="display-5 mb-4">Page Not Found</h2>

			<p class="lead text-muted mb-5">
				Sorry — the page you’re looking for has either been moved, renamed, or contains a tiny invisible combining mark that broke the URL.
			</p>

			<div class="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
				<a href="{base}/" class="btn btn-primary btn-lg px-5">
					Back to Unicode Normalizer
				</a>
				<a href="{base}/blog" class="btn btn-outline-primary btn-lg px-5">
					Visit Blog
				</a>
			</div>

			<h3 class="h5 fw-semibold mb-3">Quick Links</h3>
			<ul class="list-unstyled d-flex flex-wrap justify-content-center gap-4 text-muted">
				<li><a href="{base}/" class="text-decoration-none">Home</a></li>
				<li><a href="{base}/blog" class="text-decoration-none">Blog</a></li>
				<li><a href="{base}/privacy" class="text-decoration-none">Privacy Policy</a></li>
				<li><a href="{base}/terms" class="text-decoration-none">Terms</a></li>
			</ul>

			<p class="italic-note mt-5 text-muted">
				<strong>Fun fact:</strong> Even 404 pages should be normalized.<br>
				That’s why this one is 100% client-side and privacy-safe.
			</p>

		</div>
	</div>
</div>

<style>
	.italic-note {
		font-style: italic;
		font-size: 1.1rem;
	}
</style>