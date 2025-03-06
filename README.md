Vite demo to demonstate a build problem using .scss with @use.

Steps to reproduce:
run yarn install
run yarn dev

- Edit the css inside "src/sass/components/_simple-test.scss" and save.
    - vite will detect the change but will not build the css.
- Edit the css inside "src/sass/index.scss" directly
    - vite correctly rebuilds and injects the css.
- Change the component css and then save the index.scss once (without changing it)
    - the code builds correctly.

There seems to be a problem with @use? Vite does not detect "_simple-test.scss" to be part of the index.scss file.

Using vite build --watch or just the devServer via vite has the same effect.

When running vite build, the code builds correctly.
