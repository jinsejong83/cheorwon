document.addEventListener("DOMContentLoaded", function () {
    fetch('members.json')
    .then(response => response.json())
    .then(data => {
        let memberList = document.getElementById("member-list");
        memberList.innerHTML = "";
        data.forEach(member => {
            let div = document.createElement("div");
            div.classList.add("member-card");
            div.innerHTML = `<h3>${member.name}</h3>
                             <p>${member.description}</p>
                             <p>연락처: ${member.contact}</p>`;
            memberList.appendChild(div);
        });
    })
    .catch(error => console.log("데이터를 불러오는 중 오류 발생:", error));
});
