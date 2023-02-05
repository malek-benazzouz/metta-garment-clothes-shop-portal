# TODO

## Priority 1

- Fix bugs on Safari iphone 7+

[PENDING_RESOURCES]
- Add links:
  - Door link (replace "door-link-url" by link to link tree)

[PENDING_RESOURCES]
- Update products:
  - Product images, titles, prices and descriptions
  - Add links to product pages (including in mobile product page)
  - Potentially resize/crop images fit the mobile view properly + play on `background-size` to find the best layout

- Add a popup in Mobile/desktop views (as soon as sun/moon are not shown) to tell the user to click on the leaves

- Navbar menu: when scrolling the page down then hovering the navbar menu titles, submenu is overlapping with page text
  - can be fixed by adding a white or black semi-transparent layer on the whole page -> see https://nakashimawoodworkers.com/
    -> try `opacity: 0.2` on div.app-body when one navbar menu dropdown is open (by reacting on an ngbDropdown event?)  

- Dot toggle improvements:
  - Check if I can remove the hover effect in mobile view (otherwise when we click somewhere in the screen after having toggled the dot, it remains brown)
  - Improve the formula that changes the dot color when getting closer (start changing the color just under "spiritualiser..." slogan)
  - When closing the dot menu by clicking on the dot, it remains with hover style

- All occurrences of `TODO prodReadiness`

## Priority 2

- Make slogan clickable + split in 2:
  - Spiritualiser: https://door.metta-garment.com/the-essence-garment/
  - Matérialiser: https://door.metta-garment.com/the-life-garment/
- In dot page, in desktop view, center the slogan horizontally (same distance from left border as from door logo)
- Loading and images:
  - Pre-load all images
  - Resize images (especially products) to a smaller size if possible (for better performance)
  - Remove unused images? (or make sure they are not loaded if not used)
- Firestore DB: set more robust security rules
- Check if we can get more info on the subscribers when they fill the form (location, user agent?)
- For height 720px (and around), is it possible to make the tree fully visible?
- Add animation when expanding/collapsing dot content + other animations?
- Favicon: make it work on all browsers, and in dark mode
- Set cookies to avoid coming-soon page for users that already subscribed

## Priority 3

- Create npm scripts that will facilitate git flows and deployment
- Fix css warnings on ng serve
