# CrYptO AnAlySis

![alt text](https://raw.githubusercontent.com/KutuzovSergey/images/main/logo_min_100px.png)

The application "Crypto Analysis" should help users navigate the world of cryptocurrencies.

The Node.js version is required to run the project 16.13.2

The application is based on React.js using TypeScript, Redux, Sass and React Router technologies. The library is used for plotting Chart.js .

The project is launched with a standard command in any terminal:

### `npm start`

For the final build of the application, the command is used:

### `npm build`

Otherwise, all standard commands also work.

After the launch, the project will open on the main page. 
To log in to the user's personal account, you must fill out one of the forms in the pop-up window.

![alt text](https://raw.githubusercontent.com/KutuzovSergey/images/main/001.png)

The forms are called by clicking on the "Login" or "Registration" link and are filled in randomly according to validation. 

![alt text](https://raw.githubusercontent.com/KutuzovSergey/images/main/002.png)

The data that will be entered into the form affects only the state of the button, their presence allows you to change the value of the "disabled" attribute and not where they are not sent but partially stored in state Redux.

After logging in to the Coins page, the user has the opportunity to find the cryptomonets that interest him, sort them and add them to his account.

When you enter values in the drop-down list into the search bar, found coins appear under the search bar that can be selected by clicking.

![alt text](https://raw.githubusercontent.com/KutuzovSergey/images/main/gif_3.gif)

The selected coins are displayed above the search bar. /
The application allows you to select up to ten sonnets. When you try to select more, an information window pops up with a warning.

![alt text](https://raw.githubusercontent.com/KutuzovSergey/images/main/screen_2min.png)

After clicking the search button, the application will load the desired coins.

Any coin can be viewed in more detail or added to yourself. /
The selected coins can be viewed in your personal account.

Приложение написано на библиотеке React.js с использованием технологий TypeScript, Redux, Sass React Router. Для отрисовки графиков используется библиотека Chart.js.