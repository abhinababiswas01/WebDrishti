window.onload = function () {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { message: "popup_open" });
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('reportButton').addEventListener('click', function () {
        window.location.href = 'report.html'; 
    });

    document.getElementById('aboutButton').addEventListener('click', function () {
        window.location.href = 'about.html'; 
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const numberElement = document.querySelector('#number');


    

    numberElement.textContent = number; 

    
    if (number >= 130) {
        numberElement.style.color = 'red';
    } else if (number >= 85) {
        numberElement.style.color = 'yellow';
    } else {
        numberElement.style.color = 'green';
    }
  });



  
   

  document.getElementsByClassName("analyze-button")[0].onclick = function () {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { message: "analyze_site" });
    });
  };

  document.getElementsByClassName("link")[0].onclick = function () {
    chrome.tabs.create({
      url: document.getElementsByClassName("link")[0].getAttribute("href"),
    });
  };
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "update_current_count") {
    document.getElementsByClassName("number")[0].textContent = request.count;
  }
});

