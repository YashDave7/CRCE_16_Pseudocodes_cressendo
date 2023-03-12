function uncheckOthers(clickedCheckbox) {
    const checkboxes = document.getElementsByName('option');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] !== clickedCheckbox) {
            checkboxes[i].checked = false;
        }
    }
}