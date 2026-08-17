# Aabhas & Kuljeet — Engagement Invitation

## Upload
Upload the contents of this folder to your hosting, for example:

public_html/engagement/

Then open:
https://YOUR-DOMAIN.com/engagement/

## Add the couple photo
Replace:
images/couple.jpg

with the couple photograph you want to use. Keep the filename `couple.jpg`.

## Add music
Put an MP3 file here:
music/music.mp3

If you don't want music, leave the folder empty.

## Add RSVP
1. Create a Google Form.
2. Copy its public/share URL.
3. Open `script.js`.
4. Find:
   const GOOGLE_FORM_URL = "";
5. Paste your URL between the quotes.

## Change venue
The current Directions button searches:
Royal Palace Ambala

For the exact venue, replace the Google Maps URL in index.html with the exact Google Maps share URL.

## Main files
- index.html = page/content
- style.css = design/animation
- script.js = envelope opening, music, countdown, RSVP
