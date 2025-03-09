# PWA Setup for SakhaSampark

This document provides instructions for setting up the Progressive Web App (PWA) functionality for SakhaSampark.

## Icon Generation

Before deploying the application, you need to create icons for the PWA. The manifest.json file references icons of various sizes that need to be created and placed in the correct directory.

### Required Icons

Create the following icons and place them in the `assets/icons/` directory:

- icon-72x72.png (72x72 pixels)
- icon-96x96.png (96x96 pixels)
- icon-128x128.png (128x128 pixels)
- icon-144x144.png (144x144 pixels)
- icon-152x152.png (152x152 pixels)
- icon-192x192.png (192x192 pixels)
- icon-384x384.png (384x384 pixels)
- icon-512x512.png (512x512 pixels)

You can use tools like [Favicon Generator](https://realfavicongenerator.net/) or [PWA Asset Generator](https://github.com/onderceylan/pwa-asset-generator) to create these icons from your logo.

### Directory Structure

Make sure to create the following directory structure:

```
assets/
└── icons/
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    └── icon-512x512.png
```

## Testing PWA Installation

After deploying the application to GitHub Pages, you can test the PWA installation:

1. Visit the application at https://ayushman-misraa.github.io/SakhaSampark_v.1.0.1/login.html
2. In Chrome, open Developer Tools (F12)
3. Go to the "Application" tab
4. Check the "Manifest" section to ensure it's properly loaded
5. Check the "Service Workers" section to ensure the service worker is registered

## Troubleshooting

If the PWA doesn't work as expected:

1. Make sure all the icons exist in the correct location
2. Verify that the manifest.json file is being served with the correct MIME type
3. Check that the service worker is registered correctly
4. Ensure all paths in the manifest.json and service worker files are correct for your deployment

## Additional Resources

- [Google's PWA Checklist](https://web.dev/pwa-checklist/)
- [MDN Web App Manifest Documentation](https://developer.mozilla.org/en-US/docs/Web/Manifest)
- [Service Worker API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)