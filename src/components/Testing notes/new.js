/**
 * Different types of testing
 * -Manual testing (Human Involved)
 * -Automation Testing (Done on code by code)
 *   -Selenium Testing
 *
 * -E2E Testing covers entire user Journey (testing code make by QA Team)
 *      -Headerless Browser
 *
 * -Unit Testing
 * -Integration Testing
 * installing React testing libraries
 *      - npm i -D @testing-library/react
 * installing Jest testing libraries
 *      - npm i -D jest
 *          configure Jest
 *              create jest.config file
 *                  npx jest --init
 * Would you like to use Typescript for the configuration file? » (y/N) -no
 * Choose the test environment that will be used for testing » - Use arrow-keys. Return to submit.
 *   node
 *   jsdom (browser-like) -select jsdom
 *   Do you want Jest to add coverage reports? » (y/N) -yes
 * Which provider should be used to instrument code for coverage? » - Use arrow-keys. Return to submit.
 *   v8
 *   babel  -  select babel
 * Automatically clear mock calls, instances, contexts and results before every test? » (y/N) -yes
 * install jest-environment-jsdom - npm i -D jest-environment-jsdom
 * then run test - npm run test
 *
 * Create my first test
 * make a folder in components folder naming - __tests__
 * config jest with babel because jest dont know what is import or module
 * npm install --save-dev babel-jest @babel/core @babel/preset-env
 * add presets in babel config file - presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
 * wrote expect sum test and try to run it
 *
 * added coverage in gitignore
 * we have to install a library - npm i -D @babel/preset-react
 * jest doesn't understand jsx also so we have to configure it as well with babel by adding preset
 * ["@babel/preset-react",{"runtime": "automatic"}]]
 * after this we try to test our header to show logo for this we have to import render from react test library  and wrap our header in render function 
 * after this we get  an error that jest dont understand png format so we have to make a dummyLogo.js file in mocks folder so that we can use it as a replacement for png file for this we have to configure our jest.config file in this file we have  moduleNameMapper in this we have to add our config - moduleNameMapper: {
    "\\.(jpg|png|svg|jpeg)$": "../mocks/dummyImage.js",
  },
  jest dont understand router as well so we need to provide StaticRouter from "react-router-dom/server" library
  after that we log the render header
  in this header we find the logo by getAllByTestId("logo") to find it we have to describe it in header component where img tag is placed in img tag we add a attribute - data-testid="logo" so that jest recognizes it as id if we use normal id then it recognizes by browser
  jest dont understand fetch function because its a browser thing so it gives us a function - 
  We are now creating a dummy function 
  global.fetch = jest.fn() //inside function we have to give a promise that is to resolve or fail and after that we have to pass in json in which we have to parse api data 
  after that we have to check for search by giving some value. In this we have to use fireEvent function given by react testing library in which we use it by
  fireEvent.change(searchInput,{
    target:{
      value:"jaysika"
    }
  })
  after that to check the filtered restaurants we have to check it by fireEvent.click functionality in which we pass searchbtn testid
  and to check that restaurants are updated we get restaurants list by giving testid to filtered restaurants in body and grabbing it in test file and check the length of the restaurants as these are childrens in restaurants 
  
  Next step is to check adding items in cart functionality
  
  
  */
