import { LuccaDirectory } from "./index";

describe("lucca-directory-typescript-sdk", () => {
    it("initialize client", async () => {
        const luccadirectory = new LuccaDirectory({
            apiKey: "API_KEY",
        });
    });
});
