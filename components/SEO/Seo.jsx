// components/SEO.js

import { DefaultSeo } from "next-seo";

const SEO = () => {
  return (
    <DefaultSeo
      title="ইউনিটেক বাংলাদেশ"
      description="Academic website there unitech bangladesh information store."
      openGraph={{
        type: "website",
        locale: "en_IE",
        url: "https://unitechbd.com/",
        site_name: "Unitech Bangladesh",
      }}
      twitter={{
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default SEO;
