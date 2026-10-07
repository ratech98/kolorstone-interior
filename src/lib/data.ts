import { unsplash as U } from "./site";

export type Project = {
  name: string; place: string; style: string; cat: string; desc: string; imgs: string[]; alt: string;
};

/* Replace each Unsplash id with your own photo. First image is the card cover. */
export const PROJECTS: Project[] = [
  { name: "Modern Minimalist Residence", place: "Thanjavur", style: "Contemporary • Residential", cat: "Living Room", desc: "A calm, light-filled living space with warm timber and soft textures.", imgs: [U("photo-1600210492486-724fe5c67fb0"), U("photo-1618221195710-dd6b41faaea6"), U("photo-1600585154340-be6161a56a0c")], alt: "Modern minimalist living room interior in Thanjavur" },
  { name: "The Quiet Suite", place: "Trichy", style: "Warm Modern • Residential", cat: "Bedroom", desc: "A restful master bedroom layered in neutral tones and tactile fabrics.", imgs: [U("photo-1616594039964-ae9021a400a0"), U("photo-1505693416388-ac5ce068fe85"), U("photo-1540518614846-7eded433c457")], alt: "Neutral master bedroom interior in Trichy" },
  { name: "Handle-less Kitchen", place: "Kumbakonam", style: "Minimal • Residential", cat: "Kitchen", desc: "A clean modular kitchen planned for daily cooking and effortless storage.", imgs: [U("photo-1556909114-f6e7ad7d3136"), U("photo-1600585152220-90363fe7e115"), U("photo-1565538810643-b5bdb714032a")], alt: "Modern modular kitchen in Kumbakonam" },
  { name: "Family Dining Hall", place: "Thanjavur", style: "Classic Contemporary • Residential", cat: "Dining Area", desc: "A generous dining area built for long meals and festive gatherings.", imgs: [U("photo-1617806118233-18e1de247200"), U("photo-1600566753086-00f18fb6b3ea"), U("photo-1615529182904-14819c35db37")], alt: "Elegant dining area interior" },
  { name: "Studio Workspace", place: "Chennai", style: "Modern • Office", cat: "Office", desc: "A focused, well-lit workplace that supports concentration and collaboration.", imgs: [U("photo-1497366216548-37526070297c"), U("photo-1524758631624-e2822e304c36"), U("photo-1497366811353-6870744d04b2")], alt: "Modern office interior design" },
  { name: "The Gold Residence", place: "Coimbatore", style: "Luxury • Residential", cat: "Luxury Interior", desc: "Rich materials, brass detailing and custom joinery throughout a premium home.", imgs: [U("photo-1618219908412-a29a1bb7b86e"), U("photo-1600607687939-ce8a6c25118c"), U("photo-1600566752355-35792bedcfea")], alt: "Luxury home interior with gold accents" },
  { name: "Boutique Retail Space", place: "Madurai", style: "Contemporary • Commercial", cat: "Commercial Interior", desc: "A branded retail interior designed to showcase product and guide the customer.", imgs: [U("photo-1604014237800-1c9102c219da"), U("photo-1441986300917-64674bd600d8"), U("photo-1567401893414-76b7b1e5a7a5")], alt: "Boutique commercial interior" },
];

export const WHY: [string, string, string][] = [
  ["Personalized Design", "Every space is designed around your lifestyle, taste and requirements.", "M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z"],
  ["Attention to Detail", "We focus on the details that transform an ordinary space into something exceptional.", "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5-5"],
  ["Quality Materials", "We work with carefully selected materials and finishes.", "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5"],
  ["End-to-End Service", "From concept and planning to execution, we guide you through the process.", "M4 12h16M14 6l6 6-6 6"],
  ["Transparent Process", "Clear communication and planning throughout your project.", "M4 5h16v11H8l-4 4V5z"],
  ["Experienced Team", "A creative team focused on delivering functional and beautiful spaces.", "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M17 11a2.5 2.5 0 1 0 0-5M17 14c2.5 0 4 2 4 5"],
];

