  let supportedStartUrls = [
    'https://doctor.clirnet.com/index.html#/',

    'https://doctor.clirnet.com/#/',

    'https://doctor.clirnet.com/services/#/',

    'https://doctor.clirnet.com/services/index.html#/',

    'clirnet://'
  ];

  const getSubstringToReplace = (url) => {
    let substringToReplace = '';
    supportedStartUrls.forEach((element) => {
      if (url.startsWith(element)) {
        substringToReplace = element;
      }
    });
    return substringToReplace;
  };

  const removeSubstringFromURL = (url, substringToRemove) => {
    return url.replace(substringToRemove, '');
  };
let url = "https://doctor.clirnet.com/services/#/share/medwiki/27538/cta_20240115"
 let myData = url?.includes('app.clirnet.com.clirnetapp')
        console.log("my data ===>", myData);
const IsDeepLinkUrl = url?.includes('clirnet.page.link');
          const autoAuthUrl = url?.includes('autoauth');
          console.log("my IsDeepLinkUrl==>", IsDeepLinkUrl);
          console.log("my autoAuthUrl==>", autoAuthUrl);
if (!IsDeepLinkUrl) {
            let substringToRemove = getSubstringToReplace(url);
            const modifiedURL = removeSubstringFromURL(url, substringToRemove);
            console.log("my modified url===>", modifiedURL);
           
          }