# Mobile QA Engineer Assignment

Welcome to the Mobile QA Engineer Technical Assignment. We expect the work to take a few hours, and we thank you in advance for taking that time for us!

This test consists of three parts:

- Testing
- Automation Testing
- Documentation

## Setup

Clone this repo by clicking `Use this template` at the top or through CLI with `--bare` (and later push the solution with `--mirror` to a new repo in your accounts) and you'll have the code for a working React Native app, please follow the [Project Setup and Running](#project-setup-and-running) section below to get it running.

## Testing

Following the [feature list](#features) below, please test the app and list scenarios that you would test manually, automated or both.
You can list these scenarios in the document you'll send us later.

## Automation Testing

In this part of your challenge is to implement at least 5 of the cases you listed in the discovery in an automated way.

The technical solution choices regarding language and framework are up to you, however we would prefer to see something on JS or TS and possibly Appium framework, given we use these internally. Take this chance to show your knowledge not only regarding coding but also regarding integrating different features to an automation project as reporting, parallel execution, retries, screenshots and logging when failing, etc.

## Documentation:

For the written part, we would like to receive a PDF, slide presentation or preferably an MD file (readme) with your insights.
We’ll evaluate how is your way of working when dealing with an automation challenge, but you can explore this opportunity beyond the scope of this simple challenge by explaining how you proceed with the analysis of this project, planning of your tasks, technical solution selection, design pattern choice, implementation, execution, etc.

We also expect to hear your opinion about this simple project as a QA Engineer, what would you do differently, what would you improve, what would you add, etc.
This part doesn't have to be a full essay about your thoughts, just some bullet points that you can base yourself from and then we can discuss it further in the interview.

You can think about this written part both as the presentation of the project to a stakeholder and as the technical documentation for the team who could join you for maintaining or extending the project with instructions about how to use it.

# Delivery
To deliver this assignment to us, just email us the link to the repo you created using this template, we expect:
* To see your implementation of tests around the app codebase
* Run the tests locally with provided instructions (good to update this README with instruction on how to run the automated tests)
* See the documentation you created in the repo (you can make a folder just for it)
* If you have any questions, don't hesitate to email us

# Open Library Books App

This project demonstrates fetching and displaying books using React, React-Native, Redux Toolkit.

## Features:

- Searching for books by title and ISBN
- Adding books to lists
  - Wishlist ⭐️
  - Currently reading 📕
- Access currently reading list
  - Remove books from lists in this screen
- Removing books from lists
- Displaying book details

## Project Setup and Running

- Clone the repository
- Install the dependencies by running `npm install` or `yarn install`.
- Install pods by running `pod install` inside of `ios` directory
- Run as you prefer - `yarn ios` / `yarn android` OR `yarn start` and build via Xcode/Android Studio

## Technologies and Libraries Used

- React Native - A framework for building native mobile apps using JavaScript and React.
- @reduxjs/toolkit - A set of tools to simplify creating logic and state management in Redux.
- redux-persist - A library for persisting and rehydrating Redux state across app sessions.
- react-native-fast-image - An optimized image component for React Native, for efficient loading and caching.
- styled-components - A library for styling React components using tagged template literals.
- @react-navigation - The primary navigation library for handling screen transitions in React Native applications.

## Running tests

- `jest ./__tests` will execute component tests
- `jest ./src/redux/slices/__tests__` will execute slices tests
