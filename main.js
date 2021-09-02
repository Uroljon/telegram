// search function styles
document.querySelector("#search").addEventListener("focus", ()=>{
    document.querySelector(".search-wrapper").style.border = "2px solid #3390ec";
    document.querySelector(".fa-search").style.color = "#3390ec";
    document.querySelector(".clear-search-btn").style.opacity = "1";

});
document.querySelector("#search").addEventListener("blur", ()=>{
    document.querySelector(".search-wrapper").style.border = "1px solid #dfe1e5";
    document.querySelector(".fa-search").style.color = "#dfe1e5";
    document.querySelector(".clear-search-btn").style.opacity = "0";

});
// toggle settings window
document.querySelector(".toggle-settings").addEventListener("click", ()=>{
    document.querySelector(".settings").classList.toggle("hide");
})
// chat-tabs navigation match
document.querySelectorAll(".navbar li").forEach((elem)=>{
    elem.addEventListener("click", (e)=>{

        let location = e.target.getAttribute("data-target");

        // toggle .active on tabs
        document.querySelectorAll(".navbar li").forEach((elem)=>{
            elem.classList.remove("active");
        })
        e.target.classList.add("active");

        // corresponding tabs will be shown
        document.querySelectorAll(".tabs-content").forEach((elem)=>{
            elem.classList.remove("active");
        });
        document.querySelector(`#${location}`).classList.add("active");
    })
})

let DATA = {
    users: [
        {
            id: 1,
            first_name: "First Name",
            last_name: "Last Name",
            avatar: "avatar1.png",
            bio: "Bio",
            user_name: "@username",
            groups_common: 4,
            shared_links: 15,
            shared_photos: 20,
            shared_voice: 15,
            activity: "online",
            messages: [
                {
                    id: 1,
                    is_from_me: false,
                    text: "lorem ipsum dolor sit amet...",
                    time: new Date()
                },
                {
                    id: 2,
                    is_from_me: true,
                    text: "lorem ipsum dolor sit amet...",
                    time: new Date()
                },
            ]  
        }
    ],
    me: {

    }
}