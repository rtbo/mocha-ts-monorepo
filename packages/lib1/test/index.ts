import { lib1Func } from "../src";
import { expect } from "chai";

describe("lib1", function() {
    it("should return 1", function() {
        expect(lib1Func()).to.equal(1);
    });
});
