const bg = chrome.extension.getBackgroundPage();
let currentBlackList = bg.getBlackList();

//const blackListDom = document.getElementById("blackList");
const tip = document.getElementById("errtip");
const blackTable = document.getElementById("banlist");

function updateTable(){
    const tableEl = ["<tr><td>","</td></tr>"];
    var i = 0;
    while(currentBlackList[i]){
        blackTable.innerHTML = blackTable.innerHTML + tableEl[0] + currentBlackList[i] + tableEl[1];
    }
}

document.getElementById('confirm').addEventListener("click", () => {
    const text = document.getElementById('name').value;
    if (text) {
        bg.addBlackList(text);
        tip.style.color = "green";
        tip.innerHTML = "Info: 添加成功！";
        updateTable();
        //blackListDom.innerHTML = `<p>${JSON.stringify(currentBlackList)}</p>`;
    }else{
        tip.style.color = "red";
        tip.innerHTML = "Error: 请输入昵称！";
    }
    setTimeout(()=>{tip.innerHTML = "";},3000);
})

updateTable();
//blackListDom.innerHTML = `<p>${JSON.stringify(currentBlackList)}</p>`;
