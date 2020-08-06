const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
// this is how to grab from the DOM/site items 

// Select tab content item
function selectItem(e){
    // Add border to current tab & remove from the others
    removeBorder();
    removeShow();
    this.classList.add('tab-border');
    // Grab content item from DOM
    console.log(this.id);
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item=>item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item=>item.classList.remove('show'));
}

// Listen for tab click
tabItems.forEach(item=>item.addEventListener('click', selectItem));