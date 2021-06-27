let arr = [];
const allowDrow = e => {
    e.preventDefault();
}
const drag = e => {
    e.dataTransfer.setData('text', e.target.id);
    e.dataTransfer.setData('content', e.target.textContent);
}
const drop = (e, block) => {
    e.preventDefault();
    let data = e.dataTransfer.getData('text');
    let content = e.dataTransfer.getData('content');
    if(block.class == 'div2') {
        if(arr.indexOf(content) == -1) {
            arr.push(content);
        }
    }
    if(block.class == 'div1') {
        if(arr.indexOf(content) != -1) {
            arr.splice(arr.indexOf(content), 1);
        }
    }
    block.appendChild(document.getElementById(data));
}