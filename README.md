# AGS Interview Challenge

## Introduction

Welcome to the AGS Interview QA challenge! This live coding interview is an opportunity to demonstrate your problem-solving skills, coding proficiency, and understanding of computational complexity. You'll be sharing your screen as you work through the problems, allowing us to observe your thought process and approach.

## Setup and Installation

Before the interview, please ensure your environment is set up:

1. Clone the Repository: Clone this repository to your local machine using:

```shell
git clone (repo url that we share goes here)
```

2. Install Dependencies: Navigate to the project's root directory and install the necessary dependencies:

```shell
cd ags-interview-qa
npm install
```

## Understanding the Problems

- Each problem is located in a specific directory under `src`.
- The README.md file in each problem directory (e.g., `problem-01`) contains the problem statement and specific instructions or constraints.

## Writing Your Solutions

- Write your solution in the solution.js file within the respective problem directory.
- Focus initially on a working solution. After achieving functionality, you can consider optimizing for efficiency.
- Maintain readability and maintainability in your code.

## Testing Your Solutions

- We use Jest for testing. Each problem has a solution.test.js file with predefined tests.
- To run tests for a specific problem during the interview, use:

```shell
npm test -- src/problem-xx/solution.test.js
```

Replace xx with the problem number, such as 01 for problem-01.

- To run all tests, use:

```shell
npm test
```

## Problem-Solving Guidance for Live Coding

- **Big O Notation**: Keep in mind the time and space complexity of your solutions. Being able to discuss the efficiency of your code is important.
- **Focus on a Working Solution First**: Your primary goal is to get a working solution. Once achieved, you can then refine and optimize.
- **Optimization**: After developing a functional solution, consider its efficiency and whether it can be improved in terms of speed and memory usage.
- **Explain as You Code**: During the interview, explain your thought process, the choices you make, and the reasons behind them. Communication is key.

## Additional Tips for the Interview

- **Regular Committing**: If you're using a version control system, make regular commits to demonstrate your workflow.
- **Code Comments**: Comment your code to explain complex logic or important decisions.
- **Clarify When Needed**: If you're unsure about any aspect of a problem, don't hesitate to ask for clarification.

We look forward to seeing how you tackle these challenges. Remember, the process is as important as the solution. Good luck, and happy coding!
