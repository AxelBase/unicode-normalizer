<script lang="ts">
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import { inputText, outputText, detectedForm } from '$lib/stores';
    import { toNFC, toNFD, detectNormalizationForm } from '$lib/unicode';
    import { copyToClipboard, encodeTextForUrl, decodeTextFromUrl, countCodePoints, countCharacters } from '$lib/utils';
    import { page } from '$app/stores';
    import { base } from '$app/paths';

    let showCopied = false;
    let inputForm: 'NFC' | 'NFD' | 'Mixed' | 'Unnormalized' = 'Unnormalized';

    // Reactive detection
    $: inputForm = detectNormalizationForm($inputText);
    $: $detectedForm = detectNormalizationForm($outputText);
    $: $outputText = $inputText; 

    function normalizeToNFC() {
        $outputText = toNFC($inputText);
    }

    function normalizeToNFD() {
        $outputText = toNFD($inputText);
    }

    function swapFields() {
        const temp = $inputText;
        $inputText = $outputText;
        $outputText = temp;
    }

    async function copyResult() {
        const ok = await copyToClipboard($outputText);
        if (ok) {
            showCopied = true;
            setTimeout(() => showCopied = false, 2000);
        }
    }

    function shareViaUrl() {
        const url = `${window.location.origin}${base}/?text=${encodeTextForUrl($inputText)}`;
        copyToClipboard(url);
        alert('Shareable URL copied to clipboard!');
    }

    onMount(() => {
        const params = new URLSearchParams($page.url.search);
        const textParam = params.get('text');
        if (textParam) {
            $inputText = decodeTextFromUrl(textParam);
        }
    });
</script>

