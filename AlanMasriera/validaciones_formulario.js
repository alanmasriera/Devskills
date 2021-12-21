const d = document

export default function contactFormValidations(){
    const $form = d.querySelector(".new-contact-form")
    const $inputs = d.querySelectorAll(".new-contact-form *[required]")
    $inputs.forEach(input => {
        const $span = d.createElement("span")
        $span.id = input.name
        $span.textContent = input.title
        $span.classList.add("new-contact-form-error", "none")
        input.insertAdjacentElement("afterend", $span)
    })
    d.addEventListener("keyup", (e) =>{
        if(e.target.matches(".new-contact-form [required]")){
            let $input = e.target
            let pattern = $input.pattern || $input.dataset.pattern
            
            if(pattern && $input.value !== ""){
                let regex = new RegExp(pattern)
                return !regex.exec($input.value)
                    ?d.getElementById($input.name).classList.add("is-active")
                    :d.getElementById($input.name).classList.remove("is-active")
            }
            if(!pattern){
                return $input.value === ""
                    ?d.getElementById($input.name).classList.add("is-active")
                    :d.getElementById($input.name).classList.remove("is-active")
            }
        }
    })

    d.addEventListener("submit", (e)=>{
        //e.preventDefault()
        const $loader = d.querySelector(".new-contact-form-loader")
        const $response = d.querySelector(".new-contact-form-response")

        $loader.classList.remove("none")
        setTimeout(() => {
            $loader.classList.add("none")
            $response.classList.remove("none")
            $form.reset()
            setTimeout(() => {$response.classList.add("none")}, 3000);
        }, 3000);
    })
}