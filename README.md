# DTI Project --> Pet Shop Case 🐶🐾

In summary, this project performs the following action: based on the data provided by the user, it checks which Pet Shop offers the best cost-benefit ratio for the customer, considering the inserted data. For the execution of this project, it is valid to emphasize that I worked on two fronts:

- Frontend that can be run in a web browser.
- JavaScript code that runs in the terminal.

## Summary
- [Assumptions Made](#assumptions-made)
- [Project Decisions](#project-decisions)
  - [Frontend Code](#frontend-code)
  - [Terminal Compiled Code](#terminal-compiled-code)
- [Unit Tests](#unit-tests)
- [Instructions to Run the System](#instructions-to-run-the-system)

## Assumptions Made

When developing the solution to determine the best pet shop for Eduardo to take his dogs based on cost and proximity criteria, the following assumptions were made:

1. **Stable Pricing:** It is considered that the price information provided for the pet shops "Meu Canino Feliz," "Vai Rex," and "ChowChawgas" remains constant during the program's execution, regardless of unspecified temporal variations. In other words, the prices quoted for small and large dog grooming services do not change beyond what is specified for weekdays and weekends.

2. **Cost-effectiveness as the Sole Predictive Factor:** The primary criterion for determining the best pet shop is the total grooming cost, considering the distance to Eduardo's kennel and the prices for small and large dogs. Other factors, such as service quality, waiting time, availability, or additional amenities that a pet shop may offer, are not considered.

3. **Accurate Location Information:** The distance between Eduardo's kennel and the pet shops (Meu Canino Feliz, Vai Rex, and ChowChawgas) is accurately provided and is static. Variable factors, such as traffic, which could affect the actual travel time, are not considered.

4. **Tiebreaker Resolved by Proximity:** In case of a tie between two or more pet shops in terms of total cost, the final decision will be based on physical proximity. The pet shop closest to Eduardo's kennel will be considered the best in case of a tie.

5. **Correct Input Data Provided:** It is assumed that the user will input the necessary information correctly and in the expected format, including the size of the dogs (small or large) and the date they intend to schedule the grooming.

These assumptions are essential for the correct execution of the algorithm to determine the best pet shop and help establish the system's criteria and limitations, providing a solid foundation for decision-making.

## Project Decisions

Throughout the project implementation, several decisions were made based on my preferences and knowledge in specific areas. Therefore, I chose to use the JavaScript language since it is a language I am already familiar with. Additionally, as mentioned earlier, I decided to go beyond what was proposed in the case and also implemented the frontend (responsive and accessible). Thus, the project decisions will be detailed in two aspects. Furthermore, regarding the logic of the functions to calculate the prices, I decided to use the same function for both the frontend code executed in the browser and the JavaScript code compiled in the terminal. This decision was significant for the project's development as it saved a lot of time.

Regarding code standardization, I paid attention to the following points:

- Folder structure and organization.
- Standardization of variable names, folders, and general files (CamelCase).
- Standardization of folder and file names in "pages" (PascalCase).
- Configuration of Eslint + Prettier + Editor config.
- Default language: English.

### Frontend Code

First of all, I decided to start with the system design since this is one of my favorite parts. For this reason, I used Figma to test different designs and chose a design inspired by the Rocketseat website. I like high-contrast colors and the combination of purple with black, which I found appealing. To do this, I inspected the elements of the Rocketseat website to capture specific values for each component.

[Rocketseat Website](https://www.rocketseat.com.br/)

Next, I added all the buttons and input fields in the JSX file. I considered using a library to get ready-made components, such as Bootstrap or Ant Design, for these elements, but I chose to create them manually since they were relatively simple. Then, I decided to build everything on a single page to facilitate error identification, logic failures, and overall code understanding. Following that, I created logic to increment or decrement the number of dogs when the buttons were clicked.

I also added some Eslint and Prettier configurations to streamline my work and improve code standardization and aesthetics. Additionally, I created a "Themes" folder in the "styles" directory to simplify style adjustments based on the web application's theme.

After that, I started structuring the system's logic. Initially, I tested if the function was correctly fetching the data. To do this, I used an extension called "Console Ninja," which conveniently displays the results of `console.log` directly in Visual Studio Code. I began by calculating the values only for "Meu Canino Feliz" to ensure the results were correct. Next, I developed the functions to calculate the prices for "Vai Rex" and "ChowChawgas." Since I hadn't performed unit tests until then, I manually calculated some values and compared them with what was printed in the console. When I confirmed that the results matched the expected ones, I started working on the logic for prioritization based on distance. To implement this functionality, I decided to create an object for each of the pet shops. These objects contained the following information: "name," "price," and "distance." Then, I created a function that generated an array with the objects that had the smallest values (in case of a tie). From there, I called a function to sort this array in ascending order based on the distance value contained in each of these objects.

After numerous tests and adjustments, I made some changes to the style to improve the responsiveness of the frontend. Up to this point, it was responsive for all screen sizes larger than the Galaxy Fold width (280px). In the future, I plan to improve the code and reduce the number of `@media` queries and unnecessary `<div>` elements.

Finally, I came up with the idea of using toasts to make the system more dynamic and attractive. For this, I used a library called React-Toastify. I read the documentation and looked for ways to style the toasts to match the colors of the web application's theme.

I was also considering adding an image next to the title, for which I searched for images on the [Storyset website](https://storyset.com/dog). However, due to time constraints, I chose to postpone this and focus on creating the code compiled in the terminal, as it is a fundamental requirement of the case.

In the future, I intend to style the date picker using the Material Design library, available [here](https://m3.material.io/components/date-pickers/specs). I didn't do this at the time due to time constraints.

### Terminal Compiled Code

Once I finished creating the frontend code executed in the browser, I started working on the code compiled in the terminal. Since I already had a ready-made

 function, I was able to complete this part much more quickly. I decided to create a file called `terminalFunction.js` exclusively for compiling the code in the terminal. Since I only had experience running code through the terminal using C++, creating JavaScript code in this way was a rewarding and challenging experience.

The first challenge I encountered was how to compile the code correctly in the terminal. Therefore, I researched and found an interesting way to do it. I used the `readline.createInterface` function and installed some necessary dependencies. Then, I made the necessary adaptations and tested the code several times.

Finally, when it was working perfectly, I decided to explore ways to style the terminal and make it visually appealing. I realized that I could further enhance the code, so I did the following:

- Restrict the format of the user's date input. To do this, I used a library called `date-fns`.
- Allow the user to call the function again after its completion (if desired).

## Unit Tests

Finally, when I finished the code for compilation, I started writing unit tests. I decided not to perform extensive testing because manually calculating the expected values would consume too much time. To run the `calculatePrices.test.js` file, I had to set up Babel. I installed the `jest` library to perform the tests and added the "test" command to the `package.json` file.

## Instructions to Run the System

To run this project locally, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   https://github.com/AmandaFernandes0701/Projeto-DTI.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Projeto DTI - Amanda
   ```

3. Install the project dependencies:
   ```bash
   npm install
   ```

4. To start the development server and view the application locally, run:
   ```bash
   npm run dev
   ```

5. If you wish to run the code through the terminal, navigate to the following directory:
   ```bash
   Projeto DTI - Amanda\src\functions\terminalFunction.js
   ```

6. Once you've reached the directory mentioned in step 5, you can execute the following command in the terminal:
   ```bash
   node terminalFunction.js
   ```

7. To run unit tests, use the following command:
   ```bash
   npm test
   ```
