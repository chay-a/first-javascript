function deleteItem(e, name, className) {
    const target = e.target;
    if (target.nodeName == name && target.classList.contains(className)) {
        target.remove();
    }
}