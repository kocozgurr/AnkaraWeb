document.addEventListener("DOMContentLoaded", function ()
{
    // API isteğini yap
    fetch("https://turkiyeapi.dev/api/v1/provinces?name=ankara")
        .then(response => response.json())
        .then(data =>
        {
            // Her ilin ve ilçenin verisini HTML içinde göster
            data.data.forEach(il =>
            {
                veriyiGoster(il);
            });
        })
        .catch(error => console.error('Hata:', error));
});

function veriyiGoster(data)
{
    // Container elementini oluştur
    const container = document.getElementById("veri-container");

    // Her il için ayrı bir div oluştur
    const ilContainer = document.createElement("div");
    ilContainer.classList.add("il-container");

    // Veriyi görüntülemek için HTML elementleri oluştur
    const adElementi = document.createElement("p");
    adElementi.textContent = data.name;

    const nufusElementi = document.createElement("p");
    nufusElementi.textContent = "Nüfus: " + data.population;

    // Her ilçe için ayrı bir div olustuma
    const ilceListesi = document.createElement("div");
    ilceListesi.classList.add("ilce-listesi");

    // İlçeleri döngüyle eklem
    data.districts.forEach(ilce =>
    {
        const ilceContainer = document.createElement("div");
        ilceContainer.classList.add("ilce-container");

        const ilceElementi = document.createElement("p");
        ilceElementi.textContent = ilce.name;

        const ilceNufusElementi = document.createElement("p");
        ilceNufusElementi.classList.add("ilce-nufus");
        ilceNufusElementi.textContent = "Nüfus: " + ilce.population;

        ilceContainer.appendChild(ilceElementi);
        ilceContainer.appendChild(ilceNufusElementi);
        ilceListesi.appendChild(ilceContainer);
    });

    // Elementleri container'a ekle
    ilContainer.appendChild(adElementi);
    ilContainer.appendChild(nufusElementi);
    ilContainer.appendChild(ilceListesi);

    // Her ilin div'ini ana container'a ekle
    container.appendChild(ilContainer);
}