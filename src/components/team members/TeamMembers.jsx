import "./teamMembers.scss";


//Team_members section but need to change to Team Members list
export default function TeamMembers() {
  const data = [
    {
      _id: "62b1808b50df28075d3e4bf0",
      name: "Kelly Johnson",
      title: "Software Developer",
      img:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvhqb3i69c44ulCAy2_338Xweupn7yrSD6w&usqp=CAU"
  },
  {
      _id: "62b180e0bceb337f7602ebec",
      name: "Jessica Park",
      title: "Backend Developer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9VsitKjqDNpy8AH8gGBdx9Yp2Tx0mu-BAVtP7592h5l64oJSYxgp-598VP7O_FHPJ8O8&usqp=CAU"
  },

  {
      _id: "62b1818e50df28075d3e4bf4",
      name: "Emily Cruz",
      title: "Full Stack Developer",
      img: "https://cdn1.vectorstock.com/i/1000x1000/54/70/cute-woman-face-cartoon-vector-23305470.jpg"
  },
  {
      _id: "62b181cb50df28075d3e4bf6",
      name: "Nick Jonas",
      title: "Backend Developer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9l9r0uF7ih93efiXmBuS2opFZba7DsqbfCRoQkf79BdFK-KSxH4awqesBTXVqBsApE0M&usqp=CAU"
  },
  {
      _id: "62b181e850df28075d3e4bf9",
      name: "Amy Miller",
      title: "Software Developer",
      img : "https://www.azutura.com/media/catalog/product/cache/47/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-42884_WP.jpg"
  },
  {
      _id: "62b1823150df28075d3e4bfd",
      name: "Pooja Shah",
      title: "Frontend Developer",
      img : "https://i.redd.it/363s26w3nuw51.jpg"
  },
  {
      _id: "62b1836b50df28075d3e4c00",
      name: "Divya Kapoor",
      title: "Full Stack Developer",
      img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdq6w4IdfTLs-CIgDguesYr4gzufjfsRkv0Q&usqp=CAU"
  },
  {
      _id: "62b2442350df28075d3e4c09",
      name: "Alice George",
      title: "Frontend Developer",
      img: "https://as1.ftcdn.net/v2/jpg/01/23/28/78/1000_F_123287835_ESWNRmsqpeTCsJZ7zmgJc5Wm2UwxXDoc.jpg"
      
  },
  { 
      _id: "62b4d956f0081cb8eff76f6b",
      name: "Oliva Brown",
      title: "Backed Developer",
      img: "https://i.pinimg.com/originals/f4/ed/18/f4ed18e4f8c07a1688153de9daa5bd6c.jpg"
  },
  { 
    _id: "62b4e1b8608092fdb1b8e024",
    name: "Shreya Patil",
    title: "Software Developer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlFHOvtSsNY8TI-KWlQFodO3GPj8oJWXQLsI5QKxWMxZoTbBt-Y74Dd2fFTbx0zRgwFmY&usqp=CAU"
  },
  {
    _id: "62b2442350df28075d3e4c09",
    name: "Bianca George",
    title: "Frontend Developer",
    img: "https://media.istockphoto.com/vectors/color-face-formal-woman-icon-vector-id643540284"
},
{ 
    _id: "62b4d956f0081cb8eff76f6b",
    name: "Justin Scott",
    title: "Backed Developer",
    img: "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX37232552.jpg"
},
{ 
  _id: "62b4e1b8608092fdb1b8e024",
  name: "Tina Jain ",
  title: "Software Developer",
  img: "https://thumbs.dreamstime.com/z/black-happy-girls-icon-vector-woman-icon-illustration-face-young-face-people-icons-cartoon-style-people-72080969.jpg"
},

{
  _id: "62b1808b50df28075d3e4bf0",
  name: "Dia Johnson",
  title: "Frontend Developer",
  img:  "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX37232442.jpg"
},
{
  _id: "62b180e0bceb337f7602ebec",
  name: "Jessica Smith",
  title: "Backend Developer",
  img: "https://previews.123rf.com/images/vectorkif/vectorkif1902/vectorkif190200052/116556273-face-expression-of-woman-in-blue-blouse-happy-female-emotion-beautiful-cartoon-character-vector-illu.jpg"
},

{
  _id: "62b1818e50df28075d3e4bf4",
  name: "Lilly Williams",
  title: "Frontend developer",
  img: "https://i.pinimg.com/originals/de/99/93/de9993e752fc52646579448542c411d3.jpg",
},
{
  _id: "62b181cb50df28075d3e4bf6",
  name: "Nick Miller",
  title: "Backend Developer",
  img: "https://thumbs.dreamstime.com/b/cute-man-face-cartoon-cute-man-face-cartoon-vector-illustration-graphic-design-135024353.jpg",
  
},
{
  _id: "62b181e850df28075d3e4bf9",
  name: "Pia Sharma",
  title: "Full Stack Developer",
  img : "https://www.azutura.com/media/catalog/product/cache/47/image/650x/040ec09b1e35df139433887a97daa66f/W/S/WS-42884_WP.jpg"
},
{
  _id: "62b1823150df28075d3e4bfd",
  name: "Dimple Khan",
  title: "Frontend Developer",
  img : "https://i.redd.it/363s26w3nuw51.jpg"
},
{
  _id: "62b1836b50df28075d3e4c00",
  name: "Priya Kapoor",
  title: "Full Stack Developer",
  img: "https://thumbs.dreamstime.com/b/businesswoman-25359554.jpg",
},
{
  _id: "62b2442350df28075d3e4c09",
  name: "Mathew Brown",
  title: "Frontend Developer",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCfRtjcYoNSQCg_nC7IMVuv0rKaSW0puAetQ&usqp=CAU"

  
},
{ 
  _id: "62b4d956f0081cb8eff76f6b",
  name: "Maria Garcia",
  title: "Backed Developer",
  img: "https://thumbs.dreamstime.com/z/woman-avatar-smiling-face-female-cartoon-character-happy-young-girl-beautiful-people-icon-120322413.jpg"
},
{ 
_id: "62b4e1b8608092fdb1b8e024",
name: "Jenny Rodriguez",
title: "Software Developer",
img: "https://media.istockphoto.com/vectors/woman-avatar-with-smiling-face-female-cartoon-character-businesswoman-vector-id991362470"
},
{
_id: "62b2442350df28075d3e4c09",
name: "Arti khan",
title: "Frontend Developer",
img: "https://media.istockphoto.com/vectors/woman-avatar-with-smiling-face-female-cartoon-character-businesswoman-vector-id991355454"

},
{ 
_id: "62b4d956f0081cb8eff76f6b",
name: "Blossom Clark",
title: "Backed Developer",
img : " https://previews.123rf.com/images/alexutemov/alexutemov1605/alexutemov160500104/56445241-beautiful-happy-woman-face-character-vector-illustration-happy-woman-beauty-portrait-female-face-and.jpg"
},
{ 
_id: "62b4e1b8608092fdb1b8e024",
name: "Catherine Wilson",
title: "Software Developer",
img : "https://cdn2.vectorstock.com/i/1000x1000/43/76/young-woman-face-cartoon-vector-23674376.jpg"
},
{ 
  _id: "62b4e1b8608092fdb1b8e024",
  name: "John David ",
  title: "Software Developer",
  img : "https://veatechnologies.com/wp-content/uploads/2021/04/adam_avatar.png"
  },
  { 
    _id: "62b4e1b8608092fdb1b8e024",
    name: "Thomas Jones",
    title: "Software Developer",
    img : "https://previews.123rf.com/images/jemastock/jemastock1706/jemastock170610978/80340379-portrait-man-cartoon-business-employee-character-vector-illustration.jpg"
  },
  { 
    _id: "62b4e1b8608092fdb1b8e024",
    name: "Joseph Taylor",
    title: "Software Developer",
    img : "https://thumbs.dreamstime.com/b/young-man-avatar-character-male-face-portrait-cartoon-person-vector-illustration-adult-design-human-people-attractive-casual-guy-100786465.jpg"
  },
  { 
    _id: "62b4e1b8608092fdb1b8e024",
    name: "Liam Carter",
    title: "Software Developer",
    img : "https://cdn1.vectorstock.com/i/1000x1000/53/70/young-male-cartoon-design-vector-9775370.jpg"
  },

  
  ];
  return (
    <div className="teamMembers" id="teamMembers">
      <br></br><br></br>
      <h1> Team  Members </h1>
      <br></br><br></br><br></br>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
