const fs = require('fs');

const rawData = `name:Nirmalkumar Krishna
review:We were planning to do our home interiors from Chennai and were introduced to Kolorstones Home Interiors through a friend. After meeting their team and discussing our ideas, we were really impressed with their response, professionalism, and especially their 3D designs. That gave us the confidence to continue the entire project with them.

I would strongly recommend Kolorstones Home Interiors to anyone looking for modern and stylish interiors. They truly understand customer expectations and will definitely exceed them. The team is highly knowledgeable, professional, and very supportive throughout the project.

One of the best things was that the final output was exactly the same as what they showed in the 3D designs. The quality of materials used was high-end, the workmanship was outstanding, and every detail was perfectly finished. We are 100% satisfied with the work.

Compared to many others, their pricing was also very reasonable without compromising on quality.

Highly recommended for the best interior outputs and modern home designs. Great team and excellent work!,
rating:5,
name: Alfin salam,
review: I recently got my interiors done by Kolorstones Home Interiors, and I must say it was an excellent experience from start to finish. A big thanks to Mr. Fazil and his team for their professionalism, creative ideas, and attention to detail throughout the entire project. They patiently understood our requirements and turned them into a beautiful reality.

Special appreciation also goes to Mr. Raja and his team of carpenters, who executed the work with great skill and precision. The finishing, quality, and timely delivery exceeded our expectations.

Overall, I am very happy with the outcome and highly recommend Kolorstones Home Interiors to anyone looking for reliable, professional, and high-quality interior work. I also hope to receive their continued support for my interior needs in the future.,
rating: 5,

Name: sakthi sakthi,
review: Thank you so much for transforming our house into a stunning home! Every detail looks amazing, and your team was a pleasure to work with.
"A huge thank you to you and your entire team for the fantastic work on our home interiors."
"The quality of work, attention to detail, and timely completion exceeded our expectations.""We will gladly recommend your services to our friends and family.",
rating: 5,
name: Nandhu Deepa,
review: We had a wonderful experience working with Fazil for our home interior. He understood our requirements very well and delivered the work beautifully. The attention to detail, quality of work, and professionalism were impressive. Fazil was responsive, helpful, and made the entire process smooth and stress-free. We’re really happy with how our home turned out and would definitely recommend Fazil to anyone looking for quality interior work. Highly recommended👍,
rating: 5,
name : naga arjun
review:We recently got our modular kitchen done by Kolorstones and the entire experience was fantastic.From start to finish the craftsmanship was very good. Every single cabinet, drawer, and alignment is neat, precise, and beautifully finished. Mr. Fazil and his team were highly professional, always on time and genuinely listened to our requirements. They took care of the smallest details and made sure the kitchen was both highly functional and stunning to look at.,
rating: 5,
name: Abi Saravanan,
review: I had a wonderful experience with Kolorstones Home Interiors. They completed my home project including the TV unit and modular kitchen, and the results were excellent. The team was very friendly, professional, and easy to communicate with throughout the process.

Their work was classy, neat, and well-finished, showing great attention to detail. I was also impressed with how quickly they completed the project without compromising on quality. Highly recommended for anyone looking for stylish and reliable interior work.,
rating: 5,
name: sheela jeba,
review: We recently got our home interiors done by this amazing team, and we are absolutely thrilled with the results. Their dedication to their craft is unmatched—they traveled all the way from Tanjore to Chennai and stayed here to complete the project.

Seeing their handmade work come to life was incredible. The level of detail, precision, and artistry they bring is rare to find. Not only is the outcome of the highest quality, but they were also incredibly cost-effective and mindful of our budget. If you are looking for authentic, high-quality, and dedicated interior designers, I cannot recommend them enough!,
rating: 5,
name: sisilee,
review: Excellent work done by kolorstones team. I truly appreciate their perfection in every detail. Their work is remarkably neat and elegantly executed, showing a high level of professionalism throughout. Everything they handled was done with great care, precision, and a refined sense of design. Really appreciate their dedication and the quality they bring.,
rating: 5,
name: Dr Gokul Ravichandran,
review: Had a great experience working with Kolorstone for our home interiors. Mr. Fazil and his team were incredibly professional, flexible, and easy to work with. They were always open to our ideas and made adjustments along the way without any hassle. The project was completed on time, and the attention to detail and quality of work really stood out. Really appreciate their dedication and would definitely recommend them to anyone looking for reliable and stylish interior design services.,
rating: 5,
name: Thiru Shanmugam,
review: Fazil and I worked on a project for 6-7 months in the remote part of thanjavur district starting with conception of the design, to several rounds of iterations on the design. He has been honest and straight forward throughout. What you see on the design is what you will get. Very knowledgeable about colour combinations - what works and will not work. From what I have seen , he is a cut above the rest in terms of class and quality of work output in Thanjavur and surroundings. I shortlisted Fazil after contacting 5-6 people in the area. I would highly recommend Kolorstones if you want to have a quality output with your interior design.,
rating: 5,
name: Nishanth Guna,
review: Searching for a reliable interior designer in Thanjavur can be tough, but Kolorstones interiors is a gem. They are very approachable and patient with changes. They handled everything from the initial 3D design to the final handover perfectly. It’s great to have such high-standard design. They don't just give you a pretty design; they understand materials, plywood quality, and finishes. They provided a very transparent quotation and stuck to the promised timeline. The installation team was very neat and professional. 5 stars for their honesty and craftsmanship."Excellent work by the Kolorstones fasil and team. They are the best interior decorators in the area for a reason—great quality, and on-time delivery. I am very happy with the results. Thank you for the beautiful space.

The team really listened to my ideas and made them even better. Highly recommend them for anyone wanting a beautiful change!",
rating :5,
name: Abarna Janagarajan,
review: I had a fantastic experience working with Kolorstones Home Interiors on my recent project. Their team's dedication to perfection and eye for detail were evident from start to finish. They listened carefully to my ideas and preferences, and their creative solutions transformed my space into something truly special. The quality of their workmanship is exceptional, and the final result exceeded my expectations..I'm absolutely thrilled with Kolorstones interior work and I highly recommend Kolorstones Home Interiors to anyone in search of top-notch interior design services in Thanjavur.,
rating: 5,
name: AKR,
review: Timely supporting team.
You can have outstanding results, if you are explaining your designs and themes in well advance.,
rating: 5,

name: Ruby soma,
review: 6 mnths before I did interior work for my new house by kolorstones home interior, seriously when anyone came to my house they keep asking me who is ur interior designer, bcoz it looks so elegant and nice. And the most important thing is, they solve my queries and prblms about the wrk instantly without any delay. They did their work very clean and quickly. So,they are one of the best choice for doing ur interior wkrs.My many thanks for the team for making my house as looks so beautiful.,
rating: 5,
name: Amarnath R,
review: Looking for top-notch interior design services in Thanjavur? Look no further! I recently had the pleasure of working with the fantastic team at Kolorstones home interiors for my home renovation project. Their skilled interior decorators in Thanjavur truly transformed my space into a modern masterpiece. The modular kitchen they installed is not only functional but also incredibly stylish. From conceptualization to execution, every step of the process was handled with utmost professionalism and attention to detail. I highly recommend Kolorstones home interiors to anyone seeking top-tier interior designers in Thanjavur. You won't be disappointed.,
rating: 5,
name: Surya,
review: Kolorstone Home Interior did a fantastic job on our modular kitchen, TV unit, and wardrobe! Fazil had collected our needs and helped us create a cohesive look that perfectly fits our style. The quality of the materials used and the craftsmanship are impressive, giving a high-end finish to each piece. We especially love the functionality of the kitchen layout and the custom storage solutions in the wardrobe, which help keep our space organized.
However, there were a few concerns. Kolorstone was quick to address any concerns, and the end result was well worth it. Overall, we’re thrilled with the transformation Kolorstone brought to our home!,
rating: 5,
name: Sriram Vasudev,
review: Affordable Interiors in Thanjavur truly lives up to their name! Not only are they the best interior designers in Thanjavur, but their prices are also unbeatable. Their team's creativity, professionalism, and commitment to customer satisfaction set them apart. Highly recommend,
rating: 5,
name: Sindhiya N,
reivew: I had a great experience with the team. They maintain the standard till the last day of execution. Quality of products is also good. I had a most comfortable experience with great output. Keep up your good work.,
rating: 5,
name: abdub ajeez,
review: We are delighted to share that the interior of our dream home — a lifelong ambition — was beautifully designed and completed with the help of Kolorstones.

Mr. Fazil and his dedicated team worked with us in the best possible way, delivering exceptional quality, innovative ideas, and unwavering commitment throughout the project.

On behalf of our entire family, we extend our sincere and heartfelt gratitude to Mr. Fazil and his team for being an integral part of our dream and helping us make it a reality.

Words cannot truly express our appreciation — thank you for treating our dream home as your own and for your outstanding effort in completing every detail of the interior decoration.

With heartfelt thanks,
Abdul Ajeez & Family,
rating: 5,
name: Singaravelu R,
review: Kolorstones Home Interiors transformed our new house beautifully with their exceptional interior design and modular kitchen work. From start to finish, their team was professional, attentive, and committed to quality. They took our ideas and elevated them with their creativity, ensuring every detail was perfect. The craftsmanship and precision in their work truly stand out, and their dedication to customer satisfaction made the whole experience a pleasure. Highly recommend Kolorstones for anyone looking to make their home stylish and functional!,
rating: 5,
name: Venkateshwar Rajendran,
review: I'm happy to provide you with a review of Kolorstones Home Interiors.

First and foremost, I must say that I am impressed with the quality of work done by Kolorstones Home Interiors. Their attention to detail is superb, and the finished product reflects the time and effort they put into each project.

Moreover, Kolorstones Home Interiors offers their services at an affordable price point, making them a great option for those who are on a budget. Despite their reasonable rates, they never compromise on the quality of materials or craftsmanship, which is something that sets them apart from other companies in the industry.

What I appreciate most about Kolorstones Home Interiors is their willingness to work closely with their clients to create customized solutions that perfectly meet their needs. They take the time to understand their clients' preferences and offer tailored design options to help them achieve their desired outcome.

Finally, I must mention the level of professionalism that Kolorstones Home Interiors brings to each project. From their timely communication to their punctuality and work ethic, they always maintain the highest standards of professionalism throughout the entire process.

Overall, I highly recommend Kolorstones Home Interiors for anyone looking for a well-done, budget-friendly, and customized home interior design solution. They are truly professionals in their field, and I have no doubt that they will exceed your expectations.,
rating: 5,
name: sembiyan R,
review: "Wow, you've done an amazing job! Our home looks stunning!" "I'm absolutely thrilled with the final result. Thank you for your incredible work!" "You've exceeded our expectations! The interior design is perfect."
"Dear fazil we wanted to express our heartfelt thanks for the fantastic job you did on our home's interior design like Modular kitchen ,3 Bedroom wardrobe, Tv unit , wall paneling , pooja room, window screen work and falseceiling It's beautiful!" just wanted to say thanks again for the amazing work on our home. We love it!"
Highly recommended!"
Their interior design skills are top-notch.",
rating: 5,
name: Nithya Nagarajan,
review: If you are looking for home interior for your home, then kolorstones is the best choice. They did their work fantastically. They fulfill our needs without any hesitation. They complete the work within time with perfect finish. I like the work they did. Thank you Fazil sir for your guidance.,
rating: 5,
name: Gunamala,
review: Absolutely excellent! Kolorstones home designer and their team were knowledgeable with both traditional space planning codes as well as keeping a refined high-style look that fit our budget. Because of their fast, fun, and friendly service plus their living room design and floor plans, I would definitely recommend their team to a friend.,
rating: 5,
name: Mohamad jubair K,
review: Absolutely thrilled with the work done by Kolorstones Home Interiors. They transformed my space into a stylish and functional haven. The attention to detail and quality craftsmanship are truly commendable.,
rating: 5,
name: Mani Balan,
review: The work was neat and well done. The project was delivered on time without any delay. Kolorhomes provided a hassle-free service. I look forward to working with them again in the future.,
rating: 5,
name: Vignesh B R,
review: KOLORSTONES HOME INTERIORS

THEY truly worked wonders in transforming our living space into an absolute masterpiece! Their expertise and attention to detail are evident in every corner, creating an ambiance that exceeds our wildest dreams.

From conceptualization to execution, their team has been professional, innovative, and dedicated to delivering excellence.
The result is a living space that not only meets but exceeds our expectations, becoming the envy of all who visit.

Highly recommend Kolorstones Home Interiors to anyone looking to elevate their home into a work of art.,
rating: 5,
name: Dinesh Kumar,
review: I have searched many interior companies in and around Tanjore for my dream home . Am happy that I finally found a valuable and reasonable company. They completed the work on time and they are very professional. Designs and outcome is as expected and am fully satisfied. I will definitely refer them to my family and friends personally. Good work Fazil.,
rating: 5,
name: kiranmai garni,
review: Havenly was a great way to decorate and plan for my new home! The designer listened to all my feedback and had very quick responses, making adjustments as we went along. I really like the way they did ,amazing work and good experience with them,
rating: 4,
name: Uma Raje,
review: I highly recommend kolorstones interiors for their quality modular kitchen and the entire interior work. They finished the work within the promised time and used the quality materials. We are happy and satisfied with their work. Keep up the good Job! All the best..,
rating: 5,
name: Priya Darshini,
review: I highly recommend Kolorstones Home Interior design for Astounding designs for our home. The designer finished the work in short period of time with affordable price and I had a good experience with them
,
rating: 5,
name: Suresh S,
review: Highly impressed with our modular kitchen from Kolorstones home interiors Exceptional design, quality materials, and outstanding customer service. Couldn't be happier.,
rating: 5,
name: Kennady Kennady,
review: I'm done modular kitchen,wardrobes,TV unit and loft closing these all comes 3.25 lakhs.They are best interior design in Thanjavur. Thank you fazil.,
rating: 5,
name: Karthick Eyan,
review: "Kolorstones Home Interiors has outdone themselves with this kitchen transformation. The seamless integration of modern design elements and practical functionality is truly remarkable. From the sleek cabinetry to the exquisite countertop choices, every detail reflects a commitment to quality craftsmanship. The strategic layout optimization maximizes space efficiency without compromising on style. The cohesive color scheme and lighting design create an inviting ambiance that enhances the overall aesthetic appeal. It's evident that meticulous attention to detail went into every aspect of this project, resulting in a kitchen that is both stunning and practical. Kudos to Kolorstones Home Interiors for their outstanding work in creating a space that is sure to be the heart of the home for years to come.",
rating: 5,
name: THIRU,
review: From consultation to installation, Kolorstones Home Interiors provided professional and personalized service that transformed my space into a beautiful haven.,
rating: 5,
name: Pradeeban,
review: very excellent and good job . modular kitchen and interior good quality and skill work i give rating 100/100 .thank u keep it up your team work,
rating: 5,
name: ishwarya mathi,
review: Very professionally measured, manufactured and fitted to the budget. Quality is fully taken care of. Very positive sales team provide onsite monitoring and feedback to customer.,
rating: 5,
name: K Ajay,
review: "The service was excellent, and the team executed the plan precisely as instructed. The timing and overall execution were well-handled and impressive.",
rating: 5,
name: Mariya Claris,
review: The designer was always responsive and communicative , making the entire process smooth and stress free .
Thank you very much.,
rating: 5,
name: Jabarson Jeffry,
review: Excellent work executed seamlessly. The quality control was consistently good,
rating: 5,
name: MILTAN CNC,
review: I'm doing cnc work for him. They doing well & having excellent interior ideas.
,
rating: 5,
name: Sasi Mohan,
review: @kolorstoneinteriors they providing unique designs & quality services thank you
,
rating: 5,
name: Mohan Raj,
review: Impressed by their ability to work within my budget without compromising on quality
,
rating: 5,
name: hiba fathima,
review: The quality and the service of pencilkart is incredible,
rating: 5,
name: iampossible,
review: Very creative and innovative design. Designer was very responsible at work😍
,
rating: 5,
name: Riyaz Ahamed,
review: Very creative and innovative design. Designer was very responsible at work😍,
rating: 4,
name: Razia begum,
review: Awesome 👍,
rating: 5,
name: Vembayan,
review: Excellent work , on time delivery,
rating: 5,
name: TAMIL SELVAN,
review: Good decorater implement new things,
rating: 5,
name: Vijaykanth V,
review: Good 👍🏻,
rating: 4,
name: Kavinila,
review: Good quality best service and low budget,
rating: 5,
name: hari priya,
review: Product was classic ad gives awesome look
,
rating: 4,
name: Jaga jayaraman,
review: Nice work and schedule delivery on time,
rating: 4,
name: stephen raj S,
review: best interior designer in tanjore,
rating: 5,
name: Vip Vinoth,
review:Good quality and good value super,
rating: 5,
name: Shri Pooja,
review : Excellent work,
rating: 5,
name: abinaya ramamoorthy,
review: I would strongly recommend Mr.Fazil for all sorts of interior work. He is very much professional and phenomenal in his work .His way of working is very good and because of his perfect planning there is no delay in his work .The labour management is very good and they also did their work without any delay. Without second thought, we can directly call him for any interior related works.,
rating: 5,
name: sathiya aravinthan,
review: Good Job,
rating: 5,
name: Aravinthan Venu,
review: EXCELLENT WORK 🤩🙏,
rating: 5,
name: SD JOCKEY,
review: Positive Professionalism,
rating: 5,
name: Raj,
review: Positive Value,
rating: 5,
name: Nivas Kalaichelvan,
review: Positive Quality Services Bedroom design, Interior painting,
rating: 5,
name: SIVASANKAR,
review: Positive Responsiveness,
rating: 5,
name: jibin shaji,
review: Positive Quality, Professionalism,
rating: 5,
name: Abhishek Gnanasekaran,
review: Positive Responsiveness, Punctuality, Quality, Professionalism, Value,
rating: 5,
name: Chandrasekaran,
review: Positive Responsiveness, Punctuality, Quality, Professionalism, Value,
rating: 5,
name: Sageethan Sathish,
review: Positive Responsiveness, Punctuality, Quality, Professionalism, Value,
rating: 5,
name: Sharukhan Sharuk,
review: Positive Professionalism Services Refurbishment, Service not listed,
rating: 5,
name: Bala Ganesh,
review: Positive Quality, Professionalism, Value,
rating: 4,
name: M.Shanmugam,
rating: 5,
review: Positive Quality, Professionalism,
name: Siva Saminathan,
rating: 5,
review: Positive Quality,
name: Vishnu Divi,
rating: 5,
review: Positive Quality,
name: Jaya Suruthi,
rating: 5,
review: Positive Responsiveness, Punctuality, Quality, Professionalism, Value,
name: britto arockiaraj,
rating: 5,
review: Great service,
name: Noura Fathima,
rating: 5,
review: Amazing,
name: Minhal Pv,
rating: 5,
review: Good,
name: Abhinav SB,
rating: 5,
review: Recommended,
name: Alen Alex,
rating: 5,
review: Excellent,
name: Darmendra Kumar,
rating: 5,
review: Nice work,
name: maheshwari devi,
rating: 5,
review: Very nice,
name: sri krishnan,
rating: 5,
review: Highly recommend,
name: veera sithiran,
rating: 5,
review: Perfect,
name: rajesh raj,
rating: 5,
review: Good,
name: siva prasath,
rating: 5,
review: Good quality,
name: vicky sv,
rating: 5,
review: Value for money,
name: makranth chavan,
rating: 5,
review: Happy with the work,
name: Praveen A,
rating: 5,
review: Good response,
name: Srimathy,
rating: 5,
review: Beautiful interiors,
name: UIC Interiors,
rating: 5,
review: Good,
name: Mohamed Fayaz,
review: Best interiors,
rating: 5,
name: Praveen Kumar,
rating: 5,
review: Good,
`;

