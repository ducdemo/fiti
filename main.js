// const socket = new WebSocket('ws://yourserver.com/chat');

// socket.addEventListener('open', function (event) {
//     console.log('Connected to WebSocket server');
// });

// // Nhận tin nhắn từ server
// socket.addEventListener('message', function (event) {
//     const messageData = JSON.parse(event.data);
//     displayMessage(messageData);
// });

// // Gửi tin nhắn
// document.getElementById('chat-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const messageInput = document.getElementById('message-input');
//     const messageText = messageInput.value;
//     const mediaFile = document.getElementById('media').files[0];

//     if (mediaFile) {
//         // Upload file media lên server trước khi gửi
//         uploadMedia(mediaFile, function(mediaUrl) {
//             const messageData = {
//                 message: messageText,
//                 media_url: mediaUrl
//             };
//             socket.send(JSON.stringify(messageData));
//             displayMessage(messageData, 'sent');
//         });
//     } else {
//         const messageData = {
//             message: messageText
//         };
//         socket.send(JSON.stringify(messageData));
//             displayMessage(messageData, 'sent');
//             messageInput.value = ''; // Xóa nội dung sau khi gửi
//         }
//     });
    
//     function displayMessage(messageData, type = 'received') {
//         const chatMessages = document.getElementById('chat-messages');
//         const messageElement = document.createElement('div');
//         messageElement.classList.add('message', type);
    
//         // Kiểm tra nếu có file media
//         if (messageData.media_url) {
//             const mediaElement = document.createElement('img');
//             mediaElement.src = messageData.media_url;
//             mediaElement.style.maxWidth = '100%'; // Đảm bảo media vừa khung
//             messageElement.appendChild(mediaElement);
//         }
    
//         // Thêm nội dung tin nhắn
//         if (messageData.message) {
//             const textElement = document.createElement('p');
//             textElement.textContent = messageData.message;
//             messageElement.appendChild(textElement);
//         }
    
//         chatMessages.appendChild(messageElement);
//         chatMessages.scrollTop = chatMessages.scrollHeight; // Tự động scroll xuống cuối
//     }
    
//     // Hàm upload media lên server
//     function uploadMedia(file, callback) {
//         const formData = new FormData();
//         formData.append('media', file);
    
//         fetch('/upload_media', {
//             method: 'POST',
//             body: formData
//         })
//         .then(response => response.json())
//         .then(data => {
//             callback(data.media_url); // Trả lại URL sau khi upload thành công
//         })
//         .catch(error => {
//             console.error('Error uploading media:', error);
//         });
//     }
var a= 10
    console.log(a)
    