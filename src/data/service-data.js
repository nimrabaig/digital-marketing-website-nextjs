
// import img here 
import service_img_1 from "@assets/img/services/services-1.jpg";
import service_img_2 from "@assets/img/services/services-2.jpg";
import service_img_3 from "@assets/img/services/services-3.jpg";
import service_img_4 from "@assets/img/services/services-4.jpg";
import RightSymbol from '@/src/svg/right-symbol';

const service_data = [
    {
        id: 1, 
        alphabet: "P",
        title: "Search Engine Optimization (SEO)",
        subTitle: "Choose a Result-Driven SEO Partner",
        img: service_img_1,
        heading1: "Get High – Quality Organic & Paid SEO Services",
        des_1: <>As far as we might be concerned making an extraordinary As the complexity as </>,   
        des_2:<> Neglecting your SEO strategy poses the risk of technical site issues and
        Google penalties, leading to an undesirable drop in online visibility.
        Lumenta Digital is your trusted marketing agency for a seamless digital
        transformation, offering tailored SEO solutions to address your unique
        brand needs:{" "}</>,
        des_3: <>Worry-free and results driven, Lumenta Digital ensures your online success
        through a comprehensive suite of professional SEO services.{" "}</>   ,
        check_list:[
            {
              id: 1,
              active: "",
              title: "Effortless campaign management ",
              icon: <RightSymbol />,
            },
            {
              id: 2,
              active: "",
              title: "SEO content that drives leads ",
              icon: <RightSymbol />,
            },
            {
              id: 3,
              active: "",
              title: "Data-driven linking strategies ",
              icon: <RightSymbol />,
            },
            {
              id: 4,
              active: "",
              title: "Expert consultations ",
              icon: <RightSymbol />,
            },
            {
              id: 5,
              active: "",
              title: "Transparent campaign reporting ",
              icon: <RightSymbol />,
            },
            {
              id: 6,
              active: "",
              title: "Measurable results ",
              icon: <RightSymbol />,
            },
          ],  
          blockquote: "Boost Your Rankings – Contacts Us Today! ",
          heading2: "Our SEO Services",
          services: [{
            title: "Keyword Research & Strategy",
            description: "Lumenta Digital understands the nuances of your industry, boosting your ranking for specific search terms. Our SEO specialists review your current keyword rankings, analyze your wishlist, and conduct thorough keyword research to curate a list tailored to your website and competitive landscape. "
          },
          {
            title: "Link Building ",
            description: ""
          },
          {
            title: "Technical SEO ",
            description: ""
          },
          {
            title: "Local SEO",
            description: ""
          },
          {
            title: "On-Page SEO",
            description: ""
          },
          {
            title: "Off-Page SEO",
            description: ""
          },
          {
            title: "Content Writing",
            description: ""
          },
        ]
    },
    {
        id: 2, 
        alphabet: "V",
        title: <>Voice Over <br /> Internet Protocol</>,
        img: service_img_2,
        description: <>As far as we might be concerned making an extraordinary As the complexity as </>,       

    },
    {
        id: 3, 
        alphabet: "C",
        title: <>Clouds <br /> Backup Services</>,
        img: service_img_3,
        description: <>As far as we might be concerned making an extraordinary As the complexity as </>,        

    },
    {
        id: 4, 
        alphabet: "M",
        title: <>Mobile and <br /> Remote Networking</>,
        img: service_img_4,
        description: <>As far as we might be concerned making an extraordinary As the complexity as </>,        

    },
]
export default service_data
