import { assertEquals } from "https://deno.land/std@0.224.0/assert/assert_equals.ts";
import { assertExists } from "https://deno.land/std@0.224.0/assert/assert_exists.ts";
import { assertObjectMatch } from "https://deno.land/std@0.224.0/assert/assert_object_match.ts";
import { CircleWalletRepositoryImpl } from "./main.ts";
import type { EndUser } from "./interfaces.ts";

/**
 * Test Purpose:
 * This test verifies the structure of the response returned by the Circle Wallet SDK
 * when creating a user-controlled wallet. The test ensures that the response data is
 * provided at `response.data` rather than `response.data?.user`, as suggested by the
 * TypeScript type definition in the library.
 *
 * The TypeScript Issue:
 * The Circle Wallet SDK's TypeScript definition indicates that the user data should be
 * accessible as `response.data?.user` within the `createUser` method response. However,
 * in practice, the actual response places the user data directly under `response.data`.
 *
 * This discrepancy between the TypeScript type definition and the actual response
 * structure causes to generate error, as the expected property
 * `user` is not found on `response.data`. This test is created to highlight and prove
 * the mismatch, demonstrating that the TypeScript definition does not accurately
 * reflect the real API behavior.
 */
Deno.test("Circle Wallet Response Structure Test", async () => {
  const repository = new CircleWalletRepositoryImpl();

  const userId = "test-user-id";

  const { expected, actual } = await repository.createWalletSecurityProfile(
    userId,
  );

  console.log({ expected, actual });

  assertEquals(
    expected,
    undefined,
    "Expected 'response.data?.user' to be undefined",
  );

  assertExists(actual, "Expected 'response.data' to exist and be defined");

  // @ts-ignore Ignoring this TypeScript error due to a mismatch between the SDK's type definition and actual API response
  assertObjectMatch(actual, {
    // @ts-ignore Ignoring this TypeScript error due to a mismatch between the SDK's type definition and actual API response
    id: actual.id,
    // @ts-ignore Ignoring this TypeScript error due to a mismatch between the SDK's type definition and actual API response
    createDate: actual.createDate,
    // @ts-ignore Ignoring this TypeScript error due to a mismatch between the SDK's type definition and actual API response
    pinStatus: actual.pinStatus,
    // @ts-ignore Ignoring this TypeScript error due to a mismatch between the SDK's type definition and actual API response
    status: actual.status,
    // @ts-ignore Ignoring this TypeScript error due to a mismatch between the SDK's type definition and actual API response
    securityQuestionStatus: actual.securityQuestionStatus,
    // @ts-ignore Ignoring this TypeScript error due to a mismatch between the SDK's type definition and actual API response
    pinDetails: actual.pinDetails,
    // @ts-ignore Ignoring this TypeScript error due to a mismatch between the SDK's type definition and actual API response
    securityQuestionDetails: actual.securityQuestionDetails,
  } as EndUser);
});
