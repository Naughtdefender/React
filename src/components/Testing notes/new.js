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
 */
