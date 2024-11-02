import { initiateUserControlledWalletsClient } from "npm:@circle-fin/user-controlled-wallets";

export class CircleWalletRepositoryImpl {
  private circleClient: ReturnType<typeof initiateUserControlledWalletsClient>;

  constructor() {
    this.circleClient = initiateUserControlledWalletsClient({
      apiKey: Deno.env.get("CIRCLE_API_KEY")!,
    });
  }

  async createWalletSecurityProfile(
    userId: string,
  ) {
    try {
      const response = await this.circleClient.createUser({ userId });
      return {
        expected: response.data?.user,
        actual: response.data,
      };
    } catch (error) {
      console.error("Error creating wallet security profile:", error);
      throw error;
    }
  }
}
