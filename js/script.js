// ฟังก์ชันสำหรับโหลดแผนที่ (Google Maps)
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 18.7962, lng: 98.9817 }, // พิกัดของมหาวิทยาลัยเชียงใหม่
        zoom: 15
    });
}

// ตัวอย่างฟังก์ชันสำหรับการเปลี่ยนหน้า
function goToPage(page) {
    window.location.href = page + ".html";  // เปลี่ยนหน้าไปยังหน้าที่เลือก
}

// ฟังก์ชันในการจัดการฟอร์ม (สำหรับหน้า Login)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();  // ป้องกันการส่งฟอร์มแบบเดิม

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // ตรวจสอบข้อมูลที่กรอก
    if (username && password) {
        window.location.href = 'homepage.html';  // ไปที่หน้า homepage.html ถ้าข้อมูลถูกต้อง
    } else {
        errorMessage.textContent = "Please enter both username and password!";
    }
});

// ฟังก์ชันสำหรับการบันทึกโปรไฟล์ (ในหน้า Edit Profile)
document.getElementById('editProfileForm').addEventListener('submit', function(e) {
    e.preventDefault();  // ป้องกันการส่งฟอร์มแบบเดิม
    alert("Profile Saved!");  // แสดงข้อความเมื่อบันทึกข้อมูล
    window.location.href = 'profile.html';  // ไปที่หน้า Profile หลังจากบันทึก
});
