import { lib2Func } from "../src";

import { expect } from 'chai';

describe("lib2", function() {
    it("should return 2", function() {
        expect(lib2Func()).to.equal(2);
    });
});
