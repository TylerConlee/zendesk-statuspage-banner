# zendesk-statuspage-banner
Utilizes the structure of [moderatorwes/Notification-Banner](https://github.com/moderatorwes/Notification-Banner)


## Installation

1) Add `<script type="text/javascript" src="https://cdn.statuspage.io/se-v2.js"></script>` to the footer of your Zendesk Guide theme.

2) Paste this snippet into your JS file in your Zendesk Guide theme. Combined with the CSS from `moderatorwes/Notification-Banner`, this banner only shows when you have an unresolved incident on your StatusPage.

3) Replace the `<YOUR_STATUSPAGE_ID_HERE>` on line 8 with your StatusPage ID. This can be found at `https://link-to-your-statuspage.com/api`

## Future plans

- List affected components
- Customize CSS
