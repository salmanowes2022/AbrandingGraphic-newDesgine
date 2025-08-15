# A. Graphics Landing Page

A professional bilingual (English/Hebrew) landing page for a graphic design studio built with React + Vite.

## Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## Custom Fonts

The project includes custom RagSans fonts for branding consistency.

### Available Font Weights
- **RagSans ExtraLight** (font-weight: 200)
- **RagSans SemiBold** (font-weight: 600)

### Usage Examples

#### With Tailwind Classes
```jsx
<h1 className="font-rag font-semibold">SemiBold Heading</h1>
<p className="font-rag font-extralight">ExtraLight Text</p>
```

#### With CSS Classes
```css
.custom-heading {
  font-family: 'RagSans', sans-serif;
  font-weight: 600; /* SemiBold */
}

.custom-text {
  font-family: 'RagSans', sans-serif;
  font-weight: 200; /* ExtraLight */
}
```

#### Direct Style Props
```jsx
<div style={{ fontFamily: 'RagSans', fontWeight: 600 }}>
  SemiBold Text
</div>
```

## Features

- ✅ Bilingual support (English/Hebrew)
- ✅ RTL/LTR layout switching
- ✅ Responsive design with Tailwind CSS
- ✅ Custom RagSans font integration
- ✅ Contact form functionality
- ✅ Client showcase section
- ✅ Team information section

## Technology Stack

- React 19
- Vite
- Tailwind CSS
- Material-UI
- React Icons
- Framer Motion
