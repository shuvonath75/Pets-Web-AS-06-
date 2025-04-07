
// create load categories
const load_All_Categories = async () => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
    .then(res=>res.json())
    .then(data=>display_All_Categories(data.pets))
    .catch((error)=>console.log(error))

};

const loadCategoryPets = (petname) => {

    // alert(petname);
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${petname}`)
    .then(res =>res.json())
    .then(data=>display_All_Categories(data.data));
};

const Pets_image = (id) =>
{
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then(res=>res.json())
    .then(data=>Show_image(data.petData))
    .catch(error=>console.log(error))

}
const Show_image = (petData) =>
{
    console.log(petData);
    const image_container = document.getElementById('Show_image');
    const image = document.createElement('div');
    image.innerHTML=
    `
    <div class="">

           <img class="rounded-lg object-cover w-full" src="${petData.image}">

    </div>
    `
    image_container.appendChild(image);
    ;
}

// // Active Button

function ActiveBtn(petid){
    
    const activeBtn = document.getElementById(`Adopt_${petid}`);
    console.log(activeBtn);
    activeBtn.classList.add("activeBtn");
};

// load Details button
const loadDetails = async(ID) =>
{
    console.log(ID);
    const uri = `https://openapi.programming-hero.com/api/peddy/pet/${ID}`
    const res = await fetch(uri);
    const data = await res.json();
    DisplayDetails(data.petData); 
}

{/* <div class=" flex flex-col border-inherit p-2 space-y-2">
<h2 class="card-title">${data.pet_name}</h2>

<p class="text-[#131313b3] font-normal text-base flex gap-2">
<img class="w-6" src="images/icons/peticon1.svg" alt="">
Breed : ${data.breed}
</p>
<p class="text-[#131313b3] font-normal text-base flex gap-2">
<img class="w-6" src="images/icons/peticon2.svg" alt="">
Birth : ${data.date_of_birth}
</p>
<p class="text-[#131313b3] font-normal text-base flex gap-2">
<img class="w-6" src="images/icons/Frame (1).svg" alt="">
Gender : ${data.gender}
</p>
<p class="text-[#131313b3] font-normal text-base flex gap-2 mb-3">
<img class="w-6" src="images/icons/Frame (2).svg" alt="">
Price : ${data.price}$
</p>

<hr class="text-gray-300">
<br>
</div> */}


const DisplayDetails = (pet) =>
{
        console.log(pet);
        const detailsContainer = document.getElementById("modal-content");
    
        detailsContainer.innerHTML=
        `
        <figure>
        <img class="w-full"
        src=${pet.image}
        alt="Shoes" />
        </figure>
        <div class=" border-inherit p-2 space-y-2">
        <h2 class="text-center font-bold text-xl">${pet.pet_name}</h2>

        <div class="flex justify-evenly gap-1">
        <div>
        <p class="text-[#131313b3] font-normal text-base flex gap-2">
        <img class="w-6" src="images/icons/peticon1.svg" alt="">
        Breed : ${pet.breed}
        </p>
        <p class="text-[#131313b3] font-normal text-base flex gap-2">
        <img class="w-6" src="images/icons/Frame (1).svg" alt="">
        Gender : ${pet.gender}
        </p>
        <p class="text-[#131313b3] font-normal text-base flex gap-2">
        <img class="w-6" src="images/icons/Frame (1).svg" alt="">
        Vaccinated Status : ${pet.vaccinated_status}
        </p>      </div>

        <div>
        <p class="text-[#131313b3] font-normal text-base flex gap-2">
        <img class="w-6" src="images/icons/peticon2.svg" alt="">
        Birth : ${pet.date_of_birth}
        </p>
        <p class="text-[#131313b3] font-normal text-base flex gap-2 mb-3">
        <img class="w-6" src="images/icons/Frame (2).svg" alt="">
        Price : ${pet.price}$
        </p> </div>
        </div>
        
        <hr class="text-gray-300">
        <br>

        <div class="gap-2">
            <h2 class="card-title ">Details Information</h2>
            <p class="text-[#131313b3] font-normal text-base flex gap-2">
        ${pet.pet_details}
        </p>

        <p></p>
        </div>

        </div>
        `;
    
    document.getElementById("customModal").showModal();
}



const display_All_Categories =(pets) => {

    const PetsContainer = document.getElementById('All_categories');

    PetsContainer.innerHTML="";

    if(pets.length == 0)
    {
        PetsContainer.classList.remove("grid");
        PetsContainer.innerHTML=
        `
        <div class="border border-gray-300 rounded-2xl py-20 card-body items-center text-center gap-4 ">
              <img class="w-44" src="images/error.webp" alt="">
              <h2 class="text-3xl font-bold">No Information Available</h2>
              <p class="text-gray-800">It is a long established fact that a reader will be distracted by the readable content of a page when looking at <br>
                its layout. The point of using Lorem Ipsum is that it has a.</p>
            </div>

        `;
        return;
    }
    else
    {
        PetsContainer.classList.add("grid");
    }

    pets.forEach((pet) => {
        const card = document.createElement("div");
        card.classList="card gap-4 border border-gray-300 rounded-2xl p-4";
        card.innerHTML =
        `
        <figure>
        <img class="w-full"
        src=${pet.image}
        alt="Shoes" />
        </figure>
        <div class=" flex flex-col border-inherit p-2 space-y-2">
        <h2 class="card-title">${pet.pet_name}</h2>

        <p class="text-[#131313b3] font-normal text-base flex gap-2">
        <img class="w-6" src="images/icons/peticon1.svg" alt="">
        Breed : ${pet.breed}
        </p>
        <p class="text-[#131313b3] font-normal text-base flex gap-2">
        <img class="w-6" src="images/icons/peticon2.svg" alt="">
        Birth : ${pet.date_of_birth}
        </p>
        <p class="text-[#131313b3] font-normal text-base flex gap-2">
        <img class="w-6" src="images/icons/Frame (1).svg" alt="">
        Gender : ${pet.gender}
        </p>
        <p class="text-[#131313b3] font-normal text-base flex gap-2 mb-3">
        <img class="w-6" src="images/icons/Frame (2).svg" alt="">
        Price : ${pet.price}$
        </p>
        
        <hr class="text-gray-300">
        <br>
        <div class="flex w-11/12 justify-between gap-3">
              <button id="Like_btn" onclick="Pets_image('${pet.petId}')" class="btn text-white rounded-md "> <img class="w-4" src="images/icons/like.png" alt=""></button>

              <button id="Adopt_${pet.petId}" onclick="ActiveBtn('${pet.petId}')" class="btn font-bold text-[#0e7981] rounded-md">Adopt</button>

              <button id="Details')" onclick = "loadDetails('${pet.petId}')" class="btn font-bold text-[#0E7A81] rounded-md">Details</button>    
        </div>

        </div>
        `;
        
        PetsContainer.appendChild(card);
        
    });
}


load_All_Categories();
// loadCategoryPets();