const reels = [
  {
    username: "tech_harsh",
    likeCount: 1520,
    isLiked: false,
    commentCount: 128,
    caption: "Built my first JS mini project 🚀",
    video: "./reels/video1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/11.jpg",
    shareCount: 45,
    isFollowed: true
  },
  {
    username: "daily.codes",
    likeCount: 987,
    isLiked: false,
    commentCount: 62,
    caption: "Consistency > Motivation 🔥",
    video: "./reels/video2.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/22.jpg",
    shareCount: 31,
    isFollowed: false
  },
  {
    username: "design.with.me",
    likeCount: 2340,
    isLiked: true,
    commentCount: 210,
    caption: "Minimal UI is the future 🎨",
    video: "./reels/video3.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/33.jpg",
    shareCount: 74,
    isFollowed: true
  },
  {
    username: "fit.lifestyle",
    likeCount: 3210,
    isLiked: false,
    commentCount: 189,
    caption: "No excuses. Just results 💪",
    video: "./reels/video4.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/44.jpg",
    shareCount: 102,
    isFollowed: false
  },
  {
    username: "travel_vibes",
    likeCount: 5480,
    isLiked: true,
    commentCount: 402,
    caption: "Mountains > Everything 🏔️",
    video: "./reels/video5.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/55.jpg",
    shareCount: 190,
    isFollowed: true
  },
  {
    username: "study.grind",
    likeCount: 860,
    isLiked: false,
    commentCount: 47,
    caption: "Late night 공부 mode 📚",
    video: "./reels/video6.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/66.jpg",
    shareCount: 22,
    isFollowed: false
  },
  {
    username: "food.diaries",
    likeCount: 4120,
    isLiked: true,
    commentCount: 315,
    caption: "Street food hits different 😋",
    video: "./reels/video7.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/77.jpg",
    shareCount: 140,
    isFollowed: true
  },
  {
    username: "gym_motivation",
    likeCount: 2645,
    isLiked: false,
    commentCount: 173,
    caption: "Pain today, power tomorrow 🏋️",
    video: "./reels/video8.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/88.jpg",
    shareCount: 66,
    isFollowed: false
  },
  {
    username: "ai.builds",
    likeCount: 1999,
    isLiked: true,
    commentCount: 141,
    caption: "AI projects loading… 🤖",
    video: "./reels/video3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/99.jpg",
    shareCount: 53,
    isFollowed: true
  },
  {
    username: "aesthetic.world",
    likeCount: 6720,
    isLiked: true,
    commentCount: 520,
    caption: "Just vibes, no stress ✨",
    video: "./reels/video5.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/10.jpg",
    shareCount: 245,
    isFollowed: true
  }
];

var allReels = document.querySelector('.all-reels')

function addData(){
    var sum = ''
reels.forEach(function(elem, idx){
    sum = sum + `<div class="reel">
                   <video autoplay loop muted src="${elem.video}"></video>

                   <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class='follow'>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                   </div>
                   <div class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-send-plane-2-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
                            
                        </div>

                   </div>
                </div>` 
})

allReels.innerHTML = sum
}

addData()

allReels.addEventListener('click',function(dets){
    if(dets.target.className == 'like'){
        if(!reels[dets.target.id].isLiked){
            reels[dets.target.id].likeCount++
            reels[dets.target.id].isLiked = true

        }else{
            reels[dets.target.id].likeCount--
            reels[dets.target.id].isLiked = false

        }
        

    }

    if(dets.target.className == 'follow'){
        if(!reels[dets.target.id].isFollowed){
            reels[dets.target.id].isFollowed = true
        }else{
            reels[dets.target.id].isFollowed = false
        }
        
    }

    addData()
})

