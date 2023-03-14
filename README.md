# Information
This should be a fun exercise.

## OpenSauced

![Company Logo](https://github.com/open-sauced/assets/blob/main/logos/logo-on-dark.png)

### Company information 

[What is OpenSauced?](https://www.youtube.com/watch?v=h8gwrzis-dY)

[![youtube intro video](https://user-images.githubusercontent.com/5713670/222929371-fdaab545-dc4c-4808-b9aa-af6261c029be.jpg)](https://www.youtube.com/watch?v=h8gwrzis-dY)

99% of software is built with open source and the companies that know this have the secret sauce to scale teams and product quickly. Open-source unlocks opportunity in hiring, adoption, and product velocity and OpenSauced is the platform that connects open source to opportunity. 

The open-source intelligence platform for finding the best developers and scaling engineering teams. Unlock the power of open-source with insights by the slice.

### Why participate in an Octernship with OpenSauced

[Brian Douglas](https://github.com/bdougie), your lead, is the founder and CEO of Open Sauced where he works on increasing the knowledge and insights of open-source communities. In the past he led Developer Advocacy at GitHub by fostering a community of early adopters through content creation showcasing the newest Github features.

Brian has a passion for open-source and loves mentoring new contributors through Open Sauced, the platform that empowers the best developers to work in open-source. He has mentored countless devs into their first or next role as engineers.

Today OpenSauced is a small team of 5 mostly engineers, that are working on the goal of turning open source into opportunity.

### Octernship role description

The Octernship role for OpenSauced will be working with the [OpenSauced API](https://api.opensauced.pizza/) and to explore new ways to engage developers where they are, on GitHub. The application will explore your ability to leverage code to build a browser extension using JavaScript or TypeScript (your choice) that connects OpenSauced to GitHub. 

This will be the first step of your work for the next 6 months building out small features within the extension. You will work with Sr. Engineers and a Designer that will help build out your day to day work. 

We are seeking an intern developer work alongside our rapidly growing company. In this role, you will help build out features and solutions to meet the needs of our OpenSauced users and community. This role will be an integral part of our development team and documentation processes.

**Key Responsibilities:**

- Building features for the browser extension
- Building reusable UI components using our existing the [design system](https://design.opensauced.pizza/) 
- Building interactions to communicate with GitHub and our API
- Participate in design and engineering reviews to provide feedback during team meetings
- Monitor application performance
- Provide solutions to various solutions based on complexity and tradeoffs.

### Recommended qualifications

**Desired Skills:**

- Strong proficiency in React, Next.JS, and Tailwind
- Familiarity with general backend APIs
- Strong proficiency in HTML, CSS, JavaScript
- Proficiency in TypeScript

**Bonus Skills?:**

- Familiarity with the GitHub API
- Familiarity with backend APIs such as NestJS with Swagger

### Eligibility

To participate, you must be:

* A [verified student](https://education.github.com/discount_requests/pack_application) on Global Campus

* 18 years or older

* Active contributor on GitHub (monthly)

* Ability to work overlap US hours (at least 4 hours within the 7am-12pm PT time frame) 

# Assignment

## Create a browser extension that connects [api.opensauced.pizza](https://api.opensauced.pizza/) to a github.com profile.

### Task instructions

1. Create an OpenSauced account by connecting your GitHub to [opensauced.pizza](https://insights.opensauced.pizza)
1. Generate a [vite](https://vitejs.dev/) powered browser extension using the [CRXJS](https://crxjs.dev/vite-plugin/getting-started/vanilla-js/create-project) guide. Note there are two versions, vite@3 is in beta but both will work fine for this assignment. You can also leverage this [DEV post](https://dev.to/jacksteamdev/create-a-vite-react-chrome-extension-in-90-seconds-3df7) and the project's GitHub Discussion for additional help. This project is an open book assignment, so google as much as you'd like.
1. Connect your localhost power extension to your browser. You should not be deploying this to production or any browser store. 
1. Write a function that validates if an OpenSauced user account exists (using the OpenSauced API) for a GitHub user profile while viewing them on github.com. 

The final solution should only show a button on the GitHub user profile if the GitHub user is signed up for OpenSauced.

<img width="245" alt="ScreenShot 2023-03-04 at 2 27 39 PM" src="https://user-images.githubusercontent.com/5713670/222931380-bc824441-abc8-46f9-af4b-8adf4b3ef373.png">

API example:

When viewing [bdougie](https://github.com/bdougie) you will check his handle using the users service in api.opensauced.pizza to confirm he is an OpenSauced user. When checking [defunkt](https://github.com/defunkt) you will confirm he is not an OpenSauced user.

```
https://api.opensauced.pizza/v1/users/bdougie // returns 200
https://api.opensauced.pizza/v1/users/defunkt // return 404
```

Things to consider:

1. You can leverage the extension's popup to test the API by replacing the Vite boilerplate.
1. Limit this extension to only work on github.com profile pages. hint: the project will default to google.com, you will need to change that.
1. Adding a button can be done using React, Vue, HTMl, whatever you prefer. The button should actually link to the OpenSauced profile if it exists.
1. What else? How can you make this better? Auth to OpenSauced? Other Features?

### Task Expectations

The expectation is your extension only works when the user is on GitHub and can interact with the page. This interaction adds a button that links to the user's profile. 

- If there is missing documentation for OpenSauced, a contribution or open issue to the [docs](https://docs.opensauced.pizza/) repository is expected.
- If you are blocked for longer than 2-3 hours, [ask in the Discussions](https://github.com/open-sauced-craftwork/browser-extension/discussions). Linking errors messages or StackOverflow questions is the preferred way to provide context when asking for help.
- To better understand OpenSauced, join the [Discord Community](https://discord.gg/opensauced).

### Task submission

Students are expected to use the [GitHub Flow](https://docs.github.com/en/get-started/quickstart/github-flow) when working on their project. 

1. Creating a new branch
2. Making changes on the new branch to complete the task
4. Using GitHub Discussions to ask any relevant questions regarding the project

### Resources

- [api.opensauced.pizza](https://api.opensauced.pizza/)
- [docs.opensauced.pizza](https://docs.opensauced.pizza/)
- https://github.com/open-sauced/assets
- [crxjs](https://crxjs.dev/) 
- [vite](https://vitejs.dev/)
