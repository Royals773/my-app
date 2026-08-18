@AGENTS.md

## Visual Asset Workflow

### Art direction first

Before introducing a major image, illustration, texture, SVG, or other visual asset, define its purpose in the composition.

Avoid adding imagery merely to fill empty space.

Every major visual should contribute to at least one of:

* brand identity
* storytelling
* product understanding
* emotional tone
* visual hierarchy

### Figma assets

When a Figma design or Figma MCP payload contains the intended image, SVG, logo, icon, or graphic:

* use the supplied asset rather than recreating it unnecessarily
* preserve its intended proportions and visual treatment
* do not substitute generic stock imagery without approval

### Asset organisation

Store project-owned visual assets in logical folders under `/public`, such as:

* `/public/images`
* `/public/brand`
* `/public/icons`

Use descriptive file names rather than generic names such as `image1.jpg`.

### Photography and raster imagery

For significant raster images in Next.js:

* prefer the current `next/image` component where appropriate
* specify meaningful alt text
* prevent layout shift
* use responsive sizing
* avoid serving unnecessarily large originals
* preserve focal points when cropping
* use `object-position` deliberately rather than relying on defaults

### Image optimisation

Optimise large source images before production.

Where programmatic conversion or resizing is needed, use an appropriate project-level image-processing tool such as Sharp.

Prefer modern web formats where appropriate while preserving quality.

Do not aggressively compress images if it noticeably damages visual quality.

### SVGs

Prefer SVG for:

* logos
* line artwork
* simple illustrations
* diagrams
* icons
* scalable decorative graphics

Keep SVG markup maintainable and accessible.

Do not turn photographs or highly complex raster artwork into enormous SVG files.

### Generated imagery

Treat AI-generated imagery as art-directed creative work.

Before generating or requesting imagery, define:

* purpose
* subject
* composition
* visual style
* lighting
* brand palette
* intended aspect ratio
* desired negative space
* expected crop on desktop and mobile

Avoid generic AI visual clichés unless deliberately requested.

### Stock imagery

Do not use generic stock photography by default.

If stock imagery is appropriate, select it for:

* composition
* authenticity
* brand fit
* crop flexibility
* resolution

Never select an image simply because it matches a keyword.

### Responsive art direction

Evaluate important imagery separately on:

* large desktop
* laptop
* tablet
* mobile

A crop that works on desktop must not automatically be assumed to work on mobile.

Where necessary, use different framing, positioning, or assets for different breakpoints.

### Visual QA

After integrating major visual assets:

1. render the page
2. inspect it using Playwright
3. capture desktop and mobile screenshots
4. evaluate crop, balance, contrast, readability and hierarchy
5. fix justified issues
6. repeat until the composition is stable

### Performance

Do not sacrifice page performance for decorative imagery.

Avoid:

* unnecessarily huge source files
* redundant image downloads
* excessive decorative videos
* large assets hidden on mobile but still downloaded
* loading every below-the-fold image eagerly

### Approval

Do not commit, push or deploy newly introduced major visual assets until the human reviewer has approved the visual result.