<main class="container">
    
    <section id="home" class="row justify-content-center mb-5">
        <div class="col-lg-10 col-xl-9">
            
            <div class="text-center mb-5" in:fade={{ duration: 800, delay: 100 }}>
                <h1 class="display-4 fw-bold mb-2">
                    AxelBase <span style="color: var(--brand-primary);">Normalizer</span>
                </h1>
                <p class="lead text-muted">Convert between NFC & NFD • Instant • Private</p>
            </div>

            <div class="card p-4 p-md-5 mb-5" in:fly={{ y: 50, duration: 800 }}>
                <div class="row g-4">
                    
                    <div class="col-md-6">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <label for="inputText" class="fw-bold">Input Text</label>
                            {#if inputForm}
                                <span class="badge rounded-pill badge-{inputForm.toLowerCase()}">
                                    {inputForm === 'NFC' ? 'NFC (Composed)' : 
                                     inputForm === 'NFD' ? 'NFD (Decomposed)' : 
                                     inputForm === 'Mixed' ? 'Mixed' : 'Raw'}
                                </span>
                            {/if}
                        </div>
                        <textarea
                            id="inputText"
                            class="form-control"
                            bind:value={$inputText}
                            placeholder="Paste text here..."
                            style="min-height: 200px;"
                        ></textarea>
                        <div class="text-end small text-muted mt-2">
                            {countCharacters($inputText)} chars | {countCodePoints($inputText)} codepoints
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <label for="outputText" class="fw-bold">Output</label>
                            {#if $detectedForm}
                                <span class="badge rounded-pill badge-{$detectedForm.toLowerCase()}">
                                    {$detectedForm === 'NFC' ? 'NFC' : 
                                     $detectedForm === 'NFD' ? 'NFD' : 
                                     $detectedForm === 'Mixed' ? 'Mixed' : 'Raw'}
                                </span>
                            {/if}
                        </div>
                        <textarea 
                            id="outputText" 
                            class="form-control" 
                            readonly 
                            value={$outputText}
                            style="min-height: 200px;"
                        ></textarea>
                        <div class="text-end small text-muted mt-2">
                            {countCharacters($outputText)} chars | {countCodePoints($outputText)} codepoints
                        </div>
                    </div>

                </div>

                <div class="d-flex flex-wrap gap-3 mt-4 justify-content-center">
                    <button class="btn btn-primary btn-lg shadow-sm" on:click={normalizeToNFC}>
                        To NFC
                    </button>
                    <button class="btn btn-primary btn-lg shadow-sm" style="filter: hue-rotate(15deg);" on:click={normalizeToNFD}>
                        To NFD
                    </button>
                    <button class="btn btn-outline-primary" on:click={swapFields}>
                        <i class="bi bi-arrow-left-right"></i> Swap
                    </button>
                    <button class="btn btn-outline-primary position-relative" on:click={copyResult}>
                        <i class="bi bi-clipboard"></i> Copy
                        {#if showCopied}
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">Copied!</span>
                        {/if}
                    </button>
                    <button class="btn btn-outline-primary" on:click={shareViaUrl}>
                        <i class="bi bi-share"></i> URL
                    </button>
                </div>
            </div>

        </div>
    </section>

    <div class="row justify-content-center">
        <div class="col-lg-8">
            
<!-- ===================== ABOUT SECTION ===================== -->
<section id="about" class="mb-5 pt-5">
	<div class="glass p-5 rounded-4 shadow-sm">
		<h3 class="h2 fw-bold mb-4 text-primary">About AxelBase Unicode Normalizer</h3>
		<p class="lead text-muted mb-4">
			AxelBase Unicode Normalizer is a free, open-source, zero-server web tool that instantly converts text between Unicode Normalization Form C (NFC – composed) and Normalization Form D (NFD – decomposed) while showing you exactly what’s happening under the hood.
		</p>
		<p class="text-muted mb-4">
			Every modern system handles accented characters, emoji, and complex scripts differently. macOS and iOS use NFD by default. Windows, Windows, Linux, and most web standards prefer NFC. This invisible difference causes silent, hard-to-debug issues: failed string comparisons, duplicate database records, broken full-text search, incorrect sorting, and even security vulnerabilities via homograph attacks.
		</p>
		<p class="text-muted mb-4">
			Our tool eliminates these problems at the source. Using only native browser APIs (<code>String.prototype.normalize()</code>), it runs 100% client-side — nothing ever leaves your device. You get instant conversion, real-time detection of current normalization form, character/code-point counters, copy-to-clipboard, and shareable URLs, all with zero tracking, zero cookies, and zero data collection.
		</p>
		<p class="text-muted mb-4">
			Whether you’re a developer cleaning user input, a database administrator fixing duplicate entries, a security engineer hunting homograph issues, or a content creator ensuring consistent filenames across platforms — this tool gives you immediate, trustworthy results without compromising privacy.
		</p>
		<p class="text-muted">
			Built with SvelteKit + Bootstrap 5, fully static, and deployable anywhere (GitHub Pages, Vercel, Netlify, Cloudflare Pages), it works offline after the first load and is licensed under the MIT License so you can fork, embed, or extend it freely.
		</p>
		<p class="mt-4 fst-italic text-primary fw-medium">
			Consistent Unicode shouldn’t be hard. With AxelBase Normalizer, it’s instant, private, and always accurate.
		</p>
	</div>
</section>

<!-- ===================== HOW TO USE SECTION ===================== -->
<section id="how-to" class="mb-5 pt-5">
	<div class="glass p-5 rounded-4 shadow-sm">
		<h3 class="h2 fw-bold mb-4 text-primary">How to Use</h3>
		<ol class="list-unstyled d-flex flex-column gap-4">
			<li class="d-flex gap-4 align-items-start">
				<span class="badge rounded-circle bg-primary fs-4 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 48px; height: 48px;">1</span>
				<div>
					<strong>Paste or type any text</strong> into the left box. Works with Latin, Cyrillic, Arabic, CJK, emoji, mathematical symbols — everything Unicode supports.
				</div>
			</li>
			<li class="d-flex gap-4 align-items-start">
				<span class="badge rounded-circle bg-primary fs-4 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 48px; height: 48px;">2</span>
				<div>
					<strong>Observe the live badge</strong> above the output — it instantly tells you whether your input is Composed (NFC), Decomposed (NFD), Mixed, or Unnormalized.
				</div>
			</li>
			<li class="d-flex gap-4 align-items-start">
				<span class="badge rounded-circle bg-primary fs-4 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 48px; height: 48px;">3</span>
				<div>
					Click <strong>“Normalize to NFC”</strong> for maximum web/database compatibility or <strong>“Normalize to NFD”</strong> for macOS/HFS+ compatibility or linguistic analysis.
				</div>
			</li>
			<li class="d-flex gap-4 align-items-start">
				<span class="badge rounded-circle bg-primary fs-4 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 48px; height: 48px;">4</span>
				<div>
					Use <strong>Swap</strong> to flip input/output, <strong>Copy Result</strong> to grab clean text, or <strong>Share via URL</strong> to send the exact state to colleagues — the link even pre-fills the input when opened.
				</div>
			</li>
			<li class="d-flex gap-4 align-items-start">
				<span class="badge rounded-circle bg-primary fs-4 d-flex align-items-center justify-content-center flex-shrink-0" style="width: 48px; height: 48px;">5</span>
				<div>
					Watch the <strong>Characters vs Code Points</strong> counters — they prove the conversion worked (e.g., “é” as one code point in NFC vs two in NFD).
				</div>
			</li>
		</ol>
		<p class="mt-4 fst-italic text-primary fw-medium text-center">
			No installation. No account. No data sent. Just pure, instant Unicode normalization.
		</p>
	</div>
</section>

<!-- ===================== FAQ SECTION ===================== -->
<section id="faq" class="mb-5 pt-5 pb-5">
	<div class="glass p-5 rounded-4 shadow-sm">
		<h3 class="h2 fw-bold mb-5 text-primary text-center">Frequently Asked Questions</h3>
		<div class="accordion accordion-flush" id="faqAccordion">
			<div class="accordion-item border-0 mb-3 bg-transparent">
				<h2 class="accordion-header">
					<button class="accordion-button collapsed shadow-sm rounded-3 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
						Is my text sent to any server?
					</button>
				</h2>
				<div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
					<div class="accordion-body text-muted">
						<strong>Never.</strong> All processing happens inside your browser using native JavaScript. No requests are made, no logs exist, and no third-party services are contacted.
					</div>
				</div>
			</div>

			<div class="accordion-item border-0 mb-3 bg-transparent">
				<h2 class="accordion-header">
					<button class="accordion-button collapsed shadow-sm rounded-3 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
						Why do I need NFC instead of NFD (or vice versa)?
					</button>
				</h2>
				<div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
					<div class="accordion-body text-muted">
						Use <strong>NFC</strong> for web forms, APIs, databases, URLs, and cross-platform compatibility (recommended default).  
						Use <strong>NFD</strong> when working with macOS/iOS file systems, certain linguistic tools, or when you must match Apple’s HFS+ behavior exactly.
					</div>
				</div>
			</div>

			<div class="accordion-item border-0 mb-3 bg-transparent">
				<h2 class="accordion-header">
					<button class="accordion-button collapsed shadow-sm rounded-3 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
						Can I use this tool offline?
					</button>
				</h2>
				<div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
					<div class="accordion-body text-muted">
						Yes! After the first visit, your browser caches everything. Open the page without internet and it works perfectly.
					</div>
				</div>
			</div>

			<div class="accordion-item border-0 mb-3 bg-transparent">
				<h2 class="accordion-header">
					<button class="accordion-button collapsed shadow-sm rounded-3 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
						Why do the character and code-point counts differ?
					</button>
				</h2>
				<div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
					<div class="accordion-body text-muted">
						Because decomposed forms use multiple code points for a single visible character. Example: “é” in NFC = 1 code point, in NFD = 2 code points (“e” + combining acute). The counters prove the conversion succeeded.
					</div>
				</div>
			</div>

			<div class="accordion-item border-0 mb-3 bg-transparent">
				<h2 class="accordion-header">
					<button class="accordion-button collapsed shadow-sm rounded-3 fs-5" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
						Is this tool open source?
					</button>
				</h2>
				<div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
					<div class="accordion-body text-muted">
						Absolutely. The complete source is available on GitHub under the MIT License. Fork it, embed it, improve it — it’s yours.
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
        </div>
    </div>

</main>