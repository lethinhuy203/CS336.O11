// main.js
document.addEventListener("DOMContentLoaded", () => {
    // Xử lý sự kiện cho logo để chuyển hướng về trang home.html
    if (document.getElementById('logo-frame')) {
        const logoFrame = document.getElementById('logo-frame');
        logoFrame.addEventListener('click', () => {
        window.location.href = '/';
        });
    }
    // Kiểm tra nếu đang ở trang home.html
    if (document.getElementById('read-more')) {
        const readMore = document.getElementById('read-more');
        const aboutUsSection = document.getElementById('about-us-section');
    
        // Thêm sự kiện click vào "Read more"
        readMore.addEventListener('click', function() {
          // Cuộn trang xuống tới phần "About us"
          aboutUsSection.scrollIntoView({ behavior: 'smooth' });
        });
      }
    // Kiểm tra nếu đang ở trang upload.html
    if (document.getElementById('dropZone')) {
      const dropZone = document.getElementById('dropZone');
      const fileInput = document.getElementById('fileInput');
      const submitBtn = document.getElementById('submitBtn');
  
      // Thêm lớp dragover khi file được kéo vào
      dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('dragover');
      });
  
      // Bỏ lớp dragover khi file được kéo ra
      dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
      });
  
      // Xử lý khi file được thả vào drop zone
      dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
          fileInput.files = files;
          submitBtn.click(); // Tự động submit form khi file được thả vào
        }
      });
  
      // Mở hộp thoại chọn file khi click vào drop zone
      dropZone.addEventListener('click', () => {
        fileInput.click();
      });
  
      // Tự động submit form khi file được chọn
      fileInput.addEventListener('change', () => {
        submitBtn.click();
      });
    }
    // Xử lý sự kiện cho trang result.html
    if (document.getElementById('image-box')) {
        const imageBox = document.getElementById('image-box');
        const fileInput = document.getElementById('fileInput');
        const uploadForm = document.getElementById('uploadForm');

        imageBox.addEventListener('click', () => {
        // Kích hoạt hộp thoại chọn file
        fileInput.click();
        });

        fileInput.addEventListener('change', () => {
        // Tự động submit form khi file được chọn
        uploadForm.submit();
        });
    }
  });
  