let box = document.querySelector("#main")


box.addEventListener("mouseout",()=>{
    console.log('left')
    gsap.to(box,{
        backgroundColor:'white'
    })
    }
)


box.addEventListener("mousemove",(element)=>{

    let positions = box.getBoundingClientRect()
    let centerposition = (250+positions.left)
    let mouseposition = element.clientX-positions.left

    if((positions.left+mouseposition)<centerposition){
        let redcolour = gsap.utils.mapRange(0,250,255,0,mouseposition)
        gsap.to(box,{
            backgroundColor:`rgb(${redcolour},0,0)`,
            ease:Power4,
    })
    }else{
        let bluecolour = gsap.utils.mapRange(250,500,0,255,mouseposition)
        gsap.to(box,{
                backgroundColor:`rgb(0,0,${bluecolour})`,
                ease:Power4,
        })
    }
    
})

