var addevent = document.getElementsByClassName("add_icon")[0];
var txt = document.getElementsByClassName("add_text")[0];
var wait = document.getElementsByClassName("wait")[0];
var done = document.getElementsByClassName("done")[0];
var _focus = document.getElementsByClassName("add_text")[0];


addevent.onclick = function () {
  var addcontent = txt.value.trim();
  if (txt.value == "") {
    alert("請輸入待辦事項")
  }
  else {
    addWaitItem(addcontent);
    txt.value = "";
    _focus.focus();
  }
}

// txt.addEventListener("keyup", function (event) {
//   var addcontent = txt.value.trim();
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.keyCode === 13 && txt.value == "") {
//     alert("請輸入待辦事項");
//   }
//   else if (event.keyCode === 13 && txt.value !== ""){
//     addWaitItem(addcontent);
//     txt.value = "";
//     _focus.focus();
//   }
// });

function addWaitItem(content) {
  // 建立節點
  var waitItem = document.createElement("div");
  var waitText = document.createElement("input");
  var waitIcon = document.createElement("div");
  var editicon = document.createElement("div");
  var delIcon = document.createElement("div");
  var checkIcon = document.createElement("div");
  // 添加class
  waitItem.className = "wait_item";
  waitText.className = "wait_text";
  waitIcon.className = "wait_icon";
  editicon.className = "edit_icon";
  delIcon.className = "del_icon";
  checkIcon.className = "check_icon";
  // waitText增加disabled
  waitText.disabled = true;
  // waitText內容
  waitText.setAttribute("value", content);
  // 加入icon
  editicon.innerHTML = "<i class=" + '"fas fa-pencil-alt"' + "></i>";
  delIcon.innerHTML = "<i class=" + '"fas fa-trash-alt"' + "></i>";
  checkIcon.innerHTML = "<i class=" + '"far fa-check-circle"' + "></i>";
  // 插入元素
  waitIcon.appendChild(editicon);
  waitIcon.appendChild(delIcon);
  waitIcon.appendChild(checkIcon);
  waitItem.appendChild(waitText);
  waitItem.appendChild(waitIcon);
  // 插入頁面
  wait.appendChild(waitItem);

  // edit方法
  editicon.onclick = function () {
    if (waitText.disabled == true) {
      waitText.disabled = false;
      waitText.focus();
      // 設置焦點位置
      waitText.selectionStart = waitText.value.length;
    }
    else {
      waitText.setAttribute("value", waitText.value);
      waitText.disabled = true;
      _focus.focus();
    }
  }

  // delet方法
  delIcon.onclick = function () {
    waitItem.parentNode.removeChild(waitItem);
    _focus.focus();
  }

  // check 方法
  checkIcon.onclick = function () {
    addDoneItem(waitText.value);
    waitItem.parentNode.removeChild(waitItem);
    _focus.focus();
  }
}

function addDoneItem(doneContent) {
  var doneItem = document.createElement("div");
  var doneText = document.createElement("input");
  var doneIcon = document.createElement("div");
  var delIcon = document.createElement("div");
  var checkIcon = document.createElement("div");
  // 添加class
  doneItem.className = "done_item";
  doneText.className = "done_text";
  doneIcon.className = "done_icon";
  delIcon.className = "del_icon";
  checkIcon.className = "check_icon";
  // waitText增加disabled
  doneText.disabled = true;
  // waitText內容
  doneText.setAttribute("value", doneContent);
  // 加入icon
  delIcon.innerHTML = "<i class=" + '"fas fa-trash-alt"' + "></i>";
  checkIcon.innerHTML = "<i class=" + '"fa fa-check-circle"' + "></i>";
  // 插入元素

  doneIcon.appendChild(delIcon);
  doneIcon.appendChild(checkIcon);
  doneItem.appendChild(doneText);
  doneItem.appendChild(doneIcon);
  // 插入頁面
  done.appendChild(doneItem);

  // delet方法
  delIcon.onclick = function () {
    doneItem.parentNode.removeChild(doneItem);
    _focus.focus();
  }

  // check 方法
  checkIcon.onclick = function () {
    addWaitItem(doneText.value);
    doneItem.parentNode.removeChild(doneItem);
    _focus.focus();
  }
}