# News Showcase Components

This directory contains the refactored news showcase components, broken down into logical, reusable pieces.

## Component Structure

### Main Components

- **`NewsItem.tsx`** - Main wrapper component that renders different content types
- **`TwitterEmbed.tsx`** - Handles Twitter/X post embeds
- **`YouTubeEmbed.tsx`** - Handles YouTube video embeds  
- **`ArticleCard.tsx`** - Handles regular news article cards

### Utility Components

- **`TwitterScript.tsx`** - Manages Twitter widget script loading
- **`ScrollbarStyles.tsx`** - Provides custom scrollbar styling
- **`types.ts`** - Shared TypeScript interfaces
- **`index.ts`** - Barrel exports for clean imports

## Usage

```tsx
import { NewsItem, TwitterScript, ScrollbarStyles } from './news-showcase'

// Use in your main component
<NewsItem item={newsItem} index={0} />
```

## Benefits of This Structure

1. **Separation of Concerns** - Each component has a single responsibility
2. **Reusability** - Components can be used independently
3. **Maintainability** - Easier to debug and modify individual pieces
4. **Type Safety** - Shared types ensure consistency
5. **Clean Imports** - Barrel exports simplify component usage
