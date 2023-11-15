import { expect, test } from '@playwright/experimental-ct-vue';
import Bug from "@/components/bug.vue";

test('should work', async ({ mount }) => {
    const component = await mount(Bug);
    await expect(component).toHaveScreenshot();
});