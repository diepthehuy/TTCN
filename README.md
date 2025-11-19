<h1>Đồ Án Thực Tập Chuyên Ngành</h1>

<h3>Lệnh đẩy lên git khi code xong.</h3><br>
<b>git add .</b>              -->Add tất cả các file đã thay đổi<br>
<b>git commit -m "loli"</b>    -->Commit xác nhận với chuỗi sau -m là ghi chú<br>
<b>git push -u origin main</b> -->Push lên git repo<br>
<hr>
<img src="https://media.licdn.com/dms/image/v2/D4D12AQFdrroD_wiXPQ/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1685577807754?e=2147483647&v=beta&t=XWomhUs9NoxG6eP6H1Phop_I3wSGkH3emvlkKQocG6w" alt="" width="300" />
<h3>Cách sử dụng Sass.</h3>
<p>Tải <b>Live Sass Compiler</b> trong <b>Extension</b> của <b>Visual Studio Code</b>.</p>
<p>Các định dạng file là các file .scss nằm trong folder sass</p>
<p>Các dạng file cơ bản gồm: <br><b>main.scss</b>: file cha để import các file con của nó và file con nó có dấu gạch trước tên nó<br><b>_colors.scss</b>: gồm định dạng các biến màu cơ bản khi làm web và có thể bô sung thêm<br><b>_mixins.scss</b>: gồm các định dạng function để style<br>Đấy là các file định dạng, sau này viết file sass có tên _component.scss viết css như thường. </p>
<p>Sau khi viết xong sass thì bấm vào Watch Sass nằm phía dưới thanh terminal lúc này nó sẽ tự sinh ra file css và đảm bảo rằng file index.js liên kết vs file css này.</p>
<p>Nếu file css tự sinh nằm ở sai chỗ thì bấm vào File trên thanh bar-->Preferences-->Settings-->search Sass trêm tìm kiếm-->Bấm vào extension của nó-->Bấm edit setting.json-->kiếm và dán thay thế lệnh này vào  "savePath": "/client/src/css"</p>

<h3>Cách chạy server</h3>
<p>Client: npm start</p>
<p>Server: npm run dev</p>
<p>Lưu y: chạy 2 terminal 2 server mỗi terminal cd tới thư mục nó</p>
<p>Nếu mới tải folder project về thì cả client và server cần package của nó để chạy</p>
<p>Tải package: <b>npm install</b> cho mỗi terminal</p>
<p>Cần cẩn thận khi commit và push lên git vì t có thể push code lên rồi và bản đã pull về từ trước của bro bị chậm 1 hoặc vài commit nên không thể push lên được(phải cùng vs bản commit mới nhất) --> Trước mỗi lần code check xem có cập nhất mới gì không nếu có thì pull code đó về rồi hả code</p>
<p>Khi add . thì cần 1 terminal thứ 3 và phải đứng ở folder project chính </p>

<h3>Tasks</h3>
<ul>
    <li>Header✅ </li>
    <li>Login✅ </li>
    <li>Register✅ </li>
    <li>Logout✅ </li>
    <li>LoginFaceBook❌</li>
    <li>LoginGoogle❌</li>
    <li>RegisterFaceBook❌</li>
    <li>RegisterGoogle❌</li>
    <li>Admin thêm/xóa/sửa❌</li>
    <li>Footer❌(in progress by HuyNguyen)</li>
    <li>List❌</li>
    <li>Admin site❌(in progress by HuyDiep)</li>
    <li>Sliders❌</li>
    <li>Ads❌</li>
    <li>Reset Password✅</li>
    <li>Auto refreshToken❌(in progress by HuyDiep)</li>
    <li>Permission❌(in progress by HuyDiep)</li>
    <li>Cart❌</li>
    <li>HomePage❌</li>
    <li>...</li>
</ul>
