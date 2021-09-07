// let ism = prompt("Ismingizni kiritasizmi ?");
// let familiya = prompt("Familiyangizni kiritasizmi ?");
let ism = "O'roljon";
let familiya = "Xidirboyev";

let DATA = {

    people: [
        {
            id: 1,
            first_name: "Emma",
            last_name: "Watson",
            avatar: ["https://i.pinimg.com/originals/15/0e/29/150e29ffdb2cacf19879054c98a93d0a.jpg", "https://i.pinimg.com/originals/1d/59/61/1d59616089e50bf3fef50b2ad8f6d9de.jpg", "https://media.vanityfair.com/photos/60a3d27e292c88dd8b5007a1/9:16/w_1683,h_2992,c_limit/480403143", "https://i.pinimg.com/originals/f0/04/bb/f004bb780a52fd401e851425d2542c13.jpg", "https://popularnetworth.com/wp-content/uploads/2021/05/6495d05033eb2029300f4a6fe5151952.jpg", "https://media.vanityfair.com/photos/5335ae418632c544280001e0/master/pass/emma-watson.jpg", "http://images4.fanpop.com/image/photos/24400000/Hermione-Granger-Wallpaper-hermione-granger-24488212-1024-768.jpg", "https://i.pinimg.com/originals/65/3d/01/653d01c977ea7ce63d9eb06f5a273d7d.jpg", "https://i.pinimg.com/736x/80/70/88/80708859419592e5444828f4718d7d0b.jpg", "http://images4.fanpop.com/image/photos/20000000/Hermione-Granger-hermione-granger-20053436-936-1197.jpg", "https://i.pinimg.com/originals/ca/76/b6/ca76b6cd8a6d31efc386c4cbf4385dcf.jpg", "https://www.oshonews.com/wp-content/uploads/2017/08/020-Hermione2-667x370-600x333.png"],
            bio: "Hogwarts",
            phone_number: "+44 777 777 77 77",
            user_name: "@Emma_Watson",
            groups_common: 4,
            shared_links: 15,
            shared_files: 1,
            shared_photos: 20,
            shared_voice: 15,
            activity: "online",
            messages: [
                {
                    id: 1,
                    is_from_me: false,
                    text: "Hello",
                    time: new Date(2021, 7, 16, 11, 10, 05).getTime()
                },
                {
                    id: 2,
                    is_from_me: true,
                    text: "Hi",
                    time: new Date(2021, 7, 16, 11, 11, 10).getTime()
                },
                {
                    id: 3,
                    is_from_me: false,
                    text: "How are you ?",
                    time: new Date(2021, 7, 16, 11, 11, 15).getTime()
                },
                {
                    id: 4,
                    is_from_me: true,
                    text: "🙂 and you ?",
                    time: new Date(2021, 7, 16, 11, 12, 50).getTime()
                },
            ]
        },
        {
            id: 2,
            first_name: "Den",
            last_name: "Radcliffle",
            avatar: ["https://broncolor.swiss/assets/img/Stories/Inspiration/Daniel-Radcliffe/_contentWithShareBar23/DANIEL-RADCLIFFE-featured.jpg", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/09/29/15/hp.jpg?width=982&height=726&auto=webp&quality=75", "https://images.indianexpress.com/2018/07/wp-harrypotter-01.jpg", "https://www.biography.com/.image/t_share/MTQ3OTg2NjQ0NDg0NDk4OTEx/hp_cropped_gettyimages-113941726.jpg", "https://www.irishtimes.com/polopoly_fs/1.3101809.1497028489!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg"],
            bio: "Hogwarts",
            phone_number: "+44 707 777 77 77",
            user_name: "@Daniel_Radcliffe",
            groups_common: 5,
            shared_links: 10,
            shared_files: 1,
            shared_photos: 0,
            shared_voice: 15,
            activity: "Last seen recently",
            messages: [
                {
                    id: 1,
                    is_from_me: false,
                    text: "Qalaysan oshna :)",
                    time: new Date(2021, 7, 19, 11, 11, 11).getTime()
                },
                {
                    id: 2,
                    is_from_me: true,
                    text: "Yaxshi rahmat :)",
                    time: new Date(2021, 7, 20, 11, 11, 11).getTime()
                },
            ]
        },
        {
            id: 3,
            first_name: "Fulfiledu",
            last_name: "Admin",
            avatar: ["https://static10.tgstat.ru/channels/_0/4b/4bee0aec8083826b79c227eac9d2cf27.jpg"],
            bio: "Fulfil education va Instant company bo'yicha savollaringizni bering!",
            phone_number: "+99 890 777 77 77",
            user_name: "@fulfiledu",
            groups_common: 1,
            shared_links: 6,
            shared_files: 1,
            shared_photos: 1,
            shared_voice: 0,
            activity: "Last seen today at 10:01 AM",
            messages: [
                {
                    id: 1,
                    is_from_me: false,
                    text: "Assalomu aaykum yaxshimisiz, to'lovingiz tushdi belgilab qo'ydim😊",
                    time: new Date(2021, 7, 30, 12, 54, 01).getTime()
                },

            ]
        },
        {
            id: 4,
            first_name: "Asadbek",
            last_name: "Zoirov",
            avatar: [],
            bio: null,
            phone_number: "+99 890 777 77 77",
            user_name: "@ZoirovAsadbek",
            groups_common: 1,
            shared_links: 0,
            shared_files: 1,
            shared_photos: 0,
            shared_voice: 0,
            activity: "Last seen 1 hour ago",
            messages: [
                {
                    id: 1,
                    is_from_me: false,
                    text: "Assalomu alaykum",
                    time: new Date(2021, 8, 1, 11, 11, 11).getTime()
                },
                {
                    id: 3,
                    is_from_me: true,
                    text: "Live search ishladi",
                    time: new Date(2021, 8, 2, 11, 16, 11).getTime()
                },
                {
                    id: 4,
                    is_from_me: true,
                    text: "Messagelarni id sini olyapti",
                    time: new Date(2021, 8, 2, 11, 17, 11).getTime()
                },
                {
                    id: 5,
                    is_from_me: true,
                    text: "Yangi xabar yozilsa, location.href ga o'sha chat id berilyapti",
                    time: new Date(2021, 8, 2, 11, 20, 11).getTime()
                },
                {
                    id: 6,
                    is_from_me: true,
                    text: "Edit contact ishlayapti",
                    time: new Date(2021, 8, 2, 11, 20, 11).getTime()
                },
                {
                    id: 7,
                    is_from_me: true,
                    text: "test",
                    time: new Date(2021, 8, 2, 11, 20, 11).getTime()
                },
                {
                    id: 8,
                    is_from_me: true,
                    text: "test",
                    time: new Date(2021, 8, 2, 11, 20, 11).getTime()
                },
            ]
        }
    ],
    groups: [
        {
            id: 1,
            name: "MERN va PERN F-13",
            avatar: [],
            bio: "Vazifalar uchun: @mernperntasksbot",
            user_name: "private_group_mern",
            shared_links: 15,
            shared_files: 16,
            shared_photos: 16,
            shared_voice: 0,
            shared_videos: 11,
            activity: "11 members, 2 online",
            messages: [
                {
                    id: 1,
                    is_from_me: false,
                    text: "lorem ipsum dolor sit amet...",
                    time: new Date(2021, 8, 1, 11, 11, 11).getTime()
                },
                {
                    id: 2,
                    is_from_me: true,
                    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias error fuga possimus cum, ab animi quaerat autem omnis fugiat mollitia delectus perferendis quo, placeat, quis totam maxime quae voluptatem esse?",
                    time: new Date(2021, 8, 1, 11, 11, 50).getTime()
                },
            ]
        }
    ],
    channels: [
        {
            id: 1,
            name: "Mirzayev's Mind",
            avatar: ["https://static10.tgstat.ru/channels/_0/b0/b06d62818baaf237d626e5360ea562c7.jpg"],
            bio: `
            ▪️ Entrepreneur
            ▪️ Investor
            ▪️ Developer
            
            Omad yordir dovyuraklarga! • Судьба благоволит храбрым! • Fates Favors the Brave!
            Murojaat uchun: @Odilbek_Mirzayev_aloqabot`,
            user_name: "@OdilbekMirzayev",
            shared_links: 94,
            shared_files: 1,
            shared_photos: 72,
            shared_voice: 3,
            shared_videos: 9,
            activity: "1635 subscribers",
            messages: [
                {
                    id: 1,
                    is_from_me: false,
                    text: "lorem ipsum dolor sit amet...",
                    time: new Date(2021, 8, 1, 11, 11, 11).getTime()
                },
                {
                    id: 2,
                    is_from_me: false,
                    text: "lorem ipsum dolor sit amet...",
                    time: new Date(2021, 8, 2, 11, 11, 11).getTime()
                },
            ]
        }
    ],
    bots: [
        {
            id: 1,
            name: "VKM Bot",
            avatar: ["https://botostore.com/netcat_files/22/26/preview_26957_1542499501.jpg", "https://picsum.photos/500/384", "https://picsum.photos/490/384", "https://picsum.photos/480/384", "https://picsum.photos/470/384", "https://picsum.photos/400/384"],
            bio: `
            Listen to and download any music! 
            Contact & Ads: @vkmowner
            Our media: @vekaem`,
            user_name: "@vkm_bot",
            shared_links: 22,
            shared_files: 0,
            shared_photos: 0,
            shared_voice: 417,
            activity: "bot",
            messages: [
                {
                    id: 1,
                    is_from_me: false,
                    text: "lorem ipsum dolor sit amet...",
                    time: new Date(2021, 8, 1, 11, 11, 11).getTime()
                },
                {
                    id: 2,
                    is_from_me: true,
                    text: "Mustafa Ceceli",
                    time: new Date(2021, 8, 1, 11, 11, 11).getTime()
                },
            ]
        }
    ],
    me: [
        {
            first_name: ism,
            last_name: familiya,
            avatar: ["https://uroljon.github.io/Khidirboev/img/back.png"],
            bio: `CEO at uroljon.ml | lotin-kirill.ga`,
            phone_number: "+99 890 152 75 11",
            user_name: "@Uroljon_Khidirboev",
            shared_links: 10,
            shared_files: 20,
            shared_photos: 30,
            shared_voice: 0,
            activity: "Online",
            messages: [
                {
                    id: 1,
                    is_from_me: true,
                    text: "lorem ipsum dolor sit amet...",
                    time: new Date(2021, 8, 1, 11, 11, 11).getTime()
                },
                {
                    id: 2,
                    is_from_me: true,
                    text: "This is Saved Messages section. You can use it for your own private cloud. Enjoy Telegram :)",
                    time: new Date(2021, 8, 1, 11, 11, 11).getTime()
                },
            ]
        }
    ]
}
// set DATA to localStrage ONLY IF localstorage is empty at "DATA" key
!localStorage.getItem("DATA") && localStorage.setItem("DATA", JSON.stringify(DATA));

let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let selected_chat_username;
let selected_chatlist;
let is_searching_messages = false;

// search function styles
document.querySelector("#search").addEventListener("focus", () => {
    document.querySelector(".search-wrapper").style.border = "2px solid #3390ec";
    document.querySelector(".fa-search").style.color = "#3390ec";
    document.querySelector(".clear-search-btn").style.opacity = "1";

});
document.querySelector("#search").addEventListener("blur", () => {
    document.querySelector(".search-wrapper").style.border = "1px solid #dfe1e5";
    document.querySelector(".fa-search").style.color = "#dfe1e5";
    document.querySelector(".clear-search-btn").style.opacity = "0";
});

// live search
document.querySelector("#search").addEventListener("keyup", (e) => {
    let excluded_keys = [18, 20, 17, 16, 9]; //Alt, Caps Lock, Ctrl, Shift, tab

    if (!excluded_keys.includes(e.keyCode)) { //exclude keys above

        let search_for = new RegExp(e.target.value, "gi");

        if (is_searching_messages) {// if searching messages

            let DATA_from_local_storage = JSON.parse(localStorage.getItem("DATA"));
            let where_to_render = `#${document.querySelector(".navbar li.active").getAttribute("data-target")}`;
            // render new chatlist related to search query  
            Object.keys(DATA_from_local_storage).forEach((tab) => {
                DATA_from_local_storage[tab].forEach((individ) => {
                    if (individ.user_name === selected_chat_username) {

                        document.querySelector(`${where_to_render}`).innerHTML = "";//cleaning output area

                        individ.messages.forEach((message, index, arr) => {
                            if (search_for.test(message.text)) {

                                document.querySelector(`${where_to_render}`).innerHTML += `
                                <div class="chat_item" onClick="fill_middle_column(this)" data-username="${individ.user_name}">
                                    <div class="chat_avatar">
                                        <img src="${individ.avatar[0] ? individ.avatar[0] : "https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-11.jpg"}" alt="avatar">
                                    </div>
                                    <div class="user_caption">
                                        <div class="diolog_title">
                                            <p>${individ.first_name ? individ.first_name : individ.name} ${individ.last_name ? individ.last_name : ""}</p> 
                                            <div class="diolog_title_details">
                                                <i class="fa fa-check message_status" aria-hidden="true"></i>
                                                <span class="message_time">${weekDays[new Date(message.time).getDay()]}</span>
                                            </div>
                                        </div>
                                        <div class="dialog_subtitle">
                                            <p message_id="${message.id}">${message.text}</p>
                                            <div class="diolog_subtitle_details">
                                                <span class="unread_message_count">${(index === arr.length - 1) ? (message.is_from_me ? '' : 1) : ''}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>`;

                            }
                        })

                    }
                })
            });

        } else {//if searching chats
            let search_list = "#" + document.querySelector(".navbar li.active").getAttribute("data-target") + " .diolog_title p";

            document.querySelectorAll(`${search_list}`).forEach((item) => {
                if (search_for.test(item.textContent)) {
                    item.parentElement.parentElement.parentElement.style.display = "grid";
                } else {
                    item.parentElement.parentElement.parentElement.style.display = "none";
                }
            })
        }
    }
});

// clear search input button
document.querySelector(".clear-search-btn").addEventListener("click", () => {

    document.querySelector("#search").value = "";
    document.querySelector("#search").focus();

    if (is_searching_messages) {//if message search finished, re-render original chatlist
        let where_to_render = `${document.querySelector(".navbar li.active").getAttribute("data-target")}`;
        fill_left_column(where_to_render);
        is_searching_messages = false;
    } else { //if chat search finished, restore all chats' display:grid style
        let search_list = "#" + document.querySelector(".navbar li.active").getAttribute("data-target") + " .diolog_title p";
        document.querySelectorAll(`${search_list}`).forEach((item) => {
            item.parentElement.parentElement.parentElement.style.display = "grid";
        })
    }

})

// toggle settings window
document.querySelector(".toggle-settings").addEventListener("click", () => {
    document.querySelector(".settings").classList.toggle("hide");
})
// chat-tabs navigation match
document.querySelectorAll(".navbar li").forEach((elem) => {

    // INITIATE FIRST RENDER on active tab
    selected_chatlist = document.querySelector(".navbar li.active").getAttribute("data-target");
    fill_left_column(selected_chatlist);
    // next render according to click
    elem.addEventListener("click", (e) => {

        selected_chatlist = e.target.getAttribute("data-target");

        // toggle .active on tabs
        document.querySelectorAll(".navbar li").forEach((elem) => {
            elem.classList.remove("active");
        })
        e.target.classList.add("active");

        // corresponding tabs will be shown
        document.querySelectorAll(".tabs-content").forEach((elem) => {
            elem.classList.remove("active");
            elem.innerHTML = ""; // qolgan tab larni ichini tozalaydi
        });
        document.querySelector(`#${selected_chatlist}`).classList.add("active");
        // tanlangan chat ni ichini kontent bilan to'ldiradi
        fill_left_column(selected_chatlist);

    })
})

// renders DATA to left column
function fill_left_column(location) {
    let DATA_from_local_storage = JSON.parse(localStorage.getItem("DATA"));
    // render qilishdan avval tozalab olsinchi:
    document.querySelector(`#${location}`).innerHTML = "";

    if (location === "all_chats") {
        for (let i in DATA_from_local_storage) {
            DATA_from_local_storage[i].forEach((item) => {

                document.querySelector(`#${location}`).innerHTML += `
            <div class="chat_item" onClick="fill_middle_column(this)" data-username="${item.user_name}">
                <div class="chat_avatar">
                    <img src="${item.avatar[0] ? item.avatar[0] : "https://icon-library.com/images/no-profile-picture-icon/no-profile-picture-icon-11.jpg"}" alt="avatar">
                </div>
                <div class="user_caption">
                    <div class="diolog_title">
                        <p>${item.first_name ? item.first_name : item.name} ${item.last_name ? item.last_name : ""}</p> 
                        <div class="diolog_title_details">
                            <i class="fa fa-check message_status" aria-hidden="true"></i>
                            <span class="message_time">${weekDays[new Date(item.messages[item.messages.length - 1].time).getDay()]}</span>
                        </div>
                    </div>
                    <div class="dialog_subtitle">
                        <p message_id="${item.messages[item.messages.length - 1].id}">${item.messages[item.messages.length - 1].text}</p>
                        <div class="diolog_subtitle_details">
                            <span class="unread_message_count">${item.messages[item.messages.length - 1].is_from_me ? "" : 1}</span>
                        </div>
                    </div>
                </div>
            </div>
                `;
            });


        }
    } else {//one location for one tab
        DATA_from_local_storage[location].forEach((item) => {
            document.querySelector(`#${location}`).innerHTML += `
        <div class="chat_item" onClick="fill_middle_column(this)" data-username="${item.user_name}">
            <div class="chat_avatar">
                <img src="${item.avatar[0] ? item.avatar[0] : "https://simg.nicepng.com/png/small/930-9302865_notes-from-reasons-to-conference-brighton-whatsapp-profile.png"}" alt="avatar">
            </div>
            <div class="user_caption">
                <div class="diolog_title">
                    <p>${item.first_name ? item.first_name : item.name} ${item.last_name ? item.last_name : ""}</p> 
                    <div class="diolog_title_details">
                        <i class="fa fa-check message_status" aria-hidden="true"></i>
                        <span class="message_time">${weekDays[new Date(item.messages[item.messages.length - 1].time).getDay()]}</span>
                    </div>
                </div>
                <div class="dialog_subtitle">
                    <p message_id="${item.messages[item.messages.length - 1].id}">${item.messages[item.messages.length - 1].text}</p>
                    <div class="diolog_subtitle_details">
                        <span class="unread_message_count">${item.messages[item.messages.length - 1].is_from_me ? "" : 1}</span>
                    </div>
                
                </div>
            </div>
        </div>
            `;
        })
    }
}
// renders DATA to middle column and adds related functionality like search and newMessage input
function fill_middle_column(what) {

    let DATA_from_local_storage = JSON.parse(localStorage.getItem("DATA"));
    let message_to_show = what.lastElementChild.lastElementChild.firstElementChild.getAttribute("message_id");

    // if one chat is selected, show new message input (main-footer)
    document.querySelector(".main-footer").style.display = "block";

    //tanlangan userning id(username) sini saqlab qo'ymoqda
    selected_chat_username = what.getAttribute("data-username");
    // chats and middle-navbar rendering
    for (let tabs in DATA_from_local_storage) {
        DATA_from_local_storage[tabs].forEach((chatItem) => {
            if (chatItem.user_name === selected_chat_username) {
                // change avatar
                document.querySelector("#avatar").src = `${chatItem.avatar[0] ? chatItem.avatar[0] : "https://picsum.photos/500/400"}`;
                // change name
                document.querySelector("#name").innerHTML = `${chatItem.first_name ? chatItem.first_name : chatItem.name} ${chatItem.last_name ? chatItem.last_name : ""}`;
                // change status
                document.querySelector("#status").innerHTML = `${chatItem.activity}`;
                // re-render new messages after cleaning older ones
                document.querySelector(".main-chat .container").innerHTML = "";
                chatItem.messages.forEach((message) => {
                    document.querySelector(".main-chat .container").innerHTML += `
                    <div style="display: flex; ${message.is_from_me ? 'justify-content: flex-end;' : ''}">
                    <div id="${message.id}" class="message ${message.is_from_me ? "from-me" : "to-me"} has-tail">
                        ${message.text}
                        <div class="message_time">${new Date(message.time).getHours()}:${new Date(message.time).getMinutes()} ${message.is_from_me ? '<i class="fa fa-check" aria-hidden="true"></i>' : ''}</div>
                        <div class="tail"></div>
                    </div>
                    </div>`;

                })
            }
        })
    }

    // render right column in case it's expanded:
    if (document.querySelector("#column-right").classList.contains("expanded")) {
        fill_right_column();
    }

    // go to the last or target message (middle column uchun)
    location.href = `#${message_to_show}`;
}

// when input new message, button alsa changes
document.querySelector(".new-message-text input").addEventListener("keyup", (e) => {

    if (e.target.value && e.target.value.trim()) { //if input isn't empty
        document.querySelector(".new-message-voice i").classList.remove("fa-microphone");
        document.querySelector(".new-message-voice i").classList.add("fa-paper-plane");
        if (e.keyCode === 13) {//if enter is pressed, send message

            // NEW MESSAGE CODES HERE
            let new_message = document.querySelector(".new-message-text input").value;
            let DATA_from_local_storage = JSON.parse(localStorage.getItem("DATA"));
            Object.keys(DATA_from_local_storage).forEach((tab) => {
                DATA_from_local_storage[tab].forEach((individ) => {
                    if (individ.user_name === selected_chat_username) {

                        // writes new message to local var
                        individ.messages.push({
                            id: individ.messages[individ.messages.length - 1].id + 1,
                            is_from_me: true,
                            text: new_message,
                            time: new Date().getTime()
                        });
                        // sets new message to localStorage
                        localStorage.setItem("DATA", JSON.stringify(DATA_from_local_storage))

                        // re-render middle column with new messages
                        let last_message = individ.messages[individ.messages.length - 1];//clean code uchun ohirgi message ni qisqa nomlash

                        document.querySelector(".main-chat .container").innerHTML += `
                        <div style="display: flex; ${last_message.is_from_me ? 'justify-content: flex-end;' : ''}">
                        <div id="${last_message.id}" class="message ${last_message.is_from_me ? "from-me" : "to-me"} has-tail">
                            ${last_message.text}
                            <div class="message_time">${new Date(last_message.time).getHours()}:${new Date(last_message.time).getMinutes()} ${last_message.is_from_me ? '<i class="fa fa-check" aria-hidden="true"></i>' : ''}</div>
                            <div class="tail"></div>
                        </div>
                        </div>
                        `;
                        // input ni tozalab qoyadi
                        document.querySelector(".new-message-text input").value = "";

                        // go to last or selected message
                        location.href = `#${last_message.id}`;

                        // send btn ham ishlamaydi, chunki input pustoy
                        document.querySelector(".new-message-voice i").classList.add("fa-microphone");
                        document.querySelector(".new-message-voice i").classList.remove("fa-paper-plane");
                        document.querySelector(".new-message-text input").focus();
                        // LEFT column a re-render bo'lyapti. Yangilab qoysin chatlarni
                        fill_left_column(selected_chatlist);

                    }
                })
            });

        }
    }
    else {//if input is empty
        document.querySelector(".new-message-voice i").classList.add("fa-microphone");
        document.querySelector(".new-message-voice i").classList.remove("fa-paper-plane");
    }
});
// send button only works when input isn't empty
document.querySelector(".new-message-voice").addEventListener("click", (e) => {
    let DATA_from_local_storage = JSON.parse(localStorage.getItem("DATA"));

    if (e.target.firstElementChild.classList.contains("fa-paper-plane")) {

        // if no chat selected :
        if (!selected_chat_username) {
            document.querySelector(".new-message-text input").value = ``;
            document.querySelector(".new-message-text input").placeholder = `Avval birorta chatni tanlang, Janob ${ism && ism}`;
        }
        // if a chat is selected
        else {
            // set input placeholder to "Message"
            document.querySelector(".new-message-text input").placeholder = `Message`;

            // NEW MESSAGE CODES HERE
            let new_message = document.querySelector(".new-message-text input").value;
            Object.keys(DATA_from_local_storage).forEach((tab) => {
                DATA_from_local_storage[tab].forEach((individ) => {
                    if (individ.user_name === selected_chat_username) {

                        // writes new message to local var
                        individ.messages.push({
                            id: individ.messages[individ.messages.length - 1].id + 1,
                            is_from_me: true,
                            text: new_message,
                            time: new Date().getTime()
                        });
                        // sets new message to localStorage
                        localStorage.setItem("DATA", JSON.stringify(DATA_from_local_storage))

                        // re-render middle column with new messages
                        let last_message = individ.messages[individ.messages.length - 1];//clean code uchun ohirgi message ni qisqa nomlash

                        document.querySelector(".main-chat .container").innerHTML += `
                        <div style="display: flex; ${last_message.is_from_me ? 'justify-content: flex-end;' : ''}">
                        <div id="${last_message.id}" class="message ${last_message.is_from_me ? "from-me" : "to-me"} has-tail">
                            ${last_message.text}
                            <div class="message_time">${new Date(last_message.time).getHours()}:${new Date(last_message.time).getMinutes()} ${last_message.is_from_me ? '<i class="fa fa-check" aria-hidden="true"></i>' : ''}</div>
                            <div class="tail"></div>
                        </div>
                        </div>
                        `;
                        // input ni tozalab qoyadi
                        document.querySelector(".new-message-text input").value = "";

                        // go to last or selected message
                        location.href = `#${last_message.id}`;

                        // send btn ham ishlamaydi, chunki input pustoy
                        document.querySelector(".new-message-voice i").classList.add("fa-microphone");
                        document.querySelector(".new-message-voice i").classList.remove("fa-paper-plane");
                        document.querySelector(".new-message-text input").focus();
                        // LEFT column a re-render bo'lyapti. Yangilab qoysin chatlarni
                        fill_left_column(selected_chatlist);

                    }
                })
            });
        }
    }

});

// toggle right column window + search + more btn
document.querySelector(".person").addEventListener("click", (e) => {
    // if any chat is Selected
    if (!(document.querySelector("#name").textContent === "Select a chat to start messaging")) {

        // if search btn is clicked
        if (e.target.classList.contains("search-btn")) {
            document.querySelector("#search").focus();
            is_searching_messages = true;
        } else if (e.target.classList.contains("more-btn")) {//if more btn is clicked
            document.querySelector(".more-btn-content").classList.toggle("active");
        } else if(e.target.classList.contains("more_btn_event_handler")){//more btn contents menu xullas aji buji :)
            if(e.target.firstElementChild.classList.contains("fa-pencil")){
                edit_btn_function();
            }else if(e.target.firstElementChild.classList.contains("fa-trash")){
                document.querySelector(".delete_contact_modal").classList.toggle("active");
            }else if(e.target.firstElementChild.classList.contains("fa-history")){
                
            }else if(e.target.firstElementChild.classList.contains("fa-exclamation-triangle")){
                
            }else if(e.target.firstElementChild.classList.contains("fa-lock")){
                
            }
        }
        else {
            if (!document.querySelector("#column-center").classList.contains("shrinked")) {
                document.querySelector("#telegram").style.gridTemplateColumns = "27.5% 1fr 25%";
            } else {
                document.querySelector("#telegram").style.gridTemplateColumns = "27.5% 1fr 0%";
            }
            document.querySelector("#column-center").classList.toggle("shrinked");
            document.querySelector("#column-right").classList.toggle("expanded");

            fill_right_column();
        }
    }
});

// renders DATA to right column
function fill_right_column() {
    let DATA_from_local_storage = JSON.parse(localStorage.getItem("DATA"));

    // clear carousel images AND TABS before rendering
    document.querySelector(".carousel-items").innerHTML = "";
    document.querySelector(".carousel-items-tabs").innerHTML = "";

    // render data
    Object.keys(DATA_from_local_storage).forEach((tab) => {
        DATA_from_local_storage[tab].forEach((individ) => {
            if (individ.user_name === selected_chat_username) {

                // carousel image rendering
                if (individ.avatar.length === 0) {//if there's no image
                    // put rainy image on carousel
                    document.querySelector(".carousel-items").innerHTML = `
                        <div class="carousel-item active">
                            <img class="carousel-item-image" src="https://picsum.photos/id/115/400/384">
                        </div>
                        `;
                    // set one tab on carousel navbar
                    document.querySelector(".carousel-items-tabs").innerHTML = `<div class="carousel-items-tab active"></div>`;

                } else { //if there are images
                    // render avatars
                    individ.avatar.forEach((img, index) => {
                        document.querySelector(".carousel-items").innerHTML += `
                            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                                <img class="carousel-item-image" src="${img ? img : 'https://picsum.photos/500/384'}">
                            </div>
                            `;

                        // render nav  tabs as many as avatars
                        document.querySelector(".carousel-items-tabs").innerHTML += `<div class="carousel-items-tab ${index === 0 ? 'active' : ''}"></div>`;

                    });

                }
                // render name and status
                document.querySelector(".carousel-items-info .profile-name").innerHTML = `${individ.first_name ? individ.first_name : individ.name} ${individ.last_name && individ.last_name}`;
                document.querySelector(".carousel-items-info .profile-subtitle").innerHTML = `${individ.activity}`;

                // balo battar ma'lumomtlar bori namoyon bo'lur :)
                document.querySelector(".right-main").innerHTML = "";//tozalavol
                // phone
                if (individ.hasOwnProperty("phone_number")) {
                    document.querySelector(".right-main").innerHTML += `
                <div class="right-main-item">
                    <div class="r_icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
                    <div class="r_text">
                        <div>${individ.phone_number ? individ.phone_number : 'hidden'}</div>
                        <span>Phone</span>
                    </div>
                </div>`;
                }
                // username
                if (individ.user_name) {
                    document.querySelector(".right-main").innerHTML += `
                <div class="right-main-item">
                    <div class="r_icon">@</div>
                    <div class="r_text">
                        <div>${individ.user_name}</div>
                        <span>Username</span>
                    </div>
                </div>`;
                }
                // bio
                if (individ.bio) {
                    document.querySelector(".right-main").innerHTML += `
                <div class="right-main-item">
                    <div class="r_icon"><i class="fa fa-info-circle" aria-hidden="true"></i></div>
                    <div class="r_text">
                        <div>${individ.bio}</div>
                        <span>Bio</span>
                    </div>
                </div>`;
                }
                // notifications
                document.querySelector(".right-main").innerHTML += `
            <div class="right-main-item">
                <div class="r_icon"><i class="fa fa-bell-o" aria-hidden="true"></i></div>
                <div class="r_text bell-text">
                    <div>Notifications</div>
                    <button class="toggle-notification">
                        <i class="fa fa-toggle-on" aria-hidden="true"></i>
                    </button>
                </div>
            </div>`;
                // notification event listener  // toggle-notification 
                document.querySelector(".toggle-notification").addEventListener("click", () => {
                    document.querySelector(".toggle-notification").firstElementChild.classList.toggle("fa-toggle-on");
                    document.querySelector(".toggle-notification").firstElementChild.classList.toggle("fa-toggle-off");
                });


            }
        })
    });

}

// carousel next/prev buttons
let carousel_items = document.querySelector(".carousel-items");
document.querySelectorAll(".carousel-items-arrow").forEach((navbtn) => {
    navbtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("arrow-next")) {
            // next avatar
            for (let i = 0; i < carousel_items.children.length; i++) {

                if (carousel_items.children[i].classList.contains("active")) {
                    // remove active class on avatar and nav tab :
                    carousel_items.children[i].classList.remove("active");
                    document.querySelector(".carousel-items-tabs").children[i].classList.remove("active");

                    if (i === carousel_items.children.length - 1) {//if it's the last pic:
                        carousel_items.children[0].classList.add("active");//show first pic
                        document.querySelector(".carousel-items-tabs").children[0].classList.add("active");//shine first tab
                    } else {
                        carousel_items.children[i + 1].classList.add("active");
                        document.querySelector(".carousel-items-tabs").children[i + 1].classList.add("active");
                    }
                    break;
                }
            }
        } else if (e.target.classList.contains("arrow-prev")) {
            // prev avatar
            for (let i = 0; i < carousel_items.children.length; i++) {

                if (carousel_items.children[i].classList.contains("active")) {

                    carousel_items.children[i].classList.remove("active");
                    document.querySelector(".carousel-items-tabs").children[i].classList.remove("active");

                    if (i === 0) {//if it's the first pic:
                        carousel_items.children[carousel_items.children.length - 1].classList.add("active");//show last pic
                        document.querySelector(".carousel-items-tabs").children[carousel_items.children.length - 1].classList.add("active");//shine last tab
                    } else {
                        carousel_items.children[i - 1].classList.add("active");
                        document.querySelector(".carousel-items-tabs").children[i - 1].classList.add("active");
                    }
                    break;
                }
            }
        }
    });
});

