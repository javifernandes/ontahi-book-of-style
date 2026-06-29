import type { Config } from 'tailwindcss';

import { ontahiPalette } from './ontahi-palette';

export const ontahiTailwindPreset = {
  theme: {
    extend: {
      colors: {
        ontahi: ontahiPalette,
      },
      borderRadius: {
        ontahi: '0.5rem',
      },
      fontFamily: {
        ontahiSerif: ['Lora', 'Georgia', 'serif'],
        ontahiSans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        ontahiMono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
} satisfies Config;
