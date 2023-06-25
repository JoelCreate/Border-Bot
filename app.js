const activityBtn = document.getElementById("get-activity-btn")
const activity = document.getElementById("activity-name")

activityBtn.addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {        
        activity.textContent = data.activity
        activityBtn.classList.add('animate__animated', 'animate__bounce')
        activityBtn.textContent = "Give me another idea please!"     
        activityBtn.classList.remove()    
    })
})