// chat-tabs navigation match
document.querySelectorAll(".shared-media li").forEach((elem) => {
    elem.addEventListener("click", (e) => {

        let selected_medialist = e.target.getAttribute("data-target");

        // toggle .active on tabs
        document.querySelectorAll(".shared-media li").forEach((elem) => {
            elem.classList.remove("active");
        })
        e.target.classList.add("active");

        // corresponding tabs will be shown
        document.querySelectorAll(".shared_media_content").forEach((elem) => {
            elem.classList.remove("active");
            //elem.innerHTML = ""; // qolgan tab larni ichini tozalaydi
        });
        document.querySelector(`#${selected_medialist}`).classList.add("active");
        // tanlangan chat ni ichini kontent bilan to'ldiradi

        /***
                    groups_common: 4,
            shared_links: 15,
            shared_files: 1,
            shared_photos: 20,
            shared_voice: 15,
            shared_videos: 11,
        */

    })
})

// close right column btn
document.querySelector(".close-btn").addEventListener("click", (e) => {
    document.querySelector("#telegram").style.gridTemplateColumns = "27.5% 1fr 0%";
    document.querySelector("#column-center").classList.toggle("shrinked");
    document.querySelector("#column-right").classList.toggle("expanded");
});

// edit contact button (modal)
document.querySelector(".edit-btn").addEventListener("click", edit_btn_function);

