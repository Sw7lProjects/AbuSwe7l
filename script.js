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
//  عداد مباشر باستخدام YouTube Data API
// const counterBox = document.getElementById("counter");

// ضع مفتاح API هنا
// const apiKey = 'YOUR_API_KEY'; // استبدل بـ مفتاحك
// const channelId = 'UCxxxxxxxxxxxxxxxx'; // استبدل بـ ID قناتك

// function fetchFollowerCount() {
// const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;
  
// fetch(url)
//    .then(response => response.json())
//    .then(data => {
//      const subscriberCount = data.items[0].statistics.subscriberCount;ؤؤ
//      updateCounter(subscriberCount);
//    })
//    .catch(error => {
//      console.error("Error fetching follower count:", error);
//    });
// }

// function updateCounter(currentFollowers) {
//  counterBox.innerText = parseInt(currentFollowers).toLocaleString();
// }

// أول تحميل
// fetchFollowerCount();

// تحدث كل دقيقة مثلاً
// setInterval(fetchFollowerCount, 60000); // كل 60 ثانية

// mous

// حذف أي مؤشر سابق
document.querySelectorAll(".cursor").forEach(el => el.remove());

// إنشاء المؤشر
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

// تحريك ناعم
let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  posX += (mouseX - posX) * 0.15;
  posY += (mouseY - posY) * 0.15;
  cursor.style.transform = `translate(${posX}px, ${posY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animateCursor);
}
animateCursor();

// تفاعل مع العناصر
const hoverElements = document.querySelectorAll("a, button, h1, h2, h3, .icons a, p, .profile-info");

hoverElements.forEach(el => {
  el.addEventListener("mouseenter", () => cursor.classList.add("hovered"));
  el.addEventListener("mouseleave", () => cursor.classList.remove("hovered"));
});

// تأثير النقر
document.addEventListener("click", (e) => {
  const ripple = document.createElement("div");
  ripple.className = "click-ripple";
  ripple.style.left = `${e.clientX}px`;
  ripple.style.top = `${e.clientY}px`;
  document.body.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
});

// الشرارة الخلفية
document.addEventListener("mousemove", (e) => {
  const star = document.createElement("div");
  star.className = "star-spark";
  star.style.left = `${e.clientX}px`;
  star.style.top = `${e.clientY}px`;
  document.body.appendChild(star);

  setTimeout(() => star.remove(), 500);
});

// إخفاء اللودر بعد التحميل
window.addEventListener("load", ()=> {
  document.querySelector('.loader').style.opacity = '0';
  setTimeout(() => {
    document.querySelector('.loader').style.display = 'none';
  }, 500);
});
