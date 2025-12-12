# 🎯 Portfolio Website - Quick Customization Guide

## 📝 How to Personalize Your Portfolio

### 1. Replace Profile Photo
**Location**: `profile.jpg` in the root directory
- **Recommended Size**: 500x500px (square format)
- **Format**: JPG, PNG, or WebP
- **Action**: Simply replace the existing `profile.jpg` file with your photo

### 2. Update Contact Information

**File**: `index.html` (Lines 234-264)

```html
<!-- Phone -->
<p>+91 XXXXXXXXXX</p>  <!-- Replace with your phone number -->

<!-- Email -->
<p>monish@example.com</p>  <!-- Replace with your email -->

<!-- LinkedIn -->
<p>Connect with me</p>  <!-- Add your LinkedIn URL -->
```

### 3. Customize Colors

**File**: `style.css` (Lines 14-27)

```css
:root {
    /* Change these gradient colors */
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    
    /* Change neon accent colors */
    --neon-blue: #00f2fe;
    --neon-purple: #764ba2;
    --neon-pink: #f5576c;
}
```

### 4. Add More Skills

**File**: `index.html` (Lines 71-85)

```html
<div class="skills-grid">
    <!-- Add new skill badges here -->
    <span class="skill-badge">Your New Skill</span>
</div>
```

### 5. Update Experience Timeline

**File**: `index.html` (Lines 94-136)

To add a new experience entry:
```html
<div class="timeline-item timeline-left">  <!-- Alternate between timeline-left and timeline-right -->
    <div class="timeline-content glass-card">
        <div class="timeline-icon">
            <i class="bi bi-YOUR-ICON"></i>  <!-- Choose from Bootstrap Icons -->
        </div>
        <h3>Your Job Title</h3>
        <h4>Company Name</h4>
        <p class="timeline-date">Year – Year</p>
    </div>
</div>
```

### 6. Add New Projects

**File**: `index.html` (Lines 146-177)

```html
<div class="col-md-4">
    <div class="project-card glass-card">
        <div class="project-icon">
            <i class="bi bi-YOUR-ICON"></i>
        </div>
        <h3>Project Name</h3>
        <p>Project description goes here.</p>
    </div>
</div>
```

### 7. Modify Education

**File**: `index.html` (Lines 186-224)

Update degree names, institutions, or add more education cards.

---

## 🎨 Bootstrap Icons Reference

All icons used are from **Bootstrap Icons**. Browse available icons at:
👉 [https://icons.getbootstrap.com/](https://icons.getbootstrap.com/)

**Common Icons Used**:
- `bi-building` - Company/Building
- `bi-cpu` - Technology/IoT
- `bi-code-slash` - Development
- `bi-lightbulb` - Innovation
- `bi-mortarboard-fill` - Education
- `bi-telephone-fill` - Phone
- `bi-envelope-fill` - Email
- `bi-geo-alt-fill` - Location
- `bi-linkedin` - LinkedIn

---

## 🚀 Animation Details (All Pure CSS)

### Hero Section
- **Text Animation**: Fade-in-up with staggered delays
- **Background**: Pulsing gradient orbs
- **Button**: Shine effect on hover

### Profile Section
- **Image**: Continuous floating (6s cycle)
- **Glow Ring**: Pulsing opacity and scale
- **Pulse Ring**: Expanding ring animation
- **Hover**: Tilt and scale effect

### Skills Section
- **Badges**: Staggered fade-in entrance
- **Hover**: Float animation + gradient background + glow

### Experience Timeline
- **Entrance**: Alternating slide-in (left/right)
- **Cards**: Glassmorphism with hover lift
- **Icons**: Gradient background with glow

### Projects Section
- **Cards**: Fade-in-up with delays
- **Icons**: 360° rotation on hover
- **Hover**: Scale-up transform

### Education Section
- **Cards**: Fade-in-scale animation
- **Icons**: Bounce animation on hover

### Contact Section
- **Cards**: Staggered fade-in
- **Icons**: 360° rotation on hover
- **Hover**: Translate-up effect

---

## 📱 Responsive Breakpoints

```css
Desktop:  1200px and above
Tablet:   768px - 1199px
Mobile:   Below 768px
```

---

## 🔧 Testing Checklist

- [ ] Replace profile photo
- [ ] Update phone number
- [ ] Update email address
- [ ] Add LinkedIn profile URL
- [ ] Test on mobile device
- [ ] Test on tablet
- [ ] Test on desktop
- [ ] Verify all animations work
- [ ] Check all links work
- [ ] Proofread all text content

---

## 💡 Pro Tips

1. **Profile Photo**: Use a professional headshot with good lighting
2. **Colors**: Keep the gradient theme consistent across all sections
3. **Content**: Keep descriptions concise and impactful
4. **Icons**: Choose icons that represent your work accurately
5. **Testing**: Always test on multiple devices and browsers

---

## 📦 File Structure

```
portfolio_website/
├── index.html          # Main HTML file
├── style.css           # All styles and animations
├── profile.jpg         # Your profile photo
└── README.md          # Documentation
```

---

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `username.github.io/repository-name`

### Option 2: Netlify (Free)
1. Drag and drop your folder to [netlify.com](https://netlify.com)
2. Get instant deployment with custom domain support

### Option 3: Vercel (Free)
1. Sign up at [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

---

**Need Help?** All animations are pure CSS - no JavaScript debugging needed! 🎉
