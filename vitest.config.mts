import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        include: [ "./vkno/**/*.spec.mts" ]
    }
});
