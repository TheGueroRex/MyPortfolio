const createStars = () => {
  for (let i = 0; i < 200; i++) {
    const starbox = document.createElement("div");
    starbox.className = "star-box";

    let poseX = Math.random() * 10;
    starbox.style.setProperty("--poseX", poseX);

    let poseY = Math.random() * 10;
    starbox.style.setProperty("--poseY", poseY);

    let scale = Math.random() * 2;
    starbox.style.setProperty("--scale", scale);

    const star = document.createElement("span");
    star.className = "star";

    starbox.appendChild(star);

    nigthParticles.appendChild(starbox);
  }
}

const createStarsShooting = () => {
  for (let i = 0; i < 10; i++) {
    const starshooting = document.createElement("span");
    starshooting.className = "star-shooting";
    let poseX = Math.random() * 10;
    starshooting.style.setProperty("--poseX", poseX);
    let delay = Math.random() * 20;
    starshooting.style.animation =
      "animate-shooting 20s infinite linear " + delay + "s";

    nigthParticles.appendChild(starshooting);
  }
}

const createFireEffect = () => {
  for(let i = 0; i < 10; i++){
    let fireparticle = document.createElement("span");
    fireparticle.className = "fire-particle";

    let poseX = Math.random() * 10;
    fireparticle.style.setProperty("--poseX", poseX)

    let scale = Math.random() * 2.5;
    fireparticle.style.setProperty("--scale", scale);

    let delay = Math.random() * 6;
    fireparticle.style.animation =
      "animation-fire-particles 6s infinite linear " + delay + "s";

    fireEffect.appendChild(fireparticle);
  }
}


createStars();
createStarsShooting();
createFireEffect()