function edit_btn_function() {
    document.querySelector(".edit_contact_modal").classList.toggle("active");

    let DATA_from_local_storage = JSON.parse(localStorage.getItem("DATA"));
    // render data
    Object.keys(DATA_from_local_storage).forEach((tab) => {
        DATA_from_local_storage[tab].forEach((individ) => {
            if (individ.user_name === selected_chat_username) {

                document.querySelector(".modal_avatar").src = ` ${individ.avatar[0] ? individ.avatar[0] : 'https://picsum.photos/id/115/400/384'} `;
                document.querySelector("#edit_tel").innerHTML = ` ${individ.phone_number} `;
                document.querySelector("#edit_status").innerHTML = `${individ.activity} `;
                document.querySelector("#edit_first_name").value = `${individ.first_name ? individ.first_name : individ.name} `;
                document.querySelector("#edit_last_name").value = `${individ.last_name ? individ.last_name : ''} `;
            }
        })
    })
};

document.querySelector(".edit_contact_modal").addEventListener("click", (e) => {
    //close modal on click to outer area
    if (e.target.classList.contains("edit_contact_modal") | e.target.classList.contains("edit_contact_cancel")) {
        document.querySelector(".edit_contact_modal").classList.toggle("active");
    } else if (e.target.classList.contains("edit_contact_done")) {//when edit is done

        let firstName = document.querySelector("#edit_first_name").value;
        let lastName = document.querySelector("#edit_last_name").value;

        let DATA_from_local_storage = JSON.parse(localStorage.getItem("DATA"));
        // refresh data with new changes
        Object.keys(DATA_from_local_storage).forEach((tab) => {
            DATA_from_local_storage[tab].forEach((individ) => {
                if (individ.user_name === selected_chat_username) {
                    if(individ.name){
                        individ.name = `${firstName ? firstName : ''} ${lastName ? lastName : ''}`;
                    }else{
                        individ.first_name = firstName;
                        individ.last_name = lastName;
                    }
                }
            })
        });
        localStorage.setItem("DATA", JSON.stringify(DATA_from_local_storage));//sets to local storage
        document.querySelector(".edit_contact_modal").classList.toggle("active");//closes modal
        //renders new data to right AND middle columns
        document.querySelectorAll(".chat_item").forEach((what)=>{
            if(what.getAttribute("data-username") === `${selected_chat_username}`){
                fill_middle_column(what)
            }
        })
        fill_right_column();

    }
});













// document.querySelectorAll(".row_2 input").forEach((input) => {
//     input.addEventListener("keyup", (e) => {
//         console.log(e.target.nodeName);
//         if (e.target.nodeName === "INPUT"){
//             let firstName = "ASa"

//         }
//     })
// })

















/***garbage  ISHLAMAGAN KODLAR

 *     // sets event listener for chat items
    // document.querySelectorAll(".chat-item").forEach((item)=>{
    //     item.addEventListener("click", fill_middle_column(e));
    //     console.log("e lis qoshildi")
    // });//USE ONCLICK(THIS)   instead



        // document.querySelector(".carousel-items").children.map((item, index) => {
    //     if (item.classList.contains("active")) {
    //         removed_index = index;
    //         item.classList.remove("active");
    //     }else if(removed_index+1 ===index){
    //         item.classList.add("active")
    //     }

    // });


      // Object.keys(individ).forEach((property)=>{
                //     document.querySelector(".right-main").innerHTML += `
                // <div class="right-main-item">
                //     <div class="r_icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
                //     <div class="r_text">
                //         <div>+99 890 152 75 11</div>
                //         <span>Phone</span>
                //     </div>
                // </div>
                //     `;
                // })
 */