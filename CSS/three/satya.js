 // Throttling Function
const throttleFunction = (func, delay) => {
    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();

        // If difference is greater
        // than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}

document.querySelector('#main').addEventListener("mousemove", throttleFunction((details) => {

    let a = document.createElement('div')

    let img = document.createElement('img')
    img.setAttribute('src','https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww')

    gsap.to(img,{
        y:0,
        ease:Power1,
        duration:.3
    })
    gsap.to(img,{
        y:"100%",
        delay:.3,
        ease:Power1,
        duration:.5
    })
    a.classList.add('image')
    a.appendChild(img)

    
    a.style.left = details.clientX+'px';
    a.style.top = details.clientY+'px';
    document.body.appendChild(a)
    setTimeout(()=>{
        a.remove()
    },1400);

}, 150));