export const STEPS = ["Consultation", "Site Visit", "Concept & Design", "Material Selection", "Execution", "Final Handover"];

export type Review = { name: string; type: string; stars: number; text: string };
/**
 * Add REAL client reviews here, e.g.
 * { name: "R. Priya", type: "Residential Interior Client", stars: 5, text: "..." }
 * The reviews section stays hidden while this list is empty (placeholder text hurts SEO and trust).
 */
export const REVIEWS: Review[] = [
  {
    "name": "Nirmalkumar Krishna",
    "type": "Client",
    "stars": 5,
    "text": "We were planning to do our home interiors from Chennai and were introduced to Kolorstones Home Interiors through a friend. After meeting their team and discussing our ideas, we were really impressed with their response, professionalism, and especially their 3D designs. That gave us the confidence to continue the entire project with them. I would strongly recommend Kolorstones Home Interiors to anyone looking for modern and stylish interiors. They truly understand customer expectations and will definitely exceed them. The team is highly knowledgeable, professional, and very supportive throughout the project. One of the best things was that the final output was exactly the same as what they showed in the 3D designs. The quality of materials used was high-end, the workmanship was outstanding, and every detail was perfectly finished. We are 100% satisfied with the work. Compared to many others, their pricing was also very reasonable without compromising on quality. Highly recommended for the best interior outputs and modern home designs. Great team and excellent work!,"
  },
  {
    "name": "Alfin salam",
    "type": "Client",
    "stars": 5,
    "text": "I recently got my interiors done by Kolorstones Home Interiors, and I must say it was an excellent experience from start to finish. A big thanks to Mr. Fazil and his team for their professionalism, creative ideas, and attention to detail throughout the entire project. They patiently understood our requirements and turned them into a beautiful reality. Special appreciation also goes to Mr. Raja and his team of carpenters, who executed the work with great skill and precision. The finishing, quality, and timely delivery exceeded our expectations. Overall, I am very happy with the outcome and highly recommend Kolorstones Home Interiors to anyone looking for reliable, professional, and high-quality interior work. I also hope to receive their continued support for my interior needs in the future.,"
  },
  {
    "name": "sakthi sakthi",
    "type": "Client",
    "stars": 5,
    "text": "Thank you so much for transforming our house into a stunning home! Every detail looks amazing, and your team was a pleasure to work with. A huge thank you to you and your entire team for the fantastic work on our home interiors. The quality of work, attention to detail, and timely completion exceeded our expectations.We will gladly recommend your services to our friends and family.,"
  },
  {
    "name": "Nandhu Deepa",
    "type": "Client",
    "stars": 5,
    "text": "We had a wonderful experience working with Fazil for our home interior. He understood our requirements very well and delivered the work beautifully. The attention to detail, quality of work, and professionalism were impressive. Fazil was responsive, helpful, and made the entire process smooth and stress-free. We’re really happy with how our home turned out and would definitely recommend Fazil to anyone looking for quality interior work. Highly recommended👍,"
  },
  {
    "name": "naga arjun",
    "type": "Client",
    "stars": 5,
    "text": "We recently got our modular kitchen done by Kolorstones and the entire experience was fantastic.From start to finish the craftsmanship was very good. Every single cabinet, drawer, and alignment is neat, precise, and beautifully finished. Mr. Fazil and his team were highly professional, always on time and genuinely listened to our requirements. They took care of the smallest details and made sure the kitchen was both highly functional and stunning to look at.,"
  },
  {
    "name": "Abi Saravanan",
    "type": "Client",
    "stars": 5,
    "text": "I had a wonderful experience with Kolorstones Home Interiors. They completed my home project including the TV unit and modular kitchen, and the results were excellent. The team was very friendly, professional, and easy to communicate with throughout the process. Their work was classy, neat, and well-finished, showing great attention to detail. I was also impressed with how quickly they completed the project without compromising on quality. Highly recommended for anyone looking for stylish and reliable interior work.,"
  },
  {
    "name": "sheela jeba",
    "type": "Client",
    "stars": 5,
    "text": "We recently got our home interiors done by this amazing team, and we are absolutely thrilled with the results. Their dedication to their craft is unmatched—they traveled all the way from Tanjore to Chennai and stayed here to complete the project. Seeing their handmade work come to life was incredible. The level of detail, precision, and artistry they bring is rare to find. Not only is the outcome of the highest quality, but they were also incredibly cost-effective and mindful of our budget. If you are looking for authentic, high-quality, and dedicated interior designers, I cannot recommend them enough!,"
  },
  {
    "name": "sisilee",
    "type": "Client",
    "stars": 5,
    "text": "Excellent work done by kolorstones team. I truly appreciate their perfection in every detail. Their work is remarkably neat and elegantly executed, showing a high level of professionalism throughout. Everything they handled was done with great care, precision, and a refined sense of design. Really appreciate their dedication and the quality they bring.,"
  },
  {
    "name": "Dr Gokul Ravichandran",
    "type": "Client",
    "stars": 5,
    "text": "Had a great experience working with Kolorstone for our home interiors. Mr. Fazil and his team were incredibly professional, flexible, and easy to work with. They were always open to our ideas and made adjustments along the way without any hassle. The project was completed on time, and the attention to detail and quality of work really stood out. Really appreciate their dedication and would definitely recommend them to anyone looking for reliable and stylish interior design services.,"
  },
  {
    "name": "Thiru Shanmugam",
    "type": "Client",
    "stars": 5,
    "text": "Fazil and I worked on a project for 6-7 months in the remote part of thanjavur district starting with conception of the design, to several rounds of iterations on the design. He has been honest and straight forward throughout. What you see on the design is what you will get. Very knowledgeable about colour combinations - what works and will not work. From what I have seen , he is a cut above the rest in terms of class and quality of work output in Thanjavur and surroundings. I shortlisted Fazil after contacting 5-6 people in the area. I would highly recommend Kolorstones if you want to have a quality output with your interior design.,"
  },
  {
    "name": "Nishanth Guna",
    "type": "Client",
    "stars": 5,
    "text": "Searching for a reliable interior designer in Thanjavur can be tough, but Kolorstones interiors is a gem. They are very approachable and patient with changes. They handled everything from the initial 3D design to the final handover perfectly. It’s great to have such high-standard design. They don't just give you a pretty design; they understand materials, plywood quality, and finishes. They provided a very transparent quotation and stuck to the promised timeline. The installation team was very neat and professional. 5 stars for their honesty and craftsmanship.Excellent work by the Kolorstones fasil and team. They are the best interior decorators in the area for a reason—great quality, and on-time delivery. I am very happy with the results. Thank you for the beautiful space. The team really listened to my ideas and made them even better. Highly recommend them for anyone wanting a beautiful change!,"
  },
  {
    "name": "Abarna Janagarajan",
    "type": "Client",
    "stars": 5,
    "text": "I had a fantastic experience working with Kolorstones Home Interiors on my recent project. Their team's dedication to perfection and eye for detail were evident from start to finish. They listened carefully to my ideas and preferences, and their creative solutions transformed my space into something truly special. The quality of their workmanship is exceptional, and the final result exceeded my expectations..I'm absolutely thrilled with Kolorstones interior work and I highly recommend Kolorstones Home Interiors to anyone in search of top-notch interior design services in Thanjavur.,"
  },
  {
    "name": "AKR",
    "type": "Client",
    "stars": 5,
    "text": "Timely supporting team. You can have outstanding results, if you are explaining your designs and themes in well advance.,"
  },
  {
    "name": "Ruby soma",
    "type": "Client",
    "stars": 5,
    "text": "6 mnths before I did interior work for my new house by kolorstones home interior, seriously when anyone came to my house they keep asking me who is ur interior designer, bcoz it looks so elegant and nice. And the most important thing is, they solve my queries and prblms about the wrk instantly without any delay. They did their work very clean and quickly. So,they are one of the best choice for doing ur interior wkrs.My many thanks for the team for making my house as looks so beautiful.,"
  },
  {
    "name": "Amarnath R",
    "type": "Client",
    "stars": 5,
    "text": "Looking for top-notch interior design services in Thanjavur? Look no further! I recently had the pleasure of working with the fantastic team at Kolorstones home interiors for my home renovation project. Their skilled interior decorators in Thanjavur truly transformed my space into a modern masterpiece. The modular kitchen they installed is not only functional but also incredibly stylish. From conceptualization to execution, every step of the process was handled with utmost professionalism and attention to detail. I highly recommend Kolorstones home interiors to anyone seeking top-tier interior designers in Thanjavur. You won't be disappointed.,"
  },
  {
    "name": "Surya",
    "type": "Client",
    "stars": 5,
    "text": "Kolorstone Home Interior did a fantastic job on our modular kitchen, TV unit, and wardrobe! Fazil had collected our needs and helped us create a cohesive look that perfectly fits our style. The quality of the materials used and the craftsmanship are impressive, giving a high-end finish to each piece. We especially love the functionality of the kitchen layout and the custom storage solutions in the wardrobe, which help keep our space organized. However, there were a few concerns. Kolorstone was quick to address any concerns, and the end result was well worth it. Overall, we’re thrilled with the transformation Kolorstone brought to our home!,"
  },
  {
    "name": "Sriram Vasudev",
    "type": "Client",
    "stars": 5,
    "text": "Affordable Interiors in Thanjavur truly lives up to their name! Not only are they the best interior designers in Thanjavur, but their prices are also unbeatable. Their team's creativity, professionalism, and commitment to customer satisfaction set them apart. Highly recommend,"
  },
  {
    "name": "Sindhiya N",
    "type": "Client",
    "stars": 5,
    "text": "I had a great experience with the team. They maintain the standard till the last day of execution. Quality of products is also good. I had a most comfortable experience with great output. Keep up your good work.,"
  },
  {
    "name": "abdub ajeez",
    "type": "Client",
    "stars": 5,
    "text": "We are delighted to share that the interior of our dream home — a lifelong ambition — was beautifully designed and completed with the help of Kolorstones. Mr. Fazil and his dedicated team worked with us in the best possible way, delivering exceptional quality, innovative ideas, and unwavering commitment throughout the project. On behalf of our entire family, we extend our sincere and heartfelt gratitude to Mr. Fazil and his team for being an integral part of our dream and helping us make it a reality. Words cannot truly express our appreciation — thank you for treating our dream home as your own and for your outstanding effort in completing every detail of the interior decoration. With heartfelt thanks, Abdul Ajeez & Family,"
  },
  {
    "name": "Singaravelu R",
    "type": "Client",
    "stars": 5,
    "text": "Kolorstones Home Interiors transformed our new house beautifully with their exceptional interior design and modular kitchen work. From start to finish, their team was professional, attentive, and committed to quality. They took our ideas and elevated them with their creativity, ensuring every detail was perfect. The craftsmanship and precision in their work truly stand out, and their dedication to customer satisfaction made the whole experience a pleasure. Highly recommend Kolorstones for anyone looking to make their home stylish and functional!,"
  },
  {
    "name": "Venkateshwar Rajendran",
    "type": "Client",
    "stars": 5,
    "text": "I'm happy to provide you with a review of Kolorstones Home Interiors. First and foremost, I must say that I am impressed with the quality of work done by Kolorstones Home Interiors. Their attention to detail is superb, and the finished product reflects the time and effort they put into each project. Moreover, Kolorstones Home Interiors offers their services at an affordable price point, making them a great option for those who are on a budget. Despite their reasonable rates, they never compromise on the quality of materials or craftsmanship, which is something that sets them apart from other companies in the industry. What I appreciate most about Kolorstones Home Interiors is their willingness to work closely with their clients to create customized solutions that perfectly meet their needs. They take the time to understand their clients' preferences and offer tailored design options to help them achieve their desired outcome. Finally, I must mention the level of professionalism that Kolorstones Home Interiors brings to each project. From their timely communication to their punctuality and work ethic, they always maintain the highest standards of professionalism throughout the entire process. Overall, I highly recommend Kolorstones Home Interiors for anyone looking for a well-done, budget-friendly, and customized home interior design solution. They are truly professionals in their field, and I have no doubt that they will exceed your expectations.,"
  },
  {
    "name": "sembiyan R",
    "type": "Client",
    "stars": 5,
    "text": "Wow, you've done an amazing job! Our home looks stunning! I'm absolutely thrilled with the final result. Thank you for your incredible work! You've exceeded our expectations! The interior design is perfect. Dear fazil we wanted to express our heartfelt thanks for the fantastic job you did on our home's interior design like Modular kitchen ,3 Bedroom wardrobe, Tv unit , wall paneling , pooja room, window screen work and falseceiling It's beautiful! just wanted to say thanks again for the amazing work on our home. We love it! Highly recommended! Their interior design skills are top-notch.,"
  },
  {
    "name": "Nithya Nagarajan",
    "type": "Client",
    "stars": 5,
    "text": "If you are looking for home interior for your home, then kolorstones is the best choice. They did their work fantastically. They fulfill our needs without any hesitation. They complete the work within time with perfect finish. I like the work they did. Thank you Fazil sir for your guidance.,"
  },
  {
    "name": "Gunamala",
    "type": "Client",
    "stars": 5,
    "text": "Absolutely excellent! Kolorstones home designer and their team were knowledgeable with both traditional space planning codes as well as keeping a refined high-style look that fit our budget. Because of their fast, fun, and friendly service plus their living room design and floor plans, I would definitely recommend their team to a friend.,"
  },
  {
    "name": "Mohamad jubair K",
    "type": "Client",
    "stars": 5,
    "text": "Absolutely thrilled with the work done by Kolorstones Home Interiors. They transformed my space into a stylish and functional haven. The attention to detail and quality craftsmanship are truly commendable.,"
  },
  {
    "name": "Mani Balan",
    "type": "Client",
    "stars": 5,
    "text": "The work was neat and well done. The project was delivered on time without any delay. Kolorhomes provided a hassle-free service. I look forward to working with them again in the future.,"
  },
  {
    "name": "Vignesh B R",
    "type": "Client",
    "stars": 5,
    "text": "KOLORSTONES HOME INTERIORS THEY truly worked wonders in transforming our living space into an absolute masterpiece! Their expertise and attention to detail are evident in every corner, creating an ambiance that exceeds our wildest dreams. From conceptualization to execution, their team has been professional, innovative, and dedicated to delivering excellence. The result is a living space that not only meets but exceeds our expectations, becoming the envy of all who visit. Highly recommend Kolorstones Home Interiors to anyone looking to elevate their home into a work of art.,"
  },
  {
    "name": "Dinesh Kumar",
    "type": "Client",
    "stars": 5,
    "text": "I have searched many interior companies in and around Tanjore for my dream home . Am happy that I finally found a valuable and reasonable company. They completed the work on time and they are very professional. Designs and outcome is as expected and am fully satisfied. I will definitely refer them to my family and friends personally. Good work Fazil.,"
  },
  {
    "name": "kiranmai garni",
    "type": "Client",
    "stars": 4,
    "text": "Havenly was a great way to decorate and plan for my new home! The designer listened to all my feedback and had very quick responses, making adjustments as we went along. I really like the way they did ,amazing work and good experience with them,"
  },
  {
    "name": "Uma Raje",
    "type": "Client",
    "stars": 5,
    "text": "I highly recommend kolorstones interiors for their quality modular kitchen and the entire interior work. They finished the work within the promised time and used the quality materials. We are happy and satisfied with their work. Keep up the good Job! All the best..,"
  },
  {
    "name": "Priya Darshini",
    "type": "Client",
    "stars": 5,
    "text": "I highly recommend Kolorstones Home Interior design for Astounding designs for our home. The designer finished the work in short period of time with affordable price and I had a good experience with them ,"
  },
  {
    "name": "Suresh S",
    "type": "Client",
    "stars": 5,
    "text": "Highly impressed with our modular kitchen from Kolorstones home interiors Exceptional design, quality materials, and outstanding customer service. Couldn't be happier.,"
  },
  {
    "name": "Kennady Kennady",
    "type": "Client",
    "stars": 5,
    "text": "I'm done modular kitchen,wardrobes,TV unit and loft closing these all comes 3.25 lakhs.They are best interior design in Thanjavur. Thank you fazil.,"
  },
  {
    "name": "Karthick Eyan",
    "type": "Client",
    "stars": 5,
    "text": "Kolorstones Home Interiors has outdone themselves with this kitchen transformation. The seamless integration of modern design elements and practical functionality is truly remarkable. From the sleek cabinetry to the exquisite countertop choices, every detail reflects a commitment to quality craftsmanship. The strategic layout optimization maximizes space efficiency without compromising on style. The cohesive color scheme and lighting design create an inviting ambiance that enhances the overall aesthetic appeal. It's evident that meticulous attention to detail went into every aspect of this project, resulting in a kitchen that is both stunning and practical. Kudos to Kolorstones Home Interiors for their outstanding work in creating a space that is sure to be the heart of the home for years to come.,"
  },
  {
    "name": "THIRU",
    "type": "Client",
    "stars": 5,
    "text": "From consultation to installation, Kolorstones Home Interiors provided professional and personalized service that transformed my space into a beautiful haven.,"
  },
  {
    "name": "Pradeeban",
    "type": "Client",
    "stars": 5,
    "text": "very excellent and good job . modular kitchen and interior good quality and skill work i give rating 100/100 .thank u keep it up your team work,"
  },
  {
    "name": "ishwarya mathi",
    "type": "Client",
    "stars": 5,
    "text": "Very professionally measured, manufactured and fitted to the budget. Quality is fully taken care of. Very positive sales team provide onsite monitoring and feedback to customer.,"
  },
  {
    "name": "K Ajay",
    "type": "Client",
    "stars": 5,
    "text": "The service was excellent, and the team executed the plan precisely as instructed. The timing and overall execution were well-handled and impressive.,"
  },
  {
    "name": "Mariya Claris",
    "type": "Client",
    "stars": 5,
    "text": "The designer was always responsive and communicative , making the entire process smooth and stress free . Thank you very much.,"
  },
  {
    "name": "Jabarson Jeffry",
    "type": "Client",
    "stars": 5,
    "text": "Excellent work executed seamlessly. The quality control was consistently good,"
  },
  {
    "name": "MILTAN CNC",
    "type": "Client",
    "stars": 5,
    "text": "I'm doing cnc work for him. They doing well & having excellent interior ideas. ,"
  },
  {
    "name": "Sasi Mohan",
    "type": "Client",
    "stars": 5,
    "text": "@kolorstoneinteriors they providing unique designs & quality services thank you ,"
  },
  {
    "name": "Mohan Raj",
    "type": "Client",
    "stars": 5,
    "text": "Impressed by their ability to work within my budget without compromising on quality ,"
  },
  {
    "name": "hiba fathima",
    "type": "Client",
    "stars": 5,
    "text": "The quality and the service of pencilkart is incredible,"
  },
  {
    "name": "iampossible",
    "type": "Client",
    "stars": 5,
    "text": "Very creative and innovative design. Designer was very responsible at work😍 ,"
  },
  {
    "name": "Riyaz Ahamed",
    "type": "Client",
    "stars": 4,
    "text": "Very creative and innovative design. Designer was very responsible at work😍,"
  },
  {
    "name": "Razia begum",
    "type": "Client",
    "stars": 5,
    "text": "Awesome 👍,"
  },
  {
    "name": "Vembayan",
    "type": "Client",
    "stars": 5,
    "text": "Excellent work , on time delivery,"
  },
  {
    "name": "TAMIL SELVAN",
    "type": "Client",
    "stars": 5,
    "text": "Good decorater implement new things,"
  },
  {
    "name": "Vijaykanth V",
    "type": "Client",
    "stars": 4,
    "text": "Good 👍🏻,"
  },
  {
    "name": "Kavinila",
    "type": "Client",
    "stars": 5,
    "text": "Good quality best service and low budget,"
  },
  {
    "name": "hari priya",
    "type": "Client",
    "stars": 4,
    "text": "Product was classic ad gives awesome look ,"
  },
  {
    "name": "Jaga jayaraman",
    "type": "Client",
    "stars": 4,
    "text": "Nice work and schedule delivery on time,"
  },
  {
    "name": "stephen raj S",
    "type": "Client",
    "stars": 5,
    "text": "best interior designer in tanjore,"
  },
  {
    "name": "Vip Vinoth",
    "type": "Client",
    "stars": 5,
    "text": "Good quality and good value super,"
  },
  {
    "name": "Shri Pooja",
    "type": "Client",
    "stars": 5,
    "text": "Excellent work,"
  },
  {
    "name": "abinaya ramamoorthy",
    "type": "Client",
    "stars": 5,
    "text": "I would strongly recommend Mr.Fazil for all sorts of interior work. He is very much professional and phenomenal in his work .His way of working is very good and because of his perfect planning there is no delay in his work .The labour management is very good and they also did their work without any delay. Without second thought, we can directly call him for any interior related works.,"
  },
  {
    "name": "sathiya aravinthan",
    "type": "Client",
    "stars": 5,
    "text": "Good Job,"
  },
  {
    "name": "Aravinthan Venu",
    "type": "Client",
    "stars": 5,
    "text": "EXCELLENT WORK 🤩🙏,"
  },
  {
    "name": "SD JOCKEY",
    "type": "Client",
    "stars": 5,
    "text": "Positive Professionalism,"
  },
  {
    "name": "Raj",
    "type": "Client",
    "stars": 5,
    "text": "Positive Value,"
  },
  {
    "name": "Nivas Kalaichelvan",
    "type": "Client",
    "stars": 5,
    "text": "Positive Quality Services Bedroom design, Interior painting,"
  },
  {
    "name": "SIVASANKAR",
    "type": "Client",
    "stars": 5,
    "text": "Positive Responsiveness,"
  },
  {
    "name": "jibin shaji",
    "type": "Client",
    "stars": 5,
    "text": "Positive Quality, Professionalism,"
  },
  {
    "name": "Abhishek Gnanasekaran",
    "type": "Client",
    "stars": 5,
    "text": "Positive Responsiveness, Punctuality, Quality, Professionalism, Value,"
  },
  {
    "name": "Chandrasekaran",
    "type": "Client",
    "stars": 5,
    "text": "Positive Responsiveness, Punctuality, Quality, Professionalism, Value,"
  },
  {
    "name": "Sageethan Sathish",
    "type": "Client",
    "stars": 5,
    "text": "Positive Responsiveness, Punctuality, Quality, Professionalism, Value,"
  },
  {
    "name": "Sharukhan Sharuk",
    "type": "Client",
    "stars": 5,
    "text": "Positive Professionalism Services Refurbishment, Service not listed,"
  },
  {
    "name": "Bala Ganesh",
    "type": "Client",
    "stars": 4,
    "text": "Positive Quality, Professionalism, Value,"
  },
  {
    "name": "M.Shanmugam",
    "type": "Client",
    "stars": 5,
    "text": "Positive Quality, Professionalism,"
  },
  {
    "name": "Siva Saminathan",
    "type": "Client",
    "stars": 5,
    "text": "Positive Quality,"
  },
  {
    "name": "Vishnu Divi",
    "type": "Client",
    "stars": 5,
    "text": "Positive Quality,"
  },
  {
    "name": "Jaya Suruthi",
    "type": "Client",
    "stars": 5,
    "text": "Positive Responsiveness, Punctuality, Quality, Professionalism, Value,"
  },
  {
    "name": "britto arockiaraj",
    "type": "Client",
    "stars": 5,
    "text": "Great service,"
  },
  {
    "name": "Noura Fathima",
    "type": "Client",
    "stars": 5,
    "text": "Amazing,"
  },
  {
    "name": "Minhal Pv",
    "type": "Client",
    "stars": 5,
    "text": "Good,"
  },
  {
    "name": "Abhinav SB",
    "type": "Client",
    "stars": 5,
    "text": "Recommended,"
  },
  {
    "name": "Alen Alex",
    "type": "Client",
    "stars": 5,
    "text": "Excellent,"
  },
  {
    "name": "Darmendra Kumar",
    "type": "Client",
    "stars": 5,
    "text": "Nice work,"
  },
  {
    "name": "maheshwari devi",
    "type": "Client",
    "stars": 5,
    "text": "Very nice,"
  },
  {
    "name": "sri krishnan",
    "type": "Client",
    "stars": 5,
    "text": "Highly recommend,"
  },
  {
    "name": "veera sithiran",
    "type": "Client",
    "stars": 5,
    "text": "Perfect,"
  },
  {
    "name": "rajesh raj",
    "type": "Client",
    "stars": 5,
    "text": "Good,"
  },
  {
    "name": "siva prasath",
    "type": "Client",
    "stars": 5,
    "text": "Good quality,"
  },
  {
    "name": "vicky sv",
    "type": "Client",
    "stars": 5,
    "text": "Value for money,"
  },
  {
    "name": "makranth chavan",
    "type": "Client",
    "stars": 5,
    "text": "Happy with the work,"
  },
  {
    "name": "Praveen A",
    "type": "Client",
    "stars": 5,
    "text": "Good response,"
  },
  {
    "name": "Srimathy",
    "type": "Client",
    "stars": 5,
    "text": "Beautiful interiors,"
  },
  {
    "name": "UIC Interiors",
    "type": "Client",
    "stars": 5,
    "text": "Good,"
  },
  {
    "name": "Mohamed Fayaz",
    "type": "Client",
    "stars": 5,
    "text": "Best interiors,"
  },
  {
    "name": "Praveen Kumar",
    "type": "Client",
    "stars": 5,
    "text": "Good,"
  }
];

