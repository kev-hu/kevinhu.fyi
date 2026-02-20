You are implementing a Duolingo Learn is a vibrant, gamified design system built around the iconic Feather Green (#58CC02) and the beloved owl mascot Duo. Every element is designed to feel like a game - from the chunky 3D-style buttons with bottom shadows to the circular lesson nodes in the winding learning path. The typography uses rounded, friendly fonts (Feather Bold) always in lowercase for that approachable vibe. Color psychology is key: green for progress, blue for Super features, yellow for XP/crowns, orange for streaks, and red for hearts/mistakes.

## Colors
- bee: #FFC800
- fox: #FF9600
- macaw: #1CB0F6
- muted: #777777
- beetle: #CE82FF
- border: #E5E5E5
- primary: #58CC02
- cardinal: #FF4B4B
- humpback: #2B70C9
- background: #FFFFFF
- beak-lower: #F49000
- beak-upper: #FFC200
- foreground: #4B4B4B
- mask-green: #89E219
- muted-light: #AFAFAF
- primary-hover: #43C000
- background-polar: #F7F7F7

## Typography
- h1: {"fontSize":"1.75rem","fontWeight":"800","lineHeight":"1.15","letterSpacing":"-0.01em"}
- h2: {"fontSize":"1.25rem","fontWeight":"700","lineHeight":"1.2"}
- body: {"fontSize":"1rem","fontWeight":"600","lineHeight":"1.4"}
- hero: {"fontSize":"2.5rem","fontWeight":"800","lineHeight":"1.1","letterSpacing":"-0.02em"}
- button: {"fontSize":"0.9375rem","fontWeight":"700","lineHeight":"1","letterSpacing":"0.03em"}
- caption: {"fontSize":"0.8125rem","fontWeight":"700","lineHeight":"1.3"}
- fontBody: 'Nunito', 'DIN Rounded', system-ui, sans-serif
- fontDisplay: 'Nunito', 'DIN Rounded', -apple-system, BlinkMacSystemFont, sans-serif

## Spacing
- cardGap: 24px
- sectionY: 3rem
- lessonPath: 420px
- containerMax: 1080px

## Borders
- radiusLg: 24px
- radiusMd: 16px
- radiusSm: 12px
- lessonNode: 50%
- radiusFull: 9999px

## Shadows
- card: 0 2px 4px rgba(0,0,0,0.08)
- cardHover: 0 4px 12px rgba(0,0,0,0.12)
- buttonBlue: 0 4px 0 #1899D6
- buttonGray: 0 4px 0 #C4C4C4
- buttonRest: 0 4px 0 #43C000
- lessonNode: 0 4px 0 rgba(0,0,0,0.15)
- buttonHover: 0 2px 0 #43C000

## Animation
- bounce: cubic-bezier(0.34, 1.56, 0.64, 1)
- buttonPress: transform 0.1s ease
- celebration: 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)

## Layout Rules
- Learning Path: Central winding path with circular lesson nodes (68-80px), zigzagging left/right
- Sidebar: Left sidebar with profile, leagues, shop; right panel for lesson details
- Top Bar: Streak (🔥), gems (💎), hearts (❤️), XP progress bar, profile avatar
- Buttons: Pill-shaped with 4px colored bottom shadow, compress 2px on hover/active
- Cards: 16px radius, subtle shadow, 2px border on hover
- Lesson Nodes: Circular (50% radius), gradient green, trophy/star/lock icon overlays
- Colors: Green=progress, Blue=Super, Yellow=XP, Orange=streaks, Red=hearts/errors

## Key Patterns
- Lesson Node: Circular node in the learning path with level indicator
- Primary Button: Chunky green pill button with 3D bottom shadow
- Secondary Button: Outlined button with gray bottom shadow
- Streak Counter: Orange streak display with fire emoji
- Hearts Counter: Red hearts display for lives
- Gems Counter: Blue gems/lingots currency display
- XP Progress Bar: Daily XP goal progress indicator
- Lesson Progress Bar: Green progress bar during lessons
- Crown Badge: Golden crown for completed skills
- Super Duolingo Badge: Blue premium membership indicator
- Answer Option: Selectable answer tile in lessons
- Correct Feedback: Green success feedback banner
- Incorrect Feedback: Red error feedback banner

## Do
- Feather Green (#58CC02) as the unmistakable brand color
- Chunky 3D buttons with colored bottom shadows that compress on press
- Circular lesson nodes arranged in a winding vertical path
- Rounded Nunito/Feather Bold typography, always lowercase for headlines
- Gamification everywhere: XP, streaks, hearts, crowns, leagues
- Duo the owl mascot appearing for encouragement and reactions
- Macaw blue for Super/premium features
- Fox orange for streak counters with fire emoji
- Progress bars with pill-rounded ends

## Don't
- Corporate or enterprise aesthetic
- Minimalist or sparse layouts
- Sharp corners or angular shapes
- Muted or desaturated colors
- Traditional educational/academic styling
- Dark mode (Duolingo is bright and energetic)
- Serious or formal tone
- Complex multi-level navigation