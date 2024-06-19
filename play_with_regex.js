const urlPattern1 = /^https:\/\/www\.clirnet\.com\?.*=(\d+)$/;
const urlPattern2 = /^https:\/\/www\.clirnet\.com\?.*=(\d+)&utm=[^\s&]+$/;
const urlPattern3 = /^https:\/\/www\.clirnet\.com\?.*=(\d+)&utm=[^\s&]+$/;


// Test URLs against the pattern
const testUrl1 = 'https://www.clirnet.com?video_archive=3935';
const testUrl2 = 'https://www.clirnet.com/?video_archive=3935&utm=INT_TEST_UTM&tk=Lp9Sv6';
const testUrl3 = 'https://www.clirnet.com/?video_archive=3935&utm=INT_TEST_UTM';

console.log(urlPattern1.test(testUrl1)); // Should return true
console.log(urlPattern2.test(testUrl2)); // Should return true
console.log(urlPattern3.test(testUrl3)); // Should return true