let out = [];
let current = {};
const lines = rawData.split("\n");

for (let i = 0; i < lines.length; i++) {
  let line = lines[i].trim();
  if (!line) continue;
  
  if (line.toLowerCase().startsWith("name:") || line.toLowerCase().startsWith("name :") || line.toLowerCase().startsWith("name")) {
    if (Object.keys(current).length > 0 && current.name) {
      if (!current.review) current.review = "Excellent service.";
      if (!current.rating) current.rating = 5;
      out.push(current);
      current = {};
    }
    const parts = line.split(":");
    current.name = parts.length > 1 ? parts.slice(1).join(":").trim() : parts[0].replace(/name/i, "").trim();
    if(current.name.endsWith(",")) current.name = current.name.slice(0, -1);
  } else if (line.toLowerCase().startsWith("rating:") || line.toLowerCase().startsWith("raitng:") || line.toLowerCase().startsWith("rating :")) {
    let rStr = line.split(":")[1].trim().replace(",","");
    current.rating = parseInt(rStr) || 5;
  } else if (line.toLowerCase().startsWith("review:") || line.toLowerCase().startsWith("reivew:") || line.toLowerCase().startsWith("review :") || line.toLowerCase().startsWith("review")) {
    const parts = line.split(":");
    current.review = parts.length > 1 ? parts.slice(1).join(":").trim() : parts[0].replace(/review/i, "").trim();
  } else {
    if (current.review !== undefined) {
      current.review += " " + line;
    }
  }
}
if (Object.keys(current).length > 0 && current.name) {
  if (!current.review) current.review = "Excellent service.";
  if (!current.rating) current.rating = 5;
  out.push(current);
}

const reviewsFormatted = out.map(o => ({
  name: o.name.replace(/"/g, ""),
  type: "Client",
  stars: o.rating,
  text: o.review.replace(/"/g, "").trim()
}));

const formattedArray = JSON.stringify(reviewsFormatted, null, 2);

const path = require('path');
const p = path.resolve('c:/Users/Asus/Downloads/kolorstones-nextjs/src/lib/data.ts');
let f = fs.readFileSync(p, 'utf8');

const regex = /export const REVIEWS: Review\[\] = \[.*?\];/s;
f = f.replace(regex, 'export const REVIEWS: Review[] = ' + formattedArray + ';');
fs.writeFileSync(p, f);
console.log('Done mapping ' + reviewsFormatted.length + ' reviews.');
