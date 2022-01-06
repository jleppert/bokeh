const MAX_INT32 = 2147483647;
// Park-Miller LCG
export class Random {
    constructor(seed) {
        this.seed = seed % MAX_INT32;
        if (this.seed <= 0)
            this.seed += MAX_INT32 - 1;
    }
    integer() {
        this.seed = (48271 * this.seed) % MAX_INT32;
        return this.seed;
    }
    float() {
        return (this.integer() - 1) / (MAX_INT32 - 1);
    }
    floats(n, a = 0, b = 1) {
        const result = new Array(n);
        for (let i = 0; i < n; i++) {
            result[i] = a + this.float() * (b - a);
        }
        return result;
    }
    choices(n, items) {
        const k = items.length;
        const result = new Array(n);
        for (let i = 0; i < n; i++) {
            result[i] = items[this.integer() % k];
        }
        return result;
    }
}
Random.__name__ = "Random";
export const random = new Random(Date.now());
//# sourceMappingURL=random.js.map