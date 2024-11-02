- Clone the Repository

- Set Up Environment Variables

    - Create a `.env` file in the root of the project

    - Add your Circle API key:
        ```
        CIRCLE_API_KEY=your_api_key_here
        ```

- Run Tests
    ```
    deno test --allow-env --allow-net --env-file=.env
    ```


Ouput:

```
➜ deno test --allow-env --allow-net --env-file=.env
running 1 test from ./main_test.ts
Circle Wallet Response Structure Test ...
------- output -------
{
  expected: undefined,
  actual: {
    id: "test-user-id",
    status: "ENABLED",
    createDate: "2024-11-02T11:14:43Z",
    pinStatus: "UNSET",
    pinDetails: { failedAttempts: 0 },
    securityQuestionStatus: "UNSET",
    securityQuestionDetails: { failedAttempts: 0 },
    authMode: "PIN"
  }
}
----- output end -----
Circle Wallet Response Structure Test ... ok (417ms)

ok | 1 passed | 0 failed (423ms)
```