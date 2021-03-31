const about = {
	mission: "We are an expert group in architectural design and interior design with a residential approach, where we generate creatve, authentic and innovative solutions, achieving results that exceed the expectations of each client.",
	vision: "This is our vision",
	value: "This is our value"
};

let missionContent = document.querySelector("#mission-content");

let missionButtons = document.querySelector("div.mission").children;

for (let i = missionButtons.length - 1; i >= 0; i--) {
	missionButtons[i].onclick = e => {
		e.preventDefault();
		let content = e.target.dataset["content"];
		// Replace content
		missionContent.innerHTML = about[content];
		// Update active
		for (let i = missionButtons.length - 1; i >= 0; i--) {
			if (missionButtons[i].classList.contains("active")) {
				missionButtons[i].classList.remove("active");
				break;
			}
		}
		e.target.classList.add("active");
	}
}

let testimonialsPic = document.querySelector(".testimonials img");

let testimonialsButtons = document.querySelectorAll(".testimonials input");

for (let i = testimonialsButtons.length - 1; i >= 0; i--) {
	testimonialsButtons[i].onclick = e => {
		e.preventDefault();
		let pic = e.target.dataset["pic"];
		// Replace pic
		testimonialsPic.setAttribute("src", `assets/img/${pic}.jpg`);
		// Update checked
		for (let i = testimonialsButtons.length - 1; i >= 0; i--) {
			if (testimonialsButtons[i].checked) {
				console.log("got it:", testimonialsButtons[i]);
				testimonialsButtons[i].checked = false;
				break;
			}
		}
		e.target.check = true;
		console.log(e.target);
	}
}
