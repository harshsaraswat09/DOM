const users = [
  {
    fullName: "Gaurii Chaudhary",
    image: "https://i.pinimg.com/1200x/6f/fc/6e/6ffc6e9e5a20bb4f0f1e104072f7549f.jpg",
    profession: "Full Stack Developer",
    description: "A passionate MERN stack developer who loves building scalable web applications and solving real-world problems.",
    tags: ["JavaScript", "React", "Node.js", "MongoDB"]
  },
  {
    fullName: "pranjal khajuria",
    image: "https://i.pinimg.com/1200x/b5/8a/f6/b58af63dd51c31bd90183c9f1adcb503.jpg",
    profession: "UI/UX Designer",
    description: "Creative designer focused on user-centered design with a strong eye for visuals and clean interfaces.",
    tags: ["Figma", "Adobe XD", "UI Design", "UX Research"]
  },
  {
    fullName: "Urmila Biswal",
    image: "https://i.pinimg.com/736x/1e/f6/f4/1ef6f44843e42410d0d0811481651e1c.jpg",
    profession: "Data Analyst",
    description: "Data-driven analyst who turns complex data into meaningful business insights.",
    tags: ["Python", "Pandas", "SQL", "Power BI"]
  },
  {
    fullName: "sahanaa",
    image: "https://i.pinimg.com/736x/6c/48/81/6c48814b8a89e3777811b2cb59896563.jpg",
    profession: "Digital Marketer",
    description: "Growth-focused digital marketer with expertise in SEO, content strategy, and social media branding.",
    tags: ["SEO", "Content Marketing", "Google Ads", "Branding"]
  },

];


var sum = ''


users.forEach(function(elem){
    sum = sum + `<div class="card">
            <img src="${elem.image}" alt="">
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`
})

var main = document.querySelector('main')

main.innerHTML = sum