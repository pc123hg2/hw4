const newForm = document.getElementById("newForm")
let userInputContent = document.getElementById("userInputContent")
let inputValue
let itemNumber = 0
let newFormDivBlock
let newFormDivBlockId

let newFormDiv
let newBtnDiv
let newInputDiv
let newInputValueText
let newUserInputContent
let newSaveBtn
let newSaveBtnId
let newEditBtn
let newEditBtnId
let newDeleteBtn
let newDeleteBtnId


function getcl() {
    var arr = []//定义一个空的数组
    i = 0//为while循环定义i的初始值
    C = '0123456789ABCDEF'
    //定义颜色代码的字符串
    while (i++ < 6) {//循环6次
        x = Math.random() * 16
        //取0-16之间的随机数给变量x
        b = parseInt(x);//取0-16之前的整数给变量b
        c = C.substr(b, 1)
        //由第b（0-16之间的整数）位开始取一个字符
        arr.push(c);
        //通过6次循环得到的随机位置取得的字符组合在一起把值给到arr这个数组
    }
    var cl = "#" + arr.join('')
    //去掉之前数组之间的逗号，前面再加一个井号，
    //这样颜色随机的颜色代码就生成了，并且把颜色代码赋值给变量cl
    return cl
}

function submitForm() {
    addNewDiv()
}

function addNewDiv() {
    newFormDivBlock = document.createElement("div")
    newFormDivBlock.className = "newFormDivBlock"
    newFormDivBlockId = newFormDivBlock.id = "newFormDivBlock" + itemNumber

    newFormDiv = document.createElement("div")
    newFormDiv.className = "newFormDiv"

    newBtnDiv = document.createElement("div")
    newBtnDiv.className = "newBtnDiv"

    newUserInputContent = document.createElement("input")
    newUserInputContent.id = "newUserInputContentHide"

    newSaveBtn = document.createElement("button")
    newSaveBtn.className = "newSaveBtnHide"
    newSaveBtnId = newSaveBtn.id = "newSaveBtnId" + itemNumber
    newSaveBtn.addEventListener("click", newSaveBtnFunction)

    newEditBtn = document.createElement("button")
    newEditBtn.className = "newEditBtnShow"
    newEditBtnId = newEditBtn.id = "newEditBtnId" + itemNumber
    newEditBtn.addEventListener("click", newEditBtnFunction)

    newDeleteBtn = document.createElement("button")
    newDeleteBtn.className = "newDeleteBtn"
    newDeleteBtnId = newDeleteBtn.id = "newDeleteBtnId" + itemNumber
    newDeleteBtn.addEventListener("click", newDeleteBtnFunction)

    inputValue = userInputContent.value
    newInputValueText = document.createTextNode(userInputContent.value)

    if (userInputContent.value == "") {
        alert("內容不可為空")
        return
    }

    newForm.appendChild(newFormDivBlock)
    newFormDivBlock.appendChild(newFormDiv)
    newFormDivBlock.appendChild(newBtnDiv)
    newFormDiv.appendChild(newInputValueText)
    newFormDiv.appendChild(newUserInputContent)
    newBtnDiv.appendChild(newSaveBtn)
    newBtnDiv.appendChild(newEditBtn)
    newBtnDiv.appendChild(newDeleteBtn)
    newFormDivBlock.style.backgroundColor = getcl()
    newSaveBtn.innerHTML = ("儲存")
    newEditBtn.innerHTML = ("編輯")
    newDeleteBtn.innerHTML = ("刪除")
    userInputContent.value = ""
    itemNumber++
}

function removeNewForm() {
    let childs = newForm.childNodes;
    for (let i = childs.length - 1; i >= 0; i--) {
        newForm.removeChild(childs[i]);
    }
    itemNumber = 0
}

function newEditBtnFunction() {
    newSaveBtn.className = "newSaveBtnShow"
    newEditBtn.className = "newEditBtnHide"
    newUserInputContent.id = "newUserInputContentShow"
    newInputValueText.className = "newInputValueTextHide"

    let x = document.getElementById("newUserInputContentShow")
    console.log(inputValue)
    x.value = inputValue

}

function newSaveBtnFunction() {

}

function newDeleteBtnFunction() {
    newForm.removeChild(newFormDivBlock);
}

formSubmitBtn.addEventListener("click", submitForm)
formResetBtn.addEventListener("click", removeNewForm)
