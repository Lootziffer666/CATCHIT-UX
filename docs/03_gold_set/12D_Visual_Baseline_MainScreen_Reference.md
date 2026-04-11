<!DOCTYPE html>

<html class="light" lang="de"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;family=Orbitron:wght@700&amp;family=Space+Grotesk:wght@500;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            "colors": {
                    "on-surface": "#1a1b20",
                    "primary-container": "#1f4b8f",
                    "on-primary-container": "#9ebdff",
                    "on-tertiary-fixed-variant": "#004d65",
                    "on-tertiary-fixed": "#001f2b",
                    "surface-container-highest": "#e2e2e8",
                    "on-error-container": "#93000a",
                    "surface-container-low": "#f3f3f9",
                    "tertiary-fixed-dim": "#6ed2ff",
                    "on-secondary-container": "#00723d",
                    "outline": "#737782",
                    "on-surface-variant": "#434751",
                    "surface-container-lowest": "#ffffff",
                    "secondary-container": "#85f7aa",
                    "error": "#ba1a1a",
                    "surface-dim": "#dad9e0",
                    "on-primary-fixed-variant": "#174589",
                    "primary-fixed-dim": "#acc7ff",
                    "surface-tint": "#355da2",
                    "on-background": "#1a1b20",
                    "inverse-primary": "#acc7ff",
                    "on-secondary-fixed": "#00210e",
                    "on-error": "#ffffff",
                    "surface-container": "#eeedf4",
                    "surface-bright": "#f9f9ff",
                    "tertiary": "#003b4e",
                    "on-tertiary-container": "#60c9f7",
                    "surface-variant": "#e2e2e8",
                    "surface": "#f9f9ff",
                    "on-primary": "#ffffff",
                    "tertiary-fixed": "#bfe8ff",
                    "inverse-surface": "#2f3035",
                    "primary": "#003472",
                    "primary-fixed": "#d8e2ff",
                    "inverse-on-surface": "#f1f0f7",
                    "error-container": "#ffdad6",
                    "tertiary-container": "#00536d",
                    "on-secondary": "#ffffff",
                    "surface-container-high": "#e8e7ee",
                    "on-primary-fixed": "#001a40",
                    "on-secondary-fixed-variant": "#00522a",
                    "on-tertiary": "#ffffff",
                    "background": "#f9f9ff",
                    "secondary-fixed": "#88f9ad",
                    "outline-variant": "#c3c6d2",
                    "secondary-fixed-dim": "#6cdc92",
                    "secondary": "#006d3a",
                    "warm-anthracite": "#333333"
            },
            "borderRadius": {
                    "DEFAULT": "0.25rem",
                    "lg": "0.5rem",
                    "xl": "0.75rem",
                    "full": "9999px"
            },
            "fontFamily": {
                    "headline": ["Space Grotesk"],
                    "body": ["Inter"],
                    "label": ["Inter"],
                    "display": ["Orbitron"]
            }
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .zen-gradient {
            background: linear-gradient(180deg, #42C2D5 0%, #3EA0D4 45%, #3281D6 100%);
        }
        .glass-bubble-zen {
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .menu-ring {
            width: 44px;
            height: 44px;
            background: rgba(255, 255, 255, 0.15);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        /* Top right aesthetic circle as seen in mockup */
        .header-decoration {
            position: absolute;
            top: -50px;
            right: -50px;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 70%);
            border-radius: 50%;
            z-index: 0;
            pointer-events: none;
        }
    </style>
</head>
<body class="bg-background font-body text-white antialiased min-h-screen overflow-hidden selection:bg-white/20">
<main class="zen-gradient min-h-screen relative flex flex-col items-center">
<!-- Aesthetic background decoration -->
<div class="header-decoration"></div>
<!-- Minimal Header -->
<header class="w-full flex items-center justify-between px-8 py-10 z-10">
<span class="material-symbols-outlined text-white text-2xl cursor-pointer hover:opacity-80 transition-opacity">arrow_back</span>
<span class="material-symbols-outlined text-white text-xl cursor-pointer hover:opacity-80 transition-opacity">more_vert</span>
</header>
<!-- Main Content Area -->
<div class="flex-grow flex flex-col items-center justify-center w-full px-8 -mt-12">
<p class="font-body text-white/90 text-base mb-10 tracking-wide opacity-90">Spätestens los in:</p>
<!-- Large Hero Bubble -->
<div class="glass-bubble-zen rounded-full w-56 h-56 flex flex-col items-center justify-center shadow-lg mb-20">
<span class="font-headline text-white text-7xl font-bold">15m</span>
</div>
<!-- Ultra-minimal Transport Options -->
<div class="w-full max-w-sm grid grid-cols-3 gap-8">
<!-- Option 1 -->
<div class="flex flex-col items-center gap-1">
<span class="text-white/70 text-[10px] uppercase tracking-widest font-medium mb-1">Linie</span>
<span class="font-headline text-white text-2xl font-medium">491</span>
<span class="text-white/90 text-sm mt-3">+2</span>
</div>
<!-- Option 2 (Center Highlighted) -->
<div class="flex flex-col items-center gap-1">
<span class="text-white/70 text-[10px] uppercase tracking-widest font-medium mb-1">Linie</span>
<span class="font-headline text-white text-4xl font-bold">21</span>
<span class="text-white/90 text-sm mt-1">+0</span>
</div>
<!-- Option 3 -->
<div class="flex flex-col items-center gap-1">
<span class="text-white/70 text-[10px] uppercase tracking-widest font-medium mb-1">Linie</span>
<span class="font-headline text-white text-2xl font-medium">295</span>
<span class="text-red-300 text-sm mt-3">+17</span>
</div>
</div>
</div>
<!-- Step Indicator at bottom -->
</main>
</body></html>