export const INSTA = [
  "photo-1600210492486-724fe5c67fb0", "photo-1556909114-f6e7ad7d3136", "photo-1616594039964-ae9021a400a0",
  "photo-1618219908412-a29a1bb7b86e", "photo-1497366216548-37526070297c", "photo-1617806118233-18e1de247200",
];

export type Faq = { q: string; a: string };
export const HOME_FAQS: Faq[] = [
  { q: "Which areas do you serve for interior design?", a: "Our studio is in Nanjikottai, Thanjavur, and we design and execute interiors across Thanjavur, Trichy (Tiruchirappalli), Kumbakonam, Pattukkottai, Mannargudi, Pudukkottai, Tiruvarur, Mayiladuthurai, Karur, Perambalur, Ariyalur and nearby towns." },
  { q: "What interior design services do you offer?", a: "We offer residential interiors, modular kitchens, office and commercial interiors, and turnkey execution that covers design, material selection and on-site work through to handover." },
  { q: "How does an interior design project with Kolorstones begin?", a: "It starts with a consultation and a site visit. We then prepare the concept and design, finalise materials with you, execute the work and complete a final handover." },
  { q: "Can I get a quote before committing?", a: "Yes. Share your space, requirements and approximate budget through the enquiry form or WhatsApp, and we will get back to you with the next steps." },
  { q: "Do you handle both design and execution?", a: "Yes. Our turnkey service means one team looks after design, material selection and on-site execution so you are not coordinating multiple vendors." },
  { q: "How can I contact Kolorstones Home Interiors?", a: "Call or WhatsApp +91 91591 15197, use the enquiry form on this website, or message us on Instagram at @kolorstones_home_interiors." },
];
