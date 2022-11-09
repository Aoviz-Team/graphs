import { addons } from '@storybook/addons';
import { themes, create } from '@storybook/theming';

addons.setConfig({
    theme: { ...themes.dark, brandTitle: 'Aoviz' },
});
