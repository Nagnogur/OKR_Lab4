export function GoToPage() {
    let pages = document.getElementsByTagName("main")[0].children;
    let hash = document.location.hash.slice(1);
    for (let e of pages){
        e.classList.remove("hidden");
        if (e.id != hash){
            e.classList.add("hidden");
        }   
    }

}