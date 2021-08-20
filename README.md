# Awesome CMS with Angular
This in a MVP of an awesome CMS 🔧

Link to test this app: https://schicoma.github.io/cms-mvp/home

## Development server

Run `npm i` to install the dependencies. Then, run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Libraries

- Angular 11 
- Bootstrap
- Boostrap icons
- ng-bootstrap
- ngx-quill

## How to use

This app contains two routes: **home** and **edit**

### Home route

This path renders the configured widgets. In the navbar, there is an **Edit** option to go to modify the widgets.

![Captura de pantalla de 2021-08-20 00-59-27](https://user-images.githubusercontent.com/14263134/130188506-2b2df8f4-12d1-41ea-b574-03deb17642e5.png)

### Edit route

Select the **Edit** button to enable the edit mode. 

![Captura de pantalla de 2021-08-20 01-04-40](https://user-images.githubusercontent.com/14263134/130188564-d868833e-b2f8-47bb-9ced-1fc042051411.png)

In order to add new widgets, select the **Add new** button. This button displays the follow options:

![Captura de pantalla de 2021-08-20 01-05-36](https://user-images.githubusercontent.com/14263134/130188579-3cebd69c-21c3-4d6e-a95b-a0c992ecd77a.png)

- ### Add image

This component shows an input file. Select the button to choose an image and display it.

- ### Add text

This component shows a WYGIWYS editor. Write what you want to display.

- ### Add hello 🙂

This component just shows a message. There is no option to edit

Select the **Preview** button to view your changes before saving. 

Press the **Save** button to keep the changes and view them on home

In order to remove a widget, hover over any component to show a **x** button. Press it.

![Captura de pantalla de 2021-08-20 01-21-25](https://user-images.githubusercontent.com/14263134/130189209-165f4bee-3083-43c1-9b38-8ccbdfcc8d3a.png)

## Notes (in Spanish 😅)

La app tiene algunos datos de ejemplos, esa información se puede editar o eliminar con las opciones correspondientes. A pesar de que un requerimiento solicitaba no persistir los datos, agregué dicho feature en el localStorage. Al ser un *mini* CMS, no se tienen en cuenta validaciones más *complejas*, como el tamaño de la imagen a subir, cantidad de widgets a mostrar, entre otros.

