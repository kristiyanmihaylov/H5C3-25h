const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
// this is how to grab from the DOM/site items 

// Select tab content item
function selectItem(e){
    // Add border to current tab & remove from the others
    removeBorder();
    this.classList.add('tab-border');
}

function removeBorder(){
    tabItems.forEach(item=>item.classList.remove('tab-border'));
}

// Listen for tab click
tabItems.forEach(item=>item.addEventListener('click', selectItem));