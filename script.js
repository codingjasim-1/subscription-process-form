function updProgress(step) {
  for (let i = 1; i <= 3; i++) {
    const bar = document.getElementById(`bar${i}`);
    if (i <= step) {
      bar.classList.add("active");
    } else {
      bar.classList.remove("active");
    }
  }
}

function showLoader(callback) {
  const loader = document.getElementById("loader");
  loader.style.display = "block";
  setTimeout(() => {
    loader.style.display = "none";
    callback();
  }, 1000);
}

function nextStep(currentStep) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (currentStep === 1 && name === "") {
    alert("Please enter your name");
    return;
  }
  if (currentStep === 2 && email === "") {
    alert("Please enter your email");
    return;
  }

  showLoader(() => {
    document.getElementById(`step${currentStep}`).classList.remove("active");
    document.getElementById(`step${currentStep + 1}`).classList.add("active");
    updProgress(currentStep + 1);
    gsap.fromTo(`#step${currentStep + 1}`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });
  });
}

function prevStep(currentStep) {
  showLoader(() => {
    document.getElementById(`step${currentStep}`).classList.remove("active");
    document.getElementById(`step${currentStep - 1}`).classList.add("active");
    updProgress(currentStep - 1);
    gsap.fromTo(`#step${currentStep - 1}`, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });
  });
}

function planInfo() {
  const info = document.getElementById("plan-info");
  const selected = document.getElementById("plan").value;

  if (selected === "basic") {
    info.textContent = "The Basic plan provides free entry-level access with the key features you need to begin.";
  } else if (selected === "pro") {
    info.textContent = "The Pro plan is ideal for professionals seeking deeper analytics and enhanced performance tools.";
  } else if (selected === "premium") {
    info.textContent = "Enjoy unlimited access, premium features, and dedicated priority support with the Premium plan..";
  }
}

planInfo();