const canvas = document.getElementById("bg")

const ctx = canvas.getContext("2d")

function resizefn(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizefn();

window.addEventListener("resize", resizefn)



const particles=[]
const count = 60
for(let i = 0; i < count; i++ ) {
    particles.push({
        x:Math.random() * canvas.width,
        y:Math.random() * canvas.height,
        vx:(Math.random()-0.5) * 0.3,
        vy:(Math.random()-0.5) * 0.3,
        r:Math.random() * 2 + 1
    })
}




function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for(const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if(p.x < 0){
            p.x = canvas.width
        }
        if(p.x > canvas.width){
            p.x = 0
        }
        if(p.y < 0){
            p.y = canvas.height
        }
        if(p.y > canvas.height){
            p.y = 0
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle ="rgba(238, 248, 246, 0.9)"
        ctx.fill()
    }
    requestAnimationFrame(animate)
}

animate()

