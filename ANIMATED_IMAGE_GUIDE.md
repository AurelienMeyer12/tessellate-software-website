# Animated Image Guide

## Option 1: Using AnimatedImage Component (CSS Animations)

The `AnimatedImage.astro` component provides CSS-based animations for any image.

### Usage Example:

```astro
---
import AnimatedImage from '../components/AnimatedImage.astro';
---

<!-- Pulse animation -->
<AnimatedImage 
  src="/images/logos/tessellate-logo.png" 
  alt="Tessellate Logo"
  animationType="pulse"
  duration="3s"
/>

<!-- Float animation -->
<AnimatedImage 
  src="/images/team/darren-cole.jpeg" 
  alt="Team member"
  animationType="float"
  duration="2s"
/>

<!-- Rotate animation -->
<AnimatedImage 
  src="/images/logos/logo.png" 
  alt="Logo"
  animationType="rotate"
  duration="10s"
/>
```

### Available Animation Types:
- `pulse` - Scales in and out
- `float` - Moves up and down
- `rotate` - Spins continuously
- `fade` - Fades in and out
- `slide` - Moves left and right

## Option 2: Using Animated GIF

Simply place your `.gif` file in `public/images/` and use it like a normal image:

```astro
<img src="/images/animated-logo.gif" alt="Animated logo" />
```

## Option 3: Direct CSS Animation

Add animation directly to any image using CSS classes:

```css
.animated-logo {
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
```

## Option 4: Animated SVG

Create or use an SVG with animation:

```astro
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40">
    <animate attributeName="r" 
             values="40;50;40" 
             dur="2s" 
             repeatCount="indefinite" />
  </circle>
</svg>
```

## Examples

### Example 1: Animate the Hero Logo
Update `Hero.astro`:

```astro
---
import AnimatedImage from './AnimatedImage.astro';
---

<section id="hero" class="block hero">
  <div class="hero__pattern"></div>
  <div class="u-center">
    <div class="hero__inner">
      <AnimatedImage 
        src="/images/logos/tessellate-logo.png" 
        alt="Tessellate Software logo"
        animationType="float"
        duration="4s"
        className="hero__logo"
      />
      <!-- rest of component -->
    </div>
  </div>
</section>
```

### Example 2: Add an Animated Background Element
Add to any section:

```astro
<div class="animated-background">
  <AnimatedImage 
    src="/images/decorative-element.png" 
    alt=""
    animationType="rotate"
    duration="20s"
  />
</div>
```









