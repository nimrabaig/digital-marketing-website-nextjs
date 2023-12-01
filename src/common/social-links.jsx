import Link from "next/link";


const social_links = [
  {
    link: "https://www.facebook.com/people/Lumenta-Digital-Inc/61551468568740/?sk=about",
    target: "_blank",
    icon: "fab fa-facebook-f", 
  },
  {
    link: "https://twitter.com/lumentadigital",
    target: "_blank",
    icon: "fab fa-twitter", 
  },
  {
    link: "https://instagram.com/lumentadigital?igshid=MzRlODBiNWFlZA==",
    target: "_blank",
    icon: "fa-brands fa-instagram", 
  },
  {
    link: "https://www.linkedin.com/company/lumenta-digital",
    target: "_blank",
    icon: "fa-brands fa-linkedin", 
  }, 
];

const SocialLinks = () => {
  return (
    <>
      {social_links.map((l, i) => (
        <a
          key={i}
          href={l.link}
          target="_blank"
          className={l.color}
          rel="noopener noreferrer"
        >
          <i className={l.icon}></i>
        </a>
      ))}
    </>
  );
};

export default SocialLinks;






const copy_right_text = {
  copy_right: <>© Copyright <span>©{new Date().getFullYear()}</span> Lumenta Digital. All Rights Reserved </>,
}
const {copy_right}  = copy_right_text

export const CopyRight = ()  => {
  return (
    <>
    {copy_right}
    </>
  )
}




// home 03 social link data
const social_links_two = [
  {
    link: "http://facebook.com",
    target: "_blank",
    icon: "fab fa-facebook-f", 
  },
  {
    link: "http://twitter.com",
    target: "_blank",
    icon: "fab fa-twitter",  
  },
  {
    link: "https://www.linkedin.com",
    target: "_blank",
    icon: "fab fa-linkedin-in", 
  }, 
  {
    link: "https://www.youtube.com",
    target: "_blank",
    icon: "fab fa-youtube",  
},

];
 

export const  SocialLinksTwo = ()  => {
   return (
     <>
        {social_links_two.map((link, i) => (
          <Link
            key={i}
            target={link.target}
            className={`icon-color-${link.color}`}
            href={link.link}
          >
            <i className={link.icon}></i>
            <span></span>
          </Link>
        ))}
     </>
   );
}