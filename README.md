# Esri Clinic Team - Custom Widget Examples

Example use-cases of custom widgets. Workflow uses Experience Builder within a devops workflow to automatically build the app on push.

## Custom Widgets

### Drop-Down Widget
This type of widget is one drop down menu where you can choose the options. Several drop-down widgets can be connected together, and then connected to a map. These can then be interspersed with text widgets to create a code snippet where students get to fill in the blanks to create working code. If they have the correct drop-downs filled in, a layer will appear on the map. 

### Drag and Drop Widget
This type of widget is a column of draggable instructions. When the instructions are dragged into the correct order, a layer appears on the map. These types of questions are based off of Parson's Problems.

## How it works [using gavinr's workflow](https://github.com/gavinr/experience-builder-devops-example).

1. First it downloads the Experience Builder developer edition zip file using [arcgis-lib-downloader](https://www.npmjs.com/package/arcgis-lib-downloader).
1. Then it unzips Experience Builder, does the NPM installs, copies the app directory into “server/public/apps/0”, copies the custom widgets.
1. Then it runs `app-download.js` (new in Experience Builder v1.6), which generates the export (deployable) zip.
1. Finally, it takes the deployable zip, unzips it, and publishes it

The built app is deployed to GitHub Pages: https://esri-clinic-demo.github.io/publish-experiences/

## How to change the app you publish:
1. The first thing you should do it switch out the folder in the apps folder for you experience, or an updated version of this experience.
2. If you have any custom widgets other than the drag-and-drop and drop-down widgets you need to add those folders into the `widgets` folder.
3. Then, in the workflow you need to switch the name of the folder in `Run Download Script` section. Specifically in the line: `run: node -e "require('./server/src/middlewares/dev/apps/app-download.js').zipApp('2', 'app.zip')"` you need to change the `2` to the name of your folder. 
4. Furthermore, it your added widgets used external libraries, add those libraries in the line `npm i react-beautiful-dnd & npm i dompurify` under the `Install External Libraries` section.  
5. If you have errors regarding authentification, check the repository secrets. You should have 2, ARCGIS_LIB_DOWNLOADER_USERNAME and ARCGIS_LIB_DOWNLOADER_PASSWORD, which should be your ArcGIS username and password. 
6. If your page is not updating with a new experience and is still showing the previous one, try deleting the gh-pages branch and then pushing again from the main branch.
7. If it is not publishing and when you go to the page URL you get an error, but you are getting no errors under the Actions tab, make sure you are publishing from the gh-pages branch and not the main branch. You can see how to change this [here](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).
