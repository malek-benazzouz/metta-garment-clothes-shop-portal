# TODO

## General

- Handle responsiveness everywhere
- Fix css warnings on ng serve
- Pre-load all images. Add a loading animation while pre-loading the images (same as mcm)?
- Design a loading theme (skeleton, icon, wheel?) and use it whenever loading is required (e.g. while posting newsletter form)
- Resize images (especially products) to a smaller size if possible (for better performance)
- Remove unused images? (or make sure they are not loaded if not used)
- Create an admin page, accessible via authentication, to check the firebase DB content
- Firestore DB: set more robust security rules
- Update favicon logo and page title (tab title)
- Find a way to publish the website on a staging env, for testing (firebase free hosting? siteground sub-domain open to admins only?)

## Legal

- Should we add something in a LICENCE file, or in credits (footer?) related to the fonts used? Same for images.

## Questions/remarks to Ludo 

- Should we update title attributes or remove them? Metta logo + dot + cart link
- Should we remove bold style from dot menu (mobile only) after the click?
- Margins: I slightly decreased the right and left margins (on Metta logo, navbar menu and footer text), to gain space on smaller screens (most screens are less than 1920px)
- Navbar menu items alignment: choose between aligned with title, or indented (navbar-menu.component.scss -> .menu-item -> padding: <8px;> OR <8px 16px;>) (I prefer 1st option)
- Do we really want to use font-weight 500 on nav menu items on hover? 600 seems more adapted to me -> compare both options
- Newsletter form: connect underline with submit button if possible -> I do not recommend, since it creates a color mismatch
- Is this a problem? https://metta-online.co/

## Resources needed from Ludo

- Product images, names, price, description
- Real links to all pages + link to cart
