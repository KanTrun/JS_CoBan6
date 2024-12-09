// DOM
// DOM EVENTS
// Một tác động nào đó lên thẻ HTML
// Dùng để bắt một sự kiện và thực thi một chương trình
// Cú pháp: element.eventName = function() {}

// --------------------------------------------------
// Danh sách DOM EVENTS phổ biến
// Sự kiện: 
// onload: Khi trình duyệt đã load xong mọi thứ (img, js, css) thì những đoạn code nằm bên trong mới được chạy
// Có nghĩa là nó không cần phải nằm đúng thự tự từ trên xuống thì nó vẫn hiểu lấy từ đâu (thực hiện tất cả rồi mới tới nó)

// ------------------------------------
// onblur: Khi kích hoạt một phần tử mất trọng tâm (Không được focus vào nữa)
// Ví dụ giống như kích ra ngoài khỏi ô text nó sẽ kích hoạt một sự kiện nào đó

// ------------------------------------
// onfocus: Khi kích hoạt một phần tử hiển thị đúng trọng tâm (được focus vào)
// Ví dụ khi nhấn vào đúng trọng tâm ô text nó hiển thị đúng định dạng mà ta đã điều chỉnh

// ------------------------------------
// onkeydown: Kích hoạt khi một phím được nhấn
// Khi nhấn một phím bất kì trên một bàn phím thì nó sẽ kích hoạt một sự kiện nào đó

// ------------------------------------
// onkeyup : Kích hoạt khi một phím được nhả ra
// Ví dụ như khi nhấn một phím vào đó thì sẽ hiển thị biểu tượng phím đó nhưng khi vừa nhả ra nó mới thực hiện code bên trong

// -------------------------------------
// onclick: Kích hoạt trên con chuột vừa nhấn vào phần tử
// Nhấn chuột vào một cái gì đó nó sẽ thực hiện tác vụ nào đấy

// -------------------------------------
// onchange: Kích hoạt khi giá trị được thay đổi khác đi so với giá trị trước đó
// Khi lựa chọn giá trị khác thì nó sẽ thực hiện giá trị vừa lựa chọn

// ------------------------------------------------------------------
// DOM EVENTS LISTENER
// Một element có thể gọi được nhiều sự kiện
// Có thể hủy bỏ lắng nghe sự kiện bất kỳ (Dom Event không thực hiện được)
// Cú pháp: element.addEventListener("eventname", function (e) {})
// eventname: tên sự kiện (bỏ chữ on, ví dụ: onclick -> click) 

// ----------------------------------------------------------------------------
// DOM NAVIGATION
// Thể hiện mối quan hệ cha-con của các thẻ HTML
// Có các thuộc tính:
// parentNode: Truy cập phần tử cha
    // element.parentNode
// childNodes: Truy cập các phần tử con
// firstElementChild: Truy cập vào phần tử con đầu tiên
// lastElementChild: Truy cập vào phần tử con cuối cùng
// nextElementSibling: Truy cập vào phần tử kế tiếp
// previousElementSibling: Truy cập vào phần tử trước đó
// nodeName: Lấy ra tên Node

// ---------------------------------------------------------------------------------------
// DOM NODES
// document.createElement()
// Tạo ra một phần tử HTML ("tagName: tên thẻ (p, h1, div, ...)")
// Cú pháp: var tenBien = document.createElement("tagName")

// -----------------------------------------
// document.createTextNode()
// Tạo ra một chuỗi văn bản
// Cú pháp: var tenBien = document.createTextNode("Nội dung")

// ----------------------------------------------
// appendChild()
// Thêm vị trí cuối cùng của một thẻ HTML khác
// Cú pháp: element_parent.appendChild(node_insert)


