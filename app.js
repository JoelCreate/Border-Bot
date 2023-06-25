const activityBtn = document.getElementById("get-activity-btn")
const activity = document.getElementById("activity-name")

activityBtn.addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {        
        activity.textContent = data.activity
        activityBtn.textContent = "Give me another idea please!"        
    })
})
