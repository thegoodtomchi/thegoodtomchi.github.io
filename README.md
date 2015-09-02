# [thegoodtomchi.github.io](thegoodtomchi.github.io)

## getting started
```
git clone git@github.com:thegoodtomchi/thegoodtomchi.github.io
cd thegoodtomchi.github.io
jekyll serve
```
The site should be live at ```localhost:4000```
## Making Changes
Just modify a file and save. If the Jekyll Server is being run it will watch for changes and update automatically (just refresh the page!)
- ## Foci :wink:
  Text for each focus can be modified in ```_data/focuses.yml```
  - the description appears on the home page, while the full_description only appears on the leaf pages.
    - __Note__: This only matters if you have additional content you don't want to appear on the home page

- ## Cover Art - Coming Soon
  <!-- Cover art can be added in ```_data/cover_images.yml```
  - Note: I am still implementing the rotation  -->
  ## Events
Events can be added in ```_data/upcoming.yml```
## Consts
The file ```_data/consts.yml``` holds the following fields
  - ```tagline``` <-- quote in banner
  - ```emblem``` <-- emblem in banner
  - ```about``` <-- About Tom in footer
  - ```headshot``` <-- Profile picture in footer
  - ```email``` <-- email in footer
  - ```twitter``` <-- twitter handle in footer
## Statics
Static files can be added to the ```statics``` folder.

## dependencies
- Ruby
- Jekyll
## check if Jekyll is installed

- installed
```
which jekyll
> /Users/username/.rvm/gems/ruby-2.2.1/bin/jekyll
```

- not installed
```
which jekyll
> jekyll not found
```

- to install
```
brew update
brew install jekyll
# confirm install
which jekyll
> /Users/username/.rvm/gems/ruby-2.2.1/bin/jekyll
```

## The Basics
### css
Jekyll compiles CSS out of the sass files found in the ```_sass``` folder. The root sass file is ```css/main.scss```

### layouts
I'm using Layouts to hold basic page structures (e.g. the home page or a leaf page). These can be found in ```_layouts```

### includes
__Note__: I will probably change organization for these.

Includes hold pieces of templated html which make up a small component of the site (e.g. the footer or the header).
Includes can be found in ```_includes```

### liquid templates
Jekyll statically builds the site using the liquid templating language.
