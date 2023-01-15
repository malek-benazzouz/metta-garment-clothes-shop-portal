# TODO

## Must-have before PRD launch

- Update all the menus:
  - Philosophy -> Metaphorical Garment
    - The Spirit of Mettä -> https://door.metta-garment.com/the-spirit-of-metta/
  - Garment -> Tangible Garments
    - The Essence Garment -> https://door.metta-garment.com/the-essence-garment/
    - The Life Garment -> https://door.metta-garment.com/the-life-garment/
  -> + Update the mobile version of the menu to make Metaphorical Garment and Tangible Garments look like the mockup

- Add link to cart: https://door.metta-garment.com/cart/

- Update products:
  - Product images, titles, prices and descriptions
  - Add links to product pages (including in mobile product page)
  - Transform the leaves that have no product into non-clickable images
  - Potentially resize/crop images fit the mobile view properly + play on `background-size` to find the best layout

- Legal links:
  - Remove CREDITS
  - Add links (potentially update Privacy policy title)

- Make door image clickable -> leads to Link tree 

- Handle routing:
  - Land on home page instead of coming-soon page
  - Add a URL param (or a dedicated route) that expands the dot on page load if sent, and communicate it to Claire
    - Examples: https://metta-garment.com/?state=metta-information OR https://metta-garment.com/metta-information
  - Redirection between coming-soon page and home page?

- All occurrences of `TODO prodReadiness`

- Priority 1 items

## Priority 1

- Quick fixes:
  - In dot page, in desktop view, center the slogan horizontally (same distance from left border as from door logo)
  - Add a box shadow (very light) under the header - add it only for dot view (e.g. box-shadow: 1px 0px 6px #ddd;)
  - When hovering the navbar menu titles, in order to avoid text overlapping, we should ideally add a white or black semi-transparent layer on the whole page (see https://nakashimawoodworkers.com/)
  - newsletter form error "Invalid email address" overlaps the "look up" logo
  - newsletter form: change hint and underline color from blue to noctural green
- Firestore DB: set more robust security rules
- Loading and images:
  - Design a loading theme (skeleton, icon, wheel?) and use it whenever loading is required (e.g. while posting newsletter form)
  - Pre-load all images. Add a loading animation while pre-loading the images (same as mcm)?
  - Resize images (especially products) to a smaller size if possible (for better performance)
  - Remove unused images? (or make sure they are not loaded if not used)
- Check if we can get more info on the subscribers when they fill the form (location, user agent?)
- Should we add something in a LICENCE file, or in credits (footer?) related to the fonts used? Same for images.

## Priority 2

- For height 720px (and around), is it possible to make the tree fully visible?
- Dot toggle improvements:
  - Improve the formula that changes the dot color when getting closer (try to make it change even if the mouse is a bit farther)
  - When closing the dot menu by clicking on the dot, it remains with hover style
- Add animation when expanding/collapsing dot content + other animations?
- Favicon: make it work on all browsers, and in dark mode
- Set cookies to avoid coming-soon page for users that already subscribed

## Priority 3

- Create npm scripts that will facilitate git flows and deployment
- Fix css warnings on ng serve
- Coming soon page improvements:
  - If possible, make leaf drop at the bottom of the tree on mobile
  - Add more animations? (e.g. form fade after submit, leaf blinks after drop, form input highlight before submit)

## Questions/remarks to Ludo 

- 

## Resources needed from Ludo

- Product images, names, price, description
- Real links to all pages + link to cart
- Title attributes texts (for Metta logo + dot + cart link)
