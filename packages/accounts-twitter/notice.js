if (Package['accounts-ui'] && !Package.hasOwnProperty('twitter-config-ui')) {
  console.warn(
    "Note: You're using accounts-ui and accounts-twitter,\n" +
    "but didn't install the configuration UI for Twitter\n" +
    "OAuth. You can install it with:\n" +
    "\n" +
    "    meteor add twitter-config-ui" +
    "\n"
  );
}
