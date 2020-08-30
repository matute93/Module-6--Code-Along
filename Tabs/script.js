let tabs = document.querySelector('.tabs');
let tabButtons = tabs.querySelectorAll('[role="tab"]');
let tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(event) {
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });

  tabButtons.forEach(tab => {

    tab.setAttribute('aria-selected', false);
  });

  event.currentTarget.setAttribute('aria-selected', true);
  let { id } = event.currentTarget;

  console.log(tabPanels);
  
  let tabPanel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));