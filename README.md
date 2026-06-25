# Mezza Luna Staging Site

This folder is a standalone static site for Netlify staging. It is intentionally separate from the old live site and uses copied visual assets from the current Mezza Luna project as an asset library.

Mezza Luna Pasta & Seafood remains the primary restaurant identity. Trattoria Bella is introduced only as the upcoming next chapter.

## Netlify

Set the Netlify base directory to:

```text
new-site
```

Netlify will use `netlify.toml` in this folder:

```text
Build command: echo 'Static site: no build required'
Publish directory: .
```

## Ordering Link

The `Order Takeout Online` utility button is centralized in the page headers. It points to Clover:

```text
https://mezza-luna-marietta.cloveronline.com/
```

## Reservations

Reservation links point directly to OpenTable:

```text
https://www.opentable.com/r/mezza-luna-furfaro-italian-restaurant-reservations-marietta?restref=1507207&lang=en-US&ot_source=Restaurant%20website
```

## Hero Video

The site uses the optimized hero video files:

```text
assets/media/hero-video-mobile.mp4
assets/media/hero-video-fallback.mp4
```

## Menu PDF

The provided menu PDF is copied into:

```text
assets/menu/menumezza.pdf
```

## Social Club

The Social Club page embeds the current Klaviyo signup form:

```html
<div class="klaviyo-form-SJLUUH"></div>
```

## Legal Pages

Twilio compliance pages are public at:

```text
/privacy-policy/
/terms-and-conditions/
```
