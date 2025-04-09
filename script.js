// Animation on scroll
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          }
      });
  }, {
      threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));
});
// تأثير الأنيميشن عند الظهور
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          }
      });
  }, {
      threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));
});

// نافذة الترحيب
function closeModal() {
  document.getElementById('welcomeModal').style.display = 'none';
}

// وظيفة لتبديل حالة الإعلان (إخفاء أو إظهار)
function toggleAd() {
    var ad = document.getElementById('sideAd');
    ad.classList.toggle('hide');
}
// ✅ عداد مباشر للمشتركين / المتابعين من رابط خارجي (محاكاة)
const counterBox = document.getElementById("counter");
const incrementValue = 50;
const targetValue = 55000; 

// رابط العداد الخارجي (هنا سنحاكيه)
const followersUrl = 'https://www.youtube.com/@AbuSwe7l';

// وظيفة لجلب العداد من الرابط (هنا محاكاة)
function fetchFollowerCount() {
  fetch(followersUrl)
    .then(response => response.json())
    .then(data => {
      const currentFollowers = data.followers;
      updateCounter(currentFollowers);
    })
    .catch(error => {
      console.error("Error fetching follower count:", error);
    });
}

function updateCounter(currentFollowers) {
  if (currentFollowers < targetValue) {
    currentFollowers += incrementValue;
    counterBox.innerText = currentFollowers.toLocaleString();
  } else {
    counterBox.innerText = targetValue.toLocaleString(); 
    clearInterval(counterInterval); 
  }
}

// التحديث كل نصف ثانية (500ms)
const counterInterval = setInterval(() => fetchFollowerCount(), 500);
